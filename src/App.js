import './App.css';
import Amaliyot from './Amaliyot';
import Book from './Book';
// import Loader from "./Loader";
import ClassConstructor from "./ClassConstructor";
import LiveScyle from './LiveScyle';
import KeyAtribute from './KeyAtribute';

function App(props) {
  return props.loading ? (
    // <Loader />
    <p>salom</p>
  ) : (
    <div>
      <Book name='JS for beginers' year='2021' price='50'>
        Extra inform
      </Book>
      <Book name='React for beginers' year='2022' price='100' />
      <Book name='Vue for beginers' year='2023' price='150' />
    </div>,
    <ClassConstructor />,
    <LiveScyle />,
    <KeyAtribute />
  )
}

export default App;