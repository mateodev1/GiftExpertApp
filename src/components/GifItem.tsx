import { imageType } from "../types";

export const GifItem = ({ title, url }: imageType) => {
  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};
