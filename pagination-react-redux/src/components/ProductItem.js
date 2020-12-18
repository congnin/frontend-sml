import React from "react";

function ProductItem(props) {
  const { product, index } = props;

  return (
    <tr>
      <td className='col_order text-center'>{index + 1}</td>
      <td className='col_name'>
        {product.name} (id={product.id})
      </td>
    </tr>
  );
}

export default ProductItem;
