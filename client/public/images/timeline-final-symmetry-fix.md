# 🧩 Timeline Visual Symmetry Fix (Izquierda ↔ Derecha)

## 🎯 Problema

Después de aplicar los ajustes anteriores, el lado izquierdo (Profesional) se ve bien, pero el lado derecho (Personal) está pegado a la línea central, generando desequilibrio visual.

---

## ✅ Solución definitiva

### 1. Asegura simetría de padding

**Antes (lado derecho):**
```tsx
<div className="pl-4 md:pl-4 md:w-1/2 mt-2 md:mt-0">
```

**Después (simétrico al lado izquierdo):**
```tsx
<div className="hidden md:block w-1/2 pl-4 text-left">
```

---

### 2. Asegura que ambos lados estén visibles solo en `md+`

Esto evita diferencias entre mobile y escritorio que afectan el diseño.

```tsx
<div className="hidden md:block w-1/2 pr-4 text-left">  // lado profesional
<div className="hidden md:block w-1/2 pl-4 text-left">  // lado personal
```

---

### 3. Elimina márgenes innecesarios

Borra `mt-2 md:mt-0` del lado derecho. No se necesita cuando ambos lados ya están alineados verticalmente.

---

## 🧪 Resultado esperado

- Misma separación entre contenido y línea central.
- Títulos y descripciones alineados perfectamente en vertical.
- Composición visual mucho más limpia y balanceada.

---

¡Con este cambio, tu línea del tiempo quedará de exposición! ✨