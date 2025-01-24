```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect: Setting state directly inside the effect
    setCount(count + 1); 
  }, []);

  return <div>Count: {count}</div>;
}
```