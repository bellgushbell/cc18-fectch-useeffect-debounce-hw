import { useState } from 'react';


import InfoBox from "./InfoBox";
import UserList from "./UserList";


function App(){

  const [open,setOpen] = useState(false)
  const [selectUser,setSelectUser] = useState(0)








  return (
    <div className="flex flex-col max-w-screen-lg max-auto bg-pink-100 gap-4 bg-blue-200">
    
     <UserList setSelectUser={setSelectUser}/>
     <hr/>
     <button className="btn btn-outline btn-info"
      onClick={()=>setOpen(prv=>!prv)}>Info Box</button>
     {open && <InfoBox selectUser={selectUser}/> }

    </div>
  )
}

export default App
