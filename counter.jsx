
import { useState } from 'react';

export default ({ start = 0 }) => {
  const [c, setC] = useState(start);
  return (
    <div>
      <h3>{c}</h3>
      <button onClick={() => setC(v => v + 1)}>+1</button>
      <button onClick={() => setC(v => v - 1)}>-1</button>
    </div>
  );
}
