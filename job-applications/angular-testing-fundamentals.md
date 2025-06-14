# Angular Testing Fundamentals - GFT Interview Preparation

## Overview
This guide covers essential Angular testing concepts and tools that are likely to be discussed in the GFT Technologies interview for the Senior Frontend Developer position.

## 1. Jasmine + Karma (Angular's Default Testing Framework)

### What is Jasmine?
- **Testing framework** that provides the syntax for writing tests
- Uses **describe()** and **it()** blocks to organize tests
- Provides **expectations** and **matchers** for assertions

### What is Karma?
- **Test runner** that executes tests in browsers
- Watches files and re-runs tests on changes
- Provides coverage reports

### Basic Jasmine Syntax:
```typescript
describe('Component or Service Name', () => {
  it('should do something specific', () => {
    // Arrange
    const expected = 'some value';
    
    // Act
    const result = someFunction();
    
    // Assert
    expect(result).toBe(expected);
  });
});
```

### Common Jasmine Matchers:
```typescript
expect(value).toBe(expected);           // Exact equality
expect(value).toEqual(expected);        // Deep equality
expect(value).toBeTruthy();            // Truthy value
expect(value).toBeFalsy();             // Falsy value
expect(array).toContain(item);         // Array contains item
expect(fn).toHaveBeenCalled();         // Function was called
expect(component.property).toBeDefined(); // Property exists
```

## 2. Jest (Alternative Testing Framework)

### What is Jest?
- Facebook's testing framework
- **Faster execution** than Jasmine+Karma
- Built-in **snapshot testing**
- Better **mocking capabilities**
- Runs tests in Node.js (no browser needed)

### Key Jest Advantages:
```typescript
// Snapshot testing
expect(component).toMatchSnapshot();

// Better mocking
const mockFn = jest.fn();
mockFn.mockReturnValue('mocked value');

// Async testing
await expect(promise).resolves.toBe('result');
```

### When to Choose Jest over Jasmine:
- Large projects needing faster test execution
- Projects requiring extensive mocking
- Teams preferring snapshot testing
- CI/CD pipelines needing quick feedback

## 3. Angular Testing Utilities

### TestBed
- **Angular's testing module** for configuring test environment
- Creates a testing module similar to @NgModule
- Provides dependency injection for tests

```typescript
import { TestBed } from '@angular/core/testing';

beforeEach(() => {
  TestBed.configureTestingModule({
    declarations: [MyComponent],
    imports: [FormsModule, HttpClientTestingModule],
    providers: [MyService]
  });
});
```

### ComponentFixture
- **Wrapper around component instance** for testing
- Provides access to component and its DOM element
- Controls change detection manually

```typescript
import { ComponentFixture } from '@angular/core/testing';

let component: MyComponent;
let fixture: ComponentFixture<MyComponent>;

beforeEach(() => {
  fixture = TestBed.createComponent(MyComponent);
  component = fixture.componentInstance;
  fixture.detectChanges(); // Trigger change detection
});

it('should display title', () => {
  component.title = 'Test Title';
  fixture.detectChanges(); // Update DOM
  
  const compiled = fixture.nativeElement;
  expect(compiled.querySelector('h1').textContent).toContain('Test Title');
});
```

### Key Testing Utilities:
```typescript
// Debugging elements
const debugElement = fixture.debugElement;
const nativeElement = fixture.nativeElement;

// Query DOM elements
const button = fixture.debugElement.query(By.css('button'));
const allButtons = fixture.debugElement.queryAll(By.css('button'));

// Trigger events
button.nativeElement.click();
button.triggerEventHandler('click', null);
```

## 4. Spectator (Simplified Angular Testing)

### What is Spectator?
- **Third-party library** that simplifies Angular testing
- Reduces boilerplate code
- Provides cleaner, more readable tests
- Built on top of Angular Testing Utilities

### Basic Spectator Usage:
```typescript
import { createComponentFactory, Spectator } from '@ngneat/spectator';

describe('MyComponent', () => {
  let spectator: Spectator<MyComponent>;
  const createComponent = createComponentFactory({
    component: MyComponent,
    imports: [FormsModule]
  });

  beforeEach(() => spectator = createComponent());

  it('should display title', () => {
    spectator.setInput('title', 'Test Title');
    
    expect(spectator.query('h1')).toHaveText('Test Title');
  });
});
```

### Spectator Advantages:
- Less boilerplate code
- Cleaner test syntax
- Better element querying
- Simplified mocking
- Built-in utilities for common scenarios

## 5. Mock Strategies

### SpyOn (Jasmine)
- **Monitor and control** function calls
- Can track calls, arguments, and return values
- Can override function behavior

```typescript
// Spy on existing method
spyOn(service, 'getData').and.returnValue(of(mockData));

// Spy on property
spyOnProperty(service, 'currentUser', 'get').and.returnValue(mockUser);

// Verify calls
expect(service.getData).toHaveBeenCalled();
expect(service.getData).toHaveBeenCalledWith('parameter');
expect(service.getData).toHaveBeenCalledTimes(1);
```

### jasmine.createSpy()
- **Create mock functions** from scratch
- Useful when you need a standalone mock function

```typescript
const mockCallback = jasmine.createSpy('callback');
component.onClick = mockCallback;

component.handleClick();

expect(mockCallback).toHaveBeenCalled();
```

### Common Mocking Scenarios:
```typescript
// Mock HTTP calls
const httpSpy = spyOn(http, 'get').and.returnValue(of(mockResponse));

// Mock router navigation
const routerSpy = spyOn(router, 'navigate');

// Mock localStorage
spyOn(Storage.prototype, 'getItem').and.returnValue('mock-value');

// Mock observables
const mockObservable = of(mockData);
spyOn(service, 'getData').and.returnValue(mockObservable);
```

## 6. Common Interview Questions & Answers

### Q: "How do you test Angular components?"
**A:** "I use TestBed to configure the testing module, create a ComponentFixture to get the component instance, and use fixture.detectChanges() to trigger change detection. I test both the component logic and DOM interactions."

### Q: "What's the difference between Jasmine and Jest?"
**A:** "Jasmine is Angular's default testing framework that runs in browsers via Karma. Jest is faster, runs in Node.js, has built-in snapshot testing, and better mocking capabilities. Jest is better for large projects needing faster execution."

### Q: "How do you mock HTTP services?"
**A:** "I use Angular's HttpClientTestingModule and HttpTestingController, or spy on the service methods with spyOn() and return mock observables using of() or throwError()."

### Q: "What's TestBed used for?"
**A:** "TestBed is Angular's testing utility that creates a testing module. It configures components, services, and dependencies needed for testing, similar to how @NgModule works in the application."

### Q: "How do you test RxJS observables?"
**A:** "I use marble testing for complex scenarios, or simply subscribe to observables in tests and verify the emitted values. For HTTP calls, I mock the service to return of(mockData) or throwError()."

## 7. Practical Testing Examples for Banking/Financial Apps

### Form Validation Testing:
```typescript
it('should validate IBAN format', () => {
  const ibanControl = component.form.get('iban');
  
  ibanControl.setValue('ES9121000418450200051332');
  expect(ibanControl.valid).toBeTruthy();
  
  ibanControl.setValue('invalid-iban');
  expect(ibanControl.hasError('invalidIban')).toBeTruthy();
});
```

### Error Handling Testing:
```typescript
it('should display error message on API failure', () => {
  const errorResponse = new HttpErrorResponse({ status: 500 });
  spyOn(bankingService, 'getAccountBalance').and.returnValue(throwError(errorResponse));
  
  component.loadBalance();
  
  expect(component.errorMessage).toBe('Failed to load balance');
  expect(component.showError).toBeTruthy();
});
```

### Security Testing:
```typescript
it('should mask sensitive data', () => {
  component.accountNumber = '1234567890123456';
  
  expect(component.maskedAccountNumber).toBe('****-****-****-3456');
});
```

## 8. Key Testing Principles for Enterprise Applications

1. **AAA Pattern**: Arrange, Act, Assert
2. **Test Isolation**: Each test should be independent
3. **Mock External Dependencies**: Don't test external APIs
4. **Test Behavior, Not Implementation**: Focus on what, not how
5. **Coverage vs Quality**: Aim for meaningful tests, not just high coverage
6. **Fast Feedback**: Tests should run quickly in CI/CD

## 9. Testing Strategy for Angular Migrations

When migrating from AngularJS to Angular (relevant to your experience):

```typescript
// Test compatibility layers
it('should handle legacy data format', () => {
  const legacyUser = { user_name: 'john', user_id: 123 };
  
  const modernUser = migrationService.transformUser(legacyUser);
  
  expect(modernUser).toEqual({ userName: 'john', userId: 123 });
});

// Test feature flags
it('should use new component when feature flag enabled', () => {
  featureService.setFlag('useNewComponent', true);
  
  const component = fixture.componentInstance;
  
  expect(component.shouldUseNewComponent).toBeTruthy();
});
```

## 10. Quick Reference Commands

```bash
# Run tests
ng test

# Run tests with coverage
ng test --code-coverage

# Run tests once (for CI)
ng test --watch=false --browsers=ChromeHeadless

# Run specific test file
ng test --include="**/my-component.spec.ts"
```

---

**Interview Tip**: Even if you haven't used these tools extensively, understanding the concepts and being able to discuss testing strategies, the importance of unit tests in enterprise applications, and your willingness to learn these tools quickly will be valuable in the interview.

Remember to mention your experience with testing in general, even if not specifically with these Angular testing tools, and emphasize your ability to quickly adapt to new testing frameworks based on your solid development background.