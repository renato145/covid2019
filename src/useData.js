import { csv, nest } from 'd3';
import { useState, useEffect } from 'react';

const URLS = [
  [
    'Confirmed',
    'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv',
  ],
  [
    'Deaths',
    'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv',
  ],
  // [
  //   'Recovered',
  //   'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Recovered.csv',
  // ],
];
const ID_COLS = ['Province/State', 'Country/Region', 'Lat', 'Long'];

const meltData = (data, name) => {
  let newData = [];
  data.forEach(row => {
    Object.keys(row)
      .filter(col => !ID_COLS.includes(col))
      .forEach(col => {
        if (row[col] === '') return;
        let newRow = {};
        ID_COLS.forEach(d => (newRow[d] = row[d]));
        newRow['date'] = col;
        newRow[name] = +row[col];
        newData.push(newRow);
      });
  });
  return newData;
};

export const useData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    Promise.all(URLS.map(d => csv(d[1]))).then(sourceData => {
      const data = sourceData.map((d, i) =>
        nest()
          .key(d => d['Country/Region'])
          .key(d => d['date'])
          .map(meltData(d, URLS[i][0]))
      );
      const locations = data[0].keys();
      let combinedData = [];
      locations.forEach(loc => {
        const allData = data.map(d => d[`$${loc}`]).filter(d => d);
        const dates = allData[0].keys();
        let idxConfirmed = -1;
        let idxDeaths = -1;
        dates.forEach(dd => {
          const values = allData.map(d => d[`$${dd}`]);
          let newData = {};
          ID_COLS.forEach(d => {
            const val = values[0][0][d];
            newData[d] = ['Lat', 'Long'].includes(d) ? +val : val;
          });
          values.forEach((groupValues, i) => {
            if (!groupValues) return;
            const name = URLS[i][0];
            newData[name] = groupValues
              .map(val => val[name])
              .reduce((acc, val) => val + acc);
          });
          if (newData['Confirmed'] > 0) {
            idxConfirmed++;
            newData['date'] = new Date(dd);
            newData['idxConfirmed'] = idxConfirmed;
            if (newData['Deaths'] > 0) {
              idxDeaths++;
              newData['idxDeaths'] = idxDeaths;
            }
            combinedData.push(newData);
          }
        });
      });
      const formatedData = nest()
        .key(d => d['Country/Region'])
        .sortValues((a, b) => a.date - b.date)
        .map(combinedData);
      setData(formatedData);
    });
  }, []);

  return data;
};
