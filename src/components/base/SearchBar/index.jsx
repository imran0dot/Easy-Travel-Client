import Button from "../Button";

const Searchbar = ({ apiUrl, setCallApi, refetch, }) => {

    const handleSearchBar = (e) => {
        e.preventDefault();
        const value = e.target.search.value;
        setCallApi(`${apiUrl}?search=${value}`);
        refetch();
    }

    return (
        <>
            <form
                onSubmit={handleSearchBar}
                className="flex mt-10">
                <input
                    className="border p-3 w-10/12"
                    placeholder="Search.."
                    type="text"
                    name="search"
                    id="search" />
                <Button>Search</Button>
            </form>
            <p onClick={() => {setCallApi(apiUrl)}}  className="underline text-primary cursor-pointer">Clear filter</p>
        </>
    );
};

export default Searchbar;