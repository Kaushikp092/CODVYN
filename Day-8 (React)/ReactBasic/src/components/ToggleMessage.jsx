import { useState } from "react";

const ToggleMessage = () => {
   // TASK 1
   const [isVisible, setIsVisible] = useState(false); //setting by default false to can't see the message --TASK 1

   const handleToggle = () => {
      setIsVisible(!isVisible); //tochange isvisible from false to true and true to false --TASK 1
   };

   //TASK 2
   const [todos] = useState([ //simple array state
      "Buy groceries",
      "Finish React project",
      "Call mom",
      "Read a book",
      "Workout",
   ]);
   const [isShown, setIsShown] = useState(true);

   const handleListChange = () => {
      setIsShown(!isShown);
   };

   return (
      <>
         {/* TASK 1 */}
         <div>
            {/* here also changing inner message text and changes when visibility change --TASK 1*/}
            {isVisible ? (
               <p>
                  Learing how to use useState to manage a boolean value and how
                  to use ternary operator.
               </p>
            ) : (
               <p>Click on Show Message button to dispaly data</p>
            )}

            <button onClick={handleToggle}>
               {isVisible ? "Hide Message" : "Show Message"}
               {/* here setting inner text of button to toggle when visibility changes --TASK 1*/}
            </button>
         </div>


         {/* TASK 2 */}
         <div>
            <h2>Listing all Todos:</h2>
            {isShown && (
               <div>
                  {/* Rendering all list on Screen*/}
                  {todos.map((item) => (
                     <li key={item} style={{ listStyle: "none" }}>
                        {item}
                     </li>
                  ))}
               </div>
            )}
            <button onClick={handleListChange}>
               {isShown ? "Hide list Todos" : "Show list Todos"}
            </button>
         </div>
      </>
   );
};

export default ToggleMessage;
