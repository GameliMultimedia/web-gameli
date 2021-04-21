import { Contentplayer } from '../components/Contentplayer'
import { Adbar } from '../components/Adbar'
import { Player } from '../components/player'
import { Stationselector } from '../components/Stationselector'

export default function Radioplayer() {
    return (
  <div>
      <div className="flex">
        <Contentplayer/>
        <Adbar adclass="w-1/6 relative"/>
      </div>
      <div className="flex">
        <Player/>
        <Stationselector/>
      </div>
  </div>
)
    }
