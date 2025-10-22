import Footer from './components/Footer.jsx';
import Record from './components/Record.jsx';

function Skills() {
  return (
  <div>
    <div className="bloc">
      <div className='titre'>
      <h1>Skills</h1>
      </div>
    </div>
    <div className="RecordSection">
      <Record RecordName="Home-Page" onClickPath="/" />
      <Record RecordName="Formations" onClickPath="/formations" />
      <Record RecordName="Projects" onClickPath="/projects" />
      <Record RecordName="Experiences" onClickPath="/experiences" />
      <Record RecordName="Interest" onClickPath="/interest" /> 
    </div>
    <Footer></Footer>
  </div>
  );
}

export default Skills;