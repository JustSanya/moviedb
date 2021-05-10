import React, { Component } from 'react';

export default class ClearFilters extends Component {
  render() {
    // TODO: disable button when no filters are applied
    const {clearFilters} = this.props
    return <button onClick={clearFilters} className="btn btn-danger d-block mt-3">Сбросить</button>;
  }
}
