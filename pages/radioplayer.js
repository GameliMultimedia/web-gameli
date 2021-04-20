import { Contentplayer } from "../components/Contentplayer";
import { Radioplayer } from "../components/Radioplayer";

const radioplayer = () => (
    <main>
        <secion class="flex w-auto">
            <Contentplayer />
        </secion>
       
        <Radioplayer />
    </main>
  )
  
  export default radioplayer