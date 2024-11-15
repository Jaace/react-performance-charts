import { useState } from 'react';
import PropTypes from 'prop-types';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import PerformanceStats from './PerformanceStats';
import { performanceData, transformDataForChart, generateStats } from './PerformanceData';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length > 0) {
    return (
      <div className="bg-white p-4 border rounded shadow">
        <p className="text-sm font-bold">{label}</p>
        {payload.map((entry, index) => {
          if (entry.value !== null) {
            const baseName = entry.name.toLowerCase();
            return (
              <div key={index} style={{ color: entry.color }} className="text-sm space-y-1">
                <p className="font-medium">{entry.name}</p>
                <p>Mean: {entry.value.toFixed(3)}ms</p>
                <p>Range: {entry.payload[`${baseName}Min`].toFixed(3)}ms -
                   {entry.payload[`${baseName}Max`].toFixed(3)}ms</p>
                <p>StdDev: ±{entry.payload[`${baseName}StdDev`].toFixed(3)}ms</p>
                <p>Samples: {entry.payload[`${baseName}Samples`]}</p>
              </div>
            );
          }
          return null;
        })}
      </div>
    );
  }
  return null;
};

const ComponentChart = ({ data, componentId }) => (
  <Card className="w-full">
    <CardHeader>
      <CardTitle className="text-lg">Component {componentId}</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 25 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="measurement"
              label={{ value: 'Measurement Type', position: 'bottom', offset: 15 }}
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
    </CardContent>
  </Card>
);

const PerformanceComparison = ({ testId = 'test1' }) => {
  const [dataSetKey, setDataSetKey] = useState('desktop');
  const dataSet = performanceData[testId][dataSetKey];
  const data = transformDataForChart(dataSet);
  const { observations } = generateStats(dataSet);

  const componentData = {};
  data.forEach(item => {
    const [componentId] = item.measurement.split(' ');
    if (!componentData[componentId]) {
      componentData[componentId] = [];
    }
    componentData[componentId].push(item);
  });

  return (
    <div className="w-full max-w-[90vw] mx-auto">
      <Card className="mb-8">
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
          <div className="text-sm text-gray-600">
            <p>Key Observations:</p>
            <ul className="list-disc pl-5 space-y-1">
              {observations.map((observation, index) => (
                <li key={index}>{observation}</li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>

      <PerformanceStats
        beforeData={performanceData.test1.desktop.before}
        afterData={performanceData.test1.desktop.after}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(componentData).map(([componentId, componentItems]) => (
          <ComponentChart
            key={componentId}
            data={componentItems}
            componentId={componentId}
          />
        ))}
      </div>
    </div>
  );
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
  label: PropTypes.string,
};

ComponentChart.propTypes = {
  data: PropTypes.array.isRequired,
  componentId: PropTypes.string.isRequired,
};

PerformanceComparison.propTypes = {
  testId: PropTypes.string,
};

export default PerformanceComparison;