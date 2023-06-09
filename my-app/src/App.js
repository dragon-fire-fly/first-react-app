import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';

// function App() {
//   return (
//     <div className="App">
//       <FunctionalGreeting />
//       <FunctionalGreetingWithProps greeting="Nice to meet you!" name="Mike" age="32"/>
//     </div>
//   );
// }

function App() {
  return (
    <div clasname="App">
      <StatefulGreetingWithPrevState greeting="I'm a stateful class component!"/>
    </div>
  )
}

export default App;
