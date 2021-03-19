import React from 'react';
import EditAnimals from './EditAnimals';

const EditModal = () => {

    return (
        <div className="modal fade" id="editModal">
            <div className="modal-dialog">
                <div className="modal-content">

                    <div className="modal-header">
                        <h4 className="modal-title">Edit an Animal Entry</h4>
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                    </div>

                    <div className="modal-body">
                        <EditAnimals/>
                    </div>

                <div className="modal-footer">
                    <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                </div>

                </div>
            </div>
        </div>
    )
}

export default EditModal;