
import A from './App.module.css'
import Header from './pages/Home/Header/Header';
import SectionWhatDoing from './pages/Home/SectionWhatDoing/SectionWhatDoing';


function App() {
  return (
    <div className="App">
      <Header/>
      <div className={A.container}>
        <SectionWhatDoing />
      </div>
    </div>
  );
}

export default App;





   