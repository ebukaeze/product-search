import React, {Component} from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="main">
        <SearchBar />
        <ProductTable />
        </div>
    )
  }
}

export default FilterableProductTable;