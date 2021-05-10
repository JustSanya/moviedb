import React, { Component } from "react"
import MovieItem from "./MovieItem"
import { API_URL, API_KEY_3 } from "../../api/api"
import equals from 'ramda/src/equals'
import queryString from 'query-string'

export default class MovieList extends Component {
  
  state = {
    movies: []
  };

  getMovies = (filters, page) => {
    const {sort_by, primary_release_year, genres} = filters;

    const queryStringParams = {
      api_key: API_KEY_3,
      language: "ru-RU",
      sort_by,
      primary_release_year,
      page
    }
    if (genres) {
      queryStringParams.with_genres = genres.length ? genres.join(',') : ''
    }

    const link = `${API_URL}/discover/movie?${queryString.stringify(queryStringParams)}`;
    fetch(link)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          movies: data.results
        });
        this.props.updateTotalPages(data.total_pages)
      });
  }

  componentDidMount() {
    this.getMovies(this.props.filters, this.props.page)
  }

  componentDidUpdate(prevProps) {

    if (!equals(prevProps.filters, this.props.filters)) {
      this.props.onChangePage(1)
      this.getMovies(this.props.filters, 1)
    }

    if (prevProps.page !== this.props.page) {
      this.getMovies(this.props.filters, this.props.page)
    }
  }

  render() {
    const { movies } = this.state;
    return (
      <div className="row">
        {movies.map(movie => {
          return (
            <div key={movie.id} className="col-6 mb-4">
              <MovieItem item={movie} />
            </div>
          );
        })}
      </div>
    );
  }
}
