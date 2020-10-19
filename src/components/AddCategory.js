import React, { useState } from 'react';
import PropTypes from "prop-types";

function AddCategory({setCategories}){

    const [inputValue, setInputValue] = useState('');

    function handleChange(e){
        setInputValue(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();

        if( inputValue.length > 0){
            setCategories(categories => [inputValue, ...categories]);
            setInputValue('');
        }
    }


    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="Buscar"
            />      
        </form>
    );
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}


export default AddCategory;