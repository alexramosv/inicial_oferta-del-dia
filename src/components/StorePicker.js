import React from "react";

class StorePicker extends React.Component {
  render() {
    return <form className="store-selector">
    <h2> Please pick a Store </h2>
    <input type="text" required placeholder="Store Name"/>
    <button type="submit">Visit a Store 🍴🐟</button>
    </form>
  }
}

export default StorePicker












