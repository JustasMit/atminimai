"use strict";(self.webpackChunkvilniausdnr=self.webpackChunkvilniausdnr||[]).push([[9815],{6388:function(e,t,r){r.d(t,{RL:function(){return m},bk:function(){return s},Fp:function(){return f},UV:function(){return u}});var i=r(29439),a=r(37762),n=r(46228),o=r(77981),l=r(691);function f(e){if(!e)return null;switch(e.type){case"CIMPointSymbol":var t=e.symbolLayers;return t&&1===t.length?f(t[0]):null;case"CIMVectorMarker":var r,i=e.markerGraphics;if(!i||1!==i.length)return null;var a=i[0];if(!a)return null;var n=a.geometry;if(!n)return null;var o=a.symbol;return!o||"CIMPolygonSymbol"!==o.type&&"CIMLineSymbol"!==o.type||null!=(r=o.symbolLayers)&&r.some((function(e){return!!e.effects}))?null:{geom:n,asFill:"CIMPolygonSymbol"===o.type};case"sdf":return{geom:e.geom,asFill:e.asFill}}return null}function c(e){var t,r=1/0,i=-1/0,n=1/0,o=-1/0,l=(0,a.Z)(e);try{for(l.s();!(t=l.n()).done;){var f,c=t.value,s=(0,a.Z)(c);try{for(s.s();!(f=s.n()).done;){var u=f.value;u[0]<r&&(r=u[0]),u[0]>i&&(i=u[0]),u[1]<n&&(n=u[1]),u[1]>o&&(o=u[1])}}catch(m){s.e(m)}finally{s.f()}}}catch(m){l.e(m)}finally{l.f()}return[r,n,i,o]}function s(e){return e?e.rings?c(e.rings):e.paths?c(e.paths):(0,o.YX)(e)?[e.xmin,e.ymin,e.xmax,e.ymax]:null:null}function u(e,t,r,a,n){var o=(0,i.Z)(e,4),l=o[0],f=o[1],c=o[2],s=o[3];if(c<l||s<f)return[0,0,0];var u=c-l,m=s-f,h=Math.floor(31.5),y=(128-2*(h+1))/Math.max(u,m),v=Math.round(u*y)+2*h,p=Math.round(m*y)+2*h,d=1;t&&(d=p/y/(t.ymax-t.ymin));var g=0,S=0;if(a)if(n){if(t&&r&&t.ymax-t.ymin>0){var N=(t.xmax-t.xmin)/(t.ymax-t.ymin);g=a.x/(r*N),S=a.y/r}}else g=a.x,S=a.y;return g=.5*(t.xmax+t.xmin)+g*(t.xmax-t.xmin),S=.5*(t.ymax+t.ymin)+S*(t.ymax-t.ymin),g-=l,S-=f,g*=y,S*=y,[d,(g+=h)/v-.5,-((S+=h)/p-.5)]}function m(e){var t,r=function(e){return e?e.rings?e.rings:e.paths?e.paths:void 0!==e.xmin&&void 0!==e.ymin&&void 0!==e.xmax&&void 0!==e.ymax?[[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]]:null:null}(e.geom),n=function(e){var t,r=1/0,i=-1/0,n=1/0,o=-1/0,f=(0,a.Z)(e);try{for(f.s();!(t=f.n()).done;){var c,s=t.value,u=(0,a.Z)(s);try{for(u.s();!(c=u.n()).done;){var m=c.value;m[0]<r&&(r=m[0]),m[0]>i&&(i=m[0]),m[1]<n&&(n=m[1]),m[1]>o&&(o=m[1])}}catch(h){u.e(h)}finally{u.f()}}}catch(h){f.e(h)}finally{f.f()}return new l.Z(r,n,i-r,o-n)}(r),o=Math.floor(31.5),f=(128-2*(o+1))/Math.max(n.width,n.height),c=Math.round(n.width*f)+2*o,s=Math.round(n.height*f)+2*o,u=[],m=(0,a.Z)(r);try{for(m.s();!(t=m.n()).done;){var y=t.value;if(y&&y.length>1){var v,p=[],d=(0,a.Z)(y);try{for(d.s();!(v=d.n()).done;){var g=v.value,S=(0,i.Z)(g,2),N=S[0],b=S[1];N-=n.x,b-=n.y,N*=f,b*=f,N+=o-.5,b+=o-.5,e.asFill?p.push([N,b]):p.push([Math.round(N),Math.round(b)])}}catch(O){d.e(O)}finally{d.f()}if(e.asFill){var k=p.length-1;p[0][0]===p[k][0]&&p[0][1]===p[k][1]||p.push(p[0])}u.push(p)}}}catch(O){m.e(O)}finally{m.f()}var C=function(e,t,r,i){for(var n=t*r,o=new Array(n),l=i*i+1,f=0;f<n;++f)o[f]=l;var c,s=(0,a.Z)(e);try{for(s.s();!(c=s.n()).done;)for(var u=c.value,m=u.length,h=1;h<m;++h){var y=u[h-1],v=u[h],p=void 0,d=void 0,g=void 0,S=void 0;y[0]<v[0]?(p=y[0],d=v[0]):(p=v[0],d=y[0]),y[1]<v[1]?(g=y[1],S=v[1]):(g=v[1],S=y[1]);var N=Math.floor(p)-i,b=Math.floor(d)+i,k=Math.floor(g)-i,C=Math.floor(S)+i;N<0&&(N=0),b>t&&(b=t),k<0&&(k=0),C>r&&(C=r);for(var P=v[0]-y[0],x=v[1]-y[1],M=P*P+x*x,w=N;w<b;w++)for(var Z=k;Z<C;Z++){var I=void 0,L=void 0,A=(w-y[0])*P+(Z-y[1])*x;A<0?(I=y[0],L=y[1]):A>M?(I=v[0],L=v[1]):(A/=M,I=y[0]+A*P,L=y[1]+A*x);var X=(w-I)*(w-I)+(Z-L)*(Z-L),z=(r-Z-1)*t+w;X<o[z]&&(o[z]=X)}}}catch(O){s.e(O)}finally{s.f()}for(var J=0;J<n;++J)o[J]=Math.sqrt(o[J]);return o}(u,c,s,o);return e.asFill&&function(e,t,r,i,n){var o,l=(0,a.Z)(e);try{for(l.s();!(o=l.n()).done;)for(var f=o.value,c=f.length,s=1;s<c;++s){var u=f[s-1],m=f[s],h=void 0,y=void 0,v=void 0,p=void 0;u[0]<m[0]?(h=u[0],y=m[0]):(h=m[0],y=u[0]),u[1]<m[1]?(v=u[1],p=m[1]):(v=m[1],p=u[1]);var d=Math.floor(h),g=Math.floor(y)+1,S=Math.floor(v),N=Math.floor(p)+1;d<i&&(d=i),g>t-i&&(g=t-i),S<i&&(S=i),N>r-i&&(N=r-i);for(var b=S;b<N;++b)if(u[1]>b!=m[1]>b){for(var k=(r-b-1)*t,C=d;C<g;++C)C<(m[0]-u[0])*(b-u[1])/(m[1]-u[1])+u[0]&&(n[k+C]=-n[k+C]);for(var P=i;P<d;++P)n[k+P]=-n[k+P]}}}catch(O){l.e(O)}finally{l.f()}}(u,c,s,o,C),[h(C,o),c,s]}function h(e,t){for(var r=2*t,i=e.length,a=new Uint8Array(4*i),o=0;o<i;++o){var l=.5-e[o]/r;(0,n.I)(l,a,4*o)}return a}},79815:function(e,t,r){r.d(t,{S:function(){return D},c:function(){return M}});var i=r(1413),a=r(37762),n=r(29439),o=r(93433),l=r(15861),f=r(87757),c=r(51995),s=r(32718),u=r(92026),m=r(17842),h=r(643),y=r(819),v=r(78915),p=r(6388),d=r(31027),g=r(95954),S=r(91935),N=s.Z.getLogger("esri.symbols.cim.cimAnalyzer");function b(e){switch(e){case"Butt":return 0;case"Square":return 2;default:return 1}}function k(e){switch(e){case"Bevel":return 0;case"Miter":return 2;default:return 1}}function C(e){switch(e){case"Left":default:return"left";case"Right":return"right";case"Center":return"center";case"Justify":return"justify"}}function O(e){switch(e){case"Top":default:return"top";case"Center":return"middle";case"Baseline":return"baseline";case"Bottom":return"bottom"}}function P(e,t,r,i){var a;e[t]?a=e[t]:(a={},e[t]=a),a[r]=i}function x(e){var t=e.markerPlacement;return t&&t.angleToLine?1:0}function M(e,t,r,i,a){return w.apply(this,arguments)}function w(){return(w=(0,l.Z)(f.mark((function e(t,r,i,n,o){var l,c,s,u,m,h,v,p,d;return f.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l=null!=n?n:[],t){e.next=3;break}return e.abrupt("return",l);case 3:if(u={},"CIMSymbolReference"===t.type){e.next=6;break}return e.abrupt("return",(N.error("Expect cim type to be 'CIMSymbolReference'"),l));case 6:if(c=t.symbol,!(s=t.primitiveOverrides)){e.next=14;break}m=[],h=(0,a.Z)(s);try{for(p=function(){var e=v.value,t=e.valueExpressionInfo;if(t&&r){var i=t.expression,a=(0,y.Yi)(i,r.spatialReference,r.fields).then((function(t){t&&P(u,e.primitiveName,e.propertyName,t)}));m.push(a)}else null!=e.value&&P(u,e.primitiveName,e.propertyName,e.value)},h.s();!(v=h.n()).done;)p()}catch(f){h.e(f)}finally{h.f()}if(e.t0=m.length>0,!e.t0){e.next=14;break}return e.next=14,Promise.all(m);case 14:if(V(c,i,d=[]),e.t2=d.length>0,!e.t2){e.next=20;break}return e.next=20,Promise.all(d);case 20:e.t1=c.type,e.next="CIMPointSymbol"===e.t1||"CIMLineSymbol"===e.t1||"CIMPolygonSymbol"===e.t1?23:24;break;case 23:Z(c,s,u,r,l,i,o);case 24:return e.abrupt("return",l);case 25:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Z(e,t,r,i,a,n,l){if(e){var f=e.symbolLayers;if(f){var c,s=e.effects,u=v.B$.getSize(e);"CIMPointSymbol"===e.type&&"Map"===e.angleAlignment&&(c=1);for(var m=f.length;m--;){var h,y=f[m];if(y&&!1!==y.enable){var p=void 0;s&&s.length&&(p=(0,o.Z)(s));var d=y.effects;d&&d.length&&(s?(h=p).push.apply(h,(0,o.Z)(d)):p=(0,o.Z)(d));var g=[];switch(v.E0.findApplicableOverrides(y,t,g),y.type){case"CIMSolidFill":I(y,p,r,g,i,a);break;case"CIMPictureFill":L(y,p,r,g,i,n,a);break;case"CIMHatchFill":A(y,p,r,g,i,a);break;case"CIMGradientFill":X(y,p,r,g,i,a);break;case"CIMSolidStroke":z(y,p,r,g,i,a,"CIMPolygonSymbol"===e.type,u);break;case"CIMPictureStroke":J(y,p,r,g,i,a,"CIMPolygonSymbol"===e.type,u);break;case"CIMGradientStroke":Y(y,p,r,g,i,a,"CIMPolygonSymbol"===e.type,u);break;case"CIMCharacterMarker":if(H(y,p,r,g,i,a))break;break;case"CIMPictureMarker":if(H(y,p,r,g,i,a))break;"CIMLineSymbol"===e.type&&(c=x(y)),F(y,p,r,g,i,n,a,c,u);break;case"CIMVectorMarker":if(H(y,p,r,g,i,a))break;"CIMLineSymbol"===e.type&&(c=x(y)),R(y,p,r,g,i,a,n,c,u,l);break;default:N.error("Cannot analyze CIM layer",y.type)}}}}}}function I(e,t,r,i,a,o){var l=e.primitiveName,f=(0,d.NO)(e.color),c=j(i,l),s=(0,n.Z)(c,2),u=s[0],m=s[1],y=(0,h.hP)(JSON.stringify(e)+m).toString();o.push({type:"fill",templateHash:y,materialHash:u?function(){return y}:y,cim:e,materialOverrides:null,colorLocked:e.colorLocked,color:T(l,r,"Color",a,f,$),height:0,angle:0,offsetX:0,offsetY:0,scaleX:1,effects:t})}function L(e,t,r,i,a,o,l){var f=e.primitiveName,c=e.tintColor?(0,d.NO)(e.tintColor):{r:255,g:255,b:255,a:1},s=j(i,f),m=(0,n.Z)(s,2),y=m[0],v=m[1],p=(0,h.hP)(JSON.stringify(e)+v).toString(),g=(0,h.hP)("".concat(e.url).concat(JSON.stringify(e.colorSubstitutions))).toString(),S=(0,d.NA)(e.scaleX);if("width"in e){var N=e.width,b=1,k=o.getResource(e.url);(0,u.pC)(k)&&(b=k.width/k.height),S/=b*(e.height/N)}l.push({type:"fill",templateHash:p,materialHash:y?function(){return g}:g,cim:e,materialOverrides:null,colorLocked:e.colorLocked,effects:t,color:T(f,r,"TintColor",a,c,$),height:T(f,r,"Height",a,e.height),scaleX:T(f,r,"ScaleX",a,S),angle:T(f,r,"Rotation",a,(0,d.NA)(e.rotation)),offsetX:T(f,r,"OffsetX",a,(0,d.NA)(e.offsetX)),offsetY:T(f,r,"OffsetY",a,(0,d.NA)(e.offsetY)),url:e.url})}function A(e,t,r,i,a,o){var l=["Rotation","OffsetX","OffsetY"],f=i.filter((function(t){return t.primitiveName!==e.primitiveName&&-1===l.indexOf(t.propertyName)})),c=e.primitiveName,s=j(i,c),u=(0,n.Z)(s,2),m=u[0],y=u[1],v=(0,h.hP)(JSON.stringify(e)+y).toString(),p=(0,h.hP)("".concat(e.separation).concat(JSON.stringify(e.lineSymbol))).toString();o.push({type:"fill",templateHash:v,materialHash:m?U(p,r,f,a):p,cim:e,materialOverrides:f,colorLocked:e.colorLocked,effects:t,color:{r:255,g:255,b:255,a:1},height:T(c,r,"Separation",a,e.separation),scaleX:1,angle:T(c,r,"Rotation",a,(0,d.NA)(e.rotation)),offsetX:T(c,r,"OffsetX",a,(0,d.NA)(e.offsetX)),offsetY:T(c,r,"OffsetY",a,(0,d.NA)(e.offsetY))})}function X(e,t,r,i,a,o){var l=j(i,e.primitiveName),f=(0,n.Z)(l,2),c=f[0],s=f[1],u=(0,h.hP)(JSON.stringify(e)+s).toString();o.push({type:"fill",templateHash:u,materialHash:c?U(u,r,i,a):u,cim:e,materialOverrides:null,colorLocked:e.colorLocked,effects:t,color:{r:128,g:128,b:128,a:1},height:0,angle:0,offsetX:0,offsetY:0,scaleX:1})}function z(e,t,r,i,a,l,f,c){var s,u,m=e.primitiveName,y=(0,d.NO)(e.color),v=void 0!==e.width?e.width:4,p=b(e.capStyle),g=k(e.joinStyle),S=e.miterLimit,N=j(i,m),C=(0,n.Z)(N,2),O=C[0],P=C[1],x=(0,h.hP)(JSON.stringify(e)+P).toString();if(t&&t.length>0){var M=t[t.length-1];if("CIMGeometricEffectDashes"===M.type&&"NoConstraint"===M.lineDashEnding){var w=(t=(0,o.Z)(e.effects)).pop();s=w.dashTemplate,u=w.scaleDash}}l.push({type:"line",templateHash:x,materialHash:O?function(){return x}:x,cim:e,materialOverrides:null,isOutline:f,colorLocked:e.colorLocked,effects:t,color:T(m,r,"Color",a,y,$),width:T(m,r,"Width",a,v),cap:T(m,r,"CapStyle",a,p),join:T(m,r,"JoinStyle",a,g),miterLimit:T(m,r,"MiterLimit",a,S),referenceWidth:c,zOrder:W(e.name),dashTemplate:s,scaleDash:u})}function J(e,t,r,i,a,o,l,f){var c=(0,h.hP)("".concat(e.url).concat(JSON.stringify(e.colorSubstitutions))).toString(),s=e.primitiveName,u=(0,d.NO)(e.tintColor),m=void 0!==e.width?e.width:4,y=b(e.capStyle),v=k(e.joinStyle),p=e.miterLimit,g=j(i,s),S=(0,n.Z)(g,2),N=S[0],C=S[1],O=(0,h.hP)(JSON.stringify(e)+C).toString();o.push({type:"line",templateHash:O,materialHash:N?function(){return c}:c,cim:e,materialOverrides:null,isOutline:l,colorLocked:e.colorLocked,effects:t,color:T(s,r,"TintColor",a,u,$),width:T(s,r,"Width",a,m),cap:T(s,r,"CapStyle",a,y),join:T(s,r,"JoinStyle",a,v),miterLimit:T(s,r,"MiterLimit",a,p),referenceWidth:f,zOrder:W(e.name),dashTemplate:null,scaleDash:!1,url:e.url})}function Y(e,t,r,i,a,o,l,f){var c=e.primitiveName,s=void 0!==e.width?e.width:4,u=b(e.capStyle),m=k(e.joinStyle),y=e.miterLimit,v=j(i,c),p=(0,n.Z)(v,2),d=p[0],g=p[1],S=(0,h.hP)(JSON.stringify(e)+g).toString();o.push({type:"line",templateHash:S,materialHash:d?U(S,r,i,a):S,cim:e,materialOverrides:null,isOutline:l,colorLocked:e.colorLocked,effects:t,color:{r:128,g:128,b:128,a:1},width:T(c,r,"Width",a,s),cap:T(c,r,"CapStyle",a,u),join:T(c,r,"JoinStyle",a,m),miterLimit:T(c,r,"MiterLimit",a,y),referenceWidth:f,zOrder:W(e.name),dashTemplate:null,scaleDash:!1})}function H(e,t,r,i,a,o){var l=e.markerPlacement;if(!l||"CIMMarkerPlacementInsidePolygon"!==l.type)return!1;var f=l,c=["Rotation","OffsetX","OffsetY"],s=i.filter((function(t){return t.primitiveName!==e.primitiveName&&-1===c.indexOf(t.propertyName)})),u="url"in e?e.url:null,m=j(i,f.primitiveName),y=(0,n.Z)(m,2),v=y[0],p=y[1],g=(0,h.hP)(JSON.stringify(e)+p).toString(),S=f.stepY,N=null,b=1;return l.shiftOddRows&&(S*=2,N=function(e){return e?2*e:0},b=.5),o.push({type:"fill",templateHash:g,materialHash:v?U(g,r,s,a):g,cim:e,materialOverrides:s,colorLocked:e.colorLocked,effects:t,color:{r:255,g:255,b:255,a:1},height:T(f.primitiveName,r,"StepY",a,S,N),scaleX:b,angle:T(f.primitiveName,r,"GridAngle",a,f.gridAngle),offsetX:T(f.primitiveName,r,"OffsetX",a,(0,d.NA)(f.offsetX)),offsetY:T(f.primitiveName,r,"OffsetY",a,(0,d.NA)(f.offsetY)),url:u}),!0}function F(e,t,r,i,a,o,l,f,c){var s,m=e.primitiveName,y=(0,d.NA)(e.size),v=(0,d.NA)(e.scaleX),p=(0,d.NA)(e.rotation),g=(0,d.NA)(e.offsetX),S=(0,d.NA)(e.offsetY),N=e.tintColor?(0,d.NO)(e.tintColor):{r:255,g:255,b:255,a:1},b=(0,h.hP)("".concat(e.url).concat(JSON.stringify(e.colorSubstitutions))).toString(),k=j(i,m),C=(0,n.Z)(k,2),O=C[0],P=C[1],x=(0,h.hP)(JSON.stringify(e)+P).toString(),M=null!=(s=e.anchorPoint)?s:{x:0,y:0};if("width"in e){var w=e.width,Z=1,I=o.getResource(e.url);(0,u.pC)(I)&&(Z=I.width/I.height),v/=Z*(y/w)}l.push({type:"marker",templateHash:x,materialHash:O?function(){return b}:b,cim:e,materialOverrides:null,colorLocked:e.colorLocked,effects:t,scaleSymbolsProportionally:!1,alignment:f,size:T(m,r,"Size",a,y),scaleX:T(m,r,"ScaleX",a,v),rotation:T(m,r,"Rotation",a,p),offsetX:T(m,r,"OffsetX",a,g),offsetY:T(m,r,"OffsetY",a,S),color:T(m,r,"TintColor",a,N,$),anchorPoint:{x:M.x,y:-M.y},isAbsoluteAnchorPoint:"Relative"!==e.anchorPointUnits,outlineColor:{r:0,g:0,b:0,a:0},outlineWidth:0,frameHeight:0,rotateClockwise:e.rotateClockwise,referenceSize:c,sizeRatio:1,markerPlacement:e.markerPlacement,url:e.url})}function R(e,t,r,i,n,o,l,f,c,s){var u=e.markerGraphics;if(u){var m=0;if(e.scaleSymbolsProportionally){var h=e.frame;h&&(m=h.ymax-h.ymin)}var y,v=(0,a.Z)(u);try{for(v.s();!(y=v.n()).done;){var p=y.value;if(p){var d=p.symbol;if(!d)continue;switch(d.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":B(e,t,p,i,r,n,o,l,f,c,m,s);break;case"CIMTextSymbol":G(e,t,p,r,i,n,o,f,c,m)}}}}catch(g){v.e(g)}finally{v.f()}}}function G(e,t,r,a,o,l,f,c,s,u){v.E0.findApplicableOverrides(r,o,[]);var m=r.geometry;if("x"in m&&"y"in m){var y=r.symbol,p=function(e){return e.underline?"underline":e.strikethrough?"line-through":"none"}(y),g=function(e){var t="",r="";if(e){var i=e.toLowerCase();-1!==i.indexOf("italic")?t="italic":-1!==i.indexOf("oblique")&&(t="oblique"),-1!==i.indexOf("bold")?r="bold":-1!==i.indexOf("light")&&(r="lighter")}return{style:t,weight:r}}(y.fontStyleName),S=(0,d.mA)(y.fontFamilyName);y.font=(0,i.Z)({family:S,decoration:p},g);var N=e.frame,b=m.x-.5*(N.xmin+N.xmax),k=m.y-.5*(N.ymin+N.ymax),P=e.size/u,x=e.primitiveName,M=(0,d.NA)(y.height)*P,w=(0,d.NA)(y.angle),Z=((0,d.NA)(y.offsetX)+b)*P,I=((0,d.NA)(y.offsetY)+k)*P,L=(0,d.NO)(v.B$.getFillColor(y)),A=(0,d.NO)(v.B$.getStrokeColor(y)),X=v.B$.getStrokeWidth(y);X||(A=(0,d.NO)(v.B$.getFillColor(y.haloSymbol)),X=y.haloSize*P);var z=j(o,x),J=(0,n.Z)(z,2),Y=J[0],H=J[1],F=JSON.stringify(e.effects)+Number(e.colorLocked)+JSON.stringify(e.anchorPoint)+e.anchorPointUnits+JSON.stringify(e.markerPlacement),R=(0,h.hP)(JSON.stringify(r)+F+H).toString(),G=T(r.primitiveName,a,"TextString",l,r.textString,d.X3,y.textCase),B=y.fontStyleName,E=S+(B?"-"+B.toLowerCase():"-regular"),W=E;f.push({type:"text",templateHash:R,materialHash:Y||"function"==typeof G||G.match(/\[(.*?)\]/)?function(e,t,r){return W+"-"+(0,d.hf)(G,e,t,r)}:W+"-"+(0,h.hP)(G),cim:y,materialOverrides:null,colorLocked:e.colorLocked,effects:t,alignment:c,anchorPoint:{x:e.anchorPoint?e.anchorPoint.x:0,y:e.anchorPoint?e.anchorPoint.y:0},isAbsoluteAnchorPoint:"Relative"!==e.anchorPointUnits,fontName:E,decoration:p,weight:T(x,a,"Weight",l,g.weight),style:T(x,a,"Size",l,g.style),size:T(x,a,"Size",l,M),angle:T(x,a,"Rotation",l,w),offsetX:T(x,a,"OffsetX",l,Z),offsetY:T(x,a,"OffsetY",l,I),horizontalAlignment:C(y.horizontalAlignment),verticalAlignment:O(y.verticalAlignment),text:G,color:L,outlineColor:A,outlineSize:X,referenceSize:s,sizeRatio:1,markerPlacement:e.markerPlacement})}}function B(e,t,r,o,l,f,c,s,u,m,y,S){var N=r.symbol,b=N.symbolLayers;if(b)if(S)E(e,t,r,l,o,f,c,s,u,m,y);else{var k=b.length;if(q(b))!function(e,t,r,o,l,f,c,s,u,m){var y=t.geometry,g=r[0],S=r[1],N=(0,p.bk)(y);if(!N)return;var b,k=(0,p.UV)(N,e.frame,e.size,e.anchorPoint,"Relative"!==e.anchorPointUnits),C=(0,n.Z)(k,3),O=C[0],P=C[1],x=C[2],M={type:"sdf",geom:y,asFill:!0},w=e.primitiveName,Z=(0,d.NA)(e.size),I=(0,d.NA)(e.rotation),L=(0,d.NA)(e.offsetX),A=(0,d.NA)(e.offsetY),X=S.path,z=S.primitiveName,J=g.primitiveName,Y=(0,d.NO)(v.B$.getFillColor(S)),H=(0,d.NO)(v.B$.getStrokeColor(g)),F=v.B$.getStrokeWidth(g),R=!1,G="",B=(0,a.Z)(o);try{for(B.s();!(b=B.n()).done;){var E=b.value;E.primitiveName!==z&&E.primitiveName!==J&&E.primitiveName!==w||(void 0!==E.value?G+="-".concat(E.primitiveName,"-").concat(E.propertyName,"-").concat(JSON.stringify(E.value)):E.valueExpressionInfo&&(R=!0))}}catch(j){B.e(j)}finally{B.f()}var W=JSON.stringify((0,i.Z)((0,i.Z)({},e),{},{markerGraphics:null})),U=(0,h.hP)(JSON.stringify(M)+X).toString(),D={type:"marker",templateHash:(0,h.hP)(JSON.stringify(t)+JSON.stringify(S)+JSON.stringify(g)+W+G).toString(),materialHash:R?function(){return U}:U,cim:M,materialOverrides:null,colorLocked:e.colorLocked,effects:e.effects,scaleSymbolsProportionally:e.scaleSymbolsProportionally,alignment:s,anchorPoint:{x:P,y:x},isAbsoluteAnchorPoint:!1,size:T(e.primitiveName,l,"Size",f,Z),rotation:T(e.primitiveName,l,"Rotation",f,I),offsetX:T(e.primitiveName,l,"OffsetX",f,L),offsetY:T(e.primitiveName,l,"OffsetY",f,A),scaleX:1,frameHeight:m,rotateClockwise:e.rotateClockwise,referenceSize:u,sizeRatio:O,color:T(z,l,"Color",f,Y,$),outlineColor:T(J,l,"Color",f,H,$),outlineWidth:T(J,l,"Width",f,F),markerPlacement:e.markerPlacement,path:X};c.push(D)}(e,r,b,o,l,f,c,u,m,y);else{var C=g.j.applyEffects(N.effects,r.geometry);if(C)for(;k--;){var O=b[k];if(O&&!1!==O.enable)switch(O.type){case"CIMSolidFill":case"CIMSolidStroke":var P,x=function(){var s=g.j.applyEffects(O.effects,C),S=(0,p.bk)(s);if(!S)return"continue";var N=(0,p.UV)(S,e.frame,e.size,e.anchorPoint,"Relative"!==e.anchorPointUnits),b=(0,n.Z)(N,3),k=b[0],x=b[1],M=b[2],w="CIMSolidFill"===O.type,Z={type:"sdf",geom:s,asFill:w},I=e.primitiveName,L=null!=(P=(0,d.NA)(e.size))?P:10,A=(0,d.NA)(e.rotation),X=(0,d.NA)(e.offsetX),z=(0,d.NA)(e.offsetY),J=O.path,Y=O.primitiveName,H=(0,d.NO)(w?v.B$.getFillColor(O):v.B$.getStrokeColor(O)),F=w?{r:0,g:0,b:0,a:0}:(0,d.NO)(v.B$.getStrokeColor(O)),R=v.B$.getStrokeWidth(O);if(!w&&!R)return"break";var G,B=!1,E="",W=(0,a.Z)(o);try{for(W.s();!(G=W.n()).done;){var U=G.value;U.primitiveName!==Y&&U.primitiveName!==I||(void 0!==U.value?E+="-".concat(U.primitiveName,"-").concat(U.propertyName,"-").concat(JSON.stringify(U.value)):U.valueExpressionInfo&&(B=!0))}}catch(q){W.e(q)}finally{W.f()}var D=JSON.stringify((0,i.Z)((0,i.Z)({},e),{},{markerGraphics:null})),j=(0,h.hP)(JSON.stringify(Z)+J).toString(),V={type:"marker",templateHash:(0,h.hP)(JSON.stringify(r)+JSON.stringify(O)+D+E).toString(),materialHash:B?function(){return j}:j,cim:Z,materialOverrides:null,colorLocked:e.colorLocked,effects:t,scaleSymbolsProportionally:e.scaleSymbolsProportionally,alignment:u,anchorPoint:{x:x,y:M},isAbsoluteAnchorPoint:!1,size:T(e.primitiveName,l,"Size",f,L),rotation:T(e.primitiveName,l,"Rotation",f,A),offsetX:T(e.primitiveName,l,"OffsetX",f,X),offsetY:T(e.primitiveName,l,"OffsetY",f,z),scaleX:1,frameHeight:y,rotateClockwise:e.rotateClockwise,referenceSize:m,sizeRatio:k,color:T(Y,l,"Color",f,H,$),outlineColor:T(Y,l,"Color",f,F,$),outlineWidth:T(Y,l,"Width",f,R),markerPlacement:e.markerPlacement,path:J};return c.push(V),"break"}();if("continue"===x)continue;if("break"===x)break;default:E(e,t,r,l,o,f,c,s,u,m,y)}}}}}function E(e,t,r,i,o,l,f,c,s,u,y){var p,g=function(e,t){return{type:e.type,enable:!0,name:e.name,colorLocked:e.colorLocked,primitiveName:e.primitiveName,anchorPoint:e.anchorPoint,anchorPointUnits:e.anchorPointUnits,offsetX:0,offsetY:0,rotateClockwise:e.rotateClockwise,rotation:0,size:e.size,billboardMode3D:e.billboardMode3D,depth3D:e.depth3D,frame:e.frame,markerGraphics:[t],scaleSymbolsProportionally:e.scaleSymbolsProportionally,respectFrame:e.respectFrame,clippingPath:e.clippingPath}}(e,r),S=["Rotation","OffsetX","OffsetY"];p=o.filter((function(t){return t.primitiveName!==e.primitiveName||-1===S.indexOf(t.propertyName)}));var N,b="",k=(0,a.Z)(o);try{for(k.s();!(N=k.n()).done;){var C=N.value;void 0!==C.value&&(b+="-".concat(C.primitiveName,"-").concat(C.propertyName,"-").concat(JSON.stringify(C.value)))}}catch(J){k.e(J)}finally{k.f()}var O=v.B$.getTextureAnchor(g,c),P=(0,n.Z)(O,3),x=P[0],M=P[1],w=P[2],Z=e.primitiveName,I=(0,d.NA)(e.rotation),L=(0,d.NA)(e.offsetX),A=(0,d.NA)(e.offsetY),X=(0,h.hP)(JSON.stringify(g)+b).toString(),z={type:"marker",templateHash:X,materialHash:0===p.length?X:U(X,i,p,l),cim:g,materialOverrides:p,colorLocked:e.colorLocked,effects:t,scaleSymbolsProportionally:e.scaleSymbolsProportionally,alignment:s,anchorPoint:{x:x,y:M},isAbsoluteAnchorPoint:!1,size:e.size,rotation:T(Z,i,"Rotation",l,I),offsetX:T(Z,i,"OffsetX",l,L),offsetY:T(Z,i,"OffsetY",l,A),color:{r:255,g:255,b:255,a:1},outlineColor:{r:0,g:0,b:0,a:0},outlineWidth:0,scaleX:1,frameHeight:y,rotateClockwise:e.rotateClockwise,referenceSize:u,sizeRatio:w/(0,m.F2)(e.size),markerPlacement:e.markerPlacement};f.push(z)}function W(e){if(e&&0===e.indexOf("Level_")){var t=parseInt(e.substr(6),10);if(NaN!==t)return t}return 0}function $(e){if(!e||0===e.length)return null;var t=new c.Z(e).toRgba();return{r:t[0],g:t[1],b:t[2],a:t[3]}}function T(e,t,r,i,a,n,o){var l=t[e];if(l){var f=l[r];if("string"==typeof f||"number"==typeof f||f instanceof Array)return n?n.call(null,f,o):f;if(null!=f&&f instanceof y.mz)return function(e,t,r){var l=(0,S.Z)(f,e,{$view:r},i.geometryType,t);return null!==l&&n&&(l=n.call(null,l,o)),null!==l?l:a}}return a}function U(e,t,r,i){var n,o=(0,a.Z)(r);try{for(o.s();!(n=o.n()).done;){var l=n.value;l.valueExpressionInfo&&function(){var e=t[l.primitiveName]&&t[l.primitiveName][l.propertyName];e instanceof y.mz&&(l.fn=function(t,r,a){return(0,S.Z)(e,t,{$view:a},i.geometryType,r)})}()}}catch(f){o.e(f)}finally{o.f()}return function(t,i,n){var o,l=(0,a.Z)(r);try{for(l.s();!(o=l.n()).done;){var c=o.value;c.fn&&(c.value=c.fn(t,i,n))}}catch(f){l.e(f)}finally{l.f()}return(0,h.hP)(e+v.E0.buildOverrideKey(r)).toString()}}function D(e,t){if(!t||0===t.length)return e;var r=JSON.parse(JSON.stringify(e));return v.E0.applyOverrides(r,t),r}function j(e,t){var r,i=!1,n="",o=(0,a.Z)(e);try{for(o.s();!(r=o.n()).done;){var l=r.value;l.primitiveName===t&&(void 0!==l.value?n+="-".concat(l.primitiveName,"-").concat(l.propertyName,"-").concat(JSON.stringify(l.value)):l.valueExpressionInfo&&(i=!0))}}catch(f){o.e(f)}finally{o.f()}return[i,n]}function V(e,t,r){if(e&&t)switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":var i=e.symbolLayers;if(!i)return;var n,o=(0,a.Z)(i);try{for(o.s();!(n=o.n()).done;){var l=n.value;switch(l.type){case"CIMPictureFill":case"CIMHatchFill":case"CIMGradientFill":case"CIMPictureStroke":case"CIMGradientStroke":case"CIMCharacterMarker":case"CIMPictureMarker":"url"in l&&l.url&&r.push(t.fetchResource(l.url,null));break;case"CIMVectorMarker":var f=l.markerGraphics;if(!f)continue;var c,s=(0,a.Z)(f);try{for(s.s();!(c=s.n()).done;){var u=c.value;if(u){var m=u.symbol;m&&V(m,t,r)}}}catch(h){s.e(h)}finally{s.f()}}}}catch(h){o.e(h)}finally{o.f()}}}var q=function(e){return e&&2===e.length&&e[0].enable&&e[1].enable&&"CIMSolidStroke"===e[0].type&&"CIMSolidFill"===e[1].type&&!e[0].effects&&!e[1].effects}},95954:function(e,t,r){r.d(t,{j:function(){return u}});var i=r(93433),a=r(37762),n=r(15671),o=r(43144),l=r(77981),f=r(25290),c=r(35747),s=r(84307),u=function(){function e(){(0,n.Z)(this,e)}return(0,o.Z)(e,null,[{key:"executeEffects",value:function(e,t){var r,i=(0,f.GP)(t),n=new c.M(i),o=(0,a.Z)(e);try{for(o.s();!(r=o.n()).done;){var l=r.value,u=(0,s.h)(l);u&&(n=u.execute(n,l,1.3333333333333333,!0))}}catch(m){o.e(m)}finally{o.f()}return n}},{key:"next",value:function(e){var t=e.next();return(0,f.wp)(t),t}},{key:"applyEffects",value:function(e,t){if(!e)return t;var r,n=new c.M(t),o=(0,a.Z)(e);try{for(o.s();!(r=o.n()).done;){var f=r.value,u=(0,s.h)(f);u&&(n=u.execute(n,f,1,!1))}}catch(p){o.e(p)}finally{o.f()}for(var m,h=null;m=n.next();){var y,v;h?(0,l.l9)(h)?(0,l.l9)(m)&&(y=h.paths).push.apply(y,(0,i.Z)(m.paths)):(0,l.oU)(h)&&(0,l.oU)(m)&&(v=h.rings).push.apply(v,(0,i.Z)(m.rings)):h=m}return h}}]),e}()},91935:function(e,t,r){r.d(t,{Z:function(){return l}});var i=r(1413),a=r(10064),n=r(32718),o=r(58971);function l(e,t,r,a,o){var l=e.referencesGeometry()&&o?c(t,a,o):t,f=e.repurposeFeature(l);try{return e.evaluate((0,i.Z)((0,i.Z)({},r),{},{$feature:f}))}catch(s){return n.Z.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",s),null}}var f=new Map;function c(e,t,r){var l=r.transform,c=r.hasZ,s=r.hasM;f.has(t)||f.set(t,function(e){var t={};switch(e){case"esriGeometryPoint":return function(e,r,i,a){return(0,o.U1)(r,t,e,i,a)};case"esriGeometryPolygon":return function(e,r,i,a){return(0,o.Ie)(r,t,e,i,a)};case"esriGeometryPolyline":return function(e,r,i,a){return(0,o.G6)(r,t,e,i,a)};case"esriGeometryMultipoint":return function(e,r,i,a){return(0,o.J9)(r,t,e,i,a)};default:return n.Z.getLogger("esri.views.2d.support.arcadeOnDemand").error(new a.Z("mapview-arcade","Unable to handle geometryType: ".concat(e))),function(e){return e}}}(t));var u=f.get(t)(e.geometry,l,c,s);return(0,i.Z)((0,i.Z)({},e),{},{geometry:u})}}}]);
//# sourceMappingURL=9815.8e27c531.chunk.js.map