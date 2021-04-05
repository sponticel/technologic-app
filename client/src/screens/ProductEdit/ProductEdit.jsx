import React, { useState, useEffect } from "react";
import "./ProductEdit.css";
import { useParams, Redirect } from "react-router-dom";
import Layout from "../../components/shared/Layout/Layout";
import { getProduct, updateProduct } from "../../services/products";

const ProductEdit = (props) => {
  const params = useParams()
  const [product, setProduct] = useState({
    name: "",
    details: "",
    contactInfo: "",
    imgURL1: "",
    imgURL2: "",
    imgURL3: "",
    condition:"",
    price: "",
  });

  const [isUpdated, setUpdated] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct(id);
      setProduct(product);
    };
    fetchProduct();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    let { id } = params;
    const updated = await updateProduct(id, product);
    setUpdated(updated);
  };

  if (isUpdated) {
    return <Redirect to={`/products/${params.id}`} />;
  }

  return (
    <Layout user={props.user}>
      <div className="product-edit">
        <div className="image-container">
          <img
            className="edit-product-image"
            src={product.imgURL1}
            alt={product.name}
          />
          <form onSubmit={handleSubmit}>
            <input
              className="edit-input-image-link"
              placeholder="Image Link"
              value={product.imgURL1}
              name="imgURL1"
              required
              onChange={handleChange}
            />
            <input
              className="edit-input-image-link"
              placeholder="Image Link"
              value={product.imgURL2}
              name="imgURL2"
              required
              onChange={handleChange}
            />
            <input
            className="edit-input-image-link"
            placeholder="Image Link"
            value={product.imgURL3}
            name="imgURL3"
            required
            onChange={handleChange}
          />
          </form>
        </div>
        <form className="edit-form" onSubmit={handleSubmit}>
          <input
            className="input-name"
            placeholder="Name"
            value={product.name}
            name="name"
            required
            autoFocus
            onChange={handleChange}
          />
          <input
            className="input-contact-info"
            placeholder="contact info"
            value={product.contactInfo}
            name="contactInfo"
            required
            autoFocus
            onChange={handleChange}
          />
          <input
            className="input-condition"
            placeholder="condition"
            value={product.condition}
            name="condition"
            required
            autoFocus
            onChange={handleChange}
          />
          <input
            className="input-price"
            placeholder="Price"
            value={product.price}
            name="price"
            required
            onChange={handleChange}
          />
          <textarea
            className="textarea-details"
            rows={10}
            cols={78}
            placeholder="Details"
            value={product.details}
            name="details"
            required
            onChange={handleChange}
          />
          <button type="submit" className="save-button">
            Save
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ProductEdit;
