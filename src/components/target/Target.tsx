import PropTypes from 'prop-types';
import React from 'react';
import image from './target.png';

const TargetPropTypes = {
  /** The degree in whole integer numbers to rotate the target with. */
  degree: PropTypes.number,

  /** Visibility. */
  visible: PropTypes.bool,
};

type Props = PropTypes.InferProps<typeof TargetPropTypes>;

/**
 * The Target component displays the scoring target. It can be rotated and hidden.
 *
 * @returns {object} - Target Component
 */
const Target: React.FC<Props> = ({ degree = 0, visible = true }) => {
  return visible ? <img src={image} alt="Target" style={{ transform: `rotate(${degree}deg)` }} /> : <div> </div>;
};

Target.propTypes = TargetPropTypes;

export default Target;
