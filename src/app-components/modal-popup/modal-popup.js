import React from "react";
import "./modal-popup.scss";
import { Modal } from 'react-bootstrap';

const ModalPopup = ({ text, _onClick = () => {} }) => {
  return (
    // <div class="modal fade in" tabindex="-1" role="dialog">
    //   <div class="modal-dialog" role="document">
    //     <div class="modal-content">
    //       <div class="modal-header">
    //         <h5 class="modal-title">Modal title</h5>
    //         <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={_onClick}>
    //           <span aria-hidden="true">&times;</span>
    //         </button>
    //       </div>
    //       <div class="modal-body">
    //           <div className="popup-text">{text && <span>{text}</span>}</div>
    //       </div>          
    //     </div>
    //   </div>
    // </div>

    <div className="modal-popup" tabindex="-1" role="dialog">
      <div className="modal-popup-text"  role="document">
        <div class="modal-header">
          <button type="button" class="close close-icon" data-dismiss="modal" aria-label="Close" onClick={_onClick}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div className="popup-text">
            <p className="">{text && <span>{text}</span>}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModalPopup;
