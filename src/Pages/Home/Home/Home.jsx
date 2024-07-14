import Button from "../../../Components/Button";
import About from "../About/About";
import AllCompanies from "../AllCompanies/AllCompanies";
import Banner from "../Banner/Banner";
import Chart from "../Chart/Chart";
import PortFolioCompany from "../PortfolioCompany/PortFolioCompany";
import PotentialFeature from "../PotenstialFeature/PotentialFeature";
import State from "../State/State";
import Stories from "../Stories/Stories";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div>
        <Chart></Chart>
        <AllCompanies></AllCompanies>
        <Button></Button>
        <PotentialFeature></PotentialFeature>
        <State></State>
        <Stories></Stories>
        <About></About>
        <PortFolioCompany></PortFolioCompany>
      </div>
    </div>
  );
};

export default Home;
