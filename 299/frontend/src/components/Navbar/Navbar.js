import { Link } from "react-router-dom"
import CustomLink from './CustomLink'

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        KOBIGAAN
      </Link>
      <ul>
        <CustomLink to="/users">Profile</CustomLink>
      </ul>
    </nav>
  )
}