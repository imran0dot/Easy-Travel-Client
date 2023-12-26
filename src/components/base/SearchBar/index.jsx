import { useEffect, useState } from "react";
import Button from "../Button";

const Searchbar = ({ filter, onChange, setSearchQueary }) => {
    const [inputValue, setInputValue] = useState("")

    // Search bar handle Submit funtion 
    const handleSearchBar = (e) => {
        e.preventDefault();
        const value = e.target.search.value;
        setSearchQueary(value.toLowerCase())
    }

    // Searchbar input handle change 
    const handleInputChange = (event) => {
        onChange();
        const value = event.target.value;
        setInputValue(value);
    }

    useEffect(() => {
        if (filter) {
            setInputValue("");
        }
    }, [filter])


    return (
        <div>
            <form
                onSubmit={handleSearchBar}
                className="flex">
                <input
                    className="border p-3 w-10/12"
                    placeholder="Search.."
                    type="text"
                    name="search"
                    value={inputValue}
                    onChange={handleInputChange}
                    id="search" />
                <Button>Search</Button>
            </form>
        </div>
    );
};

export default Searchbar;