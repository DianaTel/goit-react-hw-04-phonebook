import PropTypes from 'prop-types';
import { LabelStyle, InputStyle } from 'components/App.styled';

export default function Filter({ filter, handleFilterChange }) {
return (
  <LabelStyle>
    Find contacts by name:
    <InputStyle
      type="text"
      name="filter"
      value={filter}
      placeholder="Search contacts"
      onChange={handleFilterChange}
    />
  </LabelStyle>
);
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};