import {useState, useEffect} from 'react'

export default function InfoBox(props) {
 const {selectUser} = props
 const [user, setUser] = useState({}) //object คนเดียว

 const fetchUserId = async (id) => {
  const resp = await fetch(`https://dummyjson.com/users/${id}`)
  const result = await resp.json()
  setUser(result)
 }

 useEffect( ()=>{
  fetchUserId(selectUser)
 }, [ selectUser ] )

 if(selectUser===0) { //ถ้าเท่ากับ0 ให้ขึ้นโหลด ตอนแรก 
  return (
   <h1>Loading...</h1>
  )
 }


 return (
  <div className="card bg-base-100 w-96 shadow-xl">
   <figure>
    <img
     src={user.image}
     alt={user.lastName} />
   </figure>
   <div className="card-body">
    <h2 className="card-title">{user.firstName}, {user.lastName}</h2>
    <p>{user.university}</p>
   </div>
  </div>
 )
}