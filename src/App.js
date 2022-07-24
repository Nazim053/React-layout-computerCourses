
import A from './App.module.css'
import Header from './pages/Home/Header/Header';
import SectionWhatDoing from './pages/Home/SectionWhatDoing/SectionWhatDoing';
import GetProfession from './pages/Home/GetProfession/GetProfession.jsx';
import Partner from './pages/Home/Partner/Partner';



function App() {
  return (
    <div className="App">
      <Header/>
      <div className={A.container}>
        <SectionWhatDoing />
        <GetProfession />
        <Partner />
      </div>
    </div>
  );
}

export default App;





   