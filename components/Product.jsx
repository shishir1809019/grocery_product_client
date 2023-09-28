

const ProductItem = ({ product }) => {
  return (
    <div className="mx-auto bg-gray-200 p-3 rounded-lg">
        <img style={{width:'250px', height:'200px '}} className="mb-2" src={product.photo_url} alt="" />
      <h1 className="mb-1">{product.name}</h1>
      <p className="mb-1">${product.price}</p>
      <p className="mb-2">{product.description}</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Add to Cart
    </button>
      {/* You can add more details or actions for each product here */}
    </div>
  );
};

export default ProductItem;
