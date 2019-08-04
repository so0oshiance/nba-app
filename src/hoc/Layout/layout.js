import React, { Component } from 'react'
import Header from '../../components/Header/header'
import Footer from '../../components/Footer/footer'
import './layout.css'
export default class Layout extends Component {
    state={
        showNav:false
    };
    toggleSideNav=(bln)=>{
         this.setState({
            showNav:bln
             }
         );
    }
    render() {
        return (
            <div>
                {/* We want to access whatever is inside layout in routes page
                    so from props we get the children!*/}
                <Header
                        showNav={this.state.showNav}
                        onHideNav={()=>this.toggleSideNav(false)}
                        onOpenNav={()=>this.toggleSideNav(true)}
                />
                {this.props.children}
                <Footer/>
            </div>
        )
    }
}
