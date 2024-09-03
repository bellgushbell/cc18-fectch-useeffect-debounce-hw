import React from 'react'
import { useEffect,useState } from 'react'

export default function UserList(props) {
    const {setSelectUser} = props
    const [data,setData] = useState([])
    

  //1.fetch user จาก dummyjson.com มาแสดงใน ui โดยใช้ useeffect  

const fetchData = async () => {
const resp = await fetch('https://dummyjson.com/users')
const result = await resp.json()
console.log(result)
setData(result.users)
}


useEffect(()=>{
    fetchData()
},[])


const hdlUserClick = (id) =>{
setSelectUser(id)
}


  return (
    <div>
<ul className="menu bg-base-200 rounded-box w-56">
    {data.map(el=>
  <li><a onClick={()=>hdlUserClick(el.id)}>{el.firstName}</a></li>
      
    )}
      
</ul>
    </div>
    
  )
}
