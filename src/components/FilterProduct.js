import React, {Component} from 'react'

export default class FilterProduct extends Component {
  render() {
    return (
      <div className="card card-border">
        <article className="filter-group">
          <header className="card-header">
            <h5 className="title">Categories
            </h5>
          </header>
          <div className="card-body">
            <form className="mb-3">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search"/>
                <div className="input-group-append">
                  <button className="btn btn-primary" type="button">
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </form>
            <ul className="list-menu">
              <li>
                Electronics
              </li>
              <li>
                Watches
              </li>
              <li>Cinema
              </li>
              <li>Clothes
              </li>
              <li>Home items
              </li>
            </ul>
          </div>
        </article>
        <article className="filter-group">
          <header className="card-header">
            <h5 className="title">Price
            </h5>
          </header>
          <div className="filter-content collapse show" id="collapse_aside2">
            <div className="card-body">
              <input type="range" className="custom-range" min="0" max="100" name=""/>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Min</label>
                  <input className="form-control" placeholder="$0" type="number"/>
                </div>
                <div className="form-group text-right col-md-6">
                  <label>Max</label>
                  <input className="form-control" placeholder="$1,0000" type="number"/>
                </div>
              </div>
              <button className="btn btn-block btn-primary">Apply</button>
            </div>
          </div>
        </article>
        <article className="filter-group">
          <header className="card-header">
            <h5 className="title">Size</h5>
          </header>
          <div className="filter-content collapse show" id="collapse_aside3">
            <div className="card-body">
              <label className="checkbox-btn">
                <input type="checkbox"/>
                <span className="btn btn-light">
                  XS
                </span>
              </label>
              <label className="checkbox-btn">
                <input type="checkbox"/>
                <span className="btn btn-light">
                  SM
                </span>
              </label>
              <label className="checkbox-btn">
                <input type="checkbox"/>
                <span className="btn btn-light">
                  LG
                </span>
              </label>
              <label className="checkbox-btn">
                <input type="checkbox"/>
                <span className="btn btn-light">
                  XXL
                </span>
              </label>
            </div>
          </div>
        </article>
        <article className="filter-group">
          <header className="card-header">
            <h5 className="title">Rating
            </h5>
          </header>
          <div className="filter-content collapse show" id="collapse_aside4">
            <div className="card-body">
              <label className="custom-control custom-checkbox">
                <input type="checkbox"   className="custom-control-input"/>
                <div className="custom-control-label">Best
                </div>
              </label>
              <label className="custom-control custom-checkbox">
                <input type="checkbox"  className="custom-control-input"/>
                <div className="custom-control-label">Good
                </div>
              </label>
              <label className="custom-control custom-checkbox">
                <input type="checkbox"  className="custom-control-input"/>
                <div className="custom-control-label">Normal</div>
              </label>
              <label className="custom-control custom-checkbox">
                <input type="checkbox"  className="custom-control-input"/>
                <div className="custom-control-label">Not good</div>
              </label>
            </div>
          </div>
        </article>
      </div>
    )
  }
}