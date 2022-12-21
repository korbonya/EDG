import { Fragment } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-cluster'
import { posts, powerStations, tStations } from "../../features/Posts/data"
import { customMarkerIcon, customMarkerIcon2, customMarkerIcon3 } from '../../components/Icon'


export default function index() {
    const center = [10.854993, -10.848677];
    console.log('posts:;', posts)
    return (
        <div>
            <div id='map' className="h-64">
                <MapContainer center={center} zoom={7} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    <MarkerClusterGroup>
                        <>
                            {posts.map(post => (
                                <Fragment key={post.id}>
                                    <Marker position={[post.location.latitude, post.location.longitude]}
                                        icon={customMarkerIcon(
                                            '#ee1100'
                                        )}
                                    >
                                        <Popup>
                                            <div className="flex flex-col">
                                                <h4 className="text-sm font-semibold">{post.name}</h4>
                                                <p className="text-xs text-gray-500">{post.voltageLevel}</p>
                                                <h1 className="text-xs text-gray-500">{post.location.address}</h1>
                                            </div>
                                        </Popup>
                                    </Marker>
                                </Fragment>
                            ))
                            }
                            {
                                powerStations.map(post => (
                                    <Fragment key={post.id}>
                                        <Marker position={[post.geoCoords.lat, post.geoCoords.lng]}
                                            icon={customMarkerIcon2(
                                                '#ee1')}
                                        >
                                            <Popup>
                                                <div className="flex flex-col">
                                                    <h4 className="text-sm font-semibold">{post.name}</h4>
                                                    <p className="text-xs text-gray-500">{post.type}</p>
                                                    <h1 className="text-xs text-gray-500">{post.address}</h1>
                                                </div>
                                            </Popup>
                                        </Marker>
                                    </Fragment>
                                ))
                            }
                            {/* {
                                tStations.map(post => (
                                    <Fragment key={post.id}>
                                        <Marker position={[post.geoCoords.lat, post.geoCoords.lng]}
                                            icon={customMarkerIcon3(
                                                '#a14ff1',
                                            )}
                                        >
                                            <Popup>
                                                <div className="flex flex-col">
                                                    <h4 className="text-sm font-semibold">{post.number_register}</h4>
                                                    <p className="text-xs text-gray-500">{post.input}</p>
                                                    <h1 className="text-xs text-gray-500">{post.output}</h1>
                                                </div>
                                            </Popup>
                                        </Marker>
                                    </Fragment>
                                ))
                            } */}

                        </>

                    </MarkerClusterGroup>

                </MapContainer>
            </div>
        </div>
    )
}
