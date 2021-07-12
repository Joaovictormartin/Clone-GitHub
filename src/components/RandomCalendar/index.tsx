import React from 'react';
import HeatMap from 'react-calendar-heatmap';
import { subYears, isBefore, isSameDay, addDays } from 'date-fns'

import { Container } from './styles';

type HeatmapValue = { date: Date; count: number};


const RandomCalendar: React.FC = () => {

  const startDate = subYears(new Date(), 1);
  const endDate = new Date();

  return (
    <Container>
      <div className="wrapper">
        <HeatMap 
          startDate={startDate}                   //Data inicial
          endDate={endDate}                       //Data final
          values={generateHeatmapValues(startDate,endDate)}          //commits
          gutterSize={3.5}                        //Tamanho dos quadrados
          classForValue={(item : HeatmapValue) => {
            let clampedCount = 0;

            if (item !== null) {
              clampedCount = Math.max(item.count, 0);
              clampedCount = Math.min(item.count, 4);
            }

            return `scale-${clampedCount}`
          }}                                        //Denifir as escala de contribuições
        />
      </div>

      <span>
        Random calendar (do not represent actual data)
      </span>
    </Container>
  );
}

const generateHeatmapValues = (startDate: Date, endDate: Date) => {
  const values: HeatmapValue[] = [];

  let currentDate = startDate;
  while (isBefore(currentDate, endDate) || isSameDay(currentDate, endDate)) {
    const count = Math.random() * 4;

    values.push({ date: currentDate, count: Math.round(count) });

    currentDate = addDays(currentDate, 1);
  }
  return values;
}

export default RandomCalendar;