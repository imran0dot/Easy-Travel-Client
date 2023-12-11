import Container from "../../components/base/Container";
import AirTicketImg from "/src/assets/images/airTicket.gif";

const AirTicket = () => {
    return (
        <Container>
            <div className="">
                <img src={AirTicketImg} alt="" width="100%" />
            </div>
        </Container>
    );
};

export default AirTicket;