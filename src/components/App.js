import React from 'react';
import StorePicker from "./StorePicker";

class App extends React.Component {
  render() {
    return (
    <from className="store-selector">
    <h2> Please, pick a store</h2>
    <input type="text" required placeholder="Store Name"/>
    <button type="submit">Enter a Store 🍴🐟</button>
    </from>
    );
}
}

export default App;










