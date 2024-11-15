export const performanceData = {
  test1: {
    desktop: {
      before: {
        p1: {
          mount: {
            runs: [[1.2], [1.7], [1.5], [1.7], [1.3], [1.5], [1.5], [1.4]],
            stats: null,
          },
          update: {
            runs: [
              [0.4, 0.1, 0.3],
              [0.3, 0, 0.2],
              [0.4, 0, 0.3],
              [0.5, 0.1, 0.1],
              [0.4, 0, 0.3],
              [0.4, 0.1, 0.3],
              [0.5, 0.1, 0.3],
              [0.4, 0, 0.2],
            ],
            stats: null,
          },
        },
        p2: {
          mount: {
            runs: [[0.5], [0.7], [0.5], [3.2], [0.7], [0.5], [0.7], [0.6]],
            stats: null,
          },
          update: {
            runs: [
              [0.4, 0, 0.4],
              [0.4, 0.1, 0.3],
              [0.5, 0, 0.3],
              [0.4, 0, 0.2],
              [0.1, 0, 0.2],
              [0.4, 0, 0.3],
              [0.4, 0, 0.2],
              [0.3, 0.1, 0.2],
            ],
            stats: null,
          },
        },
        p3: {
          mount: {
            runs: [[0.5], [0.6], [0.6], [0.5], [0.5], [3.3], [0.4], [0.4]],
            stats: null,
          },
          update: {
            runs: [
              [0.3, 0, 0.1],
              [0.6, 0, 0.2],
              [0.3, 0, 0.2],
              [0.3, 0, 0.2],
              [0.3, 0, 0.2],
              [0.4, 0, 0.2],
              [0.3, 0, 0.3],
              [0.2, 0, 0.1],
            ],
            stats: null,
          },
        },
        p4: {
          mount: {
            runs: [[0.6], [0.7], [0.6], [0.6], [0.3], [0.4], [0.6], [2.8]],
            stats: null,
          },
          update: {
            runs: [
              [0.3, 0, 0.1],
              [0.3, 0, 0.2],
              [0.3, 0, 0.3],
              [0.3, 0.1, 0.2],
              [0.2, 0, 0.2],
              [0.2, 0.1, 0.2],
              [0.3, 0, 0.1],
              [0.3, 0, 0.1],
            ],
            stats: null,
          },
        },
        p5: {
          mount: {
            runs: [[0.5], [0.4], [0.5], [0.5], [0.5], [0.4], [0.5], [0.5]],
            stats: null,
          },
          update: {
            runs: [
              [0.1, 0.1, 0.2],
              [0.1, 0, 0.2],
              [0.3, 0, 0.2],
              [0.2, 0, 0.1],
              [0.2, 0.1, 0.2],
              [0.2, 0, 0.1],
              [0.2, 0.1, 0.2],
              [0.2, 0, 0.1],
            ],
            stats: null,
          },
        },
        p6: {
          mount: {
            runs: [[0.4], [0.3], [0.3], [0.4], [0.4], [0.3], [0.4], [0.4]],
            stats: null,
          },
          update: {
            runs: [
              [0.2, 0, 0.1],
              [0.3, 0.1, 0.2],
              [0.2, 0.1, 0.1],
              [0.3, 0, 0.2],
              [0.2, 0, 0.2],
              [0.2, 0.1, 0.1],
              [0.2, 0, 0.1],
              [0.1, 0, 0.2],
            ],
            stats: null,
          },
        },
      },
      after: {
        p1: {
          mount: {
            runs: [[0.4], [1.3], [1.5], [1.4], [1.4], [1.7], [1.4], [1.3]],
            stats: null,
          },
          update: {
            runs: [
              [0.4, 0.1],
              [0.4, 0.1],
              [0.3, 0],
              [0.4, 0],
              [0.2, 0],
              [0.4, 0],
              [0.5, 0],
              [0.4, 0.1]
            ],
            stats: null,
          },
        },
        p2: {
          mount: {
            runs: [[0.9], [0.6], [0.5], [0.6], [0.6], [0.7], [0.6], [0.7]],
            stats: null,
          },
          update: {
            runs: [
              [0.4, 0],
              [0.3, 0],
              [0.2, 0.1],
              [2.5, 0.1],
              [0.3, 0.1],
              [0.3, 0],
              [0.3, 0],
              [0.2, 0]
            ],
            stats: null,
          },
        },
        p3: {
          mount: {
            runs: [[0.4], [0.5], [0.4], [0.5], [0.4], [0.5], [0.5], [0.5]],
            stats: null,
          },
          update: {
            runs: [
              [0.5, 0],
              [0.3, 0],
              [0.5, 0],
              [0.4, 0.1],
              [0.2, 0],
              [0.2, 0.1],
              [0.2, 0],
              [0.3, 0]
            ],
            stats: null,
          },
        },
        p4: {
          mount: {
            runs: [[0.5], [0.5], [0.6], [0.4], [0.8], [0.4], [0.5], [0.5]],
            stats: null,
          },
          update: {
            runs: [
              [0.3, 0.1],
              [0.4, 0.1],
              [0.3, 0.1],
              [0.3, 0],
              [0.2, 0],
              [0.4, 0],
              [0.2, 0],
              [0.3, 0]
            ],
            stats: null,
          },
        },
        p5: {
          mount: {
            runs: [[0.5], [0.5], [0.7], [0.5], [0.5], [0.6], [0.4], [0.5]],
            stats: null,
          },
          update: {
            runs: [
              [0.3, 0],
              [0.2, 0.1],
              [0.1, 0],
              [0.2, 0.1],
              [0.3, 0],
              [0.1, 0],
              [0.3, 0],
              [0.2, 0.1]
            ],
            stats: null,
          },
        },
        p6: {
          mount: {
            runs: [[0.8], [0.6], [0.5], [0.3], [0.5], [0.6], [0.5], [0.4]],
            stats: null,
          },
          update: {
            runs: [
              [0.3, 0],
              [0.2, 0],
              [0.3, 0],
              [0.2, 0],
              [0.1, 0],
              [0.2, 0],
              [0.2, 0],
              [2.6, 0]
            ],
            stats: null,
          },
        },
      },
    },
  },
};

// Helper to calculate statistics across multiple runs
const calculateMultiRunStats = (runs) => {
  if (!runs || runs.length === 0) return null;

  // Flatten all measurements for each position
  const measurementsByPosition = {};

  runs.forEach((run) => {
    run.forEach((value, index) => {
      if (!measurementsByPosition[index]) {
        measurementsByPosition[index] = [];
      }
      measurementsByPosition[index].push(value);
    });
  });

  // Calculate stats for each measurement position
  return Object.entries(measurementsByPosition).map(([position, values]) => {
    const mean = values.reduce((a, b) => a + b, 0) / values.length;
    const sorted = [...values].sort((a, b) => a - b);
    const median =
      values.length % 2 === 0
        ? (sorted[values.length / 2 - 1] + sorted[values.length / 2]) / 2
        : sorted[Math.floor(values.length / 2)];

    const variance =
      values.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) /
      values.length;
    const stdDev = Math.sqrt(variance);

    return {
      position: parseInt(position),
      mean: Number(mean.toFixed(3)),
      median: Number(median.toFixed(3)),
      stdDev: Number(stdDev.toFixed(3)),
      min: Math.min(...values),
      max: Math.max(...values),
      samples: values.length,
      rawValues: values,
    };
  });
};

// Transform data for the chart
export const transformDataForChart = (dataSet) => {
  const data = [];
  const { before, after } = dataSet;

  Object.entries(before).forEach(([componentId, metrics]) => {
    const mountBeforeStats = calculateMultiRunStats(metrics.mount.runs);
    const mountAfterStats = calculateMultiRunStats(
      after[componentId].mount.runs
    );
    const updateBeforeStats = calculateMultiRunStats(metrics.update.runs);
    const updateAfterStats = calculateMultiRunStats(
      after[componentId].update.runs
    );

    // Add mount measurements
    mountBeforeStats.forEach((stat, index) => {
      data.push({
        measurement: `${componentId} Mount ${index + 1}`,
        before: stat.mean,
        beforeMin: stat.min,
        beforeMax: stat.max,
        beforeStdDev: stat.stdDev,
        beforeSamples: stat.samples,
        after: mountAfterStats[index]?.mean ?? null,
        afterMin: mountAfterStats[index]?.min ?? null,
        afterMax: mountAfterStats[index]?.max ?? null,
        afterStdDev: mountAfterStats[index]?.stdDev ?? null,
        afterSamples: mountAfterStats[index]?.samples ?? 0,
        phase: "mount",
      });
    });

    // Add update measurements - show all updates from either before or after
    const maxUpdates = Math.max(
      updateBeforeStats.length,
      updateAfterStats.length
    );

    for (let i = 0; i < maxUpdates; i++) {
      data.push({
        measurement: `${componentId} Update ${i + 1}`,
        before: updateBeforeStats[i]?.mean ?? null,
        beforeMin: updateBeforeStats[i]?.min ?? null,
        beforeMax: updateBeforeStats[i]?.max ?? null,
        beforeStdDev: updateBeforeStats[i]?.stdDev ?? null,
        beforeSamples: updateBeforeStats[i]?.samples ?? 0,
        after: updateAfterStats[i]?.mean ?? null,
        afterMin: updateAfterStats[i]?.min ?? null,
        afterMax: updateAfterStats[i]?.max ?? null,
        afterStdDev: updateAfterStats[i]?.stdDev ?? null,
        afterSamples: updateAfterStats[i]?.samples ?? 0,
        phase: "update",
      });
    }
  });

  return data;
};

// Generate statistics and observations
export const generateStats = (dataSet) => {
  const { before, after } = dataSet;
  const observations = [];

  Object.entries(before).forEach(([componentId, metrics]) => {
    // Mount analysis
    const mountBeforeStats = calculateMultiRunStats(metrics.mount.runs);
    const mountAfterStats = calculateMultiRunStats(
      after[componentId].mount.runs
    );

    const mountImprovement = mountBeforeStats.map((beforeStat, index) => {
      const afterStat = mountAfterStats[index];
      return ((afterStat.mean - beforeStat.mean) / beforeStat.mean) * 100;
    });

    const avgMountImprovement =
      mountImprovement.reduce((a, b) => a + b, 0) / mountImprovement.length;

    // Update analysis
    const updateBeforeStats = calculateMultiRunStats(metrics.update.runs);
    const updateAfterStats = calculateMultiRunStats(
      after[componentId].update.runs
    );

    // Calculate update time improvements for each position
    const updateImprovements = updateBeforeStats
      .map((beforeStat, index) => {
        if (index < updateAfterStats.length) {
          const afterStat = updateAfterStats[index];
          return ((afterStat.mean - beforeStat.mean) / beforeStat.mean) * 100;
        }
        return null;
      })
      .filter((imp) => imp !== null);

    const avgUpdateImprovement =
      updateImprovements.length > 0
        ? updateImprovements.reduce((a, b) => a + b, 0) /
          updateImprovements.length
        : 0;

    // Add mount time observations
    observations.push(
      `${componentId}: Mount time ${
        avgMountImprovement > 0 ? "increased" : "decreased"
      } by ` +
        `${Math.abs(avgMountImprovement).toFixed(1)}% across ${
          mountBeforeStats[0].samples
        } runs`
    );

    // Add mount variance observations
    mountBeforeStats.forEach((stat, index) => {
      if (stat.stdDev > stat.mean * 0.1) {
        observations.push(
          `${componentId} Mount ${index + 1}: High variance in measurements ` +
            `(StdDev: ${stat.stdDev.toFixed(3)}ms, Mean: ${stat.mean.toFixed(
              3
            )}ms)`
        );
      }
    });

    // Add update time observations
    if (updateImprovements.length > 0) {
      observations.push(
        `${componentId}: Update time ${
          avgUpdateImprovement > 0 ? "increased" : "decreased"
        } by ` +
          `${Math.abs(avgUpdateImprovement).toFixed(1)}% for shared updates`
      );
    }

    // Add update count comparison
    const beforeUpdateCount = updateBeforeStats.length;
    const afterUpdateCount = updateAfterStats.length;
    if (beforeUpdateCount !== afterUpdateCount) {
      observations.push(
        `${componentId}: Update count reduced from ${beforeUpdateCount} to ${afterUpdateCount} ` +
          `(${Math.round(
            (1 - afterUpdateCount / beforeUpdateCount) * 100
          )}% reduction)`
      );
    }

    // Add update variance observations
    updateBeforeStats.forEach((stat, index) => {
      if (stat.stdDev > stat.mean * 0.1) {
        observations.push(
          `${componentId} Update ${index + 1}: High variance in measurements ` +
            `(StdDev: ${stat.stdDev.toFixed(3)}ms, Mean: ${stat.mean.toFixed(
              3
            )}ms)`
        );
      }
    });
  });

  return { observations };
};
