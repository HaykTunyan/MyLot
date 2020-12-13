import React, { useState, useEffect } from 'react';
import { getCategory_req } from '../../../../api/category-list/category.list.api';
import Category from './category';

const CategoryContainer = () => {
  const [upCategory, setCategory] = useState([])

  useEffect(() => {
    const upCategoryProducts = async () => {
      try {
        const categoryProductsList = await getCategory_req();
        setCategory(categoryProductsList);
      } catch (e) {
        console.log('category product', e.response);
      }
    };
    upCategoryProducts();
  }, []);

  return (
    <React.Fragment>
      <Category data={upCategory} />
    </React.Fragment>
  )

}

export default CategoryContainer