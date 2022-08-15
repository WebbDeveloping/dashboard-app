import React from 'react'
import {FaCalendarAlt} from 'react-icons/fa'

export default function CalendarFilter() {
  return (
    <div className='calendar-filter calendar-filter__top-search ml-auto'>
        <input className='calendar-filter__input w-100' placeholder='Last 30 days' type="text" />
        <div className="search-icon">
            <FaCalendarAlt size={15} />
        </div>
    </div>
  )
}