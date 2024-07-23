import React, { useState, useEffect } from 'react';
import { useSearchContext } from '../context/context';
import { useNavigate } from 'react-router-dom';

function useSearch() {
    const { details, searchValue, searchClicked, setSearchClicked } = useSearchContext()
    const [searchedDetails, setSearchedDetails] = useState([]);

    const navigate = useNavigate();

    const searchProducts = () => {
        // const searchData = details.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()));
        // setSearchedDetails(searchData);
        setSearchClicked(true)
        navigate(`/products?filter=search&name=${searchValue}`);
        console.log('use Search searchedDetails', searchedDetails);
    }

    return { searchedDetails, searchProducts }
}

export default useSearch;