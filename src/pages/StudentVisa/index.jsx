import ArchiveCard from "@components/base/ArchiveCard";
import Container from "@components/base/Container";
import tourPackageList from "@/assets/data/tourPackage.json"


const StudentVisa = () => {
    return (
        <div>
            <Container>
                <div className="grid grid-cols-3 gap-10 my-10">
                    {tourPackageList.map((listData, index) => <ArchiveCard key={index}  data={listData} />)}
                </div>
            </Container>
        </div>
    );
};

export default StudentVisa;