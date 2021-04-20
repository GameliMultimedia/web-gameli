import Link from 'next/link'

export const Navbar = () => {
    return (
        <nav>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                                <Link href="/"><h1>Radio Gameli</h1></Link>
                    </div>
                    <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                        <Link href="/news"><a className="px-2">News</a></Link>
                        <Link href="/about"><a className="px-2">About</a></Link>
                        <Link href="/info"><a className="px-2">Info</a></Link>
                        <Link href="/contact"><a className="px-2">Contact</a></Link>
                    </div>
                </div>
                </div>
            </div>
        </nav>
    )
}