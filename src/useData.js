import { csv, nest, ascending } from 'd3';
import { useState, useEffect } from 'react';

export const useData = ({ url }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    csv(url).then(sourceData => {
      sourceData.forEach(d => (d.date = new Date(d.date)));
      setData(
        nest()
          .key(d => d.location)
          .sortKeys(ascending)
          .sortValues((a,b) => a.date - b.date)
          .map(sourceData)
      );
    });
  }, [url]);

  return data;
};
