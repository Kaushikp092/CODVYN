import { useState } from "react";

const ToggleMessage = () => {
   const [isVisible, setIsVisible] = useState(true); //setting by default false to can't see the message

   const handleToggle = () => {
      setIsVisible(!isVisible); //tochange isvisible from false to true and true to false
   };

   return (
      <>
         <div>
            {/* here also changing inner message text and changes when visibility change*/}
            { isVisible ? (
               <p>Learing how to use useState to manage a boolean value and how to use ternary operator.</p>
            ) : (
               <p>
                  Click on Show Message button to dispaly data
               </p>
            )}

             <button onClick={handleToggle}>
               {isVisible ? "Hide Message" : "Show Message"}
               {/* here setting inner text of button to toggle when visibility changes */}
            </button>
         </div>
      </>
   );
};

export default ToggleMessage;
