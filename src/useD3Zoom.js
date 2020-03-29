import { zoom, select, event, zoomIdentity } from 'd3';
import { useEffect, useState } from 'react';

export const useD3Zoom = ({ ref }) => {
  const [zoomProps, setZoomProps] = useState({ k: 1, x: 0, y: 0 });

  useEffect(() => {
    const zoomHandler = () => {
      setZoomProps(event.transform);
    };

    const d3Zoom = zoom()
      // .translateExtent([ [-100, -100], [1000, 500] ])
      .scaleExtent([1, 3])
      .on('zoom', zoomHandler);

    const svg = select(ref.current);

    svg.call(d3Zoom);
    svg.on('dblclick.zoom', () => {
      d3Zoom.transform(svg, zoomIdentity);
    });
  }, [ref]);

  return zoomProps;
};
