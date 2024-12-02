import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function Circle() {
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 200, label: 'series A', color: 'red' },
            { id: 1, value: 200, label: 'series B', color: 'blue' },
            { id: 2, value: 200, label: 'series C', color: 'green' },
          ],
        },
      ]}
      width={350}
      height={140}
    />
  );
}
