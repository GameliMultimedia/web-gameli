import Link from 'next/link'
import Image from 'next/image'


const playerClick = (e) => {
    javascript:void(window.open('/radioplayer', 'Gameli Media Player', 'width=960, height=540'))
}

export const Contentbar = () => {
    return (
        <header>
            <div className="flex max-w-full mx-auto">
                <div className="h-96 w-full relative">
                    <Image 
                        src="/stockimage.png" 
                        layout="fill" 
                        className="z-0"
                        objectFit="cover"
                        objectPosition="center"
                    />
                    <div className="absolute inset-x-0 bottom-0 z-50 bg-black h-2/5 w-full bg-opacity-70">
                        <p className="text-2xl text-center" onClick={playerClick}>LISTEN LIVE!</p>
                    </div>
                </div>
                <div className="h-96 w-full relative">
                    <Image 
                        src="/stockimage.png" 
                        layout="fill" 
                        className="z-0"
                        objectFit="cover"
                        objectPosition="center"
                    />
                    <div className="absolute inset-x-0 bottom-0 z-10 bg-black h-2/5 w-full bg-opacity-70">
                        <p className="text-2xl text-center">DONATE!</p>
                    </div>
                </div>
            </div>
        </header>
    )
}