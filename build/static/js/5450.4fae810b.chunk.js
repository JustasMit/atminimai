"use strict";(self.webpackChunkvilniausdnr=self.webpackChunkvilniausdnr||[]).push([[5450],{21857:function(e,t,i){i.d(t,{lm:function(){return Z},CS:function(){return b},Yu:function(){return k},Cw:function(){return m},j5:function(){return w}});var n=i(15861),r=i(37762),a=i(87757),s=i(42265),o=i(19545),l=i(44055),u=i(76200),h=i(84652),c=i(35995),d=i(78952),p=i(41414),f=i(376),y=i(9014),v=i(49818),g={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};function m(e){var t=e.folders||[],i=t.slice(),n=new Map,a=new Map,s=new Map,o=new Map,l=new Map,u={esriGeometryPoint:a,esriGeometryPolyline:s,esriGeometryPolygon:o};(e.featureCollection&&e.featureCollection.layers||[]).forEach((function(e){var t=(0,h.d9)(e);t.featureSet.features=[];var i=e.featureSet.geometryType;n.set(i,t);var r=e.layerDefinition.objectIdField;"esriGeometryPoint"===i?_(a,r,e.featureSet.features):"esriGeometryPolyline"===i?_(s,r,e.featureSet.features):"esriGeometryPolygon"===i&&_(o,r,e.featureSet.features)})),e.groundOverlays&&e.groundOverlays.forEach((function(e){l.set(e.id,e)})),t.forEach((function(t){t.networkLinkIds.forEach((function(n){var r=function(e,t,i){var n=function(e,t){var i;return t.some((function(t){return t.id===e&&(i=t,!0)})),i}(e,i);return n&&(n.parentFolderId=t,n.networkLink=n),n}(n,t.id,e.networkLinks);r&&i.push(r)}))})),i.forEach((function(e){if(e.featureInfos){e.points=(0,h.d9)(n.get("esriGeometryPoint")),e.polylines=(0,h.d9)(n.get("esriGeometryPolyline")),e.polygons=(0,h.d9)(n.get("esriGeometryPolygon")),e.mapImages=[];var t,i=(0,r.Z)(e.featureInfos);try{for(i.s();!(t=i.n()).done;){var a=t.value;switch(a.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":var s=u[a.type].get(a.id);s&&e[g[a.type]].featureSet.features.push(s);break;case"GroundOverlay":var o=l.get(a.id);o&&e.mapImages.push(o)}}}catch(c){i.e(c)}finally{i.f()}e.fullExtent=Z([e])}}));var c=Z(i);return{folders:t,sublayers:i,extent:c}}function b(e,t,i,n){var r=o.id&&o.id.findCredential(e);e=(0,c.fl)(e,{token:r&&r.token});var a=s.Z.kmlServiceUrl;return(0,u.default)(a,{query:{url:e,model:"simple",folders:"",refresh:0!==i||void 0,outSR:JSON.stringify(t)},responseType:"json",signal:n})}function w(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],r=[],a={},s=t.sublayers,o=t.folders.map((function(e){return e.id}));return s.forEach((function(t){var s=new e;if(i?s.read(t,i):s.read(t),n.length&&o.indexOf(s.id)>-1&&(s.visible=-1!==n.indexOf(s.id)),a[t.id]=s,null!=t.parentFolderId&&-1!==t.parentFolderId){var l=a[t.parentFolderId];l.sublayers||(l.sublayers=[]),l.sublayers.unshift(s)}else r.unshift(s)})),r}function _(e,t,i){i.forEach((function(i){e.set(i.attributes[t],i)}))}function k(e){return x.apply(this,arguments)}function x(){return(x=(0,n.Z)(a.mark((function e(t){var i,n,s,o,u,h,c,d,p;return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=v.default.fromJSON(t.featureSet).features,n=t.layerDefinition,s=(0,y.i)(n.drawingInfo.renderer),o=l.Z.fromJSON(t.popupInfo),u=[],h=(0,r.Z)(i),e.prev=2,h.s();case 4:if((c=h.n()).done){e.next=12;break}return d=c.value,e.next=8,s.getSymbolAsync(d);case 8:p=e.sent,d.symbol=p,d.popupTemplate=o,d.visible=!0,u.push(d);case 10:e.next=4;break;case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),h.e(e.t0);case 17:return e.prev=17,h.f(),e.finish(17);case 20:return e.abrupt("return",u);case 21:case"end":return e.stop()}}),e,null,[[2,14,17,20]])})))).apply(this,arguments)}function Z(e){var t,i=(0,p.Ue)(p.Gv),n=(0,p.Ue)(p.Gv),a=(0,r.Z)(e);try{for(a.s();!(t=a.n()).done;){var s=t.value;if(s.polygons&&s.polygons.featureSet&&s.polygons.featureSet.features){var o,l=(0,r.Z)(s.polygons.featureSet.features);try{for(l.s();!(o=l.n()).done;){var u=o.value;(0,f.Yg)(i,u.geometry),(0,p.TC)(n,i)}}catch(k){l.e(k)}finally{l.f()}}if(s.polylines&&s.polylines.featureSet&&s.polylines.featureSet.features){var h,c=(0,r.Z)(s.polylines.featureSet.features);try{for(c.s();!(h=c.n()).done;){var y=h.value;(0,f.Yg)(i,y.geometry),(0,p.TC)(n,i)}}catch(k){c.e(k)}finally{c.f()}}if(s.points&&s.points.featureSet&&s.points.featureSet.features){var v,g=(0,r.Z)(s.points.featureSet.features);try{for(g.s();!(v=g.n()).done;){var m=v.value;(0,f.Yg)(i,m.geometry),(0,p.TC)(n,i)}}catch(k){g.e(k)}finally{g.f()}}if(s.mapImages){var b,w=(0,r.Z)(s.mapImages);try{for(w.s();!(b=w.n()).done;){var _=b.value;(0,f.Yg)(i,_.extent),(0,p.TC)(n,i)}}catch(k){w.e(k)}finally{w.f()}}}}catch(k){a.e(k)}finally{a.f()}return(0,p.fS)(n,p.Gv)?null:{xmin:n[0],ymin:n[1],zmin:n[2],xmax:n[3],ymax:n[4],zmax:n[5],spatialReference:d.Z.WGS84}}},45956:function(e,t,i){i.d(t,{eY:function(){return b}});var n=i(29439),r=i(15671),a=i(43144),s=i(97326),o=i(11752),l=i(61120),u=i(60136),h=i(29388),c=i(92026),d=i(22753),p=i(23588),f=i(15245),y=i(87422),v=i(10978),g=i(51378);function m(e,t,i){var n={target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071};return t&&i&&(n.width=t,n.height=i),new g.Z(e,n)}var b=function(e){(0,u.Z)(i,e);var t=(0,h.Z)(i);function i(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a=arguments.length>1?arguments[1]:void 0,o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return(0,r.Z)(this,i),(e=t.call(this)).requestRenderOnSourceChangedEnabled=o,e._textureInvalidated=!0,e.stencilRef=0,e.coordScale=[1,1],e._height=void 0,e.pixelRatio=1,e.resolution=0,e.rotation=0,e._source=null,e._width=void 0,e.x=0,e.y=0,e.blendFunction=a,e.source=n,e.requestRender=e.requestRender.bind((0,s.Z)(e)),e}return(0,a.Z)(i,[{key:"destroy",value:function(){this._texture&&(this._texture.dispose(),this._texture=null)}},{key:"isSourceScaled",get:function(){return this.width!==this.sourceWidth||this.height!==this.sourceHeight}},{key:"height",get:function(){return void 0!==this._height?this._height:this.sourceHeight},set:function(e){this._height=e}},{key:"source",get:function(){return this._source},set:function(e){this._source=e,this.invalidateTexture()}},{key:"sourceHeight",get:function(){return this._source instanceof HTMLImageElement?this._source.naturalHeight:this._source.height}},{key:"sourceWidth",get:function(){return this._source instanceof HTMLImageElement?this._source.naturalWidth:this._source.width}},{key:"width",get:function(){return void 0!==this._width?this._width:this.sourceWidth},set:function(e){this._width=e}},{key:"beforeRender",value:function(e){(0,o.Z)((0,l.Z)(i.prototype),"beforeRender",this).call(this,e),this.updateTexture(e.context)}},{key:"invalidateTexture",value:function(){this._textureInvalidated||(this._textureInvalidated=!0,this.requestRenderOnSourceChangedEnabled&&this.requestRender())}},{key:"_createTransforms",value:function(){return{dvs:(0,p.c)()}}},{key:"setTransform",value:function(e){var t=(0,d.b)(this.transforms.dvs),i=e.toScreenNoRotation([0,0],[this.x,this.y]),r=(0,n.Z)(i,2),a=r[0],s=r[1],o=this.resolution/this.pixelRatio/e.resolution,l=o*this.width,u=o*this.height,h=Math.PI*this.rotation/180;(0,d.c)(t,t,(0,f.f)(a,s)),(0,d.c)(t,t,(0,f.f)(l/2,u/2)),(0,d.r)(t,t,-h),(0,d.c)(t,t,(0,f.f)(-l/2,-u/2)),(0,d.j)(t,t,(0,f.f)(l,u)),(0,d.m)(this.transforms.dvs,e.displayViewMat3,t)}},{key:"setSamplingProfile",value:function(e){this._texture&&(e.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(e.samplingMode))}},{key:"bind",value:function(e,t){this._texture&&e.bindTexture(this._texture,t)}},{key:"updateTexture",value:function(e){var t;if(!this.stage)return null==(t=this._texture)||t.dispose(),void(this._texture=null);if(this._textureInvalidated){this._textureInvalidated=!1,this._texture||(this.source?this._texture=m(e,this.sourceWidth,this.sourceHeight):this._texture=m(e));var i,n=this.source;if(n){if(this._texture.resize(this.sourceWidth,this.sourceHeight),(i=n)&&"render"in i)if(n instanceof v.Z){var r=n.getRenderedRasterPixels();this._texture.setData((0,c.pC)(r)?r.renderedRasterPixels:null)}else this._texture.setData(function(e){var t=document.createElement("canvas");return t.width=e.width,t.height=e.height,e.render(t.getContext("2d")),t}(n));else(function(e){return e&&!("render"in e)})(n)&&this._texture.setData(n);this.ready()}else this._texture.setData(null)}}},{key:"onAttach",value:function(){this.invalidateTexture()}},{key:"onDetach",value:function(){this.invalidateTexture()}}]),i}(y.s)},90110:function(e,t,i){i.d(t,{c:function(){return d}});var n=i(93433),r=i(15671),a=i(43144),s=i(11752),o=i(61120),l=i(60136),u=i(29388),h=i(37826),c=i(80613),d=function(e){(0,l.Z)(i,e);var t=(0,u.Z)(i);function i(){return(0,r.Z)(this,i),t.apply(this,arguments)}return(0,a.Z)(i,[{key:"requiresDedicatedFBO",get:function(){return this.children.some((function(e){return"additive"===e.blendFunction}))}},{key:"prepareRenderPasses",value:function(e){var t=this,r=e.registerRenderPass({name:"bitmap",brushes:[h.U.bitmap],target:function(){return t.children},drawPhase:c.jx.MAP});return[].concat((0,n.Z)((0,s.Z)((0,o.Z)(i.prototype),"prepareRenderPasses",this).call(this,e)),[r])}}]),i}(i(64510).Z)},10978:function(e,t,i){i.d(t,{Z:function(){return s}});var n=i(15671),r=i(43144),a=i(92026),s=function(){function e(t,i,r){(0,n.Z)(this,e),this.pixelBlock=t,this.extent=i,this.originalPixelBlock=r}return(0,r.Z)(e,[{key:"width",get:function(){return(0,a.pC)(this.pixelBlock)?this.pixelBlock.width:0}},{key:"height",get:function(){return(0,a.pC)(this.pixelBlock)?this.pixelBlock.height:0}},{key:"render",value:function(e){var t=this.pixelBlock;if(!(0,a.Wi)(t)){var i=this.filter({pixelBlock:t});if(!(0,a.Wi)(i.pixelBlock)){var n=i.pixelBlock.getAsRGBA(),r=e.createImageData(i.pixelBlock.width,i.pixelBlock.height);r.data.set(n),e.putImageData(r,0,0)}}}},{key:"getRenderedRasterPixels",value:function(){var e=this.filter({pixelBlock:this.pixelBlock});return(0,a.Wi)(e.pixelBlock)?null:{width:e.pixelBlock.width,height:e.pixelBlock.height,renderedRasterPixels:new Uint8Array(e.pixelBlock.getAsRGBA().buffer)}}}]),e}()},75450:function(e,t,i){i.r(t),i.d(t,{default:function(){return L}});var n=i(93433),r=i(1413),a=i(29439),s=i(37762),o=i(15861),l=i(60136),u=i(29388),h=i(43144),c=i(15671),d=i(87757),p=i(27366),f=i(19545),y=i(76200),v=i(40110),g=i(100),m=i(92026),b=i(35995),w=i(49861),_=(i(63780),i(93169),i(25243),i(69912)),k=i(53866),x=i(62315),Z=i(78952),S=i(81753),C=i(21857),V=i(23084),I=i(78983),P=i(45956),R=i(90110),M=i(95986),T=i(75391),q=i(43634),U=i(67581),D=(0,h.Z)((function e(){(0,c.Z)(this,e),this.allSublayers=new Map,this.allPoints=[],this.allPolylines=[],this.allPolygons=[],this.allMapImages=[]})),G=function(e){(0,l.Z)(i,e);var t=(0,u.Z)(i);function i(){var e;return(0,c.Z)(this,i),(e=t.apply(this,arguments))._handles=new g.Z,e._bitmapIndex=new Map,e._mapImageContainer=new R.c,e._kmlVisualData=new D,e.allVisiblePoints=new I.J,e.allVisiblePolylines=new I.J,e.allVisiblePolygons=new I.J,e.allVisibleMapImages=new v.Z,e}return(0,h.Z)(i,[{key:"hitTest",value:function(){var e=(0,o.Z)(d.mark((function e(t,i){var n,r,a,s=this;return d.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([null==(n=this._pointsView)?void 0:n.hitTest(t),null==(r=this._polylinesView)?void 0:r.hitTest(t),null==(a=this._polygonsView)?void 0:a.hitTest(t)]);case 2:return e.abrupt("return",e.sent.flat().filter((function(e){return!!e&&(e.layer=s.layer,e.sourceLayer=s.layer,!0)})));case 3:case"end":return e.stop()}}),e,this)})));return function(t,i){return e.apply(this,arguments)}}()},{key:"update",value:function(e){this._polygonsView&&this._polygonsView.processUpdate(e),this._polylinesView&&this._polylinesView.processUpdate(e),this._pointsView&&this._pointsView.processUpdate(e)}},{key:"attach",value:function(){var e=this;this._handles.add([this.allVisibleMapImages.on("change",(function(t){t.added.forEach((function(t){return e._addMapImage(t)})),t.removed.forEach((function(t){return e._removeMapImage(t)}))}))]),this.container.addChild(this._mapImageContainer),this._polygonsView=new q.Z({view:this.view,graphics:this.allVisiblePolygons,requestUpdateCallback:function(){return e.requestUpdate()},container:new T.Z(this.view.featuresTilingScheme)}),this.container.addChild(this._polygonsView.container),this._polylinesView=new q.Z({view:this.view,graphics:this.allVisiblePolylines,requestUpdateCallback:function(){return e.requestUpdate()},container:new T.Z(this.view.featuresTilingScheme)}),this.container.addChild(this._polylinesView.container),this._pointsView=new q.Z({view:this.view,graphics:this.allVisiblePoints,requestUpdateCallback:function(){return e.requestUpdate()},container:new T.Z(this.view.featuresTilingScheme)}),this.container.addChild(this._pointsView.container),this.watch("layer.visibleSublayers",(function(t){var i,n=(0,s.Z)(e._kmlVisualData.allSublayers);try{for(n.s();!(i=n.n()).done;){var r=(0,a.Z)(i.value,2);r[0];r[1].visibility=0}}catch(c){n.e(c)}finally{n.f()}var o,l=(0,s.Z)(t);try{for(l.s();!(o=l.n()).done;){var u=o.value,h=e._kmlVisualData.allSublayers.get(u.id);h&&(h.visibility=1)}}catch(c){l.e(c)}finally{l.f()}e._refreshCollections()})),this._fetchingPromise=this._fetchService().then((function(){e._fetchingPromise=null,e.notifyChange("updating")}))}},{key:"detach",value:function(){this._handles.removeAll(),this._mapImageContainer.removeAllChildren(),this.container.removeAllChildren(),this._bitmapIndex.clear(),this._polygonsView&&(this._polygonsView.destroy(),this._polygonsView=null),this._polylinesView&&(this._polylinesView.destroy(),this._polylinesView=null),this._pointsView&&(this._pointsView.destroy(),this._pointsView=null)}},{key:"moveStart",value:function(){}},{key:"viewChange",value:function(){this._polygonsView.viewChange(),this._polylinesView.viewChange(),this._pointsView.viewChange()}},{key:"moveEnd",value:function(){}},{key:"isUpdating",value:function(){return null!=this._fetchingPromise||this._pointsView.updating||this._polygonsView.updating||this._polylinesView.updating}},{key:"_addMapImage",value:function(e){var t=this;(this.view.spatialReference.isWGS84||this.view.spatialReference.isWebMercator)&&(0,y.default)(e.href,{responseType:"image"}).then((function(i){var n=i.data,r=k.Z.fromJSON(e.extent);(0,S.Q8)(r,t.view.spatialReference)&&(r=(0,S.iV)(r,t.view.spatialReference));var a=new P.eY(n,"standard");a.x=r.xmin,a.y=r.ymax,a.resolution=r.width/n.naturalWidth,a.rotation=e.rotation,t._mapImageContainer.addChild(a),t._bitmapIndex.set(e,a)}))}},{key:"_getViewDependentUrl",value:function(){var e=(0,o.Z)(d.mark((function e(t,i){var n,a,s,o,l,u,h,c,p,y,v,g,w,_,S,C,I,P;return d.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.viewFormat,a=t.viewBoundScale,s=t.httpQuery,!(0,m.pC)(n)){e.next=20;break}if(!(0,m.Wi)(i)){e.next=4;break}throw new Error("Loading this network link requires a view state.");case 4:return e.next=6,(0,x.zD)();case 6:if(!(0,m.pC)(a)||1===a){e.next=11;break}(l=new k.Z(i.extent)).expand(a),o=l,e.next=12;break;case 11:o=i.extent;case 12:return o=(0,x.iV)(o,Z.Z.WGS84),u=(0,x.iV)(o,Z.Z.WebMercator),h=o.xmin,c=o.xmax,p=o.ymin,y=o.ymax,v=i.size[0]*i.pixelRatio,g=i.size[1]*i.pixelRatio,w=Math.max(u.width,u.height),_={"[bboxWest]":h.toString(),"[bboxEast]":c.toString(),"[bboxSouth]":p.toString(),"[bboxNorth]":y.toString(),"[lookatLon]":o.center.x.toString(),"[lookatLat]":o.center.y.toString(),"[lookatRange]":w.toString(),"[lookatTilt]":"0","[lookatHeading]":i.rotation.toString(),"[lookatTerrainLon]":o.center.x.toString(),"[lookatTerrainLat]":o.center.y.toString(),"[lookatTerrainAlt]":"0","[cameraLon]":o.center.x.toString(),"[cameraLat]":o.center.y.toString(),"[cameraAlt]":w.toString(),"[horizFov]":"60","[vertFov]":"60","[horizPixels]":v.toString(),"[vertPixels]":g.toString(),"[terrainEnabled]":"0","[clientVersion]":f.i8,"[kmlVersion]":"2.2","[clientName]":"ArcGIS API for JavaScript","[language]":"en-US"},S=function(e){for(var t in e)for(var i in _)e[t]=e[t].replace(i,_[i])},C=(0,b.u0)(n),S(C),I={},(0,m.pC)(s)&&(I=(0,b.u0)(s),S(I)),(P=(0,V.en)(t.href)).query=(0,r.Z)((0,r.Z)((0,r.Z)({},P.query),C),I),e.abrupt("return","".concat(P.path,"?").concat((0,b.B7)(C)));case 20:return e.abrupt("return",t.href);case 21:case"end":return e.stop()}}),e)})));return function(t,i){return e.apply(this,arguments)}}()},{key:"_fetchService",value:function(){var e=(0,o.Z)(d.mark((function e(){var t;return d.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new D,e.next=3,this._loadVisualData(this.layer.url,t);case 3:this._kmlVisualData=t,this._refreshCollections();case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"_refreshCollections",value:function(){var e=this;this.allVisiblePoints.removeAll(),this.allVisiblePolylines.removeAll(),this.allVisiblePolygons.removeAll(),this.allVisibleMapImages.removeAll(),this.allVisiblePoints.addMany(this._kmlVisualData.allPoints.filter((function(t){return e._isSublayerVisible(t.sublayerId)})).map((function(e){return e.item}))),this.allVisiblePolylines.addMany(this._kmlVisualData.allPolylines.filter((function(t){return e._isSublayerVisible(t.sublayerId)})).map((function(e){return e.item}))),this.allVisiblePolygons.addMany(this._kmlVisualData.allPolygons.filter((function(t){return e._isSublayerVisible(t.sublayerId)})).map((function(e){return e.item}))),this.allVisibleMapImages.addMany(this._kmlVisualData.allMapImages.filter((function(t){return e._isSublayerVisible(t.sublayerId)})).map((function(e){return e.item})))}},{key:"_isSublayerVisible",value:function(e){var t=this._kmlVisualData.allSublayers.get(e);return!!t.visibility&&(-1===t.parentFolderId||this._isSublayerVisible(t.parentFolderId))}},{key:"_loadVisualData",value:function(e,t){var i=this;return this._fetchParsedKML(e).then(function(){var e=(0,o.Z)(d.mark((function e(r){var a,o,l;return d.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=(0,s.Z)(r.sublayers),e.prev=1,l=d.mark((function e(){var r,a,s,l,u,h,c,p,f,y;return d.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u=o.value,t.allSublayers.set(u.id,u),!u.points){e.next=8;break}return e.next=5,(0,C.Yu)(u.points);case 5:e.t0=e.sent,e.next=9;break;case 8:e.t0=[];case 9:if(h=e.t0,!u.polylines){e.next=16;break}return e.next=13,(0,C.Yu)(u.polylines);case 13:e.t1=e.sent,e.next=17;break;case 16:e.t1=[];case 17:if(c=e.t1,!u.polygons){e.next=24;break}return e.next=21,(0,C.Yu)(u.polygons);case 21:e.t2=e.sent,e.next=25;break;case 24:e.t2=[];case 25:if(p=e.t2,f=u.mapImages||[],(r=t.allPoints).push.apply(r,(0,n.Z)(h.map((function(e){return{item:e,sublayerId:u.id}})))),(a=t.allPolylines).push.apply(a,(0,n.Z)(c.map((function(e){return{item:e,sublayerId:u.id}})))),(s=t.allPolygons).push.apply(s,(0,n.Z)(p.map((function(e){return{item:e,sublayerId:u.id}})))),(l=t.allMapImages).push.apply(l,(0,n.Z)(f.map((function(e){return{item:e,sublayerId:u.id}})))),!u.networkLink){e.next=33;break}return e.next=30,i._getViewDependentUrl(u.networkLink,i.view.state);case 30:return y=e.sent,e.next=33,i._loadVisualData(y,t);case 33:case"end":return e.stop()}}),e)})),a.s();case 4:if((o=a.n()).done){e.next=8;break}return e.delegateYield(l(),"t0",6);case 6:e.next=4;break;case 8:e.next=13;break;case 10:e.prev=10,e.t1=e.catch(1),a.e(e.t1);case 13:return e.prev=13,a.f(),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,10,13,16]])})));return function(t){return e.apply(this,arguments)}}())}},{key:"_fetchParsedKML",value:function(e){return(0,C.CS)(e,this.view.spatialReference,this.layer.refreshInterval).then((function(e){return(0,C.Cw)(e.data)}))}},{key:"_removeMapImage",value:function(e){var t=this._bitmapIndex.get(e);t&&(this._mapImageContainer.removeChild(t),this._bitmapIndex.delete(e))}}]),i}((0,M.y)(U.Z));(0,p._)([(0,w.Cb)()],G.prototype,"_pointsView",void 0),(0,p._)([(0,w.Cb)()],G.prototype,"_polylinesView",void 0),(0,p._)([(0,w.Cb)()],G.prototype,"_polygonsView",void 0),(0,p._)([(0,w.Cb)()],G.prototype,"_fetchingPromise",void 0),(0,p._)([(0,w.Cb)()],G.prototype,"updating",void 0);var L=G=(0,p._)([(0,_.j)("esri.views.2d.layers.KMLLayerView2D")],G)},95986:function(e,t,i){i.d(t,{y:function(){return q}});var n,r=i(15671),a=i(43144),s=i(11752),o=i(61120),l=i(60136),u=i(29388),h=i(27366),c=i(40110),d=i(60354),p=i(8537),f=i(49861),y=(i(63780),i(93169),i(25243),i(69912)),v=i(33624),g=i(67123),m=(i(32718),i(75366),function(e){(0,l.Z)(i,e);var t=(0,u.Z)(i);function i(){return(0,r.Z)(this,i),t.apply(this,arguments)}return(0,a.Z)(i)}(g.wq)),b=m=(0,h._)([(0,y.j)("esri.views.layers.support.ClipArea")],m),w=n=function(e){(0,l.Z)(i,e);var t=(0,u.Z)(i);function i(){var e;return(0,r.Z)(this,i),(e=t.apply(this,arguments)).type="rect",e.left=null,e.right=null,e.top=null,e.bottom=null,e}return(0,a.Z)(i,[{key:"clone",value:function(){return new n({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}},{key:"version",get:function(){return(this._get("version")||0)+1}}]),i}(b);(0,h._)([(0,f.Cb)({type:[Number,String],json:{write:!0}})],w.prototype,"left",void 0),(0,h._)([(0,f.Cb)({type:[Number,String],json:{write:!0}})],w.prototype,"right",void 0),(0,h._)([(0,f.Cb)({type:[Number,String],json:{write:!0}})],w.prototype,"top",void 0),(0,h._)([(0,f.Cb)({type:[Number,String],json:{write:!0}})],w.prototype,"bottom",void 0),(0,h._)([(0,f.Cb)({readOnly:!0})],w.prototype,"version",null);var _,k=w=n=(0,h._)([(0,y.j)("esri.views.layers.support.ClipRect")],w),x=(i(59486),i(32238)),Z=i(77981),S=i(53866),C=i(80885),V={base:x.Z,key:"type",typeMap:{extent:S.Z,polygon:C.Z}},I=_=function(e){(0,l.Z)(i,e);var t=(0,u.Z)(i);function i(){var e;return(0,r.Z)(this,i),(e=t.apply(this,arguments)).type="geometry",e.geometry=null,e}return(0,a.Z)(i,[{key:"version",get:function(){return(this._get("version")||0)+1}},{key:"clone",value:function(){return new _({geometry:this.geometry.clone()})}}]),i}(b);(0,h._)([(0,f.Cb)({types:V,json:{read:Z.im,write:!0}})],I.prototype,"geometry",void 0),(0,h._)([(0,f.Cb)({readOnly:!0})],I.prototype,"version",null);var P=I=_=(0,h._)([(0,y.j)("esri.views.layers.support.Geometry")],I),R=function(e){(0,l.Z)(i,e);var t=(0,u.Z)(i);function i(){var e;return(0,r.Z)(this,i),(e=t.apply(this,arguments)).type="path",e.path=[],e}return(0,a.Z)(i,[{key:"version",get:function(){return(this._get("version")||0)+1}}]),i}(b);(0,h._)([(0,f.Cb)({type:[[[Number]]],json:{write:!0}})],R.prototype,"path",void 0),(0,h._)([(0,f.Cb)({readOnly:!0})],R.prototype,"version",null);var M=R=(0,h._)([(0,y.j)("esri.views.layers.support.Path")],R),T=c.Z.ofType({key:"type",base:b,typeMap:{rect:k,path:M,geometry:P}}),q=function(e){var t=function(e){(0,l.Z)(i,e);var t=(0,u.Z)(i);function i(){var e;return(0,r.Z)(this,i),(e=t.apply(this,arguments)).clips=new T,e.moving=!1,e.attached=!1,e.lastUpdateId=-1,e.updateRequested=!1,e}return(0,a.Z)(i,[{key:"initialize",value:function(){var e,t=this;this.container||(this.container=new v.W),this.container.fadeTransitionEnabled=!0,this.container.opacity=0,this.container.clips=this.clips,this.handles.add([(0,p.S1)(this,"suspended",(function(e){t.container&&(t.container.visible=!e),t.view&&!e&&t.updateRequested&&t.view.requestUpdate()}),!0),(0,p.S1)(this,["layer.opacity","container"],(function(){var e,i;t.container&&(t.container.opacity=null!=(e=null==(i=t.layer)?void 0:i.opacity)?e:1)}),!0),(0,p.S1)(this,["layer.blendMode"],(function(e){t.container&&(t.container.blendMode=e)}),!0),(0,p.S1)(this,["layer.effect"],(function(e){t.container&&(t.container.effect=e)}),!0),this.clips.on("change",(function(){t.container.clips=t.clips,t.notifyChange("clips")}))]),null!=(e=this.view)&&e.whenLayerView?this.view.whenLayerView(this.layer).then((function(e){e!==t||t.attached||t.destroyed||(t.attach(),t.requestUpdate(),t.attached=!0)}),(function(){})):this.when().then((function(){t.attached||t.destroyed||(t.attach(),t.requestUpdate(),t.attached=!0)}),(function(){}))}},{key:"destroy",value:function(){this.attached&&(this.detach(),this.attached=!1),this.handles.remove("initialize"),this.updateRequested=!1}},{key:"updating",get:function(){return!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!(!this.updatingHandles||!this.updatingHandles.updating)}},{key:"isVisibleAtScale",value:function(e){var t=!0,i=this.layer,n=i.minScale,r=i.maxScale;if(null!=n&&null!=r){var a=!n,s=!r;!a&&e<=n&&(a=!0),!s&&e>=r&&(s=!0),t=a&&s}return t}},{key:"requestUpdate",value:function(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}},{key:"processUpdate",value:function(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}},{key:"hitTest",value:function(e,t){return Promise.resolve(null)}},{key:"isUpdating",value:function(){return!1}},{key:"isRendering",value:function(){return!1}},{key:"canResume",value:function(){return!!(0,s.Z)((0,o.Z)(i.prototype),"canResume",this).call(this)&&this.isVisibleAtScale(this.view.scale)}}]),i}(e);return(0,h._)([(0,f.Cb)({type:T,set:function(e){var t=(0,d.Z)(e,this._get("clips"),T);this._set("clips",t)}})],t.prototype,"clips",void 0),(0,h._)([(0,f.Cb)()],t.prototype,"moving",void 0),(0,h._)([(0,f.Cb)()],t.prototype,"attached",void 0),(0,h._)([(0,f.Cb)()],t.prototype,"container",void 0),(0,h._)([(0,f.Cb)()],t.prototype,"suspended",void 0),(0,h._)([(0,f.Cb)({readOnly:!0})],t.prototype,"updateParameters",void 0),(0,h._)([(0,f.Cb)()],t.prototype,"updateRequested",void 0),(0,h._)([(0,f.Cb)()],t.prototype,"updating",null),(0,h._)([(0,f.Cb)()],t.prototype,"view",void 0),t=(0,h._)([(0,y.j)("esri.views.2d.layers.LayerView2D")],t)}},75391:function(e,t,i){i.d(t,{Z:function(){return h}});var n=i(15671),r=i(43144),a=i(11752),s=i(61120),o=i(60136),l=i(29388),u=i(80613),h=function(e){(0,o.Z)(i,e);var t=(0,l.Z)(i);function i(){return(0,n.Z)(this,i),t.apply(this,arguments)}return(0,r.Z)(i,[{key:"renderChildren",value:function(e){this.attributeView.bindTextures(e.context,!1),this.children.some((function(e){return e.hasData}))&&((0,a.Z)((0,s.Z)(i.prototype),"renderChildren",this).call(this,e),e.drawPhase===u.jx.MAP&&this._renderChildren(e),this.hasHighlight()&&e.drawPhase===u.jx.HIGHLIGHT&&this._renderHighlight(e),this._boundsRenderer&&this._boundsRenderer.doRender(e))}},{key:"_renderHighlight",value:function(e){var t=e.painter.effects.highlight;t.bind(e),this._renderChildren(e,t.defines),t.draw(e),t.unbind()}}]),i}(i(82022).Z)},67581:function(e,t,i){i.d(t,{Z:function(){return m}});var n=i(15671),r=i(43144),a=i(60136),s=i(29388),o=i(27366),l=i(85015),u=i(91505),h=i(41691),c=i(79056),d=i(32718),p=i(92026),f=i(67426),y=i(49861),v=(i(63780),i(93169),i(25243),i(69912)),g=function(e){(0,a.Z)(i,e);var t=(0,s.Z)(i);function i(e){var r;return(0,n.Z)(this,i),(r=t.call(this,e)).layer=null,r.parent=null,r}return(0,r.Z)(i,[{key:"initialize",value:function(){var e=this;this.when().catch((function(t){if("layerview:create-error"!==t.name){var i=e.layer&&e.layer.id||"no id",n=e.layer&&e.layer.title||"no title";throw d.Z.getLogger(e.declaredClass).error("#resolve()","Failed to resolve layer view (layer title: '".concat(n,"', id: '").concat(i,"')"),t),t}}))}},{key:"fullOpacity",get:function(){return(0,p.Pt)(this.get("layer.opacity"),1)*(0,p.Pt)(this.get("parent.fullOpacity"),1)}},{key:"suspended",get:function(){return!this.canResume()}},{key:"suspendInfo",get:function(){return this.getSuspendInfo()}},{key:"legendEnabled",get:function(){return!this.suspended&&!0===this.layer.legendEnabled}},{key:"updating",get:function(){return!!(this.updatingHandles&&this.updatingHandles.updating||this.isUpdating())}},{key:"updatingProgress",get:function(){return this.updating?0:1}},{key:"visible",get:function(){var e;return!0===(null==(e=this.layer)?void 0:e.visible)},set:function(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")}},{key:"canResume",value:function(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1}},{key:"getSuspendInfo",value:function(){var e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}},{key:"isUpdating",value:function(){return!1}}]),i}((0,h.p)((0,c.I)((0,f.v)(u.Z.EventedMixin(l.Z)))));(0,o._)([(0,y.Cb)()],g.prototype,"fullOpacity",null),(0,o._)([(0,y.Cb)()],g.prototype,"layer",void 0),(0,o._)([(0,y.Cb)()],g.prototype,"parent",void 0),(0,o._)([(0,y.Cb)({readOnly:!0})],g.prototype,"suspended",null),(0,o._)([(0,y.Cb)({readOnly:!0})],g.prototype,"suspendInfo",null),(0,o._)([(0,y.Cb)({readOnly:!0})],g.prototype,"legendEnabled",null),(0,o._)([(0,y.Cb)({type:Boolean,readOnly:!0})],g.prototype,"updating",null),(0,o._)([(0,y.Cb)({readOnly:!0})],g.prototype,"updatingProgress",null),(0,o._)([(0,y.Cb)()],g.prototype,"visible",null);var m=g=(0,o._)([(0,v.j)("esri.views.layers.LayerView")],g)}}]);
//# sourceMappingURL=5450.4fae810b.chunk.js.map