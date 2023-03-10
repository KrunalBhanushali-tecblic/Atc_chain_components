import React from 'react';
import { motion } from 'framer-motion';
import {
  Banner,
  ErrorBoundary,
  MainProductPage,
  Slider,
  SubProducts,
} from '../Ui';

import { staggerContainer } from '../../utils/motion';

const ProductsPage = ({ currentPage }) => {
  return (
    <ErrorBoundary>
      <div>
        <Banner image={'product-page-banner'} />
        <div className="px-4 2xl:px-8 relative">
          <div className="-mt-20">
            <section className="sandbox__carousel">
              <Slider>
                <SubProducts />
              </Slider>
            </section>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
          >
            <MainProductPage currentPage={currentPage} />
          </motion.div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default ProductsPage;
