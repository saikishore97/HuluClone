import React,{useState} from 'react';
import './App.css';
import Header from './components/Header.component';
import Navigation from './components/Navigation.component';
import Results from './components/Results.component';
import requests from './requests';


function App() {
  const [selectedOption,setSelectedOption] = useState(requests.fetchTopRated);
  return (
    <div className="App">
      <Header/>
      <Navigation setSelectedOption={setSelectedOption}/>
      <Results selectedOption={selectedOption}/>
    </div>
  );
}

export default App;
