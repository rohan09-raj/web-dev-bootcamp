## React Hooks

### useState

```js
const [state, setState] = useState(initialState);
```

### useEffect

```js
useEffect(() => {
  // do something
}, [state]);
```

### useContext

```js
const value = useContext(MyContext);
```

### useReducer

```js
const [state, dispatch] = useReducer(reducer, initialState);
```

### useCallback

```js
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

### useMemo

```js
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

### useRef

```js
const refContainer = useRef(initialValue);
```

### useImperativeHandle

```js
useImperativeHandle(ref, () => ({
  focus() {
    // do something
  },
}));
```

### useLayoutEffect

```js
useLayoutEffect(() => {
  // do something
}, [state]);
```

### useDebugValue

```js
useDebugValue(value);
```

## React Router

### BrowserRouter

```js
<BrowserRouter>
  <App />
</BrowserRouter>
```
