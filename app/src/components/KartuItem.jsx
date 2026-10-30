import { Link } from 'react-router-dom'
import InfoBadge from './InfoBadge.jsx'
import RegionBadge from './RegionBadge.jsx'

export default function KartuItem({ item }) {
  const { id, judul, kategori, daerahAsal, waktuMasak, tingkatKesulitan } = item
  return (
    <article className="kartu">
      <h3>
        <Link to={`/koleksi/${id}`}>{judul}</Link>
      </h3>
      <p>
        {kategori} · {daerahAsal}
      </p>
      <p>
        <RegionBadge region={daerahAsal} />
        <InfoBadge teks={`${waktuMasak} menit`} />
        <InfoBadge teks={tingkatKesulitan} />
      </p>
    </article>
  )
}