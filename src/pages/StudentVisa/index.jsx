import ArchiveCard from "@components/base/ArchiveCard";
import Container from "@components/base/Container";
import Head from "@components/base/Head";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";


const StudentVisa = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        axios('student-visa')
            .then(res => setData(res.data))
    }, [])
    
    return (
        <div>
            <Head title="Student Visa | Easy Travels" />
            <Container>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
                    {data.map((listData, index) => <ArchiveCard key={index} data={listData} />)}
                </div>
            </Container>
        </div>
    );
};

export default StudentVisa;