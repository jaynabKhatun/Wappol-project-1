import ph1 from "../../../assets/potfolio/1.png";
import ph2 from "../../../assets/potfolio/2.png";
import ph3 from "../../../assets/potfolio/3.png";
import ph5 from "../../../assets/potfolio/5.png";
import ph6 from "../../../assets/potfolio/6.png";
import ph7 from "../../../assets/potfolio/7.png";
import ph8 from "../../../assets/potfolio/8.png";
import min from "../../../assets/potfolio/min.png";
import ph10 from "../../../assets/potfolio/11.png";
import ph11 from "../../../assets/potfolio/12.png";
import ph13 from "../../../assets/potfolio/13.png";
import ph14 from "../../../assets/potfolio/14.png";
import ph15 from "../../../assets/potfolio/15.png";
import ph16 from "../../../assets/potfolio/16.png";

const PortFolioCompany = () => {
  return (
    <div className="mt-20 md:mt-36">
      <h1 className="mb-8 font-serif text-2xl md:text-5xl">
        Selected WPPOOL Portfolio Companies
      </h1>
      <div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-5">
        {[ph1, ph2, ph3, ph5, ph6, ph7, ph8, min, ph10, ph11, ph13, ph14, ph15, ph16, ph10, ph5, ph11, ph5, ph7, ph1].map((image, index) => (
          <div key={index} className="bg-white p-2.5 md:p-4 lg:p-6">
            <img src={image} alt={`Portfolio ${index + 1}`} className="w-full h-auto object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortFolioCompany;
