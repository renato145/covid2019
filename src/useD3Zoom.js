import { zoom, select, event, zoomIdentity } from 'd3';
import { useEffect, useState } from 'react';
import { clamp } from './utils';

export const useD3Zoom = ({ ref }) => {
  const [zoomProps, setZoomProps] = useState({ k: 1, x: 0, y: 0 });

  useEffect(() => {
    const zoomHandler = () => {
      // const {k, x, y} = event.transform;
      // setZoomProps({k, x: clamp(x, 0, 10), y: clamp(y, 0, 10)});
      setZoomProps(event.transform);
      // console.log(k,x,y);
      // console.log(event.transform);
    };

    const d3Zoom = zoom()
      // .translateExtent([[0,0],[100,100]])
      // .extent([ [0, 0], [10, 10], ])
      .scaleExtent([1, 3])
      // .translateExtent([ [0, 0], [10, 10] ])
      .on('zoom', zoomHandler);

    const svg = select(ref.current);

    svg.call(d3Zoom);
    svg.on('dblclick.zoom', () => {
      // setZoomProps({ k: 1, x: 0, y: 0 });
      d3Zoom.transform(svg, zoomIdentity);
      // d3Zoom.transform(svg, initialTrans);
      // camera.position.set(0, 0, defaultCameraZoom);
    });
  }, [ref]);

  return zoomProps;
};
