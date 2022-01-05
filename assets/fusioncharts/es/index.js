import FusionCharts from"../core/fc-backward-compatibility";import moduleDependencies from"./module-dependencies";import loadScript from"@fusioncharts/core/src/script-loader";import defaultFeatures from"../features";import{pluck,pluckNumber}from"@fusioncharts/core/src/lib";FusionCharts.addDep(defaultFeatures);let isChartAPI=component=>component.getType()==="chartAPI";const getMetaSentence=function(){let metaCache={};return function(compositeArg){let composite=compositeArg;composite=composite&&composite.replace(/(^\s*)|(\s*$)/g,"")||"";return metaCache[composite]||(metaCache[composite]={key:composite,subject:composite.replace(/[^\/]*?$/gi,""),predicate:composite.replace(/^.*\//gi,"")})}}();function sanitiseChartType(type=""){if(type===""){return type}return type.replace(/^[\s\S]*\//gi,"").replace(/\?/g,"%3F").replace(/\#/g,"%23").replace(/\:/g,"%3A")}function getDependentFileName(typeArg){let coreOpt=FusionCharts.options,type=typeArg,metaSentence;metaSentence=getMetaSentence(type);type=sanitiseChartType(metaSentence.predicate);return metaSentence.subject+coreOpt.html5ScriptNamePrefix+type+coreOpt.html5ScriptNameSuffix}function getDynamicImport(type){switch(moduleDependencies[type]){case"charts":return import(/* webpackChunkName: "fusioncharts.charts" */"../charts");case"timeseries":return import(/* webpackChunkName: "fusioncharts.timeseries" */"../timeseries");case"powercharts":return import(/* webpackChunkName: "fusioncharts.powercharts" */"../powercharts");case"widgets":return import(/* webpackChunkName: "fusioncharts.widgets" */"../widgets");case"zoomline":return import(/* webpackChunkName: "fusioncharts.zoomline" */"../zoomline");case"gantt":return import(/* webpackChunkName: "fusioncharts.gantt" */"../gantt");case"treemap":return import(/* webpackChunkName: "fusioncharts.treemap" */"../treemap");case"zoomscatter":return import(/* webpackChunkName: "fusioncharts.zoomscatter" */"../zoomscatter");case"msstackedcolumn2dsplinedy":return import(
/* webpackChunkName: "fusioncharts.msstackedcolumn2dsplinedy" */
"../msstackedcolumn2dsplinedy");case"overlappedbar2d":return import(/* webpackChunkName: "fusioncharts.overlappedbar2d" */"../overlappedbar2d");case"overlappedcolumn2d":return import(
/* webpackChunkName: "fusioncharts.overlappedcolumn2d" */
"../overlappedcolumn2d/");default:return loadScript(`${FusionCharts.getScriptBaseURI()}${getDependentFileName(type)}`)}}FusionCharts.addEventListener("resourceRequested",event=>{let chartObj=event.sender,type=chartObj.chartType(),sourcePath=chartObj.options.chartTypeSourcePath||"";if(!(FusionCharts.getDep(type,"chartapi")||FusionCharts.getDep(type,"maps"))){FusionCharts.addDep({name:type,type:"dependency",extension:getDynamicImport(sourcePath+type)})}});FusionCharts.addEventListener("preconfigure",event=>{let sender=event.sender;if(isChartAPI(sender)){let dataSource=sender.getFromEnv("dataSource");if(dataSource&&dataSource.chart&&pluck(dataSource.chart.exportenabled,0)){!FusionCharts.getDep("ExcelExport")&&FusionCharts.addDep({name:"ExcelExport",extension:import(/* webpackChunkName: "fusioncharts.excelexport" */"../features/excelexport").then(({default:exportJSONtoEXCEL})=>{FusionCharts.addDep(exportJSONtoEXCEL)})})}if(dataSource&&dataSource.chart&&pluckNumber(dataSource.chart.accessibility,0)){!FusionCharts.getDep("AccessibilityExtension")&&FusionCharts.addDep({name:"AccessibilityExtension",extension:import(/* webpackChunkName: "fusioncharts.accessibility" */"../accessibility").then(({default:AccessibilityExtension})=>{FusionCharts.addDep(AccessibilityExtension)})})}}});if(window&&typeof define==="function"&&define.amd){window.FusionCharts=FusionCharts}export default FusionCharts;