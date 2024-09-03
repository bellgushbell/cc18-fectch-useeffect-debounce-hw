
import { useEffect, useState } from 'react'
import ListData from './ListData'
import InputSearch from './InputSearch'


function App() {
const [data, setData] = useState([])
const [input, setInput] = useState("")
const [ searchData, setSearchData] = useState([])

  const fetchData = async () => {
    const resp = await fetch(`https://dummyjson.com/products?limit=30`)
    const result = await resp.json()
    setData(result.products)
  }

  const fetchSearch = async () => {
    const resp = await fetch(`https://dummyjson.com/products/search?q=${input}`)
    const result = await resp.json()
    setSearchData(result.products)
  }

  useEffect(()=>{
    fetchData()
  },[])

  useEffect(()=>{
    fetchSearch()
  },[input])

  const hdlChange = (e) =>{
    setInput(e.target.value)
  }

  console.log("searchData", searchData)
  
  return (
    <div className='p-8 space-y-4'>
    <InputSearch hdlChange={hdlChange} />
    <div className='bg-gray-200 rounded-[2rem] p-8'>
    <ul>
    { searchData.length > 0 ? searchData.map(el=> (
      <ListData key={el.id} item={el}/>
    )) : data .map(el=> (
      <ListData key={el.id} item={el}/>
    ))}
    </ul>
    </div>
    </div>
  )
}

export default App