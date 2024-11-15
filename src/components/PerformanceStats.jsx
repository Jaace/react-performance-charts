import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

import PropTypes from 'prop-types';

const StatsCard = ({ title, content, improved }) => (
  <Card className="w-64">
    <CardHeader className="pb-2">
      <CardTitle className="text-sm flex items-center justify-between">
        {title}
        {improved && <Sparkles size={16} className="text-green-500" />}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{content}</div>
    </CardContent>
  </Card>
);

const PerformanceStats = ({ beforeData, afterData }) => {
  // Helper to calculate average
  const avg = arr => (arr.reduce((a, b) => a + b, 0) / arr.length).toFixed(2);

  // Get mount times for each version
  const beforeMounts = Object.keys(beforeData).map(key => {
    const runs = beforeData[key].mount.runs;
    return runs.flat().reduce((a, b) => a + b, 0) / runs.length;
  });

  const afterMounts = Object.keys(afterData).map(key => {
    const runs = afterData[key].mount.runs;
    return runs.flat().reduce((a, b) => a + b, 0) / runs.length;
  });

  // Calculate improvements
  const mountImprovement = ((1 - (avg(afterMounts) / avg(beforeMounts))) * 100).toFixed(1);
  const updateCountReduction = ((beforeData.p1.update.runs[0].length - afterData.p1.update.runs[0].length) / beforeData.p1.update.runs[0].length * 100).toFixed(1);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <StatsCard
        title="Average Mount Time"
        content={`${mountImprovement}% faster`}
        improved={mountImprovement > 0}
      />
      <StatsCard
        title="Update Count"
        content={`${updateCountReduction}% fewer`}
        improved={updateCountReduction > 0}
      />
      <StatsCard
        title="Components Improved"
        content="4 of 6"
        improved={true}
      />
    </div>
  );
};

StatsCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  improved: PropTypes.bool.isRequired,
};

PerformanceStats.propTypes = {
  beforeData: PropTypes.object.isRequired,
  afterData: PropTypes.object.isRequired,
};

export default PerformanceStats;
