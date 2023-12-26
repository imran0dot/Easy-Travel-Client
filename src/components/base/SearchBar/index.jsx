import Button from "../Button";

const Searchbar = ({ apiUrl, setCallApi, refetch, }) => {

    const handleSearchBar = (e) => {
        e.preventDefault();
        const value = e.target.search.value;
        setCallApi(`${apiUrl}?search=${value}`);
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