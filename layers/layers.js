var wms_layers = [];

var lyr_Shaded_relief_burundi_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "Shaded_relief_burundi",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Shaded_relief_burundi_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [3226796.442867, -497343.790694, 3432397.374394, -256428.566665]
                            })
                        });
var lyr_SRTM_burundi_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "SRTM_burundi",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/SRTM_burundi_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [3226827.356187, -497343.768757, 3432397.349231, -256459.511056]
                            })
                        });
var format_Mapandas_bas_limite_2 = new ol.format.GeoJSON();
var features_Mapandas_bas_limite_2 = format_Mapandas_bas_limite_2.readFeatures(json_Mapandas_bas_limite_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mapandas_bas_limite_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mapandas_bas_limite_2.addFeatures(features_Mapandas_bas_limite_2);
var lyr_Mapandas_bas_limite_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Mapandas_bas_limite_2, 
                style: style_Mapandas_bas_limite_2,
                interactive: false,
                title: '<img src="styles/legend/Mapandas_bas_limite_2.png" /> Mapandas_bas_limite'
            });
var format_Mapandas_haut_limite_3 = new ol.format.GeoJSON();
var features_Mapandas_haut_limite_3 = format_Mapandas_haut_limite_3.readFeatures(json_Mapandas_haut_limite_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mapandas_haut_limite_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mapandas_haut_limite_3.addFeatures(features_Mapandas_haut_limite_3);
var lyr_Mapandas_haut_limite_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Mapandas_haut_limite_3, 
                style: style_Mapandas_haut_limite_3,
                interactive: false,
                title: '<img src="styles/legend/Mapandas_haut_limite_3.png" /> Mapandas_haut_limite'
            });
var format_Burundi_4 = new ol.format.GeoJSON();
var features_Burundi_4 = format_Burundi_4.readFeatures(json_Burundi_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Burundi_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Burundi_4.addFeatures(features_Burundi_4);
var lyr_Burundi_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Burundi_4, 
                style: style_Burundi_4,
                interactive: false,
                title: '<img src="styles/legend/Burundi_4.png" /> Burundi'
            });
var format_Ligne_contour_100m_burundi_5 = new ol.format.GeoJSON();
var features_Ligne_contour_100m_burundi_5 = format_Ligne_contour_100m_burundi_5.readFeatures(json_Ligne_contour_100m_burundi_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ligne_contour_100m_burundi_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ligne_contour_100m_burundi_5.addFeatures(features_Ligne_contour_100m_burundi_5);
var lyr_Ligne_contour_100m_burundi_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ligne_contour_100m_burundi_5, 
                style: style_Ligne_contour_100m_burundi_5,
                interactive: true,
                title: '<img src="styles/legend/Ligne_contour_100m_burundi_5.png" /> Ligne_contour_100m_burundi'
            });

lyr_Shaded_relief_burundi_0.setVisible(true);lyr_SRTM_burundi_1.setVisible(true);lyr_Mapandas_bas_limite_2.setVisible(true);lyr_Mapandas_haut_limite_3.setVisible(true);lyr_Burundi_4.setVisible(true);lyr_Ligne_contour_100m_burundi_5.setVisible(true);
var layersList = [lyr_Shaded_relief_burundi_0,lyr_SRTM_burundi_1,lyr_Mapandas_bas_limite_2,lyr_Mapandas_haut_limite_3,lyr_Burundi_4,lyr_Ligne_contour_100m_burundi_5];
lyr_Mapandas_bas_limite_2.set('fieldAliases', {'Dessins': 'Dessins', });
lyr_Mapandas_haut_limite_3.set('fieldAliases', {'Dessins': 'Dessins', });
lyr_Burundi_4.set('fieldAliases', {'scalerank': 'scalerank', 'featurecla': 'featurecla', 'LABELRANK': 'LABELRANK', 'SOVEREIGNT': 'SOVEREIGNT', 'SOV_A3': 'SOV_A3', 'ADM0_DIF': 'ADM0_DIF', 'LEVEL': 'LEVEL', 'TYPE': 'TYPE', 'ADMIN': 'ADMIN', 'ADM0_A3': 'ADM0_A3', 'GEOU_DIF': 'GEOU_DIF', 'GEOUNIT': 'GEOUNIT', 'GU_A3': 'GU_A3', 'SU_DIF': 'SU_DIF', 'SUBUNIT': 'SUBUNIT', 'SU_A3': 'SU_A3', 'BRK_DIFF': 'BRK_DIFF', 'NAME': 'NAME', 'NAME_LONG': 'NAME_LONG', 'BRK_A3': 'BRK_A3', 'BRK_NAME': 'BRK_NAME', 'BRK_GROUP': 'BRK_GROUP', 'ABBREV': 'ABBREV', 'POSTAL': 'POSTAL', 'FORMAL_EN': 'FORMAL_EN', 'FORMAL_FR': 'FORMAL_FR', 'NAME_CIAWF': 'NAME_CIAWF', 'NOTE_ADM0': 'NOTE_ADM0', 'NOTE_BRK': 'NOTE_BRK', 'NAME_SORT': 'NAME_SORT', 'NAME_ALT': 'NAME_ALT', 'MAPCOLOR7': 'MAPCOLOR7', 'MAPCOLOR8': 'MAPCOLOR8', 'MAPCOLOR9': 'MAPCOLOR9', 'MAPCOLOR13': 'MAPCOLOR13', 'POP_EST': 'POP_EST', 'POP_RANK': 'POP_RANK', 'GDP_MD_EST': 'GDP_MD_EST', 'POP_YEAR': 'POP_YEAR', 'LASTCENSUS': 'LASTCENSUS', 'GDP_YEAR': 'GDP_YEAR', 'ECONOMY': 'ECONOMY', 'INCOME_GRP': 'INCOME_GRP', 'WIKIPEDIA': 'WIKIPEDIA', 'FIPS_10_': 'FIPS_10_', 'ISO_A2': 'ISO_A2', 'ISO_A3': 'ISO_A3', 'ISO_A3_EH': 'ISO_A3_EH', 'ISO_N3': 'ISO_N3', 'UN_A3': 'UN_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', 'WOE_ID': 'WOE_ID', 'WOE_ID_EH': 'WOE_ID_EH', 'WOE_NOTE': 'WOE_NOTE', 'ADM0_A3_IS': 'ADM0_A3_IS', 'ADM0_A3_US': 'ADM0_A3_US', 'ADM0_A3_UN': 'ADM0_A3_UN', 'ADM0_A3_WB': 'ADM0_A3_WB', 'CONTINENT': 'CONTINENT', 'REGION_UN': 'REGION_UN', 'SUBREGION': 'SUBREGION', 'REGION_WB': 'REGION_WB', 'NAME_LEN': 'NAME_LEN', 'LONG_LEN': 'LONG_LEN', 'ABBREV_LEN': 'ABBREV_LEN', 'TINY': 'TINY', 'HOMEPART': 'HOMEPART', 'MIN_ZOOM': 'MIN_ZOOM', 'MIN_LABEL': 'MIN_LABEL', 'MAX_LABEL': 'MAX_LABEL', 'Area': 'Area', });
lyr_Ligne_contour_100m_burundi_5.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_Mapandas_bas_limite_2.set('fieldImages', {'Dessins': 'TextEdit', });
lyr_Mapandas_haut_limite_3.set('fieldImages', {'Dessins': 'TextEdit', });
lyr_Burundi_4.set('fieldImages', {'scalerank': 'Range', 'featurecla': 'TextEdit', 'LABELRANK': 'TextEdit', 'SOVEREIGNT': 'TextEdit', 'SOV_A3': 'TextEdit', 'ADM0_DIF': 'TextEdit', 'LEVEL': 'TextEdit', 'TYPE': 'TextEdit', 'ADMIN': 'TextEdit', 'ADM0_A3': 'TextEdit', 'GEOU_DIF': 'TextEdit', 'GEOUNIT': 'TextEdit', 'GU_A3': 'TextEdit', 'SU_DIF': 'TextEdit', 'SUBUNIT': 'TextEdit', 'SU_A3': 'TextEdit', 'BRK_DIFF': 'TextEdit', 'NAME': 'TextEdit', 'NAME_LONG': 'TextEdit', 'BRK_A3': 'TextEdit', 'BRK_NAME': 'TextEdit', 'BRK_GROUP': 'TextEdit', 'ABBREV': 'TextEdit', 'POSTAL': 'TextEdit', 'FORMAL_EN': 'TextEdit', 'FORMAL_FR': 'TextEdit', 'NAME_CIAWF': 'TextEdit', 'NOTE_ADM0': 'TextEdit', 'NOTE_BRK': 'TextEdit', 'NAME_SORT': 'TextEdit', 'NAME_ALT': 'TextEdit', 'MAPCOLOR7': 'TextEdit', 'MAPCOLOR8': 'TextEdit', 'MAPCOLOR9': 'TextEdit', 'MAPCOLOR13': 'TextEdit', 'POP_EST': 'TextEdit', 'POP_RANK': 'TextEdit', 'GDP_MD_EST': 'TextEdit', 'POP_YEAR': 'TextEdit', 'LASTCENSUS': 'TextEdit', 'GDP_YEAR': 'TextEdit', 'ECONOMY': 'TextEdit', 'INCOME_GRP': 'TextEdit', 'WIKIPEDIA': 'TextEdit', 'FIPS_10_': 'TextEdit', 'ISO_A2': 'TextEdit', 'ISO_A3': 'TextEdit', 'ISO_A3_EH': 'TextEdit', 'ISO_N3': 'TextEdit', 'UN_A3': 'TextEdit', 'WB_A2': 'TextEdit', 'WB_A3': 'TextEdit', 'WOE_ID': 'TextEdit', 'WOE_ID_EH': 'TextEdit', 'WOE_NOTE': 'TextEdit', 'ADM0_A3_IS': 'TextEdit', 'ADM0_A3_US': 'TextEdit', 'ADM0_A3_UN': 'TextEdit', 'ADM0_A3_WB': 'TextEdit', 'CONTINENT': 'TextEdit', 'REGION_UN': 'TextEdit', 'SUBREGION': 'TextEdit', 'REGION_WB': 'TextEdit', 'NAME_LEN': 'TextEdit', 'LONG_LEN': 'TextEdit', 'ABBREV_LEN': 'TextEdit', 'TINY': 'TextEdit', 'HOMEPART': 'TextEdit', 'MIN_ZOOM': 'TextEdit', 'MIN_LABEL': 'TextEdit', 'MAX_LABEL': 'TextEdit', 'Area': 'TextEdit', });
lyr_Ligne_contour_100m_burundi_5.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'ELEV': 'TextEdit', });
lyr_Mapandas_bas_limite_2.set('fieldLabels', {'Dessins': 'no label', });
lyr_Mapandas_haut_limite_3.set('fieldLabels', {'Dessins': 'no label', });
lyr_Burundi_4.set('fieldLabels', {'scalerank': 'no label', 'featurecla': 'no label', 'LABELRANK': 'no label', 'SOVEREIGNT': 'no label', 'SOV_A3': 'no label', 'ADM0_DIF': 'no label', 'LEVEL': 'no label', 'TYPE': 'no label', 'ADMIN': 'no label', 'ADM0_A3': 'no label', 'GEOU_DIF': 'no label', 'GEOUNIT': 'no label', 'GU_A3': 'no label', 'SU_DIF': 'no label', 'SUBUNIT': 'no label', 'SU_A3': 'no label', 'BRK_DIFF': 'no label', 'NAME': 'no label', 'NAME_LONG': 'no label', 'BRK_A3': 'no label', 'BRK_NAME': 'no label', 'BRK_GROUP': 'no label', 'ABBREV': 'no label', 'POSTAL': 'no label', 'FORMAL_EN': 'no label', 'FORMAL_FR': 'no label', 'NAME_CIAWF': 'no label', 'NOTE_ADM0': 'no label', 'NOTE_BRK': 'no label', 'NAME_SORT': 'no label', 'NAME_ALT': 'no label', 'MAPCOLOR7': 'no label', 'MAPCOLOR8': 'no label', 'MAPCOLOR9': 'no label', 'MAPCOLOR13': 'no label', 'POP_EST': 'no label', 'POP_RANK': 'no label', 'GDP_MD_EST': 'no label', 'POP_YEAR': 'no label', 'LASTCENSUS': 'no label', 'GDP_YEAR': 'no label', 'ECONOMY': 'no label', 'INCOME_GRP': 'no label', 'WIKIPEDIA': 'no label', 'FIPS_10_': 'no label', 'ISO_A2': 'no label', 'ISO_A3': 'no label', 'ISO_A3_EH': 'no label', 'ISO_N3': 'no label', 'UN_A3': 'no label', 'WB_A2': 'no label', 'WB_A3': 'no label', 'WOE_ID': 'no label', 'WOE_ID_EH': 'no label', 'WOE_NOTE': 'no label', 'ADM0_A3_IS': 'no label', 'ADM0_A3_US': 'no label', 'ADM0_A3_UN': 'no label', 'ADM0_A3_WB': 'no label', 'CONTINENT': 'no label', 'REGION_UN': 'no label', 'SUBREGION': 'no label', 'REGION_WB': 'no label', 'NAME_LEN': 'no label', 'LONG_LEN': 'no label', 'ABBREV_LEN': 'no label', 'TINY': 'no label', 'HOMEPART': 'no label', 'MIN_ZOOM': 'no label', 'MIN_LABEL': 'no label', 'MAX_LABEL': 'no label', 'Area': 'no label', });
lyr_Ligne_contour_100m_burundi_5.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ELEV': 'header label', });
lyr_Ligne_contour_100m_burundi_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});