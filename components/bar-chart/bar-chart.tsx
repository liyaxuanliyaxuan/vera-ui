import './style';

import * as d3 from 'd3';

import React, { useEffect, useRef } from 'react';

import { Props } from './interface';
import cn from 'classnames';
import t from 'prop-types';

const BarChart: React.FC<Props> = ({ children, style, className, ...rest }) => {
  const classNames = cn({});
  const canvasRef = useRef(null);
  const data = [2, 4, 2, 6, 8];
  const canvasHeight = 400;
  const canvasWidth = 600;
  const scale = 20;
  const drawBarchart = data => {
    const svgCanvas = d3
      .select(canvasRef.current)
      .append('svg')
      .attr('width', 600)
      .attr('height', 400)
      .style('border', '1px solid black');
    svgCanvas
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('width', 40)
      .attr('height', datapoint => datapoint * 20)
      .attr('fill', 'orange')
      .attr('x', (datapoint, iteration) => iteration * 45)
      .attr('y', datapoint => canvasHeight - datapoint * scale);
  };
  useEffect(() => {
    drawBarchart(data);
    return () => {};
  }, []);

  return <div ref={canvasRef}></div>;
};

export default BarChart;
