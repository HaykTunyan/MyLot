import React from 'react';
import { connect } from 'react-redux';
import { getTopProducts } from '../../redux/TopAuctionReducer';
import ProductTop from './ProductTop';

class ProductTopContainer extends React.Component {
    componentDidMount() {
        this.props.getTopProducts()
    }
    render() {
        return <ProductTop topproducts={this.props.topproducts} />
    }
}

let mapStateToProps = (state) => {
    return {
        topproducts: state.topAuction.topproducts,
    }
}


export default connect(mapStateToProps, {
    getTopProducts
})(ProductTopContainer)