import React, { useState, useEffect, useCallback, memo } from "react";
import PropTypes from "prop-types";
import ImageUploader from "react-images-upload";
import { pictureMapper } from "../../utils/imageData.util";

const UploadImage = memo(
  ({
    uploadTitle = "Choose images",
    contentClassName = "",
    data,
    maxFileSize = 5242880,
    imgExtension = [".jpg", ".gif", ".png"],
    getState = () => null,
    children,
    ...props
  }) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
      if (Array.isArray(data)) {
        setImages(data);
      }
    }, [data]);

    useEffect(() => {
      getState(images);
    }, [images]);

    const handleChange = useCallback(
      (files, pictures) => {
        setImages(images.concat(pictures.map(pictureMapper)));
      },
      [images]
    );

    return (
      <div className="d-flex  my-4">
        <div className="d-flex col-12 col-sm-8 col-md-9 col-xl-10 flex-wrap">
          {children(images)}
        </div>
        <ImageUploader
          buttonText={uploadTitle}
          onChange={handleChange}
          imgExtension={imgExtension}
          maxFileSize={maxFileSize}
          {...props}
        />
        {/* 
        <div className={contentClassName}>
            {children(images)}

          </div>
        */}
      </div>
    );
  }
);

UploadImage.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      cover: PropTypes.string,
    })
  ),

  uploadTitle: PropTypes.string,
  contentClassName: PropTypes.string,
  maxFileSize: PropTypes.number,
  imgExtension: PropTypes.arrayOf(PropTypes.oneOf([".jpg", ".gif", ".png"])),
  getState: PropTypes.func,
  children: PropTypes.func.isRequired,
  className: PropTypes.string,
  fileContainerStyle: PropTypes.object,
  buttonClassName: PropTypes.string,
  buttonStyles: PropTypes.object,
  withPreview: PropTypes.bool,
  accept: PropTypes.string,
  name: PropTypes.string,
  withIcon: PropTypes.bool,
  buttonText: PropTypes.string,
  withLabel: PropTypes.bool,
  label: PropTypes.string,
  labelStyles: PropTypes.object,
  labelClass: PropTypes.string,
  fileSizeError: PropTypes.string,
  fileTypeError: PropTypes.string,
  errorClass: PropTypes.string,
  errorStyle: PropTypes.object,
  singleImage: PropTypes.bool,
};

export default UploadImage;
