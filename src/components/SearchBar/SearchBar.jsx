import { Card, Input } from '@mui/material';
import React from 'react';
import search from "../Data/search";

const SearchBar = () => {

    const handleSearch = (e) => {
        e.preventDefault();
        updateJson(e.target.value)
    };

    const updateJson = (value) => {
        search.search = value;
        console.log(search.search);
    };

    return (
        <div>
            <Card className="search">

                <Input
                    placeholder="Search"
                    inputProps={{ "aria-label": "description" }}
                    onChange={handleSearch}
                />
                <Button variant="contained" >Search</Button>
            </Card>
        </div>
    );
};

export default SearchBar;