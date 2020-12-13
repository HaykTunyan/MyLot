import React, { useState, useEffect } from 'react';
import { getCategory_req } from '../../../../api/category-list/category.list.api';
import CategoryChild from './categorychild';

const CategoryChildContainer = () => {
  const [upCategoryChild, setCategoryChild] = useState([])
  useEffect(() => {
    const upCategoryChildProducts = async () => {
      try {
        const categorychildProductsList = await getCategory_req();
        setCategoryChild(categorychildProductsList);
      } catch (e) {
        console.log( e.response );
      }
    };
    upCategoryChildProducts();

  }, []);
  return (
    <React.Fragment>
      <CategoryChild data={upCategoryChild} />
    </React.Fragment>
  )
}
export default CategoryChildContainer