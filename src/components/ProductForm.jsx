import { useState } from "react";

function ProductForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const handleNameInput = (event) => {
    setName(event.target.value);
  };
  const handlePriceInput = (event) => {
    setPrice(event.target.value);
  };
  const handleImageInput = (event) => {
    setImage(event.target.value);
  };
  const handleDescriptionInput = (event) => {
    setDescription(event.target.value);
  };
  const handleAlertData = () => {
    const alertData = {
      name: name,
      price: price,
      image: image,
      description: description,
    };

    alert(JSON.stringify(alertData));
  };

  return (
    <form className="post-form">
      <h1>Create Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            onChange={handleNameInput}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            onChange={handleImageInput}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            onChange={handlePriceInput}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            onChange={handleDescriptionInput}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit" onClick={handleAlertData}>
          Create
        </button>
      </div>
    </form>
  );
}

export default ProductForm;
