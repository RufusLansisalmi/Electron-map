mapboxgl.accessToken = 'pk.eyJ1IjoiZGFya3JpeCIsImEiOiJjbDFkZWR3bjUwZ29oM2NwM2Ftd3JmYnh2In0.akbDnILkU4FTfcXL5U_urg';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11'
});

const navigations = new mapboxgl.NavigationControl();
map.addControl(navigations);

var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
    
  });

  map.addControl(directions);