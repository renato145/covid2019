import { csv, nest, ascending } from 'd3';
import { useState, useEffect } from 'react';

export const useData = ({ url }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    csv(url, d => ({
      date: new Date(d.date),
      location: d.location,
      new_cases: +d.new_cases,
      new_deaths: +d.new_deaths,
      total_cases: +d.total_cases,
      total_deaths: +d.total_deaths,
    })).then(sourceData => {
      setData(
        nest()
          .key(d => d.location)
          .sortKeys(ascending)
          .sortValues((a, b) => a.date - b.date)
          .map(sourceData)
      );
    });
  }, [url]);

  return data;
};
