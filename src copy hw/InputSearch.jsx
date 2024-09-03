
export default function InputSearch({ hdlChange }) {
  return (
    <div>
        <input onChange={hdlChange} className="bg-gray-200 py-2 px-4 rounded-xl" type="text" />
    </div>
  )
}