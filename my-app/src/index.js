
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Timer extends React.Component {

  render(){
    const curTimeLeft = calculateTimeLeft();

    return (
      <div>
        <p>{curTimeLeft}</p>,
        <p>Test</p>
      </div>
    );
  }
}

ReactDOM.render(
  <Timer />,
  document.getElementById('root')
);


function calculateTimeLeft() {
  let year = new Date().getFullYear();

  const difference = +new Date(`10/01/${year}`) - +new Date();

  let timeLeft = {};

  if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
}
