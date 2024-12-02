import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const uData = [4000, 3000, 2000, 2780];
const pData = [2400, 1398, 9800, 3908];
const aData = [2000,2000,2000,2000];
const bData = [4000, 3000, 2000, 2780];
const cData = [2400, 1398, 9800, 3908];
const dData = [2000,2000,2000,2000];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
];

export default function Grafic() {
  return (
    <BarChart
      style={{ backgroundColor: 'white' }}
      width={950}
      height={400}
      series={[
        { data: pData, label: 'pv', id: 'pvId' },
        { data: uData, label: 'uv', id: 'uvId' },
        { data: aData, label: 'uv', id: 'avId' },
        { data: bData, label: 'pv', id: 'bvId' },
        { data: cData, label: 'uv', id: 'cvId' },
        { data: dData, label: 'uv', id: 'dvId' },
      ]}
      xAxis={[{ data: xLabels, scaleType: 'band' }]}
    />
  );
}
