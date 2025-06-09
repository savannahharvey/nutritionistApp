// record page
import React, { useState } from 'react';

const RecordPage = () => {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(new Date(today.getFullYear(), today.getMonth(), 1));

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getDaysInMonth = (date) => {
    const start = new Date(date.getFullYear(), date.getMonth(), 1);
    const end = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const days = [];

    // Fill initial empty cells
    for (let i = 0; i < start.getDay(); i++) {
      days.push(null);
    }

    // Fill actual days
    for (let d = 1; d <= end.getDate(); d++) {
      days.push(new Date(date.getFullYear(), date.getMonth(), d));
    }

    return days;
  };

  const changeMonth = (offset) => {
    setCurrentDate(prev =>
      new Date(prev.getFullYear(), prev.getMonth() + offset, 1)
    );
  };

  const days = getDaysInMonth(currentDate);

  return (
    <div className="calendar">
      <div className="header">
        <button onClick={() => changeMonth(-1)}>&lt;</button>
        <h2>{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
        <button onClick={() => changeMonth(1)}>&gt;</button>
      </div>
      <div className="grid header-row">
        {daysOfWeek.map(day => <div key={day} className="day-header">{day}</div>)}
      </div>
      <div className="grid days">
        {days.map((date, idx) => (
          <div key={idx} className="day-cell">
            {date ? date.getDate() : ''}
            {date ? <a href="/recordDay" class="addMeal">Add Meal</a> : ''}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecordPage;
