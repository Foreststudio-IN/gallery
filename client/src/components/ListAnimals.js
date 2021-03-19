import React, {Fragment, useEffect, useState} from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

import AnimalEntries from './AnimalEntries';
import SelectSearch from './SelectSearch';

const ListAnimals = () => {

    const [animalEntries, setAnimalEntries] = useState([]);
    const [animalTypes, setAnimalTypes] = useState([]);
    const [type, setType] = useState({});
    const [loading, setLoading] = useState(false);

    const [pageNumber, setPageNumber] = useState(0);
    const animalEntriesPerPage = 12;
    const pagesVisited = pageNumber * animalEntriesPerPage;

    const getAnimals = async () => {
        try {
            setLoading(true);
            const response = await axios.get("http://localhost:5000/animals");

            setAnimalEntries(response.data);
            setLoading(false);

        } catch (error) {
            console.error(error.message);
        }
    };

    const getTypes = async () => {
        try {
            setLoading(true);
            const response = await axios.get("http://localhost:5000/animals/type");

            let result = response.data.map(item=> ({ label:item.type, value:item.type}));

            setAnimalTypes(result);
            setLoading(false);
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(()=> {
        getAnimals();
        getTypes();
    }, []);

    const submitForm = async(type) => {
        try {
            setLoading(true);
            const response = await axios.get(`http://localhost:5000/animals/type/${type}`);

            setAnimalEntries(response.data);
            setLoading(false);

        } catch (error) {
            console.error(error.message);
        }
    }

    const handleTypeChange = (e) => {

        if (e === null) {
            getAnimals();
            setPageNumber(0);
            return;
        }

        setType(e.value);
        setPageNumber(0);
        submitForm(e.value);
    }
    const currentAnimalEntries = animalEntries.slice(pagesVisited, pagesVisited + animalEntriesPerPage);
    const pageCount = Math.ceil(animalEntries.length/animalEntriesPerPage);

    const changePage = ({selected}) => {
        setPageNumber(selected);
    }

    return(
        <Fragment>
            <SelectSearch selectOptions={animalTypes} value={type} handleTypeChange={handleTypeChange}/>
            <ReactPaginate
                previousLabel={"<<"}
                nextLabel={">>"}
                breakLabel={"..."}
                pageRangeDisplayed={3}
                marginPagesDisplayed={1}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"pagination-btn"}
                disabledClassName={'pagination-disabled'}
                activeClassName={'pagination-active'}
            />
            <AnimalEntries animalEntries={currentAnimalEntries} loading={loading}/>
        </Fragment>
    )
};

export default ListAnimals;