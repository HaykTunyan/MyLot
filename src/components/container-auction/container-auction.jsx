import React, { useState, useEffect } from "react";
import './container-auction.scss';
import Suggestitem from "../suggest-item/suggest-item";
import SuggestedAddItem from "../suggested-add-item/suggested-add-item";
import SearchNav from "../header/search/search";
import {
    getUpcomingProducts_req,
    getLiveProducts_req,
    getLastProducts_req
} from "../../api/product/product.api";
import Expected from "./components/expected";
import LiveAuction from "./components/live-auction";
import LastChanseAuction from "./components/last-chanse";
import CarouselMain from "../carousel/carousel-main";

const ContainerAuction = () => {
    const token = localStorage.token
    const [upComingProducts, setUpComingProducts] = useState([])
    const [liveProducts, setLiveProducts] = useState([])
    const [lastChanse, setLastChanse] = useState([])
    useEffect(() => {
        // window.scrollTo(0, 0);
        const upComingProductsList = async () => {
            try {
                const expectedProductsList = await getUpcomingProducts_req();
                if (expectedProductsList && expectedProductsList.data) {
                    setUpComingProducts(expectedProductsList);
                }
            } catch (e) {
                console.log('e', e.response);
            }
        };
        upComingProductsList();
        const liveProductsList = async () => {
            try {
                const liveProductsList = await getLiveProducts_req();
                if (liveProductsList && liveProductsList.data) {
                    setLiveProducts(liveProductsList);
                }
            } catch (e) {
                console.log('e', e.response);
            }
        };
        liveProductsList();
        const lastProductsList = async () => {
            try {
                const lastProductsList = await getLastProducts_req();
                if (lastProductsList && lastProductsList.data) {
                    setUpComingProducts(lastProductsList);
                }
            } catch (e) {
                console.log('e', e.response);
            }
        };
        lastProductsList();
    }, []);

    return (
        <>
            <CarouselMain />
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-9  order-0 order-xl-0">
                        <div className="card d-block d-lg-none my-3 p-2 mobile-form">
                            <SearchNav />
                        </div>
                        <LiveAuction data={liveProducts} />
                        <LastChanseAuction data={lastChanse} />
                        <Expected data={upComingProducts} />
                    </div>
                    <div className="col-lg-3 mt-5 mt-lg-0 order-1 order-lg-1">
                        <div className="card">
                            <Suggestitem />
                            <SuggestedAddItem />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContainerAuction