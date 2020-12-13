import React, { useEffect, useState } from 'react'
import './payment.scss'
import { paymentFinish_req } from '../../api/payment/payment.api'
import { useLocation, Link } from 'react-router-dom'

const Payment = () => {
    const [item, setItem] = useState('')
    const location = useLocation()
    console.log("location", location)

    const payment = location.search
    const paymentReq = payment.slice(6)
    console.log("paymentReq", paymentReq)

    useEffect(() => {
        const paymentFinish = async () => {
            try {
                const finishPayment = await paymentFinish_req(paymentReq);
                setItem(finishPayment);
            } catch (e) {
                console.log('e', e.response);
            }
        };
        paymentFinish()
    }, [])
    return (
        <div className='payment-done'>
            Շնորհակալություն դուք գնել եք լոտը։
            Վերադառնալ <Link to={`/home`} >գլխավոր էջ</Link>
        </div>
    )
}
export default Payment