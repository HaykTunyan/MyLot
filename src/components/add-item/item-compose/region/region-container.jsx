import React, { useState, useEffect } from 'react';
import { getRegions_req } from '../../../../api/product/product.api';
import Region from './region';

const RegionContainer = () => {
  const [upRegions, setRegions] = useState([]);
  useEffect(() => {
    const upRegionProducts = async () => {
      try {
        const regionProductsList = await getRegions_req();
        setRegions(regionProductsList);
      } catch (e) {
        console.log(e.response);
      }
    };
    upRegionProducts();
  }, []);
  return (
    <React.Fragment>
      <Region data={upRegions} />
    </React.Fragment>
  );
};
export default RegionContainer;
