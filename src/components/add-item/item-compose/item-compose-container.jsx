import React from 'react';
import AddProductItem from './item-compose';
import { getFilterGroup } from '../../../redux/FilterGroupReducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import Preloader from '../../preloader/preloader';

class ItemComposeContainer extends React.Component {
  componentDidMount() {
    if (this.props) {
      const pathName = this.props.location.pathname;
      const id = pathName.slice(17);
      this.props.getFilterGroup(id);
    }
  }
  render() {
    return (
      <>
        {!this.props.filterGroup ? <Preloader /> : null}
        <AddProductItem {...this.props} props={this.props.filterGroup} />
      </>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    filterGroup: state.filterGroup.filterGroup,
  };
};

export default compose(
  connect(mapStateToProps, {
    getFilterGroup,
  }),
  withRouter
)(ItemComposeContainer);
