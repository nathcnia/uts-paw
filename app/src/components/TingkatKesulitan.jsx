export default function TingkatKesulitan({ item }) {
  const { tingkatKesulitan } = item

  return (
    <span className="tingkat-kesulitan">
      {tingkatKesulitan}
    </span>
  )
}