import Image from 'next/image'

export const Articlecard = ({src, title, content}) => {
    return (
            <div className="mt-4 mx-6">
                <div className="h-40 w-full relative">
                    <Image
                        src={src}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                    />
                </div>
                <div className="w-full">
                    <p className="text-xl">{title}</p>
                </div>
                <div className="w-full">
                    <p className="text-md">{content}</p>
                </div>

            </div>
        )
    }
    