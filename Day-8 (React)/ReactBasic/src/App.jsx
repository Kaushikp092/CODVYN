import "./App.css";
// import Card from "./components/Card";
// import Counter from "./components/Counter";
// import ToggleMessage from "./components/ToggleMessage";
import UserList from "./components/UserList";

const Header  = () => {

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
}

function App() {
   return (
      <>
         <UserList />
         {/* <ToggleMessage /> */}
         {/* <Header /> */}
         {/* <Card tiltle={'Basic props example'} description={'passing props from parent to child'} />
         <Card tiltle={'Reusable Components'} description={'Pass different props to render variations of the same component.'}/>
         <Card tiltle={'Destructuring'} description={'lets you pull values directly from the props object, so you dont have to repeat props'}/> */}

         {/* <Counter /> */}
      </>
   );
}

export default App;
