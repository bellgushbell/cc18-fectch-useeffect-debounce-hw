export default function ListData(props) {

    const {item} = props
  return (
    <li>{item.title} | {item.category} | {item.price}</li>
  )
}