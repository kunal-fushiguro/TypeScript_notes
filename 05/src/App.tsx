import { useState } from "react";
import "./App.css";

interface IProduct {
  id: number;
  title: string;
  price: number;
}

function App() {
  const [product, setProduct] = useState<IProduct[]>([
    {
      id: 1,
      title: "iphone",
      price: 120000,
    },
    {
      id: 1,
      title: "Mac book",
      price: 120000,
    },
  ]);
  return (
    <>
      <>
        <div>
          {product.map((product) => (
            <span id={`${product.id}`}>
              {product.title} : ${product.price}{" "}
            </span>
          ))}
        </div>
      </>
    </>
  );
}

export default App;
