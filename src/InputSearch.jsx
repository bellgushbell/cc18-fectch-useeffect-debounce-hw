import React from 'react'

export default function InputSearch(props) {
  const {hdlChange} = props




  return (
    <div>
      <input type="text" placeholder='Insert Name' onChange={hdlChange}/>
    </div>
  )
}
