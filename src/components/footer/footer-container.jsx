import React from "react";
import { connect } from "react-redux";
import Footer from './footer';
import { GetFooterTitle } from "../../../redux/FooterReducer";

class FooterContainer extends React.Component {
    componentDidMount() {
        this.props.GetFooterTitle
    }
    render() {
        return <Footer footertitle={this.props.footertitle} />
    }
}

let mapStateToProps = (state) => {
    return {
        footertitle: state.footer.footertitle,
    }
}

export default connect(mapStateToProps, {
    GetFooterTitle
})(FooterContainer)