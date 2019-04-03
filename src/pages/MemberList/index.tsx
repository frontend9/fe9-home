import * as React from 'react';
import { useEffect, useRef } from 'react';
import 'echarts/lib/chart/tree';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import * as echarts from 'echarts/lib/echarts';
import classes from './index.module.scss';
import membersTree from '../../members';

const MemberList: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>((undefined as any) as HTMLDivElement);
  useEffect(() => {
    const myChart = echarts.init(chartRef.current);

    myChart.setOption({
      tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove',
        formatter: '{c0}',
      },
      series: [
        {
          type: 'tree',
          name: 'tree1',
          data: [membersTree],
          top: '5%',
          left: '7%',
          bottom: '2%',
          right: '7%',

          symbol: 'roundRect',
          symbolSize: 7,

          label: {
            normal: {
              position: 'right',
              verticalAlign: 'middle',
            },
          },

          initialTreeDepth: -1,
          expandAndCollapse: true,

          animationDuration: 550,
          animationDurationUpdate: 750,
        },
      ],
    });
    myChart.on('click', (params: any) => {
      window.open(params.data.url);
    });
  }, []);

  return (
    <>
      <div ref={chartRef} className={classes.memberTree} />
    </>
  );
};

export default MemberList;
