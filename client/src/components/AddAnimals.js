import React, {Fragment, useState} from 'react';

const AddAnimals = () => {

    const [link, setLink] = useState("");
    const [type, setType] = useState("");

    const onSubmitForm = async(e) => {
        e.preventDefault();
        try {
            const body = {link, type};
            const response = await fetch("http://localhost:5000/animals", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            if (response.status === 200) {
                alert('Successfully added entry');
                setLink("");
                setType("");
            }

        } catch (error) {
            alert('Failed to add entry. Check console for error message.');
            console.error(error.message);
        }
    }

    return (
        <Fragment>
            <form className = "d-flex flex-column" onSubmit={onSubmitForm}>
                <input type = "text" className = "form-control m-1" placeholder="Link" value={link} onChange={e => setLink(e.target.value)}/>
                <input type = "text" className = "form-control m-1" placeholder="Type" value={type} onChange={e => setType(e.target.value.toLowerCase())}/>
                <button className = "btn btn-success m-1">Add</button>
            </form>
        </Fragment>
    )
}

export default AddAnimals;