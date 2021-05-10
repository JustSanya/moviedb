import React, { Component } from 'react';
import { API_URL, API_KEY_3 } from '../../api/api';

export default class Genres extends Component {
  state = {
    genres: [],
  };

  getGenres = () => {
    const link = `${API_URL}/genre/movie/list?api_key=${API_KEY_3}&language=ru-RU`;
    fetch(link)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          genres: data.genres,
        });
      });
  };

  handleChange = event => {
    const id = Number(event.target.value);
    const { genres: selectedGenres, onChangeGenre } = this.props;
    let newGenres = [];
    if (selectedGenres.includes(id)) {
      newGenres = selectedGenres.filter(el => el !== id)
    } else {
      newGenres = [...selectedGenres, id]
    }
    onChangeGenre(newGenres)
  }

  componentDidMount() {
    this.getGenres();
  }

  render() {
    const { genres } = this.state;
    const selectedGenres = this.props.genres ? this.props.genres : [];
    return (
      <>
        <p>Жанры</p>
        <div>
          {genres.map((genre) => (
            <div className="form-check" key={genre.id}>
              <input
                className="form-check-input"
                checked={selectedGenres.includes(genre.id)}
                onChange={this.handleChange}
                type="checkbox"
                value={genre.id}
                id={genre.id}
              />
              <label className="form-check-label" htmlFor={genre.id}>
                {genre.name}
              </label>
            </div>
          ))}
        </div>
      </>
    );
  }
}
