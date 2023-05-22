import { useState } from 'react'

const StatisticLine = ({text, value}) => {
  return (<tr><td>{text}</td><td>{value}</td></tr>)
}

const Statistics = ({state}) => {

  if (state.total() === 0) {
    return (
      <>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </>
    );
  }

  return (
    <>
    <h1>Statistics</h1>
    <table>
      <tbody>
      <StatisticLine text="Good" value={state.good}></StatisticLine>
      <StatisticLine text="Neutral" value={state.neutral}></StatisticLine>
      <StatisticLine text="Bad" value={state.bad}></StatisticLine>
      
      <StatisticLine text="Total" value={state.total()}></StatisticLine>
      <StatisticLine text="Average" value={state.avg()}></StatisticLine>
      <StatisticLine text="Positive" value={state.pos()}></StatisticLine>
      </tbody>
    </table>
    </>
  );
}


function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  let state = {
    good: good,
    neutral: neutral,
    bad: bad,
    incGood: function () { setGood(this.good + 1); },
    incNeutral: function () { setNeutral(this.neutral + 1); },
    incBad: function () { setBad(this.bad + 1); },
    total: function () {
      return this.good + this.neutral + this.bad;
    },
    avg: function () {
      return (this.good - this.bad) / this.total();
    },
    pos: function () {
      return this.good / this.total();
    }
  }

  return (
    <div className="App">
      <h1>Give Feedback</h1>
      <button onClick={() => { state.incGood(); }}>Good</button>
      <button onClick={() => { state.incNeutral(); }}>Neutral</button>
      <button onClick={() => { state.incBad(); }}>Bad</button>
      <Statistics state={state}></Statistics>
    </div>
  );
}

export default App;
