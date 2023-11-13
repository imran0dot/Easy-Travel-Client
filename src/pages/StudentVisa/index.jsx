import ArchiveCard from "@components/base/ArchiveCard";
import Container from "@components/base/Container";
import Head from "@components/base/Head";
import useData from "../../hooks/useData";
import LoadingSpinner from "../../components/base/LoadingSpinner";


const StudentVisa = () => {
    const { data, isLoading } = useData('student-visa');

    if (isLoading) return <LoadingSpinner />

    return (
        <div>
            <Head title="Student Visa | Easy Travels" />
            <Container>
                {
                    data.length !== 0 ?
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
                            {data.map((listData, index) => <ArchiveCard key={index} data={listData} />)}
                        </div> :

                        <h2 className="text-center text-4xl font-bold my-20">No Package Found Please!</h2>
                }
            </Container>
        </div>
    );
};

export default StudentVisa;