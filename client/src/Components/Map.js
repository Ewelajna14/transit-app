import { MapContainer, TileLayer} from 'react-leaflet'
import ChangeView from './ChangeView'

function Map(){

    const location = [51.505, -0.09]

    return(
        <MapContainer center={location} zoom={12}>
        <ChangeView center={location} zoom={12} />     
         <TileLayer
         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
       </MapContainer>
    )
}

export default Map