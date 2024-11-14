import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const PerformanceComparison = () => {
  const beforeMount = [1.5, 0.7, 0.6, 1.1, 0.7, 0.6];
  const beforeUpdate = [
    0.5, 0.4, 0.3, 0.4, 0.3, 0.3,
    0.3, 0.2, 0.2, 0.2, 0.1, 0.1,
    0, 0, 0, 0, 0, 0.1,
    0.4, 0.3, 0.2, 0.2, 0.2, 0.1
  ];

  const afterMount = [1.5, 0.6, 0.6, 0.6, 0.6, 0.5];
  const afterUpdate = [
    0.6, 0.4, 0.4, 0.3, 0.3, 0.2,
    0, 0.1, 0.1, 0, 0, 0.1
  ];

  const beforeData = [...beforeMount, ...beforeUpdate];
  const afterData = [...afterMount, ...afterUpdate];

  const data = beforeData.map((value, index) => ({
    measurement: index + 1,
    before: value,
    after: index < afterData.length ? afterData[index] : null,
  }));

  return (
    <Card className="w-full max-w-[90vw] mx-auto bg-white">
      <CardHeader>
        <CardTitle>Performance Comparison: Before vs After</CardTitle>
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
              <Tooltip />
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
            <li>Before: {beforeData.length} total measurements ({beforeMount.length} mount + {beforeUpdate.length} update)</li>
            <li>After: {afterData.length} total measurements ({afterMount.length} mount + {afterUpdate.length} update)</li>
            <li>Mount times are similar but slightly more consistent in the &quot;after&quot; measurements</li>
            <li>Update operations show improvement with fewer overall updates needed</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default PerformanceComparison;