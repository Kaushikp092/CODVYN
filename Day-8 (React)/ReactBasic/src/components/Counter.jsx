import { useState } from "react";

const Counter = () => {
   const [count, setCount] = useState(0);
   const [setText, setSetText] = useState("");

   const updateNum = () => {
      setCount(count + 1);
   };

   const delNum = () => {
      count > 0 ? setCount(count - 1) : "";
   };

   const handleChange = (e) => {
      setSetText(e.target.value);
   };

   return (
      <>
         <div>counter : {count}</div>
         <button onClick={updateNum}>Add one</button>{" "}
         <button onClick={delNum}>Minus one</button>
         <form>
            Entered Your text:
            <input type="text" onChange={handleChange} />
         </form>
         <p>The text that you have enter: {setText}</p>
      </>
   );
};

export default Counter;
