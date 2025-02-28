import React, { useState, useEffect, useRef } from 'react';
import dayjs from 'dayjs';
import { BsChevronRight, BsChevronLeft, BsChevronDoubleRight, BsChevronDoubleLeft } from "react-icons/bs";

const Calander = ({ onClose, visible, onDateSelect, display }) => {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);
  const calendarRef = useRef(null); // Reference to the calendar element

  const handleDateSelect = (date) => {
    onDateSelect(date);
    if (display) {
      display(date);
    }
    onClose(); // Close the calendar after selecting a date
  };

  const cn = (...classes) => classes.filter(Boolean).join(" ");

  const generateDate = (month = dayjs().month(), year = dayjs().year()) => {
    const firstDateOfMonth = dayjs().year(year).month(month).startOf("month");
    const lastDateOfMonth = dayjs().year(year).month(month).endOf("month");
    const arrayOfDate = [];

    // create prefix date
    for (let i = 0; i < firstDateOfMonth.day(); i++) {
      const date = firstDateOfMonth.day(i);
      arrayOfDate.push({
        currentMonth: false,
        date: date.format("YYYY-MM-DD"),
      });
    }

    // generate current date
    for (let i = firstDateOfMonth.date(); i <= lastDateOfMonth.date(); i++) {
      arrayOfDate.push({
        currentMonth: true,
        date: firstDateOfMonth.date(i).format("YYYY-MM-DD"),
        today: firstDateOfMonth.date(i).toDate().toDateString() === currentDate.toDate().toDateString(),
      });
    }

    const remaining = 42 - arrayOfDate.length;
    for (let i = lastDateOfMonth.date() + 1; i <= lastDateOfMonth.date() + remaining; i++) {
      arrayOfDate.push({
        currentMonth: false,
        date: lastDateOfMonth.date(i).format("YYYY-MM-DD"),
      });
    }

    return arrayOfDate;
  };

  // Detect clicks outside the calendar and close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (visible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [visible, onClose]);

  if (!visible) return null;

  return (
    <div ref={calendarRef} className="mb-5 mx-auto items-center sm:flex-row flex-col z-50 left-3 -top-80 absolute">
      <div className="lg:w-[85%] md:w-[90%] sm:w-[80%]  w-[75%] h-80 rounded-t-3xl z-50 bg-[#F5F5F5]">
        <div className="flex justify-center items-center">
          <div className="flex items-center justify-evenly w-[100%] text-[#000746] mt-5">
            <BsChevronLeft color='#724d63' className='cursor-pointer' onClick={() => { setToday(today.month(today.month() - 1)); }} />
            <BsChevronDoubleLeft color='#724d63' className='cursor-pointer' onClick={() => { setToday(today.year(today.year() - 1)); }} />
            <h1 className="select-none text-sm sm:text-base">
              {months[today.month()]}, {today.year()}
            </h1>
            <BsChevronDoubleRight color='#724d63' className='cursor-pointer' onClick={() => { setToday(today.year(today.year() + 1)); }} />
            <BsChevronRight color='#724d63' className='cursor-pointer' onClick={() => { setToday(today.month(today.month() + 1)); }} />
          </div>
        </div>
        <div className="grid grid-cols-7">
          {days.map((day, index) => {
            return (
              <h1 key={index} className="text-sm text-center h-14 w-14 grid place-content-center text-[#A9A7A7] select-none">
                {day}
              </h1>
            );
          })}
        </div>
        <div className="grid grid-cols-7">
          {generateDate(today.month(), today.year()).map(({ date, currentMonth, today }, index) => {
            return (
              <div key={index} className="p-2 text-center h-9 grid place-content-center text-sm">
                <h1
                  className={cn(
                    currentMonth ? "" : "invisible",
                    today ? "text-[#94597d]" : "",
                    selectDate.toDate().toDateString() === date
                      ? "shadow-lg border-2 border-[#724d63] text-[#724d63]"
                      : "",
                    "h-10 w-10 grid place-content-center hover:text-[#724d63] text-[#000746] rounded-lg transition-all cursor-pointer select-none text-lg"
                  )}
                  onClick={() => {
                    handleDateSelect(date);
                  }}
                >
                  {dayjs(date).date()}
                </h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Calander;
