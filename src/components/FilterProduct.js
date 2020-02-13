import React, {Component} from 'react'

export default class FilterProduct extends Component {
  render() {
    return (
      <div className="card card-border">
        <article class="filter-group">
          <header class="card-header">
            <h5 class="title">Categories
            </h5>
          </header>
          <div class="card-body">
            <form class="mb-3">
              <div class="input-group">
                <input type="text" class="form-control" placeholder="Search"/>
                <div class="input-group-append">
                  <button class="btn btn-primary" type="button">
                    <i class="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </form>
            <ul class="list-menu">
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
        <article class="filter-group">
          <header class="card-header">
            <h5 class="title">Price
            </h5>
          </header>
          <div class="filter-content collapse show" id="collapse_aside2">
            <div class="card-body">
              <input type="range" class="custom-range" min="0" max="100" name=""/>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label>Min</label>
                  <input class="form-control" placeholder="$0" type="number"/>
                </div>
                <div class="form-group text-right col-md-6">
                  <label>Max</label>
                  <input class="form-control" placeholder="$1,0000" type="number"/>
                </div>
              </div>
              <button class="btn btn-block btn-primary">Apply</button>
            </div>
          </div>
        </article>
        <article class="filter-group">
          <header class="card-header">
            <h5 class="title">Size</h5>
          </header>
          <div class="filter-content collapse show" id="collapse_aside3">
            <div class="card-body">
              <label class="checkbox-btn">
                <input type="checkbox"/>
                <span class="btn btn-light">
                  XS
                </span>
              </label>
              <label class="checkbox-btn">
                <input type="checkbox"/>
                <span class="btn btn-light">
                  SM
                </span>
              </label>
              <label class="checkbox-btn">
                <input type="checkbox"/>
                <span class="btn btn-light">
                  LG
                </span>
              </label>
              <label class="checkbox-btn">
                <input type="checkbox"/>
                <span class="btn btn-light">
                  XXL
                </span>
              </label>
            </div>
          </div>
        </article>
        <article class="filter-group">
          <header class="card-header">
            <h5 class="title">Rating
            </h5>
          </header>
          <div class="filter-content collapse show" id="collapse_aside4">
            <div class="card-body">
              <label class="custom-control custom-checkbox">
                <input type="checkbox" checked="" class="custom-control-input"/>
                <div class="custom-control-label">Best
                </div>
              </label>
              <label class="custom-control custom-checkbox">
                <input type="checkbox" checked="" class="custom-control-input"/>
                <div class="custom-control-label">Good
                </div>
              </label>
              <label class="custom-control custom-checkbox">
                <input type="checkbox" checked="" class="custom-control-input"/>
                <div class="custom-control-label">Normal</div>
              </label>
              <label class="custom-control custom-checkbox">
                <input type="checkbox" checked="" class="custom-control-input"/>
                <div class="custom-control-label">Not good</div>
              </label>
            </div>
          </div>
        </article>
      </div>
    )
  }
}