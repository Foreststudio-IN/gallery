import React from 'react';
import AddAnimals from './AddAnimals';

const AddModal = () => {

    return (
        <div className="modal fade" id="addModal">
            <div className="modal-dialog">
                <div className="modal-content">

                    <div className="modal-header">
                        <h4 className="modal-title">Add an Entry</h4>
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                    </div>

                    <div className="modal-body">
                        <AddAnimals/>
                    </div>

                <div className="modal-footer">
                    <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                </div>

                </div>
            </div>
        </div>
    )
}

export default AddModal;