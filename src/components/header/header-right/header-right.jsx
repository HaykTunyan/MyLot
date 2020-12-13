import React from 'react';
import '../header.scss';
import AddItemModal from '../../modal-popup/add-item-modal/add-item-modal';
import { useHistory } from 'react-router-dom';
import { useIntl } from 'react-intl';

const token = localStorage.token

const HeaderRight = (token) => {
  const intl = useIntl();
  let additem = useHistory();
  function itemClick() {
    additem.push("/addItem");
  }
  return (
    <ul className="align-items-center header-right nav">
      <li className="nav-item">
        {token.token
          ? <button onClick={itemClick} className="AddItem">
            <span className="d-none d-xl-block">{intl.messages.add_lot}</span>
            <span className="d-block d-xl-none">
              <img src={require('../../../assets/images/Header/plus.svg')} alt="ADDPLUS" />
            </span>
          </button>
          : <AddItemModal />
        }
      </li>
    </ul>
  )
}

export default HeaderRight