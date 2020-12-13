import React from "react";
import "./upload-images.scss";
import ImageUploading from "react-images-uploading";
import Upload from "../../../assets/images/UserProduct/upload.png";
import EDIT from "../../../assets/images/UserProduct/edit.svg";
import DELETE from "../../../assets/images/UserProduct/delete.svg";
import { useIntl } from 'react-intl';

const UploadImages = (props) => {

  const { setImages } = props;
  const maxNumber = 12;
  const intl = useIntl();

  return (
    <>
      <div className="d-flex my-4">
        <ImageUploading multiple onChange={setImages} maxNumber={maxNumber}>
          {({ imageList, onImageUpload, onImageRemoveAll }) => (
            <div className="upload__image-wrapper w-100 row">
              <div className="d-flex col-12 col-sm-8 col-md-9 col-xl-10 flex-wrap">
                {imageList.map((image) => (
                  <div
                    key={image.key}
                    className="mt-3 image-item mx-2 border Keyimages"
                  >
                    <div className="image-item__btn-wrapper d-flex justify-content-between">
                      <button
                        className="btn btn-icon deleteBtn"
                        onClick={image.onUpdate}
                      >
                        <img src={EDIT} alt="EDIT" />
                      </button>
                      <button
                        className="btn btn-icon editBtn"
                        onClick={image.onRemove}
                      >
                        <img src={DELETE} alt="DELETE" />
                      </button>
                    </div>
                    <img
                      src={image.dataURL}
                      alt=""
                      width="100"
                      className="image-item imageItem"
                    />
                  </div>
                ))}
              </div>
              <div className=" col-12 col-sm-4 col-md-3 col-xl-2 flex-column ">
                <div className="btn mt-3 upload-images" onClick={onImageUpload}>
                  <img src={Upload} alt="UPLOAD" className="imgUpload" />
                  <span className="btn"> {intl.messages.add_item.add_images}</span>
                </div>
                &nbsp;
                <button
                  className="btn mt-3 d-none UploadBtn"
                  onClick={onImageRemoveAll}
                >
                  <span className="btn UploadBtntext">&#735;</span>
                </button>
              </div>
            </div>
          )}
        </ImageUploading>
      </div>
    </>
  );
};

export default UploadImages;
