// StrigTags function
function stripTags(value) {
  var strippedValue = value.replace(/(<([^>]+)>)/ig,"");

  return strippedValue;
}

var map;

// GenerateMap function

function generateMap(lngLat, addressInfos, mapID, addressTitle ) {

  var pointLngLat = lngLat;
  var address = addressInfos && addressInfos.address ? addressInfos.address : undefined;
  var addressTitle = addressInfos && addressInfos.title ? addressInfos.title : null;
  var addressURI = addressInfos && addressInfos.uri ? addressInfos.uri : null;
  var startZoom = 16;
  var center = pointLngLat;
  var maxBounds = [[-74.3965936,45.319517],[-73.442801,45.751651]];
  var marker = new mapboxgl.Marker(defaultMarker());
  var mapboxStyle = {
    version: 8,
    name: 'basic',
    sources: {
      'vector-tile-api': {
        type: 'vector',
        tiles: [`https://api.montreal.ca/api/it-platforms/geomatic/vector-tiles/maps/v1/basemap/{z}/{x}/{y}.pbf`]
      },
    },
    glyphs: '../../glyphs/{fontstack}/{range}.pbf',
    layers: [
      {
        id: 'background',
        type: 'background',
        paint: {
          'background-color': '#e7e5e0'
        }
      },
  
      {
        id: 'cities',
        type: 'fill',
        source: 'vector-tile-api',
        'source-layer': 'cities',
        filter: ['==', '$type', 'Polygon'],
        paint: {
          'fill-color': '#E6E4E0'
        }
      },
  
      {
        id: 'water',
        type: 'fill',
        source: 'vector-tile-api',
        'source-layer': 'water',
        filter: ['==', '$type', 'Polygon'],
        paint: {
          'fill-color': '#75cff0'
        }
      },
  
      {
        id: 'large_parks',
        type: 'fill',
        source: 'vector-tile-api',
        'source-layer': 'parks',
        filter: ['>=', 'SHAPE_AREA', 150000],
        paint: {
          'fill-color': '#B6E59E'
        }
      },
      {
        id: 'small_parks',
        type: 'fill',
        source: 'vector-tile-api',
        'source-layer': 'parks',
        filter: ['<', 'SHAPE_AREA', 150000],
        minzoom: 12,
        paint: {
          'fill-color': '#B6E59E'
        }
      },
      {
        id: 'lakes',
        type: 'fill',
        source: 'vector-tile-api',
        'source-layer': 'lakes',
        filter: ['==', '$type', 'Polygon'],
        paint: {
          'fill-color': '#75cff0'
        }
      },
      {
        id: 'streams',
        type: 'fill',
        source: 'vector-tile-api',
        'source-layer': 'streams',
        filter: ['==', '$type', 'Polygon'],
        paint: {
          'fill-color': '#75cff0'
        }
      },
      {
        id: 'canals',
        type: 'fill',
        source: 'vector-tile-api',
        'source-layer': 'canals',
        filter: ['==', '$type', 'Polygon'],
        paint: {
          'fill-color': '#75cff0'
        }
      },
      {
        id: 'roads_0',
        type: 'line',
        source: 'vector-tile-api',
        'source-layer': 'road-sections',
        minzoom: 14,
        layout: {
          'line-cap': 'round',
          'line-join': 'round'
        },
        paint: {
          'line-color': '#D6D9E6',
          'line-width': {
            base: 1.4,
            stops: [[10, 1.45], [14, 6], [18, 38]]
          }
        }
      },
      {
        id: 'arterial_network_0',
        type: 'line',
        source: 'vector-tile-api',
        'source-layer': 'road-sections',
        filter: ['any', ['==', 'classification', 6], ['==', 'classification', 7]],
        layout: {
          'line-cap': 'round',
          'line-join': 'round'
        },
        paint: {
          'line-color': '#DBDDE3',
          'line-width': {
            base: 1.2,
            stops: [[12, 1.45], [14, 5], [18, 38]]
          }
        }
      },
      {
        id: 'roads',
        type: 'line',
        source: 'vector-tile-api',
        'source-layer': 'road-sections',
        minzoom: 11,
        layout: {
          'line-cap': 'round',
          'line-join': 'round'
        },
        paint: {
          'line-color': '#F8F8F8',
          'line-width': {
            base: 1.55,
            stops: [[12, 1.35], [14, 5], [18, 35]]
          }
        }
      },
      {
        id: 'arterial network',
        type: 'line',
        source: 'vector-tile-api',
        'source-layer': 'road-sections',
        filter: ['any', ['==', 'classification', 6], ['==', 'classification', 7]],
        layout: {
          'line-cap': 'round',
          'line-join': 'round'
        },
        paint: {
          'line-color': '#F8F8F8',
          'line-width': {
            base: 1.4,
            stops: [[10, 1.25], [14, 3], [18, 35]]
          }
        }
      },
  
      {
        id: 'highways',
        type: 'line',
        source: 'vector-tile-api',
        'source-layer': 'road-sections',
        filter: ['==', 'classification', 8],
        layout: {
          'line-cap': 'round',
          'line-join': 'round'
        },
        paint: {
          'line-color': '#FFA35C',
          'line-width': {
            base: 1.4,
            stops: [[6, 0.5], [20, 30]]
          }
        }
      },
      {
        id: 'buildings',
        type: 'fill',
        source: 'vector-tile-api',
        'source-layer': 'buildings',
        minzoom: 13,
        paint: {
          'fill-color': ['interpolate', ['linear'], ['zoom'], 15, '#DCDCDC', 16, '#D3D3D3', 17, '#CECECE', 18, '#C3C3C3']
        }
      },
      
      {
        id: 'highways_labels',
        type: 'symbol',
        source: 'vector-tile-api',
        'source-layer': 'road-sections',
        filter: ['all', ['==', 'classification', 8], ['!=', 'name', 'voie Non-nommée'], ['!=', 'name', 'voie Privée']],
        layout: {
          'text-font': ['Open Sans SemiBold'],
          'text-transform': 'uppercase',
          'text-field': '{name}',
          'text-size': 10,
          'symbol-placement': 'line',
          'text-letter-spacing': 0.1
        },
        paint: {
          'text-color': '#666',
          'text-halo-color': 'rgba(255,255,255,0.75)',
          'text-halo-width': 2
        }
      },
      {
        id: 'roads_labels',
        type: 'symbol',
        source: 'vector-tile-api',
        'source-layer': 'road-sections',
        filter: ['all', ['!=', 'classification', 8], ['!=', 'name', 'voie Non-nommée'], ['!=', 'name', 'voie Privée']],
        minzoom: 14,
        layout: {
          'text-font': ['Open Sans Regular'],
          'text-field': '{name}',
          'text-size': 11,
          'symbol-placement': 'line',
          'text-letter-spacing': 0.1,
          'text-max-angle': 70
        },
        paint: {
          'text-color': '#787878',
          'text-halo-color': '#fff',
          'text-halo-width': 1,
          'text-halo-blur': 0.5
        }
      },
      {
        id: 'large_parks_labels',
        type: 'symbol',
        source: 'vector-tile-api',
        'source-layer': 'parks',
        filter: ['>=', 'SHAPE_AREA', 150000],
        minzoom: 12,
        layout: {
          'text-anchor': 'center',
          'text-font': ['Open Sans Regular'],
          'text-field': '{NOM_PARC}',
          'text-size': 11.5,
          'symbol-placement': 'point',
          'text-letter-spacing': 0.1,
          'text-padding': 60
        },
        paint: {
          'text-color': '#26660D',
          'text-halo-color': '#fff',
          'text-halo-width': 1,
          'text-halo-blur': 0.5
        }
      },
      {
        id: 'small_parks_labels',
        type: 'symbol',
        source: 'vector-tile-api',
        'source-layer': 'parks',
        filter: ['<', 'SHAPE_AREA', 150000],
        minzoom: 14.5,
        layout: {
          'text-anchor': 'center',
          'text-font': ['Open Sans Regular'],
          'text-field': '{NOM_PARC}',
          'text-size': 11.5,
          'symbol-placement': 'point',
          'text-letter-spacing': 0.1,
          'text-padding': 30
        },
        paint: {
          'text-color': '#26660D',
          'text-halo-color': '#fff',
          'text-halo-width': 1,
          'text-halo-blur': 0.5
        }
      },
  
      {
        id: 'boroughs_labels',
        type: 'symbol',
        source: 'vector-tile-api',
        'source-layer': 'boroughs-center',
        maxzoom: 14,
        layout: {
          'text-anchor': 'center',
          'text-font': ['Open Sans Light'],
          'text-field': '{NOM_ARROND}',
          'text-transform': 'uppercase',
          'symbol-placement': 'point',
          'text-letter-spacing': 0.1,
          'text-size': 9
        },
        paint: {
          'text-color': '#666',
          'text-halo-color': 'rgba(255,255,255,0.75)',
          'text-halo-width': 1,
          'text-halo-blur': 1
        }
      },
  
      {
        id: 'cities_labels',
        type: 'symbol',
        source: 'vector-tile-api',
        'source-layer': 'cities-center',
        filter: ['!=', 'NOM_VILLE', 'Montréal'],
        maxzoom: 14,
        'text-transform': 'uppercase',
        layout: {
          'text-anchor': 'center',
          'text-font': ['Open Sans SemiBold'],
          'text-field': '{NOM_VILLE}',
          'text-size': 10.5,
          'symbol-placement': 'point',
          'text-letter-spacing': 0.1
        },
        paint: {
          'text-color': '#666',
          'text-halo-color': 'rgba(255,255,255,0.75)',
          'text-halo-width': 1,
          'text-halo-blur': 1
        }
      }
    ]
  };
  mapboxgl.accessToken = 'undefined';
  map = new mapboxgl.Map({
    container: mapID,
    zoom: startZoom,
    style: mapboxStyle,  
    center,
    maxBounds,
    interactive: false,
  });


  marker.setLngLat(pointLngLat).addTo(map);

  if(address) {
    var strippedAddress = stripTags(address);
    var popupContent = "<div>";
    if(addressTitle) {
      if(addressURI) {
        popupContent += `<a href="${addressURI}" class="link-sm link-list-element"><span class="link-label">${addressTitle}</span></a>`;
      } else {
        popupContent += `<strong>${addressTitle}</strong>`;
      }
    }  
    popupContent += `<div class="font-size-sm-interface">${address}</div>`;
    popupContent += "</div>";
    popupContent += `<div class="d-flex mt-1"><a class="link-sm is-external-link" href="https://www.google.com/maps/search/?api=1&amp;query=${encodeURIComponent(strippedAddress)}" title="Obtenir un itinéraire">Obtenir un itinéraire</a></div>`;
    var popup = new mapboxgl.Popup({closeButton: false, closeOnClick: false, offset: 24, className: 'map-popup'})
      .setLngLat(pointLngLat)
      .setHTML(popupContent)
      .addTo(map);
  }

  function defaultMarker() {
    const el = document.createElement('div');
    el.className = 'marker';
    el.style.backgroundImage = "url('../../images/marker/marker.png')";
    el.style.width = '24px';
    el.style.height = '32px';

    return el;
  }
}