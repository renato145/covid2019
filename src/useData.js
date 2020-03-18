import { csv } from 'd3';
import { useState, useEffect } from 'react';

const url = 'https://covid.ourworldindata.org/data/full_data.csv';

export const useData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    csv(url).then(d => {
      d.forEach(o => o.date = new Date(o.date));
      setData({
        allData: d,
        locations: [...new Set(d.map(d => d.location))],
      });
    });
  }, []);

  return data;
};
