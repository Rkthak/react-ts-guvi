import { useState } from "react";

const Counter = () => {
  const [like, setLike] = useState<number>(0);
  const handleLike = () => {
    setLike(like + 1);
  };
  const handleDisLike = () => {
    setLike(like <= 0 ? 0 : like - 1);
  };
  return (
    <div>
      <h1>Like : {like}</h1>
      <button onClick={handleLike}>👍</button> &nbsp;
      <button onClick={handleDisLike}>👎</button>
    </div>
  );
};

export default Counter;
