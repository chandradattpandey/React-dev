interface Props {
  count: number;
}
const nav = ({count}:Props) => {
  return (
    <div>Item Count : {count}</div>
  )
}

export default nav