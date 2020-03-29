import React, { useMemo } from 'react';
import { Delaunay } from 'd3-delaunay';

export const Voronoi = ({ data, box, onMouseEnter=() => {}, onMouseLeave= () => {} }) => {
  const paths = useMemo(() => {
    if (box[2] - box[0] <= 0 || box[3] - box[1] <= 0) return;
    const points = data
      .map((d, loc) => d.map((o, day) => Object.assign({ loc, day }, o)))
      .flat();
    const voronoi = Delaunay.from(
      points.map(d => [d.x + box[0], d.y + box[1]])
    ).voronoi(box);
    return points.map(({ x, y, loc, day }, i) => (
      <path
        key={i}
        d={voronoi.renderCell(i)}
        stroke="black"
        strokeWidth={2}
        fill="red"
        opacity={0.1}
        // opacity={0}
        onMouseEnter={() => onMouseEnter(loc, day, x, y)}
        onTouchStart={() => onMouseEnter(loc, day, x, y)}
        onTouchEnd={() => onMouseLeave(loc, day, x, y)}
        onMouseLeave={() => onMouseLeave(loc, day, x, y)}
      />
    ));
  }, [box, data, onMouseEnter, onMouseLeave]);

  return <g> {paths} </g>;
};
