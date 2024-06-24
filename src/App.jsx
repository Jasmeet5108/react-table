import React from 'react'
import { useTable, useSortBy } from 'react-table'

const data = [
  {
    id: 1,
    gender: "Male",
    salary: 30000
  },
  {
    id: 2,
    gender: "Female",
    salary: 120000
  },
  {
    id: 3,
    gender: "Robot",
    salary: 90000
  },
]

const columns = [
  {
    Header: "ID", // Shown on UI
    accessor: "id" // Unique identifier
  },
  {
    Header: "Gender",
    accessor: "gender"
  },
  {
    Header: "Salary",
    accessor: "salary"
  },
]

const App = () => {

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data // data defined above
  },
    useSortBy
  )

  return (
    <div className='container'>
      <table {...getTableProps()}>
        <thead>
          {
            headerGroups.map(hg => (
              <tr {...hg.getHeaderGroupProps()}>
                {
                  hg.headers.map(header => (
                    <th {...header.getHeaderProps(header.getSortByToggleProps())} >
                      {header.render("Header")}
                      {
                        header.isSorted && <span>{header.isSortedDesc ? " ⬇️" : " ⬆️"}</span>
                      }
                    </th>
                  ))
                }
              </tr>
            ))
          }
        </thead>

        <tbody {...getTableBodyProps()}>
          {rows.map(r => {
            prepareRow(r)

            return <tr {...r.getRowProps()}>
              {r.cells.map(cell => (
                <td {...cell.getCellProps()}>
                  {cell.render("Cell")}
                </td>
              ))}
            </tr>

          })}

        </tbody>
      </table>
    </div>
  )
}

export default App