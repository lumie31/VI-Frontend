import './App.css';
import { useState } from 'react';
import Main from './components/Main';
import Header from './components/Header';
import Contact from './components/Contact';

const App: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);

  function handleShow() {
    setShow(true);
  }

  function handleClose() {
    setShow(false);
  }

  return (
    <div className='app'>
      <Header />
      <Main handleShow={handleShow} />
      <Contact show={show} handleClose={handleClose} />
    </div>
  );
};

export default App;
