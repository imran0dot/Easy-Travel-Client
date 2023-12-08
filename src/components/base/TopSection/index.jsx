import Container from "@components/base/Container";

const TopSection = ({ bgImgStyle, title }) => {
    return (

        <div style={bgImgStyle} className="bg-secondary">
            <Container>
                <div className="flex justify-center items-center min-h-[200px] md:min-h-[350px] lg:min-h-96 font-bold text-white">
                    <h1 className="text-3xl md:text-6xl bg-secondary p-10">{title}</h1>
                </div>
            </Container>
        </div>
    );
};

export default TopSection;