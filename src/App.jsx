import { useEffect,useState } from "react"
import InputSearch from "./InputSearch"
import ListData from "./ListData"

function App() {

const [data,setData] = useState([])
const [input,setInput] = useState("")
const [searchData,setSearchData] = useState([])

const [showList,setShowList] = useState(false)

const [searchDebounce,setSearchDebounce] = useState([])
const fetchData = async () =>{
  const resp = await fetch('https://dummyjson.com/products')
  const result = await resp.json()
  setData(result.products)

}

useEffect(()=>{
fetchData()
},[])

const fetSearchData = async () =>{
const resp = await fetch(`https://dummyjson.com/products/search?q=${input}`)
const result = await resp.json()
setSearchData(result.products)
}
useEffect(()=>{
fetSearchData()
},[searchDebounce])
 



  const hdlChange=(e)=>{
    setInput(e.target.value)
    // console.log(e.target.value)
    showListDisplay()
    // console.log(input.length)
  }


  const showListDisplay = () =>{
    if(input.length >= 0 )
    
      setShowList(true)
    else{
       setShowList(false)
    }
  } 


  useEffect(() => {
    // console.log('useEffect start...')
    let sto = setTimeout(() => {
      setSearchDebounce(input)
    }, 2000)
    return () => {
      // console.log('useEffect end...')
      clearTimeout(sto)
    }
  }, [input])

  return (
    <div className='p-8 space-y-4'>
    <h1> Product Search</h1>
     <InputSearch hdlChange={hdlChange}/>

   {showList && <ListData searchData={searchData}/>}
</div>
  )
}

export default App