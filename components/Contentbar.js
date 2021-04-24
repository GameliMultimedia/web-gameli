import Link from 'next/link'
import Image from 'next/image'


const playerClick = (e) => {
    javascript:void(window.open('/radioplayer', 'Gameli Media Player', 'width=960, height=580'))
}

export const Contentbar = () => {
    return (
        <header>
            <div className="flex h-104 max-w-full mx-auto">
                <a className="w-full relative cursor-pointer" onClick={playerClick}>
                    <Image 
                        src="/podcast.png" 
                        layout="fill" 
                        className="z-0 transition ease-in-out duration-700 transform hover:scale-105"
                        objectFit="cover"
                        objectPosition="center"
                    />
                    <div className="absolute px-36 inset-x-0 bottom-0 z-50 h-1/5 w-full bg-opacity-70 ">
                        <p className="text-3xl font-bold text-right text-white">PROFITEZ EN DIRECT!</p>
                    </div>
                </a>
            <Link href={`/`}>
                <a className="w-full relative">
                    <Image 
                        src="/Lomepic.jpg" 
                        layout="fill" 
                        className="z-0 transition ease-in-out duration-700 transform hover:scale-105"
                        objectFit="cover"
                        objectPosition="center"
                    />
                    <div className="absolute px-36 inset-x-0 bottom-0 z-10 h-1/5 w-full bg-opacity-70">
                        <p className="text-3xl font-bold text-left text-white">FAITES UN DON ET SOUTIEN !</p>
                    </div>
                </a>
            </Link>
            </div>
        </header>
    )
}