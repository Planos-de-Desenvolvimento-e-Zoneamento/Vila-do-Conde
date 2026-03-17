ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-48.776766, -1.567576, -48.705679, -1.528073]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_FundeadourosLongoPrazo_1 = new ol.format.GeoJSON();
var features_FundeadourosLongoPrazo_1 = format_FundeadourosLongoPrazo_1.readFeatures(json_FundeadourosLongoPrazo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_FundeadourosLongoPrazo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosLongoPrazo_1.addFeatures(features_FundeadourosLongoPrazo_1);
var lyr_FundeadourosLongoPrazo_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosLongoPrazo_1, 
                style: style_FundeadourosLongoPrazo_1,
                popuplayertitle: 'Fundeadouros - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosLongoPrazo_1.png" /> Fundeadouros - Longo Prazo '
            });
var format_FundeadourosMdioPrazo_2 = new ol.format.GeoJSON();
var features_FundeadourosMdioPrazo_2 = format_FundeadourosMdioPrazo_2.readFeatures(json_FundeadourosMdioPrazo_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_FundeadourosMdioPrazo_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosMdioPrazo_2.addFeatures(features_FundeadourosMdioPrazo_2);
var lyr_FundeadourosMdioPrazo_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosMdioPrazo_2, 
                style: style_FundeadourosMdioPrazo_2,
                popuplayertitle: 'Fundeadouros - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosMdioPrazo_2.png" /> Fundeadouros - Médio Prazo '
            });
var format_FundeadourosCurtoPrazo_3 = new ol.format.GeoJSON();
var features_FundeadourosCurtoPrazo_3 = format_FundeadourosCurtoPrazo_3.readFeatures(json_FundeadourosCurtoPrazo_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_FundeadourosCurtoPrazo_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosCurtoPrazo_3.addFeatures(features_FundeadourosCurtoPrazo_3);
var lyr_FundeadourosCurtoPrazo_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosCurtoPrazo_3, 
                style: style_FundeadourosCurtoPrazo_3,
                popuplayertitle: 'Fundeadouros - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosCurtoPrazo_3.png" /> Fundeadouros - Curto Prazo '
            });
var format_FundeadourosSituaoAtual_4 = new ol.format.GeoJSON();
var features_FundeadourosSituaoAtual_4 = format_FundeadourosSituaoAtual_4.readFeatures(json_FundeadourosSituaoAtual_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_FundeadourosSituaoAtual_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosSituaoAtual_4.addFeatures(features_FundeadourosSituaoAtual_4);
var lyr_FundeadourosSituaoAtual_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosSituaoAtual_4, 
                style: style_FundeadourosSituaoAtual_4,
                popuplayertitle: 'Fundeadouros - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosSituaoAtual_4.png" /> Fundeadouros - Situação Atual '
            });
var format_CanaisdeAcessoLongoPrazo_5 = new ol.format.GeoJSON();
var features_CanaisdeAcessoLongoPrazo_5 = format_CanaisdeAcessoLongoPrazo_5.readFeatures(json_CanaisdeAcessoLongoPrazo_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CanaisdeAcessoLongoPrazo_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoLongoPrazo_5.addFeatures(features_CanaisdeAcessoLongoPrazo_5);
var lyr_CanaisdeAcessoLongoPrazo_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoLongoPrazo_5, 
                style: style_CanaisdeAcessoLongoPrazo_5,
                popuplayertitle: 'Canais de Acesso - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoLongoPrazo_5.png" /> Canais de Acesso - Longo Prazo '
            });
var format_CanaisdeAcessoMdioPrazo_6 = new ol.format.GeoJSON();
var features_CanaisdeAcessoMdioPrazo_6 = format_CanaisdeAcessoMdioPrazo_6.readFeatures(json_CanaisdeAcessoMdioPrazo_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CanaisdeAcessoMdioPrazo_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoMdioPrazo_6.addFeatures(features_CanaisdeAcessoMdioPrazo_6);
var lyr_CanaisdeAcessoMdioPrazo_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoMdioPrazo_6, 
                style: style_CanaisdeAcessoMdioPrazo_6,
                popuplayertitle: 'Canais de Acesso - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoMdioPrazo_6.png" /> Canais de Acesso - Médio Prazo '
            });
var format_CanaisdeAcessoCurtoPrazo_7 = new ol.format.GeoJSON();
var features_CanaisdeAcessoCurtoPrazo_7 = format_CanaisdeAcessoCurtoPrazo_7.readFeatures(json_CanaisdeAcessoCurtoPrazo_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CanaisdeAcessoCurtoPrazo_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoCurtoPrazo_7.addFeatures(features_CanaisdeAcessoCurtoPrazo_7);
var lyr_CanaisdeAcessoCurtoPrazo_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoCurtoPrazo_7, 
                style: style_CanaisdeAcessoCurtoPrazo_7,
                popuplayertitle: 'Canais de Acesso - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoCurtoPrazo_7.png" /> Canais de Acesso - Curto Prazo '
            });
var format_CanaisdeAcessoSituaoAtual_8 = new ol.format.GeoJSON();
var features_CanaisdeAcessoSituaoAtual_8 = format_CanaisdeAcessoSituaoAtual_8.readFeatures(json_CanaisdeAcessoSituaoAtual_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CanaisdeAcessoSituaoAtual_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoSituaoAtual_8.addFeatures(features_CanaisdeAcessoSituaoAtual_8);
var lyr_CanaisdeAcessoSituaoAtual_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoSituaoAtual_8, 
                style: style_CanaisdeAcessoSituaoAtual_8,
                popuplayertitle: 'Canais de Acesso - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoSituaoAtual_8.png" /> Canais de Acesso - Situação Atual '
            });
var format_AcessosHidroviriosExternos_9 = new ol.format.GeoJSON();
var features_AcessosHidroviriosExternos_9 = format_AcessosHidroviriosExternos_9.readFeatures(json_AcessosHidroviriosExternos_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosHidroviriosExternos_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosHidroviriosExternos_9.addFeatures(features_AcessosHidroviriosExternos_9);
var lyr_AcessosHidroviriosExternos_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosHidroviriosExternos_9, 
                style: style_AcessosHidroviriosExternos_9,
                popuplayertitle: 'Acessos Hidroviários Externos ',
                interactive: true,
                title: '<img src="styles/legend/AcessosHidroviriosExternos_9.png" /> Acessos Hidroviários Externos '
            });
var format_AcessosFerroviriosInternosMdioPrazo_10 = new ol.format.GeoJSON();
var features_AcessosFerroviriosInternosMdioPrazo_10 = format_AcessosFerroviriosInternosMdioPrazo_10.readFeatures(json_AcessosFerroviriosInternosMdioPrazo_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosFerroviriosInternosMdioPrazo_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosFerroviriosInternosMdioPrazo_10.addFeatures(features_AcessosFerroviriosInternosMdioPrazo_10);
var lyr_AcessosFerroviriosInternosMdioPrazo_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosFerroviriosInternosMdioPrazo_10, 
                style: style_AcessosFerroviriosInternosMdioPrazo_10,
                popuplayertitle: 'Acessos Ferroviários Internos - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosFerroviriosInternosMdioPrazo_10.png" /> Acessos Ferroviários Internos - Médio Prazo '
            });
var format_AcessosRodoviriosInternosLongoPrazo_11 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosLongoPrazo_11 = format_AcessosRodoviriosInternosLongoPrazo_11.readFeatures(json_AcessosRodoviriosInternosLongoPrazo_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosRodoviriosInternosLongoPrazo_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosLongoPrazo_11.addFeatures(features_AcessosRodoviriosInternosLongoPrazo_11);
var lyr_AcessosRodoviriosInternosLongoPrazo_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosLongoPrazo_11, 
                style: style_AcessosRodoviriosInternosLongoPrazo_11,
                popuplayertitle: 'Acessos Rodoviários Internos - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosLongoPrazo_11.png" /> Acessos Rodoviários Internos - Longo Prazo '
            });
var format_AcessosRodoviriosInternosMdioPrazo_12 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosMdioPrazo_12 = format_AcessosRodoviriosInternosMdioPrazo_12.readFeatures(json_AcessosRodoviriosInternosMdioPrazo_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosRodoviriosInternosMdioPrazo_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosMdioPrazo_12.addFeatures(features_AcessosRodoviriosInternosMdioPrazo_12);
var lyr_AcessosRodoviriosInternosMdioPrazo_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosMdioPrazo_12, 
                style: style_AcessosRodoviriosInternosMdioPrazo_12,
                popuplayertitle: 'Acessos Rodoviários Internos - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosMdioPrazo_12.png" /> Acessos Rodoviários Internos - Médio Prazo '
            });
var format_AcessosRodoviriosInternosCurtoPrazo_13 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosCurtoPrazo_13 = format_AcessosRodoviriosInternosCurtoPrazo_13.readFeatures(json_AcessosRodoviriosInternosCurtoPrazo_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosRodoviriosInternosCurtoPrazo_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosCurtoPrazo_13.addFeatures(features_AcessosRodoviriosInternosCurtoPrazo_13);
var lyr_AcessosRodoviriosInternosCurtoPrazo_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosCurtoPrazo_13, 
                style: style_AcessosRodoviriosInternosCurtoPrazo_13,
                popuplayertitle: 'Acessos Rodoviários Internos - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosCurtoPrazo_13.png" /> Acessos Rodoviários Internos - Curto Prazo '
            });
var format_AcessosRodoviriosInternosSituaoAtual_14 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosSituaoAtual_14 = format_AcessosRodoviriosInternosSituaoAtual_14.readFeatures(json_AcessosRodoviriosInternosSituaoAtual_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosRodoviriosInternosSituaoAtual_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosSituaoAtual_14.addFeatures(features_AcessosRodoviriosInternosSituaoAtual_14);
var lyr_AcessosRodoviriosInternosSituaoAtual_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosSituaoAtual_14, 
                style: style_AcessosRodoviriosInternosSituaoAtual_14,
                popuplayertitle: 'Acessos Rodoviários Internos - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosSituaoAtual_14.png" /> Acessos Rodoviários Internos - Situação Atual '
            });
var format_AcessosRodoviriosExternos_15 = new ol.format.GeoJSON();
var features_AcessosRodoviriosExternos_15 = format_AcessosRodoviriosExternos_15.readFeatures(json_AcessosRodoviriosExternos_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosRodoviriosExternos_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosExternos_15.addFeatures(features_AcessosRodoviriosExternos_15);
var lyr_AcessosRodoviriosExternos_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosExternos_15, 
                style: style_AcessosRodoviriosExternos_15,
                popuplayertitle: 'Acessos Rodoviários Externos ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosExternos_15.png" /> Acessos Rodoviários Externos '
            });
var format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_16 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_16 = format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_16.readFeatures(json_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_16.addFeatures(features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_16);
var lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_16, 
                style: style_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_16,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_16.png" /> Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Longo Prazo '
            });
var format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_17 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_17 = format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_17.readFeatures(json_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_17.addFeatures(features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_17);
var lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_17, 
                style: style_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_17,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_17.png" /> Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Médio Prazo '
            });
var format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_18 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_18 = format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_18.readFeatures(json_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_18.addFeatures(features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_18);
var lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_18, 
                style: style_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_18,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_18.png" /> Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Curto Prazo '
            });
var format_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_19 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_19 = format_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_19.readFeatures(json_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_19.addFeatures(features_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_19);
var lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_19, 
                style: style_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_19,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_19.png" /> Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Longo Prazo '
            });
var format_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_20 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_20 = format_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_20.readFeatures(json_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_20.addFeatures(features_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_20);
var lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_20, 
                style: style_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_20,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_20.png" /> Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Médio Prazo '
            });
var format_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_21 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_21 = format_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_21.readFeatures(json_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_21.addFeatures(features_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_21);
var lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_21, 
                style: style_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_21,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_21.png" /> Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Curto Prazo '
            });
var format_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_22 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_22 = format_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_22.readFeatures(json_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_22.addFeatures(features_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_22);
var lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_22, 
                style: style_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_22,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_22.png" /> Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Situação Atual '
            });
var format_reasNoAfetassOperaesPorturiasLongoPrazo_23 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasLongoPrazo_23 = format_reasNoAfetassOperaesPorturiasLongoPrazo_23.readFeatures(json_reasNoAfetassOperaesPorturiasLongoPrazo_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasLongoPrazo_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasLongoPrazo_23.addFeatures(features_reasNoAfetassOperaesPorturiasLongoPrazo_23);
var lyr_reasNoAfetassOperaesPorturiasLongoPrazo_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasLongoPrazo_23, 
                style: style_reasNoAfetassOperaesPorturiasLongoPrazo_23,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasLongoPrazo_23.png" /> Áreas Não Afetas às Operações Portuárias - Longo Prazo '
            });
var format_reasNoAfetassOperaesPorturiasMdioPrazo_24 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasMdioPrazo_24 = format_reasNoAfetassOperaesPorturiasMdioPrazo_24.readFeatures(json_reasNoAfetassOperaesPorturiasMdioPrazo_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasMdioPrazo_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasMdioPrazo_24.addFeatures(features_reasNoAfetassOperaesPorturiasMdioPrazo_24);
var lyr_reasNoAfetassOperaesPorturiasMdioPrazo_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasMdioPrazo_24, 
                style: style_reasNoAfetassOperaesPorturiasMdioPrazo_24,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasMdioPrazo_24.png" /> Áreas Não Afetas às Operações Portuárias - Médio Prazo '
            });
var format_reasNoAfetassOperaesPorturiasCurtoPrazo_25 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasCurtoPrazo_25 = format_reasNoAfetassOperaesPorturiasCurtoPrazo_25.readFeatures(json_reasNoAfetassOperaesPorturiasCurtoPrazo_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasCurtoPrazo_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasCurtoPrazo_25.addFeatures(features_reasNoAfetassOperaesPorturiasCurtoPrazo_25);
var lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasCurtoPrazo_25, 
                style: style_reasNoAfetassOperaesPorturiasCurtoPrazo_25,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasCurtoPrazo_25.png" /> Áreas Não Afetas às Operações Portuárias - Curto Prazo '
            });
var format_reasNoAfetassOperaesPorturiasSituaoAtual_26 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasSituaoAtual_26 = format_reasNoAfetassOperaesPorturiasSituaoAtual_26.readFeatures(json_reasNoAfetassOperaesPorturiasSituaoAtual_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasSituaoAtual_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasSituaoAtual_26.addFeatures(features_reasNoAfetassOperaesPorturiasSituaoAtual_26);
var lyr_reasNoAfetassOperaesPorturiasSituaoAtual_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasSituaoAtual_26, 
                style: style_reasNoAfetassOperaesPorturiasSituaoAtual_26,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasSituaoAtual_26.png" /> Áreas Não Afetas às Operações Portuárias - Situação Atual '
            });
var format_reaseInstalaesAlfandegadas_27 = new ol.format.GeoJSON();
var features_reaseInstalaesAlfandegadas_27 = format_reaseInstalaesAlfandegadas_27.readFeatures(json_reaseInstalaesAlfandegadas_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reaseInstalaesAlfandegadas_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaseInstalaesAlfandegadas_27.addFeatures(features_reaseInstalaesAlfandegadas_27);
var lyr_reaseInstalaesAlfandegadas_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaseInstalaesAlfandegadas_27, 
                style: style_reaseInstalaesAlfandegadas_27,
                popuplayertitle: 'Áreas e Instalações Alfandegadas ',
                interactive: true,
                title: '<img src="styles/legend/reaseInstalaesAlfandegadas_27.png" /> Áreas e Instalações Alfandegadas '
            });
var format_AcostagemLongoPrazo_28 = new ol.format.GeoJSON();
var features_AcostagemLongoPrazo_28 = format_AcostagemLongoPrazo_28.readFeatures(json_AcostagemLongoPrazo_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcostagemLongoPrazo_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemLongoPrazo_28.addFeatures(features_AcostagemLongoPrazo_28);
var lyr_AcostagemLongoPrazo_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemLongoPrazo_28, 
                style: style_AcostagemLongoPrazo_28,
                popuplayertitle: 'Acostagem - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemLongoPrazo_28.png" /> Acostagem - Longo Prazo '
            });
var format_AcostagemMdioPrazo_29 = new ol.format.GeoJSON();
var features_AcostagemMdioPrazo_29 = format_AcostagemMdioPrazo_29.readFeatures(json_AcostagemMdioPrazo_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcostagemMdioPrazo_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemMdioPrazo_29.addFeatures(features_AcostagemMdioPrazo_29);
var lyr_AcostagemMdioPrazo_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemMdioPrazo_29, 
                style: style_AcostagemMdioPrazo_29,
                popuplayertitle: 'Acostagem - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemMdioPrazo_29.png" /> Acostagem - Médio Prazo '
            });
var format_AcostagemCurtoPrazo_30 = new ol.format.GeoJSON();
var features_AcostagemCurtoPrazo_30 = format_AcostagemCurtoPrazo_30.readFeatures(json_AcostagemCurtoPrazo_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcostagemCurtoPrazo_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemCurtoPrazo_30.addFeatures(features_AcostagemCurtoPrazo_30);
var lyr_AcostagemCurtoPrazo_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemCurtoPrazo_30, 
                style: style_AcostagemCurtoPrazo_30,
                popuplayertitle: 'Acostagem - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemCurtoPrazo_30.png" /> Acostagem - Curto Prazo '
            });
var format_AcostagemSituaoAtual_31 = new ol.format.GeoJSON();
var features_AcostagemSituaoAtual_31 = format_AcostagemSituaoAtual_31.readFeatures(json_AcostagemSituaoAtual_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcostagemSituaoAtual_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemSituaoAtual_31.addFeatures(features_AcostagemSituaoAtual_31);
var lyr_AcostagemSituaoAtual_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemSituaoAtual_31, 
                style: style_AcostagemSituaoAtual_31,
                popuplayertitle: 'Acostagem - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemSituaoAtual_31.png" /> Acostagem - Situação Atual '
            });
var format_ArmazenagemLongoPrazo_32 = new ol.format.GeoJSON();
var features_ArmazenagemLongoPrazo_32 = format_ArmazenagemLongoPrazo_32.readFeatures(json_ArmazenagemLongoPrazo_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ArmazenagemLongoPrazo_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemLongoPrazo_32.addFeatures(features_ArmazenagemLongoPrazo_32);
var lyr_ArmazenagemLongoPrazo_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemLongoPrazo_32, 
                style: style_ArmazenagemLongoPrazo_32,
                popuplayertitle: 'Armazenagem - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemLongoPrazo_32.png" /> Armazenagem - Longo Prazo '
            });
var format_ArmazenagemMdioPrazo_33 = new ol.format.GeoJSON();
var features_ArmazenagemMdioPrazo_33 = format_ArmazenagemMdioPrazo_33.readFeatures(json_ArmazenagemMdioPrazo_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ArmazenagemMdioPrazo_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemMdioPrazo_33.addFeatures(features_ArmazenagemMdioPrazo_33);
var lyr_ArmazenagemMdioPrazo_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemMdioPrazo_33, 
                style: style_ArmazenagemMdioPrazo_33,
                popuplayertitle: 'Armazenagem - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemMdioPrazo_33.png" /> Armazenagem - Médio Prazo '
            });
var format_ArmazenagemCurtoPrazo_34 = new ol.format.GeoJSON();
var features_ArmazenagemCurtoPrazo_34 = format_ArmazenagemCurtoPrazo_34.readFeatures(json_ArmazenagemCurtoPrazo_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ArmazenagemCurtoPrazo_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemCurtoPrazo_34.addFeatures(features_ArmazenagemCurtoPrazo_34);
var lyr_ArmazenagemCurtoPrazo_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemCurtoPrazo_34, 
                style: style_ArmazenagemCurtoPrazo_34,
                popuplayertitle: 'Armazenagem - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemCurtoPrazo_34.png" /> Armazenagem - Curto Prazo '
            });
var format_ArmazenagemSituaoAtual_35 = new ol.format.GeoJSON();
var features_ArmazenagemSituaoAtual_35 = format_ArmazenagemSituaoAtual_35.readFeatures(json_ArmazenagemSituaoAtual_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ArmazenagemSituaoAtual_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemSituaoAtual_35.addFeatures(features_ArmazenagemSituaoAtual_35);
var lyr_ArmazenagemSituaoAtual_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemSituaoAtual_35, 
                style: style_ArmazenagemSituaoAtual_35,
                popuplayertitle: 'Armazenagem - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemSituaoAtual_35.png" /> Armazenagem - Situação Atual '
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_36 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_36 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_36.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_36.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_36);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_36, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_36,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_36.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Longo Prazo '
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_37 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_37 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_37.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_37.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_37);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_37, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_37,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_37.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Médio Prazo '
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_38 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_38 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_38.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_38.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_38);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_38, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_38,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_38.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Curto Prazo '
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_39 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_39 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_39.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_39.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_39);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_39, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_39,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_39.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Situação Atual '
            });
var format_reasAfetassOperaesPorturiasArrendadasLongoPrazo_40 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasArrendadasLongoPrazo_40 = format_reasAfetassOperaesPorturiasArrendadasLongoPrazo_40.readFeatures(json_reasAfetassOperaesPorturiasArrendadasLongoPrazo_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasArrendadasLongoPrazo_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasArrendadasLongoPrazo_40.addFeatures(features_reasAfetassOperaesPorturiasArrendadasLongoPrazo_40);
var lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasArrendadasLongoPrazo_40, 
                style: style_reasAfetassOperaesPorturiasArrendadasLongoPrazo_40,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Arrendadas - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasArrendadasLongoPrazo_40.png" /> Áreas Afetas às Operações Portuárias Arrendadas - Longo Prazo '
            });
var format_reasAfetassOperaesPorturiasArrendadasMdioPrazo_41 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasArrendadasMdioPrazo_41 = format_reasAfetassOperaesPorturiasArrendadasMdioPrazo_41.readFeatures(json_reasAfetassOperaesPorturiasArrendadasMdioPrazo_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasArrendadasMdioPrazo_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasArrendadasMdioPrazo_41.addFeatures(features_reasAfetassOperaesPorturiasArrendadasMdioPrazo_41);
var lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasArrendadasMdioPrazo_41, 
                style: style_reasAfetassOperaesPorturiasArrendadasMdioPrazo_41,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Arrendadas - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasArrendadasMdioPrazo_41.png" /> Áreas Afetas às Operações Portuárias Arrendadas - Médio Prazo '
            });
var format_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_42 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_42 = format_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_42.readFeatures(json_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_42.addFeatures(features_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_42);
var lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_42, 
                style: style_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_42,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Arrendadas - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasArrendadasCurtoPrazo_42.png" /> Áreas Afetas às Operações Portuárias Arrendadas - Curto Prazo '
            });
var format_reasAfetassOperaesPorturiasArrendadasSituaoAtual_43 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasArrendadasSituaoAtual_43 = format_reasAfetassOperaesPorturiasArrendadasSituaoAtual_43.readFeatures(json_reasAfetassOperaesPorturiasArrendadasSituaoAtual_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasArrendadasSituaoAtual_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasArrendadasSituaoAtual_43.addFeatures(features_reasAfetassOperaesPorturiasArrendadasSituaoAtual_43);
var lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasArrendadasSituaoAtual_43, 
                style: style_reasAfetassOperaesPorturiasArrendadasSituaoAtual_43,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Arrendadas - Situação Atual',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasArrendadasSituaoAtual_43.png" /> Áreas Afetas às Operações Portuárias Arrendadas - Situação Atual'
            });
var format_GranelLquidoGasoso_44 = new ol.format.GeoJSON();
var features_GranelLquidoGasoso_44 = format_GranelLquidoGasoso_44.readFeatures(json_GranelLquidoGasoso_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelLquidoGasoso_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelLquidoGasoso_44.addFeatures(features_GranelLquidoGasoso_44);
var lyr_GranelLquidoGasoso_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelLquidoGasoso_44, 
                style: style_GranelLquidoGasoso_44,
                popuplayertitle: 'Granel Líquido/Gasoso',
                interactive: true,
                title: '<img src="styles/legend/GranelLquidoGasoso_44.png" /> Granel Líquido/Gasoso'
            });
var format_GranelSlidoLquido_45 = new ol.format.GeoJSON();
var features_GranelSlidoLquido_45 = format_GranelSlidoLquido_45.readFeatures(json_GranelSlidoLquido_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelSlidoLquido_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelSlidoLquido_45.addFeatures(features_GranelSlidoLquido_45);
var lyr_GranelSlidoLquido_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelSlidoLquido_45, 
                style: style_GranelSlidoLquido_45,
                popuplayertitle: 'Granel Sólido/Líquido',
                interactive: true,
                title: '<img src="styles/legend/GranelSlidoLquido_45.png" /> Granel Sólido/Líquido'
            });
var format_GranelSlido_46 = new ol.format.GeoJSON();
var features_GranelSlido_46 = format_GranelSlido_46.readFeatures(json_GranelSlido_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelSlido_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelSlido_46.addFeatures(features_GranelSlido_46);
var lyr_GranelSlido_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelSlido_46, 
                style: style_GranelSlido_46,
                popuplayertitle: 'Granel Sólido',
                interactive: true,
                title: '<img src="styles/legend/GranelSlido_46.png" /> Granel Sólido'
            });
var format_GranelLquido_47 = new ol.format.GeoJSON();
var features_GranelLquido_47 = format_GranelLquido_47.readFeatures(json_GranelLquido_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelLquido_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelLquido_47.addFeatures(features_GranelLquido_47);
var lyr_GranelLquido_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelLquido_47, 
                style: style_GranelLquido_47,
                popuplayertitle: 'Granel Líquido ',
                interactive: true,
                title: '<img src="styles/legend/GranelLquido_47.png" /> Granel Líquido '
            });
var format_CargaConteinerizada_48 = new ol.format.GeoJSON();
var features_CargaConteinerizada_48 = format_CargaConteinerizada_48.readFeatures(json_CargaConteinerizada_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CargaConteinerizada_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaConteinerizada_48.addFeatures(features_CargaConteinerizada_48);
var lyr_CargaConteinerizada_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaConteinerizada_48, 
                style: style_CargaConteinerizada_48,
                popuplayertitle: 'Carga Conteinerizada',
                interactive: true,
                title: '<img src="styles/legend/CargaConteinerizada_48.png" /> Carga Conteinerizada'
            });
var format_MltiploUso_49 = new ol.format.GeoJSON();
var features_MltiploUso_49 = format_MltiploUso_49.readFeatures(json_MltiploUso_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MltiploUso_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MltiploUso_49.addFeatures(features_MltiploUso_49);
var lyr_MltiploUso_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MltiploUso_49, 
                style: style_MltiploUso_49,
                popuplayertitle: 'Múltiplo Uso',
                interactive: true,
                title: '<img src="styles/legend/MltiploUso_49.png" /> Múltiplo Uso'
            });
var format_GranelLquidoGasoso_50 = new ol.format.GeoJSON();
var features_GranelLquidoGasoso_50 = format_GranelLquidoGasoso_50.readFeatures(json_GranelLquidoGasoso_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelLquidoGasoso_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelLquidoGasoso_50.addFeatures(features_GranelLquidoGasoso_50);
var lyr_GranelLquidoGasoso_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelLquidoGasoso_50, 
                style: style_GranelLquidoGasoso_50,
                popuplayertitle: 'Granel Líquido/Gasoso',
                interactive: true,
                title: '<img src="styles/legend/GranelLquidoGasoso_50.png" /> Granel Líquido/Gasoso'
            });
var format_GranelSlidoLquido_51 = new ol.format.GeoJSON();
var features_GranelSlidoLquido_51 = format_GranelSlidoLquido_51.readFeatures(json_GranelSlidoLquido_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelSlidoLquido_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelSlidoLquido_51.addFeatures(features_GranelSlidoLquido_51);
var lyr_GranelSlidoLquido_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelSlidoLquido_51, 
                style: style_GranelSlidoLquido_51,
                popuplayertitle: 'Granel Sólido/Líquido',
                interactive: true,
                title: '<img src="styles/legend/GranelSlidoLquido_51.png" /> Granel Sólido/Líquido'
            });
var format_GranelSlido_52 = new ol.format.GeoJSON();
var features_GranelSlido_52 = format_GranelSlido_52.readFeatures(json_GranelSlido_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelSlido_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelSlido_52.addFeatures(features_GranelSlido_52);
var lyr_GranelSlido_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelSlido_52, 
                style: style_GranelSlido_52,
                popuplayertitle: 'Granel Sólido',
                interactive: true,
                title: '<img src="styles/legend/GranelSlido_52.png" /> Granel Sólido'
            });
var format_GranelLquido_53 = new ol.format.GeoJSON();
var features_GranelLquido_53 = format_GranelLquido_53.readFeatures(json_GranelLquido_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelLquido_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelLquido_53.addFeatures(features_GranelLquido_53);
var lyr_GranelLquido_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelLquido_53, 
                style: style_GranelLquido_53,
                popuplayertitle: 'Granel Líquido',
                interactive: true,
                title: '<img src="styles/legend/GranelLquido_53.png" /> Granel Líquido'
            });
var format_CargaConteinerizada_54 = new ol.format.GeoJSON();
var features_CargaConteinerizada_54 = format_CargaConteinerizada_54.readFeatures(json_CargaConteinerizada_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CargaConteinerizada_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaConteinerizada_54.addFeatures(features_CargaConteinerizada_54);
var lyr_CargaConteinerizada_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaConteinerizada_54, 
                style: style_CargaConteinerizada_54,
                popuplayertitle: 'Carga Conteinerizada',
                interactive: true,
                title: '<img src="styles/legend/CargaConteinerizada_54.png" /> Carga Conteinerizada'
            });
var format_MltiploUso_55 = new ol.format.GeoJSON();
var features_MltiploUso_55 = format_MltiploUso_55.readFeatures(json_MltiploUso_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MltiploUso_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MltiploUso_55.addFeatures(features_MltiploUso_55);
var lyr_MltiploUso_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MltiploUso_55, 
                style: style_MltiploUso_55,
                popuplayertitle: 'Múltiplo Uso',
                interactive: true,
                title: '<img src="styles/legend/MltiploUso_55.png" /> Múltiplo Uso'
            });
var format_GranelLquidoGasoso_56 = new ol.format.GeoJSON();
var features_GranelLquidoGasoso_56 = format_GranelLquidoGasoso_56.readFeatures(json_GranelLquidoGasoso_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelLquidoGasoso_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelLquidoGasoso_56.addFeatures(features_GranelLquidoGasoso_56);
var lyr_GranelLquidoGasoso_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelLquidoGasoso_56, 
                style: style_GranelLquidoGasoso_56,
                popuplayertitle: 'Granel Líquido/Gasoso',
                interactive: true,
                title: '<img src="styles/legend/GranelLquidoGasoso_56.png" /> Granel Líquido/Gasoso'
            });
var format_GranelSlidoLquido_57 = new ol.format.GeoJSON();
var features_GranelSlidoLquido_57 = format_GranelSlidoLquido_57.readFeatures(json_GranelSlidoLquido_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelSlidoLquido_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelSlidoLquido_57.addFeatures(features_GranelSlidoLquido_57);
var lyr_GranelSlidoLquido_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelSlidoLquido_57, 
                style: style_GranelSlidoLquido_57,
                popuplayertitle: 'Granel Sólido/Líquido',
                interactive: true,
                title: '<img src="styles/legend/GranelSlidoLquido_57.png" /> Granel Sólido/Líquido'
            });
var format_GranelSlido_58 = new ol.format.GeoJSON();
var features_GranelSlido_58 = format_GranelSlido_58.readFeatures(json_GranelSlido_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelSlido_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelSlido_58.addFeatures(features_GranelSlido_58);
var lyr_GranelSlido_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelSlido_58, 
                style: style_GranelSlido_58,
                popuplayertitle: 'Granel Sólido',
                interactive: true,
                title: '<img src="styles/legend/GranelSlido_58.png" /> Granel Sólido'
            });
var format_GranelLquido_59 = new ol.format.GeoJSON();
var features_GranelLquido_59 = format_GranelLquido_59.readFeatures(json_GranelLquido_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelLquido_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelLquido_59.addFeatures(features_GranelLquido_59);
var lyr_GranelLquido_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelLquido_59, 
                style: style_GranelLquido_59,
                popuplayertitle: 'Granel Líquido',
                interactive: true,
                title: '<img src="styles/legend/GranelLquido_59.png" /> Granel Líquido'
            });
var format_MltipoUso_60 = new ol.format.GeoJSON();
var features_MltipoUso_60 = format_MltipoUso_60.readFeatures(json_MltipoUso_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MltipoUso_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MltipoUso_60.addFeatures(features_MltipoUso_60);
var lyr_MltipoUso_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MltipoUso_60, 
                style: style_MltipoUso_60,
                popuplayertitle: 'Múltipo Uso',
                interactive: true,
                title: '<img src="styles/legend/MltipoUso_60.png" /> Múltipo Uso'
            });
var format_GranelLquidoGasoso_61 = new ol.format.GeoJSON();
var features_GranelLquidoGasoso_61 = format_GranelLquidoGasoso_61.readFeatures(json_GranelLquidoGasoso_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelLquidoGasoso_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelLquidoGasoso_61.addFeatures(features_GranelLquidoGasoso_61);
var lyr_GranelLquidoGasoso_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelLquidoGasoso_61, 
                style: style_GranelLquidoGasoso_61,
                popuplayertitle: 'Granel Líquido/Gasoso',
                interactive: true,
                title: '<img src="styles/legend/GranelLquidoGasoso_61.png" /> Granel Líquido/Gasoso'
            });
var format_GranelSlidoLquido_62 = new ol.format.GeoJSON();
var features_GranelSlidoLquido_62 = format_GranelSlidoLquido_62.readFeatures(json_GranelSlidoLquido_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelSlidoLquido_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelSlidoLquido_62.addFeatures(features_GranelSlidoLquido_62);
var lyr_GranelSlidoLquido_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelSlidoLquido_62, 
                style: style_GranelSlidoLquido_62,
                popuplayertitle: 'Granel Sólido/Líquido',
                interactive: true,
                title: '<img src="styles/legend/GranelSlidoLquido_62.png" /> Granel Sólido/Líquido'
            });
var format_GranelLquido_63 = new ol.format.GeoJSON();
var features_GranelLquido_63 = format_GranelLquido_63.readFeatures(json_GranelLquido_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelLquido_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelLquido_63.addFeatures(features_GranelLquido_63);
var lyr_GranelLquido_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelLquido_63, 
                style: style_GranelLquido_63,
                popuplayertitle: 'Granel Líquido',
                interactive: true,
                title: '<img src="styles/legend/GranelLquido_63.png" /> Granel Líquido'
            });
var format_CargaConteinerizada_64 = new ol.format.GeoJSON();
var features_CargaConteinerizada_64 = format_CargaConteinerizada_64.readFeatures(json_CargaConteinerizada_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CargaConteinerizada_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaConteinerizada_64.addFeatures(features_CargaConteinerizada_64);
var lyr_CargaConteinerizada_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaConteinerizada_64, 
                style: style_CargaConteinerizada_64,
                popuplayertitle: 'Carga Conteinerizada',
                interactive: true,
                title: '<img src="styles/legend/CargaConteinerizada_64.png" /> Carga Conteinerizada'
            });
var format_MltiploUso_65 = new ol.format.GeoJSON();
var features_MltiploUso_65 = format_MltiploUso_65.readFeatures(json_MltiploUso_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MltiploUso_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MltiploUso_65.addFeatures(features_MltiploUso_65);
var lyr_MltiploUso_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MltiploUso_65, 
                style: style_MltiploUso_65,
                popuplayertitle: 'Múltiplo Uso',
                interactive: true,
                title: '<img src="styles/legend/MltiploUso_65.png" /> Múltiplo Uso'
            });
var format_reasAfetassOperaesPorturiasLongoPrazo_66 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasLongoPrazo_66 = format_reasAfetassOperaesPorturiasLongoPrazo_66.readFeatures(json_reasAfetassOperaesPorturiasLongoPrazo_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasLongoPrazo_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasLongoPrazo_66.addFeatures(features_reasAfetassOperaesPorturiasLongoPrazo_66);
var lyr_reasAfetassOperaesPorturiasLongoPrazo_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasLongoPrazo_66, 
                style: style_reasAfetassOperaesPorturiasLongoPrazo_66,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasLongoPrazo_66.png" /> Áreas Afetas às Operações Portuárias - Longo Prazo '
            });
var format_reasAfetassOperaesPorturiasMdioPrazo_67 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasMdioPrazo_67 = format_reasAfetassOperaesPorturiasMdioPrazo_67.readFeatures(json_reasAfetassOperaesPorturiasMdioPrazo_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasMdioPrazo_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasMdioPrazo_67.addFeatures(features_reasAfetassOperaesPorturiasMdioPrazo_67);
var lyr_reasAfetassOperaesPorturiasMdioPrazo_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasMdioPrazo_67, 
                style: style_reasAfetassOperaesPorturiasMdioPrazo_67,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasMdioPrazo_67.png" /> Áreas Afetas às Operações Portuárias - Médio Prazo '
            });
var format_reasAfetassOperaesPorturiasCurtoPrazo_68 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasCurtoPrazo_68 = format_reasAfetassOperaesPorturiasCurtoPrazo_68.readFeatures(json_reasAfetassOperaesPorturiasCurtoPrazo_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasCurtoPrazo_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasCurtoPrazo_68.addFeatures(features_reasAfetassOperaesPorturiasCurtoPrazo_68);
var lyr_reasAfetassOperaesPorturiasCurtoPrazo_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasCurtoPrazo_68, 
                style: style_reasAfetassOperaesPorturiasCurtoPrazo_68,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasCurtoPrazo_68.png" /> Áreas Afetas às Operações Portuárias - Curto Prazo '
            });
var format_reasAfetassOperaesPorturiasSituaoAtual_69 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasSituaoAtual_69 = format_reasAfetassOperaesPorturiasSituaoAtual_69.readFeatures(json_reasAfetassOperaesPorturiasSituaoAtual_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasSituaoAtual_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasSituaoAtual_69.addFeatures(features_reasAfetassOperaesPorturiasSituaoAtual_69);
var lyr_reasAfetassOperaesPorturiasSituaoAtual_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasSituaoAtual_69, 
                style: style_reasAfetassOperaesPorturiasSituaoAtual_69,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasSituaoAtual_69.png" /> Áreas Afetas às Operações Portuárias - Situação Atual '
            });
var format_PoligonaldareadoPortoOrganizadodeViladoConde_70 = new ol.format.GeoJSON();
var features_PoligonaldareadoPortoOrganizadodeViladoConde_70 = format_PoligonaldareadoPortoOrganizadodeViladoConde_70.readFeatures(json_PoligonaldareadoPortoOrganizadodeViladoConde_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PoligonaldareadoPortoOrganizadodeViladoConde_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoligonaldareadoPortoOrganizadodeViladoConde_70.addFeatures(features_PoligonaldareadoPortoOrganizadodeViladoConde_70);
var lyr_PoligonaldareadoPortoOrganizadodeViladoConde_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PoligonaldareadoPortoOrganizadodeViladoConde_70, 
                style: style_PoligonaldareadoPortoOrganizadodeViladoConde_70,
                popuplayertitle: 'Poligonal da Área do Porto Organizado de Vila do Conde',
                interactive: true,
                title: '<img src="styles/legend/PoligonaldareadoPortoOrganizadodeViladoConde_70.png" /> Poligonal da Área do Porto Organizado de Vila do Conde'
            });
var group_PoligonaldareadoPortoOrganizado = new ol.layer.Group({
                                layers: [lyr_PoligonaldareadoPortoOrganizadodeViladoConde_70,],
                                fold: 'open',
                                title: 'Poligonal da Área do Porto Organizado '});
var group_reasAfetassOperaesPorturias = new ol.layer.Group({
                                layers: [lyr_reasAfetassOperaesPorturiasLongoPrazo_66,lyr_reasAfetassOperaesPorturiasMdioPrazo_67,lyr_reasAfetassOperaesPorturiasCurtoPrazo_68,lyr_reasAfetassOperaesPorturiasSituaoAtual_69,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias '});
var group_reasAfetassOperaesPorturiasporPerfildeCargaSituaoAtual = new ol.layer.Group({
                                layers: [lyr_GranelLquidoGasoso_61,lyr_GranelSlidoLquido_62,lyr_GranelLquido_63,lyr_CargaConteinerizada_64,lyr_MltiploUso_65,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias por Perfil de Carga - Situação Atual '});
var group_reasAfetassOperaesPorturiasporPerfildeCargaCurtoPrazo = new ol.layer.Group({
                                layers: [lyr_GranelLquidoGasoso_56,lyr_GranelSlidoLquido_57,lyr_GranelSlido_58,lyr_GranelLquido_59,lyr_MltipoUso_60,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias por Perfil de Carga - Curto Prazo'});
var group_reasAfetassOperaesPorturiasporPerfildeCargaMdioPrazo = new ol.layer.Group({
                                layers: [lyr_GranelLquidoGasoso_50,lyr_GranelSlidoLquido_51,lyr_GranelSlido_52,lyr_GranelLquido_53,lyr_CargaConteinerizada_54,lyr_MltiploUso_55,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias por Perfil de Carga - Médio Prazo'});
var group_reasAfetassOperaesPorturiasporPerfildeCargaLongoPrazo = new ol.layer.Group({
                                layers: [lyr_GranelLquidoGasoso_44,lyr_GranelSlidoLquido_45,lyr_GranelSlido_46,lyr_GranelLquido_47,lyr_CargaConteinerizada_48,lyr_MltiploUso_49,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias por Perfil de Carga - Longo Prazo'});
var group_reasAfetassOperaesPorturiasArrendadas = new ol.layer.Group({
                                layers: [lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_40,lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_41,lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_42,lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_43,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias Arrendadas '});
var group_reasAfetassOperaesPorturiasDisponveisparaArrendamento = new ol.layer.Group({
                                layers: [lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_36,lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_37,lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_38,lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_39,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento '});
var group_Armazenagem = new ol.layer.Group({
                                layers: [lyr_ArmazenagemLongoPrazo_32,lyr_ArmazenagemMdioPrazo_33,lyr_ArmazenagemCurtoPrazo_34,lyr_ArmazenagemSituaoAtual_35,],
                                fold: 'open',
                                title: 'Armazenagem '});
var group_Acostagem = new ol.layer.Group({
                                layers: [lyr_AcostagemLongoPrazo_28,lyr_AcostagemMdioPrazo_29,lyr_AcostagemCurtoPrazo_30,lyr_AcostagemSituaoAtual_31,],
                                fold: 'open',
                                title: 'Acostagem '});
var group_reaseInstalaesAlfandegadas = new ol.layer.Group({
                                layers: [lyr_reaseInstalaesAlfandegadas_27,],
                                fold: 'open',
                                title: 'Áreas e Instalações Alfandegadas '});
var group_reasNoAfetassOperaesPorturias = new ol.layer.Group({
                                layers: [lyr_reasNoAfetassOperaesPorturiasLongoPrazo_23,lyr_reasNoAfetassOperaesPorturiasMdioPrazo_24,lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_25,lyr_reasNoAfetassOperaesPorturiasSituaoAtual_26,],
                                fold: 'open',
                                title: 'Áreas Não Afetas às Operações Portuárias '});
var group_reasNoAfetassOperaesPorturiasemExploraoIndireta = new ol.layer.Group({
                                layers: [lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_19,lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_20,lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_21,lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_22,],
                                fold: 'open',
                                title: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta '});
var group_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndireta = new ol.layer.Group({
                                layers: [lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_16,lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_17,lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_18,],
                                fold: 'open',
                                title: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta '});
var group_AcessosRodoviriosExternos = new ol.layer.Group({
                                layers: [lyr_AcessosRodoviriosExternos_15,],
                                fold: 'open',
                                title: 'Acessos Rodoviários Externos '});
var group_AcessosRodoviriosInternos = new ol.layer.Group({
                                layers: [lyr_AcessosRodoviriosInternosLongoPrazo_11,lyr_AcessosRodoviriosInternosMdioPrazo_12,lyr_AcessosRodoviriosInternosCurtoPrazo_13,lyr_AcessosRodoviriosInternosSituaoAtual_14,],
                                fold: 'open',
                                title: 'Acessos Rodoviários Internos '});
var group_AcessosFerroviriosInternos = new ol.layer.Group({
                                layers: [lyr_AcessosFerroviriosInternosMdioPrazo_10,],
                                fold: 'open',
                                title: 'Acessos Ferroviários Internos'});
var group_AcessosHidroviriosExternos = new ol.layer.Group({
                                layers: [lyr_AcessosHidroviriosExternos_9,],
                                fold: 'open',
                                title: 'Acessos Hidroviários Externos '});
var group_CanaisdeAcesso = new ol.layer.Group({
                                layers: [lyr_CanaisdeAcessoLongoPrazo_5,lyr_CanaisdeAcessoMdioPrazo_6,lyr_CanaisdeAcessoCurtoPrazo_7,lyr_CanaisdeAcessoSituaoAtual_8,],
                                fold: 'open',
                                title: 'Canais de Acesso '});
var group_Fundeadouros = new ol.layer.Group({
                                layers: [lyr_FundeadourosLongoPrazo_1,lyr_FundeadourosMdioPrazo_2,lyr_FundeadourosCurtoPrazo_3,lyr_FundeadourosSituaoAtual_4,],
                                fold: 'open',
                                title: 'Fundeadouros '});

lyr_GoogleSatellite_0.setVisible(true);lyr_FundeadourosLongoPrazo_1.setVisible(false);lyr_FundeadourosMdioPrazo_2.setVisible(false);lyr_FundeadourosCurtoPrazo_3.setVisible(false);lyr_FundeadourosSituaoAtual_4.setVisible(false);lyr_CanaisdeAcessoLongoPrazo_5.setVisible(false);lyr_CanaisdeAcessoMdioPrazo_6.setVisible(false);lyr_CanaisdeAcessoCurtoPrazo_7.setVisible(false);lyr_CanaisdeAcessoSituaoAtual_8.setVisible(false);lyr_AcessosHidroviriosExternos_9.setVisible(false);lyr_AcessosFerroviriosInternosMdioPrazo_10.setVisible(false);lyr_AcessosRodoviriosInternosLongoPrazo_11.setVisible(false);lyr_AcessosRodoviriosInternosMdioPrazo_12.setVisible(false);lyr_AcessosRodoviriosInternosCurtoPrazo_13.setVisible(false);lyr_AcessosRodoviriosInternosSituaoAtual_14.setVisible(false);lyr_AcessosRodoviriosExternos_15.setVisible(false);lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_16.setVisible(false);lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_17.setVisible(false);lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_18.setVisible(false);lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_19.setVisible(false);lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_20.setVisible(false);lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_21.setVisible(false);lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_22.setVisible(false);lyr_reasNoAfetassOperaesPorturiasLongoPrazo_23.setVisible(false);lyr_reasNoAfetassOperaesPorturiasMdioPrazo_24.setVisible(false);lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_25.setVisible(false);lyr_reasNoAfetassOperaesPorturiasSituaoAtual_26.setVisible(false);lyr_reaseInstalaesAlfandegadas_27.setVisible(false);lyr_AcostagemLongoPrazo_28.setVisible(false);lyr_AcostagemMdioPrazo_29.setVisible(false);lyr_AcostagemCurtoPrazo_30.setVisible(false);lyr_AcostagemSituaoAtual_31.setVisible(false);lyr_ArmazenagemLongoPrazo_32.setVisible(false);lyr_ArmazenagemMdioPrazo_33.setVisible(false);lyr_ArmazenagemCurtoPrazo_34.setVisible(false);lyr_ArmazenagemSituaoAtual_35.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_36.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_37.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_38.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_39.setVisible(false);lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_40.setVisible(false);lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_41.setVisible(false);lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_42.setVisible(false);lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_43.setVisible(false);lyr_GranelLquidoGasoso_44.setVisible(false);lyr_GranelSlidoLquido_45.setVisible(false);lyr_GranelSlido_46.setVisible(false);lyr_GranelLquido_47.setVisible(false);lyr_CargaConteinerizada_48.setVisible(false);lyr_MltiploUso_49.setVisible(false);lyr_GranelLquidoGasoso_50.setVisible(false);lyr_GranelSlidoLquido_51.setVisible(false);lyr_GranelSlido_52.setVisible(false);lyr_GranelLquido_53.setVisible(false);lyr_CargaConteinerizada_54.setVisible(false);lyr_MltiploUso_55.setVisible(false);lyr_GranelLquidoGasoso_56.setVisible(false);lyr_GranelSlidoLquido_57.setVisible(false);lyr_GranelSlido_58.setVisible(false);lyr_GranelLquido_59.setVisible(false);lyr_MltipoUso_60.setVisible(false);lyr_GranelLquidoGasoso_61.setVisible(false);lyr_GranelSlidoLquido_62.setVisible(false);lyr_GranelLquido_63.setVisible(false);lyr_CargaConteinerizada_64.setVisible(false);lyr_MltiploUso_65.setVisible(false);lyr_reasAfetassOperaesPorturiasLongoPrazo_66.setVisible(false);lyr_reasAfetassOperaesPorturiasMdioPrazo_67.setVisible(false);lyr_reasAfetassOperaesPorturiasCurtoPrazo_68.setVisible(false);lyr_reasAfetassOperaesPorturiasSituaoAtual_69.setVisible(false);lyr_PoligonaldareadoPortoOrganizadodeViladoConde_70.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_Fundeadouros,group_CanaisdeAcesso,group_AcessosHidroviriosExternos,group_AcessosFerroviriosInternos,group_AcessosRodoviriosInternos,group_AcessosRodoviriosExternos,group_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndireta,group_reasNoAfetassOperaesPorturiasemExploraoIndireta,group_reasNoAfetassOperaesPorturias,group_reaseInstalaesAlfandegadas,group_Acostagem,group_Armazenagem,group_reasAfetassOperaesPorturiasDisponveisparaArrendamento,group_reasAfetassOperaesPorturiasArrendadas,group_reasAfetassOperaesPorturiasporPerfildeCargaLongoPrazo,group_reasAfetassOperaesPorturiasporPerfildeCargaMdioPrazo,group_reasAfetassOperaesPorturiasporPerfildeCargaCurtoPrazo,group_reasAfetassOperaesPorturiasporPerfildeCargaSituaoAtual,group_reasAfetassOperaesPorturias,group_PoligonaldareadoPortoOrganizado];
lyr_FundeadourosLongoPrazo_1.set('fieldAliases', {'N_Ident': 'Número de Identificação ', 'Calado': 'Calado (m) ', 'Funcao': 'Função', });
lyr_FundeadourosMdioPrazo_2.set('fieldAliases', {'N_Ident': 'Número de Identificação ', 'Calado': 'Calado (m) ', 'Funcao': 'Função', });
lyr_FundeadourosCurtoPrazo_3.set('fieldAliases', {'N_Ident': 'Número de Identificação ', 'Calado': 'Calado (m) ', 'Funcao': 'Função', });
lyr_FundeadourosSituaoAtual_4.set('fieldAliases', {'N_Ident': 'Número de Identificação ', 'Calado': 'Calado (m) ', 'Funcao': 'Função', });
lyr_CanaisdeAcessoLongoPrazo_5.set('fieldAliases', {'Trecho': 'Trecho', 'Calado': 'Calado (m) ', });
lyr_CanaisdeAcessoMdioPrazo_6.set('fieldAliases', {'Trecho': 'Trecho', 'Calado': 'Calado (m) ', });
lyr_CanaisdeAcessoCurtoPrazo_7.set('fieldAliases', {'Trecho': 'Trecho', 'Calado': 'Calado (m) ', });
lyr_CanaisdeAcessoSituaoAtual_8.set('fieldAliases', {'Trecho': 'Trecho', 'Calado': 'Calado (m) ', });
lyr_AcessosHidroviriosExternos_9.set('fieldAliases', {'Calado': 'Calado (m) ', 'Nome': 'Nome', 'Atualiz': 'Atualização', });
lyr_AcessosFerroviriosInternosMdioPrazo_10.set('fieldAliases', {'Nome': 'Nome', 'Operador': 'Operador', });
lyr_AcessosRodoviriosInternosLongoPrazo_11.set('fieldAliases', {'Ident': 'Identificação ', 'N_Pistas': 'Número de Pistas de Rolamento ', });
lyr_AcessosRodoviriosInternosMdioPrazo_12.set('fieldAliases', {'Ident': 'Identificação ', 'N_Pistas': 'Número de Pistas de Rolamento ', });
lyr_AcessosRodoviriosInternosCurtoPrazo_13.set('fieldAliases', {'Ident': 'Identificação ', 'N_Pista': 'Número de Pistas de Rolamento ', });
lyr_AcessosRodoviriosInternosSituaoAtual_14.set('fieldAliases', {'Ident': 'Identificação ', 'N_Pistas': 'Número de Pistas de Rolamento ', });
lyr_AcessosRodoviriosExternos_15.set('fieldAliases', {'Jurisdicao': 'Jurisdição ', 'Nome': 'Nome', 'Sigla': 'Sigla', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_16.set('fieldAliases', {'Área': 'Área (m²) ', 'Nome': 'Nome', 'T_explo': 'Tipo de Exploração ', 'Util_área': 'Utilização Atual da Área ', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_17.set('fieldAliases', {'Área': 'Área (m²) ', 'Nome': 'Nome', 'T_explo': 'Tipo de Exploração ', 'Util_área': 'Utilização Atual da Área ', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_18.set('fieldAliases', {'Área': 'Área (m²) ', 'Nome': 'Nome', 'T_explo': 'Tipo de Exploração ', 'Util_área': 'Utilização Atual da Área ', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_19.set('fieldAliases', {'T_Cessao': 'Tipo de Cessão ', 'D_Inicio': 'Data de Início do Contrato ', 'D_Term': 'Data de Término do Contrato ', 'A_Desenv': 'Atividade Desenvolvida ', 'Nome': 'Nome', 'Respons': 'Responsável ', 'Área': 'Área (m²) ', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_20.set('fieldAliases', {'T_Cessao': 'Tipo de Cessão ', 'D_Inicio': 'Data de Início do Contrato ', 'D_Term': 'Data de Término do Contrato ', 'A_Desenv': 'Atividade Desenvolvida ', 'Nome': 'Nome', 'Respons': 'Responsável ', 'Área': 'Área (m²) ', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_21.set('fieldAliases', {'T_Cessao': 'Tipo de Cessão ', 'D_Inicio': 'Data de Início do Contrato ', 'D_Term': 'Data de Término do Contrato ', 'A_Desenv': 'Atividade Desenvolvida ', 'Nome': 'Nome', 'Área': 'Área (m²) ', 'Respons': 'Responsável ', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_22.set('fieldAliases', {'T_Cessao': 'Tipo de Cessão ', 'D_Inicio': 'Data de Início do Contrato ', 'D_Term': 'Data de Término do Contrato ', 'A_Desenv': 'Atividade Desenvolvida ', 'Nome': 'Nome', 'Área': 'Área (m²) ', 'Respons': 'Responsável ', });
lyr_reasNoAfetassOperaesPorturiasLongoPrazo_23.set('fieldAliases', {'Área': 'Área (m²) ', 'Nome': 'Nome', 'Destinacao': 'Destinação ', });
lyr_reasNoAfetassOperaesPorturiasMdioPrazo_24.set('fieldAliases', {'Área': 'Área (m²) ', 'Nome': 'Nome', 'Destinacao': 'Destinação ', });
lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_25.set('fieldAliases', {'Área': 'Área (m²) ', 'Nome': 'Nome', 'Destinacao': 'Destinação ', });
lyr_reasNoAfetassOperaesPorturiasSituaoAtual_26.set('fieldAliases', {'Destinacao': 'Destinação ', 'Área': 'Área (m²) ', 'Nome': 'Nome', });
lyr_reaseInstalaesAlfandegadas_27.set('fieldAliases', {'Name': 'Nome', 'Inst_Legal': 'Instrumento Legal ', });
lyr_AcostagemLongoPrazo_28.set('fieldAliases', {'Id_Cais': 'Identificador do Cais ', 'Id_Berco': 'Identificador do Berço ', 'C_Const': 'Características Construtivas ', 'Comp': 'Comprimento (m) ', 'Profund': 'Profundidade (m) ', 'Calado': 'Calado (m) ', 'P_Carga': 'Perfil de Carga ', });
lyr_AcostagemMdioPrazo_29.set('fieldAliases', {'Id_Cais': 'Identificador do Cais ', 'Id_Berco': 'Identificador do Berço ', 'C_Const': 'Características Construtivas ', 'Comp': 'Comprimento (m) ', 'Profund': 'Profundidade (m) ', 'Calado': 'Calado (m) ', 'P_Carga': 'Perfil de Carga ', });
lyr_AcostagemCurtoPrazo_30.set('fieldAliases', {'Id_Cais': 'Identificador do Cais ', 'Id_Berco': 'Identificador do Berço ', 'C_Const': 'Características Construtivas ', 'Comp': 'Comprimento (m) ', 'Profund': 'Profundidade (m) ', 'Calado': 'Calado (m) ', 'P_Carga': 'Perfil de Carga ', });
lyr_AcostagemSituaoAtual_31.set('fieldAliases', {'Id_Cais': 'Identificador do Cais ', 'Id_Berco': 'Identificador do Berço ', 'C_Const': 'Características Construtivas ', 'Comp': 'Comprimento (m) ', 'Profund': 'Profundidade (m) ', 'Calado': 'Calado (m) ', 'P_Carga': 'Perfil de Carga ', });
lyr_ArmazenagemLongoPrazo_32.set('fieldAliases', {'T_instal': 'Tipo da Instalação ', 'Volume': 'Volume (m³) ', 'Área': 'Área (m²) ', 'Capacidade': 'Capacidade', });
lyr_ArmazenagemMdioPrazo_33.set('fieldAliases', {'T_instal': 'Tipo da Instalação ', 'Volume': 'Volume (m³) ', 'Área': 'Área (m²) ', 'Capacidade': 'Capacidade', });
lyr_ArmazenagemCurtoPrazo_34.set('fieldAliases', {'T_instal': 'Tipo da Instalação ', 'Volume': 'Volume (m³) ', 'Área': 'Área (m²) ', 'Capacidade': 'Capacidade', });
lyr_ArmazenagemSituaoAtual_35.set('fieldAliases', {'T_instal': 'Tipo da Instalação ', 'Volume': 'Volume (m³) ', 'Área': 'Área (m²) ', 'Capacidade': 'Capacidade', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_36.set('fieldAliases', {'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'Nome': 'Nome', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_37.set('fieldAliases', {'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'Nome': 'Nome', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_38.set('fieldAliases', {'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'Nome': 'Nome', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_39.set('fieldAliases', {'Area': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'Nome': 'Nome', });
lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_40.set('fieldAliases', {'Arrend': 'Arrendatário ', 'N_Cont': 'Número do Contrato ', 'D_Inicio': 'Data Início do Contrato ', 'D_Term': 'Data do Término do Contrato ', 'P_Prorrog': 'Possibilidade de Prorrogação ', 'Perfil': 'Perfil de Carga ', 'Área': 'Área (m²) ', });
lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_41.set('fieldAliases', {'Arrend': 'Arrendatário ', 'N_Cont': 'Número do Contrato ', 'D_Inicio': 'Data Início do Contrato ', 'D_Term': 'Data do Término do Contrato ', 'P_Prorrog': 'Possibilidade de Prorrogação ', 'Perfil': 'Perfil de Carga ', 'Área': 'Área (m²) ', });
lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_42.set('fieldAliases', {'Arrend': 'Arrendatário ', 'N_Cont': 'Número do Contrato ', 'D_Inicio': 'Data Início do Contrato ', 'D_Term': 'Data do Término do Contrato ', 'P_Prorrog': 'Possibilidade de Prorrogação ', 'Perfil': 'Perfil de Carga ', 'Área': 'Área (m²) ', });
lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_43.set('fieldAliases', {'Arrend': 'Arrendatário ', 'N_Cont': 'Número do Contrato ', 'D_Inicio': 'Data Início do Contrato ', 'D_Term': 'Data do Término do Contrato ', 'P_Prorrog': 'Possibilidade de Prorrogação ', 'Perfil': 'Perfil de Carga ', 'Área': 'Área (m²) ', });
lyr_GranelLquidoGasoso_44.set('fieldAliases', {'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Nome': 'Nome', 'Tipo de In': 'Tipo de Instalação ', });
lyr_GranelSlidoLquido_45.set('fieldAliases', {'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Nome': 'Nome', 'Tipo de In': 'Tipo de Instalação ', });
lyr_GranelSlido_46.set('fieldAliases', {'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Nome': 'Nome', 'Tipo de In': 'Tipo de Instalação ', });
lyr_GranelLquido_47.set('fieldAliases', {'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Nome': 'Nome', 'Tipo de In': 'Tipo de Instalação ', });
lyr_CargaConteinerizada_48.set('fieldAliases', {'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Nome': 'Nome', 'Tipo de In': 'Tipo de Instalação ', });
lyr_MltiploUso_49.set('fieldAliases', {'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Nome': 'Nome', 'Tipo de In': 'Tipo de Instalação ', });
lyr_GranelLquidoGasoso_50.set('fieldAliases', {'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Nome': 'Nome', 'Tipo de In': 'Tipo de Instalação ', });
lyr_GranelSlidoLquido_51.set('fieldAliases', {'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Nome': 'Nome', 'Tipo de In': 'Tipo de Instalação ', });
lyr_GranelSlido_52.set('fieldAliases', {'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Nome': 'Nome', 'Tipo de In': 'Tipo de Instalação ', });
lyr_GranelLquido_53.set('fieldAliases', {'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Nome': 'Nome', 'Tipo de In': 'Tipo de Instalação ', });
lyr_CargaConteinerizada_54.set('fieldAliases', {'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Nome': 'Nome', 'Tipo de In': 'Tipo de Instalação ', });
lyr_MltiploUso_55.set('fieldAliases', {'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Nome': 'Nome', 'Tipo de In': 'Tipo de Instalação ', });
lyr_GranelLquidoGasoso_56.set('fieldAliases', {'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Nome': 'Nome', 'Tipo de In': 'Tipo de Instalação ', });
lyr_GranelSlidoLquido_57.set('fieldAliases', {'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Nome': 'Nome', 'Tipo de In': 'Tipo de Instalação ', });
lyr_GranelSlido_58.set('fieldAliases', {'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Nome': 'Nome', 'Tipo de In': 'Tipo de Instalação ', });
lyr_GranelLquido_59.set('fieldAliases', {'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Nome': 'Nome', 'Tipo de In': 'Tipo de Instalação ', });
lyr_MltipoUso_60.set('fieldAliases', {'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Nome': 'Nome', 'Tipo de In': 'Tipo de Instalação ', });
lyr_GranelLquidoGasoso_61.set('fieldAliases', {'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Nome': 'Nome', });
lyr_GranelSlidoLquido_62.set('fieldAliases', {'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Nome': 'Nome', });
lyr_GranelLquido_63.set('fieldAliases', {'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Nome': 'Nome', });
lyr_CargaConteinerizada_64.set('fieldAliases', {'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Nome': 'Nome', });
lyr_MltiploUso_65.set('fieldAliases', {'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Nome': 'Nome', });
lyr_reasAfetassOperaesPorturiasLongoPrazo_66.set('fieldAliases', {'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'Nome': 'Nome', 'T_instal': 'Tipo de Instalação', });
lyr_reasAfetassOperaesPorturiasMdioPrazo_67.set('fieldAliases', {'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'Nome': 'Nome', 'T_instal': 'Tipo de Instalação', });
lyr_reasAfetassOperaesPorturiasCurtoPrazo_68.set('fieldAliases', {'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'Nome': 'Nome', 'T_instal': 'Tipo de Instalação', });
lyr_reasAfetassOperaesPorturiasSituaoAtual_69.set('fieldAliases', {'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', 'Nome': 'Nome', });
lyr_PoligonaldareadoPortoOrganizadodeViladoConde_70.set('fieldAliases', {'Ins_Legal': 'Instrumento Legal ', 'Anexo': 'Anexo', });
lyr_FundeadourosLongoPrazo_1.set('fieldImages', {'N_Ident': 'TextEdit', 'Calado': 'TextEdit', 'Funcao': 'TextEdit', });
lyr_FundeadourosMdioPrazo_2.set('fieldImages', {'N_Ident': 'TextEdit', 'Calado': 'TextEdit', 'Funcao': 'TextEdit', });
lyr_FundeadourosCurtoPrazo_3.set('fieldImages', {'N_Ident': 'TextEdit', 'Calado': 'TextEdit', 'Funcao': 'TextEdit', });
lyr_FundeadourosSituaoAtual_4.set('fieldImages', {'N_Ident': 'TextEdit', 'Calado': 'TextEdit', 'Funcao': 'TextEdit', });
lyr_CanaisdeAcessoLongoPrazo_5.set('fieldImages', {'Trecho': 'TextEdit', 'Calado': 'TextEdit', });
lyr_CanaisdeAcessoMdioPrazo_6.set('fieldImages', {'Trecho': 'TextEdit', 'Calado': 'TextEdit', });
lyr_CanaisdeAcessoCurtoPrazo_7.set('fieldImages', {'Trecho': 'TextEdit', 'Calado': 'TextEdit', });
lyr_CanaisdeAcessoSituaoAtual_8.set('fieldImages', {'Trecho': 'TextEdit', 'Calado': 'TextEdit', });
lyr_AcessosHidroviriosExternos_9.set('fieldImages', {'Calado': 'TextEdit', 'Nome': 'TextEdit', 'Atualiz': 'TextEdit', });
lyr_AcessosFerroviriosInternosMdioPrazo_10.set('fieldImages', {'Nome': 'TextEdit', 'Operador': 'TextEdit', });
lyr_AcessosRodoviriosInternosLongoPrazo_11.set('fieldImages', {'Ident': 'TextEdit', 'N_Pistas': 'TextEdit', });
lyr_AcessosRodoviriosInternosMdioPrazo_12.set('fieldImages', {'Ident': 'TextEdit', 'N_Pistas': 'TextEdit', });
lyr_AcessosRodoviriosInternosCurtoPrazo_13.set('fieldImages', {'Ident': 'TextEdit', 'N_Pista': 'TextEdit', });
lyr_AcessosRodoviriosInternosSituaoAtual_14.set('fieldImages', {'Ident': 'TextEdit', 'N_Pistas': 'TextEdit', });
lyr_AcessosRodoviriosExternos_15.set('fieldImages', {'Jurisdicao': 'TextEdit', 'Nome': 'TextEdit', 'Sigla': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_16.set('fieldImages', {'Área': 'TextEdit', 'Nome': 'TextEdit', 'T_explo': 'TextEdit', 'Util_área': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_17.set('fieldImages', {'Área': 'TextEdit', 'Nome': 'TextEdit', 'T_explo': 'TextEdit', 'Util_área': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_18.set('fieldImages', {'Área': 'TextEdit', 'Nome': 'TextEdit', 'T_explo': 'TextEdit', 'Util_área': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_19.set('fieldImages', {'T_Cessao': 'TextEdit', 'D_Inicio': 'DateTime', 'D_Term': 'DateTime', 'A_Desenv': 'TextEdit', 'Nome': 'TextEdit', 'Respons': 'TextEdit', 'Área': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_20.set('fieldImages', {'T_Cessao': 'TextEdit', 'D_Inicio': 'DateTime', 'D_Term': 'DateTime', 'A_Desenv': 'TextEdit', 'Nome': 'TextEdit', 'Respons': 'TextEdit', 'Área': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_21.set('fieldImages', {'T_Cessao': 'TextEdit', 'D_Inicio': 'DateTime', 'D_Term': 'DateTime', 'A_Desenv': 'TextEdit', 'Nome': 'TextEdit', 'Área': 'TextEdit', 'Respons': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_22.set('fieldImages', {'T_Cessao': 'TextEdit', 'D_Inicio': 'DateTime', 'D_Term': 'DateTime', 'A_Desenv': 'TextEdit', 'Nome': 'TextEdit', 'Área': 'TextEdit', 'Respons': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasLongoPrazo_23.set('fieldImages', {'Área': 'TextEdit', 'Nome': 'TextEdit', 'Destinacao': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasMdioPrazo_24.set('fieldImages', {'Área': 'TextEdit', 'Nome': 'TextEdit', 'Destinacao': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_25.set('fieldImages', {'Área': 'TextEdit', 'Nome': 'TextEdit', 'Destinacao': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasSituaoAtual_26.set('fieldImages', {'Destinacao': 'TextEdit', 'Área': 'TextEdit', 'Nome': 'TextEdit', });
lyr_reaseInstalaesAlfandegadas_27.set('fieldImages', {'Name': 'TextEdit', 'Inst_Legal': 'TextEdit', });
lyr_AcostagemLongoPrazo_28.set('fieldImages', {'Id_Cais': 'TextEdit', 'Id_Berco': 'TextEdit', 'C_Const': 'TextEdit', 'Comp': 'TextEdit', 'Profund': 'TextEdit', 'Calado': 'TextEdit', 'P_Carga': 'TextEdit', });
lyr_AcostagemMdioPrazo_29.set('fieldImages', {'Id_Cais': 'TextEdit', 'Id_Berco': 'TextEdit', 'C_Const': 'TextEdit', 'Comp': 'TextEdit', 'Profund': 'TextEdit', 'Calado': 'TextEdit', 'P_Carga': 'TextEdit', });
lyr_AcostagemCurtoPrazo_30.set('fieldImages', {'Id_Cais': 'TextEdit', 'Id_Berco': 'TextEdit', 'C_Const': 'TextEdit', 'Comp': 'TextEdit', 'Profund': 'TextEdit', 'Calado': 'TextEdit', 'P_Carga': 'TextEdit', });
lyr_AcostagemSituaoAtual_31.set('fieldImages', {'Id_Cais': 'TextEdit', 'Id_Berco': 'TextEdit', 'C_Const': 'TextEdit', 'Comp': 'TextEdit', 'Profund': 'TextEdit', 'Calado': 'TextEdit', 'P_Carga': 'TextEdit', });
lyr_ArmazenagemLongoPrazo_32.set('fieldImages', {'T_instal': 'TextEdit', 'Volume': 'TextEdit', 'Área': 'TextEdit', 'Capacidade': 'TextEdit', });
lyr_ArmazenagemMdioPrazo_33.set('fieldImages', {'T_instal': 'TextEdit', 'Volume': 'TextEdit', 'Área': 'TextEdit', 'Capacidade': 'TextEdit', });
lyr_ArmazenagemCurtoPrazo_34.set('fieldImages', {'T_instal': 'TextEdit', 'Volume': 'TextEdit', 'Área': 'TextEdit', 'Capacidade': 'TextEdit', });
lyr_ArmazenagemSituaoAtual_35.set('fieldImages', {'T_instal': 'TextEdit', 'Volume': 'TextEdit', 'Área': 'TextEdit', 'Capacidade': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_36.set('fieldImages', {'Área': 'TextEdit', 'Perfil': 'TextEdit', 'Nome': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_37.set('fieldImages', {'Área': 'TextEdit', 'Perfil': 'TextEdit', 'Nome': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_38.set('fieldImages', {'Área': 'TextEdit', 'Perfil': 'TextEdit', 'Nome': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_39.set('fieldImages', {'Area': 'TextEdit', 'Perfil': 'TextEdit', 'Nome': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_40.set('fieldImages', {'Arrend': 'TextEdit', 'N_Cont': 'TextEdit', 'D_Inicio': 'DateTime', 'D_Term': 'DateTime', 'P_Prorrog': 'TextEdit', 'Perfil': 'TextEdit', 'Área': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_41.set('fieldImages', {'Arrend': 'TextEdit', 'N_Cont': 'TextEdit', 'D_Inicio': 'DateTime', 'D_Term': 'DateTime', 'P_Prorrog': 'TextEdit', 'Perfil': 'TextEdit', 'Área': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_42.set('fieldImages', {'Arrend': 'TextEdit', 'N_Cont': 'TextEdit', 'D_Inicio': 'DateTime', 'D_Term': 'DateTime', 'P_Prorrog': 'TextEdit', 'Perfil': 'TextEdit', 'Área': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_43.set('fieldImages', {'Arrend': 'TextEdit', 'N_Cont': 'TextEdit', 'D_Inicio': 'DateTime', 'D_Term': 'DateTime', 'P_Prorrog': 'TextEdit', 'Perfil': 'TextEdit', 'Área': 'TextEdit', });
lyr_GranelLquidoGasoso_44.set('fieldImages', {'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Nome': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_GranelSlidoLquido_45.set('fieldImages', {'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Nome': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_GranelSlido_46.set('fieldImages', {'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Nome': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_GranelLquido_47.set('fieldImages', {'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Nome': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_CargaConteinerizada_48.set('fieldImages', {'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Nome': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_MltiploUso_49.set('fieldImages', {'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Nome': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_GranelLquidoGasoso_50.set('fieldImages', {'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Nome': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_GranelSlidoLquido_51.set('fieldImages', {'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Nome': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_GranelSlido_52.set('fieldImages', {'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Nome': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_GranelLquido_53.set('fieldImages', {'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Nome': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_CargaConteinerizada_54.set('fieldImages', {'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Nome': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_MltiploUso_55.set('fieldImages', {'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Nome': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_GranelLquidoGasoso_56.set('fieldImages', {'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Nome': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_GranelSlidoLquido_57.set('fieldImages', {'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Nome': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_GranelSlido_58.set('fieldImages', {'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Nome': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_GranelLquido_59.set('fieldImages', {'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Nome': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_MltipoUso_60.set('fieldImages', {'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Nome': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_GranelLquidoGasoso_61.set('fieldImages', {'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Nome': 'TextEdit', });
lyr_GranelSlidoLquido_62.set('fieldImages', {'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Nome': 'TextEdit', });
lyr_GranelLquido_63.set('fieldImages', {'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Nome': 'TextEdit', });
lyr_CargaConteinerizada_64.set('fieldImages', {'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Nome': 'TextEdit', });
lyr_MltiploUso_65.set('fieldImages', {'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Nome': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasLongoPrazo_66.set('fieldImages', {'Área': 'TextEdit', 'Perfil': 'TextEdit', 'Nome': 'TextEdit', 'T_instal': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasMdioPrazo_67.set('fieldImages', {'Área': 'TextEdit', 'Perfil': 'TextEdit', 'Nome': 'TextEdit', 'T_instal': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasCurtoPrazo_68.set('fieldImages', {'Área': 'TextEdit', 'Perfil': 'TextEdit', 'Nome': 'TextEdit', 'T_instal': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasSituaoAtual_69.set('fieldImages', {'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', 'Nome': 'TextEdit', });
lyr_PoligonaldareadoPortoOrganizadodeViladoConde_70.set('fieldImages', {'Ins_Legal': 'TextEdit', 'Anexo': 'TextEdit', });
lyr_FundeadourosLongoPrazo_1.set('fieldLabels', {'N_Ident': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Funcao': 'inline label - visible with data', });
lyr_FundeadourosMdioPrazo_2.set('fieldLabels', {'N_Ident': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Funcao': 'inline label - visible with data', });
lyr_FundeadourosCurtoPrazo_3.set('fieldLabels', {'N_Ident': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Funcao': 'inline label - visible with data', });
lyr_FundeadourosSituaoAtual_4.set('fieldLabels', {'N_Ident': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Funcao': 'inline label - visible with data', });
lyr_CanaisdeAcessoLongoPrazo_5.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_CanaisdeAcessoMdioPrazo_6.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_CanaisdeAcessoCurtoPrazo_7.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_CanaisdeAcessoSituaoAtual_8.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_AcessosHidroviriosExternos_9.set('fieldLabels', {'Calado': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Atualiz': 'inline label - visible with data', });
lyr_AcessosFerroviriosInternosMdioPrazo_10.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Operador': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosLongoPrazo_11.set('fieldLabels', {'Ident': 'inline label - visible with data', 'N_Pistas': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosMdioPrazo_12.set('fieldLabels', {'Ident': 'inline label - visible with data', 'N_Pistas': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosCurtoPrazo_13.set('fieldLabels', {'Ident': 'inline label - visible with data', 'N_Pista': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosSituaoAtual_14.set('fieldLabels', {'Ident': 'inline label - visible with data', 'N_Pistas': 'inline label - visible with data', });
lyr_AcessosRodoviriosExternos_15.set('fieldLabels', {'Jurisdicao': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Sigla': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_16.set('fieldLabels', {'Área': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'T_explo': 'inline label - visible with data', 'Util_área': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_17.set('fieldLabels', {'Área': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'T_explo': 'inline label - visible with data', 'Util_área': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_18.set('fieldLabels', {'Área': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'T_explo': 'inline label - visible with data', 'Util_área': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_19.set('fieldLabels', {'T_Cessao': 'inline label - visible with data', 'D_Inicio': 'inline label - visible with data', 'D_Term': 'inline label - visible with data', 'A_Desenv': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Respons': 'inline label - visible with data', 'Área': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_20.set('fieldLabels', {'T_Cessao': 'inline label - visible with data', 'D_Inicio': 'inline label - visible with data', 'D_Term': 'inline label - visible with data', 'A_Desenv': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Respons': 'inline label - visible with data', 'Área': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_21.set('fieldLabels', {'T_Cessao': 'inline label - visible with data', 'D_Inicio': 'inline label - visible with data', 'D_Term': 'inline label - visible with data', 'A_Desenv': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Respons': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_22.set('fieldLabels', {'T_Cessao': 'inline label - visible with data', 'D_Inicio': 'inline label - visible with data', 'D_Term': 'inline label - visible with data', 'A_Desenv': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Respons': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasLongoPrazo_23.set('fieldLabels', {'Área': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Destinacao': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasMdioPrazo_24.set('fieldLabels', {'Área': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Destinacao': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_25.set('fieldLabels', {'Área': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Destinacao': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasSituaoAtual_26.set('fieldLabels', {'Destinacao': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_reaseInstalaesAlfandegadas_27.set('fieldLabels', {'Name': 'inline label - visible with data', 'Inst_Legal': 'inline label - visible with data', });
lyr_AcostagemLongoPrazo_28.set('fieldLabels', {'Id_Cais': 'inline label - visible with data', 'Id_Berco': 'inline label - visible with data', 'C_Const': 'inline label - visible with data', 'Comp': 'inline label - visible with data', 'Profund': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'P_Carga': 'inline label - visible with data', });
lyr_AcostagemMdioPrazo_29.set('fieldLabels', {'Id_Cais': 'inline label - visible with data', 'Id_Berco': 'inline label - visible with data', 'C_Const': 'inline label - visible with data', 'Comp': 'inline label - visible with data', 'Profund': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'P_Carga': 'inline label - visible with data', });
lyr_AcostagemCurtoPrazo_30.set('fieldLabels', {'Id_Cais': 'inline label - visible with data', 'Id_Berco': 'inline label - visible with data', 'C_Const': 'inline label - visible with data', 'Comp': 'inline label - visible with data', 'Profund': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'P_Carga': 'inline label - visible with data', });
lyr_AcostagemSituaoAtual_31.set('fieldLabels', {'Id_Cais': 'inline label - visible with data', 'Id_Berco': 'inline label - visible with data', 'C_Const': 'inline label - visible with data', 'Comp': 'inline label - visible with data', 'Profund': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'P_Carga': 'inline label - visible with data', });
lyr_ArmazenagemLongoPrazo_32.set('fieldLabels', {'T_instal': 'inline label - visible with data', 'Volume': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', });
lyr_ArmazenagemMdioPrazo_33.set('fieldLabels', {'T_instal': 'inline label - visible with data', 'Volume': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', });
lyr_ArmazenagemCurtoPrazo_34.set('fieldLabels', {'T_instal': 'inline label - visible with data', 'Volume': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', });
lyr_ArmazenagemSituaoAtual_35.set('fieldLabels', {'T_instal': 'inline label - visible with data', 'Volume': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_36.set('fieldLabels', {'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_37.set('fieldLabels', {'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_38.set('fieldLabels', {'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_39.set('fieldLabels', {'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_40.set('fieldLabels', {'Arrend': 'inline label - visible with data', 'N_Cont': 'inline label - visible with data', 'D_Inicio': 'inline label - visible with data', 'D_Term': 'inline label - visible with data', 'P_Prorrog': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Área': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_41.set('fieldLabels', {'Arrend': 'inline label - visible with data', 'N_Cont': 'inline label - visible with data', 'D_Inicio': 'inline label - visible with data', 'D_Term': 'inline label - visible with data', 'P_Prorrog': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Área': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_42.set('fieldLabels', {'Arrend': 'inline label - visible with data', 'N_Cont': 'inline label - visible with data', 'D_Inicio': 'inline label - visible with data', 'D_Term': 'inline label - visible with data', 'P_Prorrog': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Área': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_43.set('fieldLabels', {'Arrend': 'inline label - visible with data', 'N_Cont': 'inline label - visible with data', 'D_Inicio': 'inline label - visible with data', 'D_Term': 'inline label - visible with data', 'P_Prorrog': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Área': 'inline label - visible with data', });
lyr_GranelLquidoGasoso_44.set('fieldLabels', {'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_GranelSlidoLquido_45.set('fieldLabels', {'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_GranelSlido_46.set('fieldLabels', {'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_GranelLquido_47.set('fieldLabels', {'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_CargaConteinerizada_48.set('fieldLabels', {'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_MltiploUso_49.set('fieldLabels', {'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_GranelLquidoGasoso_50.set('fieldLabels', {'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_GranelSlidoLquido_51.set('fieldLabels', {'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_GranelSlido_52.set('fieldLabels', {'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_GranelLquido_53.set('fieldLabels', {'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_CargaConteinerizada_54.set('fieldLabels', {'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_MltiploUso_55.set('fieldLabels', {'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_GranelLquidoGasoso_56.set('fieldLabels', {'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_GranelSlidoLquido_57.set('fieldLabels', {'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_GranelSlido_58.set('fieldLabels', {'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_GranelLquido_59.set('fieldLabels', {'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_MltipoUso_60.set('fieldLabels', {'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_GranelLquidoGasoso_61.set('fieldLabels', {'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_GranelSlidoLquido_62.set('fieldLabels', {'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_GranelLquido_63.set('fieldLabels', {'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_CargaConteinerizada_64.set('fieldLabels', {'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_MltiploUso_65.set('fieldLabels', {'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasLongoPrazo_66.set('fieldLabels', {'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'T_instal': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasMdioPrazo_67.set('fieldLabels', {'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'T_instal': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasCurtoPrazo_68.set('fieldLabels', {'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'T_instal': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasSituaoAtual_69.set('fieldLabels', {'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_PoligonaldareadoPortoOrganizadodeViladoConde_70.set('fieldLabels', {'Ins_Legal': 'inline label - visible with data', 'Anexo': 'inline label - visible with data', });
lyr_PoligonaldareadoPortoOrganizadodeViladoConde_70.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});