import { ChangeEvent, FormEvent, useState } from "react";
interface Prop {
  onNewCategory: (newCategory: string) => void;
}
export const AddCategory = ({ onNewCategory }: Prop) => {
  const [inputValue, setInputValue] = useState("");
  const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setInputValue(target.value);
  };
  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    // setCategories((categories) => [...categories, inputValue]);
    onNewCategory(inputValue.trim());
    setInputValue("");
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gift"
        value={inputValue}
        onChange={onInputChange}
      />
      <button type="submit">agregar</button>
    </form>
  );
};
