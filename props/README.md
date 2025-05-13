# 📦 React Props Guide

**Props** (short for "properties") are a key concept in React. They allow data to be passed from one component to another, enabling dynamic and reusable UI components.

---

## 📘 What are Props?

- Props are **read-only** attributes used to pass data **from parent to child components**.
- They behave like **function parameters** and are accessed using `props` inside the child component.

---

## ✨ Why Use Props?

- 🔁 Make components **reusable** with dynamic data.
- 📤 Pass **data, functions, or elements** from one component to another.
- 📚 Keep components **modular and maintainable**.

---

## 🛠 How to Use Props

### ✅ Step 1: Pass Props from Parent

```jsx
function App() {
  return <Greeting name="Hasibul" />;
}
```

### ✅ Step 2: Receive Props in Child

```jsx
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```

Or using **destructuring**:

```jsx
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}
```

---

## 🔃 Passing Multiple Props

```jsx
<App 
  title="Welcome!" 
  subtitle="Glad you're here" 
  isLoggedIn={true} 
/>
```

```jsx
function Header({ title, subtitle, isLoggedIn }) {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      {isLoggedIn && <p>You are logged in.</p>}
    </div>
  );
}
```

---

## 🔗 Passing Functions as Props

```jsx
function App() {
  const showAlert = (msg) => alert(msg);

  return <Button onClick={() => showAlert("Hello from prop!")} />;
}
```

```jsx
function Button({ onClick }) {
  return <button onClick={onClick}>Click Me</button>;
}
```

---

## 🎯 Props vs State

| Feature       | Props                       | State                        |
|---------------|-----------------------------|------------------------------|
| Mutability    | Immutable (read-only)       | Mutable                      |
| Scope         | Passed from parent          | Managed inside component     |
| Use case      | Communication               | Component behavior/data      |

---

## 🧩 Using `children` Prop

Every component has a special `props.children` prop to display nested elements.

```jsx
function Layout({ children }) {
  return <div className="wrapper">{children}</div>;
}

// Usage
<Layout>
  <p>This is inside the layout.</p>
</Layout>
```

---

## 🧪 PropTypes (Optional)

To add type checking to props:

```bash
npm install prop-types
```

```jsx
import PropTypes from 'prop-types';

function Greeting({ name }) {
  return <h1>Hello, {name}</h1>;
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
};
```

---

## ✅ Best Practices

- Use **destructuring** for cleaner code.
- Use **default props** if needed.
- Props should be **pure and not mutated**.
- Use **PropTypes** or **TypeScript** for validation.

---

## 📌 Summary

- Props make components dynamic and reusable.
- They are passed from parent to child and are read-only.
- Functions, elements, and complex objects can be passed as props.

---

Happy coding! 🚀