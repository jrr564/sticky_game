import React, { Component } from "react";
import Card from "./components/Card/Card";
import Wrapper from "./components/Wrapper/Wrapper";
import Title from "./components/Title";
import CardData from "./CardData.json";

// const App = () => (
//   <Wrapper>
//     <div>
//       <Card
//         id={CardData[0].id}
//         name={CardData[0].name}
//         image={CardData[0].image}
//       />
//       <Card
//         id={CardData[1].id}
//         name={CardData[1].name}
//         image={CardData[1].image}
//       />
//       <Card
//         id={CardData[2].id}
//         name={CardData[2].name}
//         image={CardData[2].image}
//       />
//     </div>
//   </Wrapper>
// );

let topScore = 0;
let correct = 0;
let points = 0;
let message = "";

class App extends Component {

	state = {
		topScore,
		guessesCorrect,
		message, 
		hearts
  };

  setClick = id => {

    
  }
  
}

export default App;
