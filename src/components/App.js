import React from "react";

import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Menu from "./Menu";
import base from "../base";

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  componentDidMount() {
    // read to localStorage
    const localStorageRef = localStorage.getItem(this.props.storeId);
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }

    // read/sync from Firebase
    const config = {
      context: this,
      state: "fishes"
    };
    this.ref = base.syncState(`${this.props.storeId}/fishes`, config);
  }

  componentDidUpdate() {
    //save to localStorage
    console.warn(this.state.order);
    localStorage.setItem(this.props.storeId, JSON.stringify(this.state.order));
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }
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

  addToOrder = key => {
    const newOrder = { ...this.state.order };
    if (newOrder[key]) {
      newOrder[key] = newOrder[key] + 1;
    } else {
      newOrder[key] = 1;
    }
    this.setState({ order: newOrder });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <Menu fishesDetails={this.state.fishes} addToOrder={this.addToOrder} />
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}

export default App;
