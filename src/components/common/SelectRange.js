import React from 'react';
import T from 'prop-types';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

function SelectRange({ name, onChange, min, max, ...props }) {
  const handleChange = ([minValue, maxValue]) => {
    onChange({ target: { name, value: [minValue || min, maxValue || max] } });
  };
  return <Slider onChange={handleChange} min={min} max={max} {...props} />;
}

SelectRange.propTypes = {
  name: T.string.isRequired,
  onChange: T.func.isRequired,
  min: T.number.isRequired,
  max: T.number.isRequired,
};

export default SelectRange;
