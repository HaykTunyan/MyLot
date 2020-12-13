import React, { useState, useEffect } from 'react';
import './user-auction.scss';
import LiveProduct from './live-product/live-product';
import { Link, NavLink } from "react-router-dom";
import {
    Card,
    Tabs,
    Tab
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import AwaitingProduct from './awaiting-product/awaiting-product';
import { getUserLiveAuction_req, getUserAwaitingAuction_req } from '../../api/user-aution/user.auction.api'
import UnpidePurchases from '../user-purchases/unpide-purchases/unpide-purchases';
import { PRODUCT_REDUCER } from '../../redux/itemReducer';
import { useIntl } from 'react-intl';

const UserAuction = () => {
    const [liveProduct, setLiveProduct] = useState([])
    const [awaitingProduct, setAwaitingProduct] = useState([])
    const dispatch = useDispatch();
    const intl = useIntl();
    const item = useSelector(state => state.itemReducer)
    useEffect(() => {
        const upUserLiveProduct = async () => {
            try {
                const userLiveProductList = await getUserLiveAuction_req()
                console.log("llll", userLiveProductList)
                setLiveProduct(userLiveProductList);
            } catch (e) {
                console.log('region product', e.response);
            }
        };
        upUserLiveProduct();

        const upUserAwaitingProduct = async () => {
            try {
                const userAwaitingProductList = await getUserAwaitingAuction_req()
                dispatch({ type: PRODUCT_REDUCER, payload: userAwaitingProductList })
                setAwaitingProduct(userAwaitingProductList);
            } catch (e) {
                console.log('region product', e.response);
            }
        };
        upUserAwaitingProduct();

    }, []);
    return (
        <React.Fragment>
            <div className="userAuction_container container">
                <nav class="nav py-4">
                    <NavLink to="/home" className="text-dark mr-2">
                        {intl.messages.main_page}
                    </NavLink>
                    <span className="lot-color">&gt;</span>
                    <NavLink to="/userAuction" className="active ml-2">
                        {intl.messages.my_lot}
                    </NavLink>
                </nav>
                <div className="py-5">
                    <Tabs defaultActiveKey="Awaiting" transition={false} id="noanim-tab-example" >
                        <Tab eventKey="Awaiting" title={<span className="tabTitle">{intl.messages.my_lotPage.step_two}</span>}>
                            <Card>
                                <Card.Body className="d-flex justify-content-center">
                                    <div className="addBtn">
                                        <Link to="/addItem" className="font-16 text-center btn-block AddLot">
                                            <span className="Sans_Bold text-white">{intl.messages.my_lotPage.step_button}</span>
                                        </Link>
                                    </div>

                                </Card.Body>
                                <div className="card-product py-5">
                                    {!awaitingProduct ||
                                        !awaitingProduct.data ||
                                        awaitingProduct.data.length === 0
                                        ? <div className="text-center">{intl.messages.my_lotPage.step_text}</div>
                                        : <AwaitingProduct data={item} />
                                    }
                                </div>
                            </Card>
                        </Tab>
                        <Tab eventKey="Live" title={<span className="tabTitle">{intl.messages.my_lotPage.step_one}</span>}>
                            <Card >
                                <Card.Body className="d-flex justify-content-center">
                                    <div className="addBtn">
                                        <Link to="/addItem" className="font-16 text-center btn-block AddLot">
                                            <span className="Sans_Bold text-white">{intl.messages.my_lotPage.step_button}</span>
                                        </Link>
                                    </div>
                                </Card.Body>

                            </Card>
                        </Tab>

                        <Tab eventKey="Upide" title={<span className="Monsterrat_Medium tabTitle">{intl.messages.my_lotPage.step_three}</span>}>
                            <Card>
                                <Card.Body className="d-flex justify-content-center">
                                    <div className="addBtn">
                                        <Link to="/addItem" className="font-16 text-center btn-block AddLot">
                                            <span className="Sans_Bold text-white">{intl.messages.my_lotPage.step_button}</span>
                                        </Link>
                                    </div>

                                </Card.Body>
                                <div className="card-product py-5">
                                    {!liveProduct ||
                                        !liveProduct.data ||
                                        liveProduct.data.length === 0
                                        ? <div className="text-center">{intl.messages.my_lotPage.step_text}</div>
                                        : <LiveProduct data={liveProduct} />
                                    }

                                </div>
                                <div className="card-product py-5">
                                </div>
                            </Card>
                        </Tab>

                    </Tabs>
                </div>
            </div>
        </React.Fragment>
    )
}

export default UserAuction
