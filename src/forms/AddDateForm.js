import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const AddDateForm = (props) => {
  const initialFormState = { id: null, start_date: '', end_date: '' }
  const [date, setDate] = useState(initialFormState)

  const setRangeDate = (name, value) => {
    setDate({ ...date, [name]: value })
  }
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        if (!date.start_date || !date.end_date) return
        props.addDate({ ...date })
      }}
    >
      <div className="row">
        <div className="form-group col-sm-6 d-flex">
          <label class="mr-1 font-weight-bold text-nowrap">Start Date</label>
          <DatePicker
            name="start_date"
            selected={date.start_date}
            onChange={date => setRangeDate('start_date', date)}
            selectsStart
            startDate={date.start_date}
            endDate={date.end_date}
          />
        </div>
        <div className="form-group col-sm-6 d-flex">
          <label class="mr-1 font-weight-bold text-nowrap">End Date</label>
          <DatePicker
            name="end_date"
            selected={date.end_date}
            onChange={date => setRangeDate('end_date', date)}
            selectsEnd
            startDate={date.start_date}
            endDate={date.end_date}
            minDate={date.start_date}
          />
        </div>
      </div>
      <button className="btn btn-primary mr-2">Add Date Range</button>
      <button
        type="button"
        className="btn btn-success"
        onClick={() => { setDate(initialFormState) }}
      >Clear</button>
    </form>
  )
}

export default AddDateForm