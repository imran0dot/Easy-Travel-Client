import SimpleBoxContainer from "../../../components/base/SimpleBoxContainer";

const DashboardMain = () => {
    return (
        <div>
            <div className="flex justify-between items-center gap-10">
                <SimpleBoxContainer>
                    <h3 className="font-bold text-3xl uppercase">Tour Packages</h3>
                    <p className="text-secondary uppercase font-bold text-lg">5 post</p>
                </SimpleBoxContainer>

                <SimpleBoxContainer>
                    <h3 className="font-bold text-3xl uppercase">Tour Packages</h3>
                    <p className="text-secondary uppercase font-bold text-lg">5 post</p>
                </SimpleBoxContainer>

                <SimpleBoxContainer>
                    <h3 className="font-bold text-3xl uppercase">Tour Packages</h3>
                    <p className="text-secondary uppercase font-bold text-lg">5 post</p>
                </SimpleBoxContainer>

            </div>
        </div>
    );
};

export default DashboardMain;