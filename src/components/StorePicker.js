import React from "react";
import { getFunName } from "../helpers";
import { navigate } from "@reach/router";

class StorePicker extends React.Component {
  inputStore = React.createRef();

  goToStore = event => {
    event.preventDefault();
    const myInput = this.inputStore.current;
    const storeName = myInput.value;
    navigate(`/store/${storeName}`);
  };

  /*  
    handleClick = () => {
    console.log(this);
    alert("Hola, holita vecinitoooooo!!");
  };
  */

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter a Store</h2>
        <input
          type="text"
          required
          ref={this.inputStore}
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">
          Visit Store{" "}
          <span role="img" aria-labelledby="tenedor">
            🍴
          </span>
        </button>
      </form>
    );
  }
}

export default StorePicker;
