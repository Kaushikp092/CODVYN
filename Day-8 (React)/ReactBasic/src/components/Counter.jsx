import React from "react";
import { useState } from "react";

const Counter = () => {
   const [count, setCount] = useState(0);
   const [text, setText] = useState("");

   const updateCount = () => {
      setCount(count + 1);
   };
   const delCount = () => {
      count > 0 ? setCount(count - 1) : '';
   };

   const handleChange = (e) => {
      setText(e.target.value);
   };

   return (
      <>
      <div className="counter" style={{padding : '10px'}}>
         <div>Count {count}</div>
         <button onClick={updateCount}>Add one</button>
         <button onClick={delCount}>Minus one</button>
      </div>

         <form>
            Input Value:{" "}
            <input type="text" value={text} onChange={handleChange} />
            <p>you Typed: {text}</p>
         </form>
      </>
   );
};

export default Counter;
