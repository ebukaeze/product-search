import React, {Component} from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

class ProductRow extends Component {
  render(){
    const rows= [];
    let  lastCategory = null;

    this.props.product.forEach((product) => {
      if (product.category != lastCategory) {
       row.push(
         <ProductCategoryRow
         category={product.category}
          key={product.category}
          />
         )

      }
      row.push (
        <ProductRow product={product} key={product.name}/>
      );
      lastCategory = product.category;
    })
    render(

    )
  }
}
export default ProductRow;