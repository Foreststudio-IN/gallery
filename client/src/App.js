import React, {Fragment} from 'react';
import './App.css';

//components
import ListAnimals from './components/ListAnimals';
import AddModal from './components/AddModal';
import EditModal from './components/EditModal';
import DeleteModal from './components/DeleteModal';

//assets
import addIcon from './assets/add-icon.png';
import editIcon from './assets/edit-icon.png';
import deleteIcon from './assets/delete-icon.png';


function App() {

  return (
    <Fragment>
      <div className="bg-black">
      <button type="button" className = "btn bg-transparent fixed-add-btn" data-toggle="modal" data-target="#addModal">
        <img src={addIcon} alt="" width="75px" className="img-fluid"/>
      </button>
      <AddModal/>
      <button type="button" className = "btn bg-transparent fixed-edit-btn" data-toggle="modal" data-target="#editModal">
        <img src={editIcon} alt="" width="75px" className="img-fluid"/>
      </button>
      <EditModal/>
      <button type="button" className = "btn bg-transparent fixed-delete-btn" data-toggle="modal" data-target="#deleteModal">
        <img src={deleteIcon} alt="" width="75px" className="img-fluid"/>
      </button>
      <DeleteModal/>
        <div className="container">
          <ListAnimals/>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
