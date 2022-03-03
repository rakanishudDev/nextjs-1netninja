import Link from 'next/link'
import Image from 'next/image'


const Navbar = () => {
  return (
    <nav>
        <div className="logo">
            <Image alt="ninja logo" width={128} height={77} src="/logo.png" />
        </div>
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
        <Link href="/ninjas"><a>Ninjas</a></Link>
        
    </nav>
  )
}

export default Navbar