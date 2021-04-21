import Image from 'next/image'

export const Player = () => {

    var oAudio = document.getElementById('radio')

    const playClick = (e) => {
        if(window.HTMLAudioElement) {
            
            if(oAudio.paused){
                oAudio.play();
            } else {
                oAudio.pause();
            }
            
        }
    }
    
    return (
        <div class='w-5/6'>
            <div className="flex justify-between">
                <div className="h-7 relative">
                    { oAudio.paused ? 
                        <Image
                            src="/icons/play-fill.svg" 
                            width="30"
                            height="30"
                            onClick={playClick}                        
                        /> 
                        :
                        <Image
                            src="/icons/pause-fill.svg" 
                            width="30"
                            height="30"
                            onClick={playClick}                        
                        /> 

                    }

                </div>
                <div className="h-7 relative">
                    <Image
                        src="/icons/settings-2-fill.svg" 
                        width="30"
                        height="30"                       
                    />
                </div>                
            </div>
            
            <audio id='radio' autoplay='autoplay'>
                <source src='https://usa1.fastcast4u.com/proxy/gamelimu?mp=/2' type='audio/ogg'></source>
            </audio>
        </div>
    )
}