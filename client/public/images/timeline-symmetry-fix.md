# 🛠 Timeline Symmetry Fix – Alineación Profesional vs Personal

## 🎯 Problema

Actualmente, el timeline tiene un desequilibrio visual entre el lado **Profesional** (izquierda) y **Personal** (derecha):

- Desalineación de títulos y descripciones.
- Alineación de texto inconsistente (`text-right` vs `text-left`).
- Espaciado vertical desigual.

---

## ✅ Cambios necesarios

### 1. Alinear texto a la izquierda en el lado profesional

```diff
- <div className="hidden md:block w-1/2 pr-4 text-right">
+ <div className="hidden md:block w-1/2 pr-4 text-left">
```

---

### 2. Unificar el contenedor interno

```diff
- <div className="inline-flex flex-col items-end w-full max-w-[600px]">
+ <div className="inline-flex flex-col items-start w-full max-w-[600px]">
```

---

### 3. Usar mismo espaciado vertical en ambos lados

```diff
- <div className="mb-2 pb-8">
+ <div className="mb-4 pb-4">
```

Haz esto en las dos columnas: profesional y personal.

---

### 4. Verificar altura mínima de tarjetas

Confirma que ambas tarjetas tengan:

```tsx
min-h-[74px]
```

Esto garantiza consistencia cuando un lado tiene menos texto que el otro.

---

## 🧪 Resultado Esperado

- Mejora visual simétrica y centrada.
- Las secciones de ambos lados estarán perfectamente alineadas.
- La línea central parecerá un verdadero eje de simetría.

---

## 🧩 Tip extra (opcional)

Añadir un pequeño `ring` o `border` al botón central del año puede reforzar la percepción visual de simetría.

---

¡Listo para dejarlo 10/10! 🚀