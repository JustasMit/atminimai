"use strict";(self.webpackChunkvilniausdnr=self.webpackChunkvilniausdnr||[]).push([[1657],{51657:function(e,t,n){n.r(t),n.d(t,{default:function(){return E}});var r=n(1413),i=n(37762),a=n(15861),s=n(15671),u=n(43144),o=n(87757),c=n(76200),l=n(10064),p=n(32718),d=n(92026),f=n(66978),h=n(77981),y=n(92975),v=n(83406),g=n(97114),m=n(19995),b=n(83706),x=n(47615),k=n(63543),_=n(68808),w=n(52410),I=n(85249),Z=n(80031),F={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}},E=function(){function e(){var t=this;(0,s.Z)(this,e),this._queryEngine=null,this._snapshotFeatures=function(){var e=(0,a.Z)(o.mark((function e(n){var r;return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._fetch(n);case 2:return r=e.sent,e.abrupt("return",t._createFeatures(r));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}return(0,u.Z)(e,[{key:"destroy",value:function(){var e;null==(e=this._queryEngine)||e.destroy(),this._queryEngine=this._fieldsIndex=this._createDefaultAttributes=null}},{key:"load",value:function(){var e=(0,a.Z)(o.mark((function e(t){var n,a,s,u,c,p,d,f,h,v,m,_,E,S,T,j,q,P,O,G,R,C,D,M,A,Q,N,J=arguments;return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=J.length>1&&void 0!==J[1]?J[1]:{},this.loadOptions={url:t.url,customParameters:t.customParameters},a=[],e.next=5,this._checkProjection(t.spatialReference);case 5:if(s=null,e.t0=t.url,!e.t0){e.next=11;break}return e.next=10,this._fetch(null==n?void 0:n.signal);case 10:s=e.sent;case 11:u=(0,x.my)(s,{geometryType:t.geometryType}),c=t.fields||u.fields||[],p=null!=t.hasZ?t.hasZ:u.hasZ,d=u.geometryType,f=t.objectIdField||u.objectIdFieldName||"__OBJECTID",h=t.spatialReference||y.Zn,v=t.timeInfo,c===u.fields&&u.unknownFields.length>0&&a.push({name:"geojson-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:u.unknownFields}}),m=c.find((function(e){return e.name===f})),m?("esriFieldTypeString"!==m.type&&(m.type="esriFieldTypeOID"),m.editable=!1,m.nullable=!1):(m={alias:f,name:f,type:"string"===u.objectIdFieldType?"esriFieldTypeString":"esriFieldTypeOID",editable:!1,nullable:!1},c.unshift(m)),_={},E=(0,i.Z)(c),e.prev=18,E.s();case 20:if((S=E.n()).done){e.next=29;break}if(null==(T=S.value).name&&(T.name=T.alias),null==T.alias&&(T.alias=T.name),T.name){e.next=24;break}throw new l.Z("geojson-layer:invalid-field-name","field name is missing",{field:T});case 24:if(I.v.jsonValues.includes(T.type)){e.next=26;break}throw new l.Z("geojson-layer:invalid-field-type",'invalid type for field "'.concat(T.name,'"'),{field:T});case 26:T.name!==m.name&&void 0!==(j=(0,Z.os)(T))&&(_[T.name]=j);case 27:e.next=20;break;case 29:e.next=34;break;case 31:e.prev=31,e.t1=e.catch(18),E.e(e.t1);case 34:return e.prev=34,E.f(),e.finish(34);case 37:return this._fieldsIndex=new w.Z(c),(q=this._fieldsIndex.requiredFields.indexOf(m))>-1&&this._fieldsIndex.requiredFields.splice(q,1),v&&(v.startTimeField&&((P=this._fieldsIndex.get(v.startTimeField))?(v.startTimeField=P.name,P.type="esriFieldTypeDate"):v.startTimeField=null),v.endTimeField&&((O=this._fieldsIndex.get(v.endTimeField))?(v.endTimeField=O.name,O.type="esriFieldTypeDate"):v.endTimeField=null),v.trackIdField&&((G=this._fieldsIndex.get(v.trackIdField))?v.trackIdField=G.name:(v.trackIdField=null,a.push({name:"geojson-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:v}}))),v.startTimeField||v.endTimeField||(a.push({name:"geojson-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:v}}),v=null)),R=d?(0,k.bU)(d):null,C={warnings:a,featureErrors:[],layerDefinition:(0,r.Z)((0,r.Z)({},F),{},{drawingInfo:R,templates:(0,k.Hq)(_),extent:null,geometryType:d,objectIdField:f,fields:c,hasZ:!!p,timeInfo:v})},this._queryEngine=new b.Z({fields:c,geometryType:d,hasM:!1,hasZ:p,objectIdField:f,spatialReference:h,timeInfo:v,featureStore:new g.Z({geometryType:d,hasM:!1,hasZ:p}),cacheSpatialQueries:!0}),this._createDefaultAttributes=(0,k.Dm)(_,f),e.next=44,this._createFeatures(s);case 44:return D=e.sent,this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,D),M=this._normalizeFeatures(D,C.warnings,C.featureErrors),this._queryEngine.featureStore.addMany(M),C.layerDefinition.extent=this._queryEngine.fullExtent,C.layerDefinition.timeInfo&&(A=this._queryEngine.timeExtent,Q=A.start,N=A.end,C.layerDefinition.timeInfo.timeExtent=[Q,N]),e.abrupt("return",C);case 49:case"end":return e.stop()}}),e,this,[[18,31,34,37]])})));return function(t){return e.apply(this,arguments)}}()},{key:"applyEdits",value:function(){var e=(0,a.Z)(o.mark((function e(t){var n,r,i;return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this._queryEngine,r=n.spatialReference,i=n.geometryType,e.next=3,Promise.all([(0,_.b)(r,i),(0,m._W)(t.adds,r),(0,m._W)(t.updates,r)]);case 3:return e.next=5,this._waitSnapshotComplete();case 5:return e.abrupt("return",this._applyEdits(t));case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"queryFeatures",value:function(){var e=(0,a.Z)(o.mark((function e(){var t,n,r=arguments;return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:{},n=r.length>1&&void 0!==r[1]?r[1]:{},e.next=4,this._waitSnapshotComplete();case 4:return e.abrupt("return",this._queryEngine.executeQuery(t,n.signal));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"queryFeatureCount",value:function(){var e=(0,a.Z)(o.mark((function e(){var t,n,r=arguments;return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:{},n=r.length>1&&void 0!==r[1]?r[1]:{},e.next=4,this._waitSnapshotComplete();case 4:return e.abrupt("return",this._queryEngine.executeQueryForCount(t,n.signal));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"queryObjectIds",value:function(){var e=(0,a.Z)(o.mark((function e(){var t,n,r=arguments;return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:{},n=r.length>1&&void 0!==r[1]?r[1]:{},e.next=4,this._waitSnapshotComplete();case 4:return e.abrupt("return",this._queryEngine.executeQueryForIds(t,n.signal));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"queryExtent",value:function(){var e=(0,a.Z)(o.mark((function e(){var t,n,r=arguments;return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:{},n=r.length>1&&void 0!==r[1]?r[1]:{},e.next=4,this._waitSnapshotComplete();case 4:return e.abrupt("return",this._queryEngine.executeQueryForExtent(t,n.signal));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"querySnapping",value:function(){var e=(0,a.Z)(o.mark((function e(t){var n,r=arguments;return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:{},e.next=3,this._waitSnapshotComplete();case 3:return e.abrupt("return",this._queryEngine.executeQueryForSnapping(t,n.signal));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"refresh",value:function(){var e=(0,a.Z)(o.mark((function e(t){var n,r=this;return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.loadOptions.customParameters=t,null==(n=this._snapshotTask)||n.abort(),this._snapshotTask=(0,f.vr)(this._snapshotFeatures),this._snapshotTask.promise.then((function(e){r._queryEngine.featureStore.clear(),r._objectIdGenerator=r._createObjectIdGenerator(r._queryEngine,e);var t=r._normalizeFeatures(e);t&&r._queryEngine.featureStore.addMany(t)}),(function(e){r._queryEngine.featureStore.clear(),(0,f.D_)(e)||p.Z.getLogger("esri.layers.GeoJSONLayer").error(new l.Z("geojson-layer:refresh","An error occurred during refresh",{error:e}))})),e.next=6,this._waitSnapshotComplete();case 6:return e.abrupt("return",{extent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent});case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_createFeatures",value:function(){var e=(0,a.Z)(o.mark((function e(t){var n,r,a,s,u,c,l,p;return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this._queryEngine,r=n.geometryType,a=n.hasZ,s=n.objectIdField,u=(0,x.lG)(t,{geometryType:r,hasZ:a,objectIdField:s}),!(0,y.fS)(this._queryEngine.spatialReference,y.Zn)){c=(0,i.Z)(u);try{for(c.s();!(l=c.n()).done;)p=l.value,(0,d.pC)(p.geometry)&&(p.geometry=(0,v.GH)((0,m.iV)((0,v.di)(p.geometry,this._queryEngine.geometryType,this._queryEngine.hasZ,!1),y.Zn,this._queryEngine.spatialReference)))}catch(o){c.e(o)}finally{c.f()}}return e.abrupt("return",u);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_waitSnapshotComplete",value:function(){var e=(0,a.Z)(o.mark((function e(){return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this._snapshotTask||this._snapshotTask.finished){e.next=9;break}return e.prev=1,e.next=4,this._snapshotTask.promise;case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:return e.abrupt("return",this._waitSnapshotComplete());case 9:case"end":return e.stop()}}),e,this,[[1,6]])})));return function(){return e.apply(this,arguments)}}()},{key:"_fetch",value:function(){var e=(0,a.Z)(o.mark((function e(t){var n,i,a,s;return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.loadOptions,i=n.url,a=n.customParameters,e.next=5,(0,c.default)(i,{responseType:"json",query:(0,r.Z)({},a),signal:t});case 5:return s=e.sent.data,e.next=8,(0,x.O3)(s);case 8:return e.abrupt("return",s);case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_normalizeFeatures",value:function(e,t,n){var r,a=this._queryEngine.objectIdField,s=[],u=(0,i.Z)(e);try{for(u.s();!(r=u.n()).done;){var o=r.value,c=this._createDefaultAttributes(),l=(0,_.O0)(this._fieldsIndex,c,o.attributes,!0,t);l?null==n||n.push(l):(this._assignObjectId(c,o.attributes,!0),o.attributes=c,o.objectId=c[a],s.push(o))}}catch(p){u.e(p)}finally{u.f()}return s}},{key:"_applyEdits",value:function(e){var t=e.adds,n=e.updates,r=e.deletes,a={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(a,t),n&&n.length&&this._applyUpdateEdits(a,n),r&&r.length){var s,u=(0,i.Z)(r);try{for(u.s();!(s=u.n()).done;){var o=s.value;a.deleteResults.push((0,_.d1)(o))}}catch(c){u.e(c)}finally{u.f()}this._queryEngine.featureStore.removeManyById(r)}return{extent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent,featureEditResults:a}}},{key:"_applyAddEdits",value:function(e,t){var n,r=e.addResults,a=this._queryEngine,s=a.geometryType,u=a.hasM,o=a.hasZ,c=a.objectIdField,l=a.spatialReference,p=a.featureStore,f=[],y=(0,i.Z)(t);try{for(y.s();!(n=y.n()).done;){var g=n.value;if(g.geometry&&s!==(0,h.Ji)(g.geometry))r.push((0,_.av)("Incorrect geometry type."));else{var b=this._createDefaultAttributes(),x=(0,_.O0)(this._fieldsIndex,b,g.attributes);if(x)r.push(x);else{if(this._assignObjectId(b,g.attributes),g.attributes=b,null!=g.uid){var k=g.attributes[c];e.uidToObjectId[g.uid]=k}(0,d.pC)(g.geometry)&&(g.geometry=(0,m.iV)((0,_.og)(g.geometry,l),g.geometry.spatialReference,l)),f.push(g),r.push((0,_.d1)(g.attributes[c]))}}}}catch(w){y.e(w)}finally{y.f()}p.addMany((0,v.Yn)([],f,s,o,u,c))}},{key:"_applyUpdateEdits",value:function(e,t){var n,r=e.updateResults,a=this._queryEngine,s=a.geometryType,u=a.hasM,o=a.hasZ,c=a.objectIdField,l=a.spatialReference,p=a.featureStore,f=(0,i.Z)(t);try{for(f.s();!(n=f.n()).done;){var y=n.value,g=y.attributes,b=y.geometry,x=g&&g[c];if(null!=x)if(p.has(x)){var k=(0,v.EI)(p.getFeature(x),s,o,u);if((0,d.pC)(b)){if(s!==(0,h.Ji)(b)){r.push((0,_.av)("Incorrect geometry type."));continue}k.geometry=(0,m.iV)((0,_.og)(b,l),b.spatialReference,l)}if(g){var w=(0,_.O0)(this._fieldsIndex,k.attributes,g);if(w){r.push(w);continue}}p.add((0,v.XA)(k,s,o,u,c)),r.push((0,_.d1)(x))}else r.push((0,_.av)("Feature with object id ".concat(x," missing")));else r.push((0,_.av)("Identifier field ".concat(c," missing")))}}catch(I){f.e(I)}finally{f.f()}}},{key:"_createObjectIdGenerator",value:function(e,t){var n=e.fieldsIndex.get(e.objectIdField);if("esriFieldTypeString"===n.type)return function(){return n.name+"-"+Date.now().toString(16)};var r,a=Number.NEGATIVE_INFINITY,s=(0,i.Z)(t);try{for(s.s();!(r=s.n()).done;){var u=r.value;u.objectId&&(a=Math.max(a,u.objectId))}}catch(o){s.e(o)}finally{s.f()}return a=Math.max(0,a)+1,function(){return a++}}},{key:"_assignObjectId",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=this._queryEngine.objectIdField;e[r]=n&&r in t?t[r]:this._objectIdGenerator()}},{key:"_checkProjection",value:function(){var e=(0,a.Z)(o.mark((function e(t){return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,m._W)(y.Zn,t);case 3:e.next=8;break;case 5:throw e.prev=5,e.t0=e.catch(0),new l.Z("geojson-layer","Projection not supported");case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}()}]),e}()},47615:function(e,t,n){n.d(t,{lG:function(){return j},q9:function(){return h},my:function(){return T},O3:function(){return S}});var r=n(29439),i=n(37762),a=n(87757),s=n(10064),u=n(3182),o=n(80457),c=n(80031),l=a.mark(y),p=a.mark(v),d=a.mark(g),f={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function h(e){return f[e]}function y(e){var t,n,r;return a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:a.t0=e.type,a.next="Feature"===a.t0?3:"FeatureCollection"===a.t0?6:25;break;case 3:return a.next=5,e;case 5:return a.abrupt("break",25);case 6:t=(0,i.Z)(e.features),a.prev=7,t.s();case 9:if((n=t.n()).done){a.next=17;break}if(r=n.value,a.t1=r,!a.t1){a.next=15;break}return a.next=15,r;case 15:a.next=9;break;case 17:a.next=22;break;case 19:a.prev=19,a.t2=a.catch(7),t.e(a.t2);case 22:return a.prev=22,t.f(),a.finish(22);case 25:case"end":return a.stop()}}),l,null,[[7,19,22,25]])}function v(e){var t,n,r,s,u,o,c,l,d;return a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(e){a.next=2;break}return a.abrupt("return",null);case 2:a.t0=e.type,a.next="Point"===a.t0?5:"LineString"===a.t0||"MultiPoint"===a.t0?8:"MultiLineString"===a.t0||"Polygon"===a.t0?10:"MultiPolygon"===a.t0?27:58;break;case 5:return a.next=7,e.coordinates;case 7:return a.abrupt("break",58);case 8:return a.delegateYield(e.coordinates,"t1",9);case 9:return a.abrupt("break",58);case 10:t=(0,i.Z)(e.coordinates),a.prev=11,t.s();case 13:if((n=t.n()).done){a.next=18;break}return r=n.value,a.delegateYield(r,"t2",16);case 16:a.next=13;break;case 18:a.next=23;break;case 20:a.prev=20,a.t3=a.catch(11),t.e(a.t3);case 23:return a.prev=23,t.f(),a.finish(23);case 26:return a.abrupt("break",58);case 27:s=(0,i.Z)(e.coordinates),a.prev=28,s.s();case 30:if((u=s.n()).done){a.next=50;break}o=u.value,c=(0,i.Z)(o),a.prev=33,c.s();case 35:if((l=c.n()).done){a.next=40;break}return d=l.value,a.delegateYield(d,"t4",38);case 38:a.next=35;break;case 40:a.next=45;break;case 42:a.prev=42,a.t5=a.catch(33),c.e(a.t5);case 45:return a.prev=45,c.f(),a.finish(45);case 48:a.next=30;break;case 50:a.next=55;break;case 52:a.prev=52,a.t6=a.catch(28),s.e(a.t6);case 55:return a.prev=55,s.f(),a.finish(55);case 58:case"end":return a.stop()}}),p,null,[[11,20,23,26],[28,52,55,58],[33,42,45,48]])}function g(e){var t,n,r,s,c,l,p,f,y,v,g,m,b,x=arguments;return a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:t=x.length>1&&void 0!==x[1]?x[1]:{},n=t.geometryType,r=t.objectIdField,s=(0,i.Z)(e),a.prev=3,s.s();case 5:if((c=s.n()).done){a.next=18;break}if(l=c.value,f=l.geometry,y=l.properties,v=l.id,!f||h(f.type)===n){a.next=10;break}return a.abrupt("continue",16);case 10:return m=null!=(p=(g=y||{})[r])?p:null,r&&null!=v&&!g[r]&&(g[r]=m=v),b=new u.ZP(f?k(new o.Z,f,t):null,g,null,m),a.next=16,b;case 16:a.next=5;break;case 18:a.next=23;break;case 20:a.prev=20,a.t0=a.catch(3),s.e(a.t0);case 23:return a.prev=23,s.f(),a.finish(23);case 26:case"end":return a.stop()}}),d,null,[[3,20,23,26]])}function m(e){var t,n=(0,i.Z)(e);try{for(n.s();!(t=n.n()).done;){if(t.value.length>2)return!0}}catch(r){n.e(r)}finally{n.f()}return!1}function b(e){for(var t=0,n=0;n<e.length;n++){var r=e[n],i=e[(n+1)%e.length];t+=r[0]*i[1]-i[0]*r[1]}return t<=0}function x(e){var t=e[0],n=e[e.length-1];return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]||e.push(t),e}function k(e,t,n){switch(t.type){case"LineString":case"MultiPoint":return function(e,t,n){return I(e,t.coordinates,n),e}(e,t,n);case"MultiLineString":return function(e,t,n){var r,a=(0,i.Z)(t.coordinates);try{for(a.s();!(r=a.n()).done;){I(e,r.value,n)}}catch(s){a.e(s)}finally{a.f()}return e}(e,t,n);case"MultiPolygon":return function(e,t,n){var r,a=(0,i.Z)(t.coordinates);try{for(a.s();!(r=a.n()).done;){var s=r.value;_(e,s[0],n);for(var u=1;u<s.length;u++)w(e,s[u],n)}}catch(o){a.e(o)}finally{a.f()}return e}(e,t,n);case"Point":return function(e,t,n){return F(e,t.coordinates,n),e}(e,t,n);case"Polygon":return function(e,t,n){var r=t.coordinates;_(e,r[0],n);for(var i=1;i<r.length;i++)w(e,r[i],n);return e}(e,t,n)}}function _(e,t,n){var r=x(t);!function(e){return!b(e)}(r)?I(e,r,n):Z(e,r,n)}function w(e,t,n){var r=x(t);!function(e){return b(e)}(r)?I(e,r,n):Z(e,r,n)}function I(e,t,n){var r,a=(0,i.Z)(t);try{for(a.s();!(r=a.n()).done;){F(e,r.value,n)}}catch(s){a.e(s)}finally{a.f()}e.lengths.push(t.length)}function Z(e,t,n){for(var r=t.length-1;r>=0;r--)F(e,t[r],n);e.lengths.push(t.length)}function F(e,t,n){var i=(0,r.Z)(t,3),a=i[0],s=i[1],u=i[2];e.coords.push(a,s),n.hasZ&&e.coords.push(u||0)}function E(e){switch(typeof e){case"string":return"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function S(e){if(!e)throw new s.Z("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==e.type&&"FeatureCollection"!==e.type)throw new s.Z("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:e});var t=e.crs;if(t){var n="string"==typeof t?t:"name"===t.type?t.properties.name:"EPSG"===t.type?t.properties.code:null,r=new RegExp(".*(CRS84H?|4326)$","i");if(!n||!r.test(n))throw new s.Z("geojson-layer:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:t})}}function T(e){var t,n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=[],s=new Set,u=new Set,o=!1,l=null,p=!1,d=r.geometryType,f=void 0===d?null:d,g=!1,b=(0,i.Z)(y(e));try{var x=function(){var e=n.value,r=e.geometry,i=e.properties,c=e.id;if((!r||(f||(f=h(r.type)),h(r.type)===f))&&(o||(o=m(v(r))),p||(p=null!=c)&&(t=typeof c,l=Object.keys(i).filter((function(e){return i[e]===c}))),p&&null!=c&&(l.length>1?l=l.filter((function(e){return i[e]===c})):1===l.length&&(l=i[l[0]]===c?l:[])),!g&&i)){var d=!0;for(var y in i)if(!s.has(y)){var b=i[y];if(null!=b){var x=E(b);"unknown"!==x?(u.delete(y),s.add(y),a.push({name:y,alias:y,type:x})):u.add(y)}else d=!1,u.add(y)}g=d}};for(b.s();!(n=b.n()).done;)x()}catch(Z){b.e(Z)}finally{b.f()}var k=l&&1===l.length&&l[0]||null;if(k){var _,w=(0,i.Z)(a);try{for(w.s();!(_=w.n()).done;){var I=_.value;if(I.name===k&&(0,c.H7)(I)){I.type="esriFieldTypeOID";break}}}catch(Z){w.e(Z)}finally{w.f()}}return{fields:a,geometryType:f,hasZ:o,objectIdFieldName:k,objectIdFieldType:t,unknownFields:Array.from(u)}}function j(e,t){return Array.from(g(y(e),t))}},63543:function(e,t,n){n.d(t,{MS:function(){return d},Dm:function(){return l},Hq:function(){return p},bU:function(){return c}});var r=n(4942),i=n(1413),a=n(93169),s=n(84652),u=n(60480),o=n(76115);function c(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?o.I4:"esriGeometryPolyline"===e?o.ET:o.lF}}}function l(e,t){if((0,a.Z)("esri-csp-restrictions"))return function(){return(0,i.Z)((0,r.Z)({},t,null),e)};try{var n="this.".concat(t," = null;");for(var s in e)n+="this".concat(s.includes(".")?'["'.concat(s,'"]'):".".concat(s)," = ").concat(JSON.stringify(e[s]),";");var u=new Function(n);return function(){return new u}}catch(o){return function(){return(0,i.Z)((0,r.Z)({},t,null),e)}}}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{name:"New Feature",description:"",prototype:{attributes:(0,s.d9)(e)}}]}function d(e,t){return{attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0},query:u.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}},68808:function(e,t,n){n.d(t,{av:function(){return d},d1:function(){return h},b:function(){return _},O0:function(){return g},og:function(){return b}});var r=n(15861),i=n(37762),a=n(43144),s=n(15671),u=n(87757),o=n(92975),c=n(80031),l=(0,a.Z)((function e(){(0,s.Z)(this,e),this.code=null,this.description=null})),p=(0,a.Z)((function e(t){(0,s.Z)(this,e),this.error=new l,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=t}));function d(e){return new p(e)}var f=(0,a.Z)((function e(t){(0,s.Z)(this,e),this.globalId=null,this.success=!0,this.objectId=this.uniqueId=t}));function h(e){return new f(e)}var y,v=new Set;function g(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],a=arguments.length>4?arguments[4]:void 0;for(var s in v.clear(),n){var u=e.get(s);if(u){var o=n[s],l=m(u,o);if(l!==o&&a&&a.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:u,originalValue:o,sanitizedValue:l}}),v.add(u.name),u&&(r||u.editable)){var p=(0,c.Qc)(u,l);if(p)return d((0,c.vP)(p,u,l));t[u.name]=l}}}var f,h=(0,i.Z)(e.requiredFields);try{for(h.s();!(f=h.n()).done;){var y=f.value;if(!v.has(y.name))return d('missing required field "'.concat(y.name,'"'))}}catch(g){h.e(g)}finally{h.f()}return null}function m(e,t){var n=t;return"string"==typeof t&&(0,c.H7)(e)?n=parseFloat(t):null!=t&&(0,c.qN)(e)&&"string"!=typeof t&&(n=String(t)),(0,c.Pz)(n)}function b(e,t){if(!e||!(0,o.JY)(t))return e;if("rings"in e||"paths"in e){if(!y)throw new TypeError("geometry engine not loaded");return y.simplify(t,e)}return e}function x(){return k.apply(this,arguments)}function k(){return(k=(0,r.Z)(u.mark((function e(){return u.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=y,e.t0){e.next=6;break}return e.next=4,Promise.all([n.e(9058),n.e(309)]).then(n.bind(n,50309));case 4:y=e.sent,e.t0=y;case 6:return e.abrupt("return",e.t0);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e,t){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(u.mark((function e(t,n){return u.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=!(0,o.JY)(t)||"esriGeometryPolygon"!==n&&"esriGeometryPolyline"!==n,e.t0){e.next=4;break}return e.next=4,x();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=1657.f77aa83e.chunk.js.map