const Title = ({title, subTitle, className}) => {
    return (
        <div className="my-5 flex flex-col gap-3">
            <h3 className={`text-3xl font-newFont ${className? className : "text-primary"}`}>{title}</h3>
            <p className="text-3xl md:text-4xl font-bold capitalize">{subTitle}</p>
        </div>
    );
};

export default Title;