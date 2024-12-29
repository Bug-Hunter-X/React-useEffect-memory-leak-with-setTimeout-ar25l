```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCount(count + 1);
    }, 1000);

    // Cleanup function to clear the timeout
    return () => clearTimeout(timeoutId);
  }, [count]); // Add count to the dependency array

  return <div>Count: {count}</div>;
}
```