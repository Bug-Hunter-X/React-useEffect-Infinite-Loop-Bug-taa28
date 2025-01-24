```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: Using functional update to prevent infinite loop
    setCount(prevCount => prevCount + 1); 
  }, []);

  return <div>Count: {count}</div>;
}
```