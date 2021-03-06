import React, { Component } from 'react';
import PropTypes from 'prop-types';

import UISelect from '../UIComponents/UISelect';

export default class SortBy extends Component {
  render() {
    const { sort_by, onChangeFilters, options } = this.props;
    return (
      <UISelect
        onChange={onChangeFilters}
        value={sort_by}
        id="sort_by"
        name="sort_by"
        labelText="Сортировать по:"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </UISelect>
    );
  }
}

SortBy.defaultProps = {
  options: [
    {
      label: 'Популярные по убыванию',
      value: 'popularity.desc',
    },
    {
      label: 'Популярные по возростанию',
      value: 'popularity.asc',
    },
    {
      label: 'Рейтинг по убыванию',
      value: 'vote_average.desc',
    },
    {
      label: 'Рейтинг по возростанию',
      value: 'vote_average.asc',
    },
  ],
};

SortBy.propTypes = {
  onChangeFilters: PropTypes.func.isRequired,
  sort_by: PropTypes.string.isRequired,
};
