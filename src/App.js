import React from 'react';
import Replay from './replay';

const ans = 'abcdefgstop';
const temp = [
  { time: 0, word: 'a' },
  { time: 100, word: 'a' },
  { time: 100, word: 'a' },
  { time: 100, word: 'a' },
  { time: 100, word: 'a' },
  { time: 1000, word: 'x' },
  { time: 500, word: 'x' },
  { time: 500, word: 'x' },
  { time: 1000, word: 'a' },
  { time: 1000, word: 'x' },
  { time: 1000, word: 'a' },
  { time: 1000, word: 'x' },
  { time: 1000, word: '\xa0' },
  { time: 100, word: '\xa0' },
  { time: 200, word: '\xa0' },
  { time: 200, word: '\xa0' },
  { time: 200, word: '\xa0' },
  { time: 200, word: '\xa0' },
  { time: 200, word: '\xa0' },
  { time: 100, word: 'a' },
  { time: 100, word: 'a' },
];
function App() {
  return (
    <>
      <Replay text={temp} ans={ans} />
    </>
  );
}

export default App;
