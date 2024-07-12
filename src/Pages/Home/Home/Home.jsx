import Button from "../../../Components/Button";
import AllCompanies from "../AllCompanies/AllCompanies";
import Banner from "../Banner/Banner";
import PotentialFeature from "../PotenstialFeature/PotentialFeature";
import State from "../State/State";


const Home = () => {
  return (
    <div >
      <Banner></Banner>
      <div className="p-8">
      <AllCompanies></AllCompanies>
      <Button></Button>
      <PotentialFeature></PotentialFeature>
      <State></State>
      
      </div>
    </div>
  );
};

export default Home;
