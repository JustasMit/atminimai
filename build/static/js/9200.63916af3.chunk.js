"use strict";(self.webpackChunkvilniausdnr=self.webpackChunkvilniausdnr||[]).push([[9200],{89200:function(e,t,l){l.r(t),l.d(t,{default:function(){return M}});var r=l(37762),n=l(1413),o=l(15671),i=l(43144),a=l(60136),s=l(29388),u=l(27366),p=(l(59486),l(76200)),c=l(10064),y=l(97642),v=l(643),f=l(35995),d=l(49861),h=(l(63780),l(93169),l(25243),l(38511)),m=l(69912),w=l(31201),b=l(74184),Z=l(6693),g=l(6061),T=l(29598),_=l(71684),C=l(56811),R=l(59068),j=l(22824),S=l(4961),k=l(53866),x=l(78952),P=l(7882),I=function(e){(0,a.Z)(l,e);var t=(0,s.Z)(l);function l(){var e;(0,o.Z)(this,l);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).copyright="",e.fullExtent=new k.Z(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,x.Z.WebMercator),e.legendEnabled=!1,e.isReference=null,e.popupEnabled=!1,e.spatialReference=x.Z.WebMercator,e.subDomains=null,e.tileInfo=new j.Z({size:[256,256],dpi:96,format:"png8",compressionQuality:0,origin:new P.Z({x:-20037508.342787,y:20037508.342787,spatialReference:x.Z.WebMercator}),spatialReference:x.Z.WebMercator,lods:[new R.Z({level:0,scale:591657527.591555,resolution:156543.033928}),new R.Z({level:1,scale:295828763.795777,resolution:78271.5169639999}),new R.Z({level:2,scale:147914381.897889,resolution:39135.7584820001}),new R.Z({level:3,scale:73957190.948944,resolution:19567.8792409999}),new R.Z({level:4,scale:36978595.474472,resolution:9783.93962049996}),new R.Z({level:5,scale:18489297.737236,resolution:4891.96981024998}),new R.Z({level:6,scale:9244648.868618,resolution:2445.98490512499}),new R.Z({level:7,scale:4622324.434309,resolution:1222.99245256249}),new R.Z({level:8,scale:2311162.217155,resolution:611.49622628138}),new R.Z({level:9,scale:1155581.108577,resolution:305.748113140558}),new R.Z({level:10,scale:577790.554289,resolution:152.874056570411}),new R.Z({level:11,scale:288895.277144,resolution:76.4370282850732}),new R.Z({level:12,scale:144447.638572,resolution:38.2185141425366}),new R.Z({level:13,scale:72223.819286,resolution:19.1092570712683}),new R.Z({level:14,scale:36111.909643,resolution:9.55462853563415}),new R.Z({level:15,scale:18055.954822,resolution:4.77731426794937}),new R.Z({level:16,scale:9027.977411,resolution:2.38865713397468}),new R.Z({level:17,scale:4513.988705,resolution:1.19432856685505}),new R.Z({level:18,scale:2256.994353,resolution:.597164283559817}),new R.Z({level:19,scale:1128.497176,resolution:.298582141647617}),new R.Z({level:20,scale:564.248588,resolution:.14929107082380833}),new R.Z({level:21,scale:282.124294,resolution:.07464553541190416}),new R.Z({level:22,scale:141.062147,resolution:.03732276770595208}),new R.Z({level:23,scale:70.5310735,resolution:.01866138385297604})]}),e.type="web-tile",e.urlTemplate=null,e.wmtsInfo=null,e}return(0,i.Z)(l,[{key:"normalizeCtorArgs",value:function(e,t){return"string"==typeof e?(0,n.Z)({urlTemplate:e},t):e}},{key:"load",value:function(e){var t=this,l=this.loadFromPortal({supportedTypes:["WMTS"]},e).then((function(){var e="";if(t.urlTemplate)if(t.spatialReference.equals(t.tileInfo.spatialReference)){var l=new f.R9(t.urlTemplate);t.subDomains&&t.subDomains.length>0||-1===l.authority.indexOf("{subDomain}")||(e="is missing 'subDomains' property")}else e="spatialReference must match tileInfo.spatialReference";else e="is missing the required 'urlTemplate' property value";if(e)throw new c.Z("web-tile-layer:load","WebTileLayer (title: '".concat(t.title,"', id: '").concat(t.id,"') ").concat(e))}));return this.addResolvingPromise(l),Promise.resolve(this)}},{key:"levelValues",get:function(){var e=[];if(!this.tileInfo)return null;var t,l=(0,r.Z)(this.tileInfo.lods);try{for(l.s();!(t=l.n()).done;){var n=t.value;e[n.level]=n.levelValue||n.level}}catch(o){l.e(o)}finally{l.f()}return e}},{key:"readSpatialReference",value:function(e,t){return e||t.fullExtent&&t.fullExtent.spatialReference&&x.Z.fromJSON(t.fullExtent.spatialReference)}},{key:"tileServers",get:function(){if(!this.urlTemplate)return null;var e=[],t=this.urlTemplate,l=this.subDomains,n=new f.R9(t),o=n.scheme?n.scheme+"://":"//",i=o+n.authority+"/";if(-1===n.authority.indexOf("{subDomain}"))e.push(i);else if(l&&l.length>0&&n.authority.split(".").length>1){var a,s=(0,r.Z)(l);try{for(s.s();!(a=s.n()).done;){var u=a.value;e.push(o+n.authority.replace(/\{subDomain\}/gi,u)+"/")}}catch(p){s.e(p)}finally{s.f()}}return e.map((function(e){return"/"!==e.charAt(e.length-1)&&(e+="/"),e}))}},{key:"urlPath",get:function(){if(!this.urlTemplate)return null;var e=this.urlTemplate,t=new f.R9(e),l=(t.scheme?t.scheme+"://":"//")+t.authority+"/";return e.substring(l.length)}},{key:"readUrlTemplate",value:function(e,t){return e||t.templateUrl}},{key:"writeUrlTemplate",value:function(e,t){e&&(0,f.oC)(e)&&(e="https:"+e),e&&(e=e.replace(/\{z\}/gi,"{level}").replace(/\{x\}/gi,"{col}").replace(/\{y\}/gi,"{row}"),e=(0,f.Fv)(e)),t.templateUrl=e}},{key:"fetchTile",value:function(e,t,l){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=r.signal,i=this.getTileUrl(e,t,l),a={responseType:"image",signal:o,query:(0,n.Z)({},this.refreshParameters)};return(0,p.default)(i,a).then((function(e){return e.data}))}},{key:"getTileUrl",value:function(e,t,l){var r=this.levelValues[e];return this.tileServers[t%this.tileServers.length]+(0,v.gx)(this.urlPath,{level:r,z:r,col:l,x:l,row:t,y:t})}}]),l}((0,Z.h)((0,_.Q)((0,C.M)((0,g.q)((0,T.I)((0,y.R)(b.Z)))))));(0,u._)([(0,d.Cb)({type:String,value:"",json:{write:!0}})],I.prototype,"copyright",void 0),(0,u._)([(0,d.Cb)({type:k.Z,json:{write:!0},nonNullable:!0})],I.prototype,"fullExtent",void 0),(0,u._)([(0,d.Cb)({readOnly:!0,json:{read:!1,write:!1}})],I.prototype,"legendEnabled",void 0),(0,u._)([(0,d.Cb)({type:["show","hide"]})],I.prototype,"listMode",void 0),(0,u._)([(0,d.Cb)()],I.prototype,"levelValues",null),(0,u._)([(0,d.Cb)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:function(){return{enabled:!1}}}}})],I.prototype,"isReference",void 0),(0,u._)([(0,d.Cb)({type:["WebTiledLayer"],value:"WebTiledLayer"})],I.prototype,"operationalLayerType",void 0),(0,u._)([(0,d.Cb)({readOnly:!0,json:{read:!1,write:!1}})],I.prototype,"popupEnabled",void 0),(0,u._)([(0,d.Cb)({type:x.Z})],I.prototype,"spatialReference",void 0),(0,u._)([(0,h.r)("spatialReference",["spatialReference","fullExtent.spatialReference"])],I.prototype,"readSpatialReference",null),(0,u._)([(0,d.Cb)({type:[String],json:{write:!0}})],I.prototype,"subDomains",void 0),(0,u._)([(0,d.Cb)({type:j.Z,json:{write:!0}})],I.prototype,"tileInfo",void 0),(0,u._)([(0,d.Cb)({readOnly:!0})],I.prototype,"tileServers",null),(0,u._)([(0,d.Cb)({json:{read:!1}})],I.prototype,"type",void 0),(0,u._)([(0,d.Cb)()],I.prototype,"urlPath",null),(0,u._)([(0,d.Cb)({type:String,json:{origins:{"portal-item":{read:{source:"url"}}}}})],I.prototype,"urlTemplate",void 0),(0,u._)([(0,h.r)("urlTemplate",["urlTemplate","templateUrl"])],I.prototype,"readUrlTemplate",null),(0,u._)([(0,w.c)("urlTemplate",{templateUrl:{type:String}})],I.prototype,"writeUrlTemplate",null),(0,u._)([(0,d.Cb)({type:S.Z,json:{write:!0}})],I.prototype,"wmtsInfo",void 0);var M=I=(0,u._)([(0,m.j)("esri.layers.WebTileLayer")],I)},4961:function(e,t,l){l.d(t,{Z:function(){return f}});var r,n=l(15671),o=l(43144),i=l(60136),a=l(29388),s=l(27366),u=l(67123),p=l(84652),c=l(49861),y=(l(25243),l(69912)),v=r=function(e){(0,i.Z)(l,e);var t=(0,a.Z)(l);function l(e){return(0,n.Z)(this,l),t.call(this,e)}return(0,o.Z)(l,[{key:"clone",value:function(){return new r({customLayerParameters:(0,p.d9)(this.customLayerParameters),customParameters:(0,p.d9)(this.customParameters),layerIdentifier:this.layerIdentifier,tileMatrixSet:this.tileMatrixSet,url:this.url})}}]),l}(u.wq);(0,s._)([(0,c.Cb)({json:{type:Object,write:!0}})],v.prototype,"customLayerParameters",void 0),(0,s._)([(0,c.Cb)({json:{type:Object,write:!0}})],v.prototype,"customParameters",void 0),(0,s._)([(0,c.Cb)({type:String,json:{write:!0}})],v.prototype,"layerIdentifier",void 0),(0,s._)([(0,c.Cb)({type:String,json:{write:!0}})],v.prototype,"tileMatrixSet",void 0),(0,s._)([(0,c.Cb)({type:String,json:{write:!0}})],v.prototype,"url",void 0);var f=v=r=(0,s._)([(0,y.j)("esri.layer.support.WMTSLayerInfo")],v)}}]);
//# sourceMappingURL=9200.63916af3.chunk.js.map