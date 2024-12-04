import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Edit, Plus, Trash2Icon } from "lucide-react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [removedProducts, setRemovedProducts] = useState([]);

  // Fetch products from JSON server
  const fetchProducts = () => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((res) => setProducts(res))
      .catch((error) => console.error("Error fetching products:", error));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Function to remove product temporarily
  const removeProductById = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    const removedProduct = products.find((product) => product.id === productId);
    
    setProducts(updatedProducts);
    setRemovedProducts([...removedProducts, removedProduct]);
  };

  // Optional: Function to restore removed products
/*   const restoreProductById = (productId) => {
    const productToRestore = removedProducts.find((product) => product.id === productId);
    setProducts([...products, productToRestore]);
    setRemovedProducts(removedProducts.filter((product) => product.id !== productId));
  }; */

  return (
    <div className=" bg-gray-100 ">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <h1 className="text-3xl font-bold mb-6 p-6 ">Products</h1>
        <div className="flex justify-between">
          <input className="h-8 m-2 pr-12 border-gray-400" type="text" placeholder="search" />
          <div>
            <Link to="/products/addproducts" className="bg-blue-500 flex p-2 text-white rounded-xl text-sm font-semibold m-2">
              <Plus /> Add product
            </Link>
          </div>
        </div>
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Product
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Stock
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {products.length > 0 ? (
                  products.map((product) => (
                    <ShowProduct
                      key={product.id}
                      product={product}
                      removeProductById={removeProductById}
                    />
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="px-6 py-4 text-center text-sm text-gray-500">
                      No products found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const ShowProduct = ({ product, removeProductById }) => {
  return (
    <tr className="hover:bg-gray-50 transition-colors duration-200">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-16 w-16">
            <img
              src={product.image || "/placeholder.svg?height=64&width=64"}
              alt={product.name}
              className="h-16 w-16 object-cover"
            />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{product.name}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{product.category}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{product.stock || "N/A"}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">${product.price}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium flex justify-center">
        <Link
          to={"/products/editproducts"}
          className="text-blue-600 hover:text-blue-900 transition-colors duration-200"
        >
          <Edit />
        </Link>
        <Link
          onClick={() => removeProductById(product.id)}
          className="text-red-600 hover:text-red-900 transition-colors duration-200"
        >
          <Trash2Icon />
        </Link>
      </td>
    </tr>
  );
};

export default Products;
