import React from "react";

import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Menu from "./Menu";

class App extends React.Component {
  state = {
    fishes: {}
  };
  addFish = newFish => {
    //1.take a copy of the exsiting `State`
    const newFishes = { ...this.state.fishes };
    //2. Add our newFish to newFishes
    newFishes[`fish${Date.now()}`] = newFish;
    //3. Set newFishes as the new `State`
    this.setState({ fishes: newFishes });
    console.log("Añadidos los Pececitos ");
  };

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <Menu fishesDetails={this.state.fishes} />
        <Order />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}

export default App;
