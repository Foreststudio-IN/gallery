import React, { Fragment } from 'react';
import EditModal from './EditModal';


const AnimalEntries = ({ animalEntries, loading}) => {
    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <div>
            {animalEntries.map((animalEntry) => (
                <Fragment>
                    <button className="btn bg-transparent mx-0.5" data-toggle="modal" data-target={'#' + animalEntry.animal_id}>
                        <img  className="border-dark border" src={animalEntry.link} width="250" height="250" alt={animalEntry.animal_id}/>
                    </button>
                    <EditModal animal_id={animalEntry.animal_id} media={animalEntry.link} type={animalEntry.type}/>
                </Fragment>
            ))}
        </div>
    )

};

export default AnimalEntries;