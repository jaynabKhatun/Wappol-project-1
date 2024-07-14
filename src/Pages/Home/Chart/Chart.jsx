import  { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../../../public/wppl logo.svg";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { IoMdShare } from "react-icons/io";

import Sli2 from "../Sli2/Sli2";

const chartData = [
  { name: "Feb", WPPOOL: 10, Google: 20, Microsoft: 15, Twitter: 5 },
  { name: "Mar", WPPOOL: 30, Google: 35, Microsoft: 40, Twitter: 25 },
  { name: "Apr", WPPOOL: 50, Google: 45, Microsoft: 55, Twitter: 40 },
  { name: "May", WPPOOL: 20, Google: 30, Microsoft: 25, Twitter: 15 },
  { name: "Jun", WPPOOL: 60, Google: 55, Microsoft: 50, Twitter: 45 },
  { name: "Jul", WPPOOL: 80, Google: 65, Microsoft: 70, Twitter: 60 },
];

const indexTabs = [
  { title: "The Index Tab Two" },
  { title: "The Index Tab Three" },
  { title: "The Index Tab Four" },
  { title: "The Index Tab Five" },
];

const statCards = [
  { percentage: "+66.2%", label: "WPPOOL Index", color: "bg-red-400" },
  { percentage: "+26.6%", label: "Google Index", color: "bg-indigo-500" },
  { percentage: "+34.1%", label: "Microsoft", color: "bg-lime-300" },
  { percentage: "+17%", label: "Twitter Index", color: "bg-purple-800" },
];

const chartLegends = [
  { color: "bg-red-400", label: "WPPOOL" },
  { color: "bg-indigo-500", label: "Google" },
  { color: "bg-lime-300", label: "Microsoft" },
  { color: "bg-purple-800", label: "Twitter" },
];

const StatCard = ({ percentage, label, color }) => (
  <div className={`p-4 ${color} text-white rounded-md`}>
    <div className="text-xl">{percentage}</div>
    <div className="text-sm">{label}</div>
  </div>
);

const ChartLegend = ({ color, label }) => (
  <div className="flex items-center gap-2">
    <div className={`w-4 h-4 ${color}`}></div>
    <div>{label}</div>
  </div>
);

const Chart = () => {
  const [showSlider, setShowSlider] = useState(false);

  const handleNavbarClick = () => {
    setShowSlider(true);
  };

  return (
    <div className="flex flex-col  px-6 py-5 bg-white max-md:pl-5">
      <header className="text-2xl font-bold mt-20">
        <div className="navbar  bg-[#F3F3F3] max-w-screen-xl  shadow-2xl">
          <div className="flex-1 px-2 lg:flex-none">
            <img className="w-40 " src={logo} alt="" />
          </div>
          <div className="flex flex-1 justify-end px-2">
            <div className="flex items-stretch gap-4">
              <button className="btn  btn-outline btn-accent  hidden md:block  rounded-full">
                <IoMdShare />
              </button>
              <button className="btn  btn-outline btn-accent md:block  hidden rounded-full">
                Download the 2024 Report
              </button>

              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost rounded-btn"
                >
                  <GiHamburgerMenu className="text-2xl" />
                </div>
                <ul
                  tabIndex={0}
                  className="menu dropdown-content bg-base-100 rounded-box z-[1] mt-4 w-ful p-2 shadow"
                >
                  <div>
                    {indexTabs.map((tab, index) => (
                      <button key={index} onClick={handleNavbarClick}>{tab.title}</button>
                    ))}
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="mt-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <aside className="flex flex-col w-[19%] max-md:ml-0 max-md:w-full">
            <nav className="flex flex-col grow px-2 pt-2 pb-20 mx-auto w-full text-base rounded-2xl bg-slate-100 text-slate-500 max-md:mt-6">
              <div className="flex gap-5 justify-between px-4 py-3.5 text-white bg-blue-800 rounded-md shadow-xl">
                <img src={logo} alt="" />
                <div className="shrink-0 my-auto w-1 h-px bg-white" />
              </div>
              {indexTabs.map((tab, index) => (
                <div key={index} className="px-4 py-2 cursor-pointer" onClick={handleNavbarClick}>
                  {tab.title}
                </div>
              ))}
            </nav>
          </aside>
          <main className="flex flex-col ml-5 w-[81%] max-md:ml-0 max-md:w-full">
            <section className="flex flex-col mt-1.5 max-md:mt-7 max-md:max-w-full">
              {showSlider ? (
                <Sli2 />
              ) : (
                <>
                  <div className="flex gap-1 self-start text-4xl text-neutral-900">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/160c14546f599027a49e185035395598115ba09c3182f4101ce9fef6c04a7bd4?apiKey=a90fe2e643fb4b1cbc71a2887f0be298&"
                      alt=""
                      className="shrink-0 border border-solid aspect-[1.12] border-neutral-900 stroke-[1px] stroke-neutral-900 w-[46px]"
                    />
                    <h1 className="flex-auto my-auto">The WPPOOL Index</h1>
                  </div>
                  <div className="flex gap-5 mt-2.5 max-md:flex-wrap max-md:pr-5">
                    {statCards.map((card, index) => (
                      <StatCard
                        key={index}
                        percentage={card.percentage}
                        label={card.label}
                        color={card.color}
                      />
                    ))}
                  </div>
                  <div className="flex gap-5 justify-between mt-5 w-full text-xs max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                    <div className="flex gap-3.5 my-auto text-white">
                      <button className="flex gap-5 justify-between py-1 pr-1.5 pl-2.5 whitespace-nowrap bg-blue-800 shadow-sm rounded-[124px]">
                        <span className="my-auto">Sectors</span>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/547c06e97ffc8f59c1b89f2722ca8890e2a042cd9d1935c9bba9bf8429099cc2?apiKey=a90fe2e643fb4b1cbc71a2887f0be298&"
                          alt=""
                          className="shrink-0 w-5 aspect-square"
                        />
                      </button>
                      <button className="flex gap-5 justify-between py-1 pr-1.5 pl-2.5 bg-blue-800 shadow-sm rounded-[124px]">
                        <span className="my-auto">Types of IPO</span>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c7d8103c2747ae02454cadef2553fa69b47b85bab72323e70eadf172a96a3e2?apiKey=a90fe2e643fb4b1cbc71a2887f0be298&"
                          alt=""
                          className="shrink-0 w-5 aspect-square"
                        />
                      </button>
                    </div>
                    <div className="flex gap-5 justify-between text-blue-800 max-md:mt-5 max-md:self-start">
                      <button className="self-stretch my-auto">1Y</button>
                      <div className="flex gap-2.5 items-center self-stretch">
                        <button className="self-stretch my-auto">YTD</button>
                        <button className="justify-center self-stretch py-2 text-white bg-blue-800 shadow-sm rounded-[124px]">
                          6M
                        </button>
                        <button className="self-stretch my-auto">1M</button>
                      </div>
                      <button className="self-stretch my-auto">1W</button>
                    </div>
                  </div>
                  <div className="flex gap-2.5 mt-5 text-xs whitespace-nowrap text-neutral-900 max-md:flex-wrap">
                    <div className="flex flex-col self-start max-md:hidden">
                      {[100, 75, 50, 25, 0].map((value, index) => (
                        <div
                          key={index}
                          className="flex grow justify-between h-[35px]"
                        >
                          <div className="mr-1 my-auto">{value}%</div>
                          <div className="self-stretch my-auto w-4 border-b-2 border-solid border-neutral-900"></div>
                        </div>
                      ))}
                    </div>
                    <div className="grow">
                      <ResponsiveContainer width="100%" height={400}>
                        <LineChart
                          data={chartData}
                          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Line
                            type="monotone"
                            dataKey="WPPOOL"
                            stroke="#f87171"
                            activeDot={{ r: 8 }}
                          />
                          <Line
                            type="monotone"
                            dataKey="Google"
                            stroke="#6366f1"
                          />
                          <Line
                            type="monotone"
                            dataKey="Microsoft"
                            stroke="#bef264"
                          />
                          <Line
                            type="monotone"
                            dataKey="Twitter"
                            stroke="#6b21a8"
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="flex flex-col self-start max-md:hidden">
                      {[100, 75, 50, 25, 0].map((value, index) => (
                        <div
                          key={index}
                          className="flex grow justify-between h-[35px]"
                        >
                          <div className="self-stretch my-auto w-4 border-b-2 border-solid border-neutral-900"></div>
                          <div className="ml-1 my-auto">{value}%</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-5 mt-5 self-end max-md:self-auto">
                    {chartLegends.map((legend, index) => (
                      <ChartLegend
                        key={index}
                        color={legend.color}
                        label={legend.label}
                      />
                    ))}
                  </div>
                </>
              )}
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

Chart.propTypes = {};

export default Chart;