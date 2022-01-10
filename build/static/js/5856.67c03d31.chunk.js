"use strict";(self.webpackChunkvilniausdnr=self.webpackChunkvilniausdnr||[]).push([[5856],{34785:function(t,e,r){r.d(e,{W:function(){return h}});var n=r(29439),o=r(15861),a=r(15671),s=r(43144),u=r(87757),i=r(19545),p=r(76200),c=r(92026),l=r(66978),d=r(94990),y=r(70032),f=r(98995),h=function(){function t(e,r,n,o){(0,a.Z)(this,t),this.parsedUrl=e,this.portalItem=r,this.apiKey=n,this.signal=o,this.rootDocument=null;var s=this.parsedUrl.path.match(/^(.*)\/SceneServer\/layers\/([\d]*)\/?$/i);s&&(this.urlParts={root:s[1],layerId:parseInt(s[2],10)})}return(0,s.Z)(t,[{key:"fetch",value:function(){var t=(0,o.Z)(u.mark((function t(){var e,r,n;return u.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.urlParts){t.next=2;break}return t.abrupt("return",null);case 2:if(null==(e=this.portalItem)){t.next=6;break}t.t0=e,t.next=9;break;case 6:return t.next=8,this.portalItemFromServiceItemId();case 8:t.t0=t.sent;case 9:if(r=t.t0,!(0,c.Wi)(r)){t.next=12;break}return t.abrupt("return",this.loadFromUrl());case 12:return t.next=14,this.findAndLoadRelatedPortalItem(r);case 14:return n=t.sent,t.abrupt("return",(0,c.Wi)(n)?null:this.loadFeatureLayerFromPortalItem(n));case 16:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"fetchPortalItem",value:function(){var t=(0,o.Z)(u.mark((function t(){var e,r;return u.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.urlParts){t.next=2;break}return t.abrupt("return",null);case 2:if(null==(e=this.portalItem)){t.next=6;break}t.t0=e,t.next=9;break;case 6:return t.next=8,this.portalItemFromServiceItemId();case 8:t.t0=t.sent;case 9:return r=t.t0,t.abrupt("return",(0,c.Wi)(r)?null:this.findAndLoadRelatedPortalItem(r));case 11:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"fetchRootDocument",value:function(){var t=(0,o.Z)(u.mark((function t(){var e,r,n;return u.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(0,c.pC)(this.rootDocument)){t.next=2;break}return t.abrupt("return",this.rootDocument);case 2:if(!(0,c.Wi)(this.urlParts)){t.next=4;break}return t.abrupt("return",(this.rootDocument={},{}));case 4:return e={query:{f:"json",token:this.apiKey},responseType:"json",signal:this.signal},r="".concat(this.urlParts.root,"/SceneServer"),t.prev=5,t.next=8,(0,p.default)(r,e);case 8:n=t.sent,this.rootDocument=n.data,t.next=15;break;case 12:t.prev=12,t.t0=t.catch(5),this.rootDocument={};case 15:return t.abrupt("return",this.rootDocument);case 16:case"end":return t.stop()}}),t,this,[[5,12]])})));return function(){return t.apply(this,arguments)}}()},{key:"fetchServiceOwningPortalUrl",value:function(){var t=(0,o.Z)(u.mark((function t(){var e,r,n,o;return u.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null==(r=null==(e=i.id)?void 0:e.findServerInfo(this.parsedUrl.path))||!r.owningSystemUrl){t.next=3;break}return t.abrupt("return",r.owningSystemUrl);case 3:return n=this.parsedUrl.path.replace(/(.*\/rest)\/.*/i,"$1")+"/info",t.prev=4,t.next=7,(0,p.default)(n,{query:{f:"json"},responseType:"json",signal:this.signal});case 7:if(!(o=t.sent.data.owningSystemUrl)){t.next=10;break}return t.abrupt("return",o);case 10:t.next=15;break;case 12:t.prev=12,t.t0=t.catch(4),(0,l.r9)(t.t0);case 15:return t.abrupt("return",null);case 16:case"end":return t.stop()}}),t,this,[[4,12]])})));return function(){return t.apply(this,arguments)}}()},{key:"findAndLoadRelatedPortalItem",value:function(){var t=(0,o.Z)(u.mark((function t(e){return u.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:this.signal});case 3:if(t.t0=t.sent.find((function(t){return"Feature Service"===t.type})),t.t0){t.next=6;break}t.t0=null;case 6:return t.abrupt("return",t.t0);case 9:return t.prev=9,t.t1=t.catch(0),t.abrupt("return",((0,l.r9)(t.t1),null));case 12:case"end":return t.stop()}}),t,this,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},{key:"loadFeatureLayerFromPortalItem",value:function(){var t=(0,o.Z)(u.mark((function t(e){var r;return u.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.load({signal:this.signal});case 2:return t.next=4,this.findMatchingAssociatedSublayerUrl(e.url);case 4:return r=t.sent,t.abrupt("return",new d.default({url:r,portalItem:e}).load({signal:this.signal}));case 6:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"loadFromUrl",value:function(){var t=(0,o.Z)(u.mark((function t(){var e;return u.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.findMatchingAssociatedSublayerUrl("".concat(this.urlParts.root,"/FeatureServer"));case 2:return e=t.sent,t.abrupt("return",new d.default({url:e}).load({signal:this.signal}));case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"findMatchingAssociatedSublayerUrl",value:function(){var t=(0,o.Z)(u.mark((function t(e){var r,o,a,s,i,c,l,d,y,f,h,v;return u.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.replace(/^(.*FeatureServer)(\/[\d]*\/?)?$/i,"$1"),o={query:{f:"json"},responseType:"json",authMode:"no-prompt",signal:this.signal},a=this.urlParts.layerId,s=this.fetchRootDocument(),i=(0,p.default)(r,o),t.next=7,Promise.all([i,s]);case 7:if(c=t.sent,l=(0,n.Z)(c,2),d=l[0],y=l[1],f=y&&y.layers,h=d.data&&d.data.layers,Array.isArray(h)){t.next=15;break}throw new Error("expected layers array");case 15:if(!Array.isArray(f)){t.next=25;break}v=0;case 17:if(!(v<Math.min(f.length,h.length))){t.next=23;break}if(f[v].id!==a){t.next=20;break}return t.abrupt("return","".concat(r,"/").concat(h[v].id));case 20:v++,t.next=17;break;case 23:t.next=27;break;case 25:if(!(a<h.length)){t.next=27;break}return t.abrupt("return","".concat(r,"/").concat(h[a].id));case 27:throw new Error("could not find matching associated sublayer");case 28:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"portalItemFromServiceItemId",value:function(){var t=(0,o.Z)(u.mark((function t(){var e,r,n;return u.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.fetchRootDocument();case 2:if(e=t.sent.serviceItemId){t.next=5;break}return t.abrupt("return",null);case 5:return r=new f.default({id:e,apiKey:this.apiKey}),t.next=8,this.fetchServiceOwningPortalUrl();case 8:return n=t.sent,(0,c.pC)(n)&&(r.portal=new y.Z({url:n})),t.prev=10,t.abrupt("return",r.load({signal:this.signal}));case 14:return t.prev=14,t.t0=t.catch(10),t.abrupt("return",((0,l.r9)(t.t0),null));case 17:case"end":return t.stop()}}),t,this,[[10,14]])})));return function(){return t.apply(this,arguments)}}()}]),t}()},34207:function(t,e,r){r.d(e,{H3:function(){return C},QI:function(){return h},U4:function(){return d},Yh:function(){return b}});var n=r(43144),o=r(15671),a=r(60136),s=r(29388),u=r(27366),i=r(67123),p=r(49861),c=(r(63780),r(93169),r(25243),r(27135)),l=r(69912),d=function(t){(0,a.Z)(r,t);var e=(0,s.Z)(r);function r(){var t;return(0,o.Z)(this,r),(t=e.apply(this,arguments)).nodesPerPage=null,t.rootIndex=0,t.lodSelectionMetricType=null,t}return(0,n.Z)(r)}(i.wq);(0,u._)([(0,p.Cb)({type:Number})],d.prototype,"nodesPerPage",void 0),(0,u._)([(0,p.Cb)({type:Number})],d.prototype,"rootIndex",void 0),(0,u._)([(0,p.Cb)({type:String})],d.prototype,"lodSelectionMetricType",void 0),d=(0,u._)([(0,l.j)("esri.layer.support.I3SNodePageDefinition")],d);var y=function(t){(0,a.Z)(r,t);var e=(0,s.Z)(r);function r(){var t;return(0,o.Z)(this,r),(t=e.apply(this,arguments)).factor=1,t}return(0,n.Z)(r)}(i.wq);(0,u._)([(0,p.Cb)({type:Number,json:{read:{source:"textureSetDefinitionId"}}})],y.prototype,"id",void 0),(0,u._)([(0,p.Cb)({type:Number})],y.prototype,"factor",void 0),y=(0,u._)([(0,l.j)("esri.layer.support.I3SMaterialTexture")],y);var f=function(t){(0,a.Z)(r,t);var e=(0,s.Z)(r);function r(){var t;return(0,o.Z)(this,r),(t=e.apply(this,arguments)).baseColorFactor=[1,1,1,1],t.baseColorTexture=null,t.metallicRoughnessTexture=null,t.metallicFactor=1,t.roughnessFactor=1,t}return(0,n.Z)(r)}(i.wq);(0,u._)([(0,p.Cb)({type:[Number]})],f.prototype,"baseColorFactor",void 0),(0,u._)([(0,p.Cb)({type:y})],f.prototype,"baseColorTexture",void 0),(0,u._)([(0,p.Cb)({type:y})],f.prototype,"metallicRoughnessTexture",void 0),(0,u._)([(0,p.Cb)({type:Number})],f.prototype,"metallicFactor",void 0),(0,u._)([(0,p.Cb)({type:Number})],f.prototype,"roughnessFactor",void 0),f=(0,u._)([(0,l.j)("esri.layer.support.I3SMaterialPBRMetallicRoughness")],f);var h=function(t){(0,a.Z)(r,t);var e=(0,s.Z)(r);function r(){var t;return(0,o.Z)(this,r),(t=e.apply(this,arguments)).alphaMode="opaque",t.alphaCutoff=.25,t.doubleSided=!1,t.cullFace="none",t.normalTexture=null,t.occlusionTexture=null,t.emissiveTexture=null,t.emissiveFactor=null,t.pbrMetallicRoughness=null,t}return(0,n.Z)(r)}(i.wq);(0,u._)([(0,c.J)({opaque:"opaque",mask:"mask",blend:"blend"})],h.prototype,"alphaMode",void 0),(0,u._)([(0,p.Cb)({type:Number})],h.prototype,"alphaCutoff",void 0),(0,u._)([(0,p.Cb)({type:Boolean})],h.prototype,"doubleSided",void 0),(0,u._)([(0,c.J)({none:"none",back:"back",front:"front"})],h.prototype,"cullFace",void 0),(0,u._)([(0,p.Cb)({type:y})],h.prototype,"normalTexture",void 0),(0,u._)([(0,p.Cb)({type:y})],h.prototype,"occlusionTexture",void 0),(0,u._)([(0,p.Cb)({type:y})],h.prototype,"emissiveTexture",void 0),(0,u._)([(0,p.Cb)({type:[Number]})],h.prototype,"emissiveFactor",void 0),(0,u._)([(0,p.Cb)({type:f})],h.prototype,"pbrMetallicRoughness",void 0),h=(0,u._)([(0,l.j)("esri.layer.support.I3SMaterialDefinition")],h);var v=function(t){(0,a.Z)(r,t);var e=(0,s.Z)(r);function r(){return(0,o.Z)(this,r),e.apply(this,arguments)}return(0,n.Z)(r)}(i.wq);(0,u._)([(0,p.Cb)({type:String,json:{read:{source:["name","index"],reader:function(t,e){return null!=t?t:"".concat(e.index)}}}})],v.prototype,"name",void 0),(0,u._)([(0,c.J)({jpg:"jpg",png:"png",dds:"dds","ktx-etc2":"ktx-etc2",ktx2:"ktx2",basis:"basis"})],v.prototype,"format",void 0),v=(0,u._)([(0,l.j)("esri.layer.support.I3STextureFormat")],v);var b=function(t){(0,a.Z)(r,t);var e=(0,s.Z)(r);function r(){var t;return(0,o.Z)(this,r),(t=e.apply(this,arguments)).atlas=!1,t}return(0,n.Z)(r)}(i.wq);(0,u._)([(0,p.Cb)({type:[v]})],b.prototype,"formats",void 0),(0,u._)([(0,p.Cb)({type:Boolean})],b.prototype,"atlas",void 0),b=(0,u._)([(0,l.j)("esri.layer.support.I3STextureSetDefinition")],b);var m=function(t){(0,a.Z)(r,t);var e=(0,s.Z)(r);function r(){return(0,o.Z)(this,r),e.apply(this,arguments)}return(0,n.Z)(r)}(i.wq);(0,u._)([(0,c.J)({Float32:"Float32",UInt64:"UInt64",UInt32:"UInt32",UInt16:"UInt16",UInt8:"UInt8"})],m.prototype,"type",void 0),(0,u._)([(0,p.Cb)({type:Number})],m.prototype,"component",void 0),m=(0,u._)([(0,l.j)("esri.layer.support.I3SGeometryAttribute")],m);var x=function(t){(0,a.Z)(r,t);var e=(0,s.Z)(r);function r(){return(0,o.Z)(this,r),e.apply(this,arguments)}return(0,n.Z)(r)}(i.wq);(0,u._)([(0,c.J)({draco:"draco"})],x.prototype,"encoding",void 0),(0,u._)([(0,p.Cb)({type:[String]})],x.prototype,"attributes",void 0),x=(0,u._)([(0,l.j)("esri.layer.support.I3SGeometryCompressedAttributes")],x);var g=function(t){(0,a.Z)(r,t);var e=(0,s.Z)(r);function r(){var t;return(0,o.Z)(this,r),(t=e.apply(this,arguments)).offset=0,t}return(0,n.Z)(r)}(i.wq);(0,u._)([(0,p.Cb)({type:Number})],g.prototype,"offset",void 0),(0,u._)([(0,p.Cb)({type:m})],g.prototype,"position",void 0),(0,u._)([(0,p.Cb)({type:m})],g.prototype,"normal",void 0),(0,u._)([(0,p.Cb)({type:m})],g.prototype,"uv0",void 0),(0,u._)([(0,p.Cb)({type:m})],g.prototype,"color",void 0),(0,u._)([(0,p.Cb)({type:m})],g.prototype,"uvRegion",void 0),(0,u._)([(0,p.Cb)({type:m})],g.prototype,"featureId",void 0),(0,u._)([(0,p.Cb)({type:m})],g.prototype,"faceRange",void 0),(0,u._)([(0,p.Cb)({type:x})],g.prototype,"compressedAttributes",void 0),g=(0,u._)([(0,l.j)("esri.layer.support.I3SGeometryBuffer")],g);var C=function(t){(0,a.Z)(r,t);var e=(0,s.Z)(r);function r(){return(0,o.Z)(this,r),e.apply(this,arguments)}return(0,n.Z)(r)}(i.wq);(0,u._)([(0,c.J)({triangle:"triangle"})],C.prototype,"topology",void 0),(0,u._)([(0,p.Cb)()],C.prototype,"geometryBuffers",void 0),C=(0,u._)([(0,l.j)("esri.layer.support.I3SGeometryDefinition")],C)},96978:function(t,e,r){r.d(e,{C:function(){return n}});var n={attachment:{supportsContentType:!1,supportsExifInfo:!1,supportsKeywords:!1,supportsName:!1,supportsSize:!1},data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1},query:{maxRecordCount:0,maxRecordCountFactor:0,standardMaxRecordCount:0,supportsCacheHint:!1,supportsCentroid:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsSqlExpression:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsStatistics:!1,tileMaxRecordCount:0}}}}]);
//# sourceMappingURL=5856.67c03d31.chunk.js.map