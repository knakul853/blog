import './App.css';
import Header from './components/Header';
import Topics from './components/Topics';


function App() {
  var topicName = "binary search";
  return (
    <div className="App">  
      <Header />
      <div className="topicList" >
        <Topics topicName={topicName} />
        <Topics topicName={topicName} />
        <Topics topicName={topicName} />
        <Topics topicName={topicName} />
        <Topics topicName={topicName} />
        <Topics topicName={topicName} />
        <Topics topicName={topicName} />
        <Topics topicName={topicName} />
        <Topics topicName={topicName} />
        
      </div>
    </div>
  );
}

export default App;
