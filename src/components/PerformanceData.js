export const performanceData = {
  test1: {
    desktop: {
      before: {
        mount: [1.5, 0.7, 0.6, 1.1, 0.7, 0.6],
        update: [
          0.5, 0.4, 0.3, 0.4, 0.3, 0.3,
          0.3, 0.2, 0.2, 0.2, 0.1, 0.1,
          0, 0, 0, 0, 0, 0.1,
          0.4, 0.3, 0.2, 0.2, 0.2, 0.1
        ]
      },
      after: {
        mount: [1.5, 0.6, 0.6, 0.6, 0.6, 0.5],
        update: [
          0.6, 0.4, 0.4, 0.3, 0.3, 0.2,
          0, 0.1, 0.1, 0, 0, 0.1
        ]
      }
    },
    mobile: {
      before: {
        mount: [
          1.5, 0.6, 0.5, 0.9, 0.6, 0.5,
          0.6, 0.4, 0.3, 0.3, 0.3
        ],
        update: [
          0.5, 0.4, 0.4, 0.2, 0.4, 0.2,
          0.3, 0.2, 0.3, 0.2, 0.1, 0.2,
          0.3, 0.3, 0.2, 0.3, 0.2, 0.1,
          0.4, 0.3, 0.2, 0.2, 0.1, 0.3,
          0.3, 0.4, 0.3, 0.1, 0.2, 0.2
        ]
      },
      after: {
        mount: [
          1.6, 0.6, 0.5, 0.3, 0.4, 0.3,
          0.6, 0.3, 0.4, 0.3, 0.1
        ],
        update: [
          0.4, 0.3, 0.3, 0.2, 0.3, 0.3,
          0.3, 0.4, 0.1, 0.1, 0.2, 0.1,
          0.4, 0.2, 0.3, 0.1, 0.3, 0.1,
          0.1, 0.3, 0.1, 0.4, 0.2, 0.3,
          0.1, 0.2
        ]
      }
    }
  },
  test2: {
    desktop: {
      before: {
        mount: [1.5, 0.7, 0.6, 0.6, 0.7, 0.4],
        update: [
          0.4, 0.3, 0.3, 0.5, 0.3, 0.3,
          0.4, 0.2, 0.2, 0.2, 0.1, 0.3,
          0, 0, 0, 0, 0, 0.1,
          0.4, 0.3, 0.3, 0.1, 0.2, 0.2
        ]
      },
      after: {
        mount: [1.9, 0.7, 0.7, 0.5, 0.6, 0.6],
        update: [
          0.4, 0.4, 0.4, 0.4, 0.3, 0.1,
          0.1, 0, 0.2, 0, 0, 0.1
        ]
      }
    },
    mobile: {
      before: { mount: [], update: [] },
      after: { mount: [], update: [] }
    }
  }
};

// Helper to calculate statistics and generate observations
export const generateStats = (dataSet) => {
  const { before, after } = dataSet;

  // Calculate totals
  const totalsBefore = {
    mount: before.mount.length,
    update: before.update.length,
    total: before.mount.length + before.update.length
  };

  const totalsAfter = {
    mount: after.mount.length,
    update: after.update.length,
    total: after.mount.length + after.update.length
  };

  // Calculate averages
  const avgBeforeMount = before.mount.reduce((a, b) => a + b, 0) / before.mount.length;
  const avgAfterMount = after.mount.reduce((a, b) => a + b, 0) / after.mount.length;
  const mountDiff = ((avgAfterMount - avgBeforeMount) / avgBeforeMount * 100).toFixed(1);

  // Generate observations
  const observations = [
    `Before: ${totalsBefore.total} total measurements (${totalsBefore.mount} mount + ${totalsBefore.update} update)`,
    `After: ${totalsAfter.total} total measurements (${totalsAfter.mount} mount + ${totalsAfter.update} update)`,
  ];

  // Add mount time comparison
  if (Math.abs(avgAfterMount - avgBeforeMount) < 0.1) {
    observations.push('Mount times remain consistent between before and after measurements');
  } else if (avgAfterMount < avgBeforeMount) {
    observations.push(`Mount times improved by ${Math.abs(mountDiff)}% in the "after" measurements`);
  } else {
    observations.push(`Mount times increased by ${mountDiff}% in the "after" measurements`);
  }

  // Add update operations observation
  if (totalsAfter.update < totalsBefore.update) {
    observations.push(`Update operations reduced from ${totalsBefore.update} to ${totalsAfter.update} operations`);
  }

  return {
    totalsBefore,
    totalsAfter,
    observations
  };
};

// Keep the existing transformDataForChart function
export const transformDataForChart = (dataSet) => {
  const { before, after } = dataSet;
  const data = [];

  // Add mount measurements
  before.mount.forEach((value, index) => {
    data.push({
      measurement: index + 1,
      before: value,
      beforeState: 'mount',
      after: after.mount[index],
      afterState: 'mount'
    });
  });

  // Add update measurements
  before.update.forEach((value, index) => {
    data.push({
      measurement: before.mount.length + index + 1,
      before: value,
      beforeState: 'update',
      after: index < after.update.length ? after.update[index] : null,
      afterState: index < after.update.length ? 'update' : null
    });
  });

  return data;
};