import { useState, useEffect } from 'react';

function Post({ id }) {

};

function Counter() {
    const [count, setCount] = useState(0);
    return (
      <>
        <button onClick={() => setCount(count + 1)}>
          count: {count}
        </button>
      </>
    );
};

function App() {
  return (
    <>
      <div>
        <Counter />
        <Post id={1} />
      </div>
    </>
  );
};

export default App;
