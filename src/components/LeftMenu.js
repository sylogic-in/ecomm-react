import React, { Component } from 'react'

export default class LeftMenu extends Component {
    openNav() {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    }
    render() {
        return (
            <div id="main">
            <span onClick={this.openNav} className="ml-2 fa fa-bars fa-2x"></span>
            </div>
        )
    }
}
