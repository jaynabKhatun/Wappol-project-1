import { FaSearch } from "react-icons/fa";

const AllCompanies = () => {
  return (
    <div className="md:h-[600px] bg-white rounded-2xl border mt-14 p-4 md:p-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-3xl md:text-5xl font-serif mb-4 md:mb-0">All Companies</h1>
        <div className="relative w-full md:w-auto">
          <input
            type="text"
            className="w-full md:w-96 pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Search Companies"
          />
          <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-black text-xl" />
        </div>
      </div>
      <div className="overflow-x-auto mt-10">
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">Company</th>
              <th className="px-4 py-2">
                <select className="border-none bg-transparent focus:ring-0">
                  <option value="a">Ticker</option>
                  <option value="b">Option 2</option>
                  <option value="c">Option 3</option>
                </select>
              </th>
              <th className="px-4 py-2">Vertical</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Market Cap ($B)</th>
              <th className="px-4 py-2">Revenue Growth</th>
              <th className="px-4 py-2">Gross Margin</th>
              <th className="px-4 py-2">EV/Revenue</th>
              <th className="px-4 py-2">YTD Performance</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                Company: "Adyen",
                Ticker: "AFRM",
                Vertical: "payments",
                Price: "$17.15",
                Market: "49.0%",
                Revenue: "15.8%",
                Gross: "6.3",
                EV: "24.3%",
                YTD: "-17.8%",
              },
              {
                Company: "Affirm",
                Ticker: "AFRM",
                Vertical: "payments",
                Price: "$23.12",
                Market: "50.4%",
                Revenue: "10.8%",
                Gross: "5.4",
                EV: "30.6%",
                YTD: "20.7%",
              },
              {
                Company: "Alkami Tech",
                Ticker: "ABDX",
                Vertical: "Landing",
                Price: "$23.7",
                Market: "20.5%",
                Revenue: "4.7%",
                Gross: "7.8",
                EV: "20.8%",
                YTD: "6.9%",
              },
              {
                Company: "AvidXchange",
                Ticker: "VIRT",
                Vertical: "Wealth",
                Price: "$34.7",
                Market: "65.56",
                Revenue: "10.8%",
                Gross: "5.4",
                EV: "30.6%",
                YTD: "20.7%",
              },
              {
                Company: "nilay",
                Ticker: "AFRM",
                Vertical: "payments",
                Price: "$56.8",
                Market: "43.4",
                Revenue: "65.8%",
                Gross: "8.7",
                EV: "2.7%",
                YTD: "10.877%",
              },
              {
                Company: "philip",
                Ticker: "ADEX",
                Vertical: "Lending",
                Price: "$54.7",
                Market: "65.98",
                Revenue: "34.7%",
                Gross: "4.9",
                EV: "45.55%",
                YTD: "23.7%",
              },
              {
                Company: "Rimay",
                Ticker: "AFRM",
                Vertical: "payments",
                Price: "$67.8",
                Market: "154.56",
                Revenue: "56.8%",
                Gross: "3.6",
                EV: "45.54%",
                YTD: "76.55%",
              },
              {
                Company: "AvidXchange",
                Ticker: "VIRT",
                Vertical: "Wealth",
                Price: "$34.7",
                Market: "65.56",
                Revenue: "10.8%",
                Gross: "5.4",
                EV: "30.6%",
                YTD: "20.7%",
              },
              {
                Company: "philip",
                Ticker: "ADEX",
                Vertical: "Lending",
                Price: "$54.7",
                Market: "65.98",
                Revenue: "34.7%",
                Gross: "4.9",
                EV: "45.55%",
                YTD: "23.7%",
              },
              {
                Company: "Adyen",
                Ticker: "AVDX",
                Vertical: "Lending",
                Price: "Payments",
                Market: "56.767%",
                Revenue: "B5.8%",
                Gross: "34.7",
                EV: "56.8%",
                YTD: "34.7%",
              },
            ].map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                <td className="px-4 py-2">{row.Company}</td>
                <td className="px-4 py-2">{row.Ticker}</td>
                <td className="px-4 py-2">{row.Vertical}</td>
                <td className="px-4 py-2">{row.Price}</td>
                <td className="px-4 py-2">{row.Market}</td>
                <td className="px-4 py-2">{row.Revenue}</td>
                <td className="px-4 py-2">{row.Gross}</td>
                <td className="px-4 py-2">{row.EV}</td>
                <td className="px-4 py-2">{row.YTD}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllCompanies;
