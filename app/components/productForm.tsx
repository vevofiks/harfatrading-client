'use client';

import { useState } from 'react';
import { TextField, Button, MenuItem, Select, FormControl, InputLabel, Typography, Box } from '@mui/material';

interface ProductFormProps {
  onSubmit: (data: { name: string; description: string; image: File | string; category: string }) => void;
  initialData?: {
    _id?: string;
    name?: string;
    description?: string;
    image?: string;
    category?: { _id: string; name: string };
  };
  categories: { _id: string; name: string }[];
}

export default function ProductForm({ onSubmit, initialData = {}, categories }: ProductFormProps) {
  const [name, setName] = useState(initialData.name || '');
  const [description, setDescription] = useState(initialData.description || '');
  const [category, setCategory] = useState(initialData.category?._id || '');
  const [imagePreview, setImagePreview] = useState(initialData.image || '');
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImagePreview('');
    setImageFile(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ 
      name, 
      description, 
      image: imageFile || imagePreview,
      category 
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        margin="normal"
        required
      />

      <TextField
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        fullWidth
        margin="normal"
        multiline
        rows={3}
        required
      />

      <FormControl fullWidth margin="normal" required>
        <InputLabel>Category</InputLabel>
        <Select 
          value={category} 
          onChange={(e) => setCategory(e.target.value)}
          label="Category"
        >
          {categories.map((cat) => (
            <MenuItem key={cat._id} value={cat._id}>
              {cat.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Box marginY={2}>
        {imagePreview ? (
          <Box display="flex" flexDirection="column" alignItems="center" gap={1}>
            <img 
              src={imagePreview} 
              alt="Preview" 
              style={{ maxWidth: '100%', maxHeight: 200, borderRadius: 8 }} 
            />
            <Button variant="outlined" color="secondary" onClick={handleRemoveImage}>
              Remove Image
            </Button>
          </Box>
        ) : (
          <Button variant="outlined" component="label" fullWidth>
            Upload Image
            <input 
              type="file" 
              accept="image/*" 
              hidden 
              onChange={handleImageChange} 
            />
          </Button>
        )}
      </Box>

      <Button type="submit" variant="contained" fullWidth>
        {initialData._id ? 'Update Product' : 'Add Product'}
      </Button>
    </form>
  );
}