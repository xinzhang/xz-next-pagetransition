import React from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';
import { motion } from 'framer-motion';

function ProductPage(props) {
  const router = useRouter();
  const { product } = router.query;

  return (
    <div className={styles['product-container']}>
      <h3>This is the product {product} details page.</h3>
      <motion.img layoutId={product} className={styles['product-img']} src={`/images/${product}.jpg`} />
    </div>
  );
}

export default ProductPage;
