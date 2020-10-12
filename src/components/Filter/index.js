import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { connect } from 'react-redux';
import { VISIBILITY_FILTERS } from '../../constants/visibilityFilters';
import { setFilter } from '../../redux/actions';

const Filter = ({ activeFilter, setFilter }) => {
  const handleOnChangeEvent = event => setFilter(event.target.value);

  return (
    <div className="visibility-filters">
      <select
        id="pokemon-types-select"
        onChange={handleOnChangeEvent}
      >
        {Object.keys(VISIBILITY_FILTERS).map(filterKey => {
          const currentFilter = VISIBILITY_FILTERS[filterKey];
          return (
            <option
              key={`visibility-filter-${currentFilter}`}
              className={cx(
                'filter',
                currentFilter === activeFilter && 'filter--active',
              )}
            >
              {currentFilter}
            </option>
          );
        })}
      </select>
    </div>
  );
};

const mapStateToProps = state => ({ activeFilter: state.visibilityFilter });

Filter.propTypes = {
  activeFilter: PropTypes.string,
  setFilter: PropTypes.func.isRequired,
};

Filter.defaultProps = {
  activeFilter: 'ALL',
};

export default connect(
  mapStateToProps,
  { setFilter },
)(Filter);
