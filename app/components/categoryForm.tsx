// components/CategoryForm.tsx
'use client';

import { useState } from 'react';
import { TextField, Button } from '@mui/material';

interface CategoryFormProps {
  onSubmit: (data: { name: string }) => void;
  initialData?: { _id?: string; name?: string };
}

export default function CategoryForm({ onSubmit, initialData = {} }: CategoryFormProps) {
  const [name, setName] = useState(initialData.name || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Category Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" fullWidth>
        {initialData._id ? 'Update Category' : 'Add Category'}
      </Button>
    </form>
  );
}