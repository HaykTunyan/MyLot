import React, { useState, useEffect } from "react";
import { getCategory_req } from "../../../api/category-list/category.list.api";
import ItemCategory from "./ItemCategory";

const ItemCategoryContainer = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const categoryList = async () => {
      try {
        const categoryList = await getCategory_req();
        if (categoryList && categoryList.data) {
          setCategory(categoryList);
        }
      } catch (e) {
        // console.log('e', e.response);
      }
    };
    categoryList();
  }, []);

  return <ItemCategory data={category} />;
};

export default ItemCategoryContainer;
