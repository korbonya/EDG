import React from 'react';
import { divIcon} from 'leaflet';
import L from 'leaflet';
import { renderToStaticMarkup } from 'react-dom/server';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faNetworkWired } from '@fortawesome/free-solid-svg-icons'
import './style.css';

export const customMarkerIcon = (color, icon) => {

const bgStyle ={
  backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='map-marker' class='svg-inline--fa fa-map-marker fa-w-12' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3e%3cpath fill='%23`+color?.slice(1)+`' d='M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0z'%3e%3c/path%3e%3c/svg%3e")`,
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border:'none',
  width: '100%',
  height: '100%'
}
const iconMarkup = renderToStaticMarkup(
  <div style={bgStyle} >
      <FontAwesomeIcon className='text-white mb-2' icon={faNetworkWired} />
  </div>
);

return divIcon({
  html: iconMarkup,
  className:"custom-icon",
  iconSize: L.point(40, 40, true),
});

}

export const customMarkerIcon2 = (color, icon) => {
    
const bgStyle ={
    backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='map-marker' class='svg-inline--fa fa-map-marker fa-w-12' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3e%3cpath fill='%23`+color?.slice(1)+`' d='M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0z'%3e%3c/path%3e%3c/svg%3e")`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border:'none',
    width: '100%',
    height: '100%'
  }
  const iconMarkup = renderToStaticMarkup(
    <div style={bgStyle} >
        <FontAwesomeIcon className='text-white mb-2' icon={faNetworkWired} />
    </div>
  );
  
  return divIcon({
    html: iconMarkup,
    className:"custom-icon",
    iconSize: L.point(40, 40, true),
  });
}

export const customMarkerIcon3 = (color, icon) => {
    
const bgStyle ={
    backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='map-marker' class='svg-inline--fa fa-map-marker fa-w-12' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3e%3cpath fill='%23`+color?.slice(1)+`' d='M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0z'%3e%3c/path%3e%3c/svg%3e")`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border:'none',
    width: '100%',
    height: '100%'
  }
  const iconMarkup = renderToStaticMarkup(
    <div style={bgStyle} >
        <FontAwesomeIcon className='text-white mb-2' icon={faNetworkWired} />
    </div>
  );
  
  return divIcon({
    html: iconMarkup,
    className:"custom-icon",
    iconSize: L.point(40, 40, true),
  });
}  

