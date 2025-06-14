# Interview Preparation Guide - Alberto Bueno Lamana

## 🎯 Overview
Comprehensive preparation guide for Angular/Frontend developer interviews targeting 35k€ salary range.

---

## 📋 Technical Interview Preparation

### Angular Deep Dive

#### Angular 19 Specific Features (Your Advantage)
```typescript
// Standalone components (Angular 14+, perfected in 19)
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `<div>{{user.name}}</div>`
})
export class UserComponent { }

// Signal-based state management (Angular 16+)
export class UserService {
  users = signal<User[]>([]);
  
  addUser(user: User) {
    this.users.update(users => [...users, user]);
  }
}

// Control flow syntax (Angular 17+)
@if (user) {
  <div>{{user.name}}</div>
} @else {
  <div>Loading...</div>
}
```

#### Migration Expertise (Your Specialty)
**Common Questions:**
- "How did you approach the AngularJS to Angular migration?"
- "What challenges did you face during the Polymer to Angular migration?"
- "How do you ensure compatibility during incremental migrations?"

**Your Answers:**
```
For the Morabanc AngularJS to Angular 13 migration:
1. Created a hybrid application using ngUpgrade
2. Implemented component-by-component migration strategy
3. Established comprehensive testing for both old and new components
4. Used feature flags to enable gradual rollout
5. Maintained backward compatibility throughout the process
6. Achieved 40% performance improvement post-migration
```

#### Performance Optimization
**Topics to Cover:**
- OnPush change detection strategy
- Lazy loading modules and components
- Bundle size optimization with webpack
- Angular Universal for SSR
- Service worker implementation

**Example Answer:**
```typescript
// OnPush optimization example
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `...`
})
export class OptimizedComponent {
  @Input() data: Data;
  
  constructor(private cdr: ChangeDetectorRef) {}
  
  updateData(newData: Data) {
    this.data = newData;
    this.cdr.markForCheck(); // Manual change detection
  }
}
```

### RxJS & Reactive Programming

#### Essential Operators
```typescript
// Combination operators
const userWithProfile$ = this.user$.pipe(
  switchMap(user => this.profileService.getProfile(user.id)),
  catchError(error => of(null))
);

// Error handling patterns
const dataStream$ = this.apiService.getData().pipe(
  retry(3),
  catchError(error => {
    this.errorHandler.handle(error);
    return throwError(error);
  })
);

// Memory leak prevention
ngOnDestroy() {
  this.subscription$.unsubscribe();
  // Or use takeUntil pattern
  this.dataStream$.pipe(
    takeUntil(this.destroy$)
  ).subscribe();
}
```

#### Common RxJS Questions
1. **"Difference between switchMap, mergeMap, concatMap?"**
   - switchMap: Cancels previous, good for search
   - mergeMap: Runs concurrent, good for independent operations
   - concatMap: Sequential execution, good for order-dependent operations

2. **"How do you handle memory leaks in Angular?"**
   - Unsubscribe in ngOnDestroy
   - Use async pipe in templates
   - takeUntil pattern with destroy subject

### Testing Knowledge (Based on your testing guide)

#### Unit Testing Examples
```typescript
describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let userService: jasmine.SpyObj<UserService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('UserService', ['getUsers']);
    
    TestBed.configureTestingModule({
      declarations: [UserComponent],
      providers: [{ provide: UserService, useValue: spy }]
    });
    
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService) as jasmine.SpyObj<UserService>;
  });

  it('should load users on init', () => {
    const mockUsers = [{ id: 1, name: 'Test' }];
    userService.getUsers.and.returnValue(of(mockUsers));
    
    component.ngOnInit();
    
    expect(component.users).toEqual(mockUsers);
  });
});
```

### System Design Questions

#### Frontend Architecture
```
API Layer
↓
State Management (NgRx/Services)
↓
Smart Components (Containers)
↓
Dumb Components (Presentational)
↓
UI Library (Material/Custom)
```

#### Scalability Patterns
- Lazy loading modules
- Micro-frontend architecture
- Component libraries
- State management strategies
- Caching strategies

---

## 🗣️ Behavioral Interview Preparation

### STAR Method Stories

#### 1. Migration Leadership (Morabanc Project)
**Situation**: Banking application needed migration from AngularJS to Angular 13
**Task**: Lead the technical migration while maintaining system availability
**Action**: 
- Created incremental migration strategy with ngUpgrade
- Implemented comprehensive testing at each phase
- Mentored team on Angular best practices
- Coordinated with stakeholders on rollout timeline
**Result**: 40% performance improvement, zero downtime, successful team transition

#### 2. Team Collaboration (MainRail International Project)
**Situation**: Working with international teams across time zones
**Task**: Ensure project continuity and knowledge sharing
**Action**:
- Established clear communication protocols
- Created documentation standards
- Facilitated daily standups across time zones
- Mentored junior developers remotely
**Result**: Delivered to 5+ enterprise clients on time, 85% code coverage

#### 3. Problem Solving (CLUN API Project)
**Situation**: Needed to create API integration system from scratch
**Task**: Design and implement comprehensive API with multiple client integrations
**Action**:
- Analyzed client requirements and designed flexible architecture
- Implemented Spring Boot 3 with Java 21
- Created comprehensive Swagger documentation
- Built robust error handling and monitoring
**Result**: Successfully integrated multiple client platforms, became sole responsible developer

#### 4. Performance Optimization
**Situation**: Banking application had slow load times affecting user experience
**Task**: Improve application performance while maintaining functionality
**Action**:
- Analyzed bundle size and identified optimization opportunities
- Implemented lazy loading and OnPush change detection
- Optimized API calls and caching strategies
- Conducted performance testing and monitoring
**Result**: Achieved 40% faster load times, improved user satisfaction

### Common Behavioral Questions & Answers

#### "Why do you want to work here?"
**Framework**: Research + Alignment + Enthusiasm

**For Consulting (Everis, Indra):**
"I'm excited about [Company] because of your reputation for digital transformation projects. Having led complex migrations myself, I understand the challenges organizations face modernizing legacy systems. Your focus on [specific company strength] aligns with my experience in [relevant experience], and I'm eager to apply my Angular expertise to help diverse clients achieve their technology goals."

**For Product Companies (AWS, Workato):**
"I'm passionate about [Company] because you're building products that directly enable other organizations to innovate. My AWS certification gives me deep appreciation for how your services empower businesses. The opportunity to work on [specific product] that impacts [specific user base] aligns perfectly with my goal of creating technology that makes a meaningful difference at scale."

**For Local Companies (Tecnalia, Grupo Sesé):**
"I'm excited about [Company] because of your significant impact on the Aragón region and your commitment to innovation. Having built my career in Zaragoza, I want to contribute to companies that are advancing our local technology ecosystem. Your work in [specific area] represents exactly the kind of meaningful, local impact I want to be part of."

#### "What's your biggest weakness?"
**Framework**: Real weakness + Improvement actions + Progress made

"Earlier in my career, I focused heavily on technical implementation without always considering the broader business impact. I realized this when working on the banking project—while my code was technically sound, I wasn't always translating technical decisions into business value for stakeholders.

To address this, I started attending business requirements meetings and asking questions about user impact. I also began documenting technical decisions in terms of business benefits. Now, when I propose technical solutions, I always include the business justification and expected user impact. This approach helped significantly during the CLUN API project, where I could clearly communicate technical trade-offs to non-technical stakeholders."

#### "Where do you see yourself in 5 years?"
**Framework**: Growth trajectory + Company alignment + Mutual benefit

"In five years, I see myself as a technical leader who bridges the gap between cutting-edge frontend development and business strategy. I want to continue growing my expertise in Angular and cloud architectures while developing skills in system design and technical leadership.

Specifically, I'd like to be leading migration projects and mentoring teams through complex technical transformations—similar to what I've done, but at larger scale. I'm also interested in the intersection of AI-assisted development and traditional software engineering, which I believe will transform how we build applications.

At [Company], I see this path aligning with [specific growth opportunity at company], and I believe my experience with migrations and team leadership would enable me to contribute to [company-specific strategic goal]."

---

## 💰 Salary Negotiation Strategy

### Your Value Proposition
**Quantifiable Achievements:**
- 6+ years Angular development experience
- AWS Certified Developer credential
- Led 2 major migration projects successfully
- Achieved 40% performance improvement
- Increased code coverage to 85%
- Served 5+ enterprise clients
- Mentored junior developers

### Salary Positioning
**Current**: 30k€
**Target**: 35k€
**Justification Range**: 33k-37k€

**Negotiation Script:**
"Based on my research of the market for Angular developers with my experience level, and considering my AWS certification, migration leadership experience, and proven track record with enterprise clients, I believe a salary in the range of 33k-37k€ would be appropriate. My specific experience with Angular 19 and successful migration projects brings immediate value that justifies this range."

### Benefits Beyond Salary
- Remote work flexibility
- Professional development budget
- Conference attendance
- Certification training (additional AWS certs)
- Equipment/tooling allowances
- Flexible hours

---

## 🎯 Company-Specific Preparation

### Technical Questions by Company Type

#### Consulting Companies (Everis, Indra, GFT)
**Focus**: Adaptability, client communication, diverse projects
- "How do you handle switching between different client technology stacks?"
- "Describe a time you had to explain technical concepts to non-technical stakeholders"
- "How do you ensure code quality across different project timelines?"

#### Product Companies (AWS, Workato, Celonis)
**Focus**: Scale, performance, product impact
- "How would you design a component library for multiple applications?"
- "Describe your approach to performance optimization"
- "How do you balance technical debt with feature delivery?"

#### Local Companies (Tecnalia, Grupo Sesé, CAF, BSH)
**Focus**: Versatility, long-term commitment, local impact
- "How do you stay current with technology while working on diverse projects?"
- "Describe your approach to maintaining legacy systems while introducing new technology"
- "How would you contribute to our local technology community?"

### Research Checklist by Company
- [ ] Recent news and announcements
- [ ] Technology stack and job requirements
- [ ] Company culture and values
- [ ] Recent projects or case studies
- [ ] Team structure and growth plans
- [ ] Local presence and community involvement

---

## 📱 Day-of-Interview Checklist

### Technical Setup (for remote interviews)
- [ ] Test video/audio setup 30 minutes prior
- [ ] Ensure stable internet connection
- [ ] Have backup connection ready (mobile hotspot)
- [ ] Clean, professional background
- [ ] Good lighting setup

### Materials Ready
- [ ] Copy of CV
- [ ] Company research notes
- [ ] Questions to ask interviewer
- [ ] Code examples or portfolio ready to share
- [ ] Notebook for taking notes

### Questions to Ask Interviewers

#### For Technical Team Members:
- "What does a typical development workflow look like here?"
- "How do you handle technical debt and code quality?"
- "What's the most challenging technical problem the team has solved recently?"
- "How do you approach testing and deployment?"

#### For Managers/HR:
- "What are the biggest challenges facing the team right now?"
- "How do you measure success in this role?"
- "What opportunities are there for professional development?"
- "Can you tell me about the team culture and collaboration style?"

#### For Everyone:
- "What do you enjoy most about working here?"
- "How has the company/team changed in the past year?"
- "What would success look like in the first 6 months?"

---

*Preparation guide created: 2025-01-13*
*Next review: Before each interview*