const value = [
  {
    titles: "Burger",
    calories: 100,
  },
  {
    titles: "Pizza",
    calories: 200,
  },
];
function Iterate() {
  // const values=["hi","bye"];
  value.map((element) => {
      console.log(element.titles); 
    return <div className="blahh">{element.titles}</div>;
  });
}

export default Iterate;
