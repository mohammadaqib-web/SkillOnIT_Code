function Counter({ count, increment, decrement, reset }) {
  return (
    <>
      <h1>{count}</h1>
      <br />
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default Counter;
