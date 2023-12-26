const CategoryFilter = ({ onChange, categorys }) => {
    //TODO
    return (
        <select className="p-3 border bg-white w-full" onChange={onChange}>
            <option className="p-4 shadow cursor-pointer" >All Country</option>
            {
                categorys?.items.map((category, index) => {
                    return <option className="p-4 shadow cursor-pointer" key={index}>{category.name}</option>
                })
            }
        </select>
    );
};

export default CategoryFilter;