import React from 'react';
import Filters from './Filters/Filters';
import MoviesList from './Movies/MoviesList';
import Header from './Header/Header';
import Cookies from 'universal-cookie';
import axios from 'axios';

import { API_URL, API_KEY_3 } from '../api/api';

const cookies = new Cookies();

export default class App extends React.Component {
  state = {
    user: null,
    session_id: null,
    filters: {
      sort_by: 'popularity.desc',
      primary_release_year: '',
      genres: [],
    },
    total_pages: 0,
    page: 1,
  };

  updateUser = (user) => {
    this.setState({
      user,
    });
  };

  updateSessionId = (session_id) => {
    cookies.set('session_id', session_id, {
      path: '/',
      maxAge: 2952000,
    });
    this.setState({
      session_id,
    });
  };

  onChangeFilters = (event) => {
    const newFilters = {
      ...this.state.filters,
      [event.target.name]: event.target.value,
    };
    this.setState({
      filters: newFilters,
    });
  };

  onChangeGenre = (newGenres) => {
    this.setState((prevState) => {
      return {
        filters: {
          ...prevState.filters,
          genres: newGenres,
        },
      };
    });
  };

  onChangePage = (page) => {
    this.setState({
      page,
    });
  };

  updateTotalPages = (total_pages) => {
    this.setState({
      total_pages,
    });
  };

  clearFilters = () => {
    const initialFilters = {
      sort_by: 'popularity.desc',
      primary_release_year: '',
    };
    this.setState({
      filters: initialFilters,
    });
  };

  async componentDidMount() {
    const session_id = cookies.get('session_id');
    if (session_id) {
      try {
        const { data: user } = await axios.get(
          `${API_URL}/account?api_key=${API_KEY_3}&session_id=${session_id}`,
        );
        this.updateUser(user);
      } catch (error) {
        console.error(error);
      }
    }
  }

  render() {
    const { filters, page, total_pages, genres, user } = this.state;
    return (
      <div>
        <Header user={user} updateUser={this.updateUser} updateSessionId={this.updateSessionId} />
        <div className="container">
          <div className="row mt-4">
            <div className="col-4">
              <div className="card" style={{ width: '100%' }}>
                <div className="card-body">
                  <h3>Фильтры:</h3>
                  <Filters
                    filters={filters}
                    page={page}
                    total_pages={total_pages}
                    genres={genres}
                    onChangeGenre={this.onChangeGenre}
                    onChangeFilters={this.onChangeFilters}
                    onChangePage={this.onChangePage}
                    clearFilters={this.clearFilters}
                  />
                </div>
              </div>
            </div>
            <div className="col-8">
              <MoviesList
                filters={filters}
                page={page}
                updateTotalPages={this.updateTotalPages}
                onChangePage={this.onChangePage}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
