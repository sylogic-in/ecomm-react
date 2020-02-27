import React, {Component} from 'react'
import logo from '../shopico.png'
export default class Header extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-12 col-sm-12 col-12 main-section">
              <a className="navbar-brand "  href="#">
              <img className="img-responsive" src={logo} alt="Logo" />
              </a>
          <div className="dropdown">
              <button type="button" className="btn btn-light" data-toggle="dropdown">
              <i className="fa fa-shopping-cart" aria-hidden="true"></i> Cart <span className="badge badge-pill badge-danger">3</span>
              </button>
          </div>
        </div>
      </div>
    )
  }
}
