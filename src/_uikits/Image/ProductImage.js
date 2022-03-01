import React, { useMemo } from 'react';
import { REACT_APP_API_URL_PRODUCT } from '@env';

import Image from './index';

function ProductImage({ product, ...props }) {

  const productImage = useMemo(() => {
    if (product?.images?.url) return { uri: product?.images?.url };

    if (product?.images?.path) return { uri: `${REACT_APP_API_URL_PRODUCT}/files/${product?.images?.path}` };

    if (product?.images?.raw) return product.images.raw;

    return undefined;
  }, [product?.images]);

  return (
    <Image source={productImage} {...props} />
  );
}

export default ProductImage;