import Link from 'next/link'
import Image from 'next/image'

export const Navbar = () => {
    return (
        <nav className='w-full'>
            <div className="flex justify-center h-24">
                <div className="flex justify-center w-5/12 items-center">
                    <Link href="/news">
                        <a className="bg-contain hover:bg-bar bg-no-repeat bg-center hover:text-white text-black p-14 text-xl font-bold">
                              ACTUALITÉS      
                        </a>
                    </Link>
                </div>
                <Link href="/">
                    <a className="transform hover:scale-125">
                    
                        <Image 
                            src="/logon.png"
                            width='100'
                            height='100'
                            className="h-full w-full"
                        /> 
                    

                    </a>
                </Link>
                <div className="flex justify-center w-5/12 items-center">
                    <Link href="/news">
                        <a className="bg-contain hover:bg-bar bg-no-repeat bg-center hover:text-white text-black p-14 text-xl font-bold">
                            CORONAVIRUS AU TOGO
                        </a>
                    </Link>
                </div>
            </div>
        </nav>
    )
}