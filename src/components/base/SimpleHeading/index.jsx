const SimpleHeading = ({ heading, subTitle, className }) => {
    return (
        <div className={className}>
            <h3 className="font-bold text-xl mb-3">{heading ? heading : ""}</h3>
            <p>{subTitle ? subTitle : ""}</p>
        </div>

    );
};

export default SimpleHeading;