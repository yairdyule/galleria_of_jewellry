import Link from 'next/link'
export default function Header() {
  return (
    <header>
      <div className="container">
        <Link href="/">Dev Blog</Link>
      </div>
    </header>
  )
}
