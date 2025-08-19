export const validateForm = (formData: any) => {
  const errors: string[] = [];

  if (!formData.title.trim()) errors.push("Title is required.");
  if (!formData.category.trim()) errors.push("Category is required.");
  if (!formData.price || Number(formData.price) <= 0)
    errors.push("Price must be greater than 0.");
  if (!formData.image) errors.push("Please select an image.");

  return errors;
};
