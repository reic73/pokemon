(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{8679:function(e,t,r){"use strict";var n=r(9864),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},u={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},a={};function c(e){return n.isMemo(e)?i:a[e.$$typeof]||o}a[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a[n.Memo]=i;var f=Object.defineProperty,s=Object.getOwnPropertyNames,p=Object.getOwnPropertySymbols,l=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,y=Object.prototype;e.exports=function e(t,r,n){if("string"!==typeof r){if(y){var o=d(r);o&&o!==y&&e(t,o,n)}var i=s(r);p&&(i=i.concat(p(r)));for(var a=c(t),v=c(r),m=0;m<i.length;++m){var b=i[m];if(!u[b]&&(!n||!n[b])&&(!v||!v[b])&&(!a||!a[b])){var h=l(r,b);try{f(t,b,h)}catch(w){}}}}return t}},6363:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(2117)}])},2117:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return w}});var n=r(5893),o=(r(906),r(4416));r(3456);function u(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var i="function"===typeof Symbol&&Symbol.observable||"@@observable",a=function(){return Math.random().toString(36).substring(7).split("").join(".")},c={INIT:"@@redux/INIT"+a(),REPLACE:"@@redux/REPLACE"+a(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+a()}};function f(e){if("object"!==typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){s(e,t,r[t])}))}return e}var l={user:{}};function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){d(e,t,r[t])}))}return e}var v={pokemonLists:{data:[],maxPage:0},pokemonDetails:{ability:"",moves:[],types:[],weight:0,height:0,name:"",image:"",id:0}},m=function e(t,r,n){var o;if("function"===typeof r&&"function"===typeof n||"function"===typeof n&&"function"===typeof arguments[3])throw new Error(u(0));if("function"===typeof r&&"undefined"===typeof n&&(n=r,r=void 0),"undefined"!==typeof n){if("function"!==typeof n)throw new Error(u(1));return n(e)(t,r)}if("function"!==typeof t)throw new Error(u(2));var a=t,s=r,p=[],l=p,d=!1;function y(){l===p&&(l=p.slice())}function v(){if(d)throw new Error(u(3));return s}function m(e){if("function"!==typeof e)throw new Error(u(4));if(d)throw new Error(u(5));var t=!0;return y(),l.push(e),function(){if(t){if(d)throw new Error(u(6));t=!1,y();var r=l.indexOf(e);l.splice(r,1),p=null}}}function b(e){if(!f(e))throw new Error(u(7));if("undefined"===typeof e.type)throw new Error(u(8));if(d)throw new Error(u(9));try{d=!0,s=a(s,e)}finally{d=!1}for(var t=p=l,r=0;r<t.length;r++){(0,t[r])()}return e}function h(e){if("function"!==typeof e)throw new Error(u(10));a=e,b({type:c.REPLACE})}function w(){var e,t=m;return(e={subscribe:function(e){if("object"!==typeof e||null===e)throw new Error(u(11));function r(){e.next&&e.next(v())}return r(),{unsubscribe:t(r)}}})[i]=function(){return this},e}return b({type:c.INIT}),(o={dispatch:b,subscribe:m,getState:v,replaceReducer:h})[i]=w,o}(function(e){for(var t=Object.keys(e),r={},n=0;n<t.length;n++){var o=t[n];0,"function"===typeof e[o]&&(r[o]=e[o])}var i,a=Object.keys(r);try{!function(e){Object.keys(e).forEach((function(t){var r=e[t];if("undefined"===typeof r(void 0,{type:c.INIT}))throw new Error(u(12));if("undefined"===typeof r(void 0,{type:c.PROBE_UNKNOWN_ACTION()}))throw new Error(u(13))}))}(r)}catch(f){i=f}return function(e,t){if(void 0===e&&(e={}),i)throw i;for(var n=!1,o={},c=0;c<a.length;c++){var f=a[c],s=r[f],p=e[f],l=s(p,t);if("undefined"===typeof l){t&&t.type;throw new Error(u(14))}o[f]=l,n=n||l!==p}return(n=n||a.length!==Object.keys(e).length)?o:e}}({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return p({},e,{user:t.payload});default:return e}},pokemon:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RETRIEVE_POKEMON_LIST":return y({},e,{pokemonLists:t.payload});case"RETRIEVE_POKEMON_DETAILS":return y({},e,{pokemonDetails:t.payload});default:return e}}}));function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){b(e,t,r[t])}))}return e}var w=function(e){var t=e.Component,r=e.pageProps;return(0,n.jsx)(o.zt,{store:m,children:(0,n.jsx)(t,h({},r))})}},3456:function(){},906:function(){},9921:function(e,t){"use strict";var r="function"===typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,u=r?Symbol.for("react.fragment"):60107,i=r?Symbol.for("react.strict_mode"):60108,a=r?Symbol.for("react.profiler"):60114,c=r?Symbol.for("react.provider"):60109,f=r?Symbol.for("react.context"):60110,s=r?Symbol.for("react.async_mode"):60111,p=r?Symbol.for("react.concurrent_mode"):60111,l=r?Symbol.for("react.forward_ref"):60112,d=r?Symbol.for("react.suspense"):60113,y=r?Symbol.for("react.suspense_list"):60120,v=r?Symbol.for("react.memo"):60115,m=r?Symbol.for("react.lazy"):60116,b=r?Symbol.for("react.block"):60121,h=r?Symbol.for("react.fundamental"):60117,w=r?Symbol.for("react.responder"):60118,O=r?Symbol.for("react.scope"):60119;function g(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case s:case p:case u:case a:case i:case d:return e;default:switch(e=e&&e.$$typeof){case f:case l:case m:case v:case c:return e;default:return t}}case o:return t}}}function P(e){return g(e)===p}t.AsyncMode=s,t.ConcurrentMode=p,t.ContextConsumer=f,t.ContextProvider=c,t.Element=n,t.ForwardRef=l,t.Fragment=u,t.Lazy=m,t.Memo=v,t.Portal=o,t.Profiler=a,t.StrictMode=i,t.Suspense=d,t.isAsyncMode=function(e){return P(e)||g(e)===s},t.isConcurrentMode=P,t.isContextConsumer=function(e){return g(e)===f},t.isContextProvider=function(e){return g(e)===c},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return g(e)===l},t.isFragment=function(e){return g(e)===u},t.isLazy=function(e){return g(e)===m},t.isMemo=function(e){return g(e)===v},t.isPortal=function(e){return g(e)===o},t.isProfiler=function(e){return g(e)===a},t.isStrictMode=function(e){return g(e)===i},t.isSuspense=function(e){return g(e)===d},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===u||e===p||e===a||e===i||e===d||e===y||"object"===typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===v||e.$$typeof===c||e.$$typeof===f||e.$$typeof===l||e.$$typeof===h||e.$$typeof===w||e.$$typeof===O||e.$$typeof===b)},t.typeOf=g},9864:function(e,t,r){"use strict";e.exports=r(9921)},4416:function(e,t,r){"use strict";r.d(t,{zt:function(){return s},$j:function(){return U}});var n=r(7294),o=n.createContext(null);var u=function(e){e()},i=function(){return u};var a={notify:function(){},get:function(){return[]}};function c(e,t){var r,n=a;function o(){c.onStateChange&&c.onStateChange()}function u(){r||(r=t?t.addNestedSub(o):e.subscribe(o),n=function(){var e=i(),t=null,r=null;return{clear:function(){t=null,r=null},notify:function(){e((function(){for(var e=t;e;)e.callback(),e=e.next}))},get:function(){for(var e=[],r=t;r;)e.push(r),r=r.next;return e},subscribe:function(e){var n=!0,o=r={callback:e,next:null,prev:r};return o.prev?o.prev.next=o:t=o,function(){n&&null!==t&&(n=!1,o.next?o.next.prev=o.prev:r=o.prev,o.prev?o.prev.next=o.next:t=o.next)}}}}())}var c={addNestedSub:function(e){return u(),n.subscribe(e)},notifyNestedSubs:function(){n.notify()},handleChangeWrapper:o,isSubscribed:function(){return Boolean(r)},trySubscribe:u,tryUnsubscribe:function(){r&&(r(),r=void 0,n.clear(),n=a)},getListeners:function(){return n}};return c}var f="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?n.useLayoutEffect:n.useEffect;var s=function(e){var t=e.store,r=e.context,u=e.children,i=(0,n.useMemo)((function(){var e=c(t);return e.onStateChange=e.notifyNestedSubs,{store:t,subscription:e}}),[t]),a=(0,n.useMemo)((function(){return t.getState()}),[t]);f((function(){var e=i.subscription;return e.trySubscribe(),a!==t.getState()&&e.notifyNestedSubs(),function(){e.tryUnsubscribe(),e.onStateChange=null}}),[i,a]);var s=r||o;return n.createElement(s.Provider,{value:i},u)},p=r(7462),l=r(3366),d=r(8679),y=r.n(d),v=r(2973),m=["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef","forwardRef","context"],b=["reactReduxForwardedRef"],h=[],w=[null,null];function O(e,t){var r=e[1];return[t.payload,r+1]}function g(e,t,r){f((function(){return e.apply(void 0,t)}),r)}function P(e,t,r,n,o,u,i){e.current=n,t.current=o,r.current=!1,u.current&&(u.current=null,i())}function S(e,t,r,n,o,u,i,a,c,f){if(e){var s=!1,p=null,l=function(){if(!s){var e,r,l=t.getState();try{e=n(l,o.current)}catch(d){r=d,p=d}r||(p=null),e===u.current?i.current||c():(u.current=e,a.current=e,i.current=!0,f({type:"STORE_UPDATED",payload:{error:r}}))}};r.onStateChange=l,r.trySubscribe(),l();return function(){if(s=!0,r.tryUnsubscribe(),r.onStateChange=null,p)throw p}}}var E=function(){return[null,0]};function N(e,t){void 0===t&&(t={});var r=t,u=r.getDisplayName,i=void 0===u?function(e){return"ConnectAdvanced("+e+")"}:u,a=r.methodName,f=void 0===a?"connectAdvanced":a,s=r.renderCountProp,d=void 0===s?void 0:s,N=r.shouldHandleStateChanges,C=void 0===N||N,j=r.storeKey,x=void 0===j?"store":j,T=(r.withRef,r.forwardRef),M=void 0!==T&&T,_=r.context,$=void 0===_?o:_,R=(0,l.Z)(r,m),k=$;return function(t){var r=t.displayName||t.name||"Component",o=i(r),u=(0,p.Z)({},R,{getDisplayName:i,methodName:f,renderCountProp:d,shouldHandleStateChanges:C,storeKey:x,displayName:o,wrappedComponentName:r,WrappedComponent:t}),a=R.pure;var s=a?n.useMemo:function(e){return e()};function m(r){var o=(0,n.useMemo)((function(){var e=r.reactReduxForwardedRef,t=(0,l.Z)(r,b);return[r.context,e,t]}),[r]),i=o[0],a=o[1],f=o[2],d=(0,n.useMemo)((function(){return i&&i.Consumer&&(0,v.isContextConsumer)(n.createElement(i.Consumer,null))?i:k}),[i,k]),y=(0,n.useContext)(d),m=Boolean(r.store)&&Boolean(r.store.getState)&&Boolean(r.store.dispatch);Boolean(y)&&Boolean(y.store);var N=m?r.store:y.store,j=(0,n.useMemo)((function(){return function(t){return e(t.dispatch,u)}(N)}),[N]),x=(0,n.useMemo)((function(){if(!C)return w;var e=c(N,m?null:y.subscription),t=e.notifyNestedSubs.bind(e);return[e,t]}),[N,m,y]),T=x[0],M=x[1],_=(0,n.useMemo)((function(){return m?y:(0,p.Z)({},y,{subscription:T})}),[m,y,T]),$=(0,n.useReducer)(O,h,E),R=$[0][0],D=$[1];if(R&&R.error)throw R.error;var q=(0,n.useRef)(),I=(0,n.useRef)(f),F=(0,n.useRef)(),A=(0,n.useRef)(!1),Z=s((function(){return F.current&&f===I.current?F.current:j(N.getState(),f)}),[N,R,f]);g(P,[I,q,A,f,Z,F,M]),g(S,[C,N,T,j,I,q,A,F,M,D],[N,T,j]);var B=(0,n.useMemo)((function(){return n.createElement(t,(0,p.Z)({},Z,{ref:a}))}),[a,t,Z]);return(0,n.useMemo)((function(){return C?n.createElement(d.Provider,{value:_},B):B}),[d,B,_])}var N=a?n.memo(m):m;if(N.WrappedComponent=t,N.displayName=m.displayName=o,M){var j=n.forwardRef((function(e,t){return n.createElement(N,(0,p.Z)({},e,{reactReduxForwardedRef:t}))}));return j.displayName=o,j.WrappedComponent=t,y()(j,t)}return y()(N,t)}}function C(e,t){return e===t?0!==e||0!==t||1/e===1/t:e!==e&&t!==t}function j(e,t){if(C(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(var o=0;o<r.length;o++)if(!Object.prototype.hasOwnProperty.call(t,r[o])||!C(e[r[o]],t[r[o]]))return!1;return!0}function x(e){return function(t,r){var n=e(t,r);function o(){return n}return o.dependsOnOwnProps=!1,o}}function T(e){return null!==e.dependsOnOwnProps&&void 0!==e.dependsOnOwnProps?Boolean(e.dependsOnOwnProps):1!==e.length}function M(e,t){return function(t,r){r.displayName;var n=function(e,t){return n.dependsOnOwnProps?n.mapToProps(e,t):n.mapToProps(e)};return n.dependsOnOwnProps=!0,n.mapToProps=function(t,r){n.mapToProps=e,n.dependsOnOwnProps=T(e);var o=n(t,r);return"function"===typeof o&&(n.mapToProps=o,n.dependsOnOwnProps=T(o),o=n(t,r)),o},n}}var _=[function(e){return"function"===typeof e?M(e):void 0},function(e){return e?void 0:x((function(e){return{dispatch:e}}))},function(e){return e&&"object"===typeof e?x((function(t){return function(e,t){var r={},n=function(n){var o=e[n];"function"===typeof o&&(r[n]=function(){return t(o.apply(void 0,arguments))})};for(var o in e)n(o);return r}(e,t)})):void 0}];var $=[function(e){return"function"===typeof e?M(e):void 0},function(e){return e?void 0:x((function(){return{}}))}];function R(e,t,r){return(0,p.Z)({},r,e,t)}var k=[function(e){return"function"===typeof e?function(e){return function(t,r){r.displayName;var n,o=r.pure,u=r.areMergedPropsEqual,i=!1;return function(t,r,a){var c=e(t,r,a);return i?o&&u(c,n)||(n=c):(i=!0,n=c),n}}}(e):void 0},function(e){return e?void 0:function(){return R}}],D=["initMapStateToProps","initMapDispatchToProps","initMergeProps"];function q(e,t,r,n){return function(o,u){return r(e(o,u),t(n,u),u)}}function I(e,t,r,n,o){var u,i,a,c,f,s=o.areStatesEqual,p=o.areOwnPropsEqual,l=o.areStatePropsEqual,d=!1;function y(o,d){var y=!p(d,i),v=!s(o,u);return u=o,i=d,y&&v?(a=e(u,i),t.dependsOnOwnProps&&(c=t(n,i)),f=r(a,c,i)):y?(e.dependsOnOwnProps&&(a=e(u,i)),t.dependsOnOwnProps&&(c=t(n,i)),f=r(a,c,i)):v?function(){var t=e(u,i),n=!l(t,a);return a=t,n&&(f=r(a,c,i)),f}():f}return function(o,s){return d?y(o,s):(a=e(u=o,i=s),c=t(n,i),f=r(a,c,i),d=!0,f)}}function F(e,t){var r=t.initMapStateToProps,n=t.initMapDispatchToProps,o=t.initMergeProps,u=(0,l.Z)(t,D),i=r(e,u),a=n(e,u),c=o(e,u);return(u.pure?I:q)(i,a,c,e,u)}var A=["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"];function Z(e,t,r){for(var n=t.length-1;n>=0;n--){var o=t[n](e);if(o)return o}return function(t,n){throw new Error("Invalid value of type "+typeof e+" for "+r+" argument when connecting component "+n.wrappedComponentName+".")}}function B(e,t){return e===t}function L(e){var t=void 0===e?{}:e,r=t.connectHOC,n=void 0===r?N:r,o=t.mapStateToPropsFactories,u=void 0===o?$:o,i=t.mapDispatchToPropsFactories,a=void 0===i?_:i,c=t.mergePropsFactories,f=void 0===c?k:c,s=t.selectorFactory,d=void 0===s?F:s;return function(e,t,r,o){void 0===o&&(o={});var i=o,c=i.pure,s=void 0===c||c,y=i.areStatesEqual,v=void 0===y?B:y,m=i.areOwnPropsEqual,b=void 0===m?j:m,h=i.areStatePropsEqual,w=void 0===h?j:h,O=i.areMergedPropsEqual,g=void 0===O?j:O,P=(0,l.Z)(i,A),S=Z(e,u,"mapStateToProps"),E=Z(t,a,"mapDispatchToProps"),N=Z(r,f,"mergeProps");return n(d,(0,p.Z)({methodName:"connect",getDisplayName:function(e){return"Connect("+e+")"},shouldHandleStateChanges:Boolean(e),initMapStateToProps:S,initMapDispatchToProps:E,initMergeProps:N,pure:s,areStatesEqual:v,areOwnPropsEqual:b,areStatePropsEqual:w,areMergedPropsEqual:g},P))}}var U=L();var K,W=r(3935);K=W.unstable_batchedUpdates,u=K},8359:function(e,t){"use strict";var r=60103,n=60106,o=60107,u=60108,i=60114,a=60109,c=60110,f=60112,s=60113,p=60120,l=60115,d=60116,y=60121,v=60122,m=60117,b=60129,h=60131;if("function"===typeof Symbol&&Symbol.for){var w=Symbol.for;r=w("react.element"),n=w("react.portal"),o=w("react.fragment"),u=w("react.strict_mode"),i=w("react.profiler"),a=w("react.provider"),c=w("react.context"),f=w("react.forward_ref"),s=w("react.suspense"),p=w("react.suspense_list"),l=w("react.memo"),d=w("react.lazy"),y=w("react.block"),v=w("react.server.block"),m=w("react.fundamental"),b=w("react.debug_trace_mode"),h=w("react.legacy_hidden")}function O(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case o:case i:case u:case s:case p:return e;default:switch(e=e&&e.$$typeof){case c:case f:case d:case l:case a:return e;default:return t}}case n:return t}}}t.isContextConsumer=function(e){return O(e)===c}},2973:function(e,t,r){"use strict";e.exports=r(8359)},7462:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,{Z:function(){return n}})},3366:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}r.d(t,{Z:function(){return n}})}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(6363),t(387)}));var r=e.O();_N_E=r}]);