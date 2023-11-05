import ArchiveCard from "@components/base/ArchiveCard";
import Container from "@components/base/Container";
const TouristVisa = () => {
    const listPacages = Array(50).fill();

    return (
        <div>
            <Container>
                <div className="grid grid-cols-3 gap-10 my-10">
                    {listPacages.map((note, index) => <ArchiveCard key={index} />)}
                </div>
            </Container>
        </div>
    );
};

export default TouristVisa;