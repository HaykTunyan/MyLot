import React from 'react';
import './payment-card.scss';
import amex from '../../../assets/images/Payment_logos_all/amex_logo.png';
import arca from '../../../assets/images/Payment_logos_all/arca_logo.png';
import masterCard from '../../../assets/images/Payment_logos_all/mastercard_logo.png';
import visa from '../../../assets/images/Payment_logos_all/visa_logo.png';

const PaymentCard = () => {
    return (
        <div className="card-block">
            <div className="card-img-block">
                <img src={amex} alt='AMEX-LOGO' />
            </div>
            <div className="card-img-block">
                <img src={arca} alt='ARCA-LOGO' />
            </div>
            <div className="card-img-block">
                <img src={masterCard} alt='MASTERCARD-LOGO' />
            </div>
            <div className="card-img-block">
                <img src={visa} alt='VISA_LOGO' />
            </div>
        </div>
    )
}

export default PaymentCard