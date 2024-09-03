import { useEffect, useState } from 'react'

import './index.css'
import Userlist from './Userlist'


function App() {
 console.log('App run..')
  const [count, setCount] = useState(0)
  const [fiveNum, setFiveNum] = useState(0)
  const [open, setOpen] = useState(false)

  useEffect(()=>{
    console.log('useEffect 01 App run..')
  }, [] ) //array เปล่าๆ รันหลังเรนเดอร์ รอบแรกรอบเดียว อย่าลืมใส่

  useEffect(()=>{
    console.log('useEffect 02 App run..')
  }) //renderใหม่ side effectนี้ ทำทุกรอบ ไม่นิยม

  useEffect(()=>{
    console.log('useEffect 03 App run..')
  },[fiveNum]) //รันเมื่อค่า ค่าใน [] เปลี่ยน


const hdlclick = () =>{
  if((count+1) % 5 === 0){
    setFiveNum(fiveNum+1)
  }
setCount(count+1)
}



  return (
    <div className="p-4 flex flex-col  gap-4 text-center">
       {console.log('App jsx run..')}
      <h1 className="text-3xl font-bold ">
     Count = {count},FiveNum = {fiveNum}
    </h1>
    <button className="p-2 bg-pink-300" onClick={hdlclick}>Add 1</button>
    <hr />
    <button className='p-3 bg-blue-300' onClick={()=>setOpen(prv=>!prv)}>Toggle User List</button>
   {open && <Userlist count={count}/>}


    </div>
  )
}

export default App
