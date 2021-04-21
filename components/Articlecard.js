import Image from 'next/image'

export const Articlecard = () => {
    return (
            <div className="w-1/3 h-96 mt-10 mx-6">
                <div className="h-2/5 w-full relative">
                    <Image
                        src="/stockimage.png"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                    />
                </div>
                <div className="h-1/5 w-full">
                    <p className="text-xl text-extrabold">THIS IS A FILLER TITLE, THIS TITLE MEANS ABSOLUTELY NOTHING.</p>
                </div>
                <div className="h-2/5 w-full mt-2">
                    <p>
                        This is a filler text, the contents of this piece of text mean absoluetly and have nothing to do with anything. This is a filler text, the contents of this piece of text mean absoluetly and have nothing to do with anything.  
                    </p>
                </div>

            </div>
        )
    }
    