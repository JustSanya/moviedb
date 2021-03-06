import React, { Component } from 'react'

export default class Pagination extends Component {
  render() {
    const {page, total_pages, onChangePage} = this.props;

    return (
      <>
      <p>{page} из {total_pages}</p>
      <div className="btn-group">
        <button 
          type="button"
          className="btn btn-light"
          disabled={page === 1}
          onClick={() => {
            onChangePage(page - 1)
          }}
        >
          Назад
        </button>
        <button 
          type="button" 
          className="btn btn-light" 
          onClick={() => {
            onChangePage(page + 1)
          }}
        >
          Вперёд
        </button>
      </div>
      </>
    )
  }
}
