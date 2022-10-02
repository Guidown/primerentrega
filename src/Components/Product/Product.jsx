import React from "react";

const Product = () => {
  return <>
  const [products, setProduct] = useState([]);
  useEffect(() => {
    fetch("../../../Data/Data.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);
  </>;
};

export default Product;
