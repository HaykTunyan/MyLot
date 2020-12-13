import React, { useState, useEffect } from "react";
import './user-purchases.scss';
import { Card, Tabs, Tab } from 'react-bootstrap';
import BidsPurchases from './bids-purchases/bids-purchases';
import PidePurchases from './pide-purchases/pide-purchases';
import UnpidePurchases from './unpide-purchases/unpide-purchases';
import { getUserLivePurchasesProduct_req, getUserFinishedPurchasesProduct_req } from '../../api/user-purchases/user-purchases';
import { payment_req } from "../../api/payment/payment.api";
import { NavLink } from "react-router-dom";
import { useIntl } from 'react-intl';

const UserPurchases = () => {

    const [livePurchasesProduct, setLivePurchasesProduct] = useState([]);
    const [finishedPurchasesProduct, setFinishedPurchasesProduct] = useState([]);
    const intl = useIntl();

    useEffect(() => {
        const userLivePurchases = async () => {
            try {
                const livePurchases = await getUserLivePurchasesProduct_req();
                setLivePurchasesProduct(livePurchases)
            } catch (e) {
                console.log('giftCards', e.response);
            }
        }
        userLivePurchases()
        const userFinishedPurchases = async () => {
            try {
                const finishedPurchases = await getUserFinishedPurchasesProduct_req();
                setFinishedPurchasesProduct(finishedPurchases)
            } catch (e) {
                console.log('giftCards', e.response);
            }
        }
        userFinishedPurchases()
    }, []);

    return (
        <React.Fragment>
            <div className="userPurchases-container container">
                <nav class="nav py-4">
                    <NavLink to="/home" className="text-dark mr-2">
                        {intl.messages.main_page}
                    </NavLink>
                    <span>&gt;</span>
                    <NavLink to="/purchases" className="active ml-2">
                        {intl.messages.participating_lots.title}
                    </NavLink>
                </nav>
                <div className="py-5">
                    <Tabs defaultActiveKey="Bids" transition={false} id="noanim-tab-example" >
                        <Tab eventKey="Bids" title={<span className={`Monsterrat_Medium`}>{intl.messages.participating_lots.step_one}</span>}>
                            <Card>
                                <div className="card-product">
                                    {!livePurchasesProduct ||
                                        !livePurchasesProduct.data ||
                                        livePurchasesProduct.data.length === 0
                                        ? <div className="p-5 text-center font-18">
                                            {intl.messages.participating_lots.step_text}
                                        </div>
                                        : <BidsPurchases data={livePurchasesProduct} />
                                    }
                                </div>
                            </Card>
                        </Tab>
                        <Tab eventKey="Pide" title={<span className={`Monsterrat_Medium`}>{intl.messages.participating_lots.step_two}</span>}>
                            <Card>
                                <div className="card-product">
                                    {!finishedPurchasesProduct ||
                                        !finishedPurchasesProduct.data ||
                                        finishedPurchasesProduct.data.length === 0
                                        ? <div className="p-5 text-center font-18">
                                            {intl.messages.participating_lots.step_text}
                                        </div>
                                        : <PidePurchases data={finishedPurchasesProduct} />
                                    }
                                </div>
                            </Card>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </React.Fragment>
    )
}

export default UserPurchases