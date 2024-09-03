import React from 'react'

export default function ListData(props) {
  const {searchData} = props
      
  console.log(searchData)
  return (
    <div>
      <ul>
      {searchData.map(el=>(
        <li key={el.id}>{el.title} | {el.category} | ${el.price}</li>
      ))
      }
      </ul>
    </div>
  )
}
