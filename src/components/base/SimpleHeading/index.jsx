const SimpleHeading = ({heading}) => {
    return (
        <h3 className="font-bold text-3xl mb-3">{heading ? heading : ""}</h3>

    );
};

export default SimpleHeading;