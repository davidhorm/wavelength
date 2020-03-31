import PropTypes from 'prop-types';
import React from 'react';
import gaugeRangeImage from './gauge-range.png';
import pointerImage from './pointer.png';
import targetImage from './target.png';

const getPositionStyle = () => {
  const imageSize = {
    gaugeRange: { height: 356, width: 671, tickHeight: 339 },
    target: { height: 289, width: 289 },
    pointer: { height: 29, width: 259, radius: 14.5 },
  };

  // TypeScript gonna TypeScript
  const relativePosition: 'relative' = 'relative';
  const absolutePosition: 'absolute' = 'absolute';

  const containerPositionStyle = {
    position: relativePosition,
    width: `${imageSize.gaugeRange.width}px`,
    height: `${imageSize.gaugeRange.height}px`,
  };

  const tickHeightDiff = imageSize.gaugeRange.height - imageSize.gaugeRange.tickHeight;
  const targetPositionStyle = {
    position: absolutePosition,
    right: '50%',
    bottom: `${tickHeightDiff - imageSize.target.height / 2}px`,
  };

  const pointerPositionStyle = {
    position: absolutePosition,
    right: `${imageSize.gaugeRange.width / 2 - imageSize.pointer.radius}px`,
    bottom: `${tickHeightDiff - imageSize.pointer.height / 2}px`,
  };

  return {
    containerPositionStyle,
    targetPositionStyle,
    pointerPositionStyle,
  };
};

const GaugePropTypes = {
  /** The degree in whole integer numbers to rotate the target with. */
  targetDegree: PropTypes.number,

  /** Target visibility. */
  targetVisible: PropTypes.bool,

  /** The degree in whole integer numbers to rotate the pointer with. */
  pointerDegree: PropTypes.number,
};

type Props = PropTypes.InferProps<typeof GaugePropTypes>;

/**
 * The Target component displays the scoring target. It can be rotated and hidden.
 *
 * @returns {object} - Target Component
 */
const Gauge: React.FC<Props> = ({ targetDegree = 0, targetVisible = true, pointerDegree = 0 }) => {
  const { containerPositionStyle, targetPositionStyle, pointerPositionStyle } = getPositionStyle();

  const containerStyle = {
    ...containerPositionStyle,
  };

  const gaugeRangeAltText = 'TODO';

  const targetAltText = 'TODO';
  const targetStyle = {
    transformOrigin: 'center right',
    transform: `rotate(${targetDegree}deg)`,
    ...targetPositionStyle,
  };

  const pointerAltText = 'TODO';
  const pointerStyle = {
    transformOrigin: '94.4% 50%',
    transform: `rotate(${pointerDegree}deg)`,
    ...pointerPositionStyle,
  };

  return (
    <div style={containerStyle}>
      <img src={gaugeRangeImage} alt={gaugeRangeAltText} />
      {targetVisible && <img src={targetImage} alt={targetAltText} style={targetStyle} />}
      <img src={pointerImage} alt={pointerAltText} style={pointerStyle} />
    </div>
  );
};

Gauge.propTypes = GaugePropTypes;

export default Gauge;