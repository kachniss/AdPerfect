/*!
 * Masonry PACKAGED v3.1.4
 * Cascading grid layout library
 * http://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */
(function(c){var d=Array.prototype.slice;function b(){}function a(f){if(!f){return;}function h(i){if(i.prototype.option){return;}i.prototype.option=function(j){if(!f.isPlainObject(j)){return;}this.options=f.extend(true,this.options,j);};}var e=typeof console==="undefined"?b:function(i){console.error(i);};function g(i,j){f.fn[i]=function(n){if(typeof n==="string"){var m=d.call(arguments,1);for(var o=0,l=this.length;o<l;o++){var q=this[o];var k=f.data(q,i);if(!k){e("cannot call methods on "+i+" prior to initialization; attempted to call '"+n+"'");continue;}if(!f.isFunction(k[n])||n.charAt(0)==="_"){e("no such method '"+n+"' for "+i+" instance");continue;}var p=k[n].apply(k,m);if(p!==undefined){return p;}}return this;}else{return this.each(function(){var r=f.data(this,i);if(r){r.option(n);r._init();}else{r=new j(this,n);f.data(this,i,r);}});}};}f.bridget=function(i,j){h(j);g(i,j);};return f.bridget;}if(typeof define==="function"&&define.amd){define("jquery-bridget/jquery.bridget",["jquery"],a);}else{a(c.jQuery);}})(window);
/*!
 * eventie v1.0.5
 * event binding helper
 *   eventie.bind( elem, 'click', myFn )
 *   eventie.unbind( elem, 'click', myFn )
 * MIT license
 */
(function(e){var b=document.documentElement;var f=function(){};function a(h){var g=e.event;g.target=g.target||g.srcElement||h;return g;}if(b.addEventListener){f=function(i,h,g){i.addEventListener(h,g,false);};}else{if(b.attachEvent){f=function(i,h,g){i[h+g]=g.handleEvent?function(){var j=a(i);g.handleEvent.call(g,j);}:function(){var j=a(i);g.call(i,j);};i.attachEvent("on"+h,i[h+g]);};}}var d=function(){};if(b.removeEventListener){d=function(i,h,g){i.removeEventListener(h,g,false);};}else{if(b.detachEvent){d=function(j,h,g){j.detachEvent("on"+h,j[h+g]);try{delete j[h+g];}catch(i){j[h+g]=undefined;}};}}var c={bind:f,unbind:d};if(typeof define==="function"&&define.amd){define("eventie/eventie",c);}else{if(typeof exports==="object"){module.exports=c;}else{e.eventie=c;}}})(this);
/*!
 * docReady
 * Cross browser DOMContentLoaded event emitter
 */
(function(d){var b=d.document;var a=[];function c(g){if(typeof g!=="function"){return;}if(c.isReady){g();}else{a.push(g);}}c.isReady=false;function f(l){var k=l.type==="readystatechange"&&b.readyState!=="complete";if(c.isReady||k){return;}c.isReady=true;for(var h=0,g=a.length;h<g;h++){var j=a[h];j();}}function e(g){g.bind(b,"DOMContentLoaded",f);g.bind(b,"readystatechange",f);g.bind(d,"load",f);return c;}if(typeof define==="function"&&define.amd){c.isReady=typeof requirejs==="function";define("doc-ready/doc-ready",["eventie/eventie"],e);}else{d.docReady=e(d.eventie);}})(this);
/*!
 * EventEmitter v4.2.7 - git.io/ee
 * Oliver Caldwell
 * MIT license
 * @preserve
 */
(function(){function c(){}var l=c.prototype;var v=this;var x=v.EventEmitter;function h(z,A){var y=z.length;while(y--){if(z[y].listener===A){return y;}}return -1;}function j(y){return function z(){return this[y].apply(this,arguments);};}l.getListeners=function t(y){var B=this._getEvents();var z;var A;if(y instanceof RegExp){z={};for(A in B){if(B.hasOwnProperty(A)&&y.test(A)){z[A]=B[A];}}}else{z=B[y]||(B[y]=[]);}return z;};l.flattenListeners=function r(A){var y=[];var z;for(z=0;z<A.length;z+=1){y.push(A[z].listener);}return y;};l.getListenersAsObject=function e(y){var A=this.getListeners(y);var z;if(A instanceof Array){z={};z[y]=A;}return z||A;};l.addListener=function f(y,B){var A=this.getListenersAsObject(y);var C=typeof B==="object";var z;for(z in A){if(A.hasOwnProperty(z)&&h(A[z],B)===-1){A[z].push(C?B:{listener:B,once:false});}}return this;};l.on=j("addListener");l.addOnceListener=function a(y,z){return this.addListener(y,{listener:z,once:true});};l.once=j("addOnceListener");l.defineEvent=function p(y){this.getListeners(y);return this;};l.defineEvents=function q(y){for(var z=0;z<y.length;z+=1){this.defineEvent(y[z]);}return this;};l.removeListener=function b(y,C){var B=this.getListenersAsObject(y);var z;var A;for(A in B){if(B.hasOwnProperty(A)){z=h(B[A],C);if(z!==-1){B[A].splice(z,1);}}}return this;};l.off=j("removeListener");l.addListeners=function m(y,z){return this.manipulateListeners(false,y,z);};l.removeListeners=function s(y,z){return this.manipulateListeners(true,y,z);};l.manipulateListeners=function g(z,A,C){var B;var D;var E=z?this.removeListener:this.addListener;var y=z?this.removeListeners:this.addListeners;if(typeof A==="object"&&!(A instanceof RegExp)){for(B in A){if(A.hasOwnProperty(B)&&(D=A[B])){if(typeof D==="function"){E.call(this,B,D);}else{y.call(this,B,D);}}}}else{B=C.length;while(B--){E.call(this,A,C[B]);}}return this;};l.removeEvent=function o(y){var B=typeof y;var A=this._getEvents();var z;if(B==="string"){delete A[y];}else{if(y instanceof RegExp){for(z in A){if(A.hasOwnProperty(z)&&y.test(z)){delete A[z];}}}else{delete this._events;}}return this;};l.removeAllListeners=j("removeEvent");l.emitEvent=function u(y,A){var D=this.getListenersAsObject(y);var E;var C;var B;var z;for(B in D){if(D.hasOwnProperty(B)){C=D[B].length;while(C--){E=D[B][C];if(E.once===true){this.removeListener(y,E.listener);}z=E.listener.apply(this,A||[]);if(z===this._getOnceReturnValue()){this.removeListener(y,E.listener);}}}}return this;};l.trigger=j("emitEvent");l.emit=function k(y){var z=Array.prototype.slice.call(arguments,1);return this.emitEvent(y,z);};l.setOnceReturnValue=function i(y){this._onceReturnValue=y;return this;};l._getOnceReturnValue=function n(){if(this.hasOwnProperty("_onceReturnValue")){return this._onceReturnValue;}else{return true;}};l._getEvents=function d(){return this._events||(this._events={});};c.noConflict=function w(){v.EventEmitter=x;return c;};if(typeof define==="function"&&define.amd){define("eventEmitter/EventEmitter",[],function(){return c;});}else{if(typeof module==="object"&&module.exports){module.exports=c;}else{this.EventEmitter=c;}}}.call(this));
/*!
 * getStyleProperty v1.0.3
 * original by kangax
 * http://perfectionkills.com/feature-testing-css-properties/
 */
(function(c){var d="Webkit Moz ms Ms O".split(" ");var b=document.documentElement.style;function a(h){if(!h){return;}if(typeof b[h]==="string"){return h;}h=h.charAt(0).toUpperCase()+h.slice(1);var f;for(var g=0,e=d.length;g<e;g++){f=d[g]+h;if(typeof b[f]==="string"){return f;}}}if(typeof define==="function"&&define.amd){define("get-style-property/get-style-property",[],function(){return a;});}else{if(typeof exports==="object"){module.exports=a;}else{c.getStyleProperty=a;}}})(window);(function(d,g){var e=d.getComputedStyle;var a=e?function(i){return e(i,null);}:function(i){return i.currentStyle;};function c(j){var i=parseFloat(j);var k=j.indexOf("%")===-1&&!isNaN(i);return k&&i;}var b=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];function f(){var l={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0};for(var k=0,j=b.length;k<j;k++){var m=b[k];l[m]=0;}return l;}function h(l){var j=l("boxSizing");var k;(function(){if(!j){return;}var p=document.createElement("div");p.style.width="200px";p.style.padding="1px 2px 3px 4px";p.style.borderStyle="solid";p.style.borderWidth="1px 2px 3px 4px";p.style[j]="border-box";var n=document.body||document.documentElement;n.appendChild(p);var o=a(p);k=c(o.width)===200;n.removeChild(p);})();function m(C){if(typeof C==="string"){C=document.querySelector(C);}if(!C||typeof C!=="object"||!C.nodeType){return;}var A=a(C);if(A.display==="none"){return f();}var t={};t.width=C.offsetWidth;t.height=C.offsetHeight;var B=t.isBorderBox=!!(j&&A[j]&&A[j]==="border-box");for(var x=0,y=b.length;x<y;x++){var v=b[x];var w=A[v];w=i(C,w);var n=parseFloat(w);t[v]=!isNaN(n)?n:0;}var z=t.paddingLeft+t.paddingRight;var s=t.paddingTop+t.paddingBottom;var E=t.marginLeft+t.marginRight;var q=t.marginTop+t.marginBottom;var D=t.borderLeftWidth+t.borderRightWidth;var p=t.borderTopWidth+t.borderBottomWidth;var o=B&&k;var r=c(A.width);if(r!==false){t.width=r+(o?0:z+D);}var u=c(A.height);if(u!==false){t.height=u+(o?0:s+p);}t.innerWidth=t.width-(z+D);t.innerHeight=t.height-(s+p);t.outerWidth=t.width+E;t.outerHeight=t.height+q;return t;}function i(q,r){if(e||r.indexOf("%")===-1){return r;}var p=q.style;var s=p.left;var o=q.runtimeStyle;var n=o&&o.left;if(n){o.left=q.currentStyle.left;}p.left=r;r=p.pixelLeft;p.left=s;if(n){o.left=n;}return r;}return m;}if(typeof define==="function"&&define.amd){define("get-size/get-size",["get-style-property/get-style-property"],h);}else{if(typeof exports==="object"){module.exports=h(require("get-style-property"));}else{d.getSize=h(d.getStyleProperty);}}})(window);(function(b,i){var g=(function(){if(i.matchesSelector){return"matchesSelector";}var n=["webkit","moz","ms","o"];for(var l=0,k=n.length;l<k;l++){var m=n[l];var o=m+"MatchesSelector";if(i[o]){return o;}}})();function e(l,k){return l[g](k);}function h(l){if(l.parentNode){return;}var k=document.createDocumentFragment();k.appendChild(l);}function f(o,l){h(o);var m=o.parentNode.querySelectorAll(l);for(var n=0,k=m.length;n<k;n++){if(m[n]===o){return true;}}return false;}function d(l,k){h(l);return e(l,k);}var j;if(g){var a=document.createElement("div");var c=e(a,"div");j=c?e:d;}else{j=f;}if(typeof define==="function"&&define.amd){define("matches-selector/matches-selector",[],function(){return j;});}else{window.matchesSelector=j;}})(this,Element.prototype);(function(d){var c=document.defaultView;var b=c&&c.getComputedStyle?function(h){return c.getComputedStyle(h,null);}:function(h){return h.currentStyle;};function g(i,h){for(var j in h){i[j]=h[j];}return i;}function a(h){for(var i in h){return false;}i=null;return true;}function e(h){return h.replace(/([A-Z])/g,function(i){return"-"+i.toLowerCase();});}function f(v,u,k){var t=k("transition");var q=k("transform");var r=t&&q;var o=!!k("perspective");var h={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"}[t];var m=["transform","transition","transitionDuration","transitionProperty"];var s=(function(){var x={};for(var y=0,w=m.length;y<w;y++){var A=m[y];var z=k(A);if(z&&z!==A){x[A]=z;}}return x;})();function j(w,x){if(!w){return;}this.element=w;this.layout=x;this.position={x:0,y:0};this._create();}g(j.prototype,v.prototype);j.prototype._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}};this.css({position:"absolute"});};j.prototype.handleEvent=function(w){var x="on"+w.type;if(this[x]){this[x](w);}};j.prototype.getSize=function(){this.size=u(this.element);};j.prototype.css=function(y){var w=this.element.style;for(var z in y){var x=s[z]||z;w[x]=y[z];}};j.prototype.getPosition=function(){var B=b(this.element);var z=this.layout.options;var E=z.isOriginLeft;var D=z.isOriginTop;var w=parseInt(B[E?"left":"right"],10);var C=parseInt(B[D?"top":"bottom"],10);w=isNaN(w)?0:w;C=isNaN(C)?0:C;var A=this.layout.size;w-=E?A.paddingLeft:A.paddingRight;C-=D?A.paddingTop:A.paddingBottom;this.position.x=w;this.position.y=C;};j.prototype.layoutPosition=function(){var x=this.layout.size;var w=this.layout.options;var y={};if(w.isOriginLeft){y.left=(this.position.x+x.paddingLeft)+"px";y.right="";}else{y.right=(this.position.x+x.paddingRight)+"px";y.left="";}if(w.isOriginTop){y.top=(this.position.y+x.paddingTop)+"px";y.bottom="";}else{y.bottom=(this.position.y+x.paddingBottom)+"px";y.top="";}this.css(y);this.emitEvent("layout",[this]);};var i=o?function(w,z){return"translate3d("+w+"px, "+z+"px, 0)";}:function(w,z){return"translate("+w+"px, "+z+"px)";};j.prototype._transitionTo=function(H,G){this.getPosition();var z=this.position.x;var w=this.position.y;var F=parseInt(H,10);var E=parseInt(G,10);var D=F===this.position.x&&E===this.position.y;this.setPosition(H,G);if(D&&!this.isTransitioning){this.layoutPosition();return;}var C=H-z;var B=G-w;var A={};var I=this.layout.options;C=I.isOriginLeft?C:-C;B=I.isOriginTop?B:-B;A.transform=i(C,B);this.transition({to:A,onTransitionEnd:{transform:this.layoutPosition},isCleaning:true});};j.prototype.goTo=function(w,z){this.setPosition(w,z);this.layoutPosition();};j.prototype.moveTo=r?j.prototype._transitionTo:j.prototype.goTo;j.prototype.setPosition=function(w,z){this.position.x=parseInt(w,10);this.position.y=parseInt(z,10);};j.prototype._nonTransition=function(w){this.css(w.to);if(w.isCleaning){this._removeStyles(w.to);}for(var x in w.onTransitionEnd){w.onTransitionEnd[x].call(this);}};j.prototype._transition=function(w){if(!parseFloat(this.layout.options.transitionDuration)){this._nonTransition(w);return;}var y=this._transn;for(var z in w.onTransitionEnd){y.onEnd[z]=w.onTransitionEnd[z];}for(z in w.to){y.ingProperties[z]=true;if(w.isCleaning){y.clean[z]=true;}}if(w.from){this.css(w.from);var x=this.element.offsetHeight;x=null;}this.enableTransition(w.to);this.css(w.to);this.isTransitioning=true;};var l=q&&(e(q)+",opacity");j.prototype.enableTransition=function(){if(this.isTransitioning){return;}this.css({transitionProperty:l,transitionDuration:this.layout.options.transitionDuration});this.element.addEventListener(h,this,false);};j.prototype.transition=j.prototype[t?"_transition":"_nonTransition"];j.prototype.onwebkitTransitionEnd=function(w){this.ontransitionend(w);};j.prototype.onotransitionend=function(w){this.ontransitionend(w);};var n={"-webkit-transform":"transform","-moz-transform":"transform","-o-transform":"transform"};j.prototype.ontransitionend=function(z){if(z.target!==this.element){return;}var y=this._transn;var w=n[z.propertyName]||z.propertyName;delete y.ingProperties[w];if(a(y.ingProperties)){this.disableTransition();}if(w in y.clean){this.element.style[z.propertyName]="";delete y.clean[w];}if(w in y.onEnd){var x=y.onEnd[w];x.call(this);delete y.onEnd[w];}this.emitEvent("transitionEnd",[this]);};j.prototype.disableTransition=function(){this.removeTransitionStyles();this.element.removeEventListener(h,this,false);this.isTransitioning=false;};j.prototype._removeStyles=function(x){var w={};for(var y in x){w[y]="";}this.css(w);};var p={transitionProperty:"",transitionDuration:""};j.prototype.removeTransitionStyles=function(){this.css(p);};j.prototype.removeElem=function(){this.element.parentNode.removeChild(this.element);this.emitEvent("remove",[this]);};j.prototype.remove=function(){if(!t||!parseFloat(this.layout.options.transitionDuration)){this.removeElem();return;}var w=this;this.on("transitionEnd",function(){w.removeElem();return true;});this.hide();};j.prototype.reveal=function(){delete this.isHidden;this.css({display:""});var w=this.layout.options;this.transition({from:w.hiddenStyle,to:w.visibleStyle,isCleaning:true});};j.prototype.hide=function(){this.isHidden=true;this.css({display:""});var w=this.layout.options;this.transition({from:w.visibleStyle,to:w.hiddenStyle,isCleaning:true,onTransitionEnd:{opacity:function(){if(this.isHidden){this.css({display:"none"});}}}});};j.prototype.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""});};return j;}if(typeof define==="function"&&define.amd){define("outlayer/item",["eventEmitter/EventEmitter","get-size/get-size","get-style-property/get-style-property"],f);}else{d.Outlayer={};d.Outlayer.Item=f(d.EventEmitter,d.getSize,d.getStyleProperty);}})(window);
/*!
 * Outlayer v1.1.10
 * the brains and guts of a layout library
 * MIT license
 */
(function(f){var i=f.document;var c=f.console;var o=f.jQuery;var n=function(){};function h(r,q){for(var s in q){r[s]=q[s];}return r;}var p=Object.prototype.toString;function d(q){return p.call(q)==="[object Array]";}function a(t){var s=[];if(d(t)){s=t;}else{if(t&&typeof t.length==="number"){for(var r=0,q=t.length;r<q;r++){s.push(t[r]);}}else{s.push(t);}}return s;}var g=(typeof HTMLElement==="object")?function e(q){return q instanceof HTMLElement;}:function b(q){return q&&typeof q==="object"&&q.nodeType===1&&typeof q.nodeName==="string";};var j=Array.prototype.indexOf?function(q,r){return q.indexOf(r);}:function(s,t){for(var r=0,q=s.length;r<q;r++){if(s[r]===t){return r;}}return -1;};function l(s,r){var q=j(r,s);if(q!==-1){r.splice(q,1);}}function k(q){return q.replace(/(.)([A-Z])/g,function(s,r,t){return r+"-"+t;}).toLowerCase();}function m(w,r,y,x,z,s){var u=0;var q={};function t(B,A){if(typeof B==="string"){B=i.querySelector(B);}if(!B||!g(B)){if(c){c.log("Bad "+this.constructor.namespace+" element: "+B);}return;}this.element=B;this.options=h({},this.options);this.option(A);var C=++u;this.element.outlayerGUID=C;q[C]=this;this._create();if(this.options.isInitLayout){this.layout();}}t.namespace="outlayer";t.Item=s;t.prototype.options={containerStyle:{position:"relative"},isInitLayout:true,isOriginLeft:true,isOriginTop:true,isResizeBound:true,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};h(t.prototype,y.prototype);t.prototype.option=function(A){h(this.options,A);};t.prototype._create=function(){this.reloadItems();this.stamps=[];this.stamp(this.options.stamp);h(this.element.style,this.options.containerStyle);if(this.options.isResizeBound){this.bindResize();}};t.prototype.reloadItems=function(){this.items=this._itemize(this.element.children);};t.prototype._itemize=function(C){var F=this._filterFindItemElements(C);var D=this.constructor.Item;var B=[];for(var E=0,A=F.length;E<A;E++){var H=F[E];var G=new D(H,this);B.push(G);}return B;};t.prototype._filterFindItemElements=function(A){A=a(A);var B=this.options.itemSelector;var F=[];for(var E=0,G=A.length;E<G;E++){var C=A[E];if(!g(C)){continue;}if(B){if(z(C,B)){F.push(C);}var H=C.querySelectorAll(B);for(var D=0,I=H.length;D<I;D++){F.push(H[D]);}}else{F.push(C);}}return F;};t.prototype.getItemElements=function(){var B=[];for(var C=0,A=this.items.length;C<A;C++){B.push(this.items[C].element);}return B;};t.prototype.layout=function(){this._resetLayout();this._manageStamps();var A=this.options.isLayoutInstant!==undefined?this.options.isLayoutInstant:!this._isLayoutInited;this.layoutItems(this.items,A);this._isLayoutInited=true;};t.prototype._init=t.prototype.layout;t.prototype._resetLayout=function(){this.getSize();};t.prototype.getSize=function(){this.size=x(this.element);};t.prototype._getMeasurement=function(C,A){var B=this.options[C];var D;if(!B){this[C]=0;}else{if(typeof B==="string"){D=this.element.querySelector(B);}else{if(g(B)){D=B;}}this[C]=D?x(D)[A]:B;}};t.prototype.layoutItems=function(A,B){A=this._getItemsForLayout(A);this._layoutItems(A,B);this._postLayout();};t.prototype._getItemsForLayout=function(B){var E=[];for(var C=0,A=B.length;C<A;C++){var D=B[C];if(!D.isIgnored){E.push(D);}}return E;};t.prototype._layoutItems=function(H,G){var E=this;function A(){E.emitEvent("layoutComplete",[E,H]);}if(!H||!H.length){A();return;}this._itemsOn(H,"layout",A);var D=[];for(var B=0,F=H.length;B<F;B++){var I=H[B];var C=this._getItemLayoutPosition(I);C.item=I;C.isInstant=G||I.isLayoutInstant;D.push(C);}this._processLayoutQueue(D);};t.prototype._getItemLayoutPosition=function(){return{x:0,y:0};};t.prototype._processLayoutQueue=function(B){for(var C=0,A=B.length;C<A;C++){var D=B[C];this._positionItem(D.item,D.x,D.y,D.isInstant);}};t.prototype._positionItem=function(B,A,D,C){if(C){B.goTo(A,D);}else{B.moveTo(A,D);}};t.prototype._postLayout=function(){var A=this._getContainerSize();if(A){this._setContainerMeasure(A.width,true);this._setContainerMeasure(A.height,false);}};t.prototype._getContainerSize=n;t.prototype._setContainerMeasure=function(A,B){if(A===undefined){return;}var C=this.size;if(C.isBorderBox){A+=B?C.paddingLeft+C.paddingRight+C.borderLeftWidth+C.borderRightWidth:C.paddingBottom+C.paddingTop+C.borderTopWidth+C.borderBottomWidth;}A=Math.max(A,0);this.element.style[B?"width":"height"]=A+"px";};t.prototype._itemsOn=function(H,D,I){var A=0;var G=H.length;var F=this;function C(){A++;if(A===G){I.call(F);}return true;}for(var B=0,E=H.length;B<E;B++){var J=H[B];J.on(D,C);}};t.prototype.ignore=function(B){var A=this.getItem(B);if(A){A.isIgnored=true;}};t.prototype.unignore=function(B){var A=this.getItem(B);if(A){delete A.isIgnored;}};t.prototype.stamp=function(B){B=this._find(B);if(!B){return;}this.stamps=this.stamps.concat(B);for(var C=0,A=B.length;C<A;C++){var D=B[C];this.ignore(D);}};t.prototype.unstamp=function(B){B=this._find(B);if(!B){return;}for(var C=0,A=B.length;C<A;C++){var D=B[C];l(D,this.stamps);this.unignore(D);}};t.prototype._find=function(A){if(!A){return;}if(typeof A==="string"){A=this.element.querySelectorAll(A);}A=a(A);return A;};t.prototype._manageStamps=function(){if(!this.stamps||!this.stamps.length){return;}this._getBoundingRect();for(var C=0,A=this.stamps.length;C<A;C++){var B=this.stamps[C];this._manageStamp(B);}};t.prototype._getBoundingRect=function(){var A=this.element.getBoundingClientRect();var B=this.size;this._boundingRect={left:A.left+B.paddingLeft+B.borderLeftWidth,top:A.top+B.paddingTop+B.borderTopWidth,right:A.right-(B.paddingRight+B.borderRightWidth),bottom:A.bottom-(B.paddingBottom+B.borderBottomWidth)};};t.prototype._manageStamp=n;t.prototype._getElementOffset=function(D){var A=D.getBoundingClientRect();var C=this._boundingRect;var B=x(D);var E={left:A.left-C.left-B.marginLeft,top:A.top-C.top-B.marginTop,right:C.right-A.right-B.marginRight,bottom:C.bottom-A.bottom-B.marginBottom};return E;};t.prototype.handleEvent=function(A){var B="on"+A.type;if(this[B]){this[B](A);}};t.prototype.bindResize=function(){if(this.isResizeBound){return;}w.bind(f,"resize",this);this.isResizeBound=true;};t.prototype.unbindResize=function(){w.unbind(f,"resize",this);this.isResizeBound=false;};t.prototype.onresize=function(){if(this.resizeTimeout){clearTimeout(this.resizeTimeout);}var B=this;function A(){B.resize();delete B.resizeTimeout;}this.resizeTimeout=setTimeout(A,100);};t.prototype.resize=function(){var B=x(this.element);var A=this.size&&B;if(A&&B.innerWidth===this.size.innerWidth){return;}this.layout();};t.prototype.addItems=function(B){var A=this._itemize(B);if(A.length){this.items=this.items.concat(A);}return A;};t.prototype.appended=function(B){var A=this.addItems(B);if(!A.length){return;}this.layoutItems(A,true);this.reveal(A);};t.prototype.prepended=function(B){var A=this._itemize(B);if(!A.length){return;}var C=this.items.slice(0);this.items=A.concat(C);this._resetLayout();this._manageStamps();this.layoutItems(A,true);this.reveal(A);this.layoutItems(C);};t.prototype.reveal=function(B){var A=B&&B.length;if(!A){return;}for(var C=0;C<A;C++){var D=B[C];D.reveal();}};t.prototype.hide=function(B){var A=B&&B.length;if(!A){return;}for(var C=0;C<A;C++){var D=B[C];D.hide();}};t.prototype.getItem=function(D){for(var B=0,A=this.items.length;B<A;B++){var C=this.items[B];if(C.element===D){return C;}}};t.prototype.getItems=function(C){if(!C||!C.length){return;}var B=[];for(var D=0,A=C.length;D<A;D++){var F=C[D];var E=this.getItem(F);if(E){B.push(E);}}return B;};t.prototype.remove=function(B){B=a(B);var D=this.getItems(B);if(!D||!D.length){return;}this._itemsOn(D,"remove",function(){this.emitEvent("removeComplete",[this,D]);});for(var C=0,A=D.length;C<A;C++){var E=D[C];E.remove();l(E,this.items);}};t.prototype.destroy=function(){var C=this.element.style;C.height="";C.position="";C.width="";for(var B=0,A=this.items.length;B<A;B++){var D=this.items[B];D.destroy();}this.unbindResize();delete this.element.outlayerGUID;if(o){o.removeData(this.element,this.constructor.namespace);}};t.data=function(A){var B=A&&A.outlayerGUID;return B&&q[B];};function v(B,A){B.prototype[A]=h({},t.prototype[A]);}t.create=function(D,B){function C(){t.apply(this,arguments);}if(Object.create){C.prototype=Object.create(t.prototype);}else{h(C.prototype,t.prototype);}C.prototype.constructor=C;v(C,"options");h(C.prototype.options,B);C.namespace=D;C.data=t.data;C.Item=function A(){s.apply(this,arguments);};C.Item.prototype=new s();r(function(){var K=k(D);var E=i.querySelectorAll(".js-"+K);var L="data-"+K+"-options";for(var G=0,H=E.length;G<H;G++){var F=E[G];var I=F.getAttribute(L);var N;try{N=I&&JSON.parse(I);}catch(J){if(c){c.error("Error parsing "+L+" on "+F.nodeName.toLowerCase()+(F.id?"#"+F.id:"")+": "+J);}continue;}var M=new C(F,N);if(o){o.data(F,D,M);}}});if(o&&o.bridget){o.bridget(D,C);}return C;};t.Item=s;return t;}if(typeof define==="function"&&define.amd){define("outlayer/outlayer",["eventie/eventie","doc-ready/doc-ready","eventEmitter/EventEmitter","get-size/get-size","matches-selector/matches-selector","./item"],m);}else{f.Outlayer=m(f.eventie,f.docReady,f.EventEmitter,f.getSize,f.matchesSelector,f.Outlayer.Item);}})(window);
/*!
 * Masonry v3.1.4
 * Cascading grid layout library
 * http://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */
(function(c){var b=Array.prototype.indexOf?function(d,e){return d.indexOf(e);}:function(e,h){for(var f=0,d=e.length;f<d;f++){var g=e[f];if(g===h){return f;}}return -1;};function a(e,f){var d=e.create("masonry");d.prototype._resetLayout=function(){this.getSize();this._getMeasurement("columnWidth","outerWidth");this._getMeasurement("gutter","outerWidth");this.measureColumns();var g=this.cols;this.colYs=[];while(g--){this.colYs.push(0);}this.maxY=0;};d.prototype.measureColumns=function(){this.getContainerWidth();if(!this.columnWidth){var h=this.items[0];var g=h&&h.element;this.columnWidth=g&&f(g).outerWidth||this.containerWidth;}this.columnWidth+=this.gutter;this.cols=Math.floor((this.containerWidth+this.gutter)/this.columnWidth);this.cols=Math.max(this.cols,1);};d.prototype.getContainerWidth=function(){var g=this.options.isFitWidth?this.element.parentNode:this.element;var h=f(g);this.containerWidth=h&&h.innerWidth;};d.prototype._getItemLayoutPosition=function(r){r.getSize();var q=r.size.outerWidth%this.columnWidth;var m=q&&q<1?"round":"ceil";var n=Math[m](r.size.outerWidth/this.columnWidth);n=Math.min(n,this.cols);var g=this._getColGroup(n);var h=Math.min.apply(Math,g);var o=b(g,h);var l={x:this.columnWidth*o,y:h};var p=h+r.size.outerHeight;var j=this.cols+1-g.length;for(var k=0;k<j;k++){this.colYs[o+k]=p;}return l;};d.prototype._getColGroup=function(j){if(j<2){return this.colYs;}var k=[];var l=this.cols+1-j;for(var g=0;g<l;g++){var h=this.colYs.slice(g,g+j);k[g]=Math.max.apply(Math,h);}return k;};d.prototype._manageStamp=function(g){var n=f(g);var l=this._getElementOffset(g);var k=this.options.isOriginLeft?l.left:l.right;var h=k+n.outerWidth;var p=Math.floor(k/this.columnWidth);p=Math.max(0,p);var j=Math.floor(h/this.columnWidth);j-=h%this.columnWidth?0:1;j=Math.min(this.cols-1,j);var o=(this.options.isOriginTop?l.top:l.bottom)+n.outerHeight;for(var m=p;m<=j;m++){this.colYs[m]=Math.max(o,this.colYs[m]);}};d.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var g={height:this.maxY};if(this.options.isFitWidth){g.width=this._getContainerFitWidth();}return g;};d.prototype._getContainerFitWidth=function(){var h=0;var g=this.cols;while(--g){if(this.colYs[g]!==0){break;}h++;}return(this.cols-h)*this.columnWidth-this.gutter;};d.prototype.resize=function(){var g=this.containerWidth;this.getContainerWidth();if(g===this.containerWidth){return;}this.layout();};return d;}if(typeof define==="function"&&define.amd){define(["outlayer/outlayer","get-size/get-size"],a);}else{c.Masonry=a(c.Outlayer,c.getSize);}})(window);var mod_masonry={load_waterfall:function(){$(".ap_photo_large").imagesLoaded(function(){$("#ap_waterfall_container").masonry({gutter:15,itemSelector:".ap_ads_waterfall"});});},append_item:function(a){a.css("display","none");var b=$("#ap_waterfall_container");b.append(a);$(".ap_photo_large").imagesLoaded(function(){a.css("display","");b.masonry("appended",a);});}};$(document).ready(function(){mod_masonry.load_waterfall();});