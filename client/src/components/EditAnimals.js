import React, {Fragment, useState} from 'react';

const EditAnimals = () => {

    const [link, setLink] = useState("");
    const [type, setType] = useState("");
    const [animalID, setAnimalID] = useState("0");

    const onSubmitForm = async(e) => {
        e.preventDefault();
        try {
            const body = {link, type};
            const response = await fetch(`http://localhost:5000/animals/${animalID}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            if (response.status === 200) {
                alert('Successfully edited entry');
                setAnimalID("0");
                setLink("");
                setType("");
            }
        } catch (error) {
            alert('Failed to edit entry. Check console for error message.');
            console.error(error.message);
        }
    }

    return (
        <Fragment>
            <form className = "d-flex flex-column" onSubmit={onSubmitForm}>
                <input type = "text" required className = "form-control m-1" placeholder="Animal ID" onChange={e => setAnimalID(e.target.value)}/>
                <input type = "text" required className = "form-control m-1" placeholder="Link" value={link} onChange={e => setLink(e.target.value)}/>
                <input type = "text" required className = "form-control m-1" placeholder="Type" value={type} onChange={e => setType(e.target.value.toLowerCase())}/>
                <button className = "btn btn-success m-1">Add</button>
            </form>
        </Fragment>
    )
}

export default EditAnimals;