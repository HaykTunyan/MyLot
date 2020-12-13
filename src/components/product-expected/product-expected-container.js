import React from "react";
import { connect } from "react-redux";
import { getLiveProducts } from "../../redux/LiveAuctionReducer";
import ProductLive from "./ProductLive";

class ProductLiveContainer extends React.Component {
  componentDidMount() {
    this.props.getLiveProducts();
  }
  render() {
    return <ProductLive liveproducts={this.props.liveproducts} />;
  }
}

let mapStateToProps = (state) => {
  return {
    liveproducts: state.liveAuction.liveproducts,
  };
};

export default connect(mapStateToProps, {
  getLiveProducts,
})(ProductLiveContainer);
