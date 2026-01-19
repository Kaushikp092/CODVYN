import { useState } from "react";

const ToggleMessage = () => {
   // TASK 1
   const [isVisible, setIsVisible] = useState(false); //setting by default false to can't see the message --TASK 1

   const handleToggle = () => {
      setIsVisible(!isVisible); //tochange isvisible from false to true and true to false --TASK 1
   };

   //TASK 2
   const [todos] = useState([
      "Buy groceries",
      "Finish React project",
      "Call mom",
      "Read a book",
      "Workout",
   ]);

   const [isShown, setIsShown] = useState(true);
   const handleChange = () => {
      setIsShown(!isShown);
   };

   return (
      <>
         {/* TASK 1 */}
         {/* here also changing inner message text and changes when visibility change --TASK 1*/}
         <div>
            {isVisible
               ? "message is visible because isVisible is on true state"
               : "message is not visible because isVisible is on false state"}

            <button onClick={handleToggle}>
               {/* here setting inner text of button to toggle when visibility changes --TASK 1*/}
               {isVisible ? "Hide message" : "Show message"}
            </button>
         </div>

         {/* TASK 2 */}
         <div>
            <h2>Show All List Todos:</h2>

            <div>
               {isShown ? (
                  todos.map((todo) => <ul key={todo}>{todo}</ul>)
               ) : (
                  <p>List is empty</p>
               )}
            </div>

            <button onClick={handleChange}>
               {isShown ? "Hide List" : "Show List"}
            </button>
         </div>
      </>
   );
};

export default ToggleMessage;
