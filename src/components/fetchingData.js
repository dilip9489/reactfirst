import React, { useState, useEffect } from "react";
import axios from "axios";
function DataFetching() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        console.log(res);
        setPosts(res.data); // axios already parses the JSON
        console.log(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []); // Empty array ensures it runs only once
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
export default DataFetching;
