import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GIftExpertApp = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const onAddCategory = (newCategory: string) => {
    if (categories.includes(newCategory)) return;

    setCategories([...categories, newCategory]);
  };
  return (
    <>
      <h1>GIftExpertApp</h1>
      <AddCategory onNewCategory={onAddCategory} />
      <ol>
        {categories.map((category) => (
          <GifGrid category={category} key={category} />
        ))}
      </ol>
    </>
  );
};
