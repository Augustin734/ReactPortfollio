import Footer from './components/Footer.jsx';
import Record from './components/Record.jsx';

function Projects() {
  return (
    <div>
      <div className="bloc">
        <div className='titre'>
        <h1>Projects</h1>
        </div>
      </div>
      <div className="RecordSection">
        <Record RecordName="Home-Page" onClickPath="/" />
        <Record RecordName="Formations" onClickPath="/formations" />
        <Record RecordName="Experiences" onClickPath="/experiences" />
        <Record RecordName="Skills" onClickPath="/skills" />
        <Record RecordName="Interest" onClickPath="/interest" /> 
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Projects;