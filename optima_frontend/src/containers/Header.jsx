import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import HeaderMenu from '../components/HeaderMenu';
import HeaderHiddenMenu from '../components/HeaderHiddenMenu';
import { changeHiddenMenuVisibility } from '../actions/headerActions';
import { filterOptions, changeValue } from '../actions/searchActions';


class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
         [
            <HeaderMenu
               key={1}
               results={this.props.searchReducer.results}
               filterOptions={this.props.filterOptions}
               changeHiddenMenuVisibility={this.props.changeHiddenMenuVisibility}
               loading={this.props.searchReducer.loading}
               value={this.props.searchReducer.value}
               changeValue={this.props.changeValue}
            />,
            <HeaderHiddenMenu key={2} visibility={this.props.headerReducer.visibility} />,
         ]
        );
    }
}

const mapStateToProps = (state) => {
   return ({
      headerReducer: state.headerReducer,
      searchReducer: state.searchReducer,
   });
};

const mapDispatchToProps = (dispatch) => {
   return (bindActionCreators({ changeHiddenMenuVisibility, filterOptions, changeValue }, dispatch));
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

