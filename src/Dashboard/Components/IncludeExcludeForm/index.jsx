import { useContext } from 'react';
import { Functions } from '../../Layout/Provider/FunctionProvider';
import IncreasingFiled from '../IncreasingFiled';

const IncludeExcludeForm = () => {
    const {
        includes,
        excludes,
        handleIncludesChange,
        handleExcludesChange,
        handleRemoveIncludes,
        handleRemoveExcludes,
        handleAddIncludes,
        handleAddExcludes, } = useContext(Functions);
    return (

        <div className="flex flex-col gap-10">

            <IncreasingFiled
                data={{
                    heading: "Add New Includes",
                    filed: includes,
                    handleChange: handleIncludesChange,
                    handleAddNew: handleAddIncludes,
                    handleRemove: handleRemoveIncludes,
                }} />

            <IncreasingFiled
                data={{
                    heading: "Add New Excludes",
                    filed: excludes,
                    handleChange: handleExcludesChange,
                    handleAddNew: handleAddExcludes,
                    handleRemove: handleRemoveExcludes,
                }} />

        </div>
    );
};

export default IncludeExcludeForm;