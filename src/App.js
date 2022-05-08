import TimeBox from './components/TimeBox/TimeBox';
import Button from './components/Button/Button';
import Container from './components/Container/Container';
import { useState, useEffect } from 'react';


const App = () => {

  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(null);

  const start = () => {
    setTimer(setInterval(() => {
      setTime(prevValue => prevValue + 1);
    }, 1))
  };

  const stop = () => {
    clearInterval(timer)
  };

  const reset = () => {
    setTime(0);
    setTimer(null);
  };

  useEffect(() => {
    return () => {
       if(timer) {clearInterval(timer)};
      };
  }, []);

  return (
    <Container>
      <TimeBox>{time}</TimeBox>
      <Button value={start}>START</Button>
      <Button value={stop}>STOP</Button>
      <Button value={reset}>RESET</Button>
    </Container>
  );
};

export default App;
