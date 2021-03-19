import React from 'react';

const AnimalEntries = ({ animalEntries, loading}) => {
    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <div>
            {animalEntries.map((animalEntry) => (
                <a href={animalEntry.link} target="_blank" rel="noreferrer">
                    <img className="m-2 border border-dark" src={animalEntry.link} width="250" height="250" alt={animalEntry.animal_id}/>
                </a>
            ))}
        </div>
    )

};

export default AnimalEntries;