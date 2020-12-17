import React from 'react'

const DateTable = (props) => (
  <table className="table table-striped">
    <thead className="thead-dark">
      <tr>
        <th>Start Date</th>
        <th>End Date</th>
        <th>Actions</th>
        </tr>
    </thead>
    <tbody>
      {props.dates.length > 0 ? (
        props.dates.map((date) => (
          <tr key={date.id}>
            <td>{date.start_date.toLocaleDateString()}</td>
            <td>{date.end_date.toLocaleDateString()}</td>
            <td>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => props.deleteDate(date.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ): (
        <tr>
          <td colSpan={3}>No result!</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default DateTable