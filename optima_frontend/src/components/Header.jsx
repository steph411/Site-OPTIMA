import React, { Component } from 'react';
import HeaderMenu from './HeaderMenu';
import HeaderHiddenMenu from './HeaderHiddenMenu';


export default class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
         [
            <HeaderMenu key={1} />,
            <HeaderHiddenMenu key={2} />,
         ]
        );
    }
}
