import { Fragment } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap, MarkerClusterGroup } from 'react-leaflet'
import { posts } from "../../features/Posts/data"


export default function index() {
    const center = [10.854993, -10.848677];
    return (
        <div>
            <div id='map' className="h-64">
                <MapContainer center={center} zoom={7} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                     <MarkerClusterGroup
                        showCoverageOnHover={true}
                        spiderfyDistanceMultiplier={1}
                    >
                       {posts.map(post => (
                            <Marker key={post.id} position={[post.geoCoords.lat, post.geoCoords.lng]}>
                                <Popup>
                                    <div className="flex flex-col">
                                        <h4 className="text-sm font-semibold">{post.register_number}</h4>
                                        <p className="text-xs text-gray-500">{post.type}</p>
                                        <h1 className="text-xs text-gray-500">{post.address}</h1>
                                    </div>
                                </Popup>
                            </Marker>
                        ))
                       }
                    </MarkerClusterGroup>
                </MapContainer>
            </div>
        </div>
    )
}
