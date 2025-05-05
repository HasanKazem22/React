
# 📘 JSX in React

JSX (JavaScript XML) is a syntax extension for JavaScript used with React. It allows you to write HTML-like code directly inside JavaScript, making UI creation more intuitive and expressive.

---

## 🔧 Why Use JSX?

- ✅ Makes UI code easier to write and understand.
- ✅ Allows embedding JavaScript expressions directly in markup.
- ✅ Provides better error messages and validation.
- ✅ Encourages modular, component-based design.

---

## 🧠 JSX Syntax Rules

- JSX must return a **single root element**.
- Use **`className`** instead of `class`.
- Use **camelCase** for event handlers and attributes (e.g., `onClick`, `htmlFor`).
- JavaScript expressions are wrapped with **curly braces `{}`** inside JSX.
- JSX supports **self-closing tags** like `<img />`.

---

## 🧱 Embedding HTML and JavaScript

```jsx
const name = "Hasibul";
const element = <h1>Hello, {name}!</h1>;
```

---

## 💬 Adding Comments in JSX

```jsx
return (
  <div>
    {/* This is a comment in JSX */}
    <p>Hello</p>
  </div>
);
```

---

## 🔁 Conditional Rendering

### ✅ Ternary Operator

```jsx
{isLoggedIn ? <LogoutButton /> : <LoginButton />}
```

### ✅ Logical AND Operator

```jsx
{user && <p>Welcome back, {user.name}!</p>}
```

---

## 🔄 JSX in Functions

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

<Welcome name="Hasibul" />
```

---

## 📋 Rendering Lists with `.map()`

```jsx
const names = ["Hasibul", "Tamim", "Imran"];

<ul>
  {names.map((name, index) => (
    <li key={index}>{name}</li>
  ))}
</ul>
```

---

## 🎨 Inline Styling in JSX

```jsx
const divStyle = {
  color: "blue",
  backgroundColor: "lightgray",
};

<div style={divStyle}>Styled with JSX</div>
```

---

## 🧪 JSX is Just Syntactic Sugar

JSX:

```jsx
const element = <h1>Hello</h1>;
```

Compiles to:

```js
const element = React.createElement("h1", null, "Hello");
```

---

## 🚫 Common Pitfalls

- ❌ JSX expressions must return **one parent element**.
- ❌ Can't use regular `if` statements directly in JSX — use ternary or separate logic.
- ❌ Do not use `class`, use `className` instead.

---

## 📚 Resources

- [Official React Docs on JSX](https://reactjs.org/docs/introducing-jsx.html)
- [JSX In Depth](https://reactjs.org/docs/jsx-in-depth.html)
- [MDN JavaScript Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)

---

> Created with ❤️ by Hasibul Hasan