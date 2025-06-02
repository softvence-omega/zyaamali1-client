
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import gliph from '../../assets/GLYPH.png'

const data = [
  { name: "Current", value: 100, fill: "#E5E5E5" },
  { name: "Predicted", value: 140, fill: "#D5C8FF" },
];

const metrics = [
  { label: "Click -Through Rate (CTR)", value: 22 },
  { label: "Conversion Rate", value: 18 },
  { label: "Engagement Rate", value: 25 },
  { label: "Return On Ad Spend (ROAS)", value: 30 },
];

const OptimizationCard = () => {
  return (
    <div className="bg-white rounded-xl font-sans">
      <div className="mt-5 bg-[#F3F4F6] rounded-xl p-6">
       <div className="flex gap-x-4">
         <img src={gliph} alt="" className="w-7 h-7"/>
        <h2 className="text-3xl font-semibold text-[#1A1A1A] mb-2">Predicted Impact</h2>
       </div>
        <hr className="bg-gray-200 my-3"/>
        <p className="text-sm text-gray-500 mb-6">
          Our AI predicted these performance improvements after applying the suggested changes
        </p>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-1/2">
            <ResponsiveContainer width="100%" height={150}>
              <BarChart layout="vertical" data={data}>
                <CartesianGrid horizontal={false} strokeDasharray="3 3" />
                <XAxis type="number" domain={[0, 150]} ticks={[0, 50, 100, 150]} tick={{ fontSize: 12 }} />
                <YAxis type="category" dataKey="name" width={70} tick={{ fontSize: 12 }} />
                <Bar dataKey="value">
                  <LabelList dataKey="value" position="right" />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            {metrics.map((metric, index) => (
              <div key={index} className="flex justify-between items-center">
                <p className="text-sm text-gray-700 w-1/2">{metric.label}</p>
                <div className="w-1/2 flex items-center gap-2">
                  <div className="flex-1 h-2 bg-gray-200 rounded">
                    <div
                      className="h-full rounded bg-[#2D1C81]"
                      style={{ width: `${metric.value}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-green-500 font-semibold">+{metric.value}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptimizationCard;
