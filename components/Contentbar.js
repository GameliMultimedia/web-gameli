import Link from 'next/link'
import Image from 'next/image'


const playerClick = (e) => {
    javascript:void(window.open('/radioplayer', 'Gameli Media Player', 'width=960, height=540'))
}

export const Contentbar = () => {
    return (
        <header>
            <div class="mx-auto">
                <div class="grid grid-cols-2">
                    <div class="flex-shrink-0">
                        <div class="">
                            <h1 onClick={playerClick} class="bg-gray-900 bg-opacity-60 py-10 px-80">LISTEN LIVE!</h1>
                        </div>
                    </div>
                    <div class="flex-shrink-0">
                        <Image
                            src="/960x416.png"
                            width="960"
                            height="416"
                            className="cover"
                        />
                    </div>
                </div>
            </div>
        </header>
    )
}