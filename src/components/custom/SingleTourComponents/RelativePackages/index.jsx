import Title from "@components/base/Title";
import PackageSlider from "@components/shared/PackageSlider";

const RelativePackages = () => {
    const data = Array(7).fill();
    return (
        <div>
            <Title title="Relative Packages" subTitle="Choice Your Best Package"  />
            <PackageSlider data={data} />
        </div>
    );
};

export default RelativePackages;