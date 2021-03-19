import React, {useState} from 'react';

const DeleteModal = () => {

    const [animalID, setAnimalID] = useState(0);

    const onSubmitForm = async(e) => {
        e.preventDefault();
        try {
            const response = await fetch(`/animals/${animalID}`, {
                method: "DELETE",
            });
            if (response.status === 200) {
                alert('Successfully deleted entry');
                window.location = "/";
            }
        } catch (error) {
            alert('Failed to delete entry. Check console for error message.');
            console.error(error.message);
        }
    }

    return (
        <div className="modal fade" id="deleteModal">
            <div className="modal-dialog">
                <div className="modal-content">

                    <div className="modal-header">
                        <h4 className="modal-title">Delete an Entry</h4>
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                    </div>

                    <div className="modal-body">
                        <form className = "d-flex flex-column" onSubmit={onSubmitForm}>
                                <input type = "text" className = "form-control m-1" placeholder="Animal ID" onChange={e => setAnimalID(e.target.value)}/>
                                <button className = "btn btn-danger m-1">Delete</button>
                        </form>
                    </div>

                <div className="modal-footer">
                    <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                </div>

                </div>
            </div>
        </div>
    )
}

export default DeleteModal;