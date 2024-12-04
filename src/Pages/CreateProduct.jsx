const CreateProduct = () => {
    return (
      <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg space-y-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Create Product</h2>
        
        <div className="flex flex-col gap-6">
          {/* Product Name Input */}
          <input
            className="px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
            type="text"
            placeholder="Product Name"
          />
          
          {/* Product Description Input */}
          <textarea
            className="px-4 py-3 h-40 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
            placeholder="Description"
          />
  
          {/* Stock Input */}
          <input
            className="px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
            type="number"
            placeholder="Stock"
          />
  
          {/* Price Input */}
          <input
            className="px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
            type="number"
            placeholder="Price"
            step="0.01"
          />
        </div>
  
        <div className="mt-6">
          <label htmlFor="upload-image" className="block text-lg font-medium mb-2 text-gray-700">Upload Image</label>
          <input
            id="upload-image"
            type="file"
            accept="image/*"
            className="px-4 py-3 border border-gray-300 rounded-lg w-full cursor-pointer hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          />
        </div>
  
        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 mt-6"
        >
          Create Product
        </button>
      </div>
    );
  };
  
  export default CreateProduct;
  