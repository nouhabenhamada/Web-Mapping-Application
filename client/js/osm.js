/**
 * Created by YODA on 12/11/2024.
 */
var lyr_osm = new ol.layer.Tile({
    title: 'OSM',
    type: 'base',
    visible: true,
    source: new ol.source.OSM()
});

var mapView = new ol.View({
    center: ol.proj.transform([0, 0], 'EPSG:4326', 'EPSG:3857'),
    zoom: 3
});

var layersList = [lyr_osm];

var map = new ol.Map({
    target: 'map',
    layers: layersList,
    view: mapView
});