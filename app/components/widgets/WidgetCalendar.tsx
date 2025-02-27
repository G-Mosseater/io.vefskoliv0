"use client";

import { useState } from "react";
import Calendar from "react-calendar";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameMonth,
  isSameDay,
} from "date-fns";
import { CalendarComponent } from "./widgetCalendarStyle";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

function WidgetCalendar() {
  const [value, onChange] = useState<Value>(new Date());

  //   const [currentDate, setCurrentDate] = useState(new Date());

  //   const monthStart = startOfMonth(currentDate);
  //   const monthEnd = endOfMonth(monthStart);
  //   const startDate = startOfWeek(monthStart);
  //   const endDate = endOfWeek(monthEnd);

  //   const dateFormat = "d";
  //   const days = [];

  //   let day = startDate;

  //   while (day <= endDate) {
  //     days.push(
  //       <Day
  //         key={day.toString()}
  //         isToday={isSameDay(day, new Date())}
  //         isCurrentMonth={isSameMonth(day, monthStart)}
  //       >
  //         {format(day, dateFormat)}
  //       </Day>
  //     );
  //     day = addDays(day, 1);
  //   }

  return (
    <div>
        <CalendarComponent onChange={onChange} value={value} locale="en-EN" />
        {/* <Header>Calendar</Header>
      <Month>{format(currentDate, "MMMM")}</Month>
      <WeekDays>
        {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map((day) => (
          <div key={day}>{day}</div>
        ))}
      </WeekDays>
      <Days>{days}</Days> */}
    </div>
  );
}

export default WidgetCalendar;
