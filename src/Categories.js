import React from 'react';

const Categories = ({filterItems,categories}) => {
  return (<div className="btn-container">
    {categories.map((category,index) =>{
      return (<button type="button" onClick={() => filterItems(category)} className="filter-btn" key={index}>
        {category}
      </button>);
    })}
  </div>);
};

export default Categories;
