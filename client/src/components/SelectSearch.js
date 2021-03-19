import React from 'react';
import Select from 'react-select';

const SelectSearch = ({selectOptions, handleTypeChange}) => {

    return (
        <div className="mt-4 w-25 mb-4">
            <Select
                closeMenuOnSelect={true}
                options={selectOptions}
                onChange={handleTypeChange}
                isClearable
            />
        </div>
    )
}

export default SelectSearch;