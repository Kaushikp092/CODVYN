const Card = ({ title, description }) => {
   const style = {
      padding: "10px",
      borderRadius: "10px",
      backgroundColor: "red",
      margin: "10px",
   };
   return (
      <>
         <div style={style}>
            <h2>{title}</h2>
            <p>{description}</p>
         </div>
      </>
   );
};

export default Card;
