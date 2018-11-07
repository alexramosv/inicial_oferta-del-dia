/*import React from "react";

class StorePicker extends React.Component {
  render() {
    return (
      <form className="store-selector">
        <h2> Please pick a Store </h2>
        <input type="text" required placeholder="Store Name" />
        <button type="submit">
          Visit a Store{" "}
          <span role="img" arial-labelledby="tenedores">
            🍴
          </span>
        </button>
      </form>
    );
  }
}

export default StorePicker;
*/

import React from "react";

class StorePicker extends React.Component {
  render() {
    return (
      <form className="store-selector">
        <h2>Please Enter a Store</h2>
        <input type="text" required placeholder="Store Name" />
        <button type="submit">
          Visit Store{" "}
          <span role="img" arial-labelledby="tenedores">
            🍴
          </span>
        </button>
      </form>
    );
  }
}

export default StorePicker;
