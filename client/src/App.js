import React, {Fragment} from 'react';
import './App.css';

//components
import ListAnimals from './components/ListAnimals';
import AddModal from './components/AddModal';

//assets
import addIcon from './assets/add-icon.png';


function App() {

  return (
    <Fragment>
      <div className="bg-black">
        <button type="button" className = "btn bg-transparent fixed-add-btn" data-toggle="modal" data-target="#addModal">
          <img src={addIcon} alt="" width="75px" className="img-fluid"/>
        </button>
        <AddModal/>
        <div className="container">
          <ListAnimals/>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
