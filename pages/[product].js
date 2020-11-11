import React from "react";
import { useRouter } from "next/router";

function ProductPage(props) {
  const router = useRouter();
  const { product } = router.query;

  return <div>This is the product {product} details page</div>;
}

export default ProductPage;
