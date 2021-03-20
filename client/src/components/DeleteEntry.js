import React, {useState, useEffect} from 'react';

const DeleteEntry = ({animal_ID}) => {

    const [animalID, setAnimalID] = useState(0);

    const onSubmit = async(e) => {
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

    useEffect(()=> {
        setAnimalID(animal_ID);
    }, [animal_ID]);

    return (
        <button type="button" className="btn btn-danger" onClick={onSubmit}>Delete</button>
    )
}

export default DeleteEntry;