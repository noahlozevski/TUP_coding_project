import React, { useState } from 'react'
import DateTable from './tables/DateTable'
import AddDateForm from './forms/AddDateForm'

const App = () => {
  // const initialFormState = { id: null, start_date: '', end_date: '' }
  const [dates, setDates] = useState([])

  const addDate = (date) => {
    date.id = dates.length + 1
    setDates([...dates, date])
  }

  const deleteDate = (id) => {
    setDates(dates.filter((date) => date.id !== id))
  }
    
  return (
    <div className="container">
      <div className="header">
        <h1 className="my-3 title">Date Range Selector</h1>
        <div className="subtitle-container">
          <div className="subtitle">Created by Noah Lozevski → </div>
          <div className="website-link hvr-underline-from-center">
            <a href="https://noah.lozev.ski" target="_blank" rel="noreferrer">website</a>
          </div>
        </div>
      </div>
      <div className="row date-form">
        <div className="col">
          <h3 className="my-2">Add a Date Range</h3>
          <AddDateForm addDate={addDate} />
        </div>
        <div className="col">
          <h3 className="my-2">View Range List</h3>
          <DateTable dates={dates} deleteDate={deleteDate} />
        </div>
      </div>
    </div>
  )
}

export default App
