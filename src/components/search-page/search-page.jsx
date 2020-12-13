import React from 'react';
import './search-page.scss';
import { NavLink } from "react-router-dom";
import { Container, Row, Card } from "react-bootstrap";
import { useIntl } from 'react-intl';

const LiveImageUrl = 'https://mylot.am/storage/';

const SearchPage = (props) => {
    const intl = useIntl()
    const data = props.location.state.props.state.products
    if (!data || !data.data) {
        return null
    }
    return (
        <React.Fragment>
            <div className="container py-5">
                <nav class="nav py-4">
                    <NavLink to="/home" className="text-dark mr-2"> 
                        {intl.messages.main_page} 
                    </NavLink>
                    <span>&gt;</span>
                    <NavLink to="/search-page" className="active ml-2">
                    {intl.messages.Research_page} 
                    </NavLink>
                </nav>
                <div className="p-3 card">
                    <div className="itemsFound clearfix">
                        <p className="foundItems">
                            {intl.messages.Lot_lenght}
                            <span className="ml-1">{data.data.length}</span>
                        </p>
                    </div>
                    <div className="row">
                        {data.data.map(products =>
                            <NavLink
                                className="col-12 col-md-6 col-lg-4 col-xl-4  mt-5 mt-md-3"
                                to={'/product-page/' + products.id}
                                key={products.id}
                            >
                                <div className="card mx-3 containerCard">
                                    <div className="d-flex flex-column">
                                        <img
                                            src={
                                                LiveImageUrl +
                                                products.firstProductImage.data.cover + '_mediumOne.' +
                                                products.firstProductImage.data.ext
                                            }
                                            alt={products.firstProductImage.data.cover}
                                            className="w-100 border-bottom productsImg"
                                        />
                                        <h4 className="text-center mt-2 font-16 font-weight-bold">{products.title}</h4>
                                        <div className="p-3">
                                            <div className="d-flex justify-content-between mt-2">
                                                <span className="font-12 text-dark Sans_Regular">
                                                    {intl.messages.product_info.lot_id_name}
                                                </span>
                                                <span className="font-12 text-dark Sans_Regular">{products.id}</span>
                                            </div>
                                            <div className="d-flex justify-content-between mt-2">
                                                <span className="font-12 text-dark Sans_Regular">
                                                    {intl.messages.lot.product_type}
                                                </span>
                                                <span className="font-12 text-dark Sans_Regular">{products.product_type}</span>
                                            </div>
                                            <div className="d-flex justify-content-between mt-2">
                                                <span className="font-12 text-dark Sans_Regular">
                                                    {intl.messages.add_item.step_two_start_step}
                                                </span>
                                                <span className="font-12 text-dark Sans_Regular">{intl.formatNumber(products.start_price)}</span>
                                            </div>
                                            {
                                                products.buy_now_price
                                                    ? <div className="d-flex justify-content-between mt-2">
                                                        <span className="font-12 text-dark Sans_Regular">
                                                            {intl.messages.lot.buy_now_price}
                                                        </span>
                                                        <span className="font-12 text-dark Sans_Regular">{intl.formatNumber(products.buy_now_price)}</span>
                                                    </div>
                                                    : null
                                            }
                                            <div className="d-flex justify-content-between mt-2">
                                                <span className="font-12 text-dark Sans_Regular">
                                                    {intl.messages.product_info.end_date_text}
                                                </span>
                                                <span className="font-12 text-dark Sans_Regular">{products.end_date}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                        )}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default SearchPage