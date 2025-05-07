
# ⚛️ React Components Guide

React Components are the building blocks of any React application. They define how the UI looks and behaves. This guide provides a complete overview of components in React.

---

## 📦 What is a Component?

A **component** in React is a JavaScript function or class that optionally accepts inputs (called **props**) and returns a React element that describes how a section of the UI should appear.

---

## 🧱 Types of Components

### 1. Functional Components ✅

Simpler and preferred for most use-cases.

```jsx
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```

### 2. Class Components 🏛️

Used before React Hooks were introduced. Still useful when dealing with complex lifecycle logic.

```jsx
class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}
```

---

## 📥 Props in Components

**Props** are read-only values passed into components.

```jsx
function Welcome(props) {
  return <h1>Welcome, {props.name}</h1>;
}

// Usage
<Welcome name="Hasibul" />
```

Props are used for:
- Reusability
- Customization
- Communication between components

---

## 🔁 State in Components

Functional components use the `useState` hook for managing local state.

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </>
  );
}
```

---

## 🔄 Lifecycle Methods (Class Components)

| Method            | Purpose                                 |
|-------------------|------------------------------------------|
| `componentDidMount()` | Run after component is mounted         |
| `componentDidUpdate()` | Run after props/state change          |
| `componentWillUnmount()` | Run before component is removed    |

Example:

```jsx
class Example extends React.Component {
  componentDidMount() {
    console.log("Component mounted");
  }

  componentWillUnmount() {
    console.log("Component unmounted");
  }

  render() {
    return <h2>Example Component</h2>;
  }
}
```

---

## 🧠 useEffect Hook (Functional Components)

Equivalent to lifecycle methods but used in functional components.

```jsx
import { useEffect } from "react";

useEffect(() => {
  console.log("Mounted or updated");

  return () => {
    console.log("Unmounting");
  };
}, []);
```

---

## 🔄 Conditional Rendering

Render different UI based on conditions:

```jsx
{isLoggedIn ? <Logout /> : <Login />}
```

---

## 🔁 List Rendering

```jsx
const names = ['Hasibul', 'Tamim', 'Imran'];

<ul>
  {names.map((name, index) => (
    <li key={index}>{name}</li>
  ))}
</ul>
```

---

## 💅 Styling Components

- Inline styles:

```jsx
const style = { color: 'blue', fontWeight: 'bold' };
<h1 style={style}>Hello</h1>
```

- CSS Modules / external CSS files:

```jsx
import './App.css';
```

---

## 📚 Best Practices

- Use functional components when possible
- Keep components small and focused
- Reuse and compose components
- Use `key` when rendering lists
- Avoid unnecessary re-renders
- Separate logic from presentation

---

## 🛠️ Example Project Structure

```
src/
│
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   └── Button.jsx
│
├── App.jsx
└── index.js
```

---

## 📎 Resources

- [React Official Docs](https://reactjs.org/docs/getting-started.html)
- [React Hooks Overview](https://reactjs.org/docs/hooks-overview.html)