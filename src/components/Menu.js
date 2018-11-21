import React from "react";
import Header from "./Header";
import Fish from "./Fish";

class Menu extends React.Component {
  render() {
    return (
      <div className="menu">
        <Header tagline="Fresh Seafood Market" />
        <ul className="fishes">
          {Object.keys(this.props.fishesDetails).map(fish => (
            <Fish
              key={fish}
              index={fish}
              fishDetails={this.props.fishesDetails[fish]}
              addToOrder={this.props.addToOrder}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Menu;
