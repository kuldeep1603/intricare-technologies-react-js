import { useState, useEffect } from "react";

// components
import Breadcrumb from "../components/breadcrumb";
import Input from "../components/Input";
import Textarea from "../components/Textarea";
import Button from "../components/Button";
import { validateForm } from "../utils/validation";
import Image from "../components/Image";

// toast
import { toast } from "react-toastify";

// redux toolkit
import { useDispatch } from "react-redux";

// router dom
import { useNavigate, useLocation } from "react-router-dom";

import {
  addProduct,
  updateProduct,
  type Product,
} from "../redux/slices/productSlice";

const AddProduct = () => {
  // useDispatch
  const dispatch = useDispatch();
  // navigate
  const navigate = useNavigate();
  // location path
  const location = useLocation();
  // api url
  const API_URL = import.meta.env.VITE_API_URL;

  // if  editing
  const editingProduct = location.state?.product as Product | undefined;
  const isEditing = !!editingProduct;

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    price: "",
    rate: "",
    count: "",
    description: "",
    image: "",
  });

  const [loading, setLoading] = useState(false);

  // form if editing
  useEffect(() => {
    if (editingProduct) {
      setFormData({
        title: editingProduct.title || "",
        category: editingProduct.category || "",
        price: editingProduct.price?.toString() || "",
        rate: editingProduct.rating?.rate?.toString() || "",
        count: editingProduct.rating?.count?.toString() || "",
        description: editingProduct.description || "",
        image: editingProduct.image || "",
      });
    }
  }, [editingProduct]);

  // input change handler
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // file handler
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData((prev) => ({
        ...prev,
        image: imageUrl,
      }));
    }
  };

  // submit handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm(formData);
    if (errors.length > 0) {
      errors.forEach((err) => toast.error(err)); // show all errors with react-toastify
      return;
    }
    setLoading(true);

    try {
      const productData: Omit<Product, "id"> = {
        title: formData.title.trim(),
        category: formData.category.trim(),
        price: Number(formData.price),
        description: formData.description.trim(),
        image: formData.image || "/assets/img/self.jpeg",
        rating: {
          rate: Number(formData.rate) || 0,
          count: Number(formData.count) || 0,
        },
      };

      if (isEditing && editingProduct) {
        const response = await fetch(`${API_URL}/${editingProduct.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(productData),
        });

        if (!response.ok) {
          throw new Error("Failed to update product");
        }

        const updatedProduct: Product = {
          ...productData,
          id: editingProduct.id,
        };

        dispatch(
          updateProduct({
            id: editingProduct.id,
            productBody: updatedProduct,
          })
        );
        toast("Product updated successfully!");
      } else {
        const response = await fetch(`${API_URL}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(productData),
        });

        if (!response.ok) {
          throw new Error("Failed to add product");
        }

        const responseData = await response.json();

        const newProduct: Product = {
          ...productData,
          id: responseData.id || Date.now(),
        };

        dispatch(addProduct(newProduct));

        toast("Product added successfully!");
      }
      // Navigate = product list
      navigate("/");
    } catch (error) {
      console.error("Error saving product:", error);
      toast(
        `Failed to ${isEditing ? "update" : "add"} product. Please try again.`
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Breadcrumb
        title={isEditing ? "Edit Product" : "New Product"}
        items={[
          { label: "Product", to: "/" },
          { label: isEditing ? "Edit Product" : "Add Product" },
        ]}
      />

      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="grid lg:grid-cols-3 mt-5 gap-5">
          <Input
            type="text"
            label="title"
            className="px-5 py-3"
            id="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Enter title"
          />
          <Input
            type="text"
            label="category"
            placeholder="Enter category"
            id="category"
            value={formData.category}
            onChange={handleInputChange}
            className="px-5 py-3"
          />
          <Input
            type="number"
            label="price"
            placeholder="Enter price"
            className="px-5 py-3"
            id="price"
            value={formData.price}
            onChange={handleInputChange}
            min="0"
            step="0.01"
          />
          <Input
            type="number"
            label="rate"
            placeholder="Enter rate (0-5)"
            className="px-5 py-3"
            id="rate"
            value={formData.rate}
            onChange={handleInputChange}
            min="0"
            max="5"
            step="0.1"
          />
          <Input
            type="number"
            label="count"
            placeholder="Enter count"
            className="px-5 py-3"
            id="count"
            value={formData.count}
            onChange={handleInputChange}
            min="0"
          />
          <Input
            type="file"
            label="Image"
            placeholder="Select image"
            className="px-5 py-2.5"
            id="image"
            onChange={handleFileChange}
            accept="image/*"
          />
        </div>

        {/* Image Preview */}
        {formData.image && (
          <div className="mt-3">
            <label className="block text-sm font-medium mb-1">
              Image Preview:
            </label>
            <Image
              src={formData.image}
              alt="Preview"
              className="w-32 h-32 object-cover border border-gray-300 rounded"
            />
          </div>
        )}

        {/* description */}
        <div className="grid grid-cols-1 mt-5">
          <Textarea
            label="description"
            className="px-5 py-3"
            placeholder="Enter description"
            id="description"
            value={formData.description}
            onChange={handleInputChange}
            rows={4}
          />
        </div>

        {/* button submit */}
        <div className="flex justify-end items-center mt-14">
          <Button
            title={loading ? "Saving..." : isEditing ? "Update" : "Add"}
            type="submit"
            disabled={loading}
            classname={`${
              loading ? "bg-secondary" : "bg-primary"
            } text-white rounded-md px-20 py-3`}
          />
        </div>
        {/* button submit */}
      </form>
    </>
  );
};

export default AddProduct;
