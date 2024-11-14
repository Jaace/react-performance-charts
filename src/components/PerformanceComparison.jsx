import PropTypes from 'prop-types';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { performanceData, transformDataForChart, generateStats } from './PerformanceData';
import { useState } from 'react';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length > 0) {
    return (
      <div className="bg-white p-4 border rounded shadow">
        <p className="text-sm font-medium">Measurement {label}</p>
        {payload.map((entry, index) => (
          entry.value !== null && (
            <p key={index} style={{ color: entry.color }} className="text-sm">
              {entry.name}: {entry.value}ms ({entry.payload[`${entry.name.toLowerCase()}State`]})
            </p>
          )
        ))}
      </div>
    );
  }
  return null;
};

const PerformanceComparison = ({ testId = 'test1' }) => {
  const [dataSetKey, setDataSetKey] = useState('desktop');

  const dataSet = performanceData[testId][dataSetKey];
  const data = transformDataForChart(dataSet);
  const { observations } = generateStats(dataSet);


  return (
    <Card className="w-full max-w-[90vw] mx-auto bg-white">
      <CardHeader className="flex flex-col space-y-4">
        <CardTitle>Performance Comparison: Before vs After</CardTitle>
        <div className="flex items-center gap-6">
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio h-4 w-4 text-blue-600 border-gray-300 focus:ring-2 focus:ring-blue-500"
              name="dataset"
              value="desktop"
              checked={dataSetKey === 'desktop'}
              onChange={(e) => setDataSetKey(e.target.value)}
            />
            <span className="ml-2 text-sm font-medium text-gray-900">Desktop</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio h-4 w-4 text-blue-600 border-gray-300 focus:ring-2 focus:ring-blue-500"
              name="dataset"
              value="mobile"
              checked={dataSetKey === 'mobile'}
              onChange={(e) => setDataSetKey(e.target.value)}
            />
            <span className="ml-2 text-sm font-medium text-gray-900">Mobile</span>
          </label>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[500px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 25 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="measurement"
                label={{ value: 'Measurement Number', position: 'bottom', offset: 25 }}
              />
              <YAxis
                label={{ value: 'Time (ms)', angle: -90, position: 'insideLeft' }}
                domain={[0, 'auto']}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend verticalAlign="bottom" height={36} />
              <Line
                type="monotone"
                dataKey="before"
                stroke="#8884d8"
                name="Before"
                dot={{ r: 3 }}
                isAnimationActive={false}
              />
              <Line
                type="monotone"
                dataKey="after"
                stroke="#82ca9d"
                name="After"
                dot={{ r: 3 }}
                isAnimationActive={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-8 text-sm text-gray-600">
          <p>Key Observations:</p>
          <ul className="list-disc pl-5 space-y-1">
            {observations.map((observation, index) => (
              <li key={index}>{observation}</li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number,
      name: PropTypes.string,
      color: PropTypes.string,
      payload: PropTypes.shape({
        beforeState: PropTypes.string,
        afterState: PropTypes.string
      })
    })
  ),
  label: PropTypes.number
};

PerformanceComparison.propTypes = {
  testId: PropTypes.string
};

PerformanceComparison.defaultProps = {
  testId: 'test1'
};

export default PerformanceComparison;