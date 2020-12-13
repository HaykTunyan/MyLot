import React from "react";
import './slick-slider.scss';
import { Config } from "../../../constants/config";
import ImageGallery from 'react-image-gallery';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slider.css';
import Preloader from "../../preloader/preloader";

const CenterMode = ({ imgData }) => {
  console.log('imgData', imgData)
  if (!imgData || !imgData.data) {
    return <Preloader />
  }
  const images = imgData.data.map(item => ({
    original: `${Config.ImageUrl}${item.cover}_mediumOne.${item.ext}`,
    thumbnail: `${Config.ImageUrl}${item.cover}_mediumOne.${item.ext}`,
  })
  )
  return (
    <div>
      {console.log('imagessss', images)}
      <ImageGallery items={images} />
    </div>
  );
}
export default CenterMode