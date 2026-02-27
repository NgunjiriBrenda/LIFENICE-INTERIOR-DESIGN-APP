// src/pages/ProductDetails.jsx
import { useParams } from 'react-router-dom';

function ProductDetails() {
  const { id } = useParams();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Product Details</h1>
      <p>Viewing product with ID: {id}</p>
      {/* Add your product details content here */}
    </div>
  );
}

export default ProductDetails;