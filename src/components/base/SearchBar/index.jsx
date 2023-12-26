import Button from "../Button";

const Searchbar = ({ setSearchQueary, refetch, }) => {

    const handleSearchBar = (e) => {
        e.preventDefault();
        const value = e.target.search.value;
        setSearchQueary(value.toLowerCase())
        refetch();
    }

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
                    id="search" />
                <Button>Search</Button>
            </form>
        </div>
    );
};

export default Searchbar;