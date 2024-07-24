import React, { useState } from 'react';
import { useSearchContext } from '../context/context';
import { useNavigate } from 'react-router-dom';

function useSearch() {
    const { searchValue, setSearchClicked } = useSearchContext()
    const [searchedDetails] = useState([]);

    const navigate = useNavigate();

    const searchProducts = () => {
        setSearchClicked(true)
        navigate(`/products?filter=search&name=${searchValue}`);
    }

    return { searchedDetails, searchProducts }
}

export default useSearch;