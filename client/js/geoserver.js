/**
 * Created by YODA on 12/11/2024.
 */
//URL Geoserver
var url_geoserver =  "http://localhost:8080/geoserver/wms";


//noms des couches
var name_layer_landuse = "formation_gs:gis_osm_landuse_a_free_1";
var name_layer_roads = "formation_gs:gis_osm_roads_free_1";
var name_layer_pois = "formation_gs:gis_osm_pois_free_1";
var name_layer_places = "formation_gs:gis_osm_landuse_a_free_1";
var name_layer_civ_adm1 = "formation_gs:civ_adm1";
var name_layer_civ_adm2 = "formation_gs:civ_adm2";
var name_layer_civ_adm3 = "formation_gs:civ_adm3";
var name_layer_Abidjan_HR = "formation_gs:Abidjan_HR_ext";


//déclaration des couches openlayers
var lyr_landuse = new ol.layer.Tile({
    source: new ol.source.TileWMS(({
        url: url_geoserver,
        params: {"LAYERS": name_layer_landuse, "TILED": "true"}
    })),
    title: "Occupation du sol"
});
var lyr_roads = new ol.layer.Tile({
    source: new ol.source.TileWMS(({
        url: url_geoserver,
        params: {"LAYERS": name_layer_roads, "TILED": "true"}
    })),
    title: "Routes"
});
var lyr_pois = new ol.layer.Tile({
    source: new ol.source.TileWMS(({
        url: url_geoserver,
        params: {"LAYERS": name_layer_pois, "TILED": "true"}
    })),
    title: "POIs"
});
var lyr_places = new ol.layer.Tile({
    source: new ol.source.TileWMS(({
        url: url_geoserver,
        params: {"LAYERS": name_layer_places, "TILED": "true"}
    })),
    title: "Lieux"
});
var lyr_civ_adm1 = new ol.layer.Tile({
    source: new ol.source.TileWMS(({
        url: url_geoserver,
        params: {"LAYERS": name_layer_civ_adm1, "TILED": "true"}
    })),
    title: "Adm1"
});
var lyr_civ_adm2 = new ol.layer.Tile({
    source: new ol.source.TileWMS(({
        url: url_geoserver,
        params: {"LAYERS": name_layer_civ_adm2, "TILED": "true"}
    })),
    title: "Adm2"
});
var lyr_civ_adm3 = new ol.layer.Tile({
    source: new ol.source.TileWMS(({
        url: url_geoserver,
        params: {"LAYERS": name_layer_civ_adm3, "TILED": "true"}
    })),
    title: "Adm3"
});
var lyr_Abidjan_HR = new ol.layer.Tile({
    source: new ol.source.TileWMS(({
        url: url_geoserver,
        params: {"LAYERS": name_layer_Abidjan_HR, "TILED": "true"}
    })),
    title: "Abidjan"
});



//visibilité par défaut des couches au chargement de la carte
lyr_landuse.setVisible(true);
lyr_roads.setVisible(true);
lyr_pois.setVisible(true);
lyr_places.setVisible(true);
lyr_civ_adm1.setVisible(true);
lyr_civ_adm2.setVisible(true);
lyr_civ_adm3.setVisible(true);
lyr_Abidjan_HR.setVisible(true);


//déclaration de la liste des couches à afficher dans un ordre précis
var layersList = [lyr_landuse,lyr_roads,lyr_pois,lyr_places,lyr_civ_adm1,lyr_civ_adm2,lyr_civ_adm3,lyr_Abidjan_HR];

var mapView = new ol.View({
    projection: 'EPSG:3857',
    center: new ol.geom.Point([-5.690183, 7.786829]).transform('EPSG:4326',
        'EPSG:3857').getCoordinates(),
    zoom: 7
});

var map = new ol.Map({
    target: 'map',
    layers: layersList,
    view: mapView
});

var layerSwitcher = new ol.control.LayerSwitcher({
    tipLabel: 'Légende'
});
var ScaleLine = new ol.control.ScaleLine({
    units: 'metric' // Utilise le système métrique (vous pouvez aussi utiliser 'imperial' ou 'us' selon vos besoins)
});
var MousePosition = new ol.control.MousePosition({
    coordinateFormat: ol.coordinate.createStringXY(4), // Format des coordonnées affichées (4 décimales)
    projection: 'EPSG:4326' // Projection des coordonnées (ici WGS 84)
});


map.addControl(layerSwitcher);
map.addControl(MousePosition);
map.addControl(ScaleLine);



