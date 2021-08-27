import Link from 'next/link'
import { GoMarkGithub } from 'react-icons/go'
import { FaLinkedinIn } from 'react-icons/fa'

export default function Header() {
  return (
    <header>
      <div className="container">
        <Link href="/">Jared&apos;s Space</Link>
        <a href="https://github.com/yairdyule"><GoMarkGithub className="react-icons" /></a>
        <a href="https://www.linkedin.com/in/jared-jewell-542a181b9/"><FaLinkedinIn className="react-icons" /></a>

      </div>
    </header>
  )
}
