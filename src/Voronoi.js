import React, { useMemo } from 'react';
import { Delaunay } from 'd3-delaunay';

export const Voronoi = ({
  data,
  xScale,
  xValues,
  yScale,
  yValues,
  width,
  height,
  marginLeft,
  marginRight,
  marginBottom,
  marginTop,
  onMouseEnter = () => {},
  onMouseLeave = () => {},
}) => {
  const formatedData = useMemo(() => {
    if (!data) return;

    return data.map(d =>
      d.map(o => {
        const x = xScale(xValues(o));
        const y = yScale(yValues(o));
        return { x, y };
      })
    );
  }, [data, xScale, xValues, yScale, yValues]);

  const box = useMemo(
    () => [
      0,
      0,
      width - marginRight - marginLeft + 100,
      height - marginBottom - marginTop + 100,
    ],
    [height, marginBottom, marginLeft, marginRight, marginTop, width]
  );

  const voronoiData = useMemo(() => {
    if (box[2] - box[0] <= 0 || box[3] - box[1] <= 0) return;
    const points = formatedData
      .map((d, loc) => d.map((o, day) => Object.assign({ loc, day }, o)))
      .flat();
    return {
      points,
      voronoi: Delaunay.from(
        points.map(d => [d.x + box[0], d.y + box[1]])
      ).voronoi(box),
    };
  }, [formatedData, box]);

  const paths = useMemo(() => {
    if (!voronoiData) return;
    const { points, voronoi } = voronoiData;
    return points.map(({ x, y, loc, day }, i) => (
      <path
        key={i}
        d={voronoi.renderCell(i)}
        // stroke="black"
        // strokeWidth={2}
        // fill="red"
        // opacity={0.1}
        opacity={0}
        onMouseEnter={() => onMouseEnter(loc, day, x, y)}
        onTouchStart={() => onMouseEnter(loc, day, x, y)}
        onTouchEnd={() => onMouseLeave(loc, day, x, y)}
        onMouseLeave={() => onMouseLeave(loc, day, x, y)}
      />
    ));
  }, [voronoiData, onMouseEnter, onMouseLeave]);

  return <g> {paths} </g>;
};
