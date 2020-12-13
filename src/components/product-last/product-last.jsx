import React from 'react';
import './product-last.scss';
import ImgOne from '../../assets/images/UserProduct/111111@2x.png';
import ImgTwo from '../../assets/images/UserProduct/222.png';
import ImgThree from '../../assets/images/UserProduct/merc2.png';
import ImgFour from '../../assets/images/UserProduct/merc3.png';
import ImgFive from '../../assets/images/UserProduct/merc4.png';
import Locetion from '../../assets/images/UserProduct/locetion.svg';
import { Divider, InputNumber } from 'antd';
import liveproducts from '../../redux/LiveAuctionReducer';

function onChange(value) {
    console.log(" onChange ", value)
}

const ProductLive = () => {

    return (
        <>
            <div className="productlive-container py-5">
                <div className="container">
                    <div className="p-4 card">
                        {/* {this.props.liveproducts.map(product =>  )} */}
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                <div className="row">
                                    <div className="col-md-12">
                                        <img src={ImgOne} className="w-100" alt="111111@2x" />
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-3">
                                        <img src={ImgTwo} className="w-100" alt="222" />
                                    </div>
                                    <div className="col-md-3">
                                        <img src={ImgThree} className="w-100" alt="merc2" />
                                    </div>
                                    <div className="col-md-3">
                                        <img src={ImgFour} className="w-100" alt="merc3" />
                                    </div>
                                    <div className="col-md-3">
                                        <img src={ImgFive} className="w-100" alt="merc4" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className=" ">
                                    <h3 className="text-left font-weight-bold font-26 Monsterrat_Medium">Mercedes AMG</h3>
                                    <div className="d-flex">
                                        <img src={Locetion} className=" " alt="LOCETION" />
                                        <span className="ml-3"> Yerevan</span>
                                    </div>

                                    <div className="mt-3">
                                        <div className="d-flex justify-content-between">
                                            <div className=" ">
                                                <span className="font-weight-bold font-14 Sans_Bold">Time left: </span>
                                                <span className="ml-3 font-14 time-danger">3d 03:05:48</span>
                                            </div>
                                            <div className=" ">
                                                <span className="font-14"> 17/12/2019</span>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column">
                                            <span className="font-14 Sans_Regular"> About item:</span>
                                            <p className="font-14 mt-3 text-jumbatron Sans_Regular">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat laborum distinctio nesciunt eius dolor nemo culpa dolorum, unde quisquam enim officiis cupiditate voluptatum aliquam eveniet iusto. Ratione reiciendis ullam consequatur.</p>
                                        </div>
                                    </div>
                                    <Divider />
                                    <div className="">
                                        <div className="d-flex justify-content-between mt-3">
                                            <div className=" ">
                                                <span className="font-14 Sans_Regular">Start price: </span>
                                            </div>
                                            <div className=" ">
                                                <span className="font-14 font-weight-bold"> 8.000$</span>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between mt-3">
                                            <div className=" ">
                                                <span className="font-14 Sans_Regular">Highest suggestion:</span>
                                            </div>
                                            <div className=" ">
                                                <span className="font-14 font-weight-bold"> 9.500$</span>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between mt-3">
                                            <div className=" ">
                                                <span className="font-14 Sans_Regular">Min bid: </span>
                                            </div>
                                            <div className=" ">
                                                <span className="font-14 font-weight-bold"> 200$</span>
                                            </div>
                                        </div>
                                        <div className="d-flex mt-3">
                                            <span className="font-14 Sans_Bold">Your bid:</span>
                                            <span className="ml-3">
                                                <InputNumber size="small" min={50} max={1000} defaultValue={200} onChange={onChange} />
                                            </span>
                                        </div>
                                        <div className="d-flex justify-content-end mt-5">
                                            <button className="btn Sans_Bold addFav mr-5">
                                                Add to favorites
                                            </button>
                                            <button className="btn Sans_Bold addBid">
                                                Bid now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-3 p-4 card">
                        <h3 className="font-18 text-left Sans_Bold">Payment Options</h3>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <p className="font-14 Sans_Regular">
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero. Suspendisse non lacinia lectus, in gravida augue. Phasellus posuere sem sit amet ultricies ultricies. Nunc ultrices erat pretium felis laoreet gravida. Aliquam tincidunt, nullaCras id risus urna. Quisque id volutpat lectus. Vestibulum volutpat ac quam hendrerit feugiat. Sed laoreet eu tortor dictum imperdiet. Aliquam quam nulla, porta in dolor non, tempus mattis nunc. Integer dignissim condimentum neque ut suscipit. Duis ac diam eget urna euismod congue.
                                </p>
                            </div>
                            <div className="col-12 col-md-6">
                                <p className="font-16 Sans_Bold"> Similar items: </p>
                                <div className="row mt-3">
                                    <div className="col-md-3">
                                        <img src={ImgTwo} className="w-100" alt="222" />
                                    </div>
                                    <div className="col-md-3">
                                        <img src={ImgThree} className="w-100" alt="merc2" />
                                    </div>
                                    <div className="col-md-3">
                                        <img src={ImgFour} className="w-100" alt="merc3" />
                                    </div>
                                    <div className="col-md-3">
                                        <img src={ImgFive} className="w-100" alt="merc4" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductLive