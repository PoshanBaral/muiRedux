import { useEffect, useState } from "react";
import axios from "axios";

export type Products = [
  _id: number,
  title: string,
  price: number,
  category: {
    _id: number;
    name: string;
    slug: string;
  },
  description: "",
  createdBy: {
    role: string;
    _id: number;
    name: string;
  },
  createdAt: Date,
  updatedAt: Date,
  slug: string,
  image: ""
];

function AxiosIndex() {
  const [products, setProducts] = useState<Products[] | null>();
  useEffect(() => {
    const url = "https://api.storerestapi.com/products";
    axios.get(url).then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  }, []);

  return (
    <div>
      {products?.length
        ? products.map((product: any) => {
            return <p> {product.title + "&" + product.price} </p>;
          })
        : null}
    </div>
  );
}

export default AxiosIndex;
