export default function TingkatKesulitan({ item }) {
  const { tingkatKesulitan } = item
  return (
  <span className={`tingkat tingkat-${tingkatKesulitan}`}>{tingkatKesulitan}</span>
)
}