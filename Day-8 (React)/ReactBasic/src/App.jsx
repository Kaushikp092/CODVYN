import "./App.css";
// import Card from "./components/Card";
import Counter from "./components/Counter";
// import ToggleMessage from "./components/ToggleMessage";
// import UserList from "./components/UserList";

const Header = () => {
   return (
      <>
         <div>Learning React Basic</div>
         <p>
            React is library not a framework. React helps in building fast,
            interactive and reusable user interfaces, especially single-page
            Applications
         </p>
      </>
   );
};

function App() {
   // Data - 9 task tried rendering using array in map function
   const cardData = [
      {title: 'Array and map',
         description: 'Using map to render a list of components from an array'
      },
      {
         title: "Basic props example",
         description: "Passing props from parent to child",
      },
      {
         title: "Reusable Components",
         description:
            "Pass different props to render variations of the same component.",
      },
      {
         title: "Destructuring",
         description:
            "Lets you pull values directly from the props object, so you dont have to repeat props",
      },
   ];
   return (
      <>
      {/* Day - 9 */}
         {/* <div>
            {cardData.map((card, index) => (
               <Card
                  key={index}
                  title={card.title}
                  description={card.description}
               />
            ))}
         </div> */}

         {/* Day - 10 */}
         <Counter />
         {/* <UserList /> */}
         {/* <ToggleMessage /> */}
         {/* <Header /> */}
      </>
   );
}

export default App;
