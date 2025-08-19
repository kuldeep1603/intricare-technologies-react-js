import { useState, useEffect, useMemo } from "react";

// components
import Button from "../components/Button";
import Select from "../components/Select";
import Input from "../components/Input";
import Image from "../components/Image";

// redux toolkit
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  deleteProduct,
  setSearch,
  setCategory,
  setPage,
  setPerPage,
  type Product,
} from "../redux/slices/productSlice";
import type { RootState } from "../redux/store";

// router
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  // useDispatch & useNavigate
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // get data useselector hooks
  const {
    items: products,
    loading,
    error,
    search,
    category,
    page,
    perPage,
  } = useSelector((state: RootState) => state.product);

  const [categories, setCategories] = useState<string[]>([]);
  const API_URL = import.meta.env.VITE_API_URL;

  const showData = [
    { label: "10", value: 10 },
    { label: "20", value: 20 },
    { label: "30", value: 30 },
    { label: "40", value: 40 },
  ];

  // Fetch products from API
  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts() as any);
    }

    // unique categories
    const uniqueCategories = [...new Set(products.map((p) => p.category))];
    setCategories(uniqueCategories);
  }, [dispatch, products]);

  // Filter and paginate products
  const filteredAndPaginatedProducts = useMemo(() => {
    let filtered = products;

    //  search filter
    if (search) {
      filtered = filtered.filter(
        (product) =>
          product.title.toLowerCase().includes(search.toLowerCase()) ||
          product.category.toLowerCase().includes(search.toLowerCase())
      );
    }

    //  category filter
    if (category) {
      filtered = filtered.filter((product) => product.category === category);
    }

    //  pagination
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    const paginatedProducts = filtered.slice(startIndex, endIndex);

    return {
      products: paginatedProducts,
      totalItems: filtered.length,
      totalPages: Math.ceil(filtered.length / perPage),
    };
  }, [products, search, category, page, perPage]);

  // Delete product handler
  const handleDelete = async (id: number) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await fetch(`${API_URL}/${id}`, {
          method: "DELETE",
        });

        // Removed from local state
        dispatch(deleteProduct(id));
      } catch (error) {
        console.error("Error deleting product:", error);
        alert("Failed to delete product");
      }
    }
  };

  const handleEdit = (product: Product) => {
    navigate(`/edit/${product.id}`, { state: { product } });
  };

  // handle search
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(e.target.value));
    dispatch(setPage(1));
  };

  // handle category
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setCategory(e.target.value));
    dispatch(setPage(1)); // Reset to first page when filtering
  };

  // handle per page
  const handlePerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setPerPage(Number(e.target.value)));
    dispatch(setPage(1)); // Reset to first page when changing items per page
  };

  const generatePageNumbers = () => {
    const totalPages = filteredAndPaginatedProducts.totalPages;
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-lg">Loading products...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-lg text-red-500">Error: {error}</div>
      </div>
    );
  }

  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="text-2xl mt-lg-2 font-semibold text-[#213446]">
          Product List
        </h2>
        <div className="flex gap-2 items-center">
          <Button
            title="Add Product"
            classname="bg-secondary py-3 px-5 rounded-md text-white"
            type="button"
            icon
            iconTitle="add"
            onClick={() => navigate("/add")}
          />
        </div>
      </div>

      <div className="grid grid-cols-1">
        <div className=" bg-white py-3 px-4 md:mt-10 mt-5">
          <div className="flex justify-between flex-wrap items-center">
            <h5 className="text-lg  font-semibold text-[#213446]">
              Product List
            </h5>
            <Button
              type="button"
              title="Export"
              classname="bg-light_gray py-2 rounded-md font-medium text-black px-3"
              icon
              iconTitle="download"
            />
          </div>
          <div className="flex justify-between gap-4 flex-wrap-reverse items-center mt-3">
            <div className="flex gap-4 items-center">
              <Select
                label="Show"
                RowclassName="flex gap-2  items-center"
                id="Show"
                options={showData}
                value={perPage}
                className="px-3 py-0.5  mt-0"
                onChange={handlePerPageChange}
              />

              <Select
                label="Category"
                RowclassName="flex gap-2 items-center"
                id="Category"
                options={[
                  { label: "All Categories", value: "" },
                  ...categories.map((cat) => ({ label: cat, value: cat })),
                ]}
                value={category}
                className="px-3 py-0.5  mt-0"
                onChange={handleCategoryChange}
              />
            </div>

            <div className="flex gap-2 items-center">
              <span className="mb-0 block">Search : </span>
              <Input
                type="search"
                value={search}
                onChange={handleSearchChange}
                placeholder="Search products..."
                className="py-1.5 px-3 bg-light_gray border border-transparent m-0"
              />
            </div>
          </div>
        </div>

        {/* table  */}
        <div className="scroll-container overflow-x-auto ">
          <table className="min-w-full divide-y divide-light_gray">
            {/* Fixed Header */}
            <thead className="bg-light_gray truncate sticky top-0 py-2">
              <tr>
                <th
                  scope="col"
                  className="px-10 py-4 text-left font-medium text-[16px]  text-black capitalize tracking-wider"
                >
                  Action
                </th>
                <th
                  scope="col"
                  className="px-10 py-4 text-left font-medium text-[16px]  text-black capitalize tracking-wider"
                >
                  Image
                </th>
                <th
                  scope="col"
                  className="px-10 py-4 text-left font-medium text-[16px]  text-black capitalize tracking-wider"
                >
                  Title
                </th>
                <th
                  scope="col"
                  className="px-10 py-4 text-left font-medium text-[16px]  text-black capitalize tracking-wider"
                >
                  Category
                </th>
                <th
                  scope="col"
                  className="px-10 py-4 text-left font-medium text-[16px]  text-black capitalize tracking-wider"
                >
                  Price
                </th>
                <th
                  scope="col"
                  className="px-10 py-4 text-left font-medium text-[16px]  text-black capitalize tracking-wider"
                >
                  Rate
                </th>
                <th
                  scope="col"
                  className="px-10 py-4 text-left font-medium text-[16px]  text-black capitalize tracking-wider"
                >
                  Count
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="bg-white divide-y divide-light_gray">
              {filteredAndPaginatedProducts.products.length === 0 ? (
                <tr>
                  <td
                    colSpan={7}
                    className="px-10 py-8 text-center text-gray-500"
                  >
                    No products found
                  </td>
                </tr>
              ) : (
                filteredAndPaginatedProducts.products.map((product) => (
                  <tr key={product.id}>
                    <td className="px-10 py-4 whitespace-nowrap">
                      <div className="flex gap-2">
                        <Button
                          type="button"
                          icon
                          iconTitle="update"
                          iconClassname="text-primary"
                          onClick={() => handleEdit(product)}
                        />
                        <Button
                          type="button"
                          icon
                          iconTitle="delete"
                          iconClassname="text-red-500"
                          onClick={() => handleDelete(product.id)}
                        />
                      </div>
                    </td>
                    <td className="px-10 py-4 whitespace-nowrap">
                      <Image
                        src={product.image}
                        alt={product.title}
                        className="w-10 h-10 object-cover rounded"
                      />
                    </td>
                    <td className="px-10 py-4">
                      <div className="text-md font-medium text-gray-900 max-w-xs truncate">
                        {product.title}
                      </div>
                    </td>
                    <td className="px-10 py-4 whitespace-nowrap">
                      <div className="text-md text-gray-900 capitalize">
                        {product.category}
                      </div>
                    </td>
                    <td className="px-10 py-4 whitespace-nowrap">
                      <div className="text-md text-gray-900">
                        ${product.price}
                      </div>
                    </td>
                    <td className="px-10 py-4 whitespace-nowrap">
                      <div className="text-md text-gray-900">
                        {product.rating?.rate || "N/A"}
                      </div>
                    </td>
                    <td className="px-10 py-4 whitespace-nowrap">
                      <div className="text-md text-gray-900">
                        {product.rating?.count || "N/A"}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* pagination */}
        <div className="flex flex-wrap gap-2 sm:justify-between justify-end items-center bg-white py-5 px-4">
          <p>
            Showing {(page - 1) * perPage + 1} to{" "}
            {Math.min(page * perPage, filteredAndPaginatedProducts.totalItems)}{" "}
            of {filteredAndPaginatedProducts.totalItems} entries
          </p>

          {/* Pagination */}
          <div className="flex gap-1">
            <button
              onClick={() => dispatch(setPage(Math.max(1, page - 1)))}
              disabled={page === 1}
              className="px-3 py-1 border border-gray-300 rounded disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>

            {generatePageNumbers().map((pageNum) => (
              <button
                key={pageNum}
                onClick={() => dispatch(setPage(pageNum))}
                className={`px-3 py-1 border rounded ${
                  page === pageNum
                    ? "bg-blue-500 text-white border-blue-500"
                    : "border-gray-300 hover:bg-gray-50"
                }`}
              >
                {pageNum}
              </button>
            ))}

            <button
              onClick={() =>
                dispatch(
                  setPage(
                    Math.min(filteredAndPaginatedProducts.totalPages, page + 1)
                  )
                )
              }
              disabled={page === filteredAndPaginatedProducts.totalPages}
              className="px-3 py-1 border border-gray-300 rounded disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
