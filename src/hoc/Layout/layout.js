import React, { Component } from 'react'
import './layout.css'
export default class Layout extends Component {
    state={

    };
    render() {
        return (
            <div>
                {/* We want to access whatever is inside layout in routes page
                    so from props we get the children!*/}
                   HEADER >>>>>>>>
                {this.props.children}
                   FOOTER >>>>>>>>
            </div>
        )
    }
}
