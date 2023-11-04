import { GifItem } from "./GifItem";
import { imageType } from "../types";
import { useFetchGifs } from "../hooks/useFetchGifs";

interface Prop {
  category: string;
}

export const GifGrid = ({ category }: Prop) => {
  const { images, isLoading } = useFetchGifs(category);
  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h2>Cargando...</h2>}
      <div className="card-grid">
        {images.map((image: imageType) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
