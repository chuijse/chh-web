import React, { useRef, useState } from "react";

import Box from "../Components/Triangle";

const Blog = () => {
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  const [postion, setposition] = useState(inputRef1);

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          className="blog"
          ref={inputRef1}
          style={{ width: 100, height: 200, background: "#111111" }}
          onClick={() => setposition(inputRef1)}
        ></div>
        <div
          className="blog"
          ref={inputRef2}
          style={{
            width: 100,
            height: 200,
            background: "#222222",
            marginLeft: 150,
          }}
          onClick={() => setposition(inputRef2)}
        ></div>
        <div
          className="blog"
          ref={inputRef3}
          style={{
            marginLeft: 300,
            width: 100,
            height: 200,
            background: "#333333",
          }}
          onClick={() => setposition(inputRef3)}
        ></div>
      </div>

      <Box xPosition={postion} />
    </>
  );
};

export default Blog;
