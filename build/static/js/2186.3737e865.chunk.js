"use strict";(self.webpackChunkvilniausdnr=self.webpackChunkvilniausdnr||[]).push([[2186],{95986:function(e,t,n){n.d(t,{y:function(){return M}});var i,r=n(15671),a=n(43144),s=n(11752),u=n(61120),o=n(60136),l=n(29388),p=n(27366),c=n(40110),h=n(60354),d=n(8537),y=n(49861),f=(n(63780),n(93169),n(25243),n(69912)),v=n(33624),g=n(67123),w=(n(32718),n(75366),function(e){(0,o.Z)(n,e);var t=(0,l.Z)(n);function n(){return(0,r.Z)(this,n),t.apply(this,arguments)}return(0,a.Z)(n)}(g.wq)),b=w=(0,p._)([(0,f.j)("esri.views.layers.support.ClipArea")],w),Z=i=function(e){(0,o.Z)(n,e);var t=(0,l.Z)(n);function n(){var e;return(0,r.Z)(this,n),(e=t.apply(this,arguments)).type="rect",e.left=null,e.right=null,e.top=null,e.bottom=null,e}return(0,a.Z)(n,[{key:"clone",value:function(){return new i({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}},{key:"version",get:function(){return(this._get("version")||0)+1}}]),n}(b);(0,p._)([(0,y.Cb)({type:[Number,String],json:{write:!0}})],Z.prototype,"left",void 0),(0,p._)([(0,y.Cb)({type:[Number,String],json:{write:!0}})],Z.prototype,"right",void 0),(0,p._)([(0,y.Cb)({type:[Number,String],json:{write:!0}})],Z.prototype,"top",void 0),(0,p._)([(0,y.Cb)({type:[Number,String],json:{write:!0}})],Z.prototype,"bottom",void 0),(0,p._)([(0,y.Cb)({readOnly:!0})],Z.prototype,"version",null);var _,C=Z=i=(0,p._)([(0,f.j)("esri.views.layers.support.ClipRect")],Z),m=(n(59486),n(32238)),k=n(77981),V=n(53866),R=n(80885),S={base:m.Z,key:"type",typeMap:{extent:V.Z,polygon:R.Z}},q=_=function(e){(0,o.Z)(n,e);var t=(0,l.Z)(n);function n(){var e;return(0,r.Z)(this,n),(e=t.apply(this,arguments)).type="geometry",e.geometry=null,e}return(0,a.Z)(n,[{key:"version",get:function(){return(this._get("version")||0)+1}},{key:"clone",value:function(){return new _({geometry:this.geometry.clone()})}}]),n}(b);(0,p._)([(0,y.Cb)({types:S,json:{read:k.im,write:!0}})],q.prototype,"geometry",void 0),(0,p._)([(0,y.Cb)({readOnly:!0})],q.prototype,"version",null);var U=q=_=(0,p._)([(0,f.j)("esri.views.layers.support.Geometry")],q),T=function(e){(0,o.Z)(n,e);var t=(0,l.Z)(n);function n(){var e;return(0,r.Z)(this,n),(e=t.apply(this,arguments)).type="path",e.path=[],e}return(0,a.Z)(n,[{key:"version",get:function(){return(this._get("version")||0)+1}}]),n}(b);(0,p._)([(0,y.Cb)({type:[[[Number]]],json:{write:!0}})],T.prototype,"path",void 0),(0,p._)([(0,y.Cb)({readOnly:!0})],T.prototype,"version",null);var j=T=(0,p._)([(0,f.j)("esri.views.layers.support.Path")],T),x=c.Z.ofType({key:"type",base:b,typeMap:{rect:C,path:j,geometry:U}}),M=function(e){var t=function(e){(0,o.Z)(n,e);var t=(0,l.Z)(n);function n(){var e;return(0,r.Z)(this,n),(e=t.apply(this,arguments)).clips=new x,e.moving=!1,e.attached=!1,e.lastUpdateId=-1,e.updateRequested=!1,e}return(0,a.Z)(n,[{key:"initialize",value:function(){var e,t=this;this.container||(this.container=new v.W),this.container.fadeTransitionEnabled=!0,this.container.opacity=0,this.container.clips=this.clips,this.handles.add([(0,d.S1)(this,"suspended",(function(e){t.container&&(t.container.visible=!e),t.view&&!e&&t.updateRequested&&t.view.requestUpdate()}),!0),(0,d.S1)(this,["layer.opacity","container"],(function(){var e,n;t.container&&(t.container.opacity=null!=(e=null==(n=t.layer)?void 0:n.opacity)?e:1)}),!0),(0,d.S1)(this,["layer.blendMode"],(function(e){t.container&&(t.container.blendMode=e)}),!0),(0,d.S1)(this,["layer.effect"],(function(e){t.container&&(t.container.effect=e)}),!0),this.clips.on("change",(function(){t.container.clips=t.clips,t.notifyChange("clips")}))]),null!=(e=this.view)&&e.whenLayerView?this.view.whenLayerView(this.layer).then((function(e){e!==t||t.attached||t.destroyed||(t.attach(),t.requestUpdate(),t.attached=!0)}),(function(){})):this.when().then((function(){t.attached||t.destroyed||(t.attach(),t.requestUpdate(),t.attached=!0)}),(function(){}))}},{key:"destroy",value:function(){this.attached&&(this.detach(),this.attached=!1),this.handles.remove("initialize"),this.updateRequested=!1}},{key:"updating",get:function(){return!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!(!this.updatingHandles||!this.updatingHandles.updating)}},{key:"isVisibleAtScale",value:function(e){var t=!0,n=this.layer,i=n.minScale,r=n.maxScale;if(null!=i&&null!=r){var a=!i,s=!r;!a&&e<=i&&(a=!0),!s&&e>=r&&(s=!0),t=a&&s}return t}},{key:"requestUpdate",value:function(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}},{key:"processUpdate",value:function(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}},{key:"hitTest",value:function(e,t){return Promise.resolve(null)}},{key:"isUpdating",value:function(){return!1}},{key:"isRendering",value:function(){return!1}},{key:"canResume",value:function(){return!!(0,s.Z)((0,u.Z)(n.prototype),"canResume",this).call(this)&&this.isVisibleAtScale(this.view.scale)}}]),n}(e);return(0,p._)([(0,y.Cb)({type:x,set:function(e){var t=(0,h.Z)(e,this._get("clips"),x);this._set("clips",t)}})],t.prototype,"clips",void 0),(0,p._)([(0,y.Cb)()],t.prototype,"moving",void 0),(0,p._)([(0,y.Cb)()],t.prototype,"attached",void 0),(0,p._)([(0,y.Cb)()],t.prototype,"container",void 0),(0,p._)([(0,y.Cb)()],t.prototype,"suspended",void 0),(0,p._)([(0,y.Cb)({readOnly:!0})],t.prototype,"updateParameters",void 0),(0,p._)([(0,y.Cb)()],t.prototype,"updateRequested",void 0),(0,p._)([(0,y.Cb)()],t.prototype,"updating",null),(0,p._)([(0,y.Cb)()],t.prototype,"view",void 0),t=(0,p._)([(0,f.j)("esri.views.2d.layers.LayerView2D")],t)}},82186:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var i=n(37762),r=n(15861),a=n(15671),s=n(43144),u=n(60136),o=n(29388),l=n(87757),p=n(27366),c=n(52639),h=n(40110),d=n(92026),y=n(8537),f=(n(32718),n(25243),n(63780),n(93169),n(75366),n(69912)),v=n(95986),g=n(75391),w=n(43634),b=n(67581),Z="sublayers",_="layerView",C=Object.freeze({remove:function(){},pause:function(){},resume:function(){}}),m=function(e){(0,u.Z)(n,e);var t=(0,o.Z)(n);function n(){return(0,a.Z)(this,n),t.apply(this,arguments)}return(0,s.Z)(n,[{key:"fetchPopupFeatures",value:function(){var e=(0,r.Z)(l.mark((function e(t){return l.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Array.from(this.graphicsViews(),(function(e){return e.hitTest(t).filter((function(e){return!!e.popupTemplate}))})).flat());case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"graphicsViews",value:l.mark((function e(){return l.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(0,d.pC)(this._graphicsViewsFeatureCollectionMap)){e.next=4;break}return e.delegateYield(this._graphicsViewsFeatureCollectionMap.keys(),"t0",2);case 2:case 6:e.next=9;break;case 4:if(!(0,d.pC)(this._graphicsViews)){e.next=8;break}return e.delegateYield(this._graphicsViews,"t1",6);case 8:return e.delegateYield([],"t2",9);case 9:case"end":return e.stop()}}),e,this)}))},{key:"hitTest",value:function(){var e=(0,r.Z)(l.mark((function e(t,n){var a,s=this;return l.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Array.from(this.graphicsViews(),function(){var e=(0,r.Z)(l.mark((function e(n){var r,a,u,o,p;return l.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.hitTest(t);case 2:if(r=e.sent,(0,d.pC)(s._graphicsViewsFeatureCollectionMap)){a=s._graphicsViewsFeatureCollectionMap.get(n),u=(0,i.Z)(r);try{for(u.s();!(o=u.n()).done;)!(p=o.value).popupTemplate&&a.popupTemplate&&(p.popupTemplate=a.popupTemplate)}catch(l){u.e(l)}finally{u.f()}}return e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=3,Promise.all(a);case 3:return e.abrupt("return",e.sent.flat());case 4:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"highlight",value:function(e){var t,n=this;if("number"==typeof e?t=[e]:e instanceof c.Z?t=[e.uid]:Array.isArray(e)&&e.length>0?t="number"==typeof e[0]?e:e.map((function(e){return e&&e.uid})):h.Z.isCollection(e)&&(t=e.map((function(e){return e&&e.uid})).toArray()),t=t.filter((function(e){return null!=e})),!t.length)return C;var r,a=(0,i.Z)(this.graphicsViews());try{for(a.s();!(r=a.n()).done;){r.value.addHighlight(t)}}catch(s){a.e(s)}finally{a.f()}return{remove:function(){var e,r=(0,i.Z)(n.graphicsViews());try{for(r.s();!(e=r.n()).done;){e.value.removeHighlight(t)}}catch(s){r.e(s)}finally{r.f()}}}}},{key:"update",value:function(e){var t,n=(0,i.Z)(this.graphicsViews());try{for(n.s();!(t=n.n()).done;){t.value.processUpdate(e)}}catch(r){n.e(r)}finally{n.f()}}},{key:"attach",value:function(){var e=this,t=this.view,n=function(){return e.requestUpdate()},r=this.layer.featureCollections;if((0,d.pC)(r)&&r.length){this._graphicsViewsFeatureCollectionMap=new Map;var a,s=(0,i.Z)(r);try{var u=function(){var i=a.value,r=new g.Z(e.view.featuresTilingScheme);r.fadeTransitionEnabled=!0;var s=new w.Z({view:t,graphics:i.source,renderer:i.renderer,requestUpdateCallback:n,container:r});e._graphicsViewsFeatureCollectionMap.set(s,i),e.container.addChild(s.container),e.handles.add([(0,y.S1)(i,"visible",(function(e){return s.container.visible=e})),(0,y.S1)(s,"updating",(function(){return e.notifyChange("updating")}))],_)};for(s.s();!(a=s.n()).done;)u()}catch(o){s.e(o)}finally{s.f()}}else(0,d.pC)(this.layer.sublayers)&&this.handles.add((0,y.on)(this.layer,"sublayers","change",(function(){return e._createGraphicsViews()}),(function(){return e._createGraphicsViews()}),(function(){return e._destroyGraphicsViews()})),Z)}},{key:"detach",value:function(){this._destroyGraphicsViews(),this.handles.remove(Z)}},{key:"moveStart",value:function(){}},{key:"moveEnd",value:function(){}},{key:"viewChange",value:function(){var e,t=(0,i.Z)(this.graphicsViews());try{for(t.s();!(e=t.n()).done;){e.value.viewChange()}}catch(n){t.e(n)}finally{t.f()}}},{key:"isUpdating",value:function(){var e,t=(0,i.Z)(this.graphicsViews());try{for(t.s();!(e=t.n()).done;){if(e.value.updating)return!0}}catch(n){t.e(n)}finally{t.f()}return!1}},{key:"_destroyGraphicsViews",value:function(){this.container.removeAllChildren(),this.handles.remove(_);var e,t=(0,i.Z)(this.graphicsViews());try{for(t.s();!(e=t.n()).done;){e.value.destroy()}}catch(n){t.e(n)}finally{t.f()}this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null}},{key:"_createGraphicsViews",value:function(){var e=this;if(this._destroyGraphicsViews(),!(0,d.Wi)(this.layer.sublayers)){var t,n=[],r=this.view,a=function(){return e.requestUpdate()},s=(0,i.Z)(this.layer.sublayers);try{var u=function(){var i=t.value,s=new g.Z(e.view.featuresTilingScheme);s.fadeTransitionEnabled=!0;var u=new w.Z({view:r,graphics:i.graphics,requestUpdateCallback:a,container:s});e.handles.add([i.on("graphic-update",u.graphicUpdateHandler),(0,y.S1)(i,"visible",(function(e){return u.container.visible=e})),(0,y.S1)(u,"updating",(function(){return e.notifyChange("updating")}))],_),e.container.addChild(u.container),n.push(u)};for(s.s();!(t=s.n()).done;)u()}catch(o){s.e(o)}finally{s.f()}this._graphicsViews=n}}}]),n}((0,v.y)(b.Z)),k=m=(0,p._)([(0,f.j)("esri.views.2d.layers.MapNotesLayerView2D")],m)},75391:function(e,t,n){n.d(t,{Z:function(){return p}});var i=n(15671),r=n(43144),a=n(11752),s=n(61120),u=n(60136),o=n(29388),l=n(80613),p=function(e){(0,u.Z)(n,e);var t=(0,o.Z)(n);function n(){return(0,i.Z)(this,n),t.apply(this,arguments)}return(0,r.Z)(n,[{key:"renderChildren",value:function(e){this.attributeView.bindTextures(e.context,!1),this.children.some((function(e){return e.hasData}))&&((0,a.Z)((0,s.Z)(n.prototype),"renderChildren",this).call(this,e),e.drawPhase===l.jx.MAP&&this._renderChildren(e),this.hasHighlight()&&e.drawPhase===l.jx.HIGHLIGHT&&this._renderHighlight(e),this._boundsRenderer&&this._boundsRenderer.doRender(e))}},{key:"_renderHighlight",value:function(e){var t=e.painter.effects.highlight;t.bind(e),this._renderChildren(e,t.defines),t.draw(e),t.unbind()}}]),n}(n(82022).Z)},67581:function(e,t,n){n.d(t,{Z:function(){return w}});var i=n(15671),r=n(43144),a=n(60136),s=n(29388),u=n(27366),o=n(85015),l=n(91505),p=n(41691),c=n(79056),h=n(32718),d=n(92026),y=n(67426),f=n(49861),v=(n(63780),n(93169),n(25243),n(69912)),g=function(e){(0,a.Z)(n,e);var t=(0,s.Z)(n);function n(e){var r;return(0,i.Z)(this,n),(r=t.call(this,e)).layer=null,r.parent=null,r}return(0,r.Z)(n,[{key:"initialize",value:function(){var e=this;this.when().catch((function(t){if("layerview:create-error"!==t.name){var n=e.layer&&e.layer.id||"no id",i=e.layer&&e.layer.title||"no title";throw h.Z.getLogger(e.declaredClass).error("#resolve()","Failed to resolve layer view (layer title: '".concat(i,"', id: '").concat(n,"')"),t),t}}))}},{key:"fullOpacity",get:function(){return(0,d.Pt)(this.get("layer.opacity"),1)*(0,d.Pt)(this.get("parent.fullOpacity"),1)}},{key:"suspended",get:function(){return!this.canResume()}},{key:"suspendInfo",get:function(){return this.getSuspendInfo()}},{key:"legendEnabled",get:function(){return!this.suspended&&!0===this.layer.legendEnabled}},{key:"updating",get:function(){return!!(this.updatingHandles&&this.updatingHandles.updating||this.isUpdating())}},{key:"updatingProgress",get:function(){return this.updating?0:1}},{key:"visible",get:function(){var e;return!0===(null==(e=this.layer)?void 0:e.visible)},set:function(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")}},{key:"canResume",value:function(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1}},{key:"getSuspendInfo",value:function(){var e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}},{key:"isUpdating",value:function(){return!1}}]),n}((0,p.p)((0,c.I)((0,y.v)(l.Z.EventedMixin(o.Z)))));(0,u._)([(0,f.Cb)()],g.prototype,"fullOpacity",null),(0,u._)([(0,f.Cb)()],g.prototype,"layer",void 0),(0,u._)([(0,f.Cb)()],g.prototype,"parent",void 0),(0,u._)([(0,f.Cb)({readOnly:!0})],g.prototype,"suspended",null),(0,u._)([(0,f.Cb)({readOnly:!0})],g.prototype,"suspendInfo",null),(0,u._)([(0,f.Cb)({readOnly:!0})],g.prototype,"legendEnabled",null),(0,u._)([(0,f.Cb)({type:Boolean,readOnly:!0})],g.prototype,"updating",null),(0,u._)([(0,f.Cb)({readOnly:!0})],g.prototype,"updatingProgress",null),(0,u._)([(0,f.Cb)()],g.prototype,"visible",null);var w=g=(0,u._)([(0,v.j)("esri.views.layers.LayerView")],g)}}]);
//# sourceMappingURL=2186.3737e865.chunk.js.map