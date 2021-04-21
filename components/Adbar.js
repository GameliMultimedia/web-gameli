import Image from 'next/image'

export const Adbar = ({ adclass }) => {
    return (
        <div className={ adclass }>
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