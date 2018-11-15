import React from "react";

class AddFishForm extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createFish = event => {
    // 1. stop the form from submitting
    event.preventDefault(); /*
    console.log(this.nameRef.current.value);
    console.log(this.priceRef.current.value);
    console.log(this.statusRef.current.value);
    console.log(this.descRef.current.value);
    console.log(this.imageRef.current.value);

    console.log(" MAKING A pececitos 🐟🐠");*/

    //2. Create fish with data
    const fish = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value),
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value
    };

    //3. Set fish to App component (where state lives)
    this.props.addFish(fish);

    //4. Refresh the form
    event.currentTarget.reset();
  };
  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
        <input
          name="price"
          ref={this.priceRef}
          type="text"
          placeholder="Price"
        />
        <select name="status" ref={this.statusRef}>
          <option value="available">Fresh!!</option>
          <option value="unavailable"> Sold Out! </option>
        </select>
        <textarea name="desc" ref={this.descRef} placeholder="Desc" />
        <input
          name="image"
          ref={this.imageRef}
          type="text"
          placeholder="Image"
        />
        <button type="submit"> + Add Fish</button>
      </form>
    );
  }
}

export default AddFishForm;
