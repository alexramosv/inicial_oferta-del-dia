import React from "react";

class StorePicker extends React.Component {
  handleClick = () => {
    console.log(this);
    alert("Hola, holita vecinitoooooo!!");
  };

  render() {
    return (
      <form className="store-selector">
        <h2>Please Enter a Store</h2>
        <input type="text" required placeholder="Store Name" />
        <button onClick={this.handleClick} type="submit">
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
