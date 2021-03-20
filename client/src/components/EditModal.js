import React from 'react';
import EditAnimals from './EditAnimals';
import DeleteEntry from './DeleteEntry';

const EditModal = ({animal_id ,media, type}) => {

    return (
        <div className="modal fade" id={animal_id}>
            <div className="modal-dialog">
                <div className="modal-content">

                    <div className="modal-header">
                        <h4 className="modal-title">Edit an Entry</h4>
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                    </div>

                    <div className="modal-body">
                        <img className="pl-3 mb-2" src={media} width="450" height="450" alt={animal_id}/>
                        <EditAnimals animal_id={animal_id} media={media} oldtype={type}/>
                    </div>

                <div className="d-flex justify-content-between modal-footer">
                    <DeleteEntry animal_ID={animal_id}/>
                    <button type="button" className="btn btn-primary" data-dismiss="modal">Close</button>
                </div>

                </div>
            </div>
        </div>
    )
}

export default EditModal;