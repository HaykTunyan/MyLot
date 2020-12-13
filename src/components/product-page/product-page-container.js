import React from "react";
import { connect } from "react-redux";
import { getProductPage } from "../../redux/ProductPageReducer";
import ProductPage from "./product-page";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import Preloader from "../preloader/preloader";

class ProductPageContainer extends React.Component {
  componentDidMount() {
    const pathName = this.props.location.pathname;
    const productId = pathName.slice(14);
    this.props.getProductPage(productId);
  }
  render() {
    return (
      <>
        {!this.props.productPage ? <Preloader /> : null}
        <ProductPage {...this.props} props={this.props.productPage} />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    productPage: state.productPage.productPage,
  };
};

export default compose(
  connect(mapStateToProps, {
    getProductPage,
  }),
  withRouter
)(ProductPageContainer);
