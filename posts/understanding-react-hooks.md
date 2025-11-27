---
title: "Understanding React Hooks"
date: "2025-01-01"
author: "Sarah Williams"
excerpt: "Master React Hooks and learn how to build more efficient and cleaner React components."
---

React Hooks revolutionized the way we write React components. They allow you to use state and other React features without writing class components.

## Core Hooks

Let's explore the most commonly used React Hooks:

### useState

The `useState` hook allows you to add state to functional components. It returns an array with two elements: the current state value and a function to update it.

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

### useEffect

The `useEffect` hook lets you perform side effects in your components. It's perfect for data fetching, subscriptions, and manually changing the DOM.

```jsx
import { useEffect, useState } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetch('/api/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []); // Empty dependency array means this runs once
  
  return <div>{data ? JSON.stringify(data) : 'Loading...'}</div>;
}
```

### useContext

The `useContext` hook allows you to consume context values without wrapping your component in a Consumer component.

```jsx
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function ThemedButton() {
  const theme = useContext(ThemeContext);
  
  return (
    <button style={{ background: theme.background }}>
      Themed Button
    </button>
  );
}
```

## Custom Hooks

One of the most powerful features of Hooks is the ability to create your own custom hooks. Custom hooks let you extract component logic into reusable functions.

```jsx
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });
  
  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };
  
  return [storedValue, setValue];
}
```

## Best Practices

- Always call hooks at the top level of your component
- Only call hooks from React functions (components or custom hooks)
- Use the ESLint plugin for hooks to catch mistakes
- Extract complex logic into custom hooks
- Keep effects focused on a single responsibility

## Common Pitfalls

### Missing Dependencies

```jsx
// ❌ Bad: Missing dependency
useEffect(() => {
  console.log(count);
}, []);

// ✅ Good: Include all dependencies
useEffect(() => {
  console.log(count);
}, [count]);
```

### Stale Closures

Be aware of stale closures when using hooks. Always include dependencies in your dependency arrays.

## Conclusion

React Hooks have made functional components more powerful and easier to work with. They provide a more direct API to React features and make it easier to share logic between components. Start using them today to write cleaner, more maintainable React code!


