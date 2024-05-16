import { useState, useEffect } from 'react';

function Post({ id }) {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setPost(data.body);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
      return <p>loading</p>;
    }

    return <p>{post}</p>;

};

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <button onClick={() => setCount(count + 1)}>
          count: {count}
        </button>
    );
};

function App() {
  return (
      <div>
        <Counter />
        <Post id={1} />
      </div>
  );
};

export default App;
