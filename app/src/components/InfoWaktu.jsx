export default function InfoWaktu({ item }) {

  const { waktuMasak } = item
  return (
  <small className="info-waktu">{waktuMasak} menit</small>
  )
}