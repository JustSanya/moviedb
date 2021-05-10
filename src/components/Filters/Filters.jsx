import React from "react";
import SortBy from './SortBy'
import ReleaseYear from './PrimaryReleaseYear'
import Pagination from './Pagination'
import ClearFilters from './ClearFilters'
import Genres from './Genres'

export default class Filters extends React.Component {
  
  render() {
    const {
      filters: {
        sort_by,
        primary_release_year,
        genres
      },
      page,
      total_pages,
      onChangeFilters,
      onChangePage,
      onChangeGenre,
      clearFilters
    } = this.props

    return (
      <form className="mb-3">
        <SortBy sort_by={sort_by} onChangeFilters={onChangeFilters} />
        <ReleaseYear primary_release_year={primary_release_year} onChangeFilters={onChangeFilters} />
        <Pagination total_pages={total_pages} page={page} onChangePage={onChangePage} />
        <Genres genres={genres} onChangeGenre={onChangeGenre} />
        <ClearFilters clearFilters={clearFilters} />
      </form>
    );
  }
}
