

const playClick = (e) => {
    if(window.HTMLAudioElement) {
        var oAudio = document.getElementById('radio')
        if(oAudio.paused){
            oAudio.play();
        } else {
            oAudio.pause();
        }
        
    }
}

export const Radioplayer = () => {

    return (
        <section>
            <a onClick={playClick}>Play</a>
            <audio id='radio' autoplay='autoplay'>
                <source src='https://usa1.fastcast4u.com/proxy/gamelimu?mp=/2' type='audio/ogg'></source>
            </audio>
        </section>
    )
}