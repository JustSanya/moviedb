import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import UISelect from '../UIComponents/UISelect'

export default class PrimaryReleaseYear extends PureComponent {
  render() {
    const { primary_release_year, onChangeFilters, options } = this.props;

    return (
      <UISelect
        onChange={onChangeFilters}
        value={primary_release_year}
        id="primary_release_year"
        name="primary_release_year"
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

PrimaryReleaseYear.propTypes = {
  onChangeFilters: PropTypes.func.isRequired,
  primary_release_year: PropTypes.string.isRequired,
};

PrimaryReleaseYear.defaultProps = {
  options: [
    {
      label: 'За всё время',
      value: '',
    },
    {
      label: '2015',
      value: '2015',
    },
    {
      label: '2016',
      value: '2016',
    },
    {
      label: '2017',
      value: '2017',
    },
    {
      label: '2018',
      value: '2018',
    },
    {
      label: '2019',
      value: '2019',
    },
    {
      label: '2020',
      value: '2020',
    },
    {
      label: '2021',
      value: '2021',
    }
  ],
};
