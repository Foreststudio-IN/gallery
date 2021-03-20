import React, {Fragment, useState, useEffect} from 'react';

const EditAnimals = ({animal_id,media,oldtype}) => {

    const [link, setLink] = useState("");
    const [type, setType] = useState("");

    const onSubmitForm = async(e) => {
        e.preventDefault();
        try {
            const body = {link, type};
            const response = await fetch(`/animals/${animal_id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            if (response.status === 200) {
                alert('Successfully edited entry');
                setLink("");
                setType("");
                window.location = "/";
            }
        } catch (error) {
            alert('Failed to edit entry. Check console for error message.');
            console.error(error.message);
        }
    }

    useEffect(()=> {
        setLink(media);
        setType(oldtype);
    }, [media,oldtype]);


    return (
        <Fragment>
            <form className = "d-flex flex-column" onSubmit={onSubmitForm}>
                <input type = "text" required className = "form-control m-1" value={link} onChange={e => setLink(e.target.value)}/>
                <input type = "text" required className = "form-control m-1" value={type} onChange={e => setType(e.target.value.toLowerCase())}/>
                <button className = "btn btn-success m-1">Edit</button>
            </form>
        </Fragment>
    )
}

export default EditAnimals;