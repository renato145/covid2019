import React, { useMemo } from 'react';
import moment from 'moment';
import { format } from 'd3';
import './ChartToolTip.css';

const numberFormat = format(',');

export const ChartToolTip = ({ data, x, y, color }) => {
  const text = useMemo(() => {
    if (!data) return;
    return {
      date: moment(data['date']).format('Do MMM'),
      country: data['Country/Region'],
      confirmed: numberFormat(data['Confirmed']),
      deaths: numberFormat(data['Deaths']),
    };
  }, [data]);

  return (
    <div
      className="wrapper"
      style={{
        transform: `translate(calc(-50% + ${x}px),${y + 30}px)`,
        backgroundColor: color,
        opacity: text ? 0.85 : 0,
      }}
    >
      <div className="chart-tooltip">
        { data && (
          <>
            <b>{text.country} - {text.date}</b><br/>
            <span>Confirmed: {text.confirmed}</span><br/>
            <span>Deaths: {text.deaths}</span>
          </>
        )}
      </div>
    </div>
  );
};
