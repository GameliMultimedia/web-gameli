import Image from 'next/image'

export const Stationselector = () => {
    return (
        <div className="w-1/6 h-7 relative">
            <Image 
                src="/stockimage.png" 
                layout="fill" 
                className="z-0"
                objectFit="cover"
                objectPosition="center"
            />
        </div>
    )
}