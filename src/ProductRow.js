import React from 'react';


class ProductRow extends React.Component {
  render(){
    const product = this.props.product;
    const name = product.stocked ? product.name : 
    <span style={{color: 'red'}}>
        {product.name}
      </span>;

    return(
      <div>
       <tr>
         <td>{name}</td>
         <td>{ product.price}</td>
         </tr>
         </div>
    )
  }
}
export default ProductRow;