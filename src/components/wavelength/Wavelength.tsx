import React from 'react';
import Gauge from '../gauge/Gauge';

const Wavelength = () => {
  const [target, setTarget] = React.useState(50);
  const [targetVisibility, setTargetVisibility] = React.useState(true);
  const [pointer, setPointer] = React.useState(50);

  return (
    <div>
      <h1>hello world</h1>
      <Gauge
        targetDegree={(target * 180) / 100}
        targetVisible={targetVisibility}
        pointerDegree={(pointer * 180) / 100}
      />
    </div>
  );
};

export default Wavelength;
