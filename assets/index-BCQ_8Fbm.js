(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function xM(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Kh={exports:{}},ol={};var z_;function SM(){if(z_)return ol;z_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(a,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var d in o)d!=="key"&&(c[d]=o[d])}else c=o;return o=c.ref,{$$typeof:r,type:a,key:u,ref:o!==void 0?o:null,props:c}}return ol.Fragment=e,ol.jsx=n,ol.jsxs=n,ol}var H_;function yM(){return H_||(H_=1,Kh.exports=SM()),Kh.exports}var Y=yM(),Zh={exports:{}},lt={};var V_;function MM(){if(V_)return lt;V_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),_=Symbol.iterator;function x(U){return U===null||typeof U!="object"?null:(U=_&&U[_]||U["@@iterator"],typeof U=="function"?U:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,M={};function S(U,j,ge){this.props=U,this.context=j,this.refs=M,this.updater=ge||E}S.prototype.isReactComponent={},S.prototype.setState=function(U,j){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,j,"setState")},S.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function w(){}w.prototype=S.prototype;function N(U,j,ge){this.props=U,this.context=j,this.refs=M,this.updater=ge||E}var D=N.prototype=new w;D.constructor=N,T(D,S.prototype),D.isPureReactComponent=!0;var F=Array.isArray;function z(){}var P={H:null,A:null,T:null,S:null},A=Object.prototype.hasOwnProperty;function L(U,j,ge){var Ae=ge.ref;return{$$typeof:r,type:U,key:j,ref:Ae!==void 0?Ae:null,props:ge}}function fe(U,j){return L(U.type,j,U.props)}function H(U){return typeof U=="object"&&U!==null&&U.$$typeof===r}function $(U){var j={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(ge){return j[ge]})}var ae=/\/+/g;function ue(U,j){return typeof U=="object"&&U!==null&&U.key!=null?$(""+U.key):j.toString(36)}function J(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(z,z):(U.status="pending",U.then(function(j){U.status==="pending"&&(U.status="fulfilled",U.value=j)},function(j){U.status==="pending"&&(U.status="rejected",U.reason=j)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function I(U,j,ge,Ae,Ue){var ne=typeof U;(ne==="undefined"||ne==="boolean")&&(U=null);var xe=!1;if(U===null)xe=!0;else switch(ne){case"bigint":case"string":case"number":xe=!0;break;case"object":switch(U.$$typeof){case r:case e:xe=!0;break;case g:return xe=U._init,I(xe(U._payload),j,ge,Ae,Ue)}}if(xe)return Ue=Ue(U),xe=Ae===""?"."+ue(U,0):Ae,F(Ue)?(ge="",xe!=null&&(ge=xe.replace(ae,"$&/")+"/"),I(Ue,j,ge,"",function(Qe){return Qe})):Ue!=null&&(H(Ue)&&(Ue=fe(Ue,ge+(Ue.key==null||U&&U.key===Ue.key?"":(""+Ue.key).replace(ae,"$&/")+"/")+xe)),j.push(Ue)),1;xe=0;var be=Ae===""?".":Ae+":";if(F(U))for(var Fe=0;Fe<U.length;Fe++)Ae=U[Fe],ne=be+ue(Ae,Fe),xe+=I(Ae,j,ge,ne,Ue);else if(Fe=x(U),typeof Fe=="function")for(U=Fe.call(U),Fe=0;!(Ae=U.next()).done;)Ae=Ae.value,ne=be+ue(Ae,Fe++),xe+=I(Ae,j,ge,ne,Ue);else if(ne==="object"){if(typeof U.then=="function")return I(J(U),j,ge,Ae,Ue);throw j=String(U),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return xe}function B(U,j,ge){if(U==null)return U;var Ae=[],Ue=0;return I(U,Ae,"","",function(ne){return j.call(ge,ne,Ue++)}),Ae}function ce(U){if(U._status===-1){var j=U._result;j=j(),j.then(function(ge){(U._status===0||U._status===-1)&&(U._status=1,U._result=ge)},function(ge){(U._status===0||U._status===-1)&&(U._status=2,U._result=ge)}),U._status===-1&&(U._status=0,U._result=j)}if(U._status===1)return U._result.default;throw U._result}var Q=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)},ve={map:B,forEach:function(U,j,ge){B(U,function(){j.apply(this,arguments)},ge)},count:function(U){var j=0;return B(U,function(){j++}),j},toArray:function(U){return B(U,function(j){return j})||[]},only:function(U){if(!H(U))throw Error("React.Children.only expected to receive a single React element child.");return U}};return lt.Activity=v,lt.Children=ve,lt.Component=S,lt.Fragment=n,lt.Profiler=o,lt.PureComponent=N,lt.StrictMode=a,lt.Suspense=p,lt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,lt.__COMPILER_RUNTIME={__proto__:null,c:function(U){return P.H.useMemoCache(U)}},lt.cache=function(U){return function(){return U.apply(null,arguments)}},lt.cacheSignal=function(){return null},lt.cloneElement=function(U,j,ge){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var Ae=T({},U.props),Ue=U.key;if(j!=null)for(ne in j.key!==void 0&&(Ue=""+j.key),j)!A.call(j,ne)||ne==="key"||ne==="__self"||ne==="__source"||ne==="ref"&&j.ref===void 0||(Ae[ne]=j[ne]);var ne=arguments.length-2;if(ne===1)Ae.children=ge;else if(1<ne){for(var xe=Array(ne),be=0;be<ne;be++)xe[be]=arguments[be+2];Ae.children=xe}return L(U.type,Ue,Ae)},lt.createContext=function(U){return U={$$typeof:u,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},lt.createElement=function(U,j,ge){var Ae,Ue={},ne=null;if(j!=null)for(Ae in j.key!==void 0&&(ne=""+j.key),j)A.call(j,Ae)&&Ae!=="key"&&Ae!=="__self"&&Ae!=="__source"&&(Ue[Ae]=j[Ae]);var xe=arguments.length-2;if(xe===1)Ue.children=ge;else if(1<xe){for(var be=Array(xe),Fe=0;Fe<xe;Fe++)be[Fe]=arguments[Fe+2];Ue.children=be}if(U&&U.defaultProps)for(Ae in xe=U.defaultProps,xe)Ue[Ae]===void 0&&(Ue[Ae]=xe[Ae]);return L(U,ne,Ue)},lt.createRef=function(){return{current:null}},lt.forwardRef=function(U){return{$$typeof:d,render:U}},lt.isValidElement=H,lt.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:ce}},lt.memo=function(U,j){return{$$typeof:h,type:U,compare:j===void 0?null:j}},lt.startTransition=function(U){var j=P.T,ge={};P.T=ge;try{var Ae=U(),Ue=P.S;Ue!==null&&Ue(ge,Ae),typeof Ae=="object"&&Ae!==null&&typeof Ae.then=="function"&&Ae.then(z,Q)}catch(ne){Q(ne)}finally{j!==null&&ge.types!==null&&(j.types=ge.types),P.T=j}},lt.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},lt.use=function(U){return P.H.use(U)},lt.useActionState=function(U,j,ge){return P.H.useActionState(U,j,ge)},lt.useCallback=function(U,j){return P.H.useCallback(U,j)},lt.useContext=function(U){return P.H.useContext(U)},lt.useDebugValue=function(){},lt.useDeferredValue=function(U,j){return P.H.useDeferredValue(U,j)},lt.useEffect=function(U,j){return P.H.useEffect(U,j)},lt.useEffectEvent=function(U){return P.H.useEffectEvent(U)},lt.useId=function(){return P.H.useId()},lt.useImperativeHandle=function(U,j,ge){return P.H.useImperativeHandle(U,j,ge)},lt.useInsertionEffect=function(U,j){return P.H.useInsertionEffect(U,j)},lt.useLayoutEffect=function(U,j){return P.H.useLayoutEffect(U,j)},lt.useMemo=function(U,j){return P.H.useMemo(U,j)},lt.useOptimistic=function(U,j){return P.H.useOptimistic(U,j)},lt.useReducer=function(U,j,ge){return P.H.useReducer(U,j,ge)},lt.useRef=function(U){return P.H.useRef(U)},lt.useState=function(U){return P.H.useState(U)},lt.useSyncExternalStore=function(U,j,ge){return P.H.useSyncExternalStore(U,j,ge)},lt.useTransition=function(){return P.H.useTransition()},lt.version="19.2.4",lt}var G_;function Fp(){return G_||(G_=1,Zh.exports=MM()),Zh.exports}var Bi=Fp();const $s=xM(Bi);var Qh={exports:{}},ll={},Jh={exports:{}},$h={};var k_;function EM(){return k_||(k_=1,(function(r){function e(I,B){var ce=I.length;I.push(B);e:for(;0<ce;){var Q=ce-1>>>1,ve=I[Q];if(0<o(ve,B))I[Q]=B,I[ce]=ve,ce=Q;else break e}}function n(I){return I.length===0?null:I[0]}function a(I){if(I.length===0)return null;var B=I[0],ce=I.pop();if(ce!==B){I[0]=ce;e:for(var Q=0,ve=I.length,U=ve>>>1;Q<U;){var j=2*(Q+1)-1,ge=I[j],Ae=j+1,Ue=I[Ae];if(0>o(ge,ce))Ae<ve&&0>o(Ue,ge)?(I[Q]=Ue,I[Ae]=ce,Q=Ae):(I[Q]=ge,I[j]=ce,Q=j);else if(Ae<ve&&0>o(Ue,ce))I[Q]=Ue,I[Ae]=ce,Q=Ae;else break e}}return B}function o(I,B){var ce=I.sortIndex-B.sortIndex;return ce!==0?ce:I.id-B.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var u=Date,d=u.now();r.unstable_now=function(){return u.now()-d}}var p=[],h=[],g=1,v=null,_=3,x=!1,E=!1,T=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function D(I){for(var B=n(h);B!==null;){if(B.callback===null)a(h);else if(B.startTime<=I)a(h),B.sortIndex=B.expirationTime,e(p,B);else break;B=n(h)}}function F(I){if(T=!1,D(I),!E)if(n(p)!==null)E=!0,z||(z=!0,$());else{var B=n(h);B!==null&&J(F,B.startTime-I)}}var z=!1,P=-1,A=5,L=-1;function fe(){return M?!0:!(r.unstable_now()-L<A)}function H(){if(M=!1,z){var I=r.unstable_now();L=I;var B=!0;try{e:{E=!1,T&&(T=!1,w(P),P=-1),x=!0;var ce=_;try{t:{for(D(I),v=n(p);v!==null&&!(v.expirationTime>I&&fe());){var Q=v.callback;if(typeof Q=="function"){v.callback=null,_=v.priorityLevel;var ve=Q(v.expirationTime<=I);if(I=r.unstable_now(),typeof ve=="function"){v.callback=ve,D(I),B=!0;break t}v===n(p)&&a(p),D(I)}else a(p);v=n(p)}if(v!==null)B=!0;else{var U=n(h);U!==null&&J(F,U.startTime-I),B=!1}}break e}finally{v=null,_=ce,x=!1}B=void 0}}finally{B?$():z=!1}}}var $;if(typeof N=="function")$=function(){N(H)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,ue=ae.port2;ae.port1.onmessage=H,$=function(){ue.postMessage(null)}}else $=function(){S(H,0)};function J(I,B){P=S(function(){I(r.unstable_now())},B)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(I){I.callback=null},r.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<I?Math.floor(1e3/I):5},r.unstable_getCurrentPriorityLevel=function(){return _},r.unstable_next=function(I){switch(_){case 1:case 2:case 3:var B=3;break;default:B=_}var ce=_;_=B;try{return I()}finally{_=ce}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(I,B){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var ce=_;_=I;try{return B()}finally{_=ce}},r.unstable_scheduleCallback=function(I,B,ce){var Q=r.unstable_now();switch(typeof ce=="object"&&ce!==null?(ce=ce.delay,ce=typeof ce=="number"&&0<ce?Q+ce:Q):ce=Q,I){case 1:var ve=-1;break;case 2:ve=250;break;case 5:ve=1073741823;break;case 4:ve=1e4;break;default:ve=5e3}return ve=ce+ve,I={id:g++,callback:B,priorityLevel:I,startTime:ce,expirationTime:ve,sortIndex:-1},ce>Q?(I.sortIndex=ce,e(h,I),n(p)===null&&I===n(h)&&(T?(w(P),P=-1):T=!0,J(F,ce-Q))):(I.sortIndex=ve,e(p,I),E||x||(E=!0,z||(z=!0,$()))),I},r.unstable_shouldYield=fe,r.unstable_wrapCallback=function(I){var B=_;return function(){var ce=_;_=B;try{return I.apply(this,arguments)}finally{_=ce}}}})($h)),$h}var X_;function bM(){return X_||(X_=1,Jh.exports=EM()),Jh.exports}var ed={exports:{}},Ln={};var W_;function TM(){if(W_)return Ln;W_=1;var r=Fp();function e(p){var h="https://react.dev/errors/"+p;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)h+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(p,h,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:v==null?null:""+v,children:p,containerInfo:h,implementation:g}}var u=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,h){if(p==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Ln.createPortal=function(p,h){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return c(p,h,null,g)},Ln.flushSync=function(p){var h=u.T,g=a.p;try{if(u.T=null,a.p=2,p)return p()}finally{u.T=h,a.p=g,a.d.f()}},Ln.preconnect=function(p,h){typeof p=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,a.d.C(p,h))},Ln.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},Ln.preinit=function(p,h){if(typeof p=="string"&&h&&typeof h.as=="string"){var g=h.as,v=d(g,h.crossOrigin),_=typeof h.integrity=="string"?h.integrity:void 0,x=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;g==="style"?a.d.S(p,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:v,integrity:_,fetchPriority:x}):g==="script"&&a.d.X(p,{crossOrigin:v,integrity:_,fetchPriority:x,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Ln.preinitModule=function(p,h){if(typeof p=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var g=d(h.as,h.crossOrigin);a.d.M(p,{crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&a.d.M(p)},Ln.preload=function(p,h){if(typeof p=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var g=h.as,v=d(g,h.crossOrigin);a.d.L(p,g,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Ln.preloadModule=function(p,h){if(typeof p=="string")if(h){var g=d(h.as,h.crossOrigin);a.d.m(p,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else a.d.m(p)},Ln.requestFormReset=function(p){a.d.r(p)},Ln.unstable_batchedUpdates=function(p,h){return p(h)},Ln.useFormState=function(p,h,g){return u.H.useFormState(p,h,g)},Ln.useFormStatus=function(){return u.H.useHostTransitionStatus()},Ln.version="19.2.4",Ln}var j_;function AM(){if(j_)return ed.exports;j_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),ed.exports=TM(),ed.exports}var q_;function RM(){if(q_)return ll;q_=1;var r=bM(),e=Fp(),n=AM();function a(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function u(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function d(t){if(t.tag===31){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function p(t){if(c(t)!==t)throw Error(a(188))}function h(t){var i=t.alternate;if(!i){if(i=c(t),i===null)throw Error(a(188));return i!==t?null:t}for(var s=t,l=i;;){var f=s.return;if(f===null)break;var m=f.alternate;if(m===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===s)return p(f),t;if(m===l)return p(f),i;m=m.sibling}throw Error(a(188))}if(s.return!==l.return)s=f,l=m;else{for(var y=!1,R=f.child;R;){if(R===s){y=!0,s=f,l=m;break}if(R===l){y=!0,l=f,s=m;break}R=R.sibling}if(!y){for(R=m.child;R;){if(R===s){y=!0,s=m,l=f;break}if(R===l){y=!0,l=m,s=f;break}R=R.sibling}if(!y)throw Error(a(189))}}if(s.alternate!==l)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?t:i}function g(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=g(t),i!==null)return i;t=t.sibling}return null}var v=Object.assign,_=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),w=Symbol.for("react.consumer"),N=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),L=Symbol.for("react.activity"),fe=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function $(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var ae=Symbol.for("react.client.reference");function ue(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ae?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case T:return"Fragment";case S:return"Profiler";case M:return"StrictMode";case F:return"Suspense";case z:return"SuspenseList";case L:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case N:return t.displayName||"Context";case w:return(t._context.displayName||"Context")+".Consumer";case D:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case P:return i=t.displayName||null,i!==null?i:ue(t.type)||"Memo";case A:i=t._payload,t=t._init;try{return ue(t(i))}catch{}}return null}var J=Array.isArray,I=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ce={pending:!1,data:null,method:null,action:null},Q=[],ve=-1;function U(t){return{current:t}}function j(t){0>ve||(t.current=Q[ve],Q[ve]=null,ve--)}function ge(t,i){ve++,Q[ve]=t.current,t.current=i}var Ae=U(null),Ue=U(null),ne=U(null),xe=U(null);function be(t,i){switch(ge(ne,i),ge(Ue,t),ge(Ae,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?l_(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=l_(i),t=c_(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}j(Ae),ge(Ae,t)}function Fe(){j(Ae),j(Ue),j(ne)}function Qe(t){t.memoizedState!==null&&ge(xe,t);var i=Ae.current,s=c_(i,t.type);i!==s&&(ge(Ue,t),ge(Ae,s))}function et(t){Ue.current===t&&(j(Ae),j(Ue)),xe.current===t&&(j(xe),il._currentValue=ce)}var nn,Mt;function xt(t){if(nn===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);nn=i&&i[1]||"",Mt=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+nn+t+Mt}var Ut=!1;function ct(t,i){if(!t||Ut)return"";Ut=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var Se=function(){throw Error()};if(Object.defineProperty(Se.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Se,[])}catch(le){var re=le}Reflect.construct(t,[],Se)}else{try{Se.call()}catch(le){re=le}t.call(Se.prototype)}}else{try{throw Error()}catch(le){re=le}(Se=t())&&typeof Se.catch=="function"&&Se.catch(function(){})}}catch(le){if(le&&re&&typeof le.stack=="string")return[le.stack,re.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),y=m[0],R=m[1];if(y&&R){var V=y.split(`
`),ie=R.split(`
`);for(f=l=0;l<V.length&&!V[l].includes("DetermineComponentFrameRoot");)l++;for(;f<ie.length&&!ie[f].includes("DetermineComponentFrameRoot");)f++;if(l===V.length||f===ie.length)for(l=V.length-1,f=ie.length-1;1<=l&&0<=f&&V[l]!==ie[f];)f--;for(;1<=l&&0<=f;l--,f--)if(V[l]!==ie[f]){if(l!==1||f!==1)do if(l--,f--,0>f||V[l]!==ie[f]){var pe=`
`+V[l].replace(" at new "," at ");return t.displayName&&pe.includes("<anonymous>")&&(pe=pe.replace("<anonymous>",t.displayName)),pe}while(1<=l&&0<=f);break}}}finally{Ut=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?xt(s):""}function tn(t,i){switch(t.tag){case 26:case 27:case 5:return xt(t.type);case 16:return xt("Lazy");case 13:return t.child!==i&&i!==null?xt("Suspense Fallback"):xt("Suspense");case 19:return xt("SuspenseList");case 0:case 15:return ct(t.type,!1);case 11:return ct(t.type.render,!1);case 1:return ct(t.type,!0);case 31:return xt("Activity");default:return""}}function G(t){try{var i="",s=null;do i+=tn(t,s),s=t,t=t.return;while(t);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Zt=Object.prototype.hasOwnProperty,Rt=r.unstable_scheduleCallback,It=r.unstable_cancelCallback,je=r.unstable_shouldYield,O=r.unstable_requestPaint,b=r.unstable_now,q=r.unstable_getCurrentPriorityLevel,me=r.unstable_ImmediatePriority,ye=r.unstable_UserBlockingPriority,de=r.unstable_NormalPriority,Xe=r.unstable_LowPriority,we=r.unstable_IdlePriority,Ke=r.log,tt=r.unstable_setDisableYieldValue,Te=null,Me=null;function Ie(t){if(typeof Ke=="function"&&tt(t),Me&&typeof Me.setStrictMode=="function")try{Me.setStrictMode(Te,t)}catch{}}var Oe=Math.clz32?Math.clz32:W,Pe=Math.log,ft=Math.LN2;function W(t){return t>>>=0,t===0?32:31-(Pe(t)/ft|0)|0}var Ce=256,Re=262144,Be=4194304;function Ee(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function he(t,i,s){var l=t.pendingLanes;if(l===0)return 0;var f=0,m=t.suspendedLanes,y=t.pingedLanes;t=t.warmLanes;var R=l&134217727;return R!==0?(l=R&~m,l!==0?f=Ee(l):(y&=R,y!==0?f=Ee(y):s||(s=R&~t,s!==0&&(f=Ee(s))))):(R=l&~m,R!==0?f=Ee(R):y!==0?f=Ee(y):s||(s=l&~t,s!==0&&(f=Ee(s)))),f===0?0:i!==0&&i!==f&&(i&m)===0&&(m=f&-f,s=i&-i,m>=s||m===32&&(s&4194048)!==0)?i:f}function He(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function at(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bt(){var t=Be;return Be<<=1,(Be&62914560)===0&&(Be=4194304),t}function wt(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function In(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Ti(t,i,s,l,f,m){var y=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var R=t.entanglements,V=t.expirationTimes,ie=t.hiddenUpdates;for(s=y&~s;0<s;){var pe=31-Oe(s),Se=1<<pe;R[pe]=0,V[pe]=-1;var re=ie[pe];if(re!==null)for(ie[pe]=null,pe=0;pe<re.length;pe++){var le=re[pe];le!==null&&(le.lane&=-536870913)}s&=~Se}l!==0&&vo(t,l,0),m!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=m&~(y&~i))}function vo(t,i,s){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-Oe(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|s&261930}function tr(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-Oe(s),f=1<<l;f&i|t[l]&i&&(t[l]|=i),s&=~f}}function Il(t,i){var s=i&-i;return s=(s&42)!==0?1:nr(s),(s&(t.suspendedLanes|i))!==0?0:s}function nr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function ir(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Gi(){var t=B.p;return t!==0?t:(t=window.event,t===void 0?32:L_(t.type))}function ar(t,i){var s=B.p;try{return B.p=t,i()}finally{B.p=s}}var Ai=Math.random().toString(36).slice(2),cn="__reactFiber$"+Ai,_n="__reactProps$"+Ai,oa="__reactContainer$"+Ai,Ha="__reactEvents$"+Ai,Pl="__reactListeners$"+Ai,Bl="__reactHandles$"+Ai,Fl="__reactResources$"+Ai,Ms="__reactMarker$"+Ai;function xo(t){delete t[cn],delete t[_n],delete t[Ha],delete t[Pl],delete t[Bl]}function Va(t){var i=t[cn];if(i)return i;for(var s=t.parentNode;s;){if(i=s[oa]||s[cn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=g_(t);t!==null;){if(s=t[cn])return s;t=g_(t)}return i}t=s,s=t.parentNode}return null}function Ga(t){if(t=t[cn]||t[oa]){var i=t.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return t}return null}function Es(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(a(33))}function C(t){var i=t[Fl];return i||(i=t[Fl]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function X(t){t[Ms]=!0}var oe=new Set,se={};function ee(t,i){De(t,i),De(t+"Capture",i)}function De(t,i){for(se[t]=i,t=0;t<i.length;t++)oe.add(i[t])}var ze=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ne={},We={};function Ye(t){return Zt.call(We,t)?!0:Zt.call(Ne,t)?!1:ze.test(t)?We[t]=!0:(Ne[t]=!0,!1)}function it(t,i,s){if(Ye(i))if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+s)}}function ot(t,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+s)}}function Ve(t,i,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(i,s,""+l)}}function ht(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Qt(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Jt(t,i,s){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,i);if(!t.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,m=l.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(y){s=""+y,m.call(this,y)}}),Object.defineProperty(t,i,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(y){s=""+y},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Dt(t){if(!t._valueTracker){var i=Qt(t)?"checked":"value";t._valueTracker=Jt(t,i,""+t[i])}}function vn(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=Qt(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function ke(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Pn=/[\n"\\]/g;function rt(t){return t.replace(Pn,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Bn(t,i,s,l,f,m,y,R){t.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.type=y:t.removeAttribute("type"),i!=null?y==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+ht(i)):t.value!==""+ht(i)&&(t.value=""+ht(i)):y!=="submit"&&y!=="reset"||t.removeAttribute("value"),i!=null?Ri(t,y,ht(i)):s!=null?Ri(t,y,ht(s)):l!=null&&t.removeAttribute("value"),f==null&&m!=null&&(t.defaultChecked=!!m),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+ht(R):t.removeAttribute("name")}function $n(t,i,s,l,f,m,y,R){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(t.type=m),i!=null||s!=null){if(!(m!=="submit"&&m!=="reset"||i!=null)){Dt(t);return}s=s!=null?""+ht(s):"",i=i!=null?""+ht(i):s,R||i===t.value||(t.value=i),t.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=R?t.checked:!!l,t.defaultChecked=!!l,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(t.name=y),Dt(t)}function Ri(t,i,s){i==="number"&&ke(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function ei(t,i,s,l){if(t=t.options,i){i={};for(var f=0;f<s.length;f++)i["$"+s[f]]=!0;for(s=0;s<t.length;s++)f=i.hasOwnProperty("$"+t[s].value),t[s].selected!==f&&(t[s].selected=f),f&&l&&(t[s].defaultSelected=!0)}else{for(s=""+ht(s),i=null,f=0;f<t.length;f++){if(t[f].value===s){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function Pt(t,i,s){if(i!=null&&(i=""+ht(i),i!==t.value&&(t.value=i),s==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=s!=null?""+ht(s):""}function un(t,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(a(92));if(J(l)){if(1<l.length)throw Error(a(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=ht(i),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l),Dt(t)}function Fn(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var fn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ci(t,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,s):typeof s!="number"||s===0||fn.has(i)?i==="float"?t.cssFloat=s:t[i]=(""+s).trim():t[i]=s+"px"}function la(t,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&s[f]!==l&&Ci(t,f,l)}else for(var m in i)i.hasOwnProperty(m)&&Ci(t,m,i[m])}function sr(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),gS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function zl(t){return gS.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ca(){}var Wu=null;function ju(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var rr=null,or=null;function om(t){var i=Ga(t);if(i&&(t=i.stateNode)){var s=t[_n]||null;e:switch(t=i.stateNode,i.type){case"input":if(Bn(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+rt(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var f=l[_n]||null;if(!f)throw Error(a(90));Bn(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===t.form&&vn(l)}break e;case"textarea":Pt(t,s.value,s.defaultValue);break e;case"select":i=s.value,i!=null&&ei(t,!!s.multiple,i,!1)}}}var qu=!1;function lm(t,i,s){if(qu)return t(i,s);qu=!0;try{var l=t(i);return l}finally{if(qu=!1,(rr!==null||or!==null)&&(Ac(),rr&&(i=rr,t=or,or=rr=null,om(i),t)))for(i=0;i<t.length;i++)om(t[i])}}function So(t,i){var s=t.stateNode;if(s===null)return null;var l=s[_n]||null;if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var ua=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yu=!1;if(ua)try{var yo={};Object.defineProperty(yo,"passive",{get:function(){Yu=!0}}),window.addEventListener("test",yo,yo),window.removeEventListener("test",yo,yo)}catch{Yu=!1}var ka=null,Ku=null,Hl=null;function cm(){if(Hl)return Hl;var t,i=Ku,s=i.length,l,f="value"in ka?ka.value:ka.textContent,m=f.length;for(t=0;t<s&&i[t]===f[t];t++);var y=s-t;for(l=1;l<=y&&i[s-l]===f[m-l];l++);return Hl=f.slice(t,1<l?1-l:void 0)}function Vl(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Gl(){return!0}function um(){return!1}function Wn(t){function i(s,l,f,m,y){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=m,this.target=y,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(s=t[R],this[R]=s?s(m):m[R]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Gl:um,this.isPropagationStopped=um,this}return v(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Gl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Gl)},persist:function(){},isPersistent:Gl}),i}var bs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kl=Wn(bs),Mo=v({},bs,{view:0,detail:0}),_S=Wn(Mo),Zu,Qu,Eo,Xl=v({},Mo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$u,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Eo&&(Eo&&t.type==="mousemove"?(Zu=t.screenX-Eo.screenX,Qu=t.screenY-Eo.screenY):Qu=Zu=0,Eo=t),Zu)},movementY:function(t){return"movementY"in t?t.movementY:Qu}}),fm=Wn(Xl),vS=v({},Xl,{dataTransfer:0}),xS=Wn(vS),SS=v({},Mo,{relatedTarget:0}),Ju=Wn(SS),yS=v({},bs,{animationName:0,elapsedTime:0,pseudoElement:0}),MS=Wn(yS),ES=v({},bs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),bS=Wn(ES),TS=v({},bs,{data:0}),hm=Wn(TS),AS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},RS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},CS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wS(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=CS[t])?!!i[t]:!1}function $u(){return wS}var DS=v({},Mo,{key:function(t){if(t.key){var i=AS[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Vl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?RS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$u,charCode:function(t){return t.type==="keypress"?Vl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Vl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),NS=Wn(DS),LS=v({},Xl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dm=Wn(LS),US=v({},Mo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$u}),OS=Wn(US),IS=v({},bs,{propertyName:0,elapsedTime:0,pseudoElement:0}),PS=Wn(IS),BS=v({},Xl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),FS=Wn(BS),zS=v({},bs,{newState:0,oldState:0}),HS=Wn(zS),VS=[9,13,27,32],ef=ua&&"CompositionEvent"in window,bo=null;ua&&"documentMode"in document&&(bo=document.documentMode);var GS=ua&&"TextEvent"in window&&!bo,pm=ua&&(!ef||bo&&8<bo&&11>=bo),mm=" ",gm=!1;function _m(t,i){switch(t){case"keyup":return VS.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var lr=!1;function kS(t,i){switch(t){case"compositionend":return vm(i);case"keypress":return i.which!==32?null:(gm=!0,mm);case"textInput":return t=i.data,t===mm&&gm?null:t;default:return null}}function XS(t,i){if(lr)return t==="compositionend"||!ef&&_m(t,i)?(t=cm(),Hl=Ku=ka=null,lr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return pm&&i.locale!=="ko"?null:i.data;default:return null}}var WS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xm(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!WS[t.type]:i==="textarea"}function Sm(t,i,s,l){rr?or?or.push(l):or=[l]:rr=l,i=Uc(i,"onChange"),0<i.length&&(s=new kl("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var To=null,Ao=null;function jS(t){n_(t,0)}function Wl(t){var i=Es(t);if(vn(i))return t}function ym(t,i){if(t==="change")return i}var Mm=!1;if(ua){var tf;if(ua){var nf="oninput"in document;if(!nf){var Em=document.createElement("div");Em.setAttribute("oninput","return;"),nf=typeof Em.oninput=="function"}tf=nf}else tf=!1;Mm=tf&&(!document.documentMode||9<document.documentMode)}function bm(){To&&(To.detachEvent("onpropertychange",Tm),Ao=To=null)}function Tm(t){if(t.propertyName==="value"&&Wl(Ao)){var i=[];Sm(i,Ao,t,ju(t)),lm(jS,i)}}function qS(t,i,s){t==="focusin"?(bm(),To=i,Ao=s,To.attachEvent("onpropertychange",Tm)):t==="focusout"&&bm()}function YS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Wl(Ao)}function KS(t,i){if(t==="click")return Wl(i)}function ZS(t,i){if(t==="input"||t==="change")return Wl(i)}function QS(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var ti=typeof Object.is=="function"?Object.is:QS;function Ro(t,i){if(ti(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!Zt.call(i,f)||!ti(t[f],i[f]))return!1}return!0}function Am(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Rm(t,i){var s=Am(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Am(s)}}function Cm(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Cm(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function wm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=ke(t.document);i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=ke(t.document)}return i}function af(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var JS=ua&&"documentMode"in document&&11>=document.documentMode,cr=null,sf=null,Co=null,rf=!1;function Dm(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;rf||cr==null||cr!==ke(l)||(l=cr,"selectionStart"in l&&af(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Co&&Ro(Co,l)||(Co=l,l=Uc(sf,"onSelect"),0<l.length&&(i=new kl("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=cr)))}function Ts(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var ur={animationend:Ts("Animation","AnimationEnd"),animationiteration:Ts("Animation","AnimationIteration"),animationstart:Ts("Animation","AnimationStart"),transitionrun:Ts("Transition","TransitionRun"),transitionstart:Ts("Transition","TransitionStart"),transitioncancel:Ts("Transition","TransitionCancel"),transitionend:Ts("Transition","TransitionEnd")},of={},Nm={};ua&&(Nm=document.createElement("div").style,"AnimationEvent"in window||(delete ur.animationend.animation,delete ur.animationiteration.animation,delete ur.animationstart.animation),"TransitionEvent"in window||delete ur.transitionend.transition);function As(t){if(of[t])return of[t];if(!ur[t])return t;var i=ur[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in Nm)return of[t]=i[s];return t}var Lm=As("animationend"),Um=As("animationiteration"),Om=As("animationstart"),$S=As("transitionrun"),ey=As("transitionstart"),ty=As("transitioncancel"),Im=As("transitionend"),Pm=new Map,lf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");lf.push("scrollEnd");function wi(t,i){Pm.set(t,i),ee(i,[t])}var jl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},fi=[],fr=0,cf=0;function ql(){for(var t=fr,i=cf=fr=0;i<t;){var s=fi[i];fi[i++]=null;var l=fi[i];fi[i++]=null;var f=fi[i];fi[i++]=null;var m=fi[i];if(fi[i++]=null,l!==null&&f!==null){var y=l.pending;y===null?f.next=f:(f.next=y.next,y.next=f),l.pending=f}m!==0&&Bm(s,f,m)}}function Yl(t,i,s,l){fi[fr++]=t,fi[fr++]=i,fi[fr++]=s,fi[fr++]=l,cf|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function uf(t,i,s,l){return Yl(t,i,s,l),Kl(t)}function Rs(t,i){return Yl(t,null,null,i),Kl(t)}function Bm(t,i,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var f=!1,m=t.return;m!==null;)m.childLanes|=s,l=m.alternate,l!==null&&(l.childLanes|=s),m.tag===22&&(t=m.stateNode,t===null||t._visibility&1||(f=!0)),t=m,m=m.return;return t.tag===3?(m=t.stateNode,f&&i!==null&&(f=31-Oe(s),t=m.hiddenUpdates,l=t[f],l===null?t[f]=[i]:l.push(i),i.lane=s|536870912),m):null}function Kl(t){if(50<Zo)throw Zo=0,xh=null,Error(a(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var hr={};function ny(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ni(t,i,s,l){return new ny(t,i,s,l)}function ff(t){return t=t.prototype,!(!t||!t.isReactComponent)}function fa(t,i){var s=t.alternate;return s===null?(s=ni(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function Fm(t,i){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,i=s.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function Zl(t,i,s,l,f,m){var y=0;if(l=t,typeof t=="function")ff(t)&&(y=1);else if(typeof t=="string")y=oM(t,s,Ae.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case L:return t=ni(31,s,i,f),t.elementType=L,t.lanes=m,t;case T:return Cs(s.children,f,m,i);case M:y=8,f|=24;break;case S:return t=ni(12,s,i,f|2),t.elementType=S,t.lanes=m,t;case F:return t=ni(13,s,i,f),t.elementType=F,t.lanes=m,t;case z:return t=ni(19,s,i,f),t.elementType=z,t.lanes=m,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case N:y=10;break e;case w:y=9;break e;case D:y=11;break e;case P:y=14;break e;case A:y=16,l=null;break e}y=29,s=Error(a(130,t===null?"null":typeof t,"")),l=null}return i=ni(y,s,i,f),i.elementType=t,i.type=l,i.lanes=m,i}function Cs(t,i,s,l){return t=ni(7,t,l,i),t.lanes=s,t}function hf(t,i,s){return t=ni(6,t,null,i),t.lanes=s,t}function zm(t){var i=ni(18,null,null,0);return i.stateNode=t,i}function df(t,i,s){return i=ni(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var Hm=new WeakMap;function hi(t,i){if(typeof t=="object"&&t!==null){var s=Hm.get(t);return s!==void 0?s:(i={value:t,source:i,stack:G(i)},Hm.set(t,i),i)}return{value:t,source:i,stack:G(i)}}var dr=[],pr=0,Ql=null,wo=0,di=[],pi=0,Xa=null,ki=1,Xi="";function ha(t,i){dr[pr++]=wo,dr[pr++]=Ql,Ql=t,wo=i}function Vm(t,i,s){di[pi++]=ki,di[pi++]=Xi,di[pi++]=Xa,Xa=t;var l=ki;t=Xi;var f=32-Oe(l)-1;l&=~(1<<f),s+=1;var m=32-Oe(i)+f;if(30<m){var y=f-f%5;m=(l&(1<<y)-1).toString(32),l>>=y,f-=y,ki=1<<32-Oe(i)+f|s<<f|l,Xi=m+t}else ki=1<<m|s<<f|l,Xi=t}function pf(t){t.return!==null&&(ha(t,1),Vm(t,1,0))}function mf(t){for(;t===Ql;)Ql=dr[--pr],dr[pr]=null,wo=dr[--pr],dr[pr]=null;for(;t===Xa;)Xa=di[--pi],di[pi]=null,Xi=di[--pi],di[pi]=null,ki=di[--pi],di[pi]=null}function Gm(t,i){di[pi++]=ki,di[pi++]=Xi,di[pi++]=Xa,ki=i.id,Xi=i.overflow,Xa=t}var Cn=null,qt=null,Tt=!1,Wa=null,mi=!1,gf=Error(a(519));function ja(t){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Do(hi(i,t)),gf}function km(t){var i=t.stateNode,s=t.type,l=t.memoizedProps;switch(i[cn]=t,i[_n]=l,s){case"dialog":yt("cancel",i),yt("close",i);break;case"iframe":case"object":case"embed":yt("load",i);break;case"video":case"audio":for(s=0;s<Jo.length;s++)yt(Jo[s],i);break;case"source":yt("error",i);break;case"img":case"image":case"link":yt("error",i),yt("load",i);break;case"details":yt("toggle",i);break;case"input":yt("invalid",i),$n(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":yt("invalid",i);break;case"textarea":yt("invalid",i),un(i,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||r_(i.textContent,s)?(l.popover!=null&&(yt("beforetoggle",i),yt("toggle",i)),l.onScroll!=null&&yt("scroll",i),l.onScrollEnd!=null&&yt("scrollend",i),l.onClick!=null&&(i.onclick=ca),i=!0):i=!1,i||ja(t,!0)}function Xm(t){for(Cn=t.return;Cn;)switch(Cn.tag){case 5:case 31:case 13:mi=!1;return;case 27:case 3:mi=!0;return;default:Cn=Cn.return}}function mr(t){if(t!==Cn)return!1;if(!Tt)return Xm(t),Tt=!0,!1;var i=t.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||Oh(t.type,t.memoizedProps)),s=!s),s&&qt&&ja(t),Xm(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));qt=m_(t)}else if(i===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));qt=m_(t)}else i===27?(i=qt,rs(t.type)?(t=zh,zh=null,qt=t):qt=i):qt=Cn?_i(t.stateNode.nextSibling):null;return!0}function ws(){qt=Cn=null,Tt=!1}function _f(){var t=Wa;return t!==null&&(Kn===null?Kn=t:Kn.push.apply(Kn,t),Wa=null),t}function Do(t){Wa===null?Wa=[t]:Wa.push(t)}var vf=U(null),Ds=null,da=null;function qa(t,i,s){ge(vf,i._currentValue),i._currentValue=s}function pa(t){t._currentValue=vf.current,j(vf)}function xf(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function Sf(t,i,s,l){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var m=f.dependencies;if(m!==null){var y=f.child;m=m.firstContext;e:for(;m!==null;){var R=m;m=f;for(var V=0;V<i.length;V++)if(R.context===i[V]){m.lanes|=s,R=m.alternate,R!==null&&(R.lanes|=s),xf(m.return,s,t),l||(y=null);break e}m=R.next}}else if(f.tag===18){if(y=f.return,y===null)throw Error(a(341));y.lanes|=s,m=y.alternate,m!==null&&(m.lanes|=s),xf(y,s,t),y=null}else y=f.child;if(y!==null)y.return=f;else for(y=f;y!==null;){if(y===t){y=null;break}if(f=y.sibling,f!==null){f.return=y.return,y=f;break}y=y.return}f=y}}function gr(t,i,s,l){t=null;for(var f=i,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var y=f.alternate;if(y===null)throw Error(a(387));if(y=y.memoizedProps,y!==null){var R=f.type;ti(f.pendingProps.value,y.value)||(t!==null?t.push(R):t=[R])}}else if(f===xe.current){if(y=f.alternate,y===null)throw Error(a(387));y.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(il):t=[il])}f=f.return}t!==null&&Sf(i,t,s,l),i.flags|=262144}function Jl(t){for(t=t.firstContext;t!==null;){if(!ti(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ns(t){Ds=t,da=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function wn(t){return Wm(Ds,t)}function $l(t,i){return Ds===null&&Ns(t),Wm(t,i)}function Wm(t,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},da===null){if(t===null)throw Error(a(308));da=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else da=da.next=i;return s}var iy=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(s){return s()})}},ay=r.unstable_scheduleCallback,sy=r.unstable_NormalPriority,hn={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function yf(){return{controller:new iy,data:new Map,refCount:0}}function No(t){t.refCount--,t.refCount===0&&ay(sy,function(){t.controller.abort()})}var Lo=null,Mf=0,_r=0,vr=null;function ry(t,i){if(Lo===null){var s=Lo=[];Mf=0,_r=Th(),vr={status:"pending",value:void 0,then:function(l){s.push(l)}}}return Mf++,i.then(jm,jm),i}function jm(){if(--Mf===0&&Lo!==null){vr!==null&&(vr.status="fulfilled");var t=Lo;Lo=null,_r=0,vr=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function oy(t,i){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<s.length;f++)(0,s[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var qm=I.S;I.S=function(t,i){D0=b(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&ry(t,i),qm!==null&&qm(t,i)};var Ls=U(null);function Ef(){var t=Ls.current;return t!==null?t:jt.pooledCache}function ec(t,i){i===null?ge(Ls,Ls.current):ge(Ls,i.pool)}function Ym(){var t=Ef();return t===null?null:{parent:hn._currentValue,pool:t}}var xr=Error(a(460)),bf=Error(a(474)),tc=Error(a(542)),nc={then:function(){}};function Km(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Zm(t,i,s){switch(s=t[s],s===void 0?t.push(i):s!==i&&(i.then(ca,ca),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Jm(t),t;default:if(typeof i.status=="string")i.then(ca,ca);else{if(t=jt,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Jm(t),t}throw Os=i,xr}}function Us(t){try{var i=t._init;return i(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(Os=s,xr):s}}var Os=null;function Qm(){if(Os===null)throw Error(a(459));var t=Os;return Os=null,t}function Jm(t){if(t===xr||t===tc)throw Error(a(483))}var Sr=null,Uo=0;function ic(t){var i=Uo;return Uo+=1,Sr===null&&(Sr=[]),Zm(Sr,t,i)}function Oo(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function ac(t,i){throw i.$$typeof===_?Error(a(525)):(t=Object.prototype.toString.call(i),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function $m(t){function i(K,k){if(t){var te=K.deletions;te===null?(K.deletions=[k],K.flags|=16):te.push(k)}}function s(K,k){if(!t)return null;for(;k!==null;)i(K,k),k=k.sibling;return null}function l(K){for(var k=new Map;K!==null;)K.key!==null?k.set(K.key,K):k.set(K.index,K),K=K.sibling;return k}function f(K,k){return K=fa(K,k),K.index=0,K.sibling=null,K}function m(K,k,te){return K.index=te,t?(te=K.alternate,te!==null?(te=te.index,te<k?(K.flags|=67108866,k):te):(K.flags|=67108866,k)):(K.flags|=1048576,k)}function y(K){return t&&K.alternate===null&&(K.flags|=67108866),K}function R(K,k,te,_e){return k===null||k.tag!==6?(k=hf(te,K.mode,_e),k.return=K,k):(k=f(k,te),k.return=K,k)}function V(K,k,te,_e){var Je=te.type;return Je===T?pe(K,k,te.props.children,_e,te.key):k!==null&&(k.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===A&&Us(Je)===k.type)?(k=f(k,te.props),Oo(k,te),k.return=K,k):(k=Zl(te.type,te.key,te.props,null,K.mode,_e),Oo(k,te),k.return=K,k)}function ie(K,k,te,_e){return k===null||k.tag!==4||k.stateNode.containerInfo!==te.containerInfo||k.stateNode.implementation!==te.implementation?(k=df(te,K.mode,_e),k.return=K,k):(k=f(k,te.children||[]),k.return=K,k)}function pe(K,k,te,_e,Je){return k===null||k.tag!==7?(k=Cs(te,K.mode,_e,Je),k.return=K,k):(k=f(k,te),k.return=K,k)}function Se(K,k,te){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=hf(""+k,K.mode,te),k.return=K,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case x:return te=Zl(k.type,k.key,k.props,null,K.mode,te),Oo(te,k),te.return=K,te;case E:return k=df(k,K.mode,te),k.return=K,k;case A:return k=Us(k),Se(K,k,te)}if(J(k)||$(k))return k=Cs(k,K.mode,te,null),k.return=K,k;if(typeof k.then=="function")return Se(K,ic(k),te);if(k.$$typeof===N)return Se(K,$l(K,k),te);ac(K,k)}return null}function re(K,k,te,_e){var Je=k!==null?k.key:null;if(typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint")return Je!==null?null:R(K,k,""+te,_e);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case x:return te.key===Je?V(K,k,te,_e):null;case E:return te.key===Je?ie(K,k,te,_e):null;case A:return te=Us(te),re(K,k,te,_e)}if(J(te)||$(te))return Je!==null?null:pe(K,k,te,_e,null);if(typeof te.then=="function")return re(K,k,ic(te),_e);if(te.$$typeof===N)return re(K,k,$l(K,te),_e);ac(K,te)}return null}function le(K,k,te,_e,Je){if(typeof _e=="string"&&_e!==""||typeof _e=="number"||typeof _e=="bigint")return K=K.get(te)||null,R(k,K,""+_e,Je);if(typeof _e=="object"&&_e!==null){switch(_e.$$typeof){case x:return K=K.get(_e.key===null?te:_e.key)||null,V(k,K,_e,Je);case E:return K=K.get(_e.key===null?te:_e.key)||null,ie(k,K,_e,Je);case A:return _e=Us(_e),le(K,k,te,_e,Je)}if(J(_e)||$(_e))return K=K.get(te)||null,pe(k,K,_e,Je,null);if(typeof _e.then=="function")return le(K,k,te,ic(_e),Je);if(_e.$$typeof===N)return le(K,k,te,$l(k,_e),Je);ac(k,_e)}return null}function Ge(K,k,te,_e){for(var Je=null,Nt=null,qe=k,dt=k=0,bt=null;qe!==null&&dt<te.length;dt++){qe.index>dt?(bt=qe,qe=null):bt=qe.sibling;var Lt=re(K,qe,te[dt],_e);if(Lt===null){qe===null&&(qe=bt);break}t&&qe&&Lt.alternate===null&&i(K,qe),k=m(Lt,k,dt),Nt===null?Je=Lt:Nt.sibling=Lt,Nt=Lt,qe=bt}if(dt===te.length)return s(K,qe),Tt&&ha(K,dt),Je;if(qe===null){for(;dt<te.length;dt++)qe=Se(K,te[dt],_e),qe!==null&&(k=m(qe,k,dt),Nt===null?Je=qe:Nt.sibling=qe,Nt=qe);return Tt&&ha(K,dt),Je}for(qe=l(qe);dt<te.length;dt++)bt=le(qe,K,dt,te[dt],_e),bt!==null&&(t&&bt.alternate!==null&&qe.delete(bt.key===null?dt:bt.key),k=m(bt,k,dt),Nt===null?Je=bt:Nt.sibling=bt,Nt=bt);return t&&qe.forEach(function(fs){return i(K,fs)}),Tt&&ha(K,dt),Je}function $e(K,k,te,_e){if(te==null)throw Error(a(151));for(var Je=null,Nt=null,qe=k,dt=k=0,bt=null,Lt=te.next();qe!==null&&!Lt.done;dt++,Lt=te.next()){qe.index>dt?(bt=qe,qe=null):bt=qe.sibling;var fs=re(K,qe,Lt.value,_e);if(fs===null){qe===null&&(qe=bt);break}t&&qe&&fs.alternate===null&&i(K,qe),k=m(fs,k,dt),Nt===null?Je=fs:Nt.sibling=fs,Nt=fs,qe=bt}if(Lt.done)return s(K,qe),Tt&&ha(K,dt),Je;if(qe===null){for(;!Lt.done;dt++,Lt=te.next())Lt=Se(K,Lt.value,_e),Lt!==null&&(k=m(Lt,k,dt),Nt===null?Je=Lt:Nt.sibling=Lt,Nt=Lt);return Tt&&ha(K,dt),Je}for(qe=l(qe);!Lt.done;dt++,Lt=te.next())Lt=le(qe,K,dt,Lt.value,_e),Lt!==null&&(t&&Lt.alternate!==null&&qe.delete(Lt.key===null?dt:Lt.key),k=m(Lt,k,dt),Nt===null?Je=Lt:Nt.sibling=Lt,Nt=Lt);return t&&qe.forEach(function(vM){return i(K,vM)}),Tt&&ha(K,dt),Je}function Wt(K,k,te,_e){if(typeof te=="object"&&te!==null&&te.type===T&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case x:e:{for(var Je=te.key;k!==null;){if(k.key===Je){if(Je=te.type,Je===T){if(k.tag===7){s(K,k.sibling),_e=f(k,te.props.children),_e.return=K,K=_e;break e}}else if(k.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===A&&Us(Je)===k.type){s(K,k.sibling),_e=f(k,te.props),Oo(_e,te),_e.return=K,K=_e;break e}s(K,k);break}else i(K,k);k=k.sibling}te.type===T?(_e=Cs(te.props.children,K.mode,_e,te.key),_e.return=K,K=_e):(_e=Zl(te.type,te.key,te.props,null,K.mode,_e),Oo(_e,te),_e.return=K,K=_e)}return y(K);case E:e:{for(Je=te.key;k!==null;){if(k.key===Je)if(k.tag===4&&k.stateNode.containerInfo===te.containerInfo&&k.stateNode.implementation===te.implementation){s(K,k.sibling),_e=f(k,te.children||[]),_e.return=K,K=_e;break e}else{s(K,k);break}else i(K,k);k=k.sibling}_e=df(te,K.mode,_e),_e.return=K,K=_e}return y(K);case A:return te=Us(te),Wt(K,k,te,_e)}if(J(te))return Ge(K,k,te,_e);if($(te)){if(Je=$(te),typeof Je!="function")throw Error(a(150));return te=Je.call(te),$e(K,k,te,_e)}if(typeof te.then=="function")return Wt(K,k,ic(te),_e);if(te.$$typeof===N)return Wt(K,k,$l(K,te),_e);ac(K,te)}return typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint"?(te=""+te,k!==null&&k.tag===6?(s(K,k.sibling),_e=f(k,te),_e.return=K,K=_e):(s(K,k),_e=hf(te,K.mode,_e),_e.return=K,K=_e),y(K)):s(K,k)}return function(K,k,te,_e){try{Uo=0;var Je=Wt(K,k,te,_e);return Sr=null,Je}catch(qe){if(qe===xr||qe===tc)throw qe;var Nt=ni(29,qe,null,K.mode);return Nt.lanes=_e,Nt.return=K,Nt}}}var Is=$m(!0),eg=$m(!1),Ya=!1;function Tf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Af(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ka(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Za(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Ot&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=Kl(t),Bm(t,null,s),i}return Yl(t,l,i,s),Kl(t)}function Io(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,tr(t,s)}}function Rf(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,m=null;if(s=s.firstBaseUpdate,s!==null){do{var y={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};m===null?f=m=y:m=m.next=y,s=s.next}while(s!==null);m===null?f=m=i:m=m.next=i}else f=m=i;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}var Cf=!1;function Po(){if(Cf){var t=vr;if(t!==null)throw t}}function Bo(t,i,s,l){Cf=!1;var f=t.updateQueue;Ya=!1;var m=f.firstBaseUpdate,y=f.lastBaseUpdate,R=f.shared.pending;if(R!==null){f.shared.pending=null;var V=R,ie=V.next;V.next=null,y===null?m=ie:y.next=ie,y=V;var pe=t.alternate;pe!==null&&(pe=pe.updateQueue,R=pe.lastBaseUpdate,R!==y&&(R===null?pe.firstBaseUpdate=ie:R.next=ie,pe.lastBaseUpdate=V))}if(m!==null){var Se=f.baseState;y=0,pe=ie=V=null,R=m;do{var re=R.lane&-536870913,le=re!==R.lane;if(le?(Et&re)===re:(l&re)===re){re!==0&&re===_r&&(Cf=!0),pe!==null&&(pe=pe.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var Ge=t,$e=R;re=i;var Wt=s;switch($e.tag){case 1:if(Ge=$e.payload,typeof Ge=="function"){Se=Ge.call(Wt,Se,re);break e}Se=Ge;break e;case 3:Ge.flags=Ge.flags&-65537|128;case 0:if(Ge=$e.payload,re=typeof Ge=="function"?Ge.call(Wt,Se,re):Ge,re==null)break e;Se=v({},Se,re);break e;case 2:Ya=!0}}re=R.callback,re!==null&&(t.flags|=64,le&&(t.flags|=8192),le=f.callbacks,le===null?f.callbacks=[re]:le.push(re))}else le={lane:re,tag:R.tag,payload:R.payload,callback:R.callback,next:null},pe===null?(ie=pe=le,V=Se):pe=pe.next=le,y|=re;if(R=R.next,R===null){if(R=f.shared.pending,R===null)break;le=R,R=le.next,le.next=null,f.lastBaseUpdate=le,f.shared.pending=null}}while(!0);pe===null&&(V=Se),f.baseState=V,f.firstBaseUpdate=ie,f.lastBaseUpdate=pe,m===null&&(f.shared.lanes=0),ts|=y,t.lanes=y,t.memoizedState=Se}}function tg(t,i){if(typeof t!="function")throw Error(a(191,t));t.call(i)}function ng(t,i){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)tg(s[t],i)}var yr=U(null),sc=U(0);function ig(t,i){t=Ea,ge(sc,t),ge(yr,i),Ea=t|i.baseLanes}function wf(){ge(sc,Ea),ge(yr,yr.current)}function Df(){Ea=sc.current,j(yr),j(sc)}var ii=U(null),gi=null;function Qa(t){var i=t.alternate;ge(rn,rn.current&1),ge(ii,t),gi===null&&(i===null||yr.current!==null||i.memoizedState!==null)&&(gi=t)}function Nf(t){ge(rn,rn.current),ge(ii,t),gi===null&&(gi=t)}function ag(t){t.tag===22?(ge(rn,rn.current),ge(ii,t),gi===null&&(gi=t)):Ja()}function Ja(){ge(rn,rn.current),ge(ii,ii.current)}function ai(t){j(ii),gi===t&&(gi=null),j(rn)}var rn=U(0);function rc(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||Bh(s)||Fh(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var ma=0,ut=null,kt=null,dn=null,oc=!1,Mr=!1,Ps=!1,lc=0,Fo=0,Er=null,ly=0;function an(){throw Error(a(321))}function Lf(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!ti(t[s],i[s]))return!1;return!0}function Uf(t,i,s,l,f,m){return ma=m,ut=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,I.H=t===null||t.memoizedState===null?Vg:Yf,Ps=!1,m=s(l,f),Ps=!1,Mr&&(m=rg(i,s,l,f)),sg(t),m}function sg(t){I.H=Vo;var i=kt!==null&&kt.next!==null;if(ma=0,dn=kt=ut=null,oc=!1,Fo=0,Er=null,i)throw Error(a(300));t===null||pn||(t=t.dependencies,t!==null&&Jl(t)&&(pn=!0))}function rg(t,i,s,l){ut=t;var f=0;do{if(Mr&&(Er=null),Fo=0,Mr=!1,25<=f)throw Error(a(301));if(f+=1,dn=kt=null,t.updateQueue!=null){var m=t.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}I.H=Gg,m=i(s,l)}while(Mr);return m}function cy(){var t=I.H,i=t.useState()[0];return i=typeof i.then=="function"?zo(i):i,t=t.useState()[0],(kt!==null?kt.memoizedState:null)!==t&&(ut.flags|=1024),i}function Of(){var t=lc!==0;return lc=0,t}function If(t,i,s){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~s}function Pf(t){if(oc){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}oc=!1}ma=0,dn=kt=ut=null,Mr=!1,Fo=lc=0,Er=null}function zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dn===null?ut.memoizedState=dn=t:dn=dn.next=t,dn}function on(){if(kt===null){var t=ut.alternate;t=t!==null?t.memoizedState:null}else t=kt.next;var i=dn===null?ut.memoizedState:dn.next;if(i!==null)dn=i,kt=t;else{if(t===null)throw ut.alternate===null?Error(a(467)):Error(a(310));kt=t,t={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},dn===null?ut.memoizedState=dn=t:dn=dn.next=t}return dn}function cc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function zo(t){var i=Fo;return Fo+=1,Er===null&&(Er=[]),t=Zm(Er,t,i),i=ut,(dn===null?i.memoizedState:dn.next)===null&&(i=i.alternate,I.H=i===null||i.memoizedState===null?Vg:Yf),t}function uc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return zo(t);if(t.$$typeof===N)return wn(t)}throw Error(a(438,String(t)))}function Bf(t){var i=null,s=ut.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=ut.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=cc(),ut.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(t),l=0;l<t;l++)s[l]=fe;return i.index++,s}function ga(t,i){return typeof i=="function"?i(t):i}function fc(t){var i=on();return Ff(i,kt,t)}function Ff(t,i,s){var l=t.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=s;var f=t.baseQueue,m=l.pending;if(m!==null){if(f!==null){var y=f.next;f.next=m.next,m.next=y}i.baseQueue=f=m,l.pending=null}if(m=t.baseState,f===null)t.memoizedState=m;else{i=f.next;var R=y=null,V=null,ie=i,pe=!1;do{var Se=ie.lane&-536870913;if(Se!==ie.lane?(Et&Se)===Se:(ma&Se)===Se){var re=ie.revertLane;if(re===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null}),Se===_r&&(pe=!0);else if((ma&re)===re){ie=ie.next,re===_r&&(pe=!0);continue}else Se={lane:0,revertLane:ie.revertLane,gesture:null,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null},V===null?(R=V=Se,y=m):V=V.next=Se,ut.lanes|=re,ts|=re;Se=ie.action,Ps&&s(m,Se),m=ie.hasEagerState?ie.eagerState:s(m,Se)}else re={lane:Se,revertLane:ie.revertLane,gesture:ie.gesture,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null},V===null?(R=V=re,y=m):V=V.next=re,ut.lanes|=Se,ts|=Se;ie=ie.next}while(ie!==null&&ie!==i);if(V===null?y=m:V.next=R,!ti(m,t.memoizedState)&&(pn=!0,pe&&(s=vr,s!==null)))throw s;t.memoizedState=m,t.baseState=y,t.baseQueue=V,l.lastRenderedState=m}return f===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function zf(t){var i=on(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=t;var l=s.dispatch,f=s.pending,m=i.memoizedState;if(f!==null){s.pending=null;var y=f=f.next;do m=t(m,y.action),y=y.next;while(y!==f);ti(m,i.memoizedState)||(pn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),s.lastRenderedState=m}return[m,l]}function og(t,i,s){var l=ut,f=on(),m=Tt;if(m){if(s===void 0)throw Error(a(407));s=s()}else s=i();var y=!ti((kt||f).memoizedState,s);if(y&&(f.memoizedState=s,pn=!0),f=f.queue,Gf(ug.bind(null,l,f,t),[t]),f.getSnapshot!==i||y||dn!==null&&dn.memoizedState.tag&1){if(l.flags|=2048,br(9,{destroy:void 0},cg.bind(null,l,f,s,i),null),jt===null)throw Error(a(349));m||(ma&127)!==0||lg(l,i,s)}return s}function lg(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=ut.updateQueue,i===null?(i=cc(),ut.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function cg(t,i,s,l){i.value=s,i.getSnapshot=l,fg(i)&&hg(t)}function ug(t,i,s){return s(function(){fg(i)&&hg(t)})}function fg(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!ti(t,s)}catch{return!0}}function hg(t){var i=Rs(t,2);i!==null&&Zn(i,t,2)}function Hf(t){var i=zn();if(typeof t=="function"){var s=t;if(t=s(),Ps){Ie(!0);try{s()}finally{Ie(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:t},i}function dg(t,i,s,l){return t.baseState=s,Ff(t,kt,typeof l=="function"?l:ga)}function uy(t,i,s,l,f){if(pc(t))throw Error(a(485));if(t=i.action,t!==null){var m={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){m.listeners.push(y)}};I.T!==null?s(!0):m.isTransition=!1,l(m),s=i.pending,s===null?(m.next=i.pending=m,pg(i,m)):(m.next=s.next,i.pending=s.next=m)}}function pg(t,i){var s=i.action,l=i.payload,f=t.state;if(i.isTransition){var m=I.T,y={};I.T=y;try{var R=s(f,l),V=I.S;V!==null&&V(y,R),mg(t,i,R)}catch(ie){Vf(t,i,ie)}finally{m!==null&&y.types!==null&&(m.types=y.types),I.T=m}}else try{m=s(f,l),mg(t,i,m)}catch(ie){Vf(t,i,ie)}}function mg(t,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){gg(t,i,l)},function(l){return Vf(t,i,l)}):gg(t,i,s)}function gg(t,i,s){i.status="fulfilled",i.value=s,_g(i),t.state=s,i=t.pending,i!==null&&(s=i.next,s===i?t.pending=null:(s=s.next,i.next=s,pg(t,s)))}function Vf(t,i,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,_g(i),i=i.next;while(i!==l)}t.action=null}function _g(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function vg(t,i){return i}function xg(t,i){if(Tt){var s=jt.formState;if(s!==null){e:{var l=ut;if(Tt){if(qt){t:{for(var f=qt,m=mi;f.nodeType!==8;){if(!m){f=null;break t}if(f=_i(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){qt=_i(f.nextSibling),l=f.data==="F!";break e}}ja(l)}l=!1}l&&(i=s[0])}}return s=zn(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:vg,lastRenderedState:i},s.queue=l,s=Fg.bind(null,ut,l),l.dispatch=s,l=Hf(!1),m=qf.bind(null,ut,!1,l.queue),l=zn(),f={state:i,dispatch:null,action:t,pending:null},l.queue=f,s=uy.bind(null,ut,f,m,s),f.dispatch=s,l.memoizedState=t,[i,s,!1]}function Sg(t){var i=on();return yg(i,kt,t)}function yg(t,i,s){if(i=Ff(t,i,vg)[0],t=fc(ga)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=zo(i)}catch(y){throw y===xr?tc:y}else l=i;i=on();var f=i.queue,m=f.dispatch;return s!==i.memoizedState&&(ut.flags|=2048,br(9,{destroy:void 0},fy.bind(null,f,s),null)),[l,m,t]}function fy(t,i){t.action=i}function Mg(t){var i=on(),s=kt;if(s!==null)return yg(i,s,t);on(),i=i.memoizedState,s=on();var l=s.queue.dispatch;return s.memoizedState=t,[i,l,!1]}function br(t,i,s,l){return t={tag:t,create:s,deps:l,inst:i,next:null},i=ut.updateQueue,i===null&&(i=cc(),ut.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t),t}function Eg(){return on().memoizedState}function hc(t,i,s,l){var f=zn();ut.flags|=t,f.memoizedState=br(1|i,{destroy:void 0},s,l===void 0?null:l)}function dc(t,i,s,l){var f=on();l=l===void 0?null:l;var m=f.memoizedState.inst;kt!==null&&l!==null&&Lf(l,kt.memoizedState.deps)?f.memoizedState=br(i,m,s,l):(ut.flags|=t,f.memoizedState=br(1|i,m,s,l))}function bg(t,i){hc(8390656,8,t,i)}function Gf(t,i){dc(2048,8,t,i)}function hy(t){ut.flags|=4;var i=ut.updateQueue;if(i===null)i=cc(),ut.updateQueue=i,i.events=[t];else{var s=i.events;s===null?i.events=[t]:s.push(t)}}function Tg(t){var i=on().memoizedState;return hy({ref:i,nextImpl:t}),function(){if((Ot&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function Ag(t,i){return dc(4,2,t,i)}function Rg(t,i){return dc(4,4,t,i)}function Cg(t,i){if(typeof i=="function"){t=t();var s=i(t);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function wg(t,i,s){s=s!=null?s.concat([t]):null,dc(4,4,Cg.bind(null,i,t),s)}function kf(){}function Dg(t,i){var s=on();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&Lf(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function Ng(t,i){var s=on();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&Lf(i,l[1]))return l[0];if(l=t(),Ps){Ie(!0);try{t()}finally{Ie(!1)}}return s.memoizedState=[l,i],l}function Xf(t,i,s){return s===void 0||(ma&1073741824)!==0&&(Et&261930)===0?t.memoizedState=i:(t.memoizedState=s,t=L0(),ut.lanes|=t,ts|=t,s)}function Lg(t,i,s,l){return ti(s,i)?s:yr.current!==null?(t=Xf(t,s,l),ti(t,i)||(pn=!0),t):(ma&42)===0||(ma&1073741824)!==0&&(Et&261930)===0?(pn=!0,t.memoizedState=s):(t=L0(),ut.lanes|=t,ts|=t,i)}function Ug(t,i,s,l,f){var m=B.p;B.p=m!==0&&8>m?m:8;var y=I.T,R={};I.T=R,qf(t,!1,i,s);try{var V=f(),ie=I.S;if(ie!==null&&ie(R,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var pe=oy(V,l);Ho(t,i,pe,oi(t))}else Ho(t,i,l,oi(t))}catch(Se){Ho(t,i,{then:function(){},status:"rejected",reason:Se},oi())}finally{B.p=m,y!==null&&R.types!==null&&(y.types=R.types),I.T=y}}function dy(){}function Wf(t,i,s,l){if(t.tag!==5)throw Error(a(476));var f=Og(t).queue;Ug(t,f,i,ce,s===null?dy:function(){return Ig(t),s(l)})}function Og(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:ce,baseState:ce,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:ce},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:s},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function Ig(t){var i=Og(t);i.next===null&&(i=t.alternate.memoizedState),Ho(t,i.next.queue,{},oi())}function jf(){return wn(il)}function Pg(){return on().memoizedState}function Bg(){return on().memoizedState}function py(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var s=oi();t=Ka(s);var l=Za(i,t,s);l!==null&&(Zn(l,i,s),Io(l,i,s)),i={cache:yf()},t.payload=i;return}i=i.return}}function my(t,i,s){var l=oi();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},pc(t)?zg(i,s):(s=uf(t,i,s,l),s!==null&&(Zn(s,t,l),Hg(s,i,l)))}function Fg(t,i,s){var l=oi();Ho(t,i,s,l)}function Ho(t,i,s,l){var f={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(pc(t))zg(i,f);else{var m=t.alternate;if(t.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var y=i.lastRenderedState,R=m(y,s);if(f.hasEagerState=!0,f.eagerState=R,ti(R,y))return Yl(t,i,f,0),jt===null&&ql(),!1}catch{}if(s=uf(t,i,f,l),s!==null)return Zn(s,t,l),Hg(s,i,l),!0}return!1}function qf(t,i,s,l){if(l={lane:2,revertLane:Th(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},pc(t)){if(i)throw Error(a(479))}else i=uf(t,s,l,2),i!==null&&Zn(i,t,2)}function pc(t){var i=t.alternate;return t===ut||i!==null&&i===ut}function zg(t,i){Mr=oc=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function Hg(t,i,s){if((s&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,tr(t,s)}}var Vo={readContext:wn,use:uc,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an};Vo.useEffectEvent=an;var Vg={readContext:wn,use:uc,useCallback:function(t,i){return zn().memoizedState=[t,i===void 0?null:i],t},useContext:wn,useEffect:bg,useImperativeHandle:function(t,i,s){s=s!=null?s.concat([t]):null,hc(4194308,4,Cg.bind(null,i,t),s)},useLayoutEffect:function(t,i){return hc(4194308,4,t,i)},useInsertionEffect:function(t,i){hc(4,2,t,i)},useMemo:function(t,i){var s=zn();i=i===void 0?null:i;var l=t();if(Ps){Ie(!0);try{t()}finally{Ie(!1)}}return s.memoizedState=[l,i],l},useReducer:function(t,i,s){var l=zn();if(s!==void 0){var f=s(i);if(Ps){Ie(!0);try{s(i)}finally{Ie(!1)}}}else f=i;return l.memoizedState=l.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},l.queue=t,t=t.dispatch=my.bind(null,ut,t),[l.memoizedState,t]},useRef:function(t){var i=zn();return t={current:t},i.memoizedState=t},useState:function(t){t=Hf(t);var i=t.queue,s=Fg.bind(null,ut,i);return i.dispatch=s,[t.memoizedState,s]},useDebugValue:kf,useDeferredValue:function(t,i){var s=zn();return Xf(s,t,i)},useTransition:function(){var t=Hf(!1);return t=Ug.bind(null,ut,t.queue,!0,!1),zn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,s){var l=ut,f=zn();if(Tt){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),jt===null)throw Error(a(349));(Et&127)!==0||lg(l,i,s)}f.memoizedState=s;var m={value:s,getSnapshot:i};return f.queue=m,bg(ug.bind(null,l,m,t),[t]),l.flags|=2048,br(9,{destroy:void 0},cg.bind(null,l,m,s,i),null),s},useId:function(){var t=zn(),i=jt.identifierPrefix;if(Tt){var s=Xi,l=ki;s=(l&~(1<<32-Oe(l)-1)).toString(32)+s,i="_"+i+"R_"+s,s=lc++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=ly++,i="_"+i+"r_"+s.toString(32)+"_";return t.memoizedState=i},useHostTransitionStatus:jf,useFormState:xg,useActionState:xg,useOptimistic:function(t){var i=zn();i.memoizedState=i.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=qf.bind(null,ut,!0,s),s.dispatch=i,[t,i]},useMemoCache:Bf,useCacheRefresh:function(){return zn().memoizedState=py.bind(null,ut)},useEffectEvent:function(t){var i=zn(),s={impl:t};return i.memoizedState=s,function(){if((Ot&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}},Yf={readContext:wn,use:uc,useCallback:Dg,useContext:wn,useEffect:Gf,useImperativeHandle:wg,useInsertionEffect:Ag,useLayoutEffect:Rg,useMemo:Ng,useReducer:fc,useRef:Eg,useState:function(){return fc(ga)},useDebugValue:kf,useDeferredValue:function(t,i){var s=on();return Lg(s,kt.memoizedState,t,i)},useTransition:function(){var t=fc(ga)[0],i=on().memoizedState;return[typeof t=="boolean"?t:zo(t),i]},useSyncExternalStore:og,useId:Pg,useHostTransitionStatus:jf,useFormState:Sg,useActionState:Sg,useOptimistic:function(t,i){var s=on();return dg(s,kt,t,i)},useMemoCache:Bf,useCacheRefresh:Bg};Yf.useEffectEvent=Tg;var Gg={readContext:wn,use:uc,useCallback:Dg,useContext:wn,useEffect:Gf,useImperativeHandle:wg,useInsertionEffect:Ag,useLayoutEffect:Rg,useMemo:Ng,useReducer:zf,useRef:Eg,useState:function(){return zf(ga)},useDebugValue:kf,useDeferredValue:function(t,i){var s=on();return kt===null?Xf(s,t,i):Lg(s,kt.memoizedState,t,i)},useTransition:function(){var t=zf(ga)[0],i=on().memoizedState;return[typeof t=="boolean"?t:zo(t),i]},useSyncExternalStore:og,useId:Pg,useHostTransitionStatus:jf,useFormState:Mg,useActionState:Mg,useOptimistic:function(t,i){var s=on();return kt!==null?dg(s,kt,t,i):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:Bf,useCacheRefresh:Bg};Gg.useEffectEvent=Tg;function Kf(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:v({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var Zf={enqueueSetState:function(t,i,s){t=t._reactInternals;var l=oi(),f=Ka(l);f.payload=i,s!=null&&(f.callback=s),i=Za(t,f,l),i!==null&&(Zn(i,t,l),Io(i,t,l))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=oi(),f=Ka(l);f.tag=1,f.payload=i,s!=null&&(f.callback=s),i=Za(t,f,l),i!==null&&(Zn(i,t,l),Io(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=oi(),l=Ka(s);l.tag=2,i!=null&&(l.callback=i),i=Za(t,l,s),i!==null&&(Zn(i,t,s),Io(i,t,s))}};function kg(t,i,s,l,f,m,y){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,m,y):i.prototype&&i.prototype.isPureReactComponent?!Ro(s,l)||!Ro(f,m):!0}function Xg(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&Zf.enqueueReplaceState(i,i.state,null)}function Bs(t,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(t=t.defaultProps){s===i&&(s=v({},s));for(var f in t)s[f]===void 0&&(s[f]=t[f])}return s}function Wg(t){jl(t)}function jg(t){console.error(t)}function qg(t){jl(t)}function mc(t,i){try{var s=t.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function Yg(t,i,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Qf(t,i,s){return s=Ka(s),s.tag=3,s.payload={element:null},s.callback=function(){mc(t,i)},s}function Kg(t){return t=Ka(t),t.tag=3,t}function Zg(t,i,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var m=l.value;t.payload=function(){return f(m)},t.callback=function(){Yg(i,s,l)}}var y=s.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(t.callback=function(){Yg(i,s,l),typeof f!="function"&&(ns===null?ns=new Set([this]):ns.add(this));var R=l.stack;this.componentDidCatch(l.value,{componentStack:R!==null?R:""})})}function gy(t,i,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&gr(i,s,f,!0),s=ii.current,s!==null){switch(s.tag){case 31:case 13:return gi===null?Rc():s.alternate===null&&sn===0&&(sn=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===nc?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),Mh(t,l,f)),!1;case 22:return s.flags|=65536,l===nc?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),Mh(t,l,f)),!1}throw Error(a(435,s.tag))}return Mh(t,l,f),Rc(),!1}if(Tt)return i=ii.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==gf&&(t=Error(a(422),{cause:l}),Do(hi(t,s)))):(l!==gf&&(i=Error(a(423),{cause:l}),Do(hi(i,s))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,l=hi(l,s),f=Qf(t.stateNode,l,f),Rf(t,f),sn!==4&&(sn=2)),!1;var m=Error(a(520),{cause:l});if(m=hi(m,s),Ko===null?Ko=[m]:Ko.push(m),sn!==4&&(sn=2),i===null)return!0;l=hi(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,t=f&-f,s.lanes|=t,t=Qf(s.stateNode,l,t),Rf(s,t),!1;case 1:if(i=s.type,m=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(ns===null||!ns.has(m))))return s.flags|=65536,f&=-f,s.lanes|=f,f=Kg(f),Zg(f,t,s,l),Rf(s,f),!1}s=s.return}while(s!==null);return!1}var Jf=Error(a(461)),pn=!1;function Dn(t,i,s,l){i.child=t===null?eg(i,null,s,l):Is(i,t.child,s,l)}function Qg(t,i,s,l,f){s=s.render;var m=i.ref;if("ref"in l){var y={};for(var R in l)R!=="ref"&&(y[R]=l[R])}else y=l;return Ns(i),l=Uf(t,i,s,y,m,f),R=Of(),t!==null&&!pn?(If(t,i,f),_a(t,i,f)):(Tt&&R&&pf(i),i.flags|=1,Dn(t,i,l,f),i.child)}function Jg(t,i,s,l,f){if(t===null){var m=s.type;return typeof m=="function"&&!ff(m)&&m.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=m,$g(t,i,m,l,f)):(t=Zl(s.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(m=t.child,!rh(t,f)){var y=m.memoizedProps;if(s=s.compare,s=s!==null?s:Ro,s(y,l)&&t.ref===i.ref)return _a(t,i,f)}return i.flags|=1,t=fa(m,l),t.ref=i.ref,t.return=i,i.child=t}function $g(t,i,s,l,f){if(t!==null){var m=t.memoizedProps;if(Ro(m,l)&&t.ref===i.ref)if(pn=!1,i.pendingProps=l=m,rh(t,f))(t.flags&131072)!==0&&(pn=!0);else return i.lanes=t.lanes,_a(t,i,f)}return $f(t,i,s,l,f)}function e0(t,i,s,l){var f=l.children,m=t!==null?t.memoizedState:null;if(t===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(m=m!==null?m.baseLanes|s:s,t!==null){for(l=i.child=t.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~m}else l=0,i.child=null;return t0(t,i,m,s,l)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&ec(i,m!==null?m.cachePool:null),m!==null?ig(i,m):wf(),ag(i);else return l=i.lanes=536870912,t0(t,i,m!==null?m.baseLanes|s:s,s,l)}else m!==null?(ec(i,m.cachePool),ig(i,m),Ja(),i.memoizedState=null):(t!==null&&ec(i,null),wf(),Ja());return Dn(t,i,f,s),i.child}function Go(t,i){return t!==null&&t.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function t0(t,i,s,l,f){var m=Ef();return m=m===null?null:{parent:hn._currentValue,pool:m},i.memoizedState={baseLanes:s,cachePool:m},t!==null&&ec(i,null),wf(),ag(i),t!==null&&gr(t,i,l,!0),i.childLanes=f,null}function gc(t,i){return i=vc({mode:i.mode,children:i.children},t.mode),i.ref=t.ref,t.child=i,i.return=t,i}function n0(t,i,s){return Is(i,t.child,null,s),t=gc(i,i.pendingProps),t.flags|=2,ai(i),i.memoizedState=null,t}function _y(t,i,s){var l=i.pendingProps,f=(i.flags&128)!==0;if(i.flags&=-129,t===null){if(Tt){if(l.mode==="hidden")return t=gc(i,l),i.lanes=536870912,Go(null,t);if(Nf(i),(t=qt)?(t=p_(t,mi),t=t!==null&&t.data==="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Xa!==null?{id:ki,overflow:Xi}:null,retryLane:536870912,hydrationErrors:null},s=zm(t),s.return=i,i.child=s,Cn=i,qt=null)):t=null,t===null)throw ja(i);return i.lanes=536870912,null}return gc(i,l)}var m=t.memoizedState;if(m!==null){var y=m.dehydrated;if(Nf(i),f)if(i.flags&256)i.flags&=-257,i=n0(t,i,s);else if(i.memoizedState!==null)i.child=t.child,i.flags|=128,i=null;else throw Error(a(558));else if(pn||gr(t,i,s,!1),f=(s&t.childLanes)!==0,pn||f){if(l=jt,l!==null&&(y=Il(l,s),y!==0&&y!==m.retryLane))throw m.retryLane=y,Rs(t,y),Zn(l,t,y),Jf;Rc(),i=n0(t,i,s)}else t=m.treeContext,qt=_i(y.nextSibling),Cn=i,Tt=!0,Wa=null,mi=!1,t!==null&&Gm(i,t),i=gc(i,l),i.flags|=4096;return i}return t=fa(t.child,{mode:l.mode,children:l.children}),t.ref=i.ref,i.child=t,t.return=i,t}function _c(t,i){var s=i.ref;if(s===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(t===null||t.ref!==s)&&(i.flags|=4194816)}}function $f(t,i,s,l,f){return Ns(i),s=Uf(t,i,s,l,void 0,f),l=Of(),t!==null&&!pn?(If(t,i,f),_a(t,i,f)):(Tt&&l&&pf(i),i.flags|=1,Dn(t,i,s,f),i.child)}function i0(t,i,s,l,f,m){return Ns(i),i.updateQueue=null,s=rg(i,l,s,f),sg(t),l=Of(),t!==null&&!pn?(If(t,i,m),_a(t,i,m)):(Tt&&l&&pf(i),i.flags|=1,Dn(t,i,s,m),i.child)}function a0(t,i,s,l,f){if(Ns(i),i.stateNode===null){var m=hr,y=s.contextType;typeof y=="object"&&y!==null&&(m=wn(y)),m=new s(l,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Zf,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=l,m.state=i.memoizedState,m.refs={},Tf(i),y=s.contextType,m.context=typeof y=="object"&&y!==null?wn(y):hr,m.state=i.memoizedState,y=s.getDerivedStateFromProps,typeof y=="function"&&(Kf(i,s,y,l),m.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(y=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),y!==m.state&&Zf.enqueueReplaceState(m,m.state,null),Bo(i,l,m,f),Po(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){m=i.stateNode;var R=i.memoizedProps,V=Bs(s,R);m.props=V;var ie=m.context,pe=s.contextType;y=hr,typeof pe=="object"&&pe!==null&&(y=wn(pe));var Se=s.getDerivedStateFromProps;pe=typeof Se=="function"||typeof m.getSnapshotBeforeUpdate=="function",R=i.pendingProps!==R,pe||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(R||ie!==y)&&Xg(i,m,l,y),Ya=!1;var re=i.memoizedState;m.state=re,Bo(i,l,m,f),Po(),ie=i.memoizedState,R||re!==ie||Ya?(typeof Se=="function"&&(Kf(i,s,Se,l),ie=i.memoizedState),(V=Ya||kg(i,s,V,l,re,ie,y))?(pe||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=ie),m.props=l,m.state=ie,m.context=y,l=V):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{m=i.stateNode,Af(t,i),y=i.memoizedProps,pe=Bs(s,y),m.props=pe,Se=i.pendingProps,re=m.context,ie=s.contextType,V=hr,typeof ie=="object"&&ie!==null&&(V=wn(ie)),R=s.getDerivedStateFromProps,(ie=typeof R=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(y!==Se||re!==V)&&Xg(i,m,l,V),Ya=!1,re=i.memoizedState,m.state=re,Bo(i,l,m,f),Po();var le=i.memoizedState;y!==Se||re!==le||Ya||t!==null&&t.dependencies!==null&&Jl(t.dependencies)?(typeof R=="function"&&(Kf(i,s,R,l),le=i.memoizedState),(pe=Ya||kg(i,s,pe,l,re,le,V)||t!==null&&t.dependencies!==null&&Jl(t.dependencies))?(ie||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,le,V),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,le,V)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||y===t.memoizedProps&&re===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&re===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=le),m.props=l,m.state=le,m.context=V,l=pe):(typeof m.componentDidUpdate!="function"||y===t.memoizedProps&&re===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&re===t.memoizedState||(i.flags|=1024),l=!1)}return m=l,_c(t,i),l=(i.flags&128)!==0,m||l?(m=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,t!==null&&l?(i.child=Is(i,t.child,null,f),i.child=Is(i,null,s,f)):Dn(t,i,s,f),i.memoizedState=m.state,t=i.child):t=_a(t,i,f),t}function s0(t,i,s,l){return ws(),i.flags|=256,Dn(t,i,s,l),i.child}var eh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function th(t){return{baseLanes:t,cachePool:Ym()}}function nh(t,i,s){return t=t!==null?t.childLanes&~s:0,i&&(t|=ri),t}function r0(t,i,s){var l=i.pendingProps,f=!1,m=(i.flags&128)!==0,y;if((y=m)||(y=t!==null&&t.memoizedState===null?!1:(rn.current&2)!==0),y&&(f=!0,i.flags&=-129),y=(i.flags&32)!==0,i.flags&=-33,t===null){if(Tt){if(f?Qa(i):Ja(),(t=qt)?(t=p_(t,mi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Xa!==null?{id:ki,overflow:Xi}:null,retryLane:536870912,hydrationErrors:null},s=zm(t),s.return=i,i.child=s,Cn=i,qt=null)):t=null,t===null)throw ja(i);return Fh(t)?i.lanes=32:i.lanes=536870912,null}var R=l.children;return l=l.fallback,f?(Ja(),f=i.mode,R=vc({mode:"hidden",children:R},f),l=Cs(l,f,s,null),R.return=i,l.return=i,R.sibling=l,i.child=R,l=i.child,l.memoizedState=th(s),l.childLanes=nh(t,y,s),i.memoizedState=eh,Go(null,l)):(Qa(i),ih(i,R))}var V=t.memoizedState;if(V!==null&&(R=V.dehydrated,R!==null)){if(m)i.flags&256?(Qa(i),i.flags&=-257,i=ah(t,i,s)):i.memoizedState!==null?(Ja(),i.child=t.child,i.flags|=128,i=null):(Ja(),R=l.fallback,f=i.mode,l=vc({mode:"visible",children:l.children},f),R=Cs(R,f,s,null),R.flags|=2,l.return=i,R.return=i,l.sibling=R,i.child=l,Is(i,t.child,null,s),l=i.child,l.memoizedState=th(s),l.childLanes=nh(t,y,s),i.memoizedState=eh,i=Go(null,l));else if(Qa(i),Fh(R)){if(y=R.nextSibling&&R.nextSibling.dataset,y)var ie=y.dgst;y=ie,l=Error(a(419)),l.stack="",l.digest=y,Do({value:l,source:null,stack:null}),i=ah(t,i,s)}else if(pn||gr(t,i,s,!1),y=(s&t.childLanes)!==0,pn||y){if(y=jt,y!==null&&(l=Il(y,s),l!==0&&l!==V.retryLane))throw V.retryLane=l,Rs(t,l),Zn(y,t,l),Jf;Bh(R)||Rc(),i=ah(t,i,s)}else Bh(R)?(i.flags|=192,i.child=t.child,i=null):(t=V.treeContext,qt=_i(R.nextSibling),Cn=i,Tt=!0,Wa=null,mi=!1,t!==null&&Gm(i,t),i=ih(i,l.children),i.flags|=4096);return i}return f?(Ja(),R=l.fallback,f=i.mode,V=t.child,ie=V.sibling,l=fa(V,{mode:"hidden",children:l.children}),l.subtreeFlags=V.subtreeFlags&65011712,ie!==null?R=fa(ie,R):(R=Cs(R,f,s,null),R.flags|=2),R.return=i,l.return=i,l.sibling=R,i.child=l,Go(null,l),l=i.child,R=t.child.memoizedState,R===null?R=th(s):(f=R.cachePool,f!==null?(V=hn._currentValue,f=f.parent!==V?{parent:V,pool:V}:f):f=Ym(),R={baseLanes:R.baseLanes|s,cachePool:f}),l.memoizedState=R,l.childLanes=nh(t,y,s),i.memoizedState=eh,Go(t.child,l)):(Qa(i),s=t.child,t=s.sibling,s=fa(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,t!==null&&(y=i.deletions,y===null?(i.deletions=[t],i.flags|=16):y.push(t)),i.child=s,i.memoizedState=null,s)}function ih(t,i){return i=vc({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function vc(t,i){return t=ni(22,t,null,i),t.lanes=0,t}function ah(t,i,s){return Is(i,t.child,null,s),t=ih(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function o0(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),xf(t.return,i,s)}function sh(t,i,s,l,f,m){var y=t.memoizedState;y===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f,treeForkCount:m}:(y.isBackwards=i,y.rendering=null,y.renderingStartTime=0,y.last=l,y.tail=s,y.tailMode=f,y.treeForkCount=m)}function l0(t,i,s){var l=i.pendingProps,f=l.revealOrder,m=l.tail;l=l.children;var y=rn.current,R=(y&2)!==0;if(R?(y=y&1|2,i.flags|=128):y&=1,ge(rn,y),Dn(t,i,l,s),l=Tt?wo:0,!R&&t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&o0(t,s,i);else if(t.tag===19)o0(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(f){case"forwards":for(s=i.child,f=null;s!==null;)t=s.alternate,t!==null&&rc(t)===null&&(f=s),s=s.sibling;s=f,s===null?(f=i.child,i.child=null):(f=s.sibling,s.sibling=null),sh(i,!1,f,s,m,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&rc(t)===null){i.child=f;break}t=f.sibling,f.sibling=s,s=f,f=t}sh(i,!0,s,null,m,l);break;case"together":sh(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function _a(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),ts|=i.lanes,(s&i.childLanes)===0)if(t!==null){if(gr(t,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(a(153));if(i.child!==null){for(t=i.child,s=fa(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=fa(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function rh(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&Jl(t)))}function vy(t,i,s){switch(i.tag){case 3:be(i,i.stateNode.containerInfo),qa(i,hn,t.memoizedState.cache),ws();break;case 27:case 5:Qe(i);break;case 4:be(i,i.stateNode.containerInfo);break;case 10:qa(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,Nf(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(Qa(i),i.flags|=128,null):(s&i.child.childLanes)!==0?r0(t,i,s):(Qa(i),t=_a(t,i,s),t!==null?t.sibling:null);Qa(i);break;case 19:var f=(t.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(gr(t,i,s,!1),l=(s&i.childLanes)!==0),f){if(l)return l0(t,i,s);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),ge(rn,rn.current),l)break;return null;case 22:return i.lanes=0,e0(t,i,s,i.pendingProps);case 24:qa(i,hn,t.memoizedState.cache)}return _a(t,i,s)}function c0(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps)pn=!0;else{if(!rh(t,s)&&(i.flags&128)===0)return pn=!1,vy(t,i,s);pn=(t.flags&131072)!==0}else pn=!1,Tt&&(i.flags&1048576)!==0&&Vm(i,wo,i.index);switch(i.lanes=0,i.tag){case 16:e:{var l=i.pendingProps;if(t=Us(i.elementType),i.type=t,typeof t=="function")ff(t)?(l=Bs(t,l),i.tag=1,i=a0(null,i,t,l,s)):(i.tag=0,i=$f(null,i,t,l,s));else{if(t!=null){var f=t.$$typeof;if(f===D){i.tag=11,i=Qg(null,i,t,l,s);break e}else if(f===P){i.tag=14,i=Jg(null,i,t,l,s);break e}}throw i=ue(t)||t,Error(a(306,i,""))}}return i;case 0:return $f(t,i,i.type,i.pendingProps,s);case 1:return l=i.type,f=Bs(l,i.pendingProps),a0(t,i,l,f,s);case 3:e:{if(be(i,i.stateNode.containerInfo),t===null)throw Error(a(387));l=i.pendingProps;var m=i.memoizedState;f=m.element,Af(t,i),Bo(i,l,null,s);var y=i.memoizedState;if(l=y.cache,qa(i,hn,l),l!==m.cache&&Sf(i,[hn],s,!0),Po(),l=y.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:y.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=s0(t,i,l,s);break e}else if(l!==f){f=hi(Error(a(424)),i),Do(f),i=s0(t,i,l,s);break e}else for(t=i.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,qt=_i(t.firstChild),Cn=i,Tt=!0,Wa=null,mi=!0,s=eg(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(ws(),l===f){i=_a(t,i,s);break e}Dn(t,i,l,s)}i=i.child}return i;case 26:return _c(t,i),t===null?(s=S_(i.type,null,i.pendingProps,null))?i.memoizedState=s:Tt||(s=i.type,t=i.pendingProps,l=Oc(ne.current).createElement(s),l[cn]=i,l[_n]=t,Nn(l,s,t),X(l),i.stateNode=l):i.memoizedState=S_(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return Qe(i),t===null&&Tt&&(l=i.stateNode=__(i.type,i.pendingProps,ne.current),Cn=i,mi=!0,f=qt,rs(i.type)?(zh=f,qt=_i(l.firstChild)):qt=f),Dn(t,i,i.pendingProps.children,s),_c(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Tt&&((f=l=qt)&&(l=Yy(l,i.type,i.pendingProps,mi),l!==null?(i.stateNode=l,Cn=i,qt=_i(l.firstChild),mi=!1,f=!0):f=!1),f||ja(i)),Qe(i),f=i.type,m=i.pendingProps,y=t!==null?t.memoizedProps:null,l=m.children,Oh(f,m)?l=null:y!==null&&Oh(f,y)&&(i.flags|=32),i.memoizedState!==null&&(f=Uf(t,i,cy,null,null,s),il._currentValue=f),_c(t,i),Dn(t,i,l,s),i.child;case 6:return t===null&&Tt&&((t=s=qt)&&(s=Ky(s,i.pendingProps,mi),s!==null?(i.stateNode=s,Cn=i,qt=null,t=!0):t=!1),t||ja(i)),null;case 13:return r0(t,i,s);case 4:return be(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=Is(i,null,l,s):Dn(t,i,l,s),i.child;case 11:return Qg(t,i,i.type,i.pendingProps,s);case 7:return Dn(t,i,i.pendingProps,s),i.child;case 8:return Dn(t,i,i.pendingProps.children,s),i.child;case 12:return Dn(t,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,qa(i,i.type,l.value),Dn(t,i,l.children,s),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,Ns(i),f=wn(f),l=l(f),i.flags|=1,Dn(t,i,l,s),i.child;case 14:return Jg(t,i,i.type,i.pendingProps,s);case 15:return $g(t,i,i.type,i.pendingProps,s);case 19:return l0(t,i,s);case 31:return _y(t,i,s);case 22:return e0(t,i,s,i.pendingProps);case 24:return Ns(i),l=wn(hn),t===null?(f=Ef(),f===null&&(f=jt,m=yf(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=s),f=m),i.memoizedState={parent:l,cache:f},Tf(i),qa(i,hn,f)):((t.lanes&s)!==0&&(Af(t,i),Bo(i,null,null,s),Po()),f=t.memoizedState,m=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),qa(i,hn,l)):(l=m.cache,qa(i,hn,l),l!==f.cache&&Sf(i,[hn],s,!0))),Dn(t,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function va(t){t.flags|=4}function oh(t,i,s,l,f){if((i=(t.mode&32)!==0)&&(i=!1),i){if(t.flags|=16777216,(f&335544128)===f)if(t.stateNode.complete)t.flags|=8192;else if(P0())t.flags|=8192;else throw Os=nc,bf}else t.flags&=-16777217}function u0(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!T_(i))if(P0())t.flags|=8192;else throw Os=nc,bf}function xc(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?Bt():536870912,t.lanes|=i,Cr|=i)}function ko(t,i){if(!Tt)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function Yt(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function xy(t,i,s){var l=i.pendingProps;switch(mf(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yt(i),null;case 1:return Yt(i),null;case 3:return s=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),pa(hn),Fe(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(mr(i)?va(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,_f())),Yt(i),null;case 26:var f=i.type,m=i.memoizedState;return t===null?(va(i),m!==null?(Yt(i),u0(i,m)):(Yt(i),oh(i,f,null,l,s))):m?m!==t.memoizedState?(va(i),Yt(i),u0(i,m)):(Yt(i),i.flags&=-16777217):(t=t.memoizedProps,t!==l&&va(i),Yt(i),oh(i,f,t,l,s)),null;case 27:if(et(i),s=ne.current,f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&va(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return Yt(i),null}t=Ae.current,mr(i)?km(i):(t=__(f,l,s),i.stateNode=t,va(i))}return Yt(i),null;case 5:if(et(i),f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&va(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return Yt(i),null}if(m=Ae.current,mr(i))km(i);else{var y=Oc(ne.current);switch(m){case 1:m=y.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:m=y.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":m=y.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":m=y.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":m=y.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof l.is=="string"?y.createElement("select",{is:l.is}):y.createElement("select"),l.multiple?m.multiple=!0:l.size&&(m.size=l.size);break;default:m=typeof l.is=="string"?y.createElement(f,{is:l.is}):y.createElement(f)}}m[cn]=i,m[_n]=l;e:for(y=i.child;y!==null;){if(y.tag===5||y.tag===6)m.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===i)break e;for(;y.sibling===null;){if(y.return===null||y.return===i)break e;y=y.return}y.sibling.return=y.return,y=y.sibling}i.stateNode=m;e:switch(Nn(m,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&va(i)}}return Yt(i),oh(i,i.type,t===null?null:t.memoizedProps,i.pendingProps,s),null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&va(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(t=ne.current,mr(i)){if(t=i.stateNode,s=i.memoizedProps,l=null,f=Cn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}t[cn]=i,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||r_(t.nodeValue,s)),t||ja(i,!0)}else t=Oc(t).createTextNode(l),t[cn]=i,i.stateNode=t}return Yt(i),null;case 31:if(s=i.memoizedState,t===null||t.memoizedState!==null){if(l=mr(i),s!==null){if(t===null){if(!l)throw Error(a(318));if(t=i.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(557));t[cn]=i}else ws(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Yt(i),t=!1}else s=_f(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return i.flags&256?(ai(i),i):(ai(i),null);if((i.flags&128)!==0)throw Error(a(558))}return Yt(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=mr(i),l!==null&&l.dehydrated!==null){if(t===null){if(!f)throw Error(a(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[cn]=i}else ws(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Yt(i),f=!1}else f=_f(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(ai(i),i):(ai(i),null)}return ai(i),(i.flags&128)!==0?(i.lanes=s,i):(s=l!==null,t=t!==null&&t.memoizedState!==null,s&&(l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),m=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==f&&(l.flags|=2048)),s!==t&&s&&(i.child.flags|=8192),xc(i,i.updateQueue),Yt(i),null);case 4:return Fe(),t===null&&wh(i.stateNode.containerInfo),Yt(i),null;case 10:return pa(i.type),Yt(i),null;case 19:if(j(rn),l=i.memoizedState,l===null)return Yt(i),null;if(f=(i.flags&128)!==0,m=l.rendering,m===null)if(f)ko(l,!1);else{if(sn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(m=rc(t),m!==null){for(i.flags|=128,ko(l,!1),t=m.updateQueue,i.updateQueue=t,xc(i,t),i.subtreeFlags=0,t=s,s=i.child;s!==null;)Fm(s,t),s=s.sibling;return ge(rn,rn.current&1|2),Tt&&ha(i,l.treeForkCount),i.child}t=t.sibling}l.tail!==null&&b()>bc&&(i.flags|=128,f=!0,ko(l,!1),i.lanes=4194304)}else{if(!f)if(t=rc(m),t!==null){if(i.flags|=128,f=!0,t=t.updateQueue,i.updateQueue=t,xc(i,t),ko(l,!0),l.tail===null&&l.tailMode==="hidden"&&!m.alternate&&!Tt)return Yt(i),null}else 2*b()-l.renderingStartTime>bc&&s!==536870912&&(i.flags|=128,f=!0,ko(l,!1),i.lanes=4194304);l.isBackwards?(m.sibling=i.child,i.child=m):(t=l.last,t!==null?t.sibling=m:i.child=m,l.last=m)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=b(),t.sibling=null,s=rn.current,ge(rn,f?s&1|2:s&1),Tt&&ha(i,l.treeForkCount),t):(Yt(i),null);case 22:case 23:return ai(i),Df(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(Yt(i),i.subtreeFlags&6&&(i.flags|=8192)):Yt(i),s=i.updateQueue,s!==null&&xc(i,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),t!==null&&j(Ls),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),pa(hn),Yt(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function Sy(t,i){switch(mf(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return pa(hn),Fe(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return et(i),null;case 31:if(i.memoizedState!==null){if(ai(i),i.alternate===null)throw Error(a(340));ws()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 13:if(ai(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(a(340));ws()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return j(rn),null;case 4:return Fe(),null;case 10:return pa(i.type),null;case 22:case 23:return ai(i),Df(),t!==null&&j(Ls),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return pa(hn),null;case 25:return null;default:return null}}function f0(t,i){switch(mf(i),i.tag){case 3:pa(hn),Fe();break;case 26:case 27:case 5:et(i);break;case 4:Fe();break;case 31:i.memoizedState!==null&&ai(i);break;case 13:ai(i);break;case 19:j(rn);break;case 10:pa(i.type);break;case 22:case 23:ai(i),Df(),t!==null&&j(Ls);break;case 24:pa(hn)}}function Xo(t,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&t)===t){l=void 0;var m=s.create,y=s.inst;l=m(),y.destroy=l}s=s.next}while(s!==f)}}catch(R){zt(i,i.return,R)}}function $a(t,i,s){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var m=f.next;l=m;do{if((l.tag&t)===t){var y=l.inst,R=y.destroy;if(R!==void 0){y.destroy=void 0,f=i;var V=s,ie=R;try{ie()}catch(pe){zt(f,V,pe)}}}l=l.next}while(l!==m)}}catch(pe){zt(i,i.return,pe)}}function h0(t){var i=t.updateQueue;if(i!==null){var s=t.stateNode;try{ng(i,s)}catch(l){zt(t,t.return,l)}}}function d0(t,i,s){s.props=Bs(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){zt(t,i,l)}}function Wo(t,i){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(f){zt(t,i,f)}}function Wi(t,i){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){zt(t,i,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){zt(t,i,f)}else s.current=null}function p0(t){var i=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){zt(t,t.return,f)}}function lh(t,i,s){try{var l=t.stateNode;Gy(l,t.type,s,i),l[_n]=i}catch(f){zt(t,t.return,f)}}function m0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&rs(t.type)||t.tag===4}function ch(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||m0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&rs(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function uh(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(t),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=ca));else if(l!==4&&(l===27&&rs(t.type)&&(s=t.stateNode,i=null),t=t.child,t!==null))for(uh(t,i,s),t=t.sibling;t!==null;)uh(t,i,s),t=t.sibling}function Sc(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(l===27&&rs(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(Sc(t,i,s),t=t.sibling;t!==null;)Sc(t,i,s),t=t.sibling}function g0(t){var i=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);Nn(i,l,s),i[cn]=t,i[_n]=s}catch(m){zt(t,t.return,m)}}var xa=!1,mn=!1,fh=!1,_0=typeof WeakSet=="function"?WeakSet:Set,bn=null;function yy(t,i){if(t=t.containerInfo,Lh=Vc,t=wm(t),af(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{s.nodeType,m.nodeType}catch{s=null;break e}var y=0,R=-1,V=-1,ie=0,pe=0,Se=t,re=null;t:for(;;){for(var le;Se!==s||f!==0&&Se.nodeType!==3||(R=y+f),Se!==m||l!==0&&Se.nodeType!==3||(V=y+l),Se.nodeType===3&&(y+=Se.nodeValue.length),(le=Se.firstChild)!==null;)re=Se,Se=le;for(;;){if(Se===t)break t;if(re===s&&++ie===f&&(R=y),re===m&&++pe===l&&(V=y),(le=Se.nextSibling)!==null)break;Se=re,re=Se.parentNode}Se=le}s=R===-1||V===-1?null:{start:R,end:V}}else s=null}s=s||{start:0,end:0}}else s=null;for(Uh={focusedElem:t,selectionRange:s},Vc=!1,bn=i;bn!==null;)if(i=bn,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,bn=t;else for(;bn!==null;){switch(i=bn,m=i.alternate,t=i.flags,i.tag){case 0:if((t&4)!==0&&(t=i.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)f=t[s],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&m!==null){t=void 0,s=i,f=m.memoizedProps,m=m.memoizedState,l=s.stateNode;try{var Ge=Bs(s.type,f);t=l.getSnapshotBeforeUpdate(Ge,m),l.__reactInternalSnapshotBeforeUpdate=t}catch($e){zt(s,s.return,$e)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,s=t.nodeType,s===9)Ph(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Ph(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=i.sibling,t!==null){t.return=i.return,bn=t;break}bn=i.return}}function v0(t,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:ya(t,s),l&4&&Xo(5,s);break;case 1:if(ya(t,s),l&4)if(t=s.stateNode,i===null)try{t.componentDidMount()}catch(y){zt(s,s.return,y)}else{var f=Bs(s.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(f,i,t.__reactInternalSnapshotBeforeUpdate)}catch(y){zt(s,s.return,y)}}l&64&&h0(s),l&512&&Wo(s,s.return);break;case 3:if(ya(t,s),l&64&&(t=s.updateQueue,t!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{ng(t,i)}catch(y){zt(s,s.return,y)}}break;case 27:i===null&&l&4&&g0(s);case 26:case 5:ya(t,s),i===null&&l&4&&p0(s),l&512&&Wo(s,s.return);break;case 12:ya(t,s);break;case 31:ya(t,s),l&4&&y0(t,s);break;case 13:ya(t,s),l&4&&M0(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=Dy.bind(null,s),Zy(t,s))));break;case 22:if(l=s.memoizedState!==null||xa,!l){i=i!==null&&i.memoizedState!==null||mn,f=xa;var m=mn;xa=l,(mn=i)&&!m?Ma(t,s,(s.subtreeFlags&8772)!==0):ya(t,s),xa=f,mn=m}break;case 30:break;default:ya(t,s)}}function x0(t){var i=t.alternate;i!==null&&(t.alternate=null,x0(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&xo(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var $t=null,jn=!1;function Sa(t,i,s){for(s=s.child;s!==null;)S0(t,i,s),s=s.sibling}function S0(t,i,s){if(Me&&typeof Me.onCommitFiberUnmount=="function")try{Me.onCommitFiberUnmount(Te,s)}catch{}switch(s.tag){case 26:mn||Wi(s,i),Sa(t,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:mn||Wi(s,i);var l=$t,f=jn;rs(s.type)&&($t=s.stateNode,jn=!1),Sa(t,i,s),el(s.stateNode),$t=l,jn=f;break;case 5:mn||Wi(s,i);case 6:if(l=$t,f=jn,$t=null,Sa(t,i,s),$t=l,jn=f,$t!==null)if(jn)try{($t.nodeType===9?$t.body:$t.nodeName==="HTML"?$t.ownerDocument.body:$t).removeChild(s.stateNode)}catch(m){zt(s,i,m)}else try{$t.removeChild(s.stateNode)}catch(m){zt(s,i,m)}break;case 18:$t!==null&&(jn?(t=$t,h_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),Pr(t)):h_($t,s.stateNode));break;case 4:l=$t,f=jn,$t=s.stateNode.containerInfo,jn=!0,Sa(t,i,s),$t=l,jn=f;break;case 0:case 11:case 14:case 15:$a(2,s,i),mn||$a(4,s,i),Sa(t,i,s);break;case 1:mn||(Wi(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&d0(s,i,l)),Sa(t,i,s);break;case 21:Sa(t,i,s);break;case 22:mn=(l=mn)||s.memoizedState!==null,Sa(t,i,s),mn=l;break;default:Sa(t,i,s)}}function y0(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Pr(t)}catch(s){zt(i,i.return,s)}}}function M0(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Pr(t)}catch(s){zt(i,i.return,s)}}function My(t){switch(t.tag){case 31:case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new _0),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new _0),i;default:throw Error(a(435,t.tag))}}function yc(t,i){var s=My(t);i.forEach(function(l){if(!s.has(l)){s.add(l);var f=Ny.bind(null,t,l);l.then(f,f)}})}function qn(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],m=t,y=i,R=y;e:for(;R!==null;){switch(R.tag){case 27:if(rs(R.type)){$t=R.stateNode,jn=!1;break e}break;case 5:$t=R.stateNode,jn=!1;break e;case 3:case 4:$t=R.stateNode.containerInfo,jn=!0;break e}R=R.return}if($t===null)throw Error(a(160));S0(m,y,f),$t=null,jn=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)E0(i,t),i=i.sibling}var Di=null;function E0(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:qn(i,t),Yn(t),l&4&&($a(3,t,t.return),Xo(3,t),$a(5,t,t.return));break;case 1:qn(i,t),Yn(t),l&512&&(mn||s===null||Wi(s,s.return)),l&64&&xa&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=Di;if(qn(i,t),Yn(t),l&512&&(mn||s===null||Wi(s,s.return)),l&4){var m=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":m=f.getElementsByTagName("title")[0],(!m||m[Ms]||m[cn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(l),f.head.insertBefore(m,f.querySelector("head > title"))),Nn(m,l,s),m[cn]=t,X(m),l=m;break e;case"link":var y=E_("link","href",f).get(l+(s.href||""));if(y){for(var R=0;R<y.length;R++)if(m=y[R],m.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&m.getAttribute("rel")===(s.rel==null?null:s.rel)&&m.getAttribute("title")===(s.title==null?null:s.title)&&m.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){y.splice(R,1);break t}}m=f.createElement(l),Nn(m,l,s),f.head.appendChild(m);break;case"meta":if(y=E_("meta","content",f).get(l+(s.content||""))){for(R=0;R<y.length;R++)if(m=y[R],m.getAttribute("content")===(s.content==null?null:""+s.content)&&m.getAttribute("name")===(s.name==null?null:s.name)&&m.getAttribute("property")===(s.property==null?null:s.property)&&m.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&m.getAttribute("charset")===(s.charSet==null?null:s.charSet)){y.splice(R,1);break t}}m=f.createElement(l),Nn(m,l,s),f.head.appendChild(m);break;default:throw Error(a(468,l))}m[cn]=t,X(m),l=m}t.stateNode=l}else b_(f,t.type,t.stateNode);else t.stateNode=M_(f,l,t.memoizedProps);else m!==l?(m===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):m.count--,l===null?b_(f,t.type,t.stateNode):M_(f,l,t.memoizedProps)):l===null&&t.stateNode!==null&&lh(t,t.memoizedProps,s.memoizedProps)}break;case 27:qn(i,t),Yn(t),l&512&&(mn||s===null||Wi(s,s.return)),s!==null&&l&4&&lh(t,t.memoizedProps,s.memoizedProps);break;case 5:if(qn(i,t),Yn(t),l&512&&(mn||s===null||Wi(s,s.return)),t.flags&32){f=t.stateNode;try{Fn(f,"")}catch(Ge){zt(t,t.return,Ge)}}l&4&&t.stateNode!=null&&(f=t.memoizedProps,lh(t,f,s!==null?s.memoizedProps:f)),l&1024&&(fh=!0);break;case 6:if(qn(i,t),Yn(t),l&4){if(t.stateNode===null)throw Error(a(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch(Ge){zt(t,t.return,Ge)}}break;case 3:if(Bc=null,f=Di,Di=Ic(i.containerInfo),qn(i,t),Di=f,Yn(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Pr(i.containerInfo)}catch(Ge){zt(t,t.return,Ge)}fh&&(fh=!1,b0(t));break;case 4:l=Di,Di=Ic(t.stateNode.containerInfo),qn(i,t),Yn(t),Di=l;break;case 12:qn(i,t),Yn(t);break;case 31:qn(i,t),Yn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,yc(t,l)));break;case 13:qn(i,t),Yn(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Ec=b()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,yc(t,l)));break;case 22:f=t.memoizedState!==null;var V=s!==null&&s.memoizedState!==null,ie=xa,pe=mn;if(xa=ie||f,mn=pe||V,qn(i,t),mn=pe,xa=ie,Yn(t),l&8192)e:for(i=t.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(s===null||V||xa||mn||Fs(t)),s=null,i=t;;){if(i.tag===5||i.tag===26){if(s===null){V=s=i;try{if(m=V.stateNode,f)y=m.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{R=V.stateNode;var Se=V.memoizedProps.style,re=Se!=null&&Se.hasOwnProperty("display")?Se.display:null;R.style.display=re==null||typeof re=="boolean"?"":(""+re).trim()}}catch(Ge){zt(V,V.return,Ge)}}}else if(i.tag===6){if(s===null){V=i;try{V.stateNode.nodeValue=f?"":V.memoizedProps}catch(Ge){zt(V,V.return,Ge)}}}else if(i.tag===18){if(s===null){V=i;try{var le=V.stateNode;f?d_(le,!0):d_(V.stateNode,!1)}catch(Ge){zt(V,V.return,Ge)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,yc(t,s))));break;case 19:qn(i,t),Yn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,yc(t,l)));break;case 30:break;case 21:break;default:qn(i,t),Yn(t)}}function Yn(t){var i=t.flags;if(i&2){try{for(var s,l=t.return;l!==null;){if(m0(l)){s=l;break}l=l.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var f=s.stateNode,m=ch(t);Sc(t,m,f);break;case 5:var y=s.stateNode;s.flags&32&&(Fn(y,""),s.flags&=-33);var R=ch(t);Sc(t,R,y);break;case 3:case 4:var V=s.stateNode.containerInfo,ie=ch(t);uh(t,ie,V);break;default:throw Error(a(161))}}catch(pe){zt(t,t.return,pe)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function b0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;b0(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function ya(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)v0(t,i.alternate,i),i=i.sibling}function Fs(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:$a(4,i,i.return),Fs(i);break;case 1:Wi(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&d0(i,i.return,s),Fs(i);break;case 27:el(i.stateNode);case 26:case 5:Wi(i,i.return),Fs(i);break;case 22:i.memoizedState===null&&Fs(i);break;case 30:Fs(i);break;default:Fs(i)}t=t.sibling}}function Ma(t,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=t,m=i,y=m.flags;switch(m.tag){case 0:case 11:case 15:Ma(f,m,s),Xo(4,m);break;case 1:if(Ma(f,m,s),l=m,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(ie){zt(l,l.return,ie)}if(l=m,f=l.updateQueue,f!==null){var R=l.stateNode;try{var V=f.shared.hiddenCallbacks;if(V!==null)for(f.shared.hiddenCallbacks=null,f=0;f<V.length;f++)tg(V[f],R)}catch(ie){zt(l,l.return,ie)}}s&&y&64&&h0(m),Wo(m,m.return);break;case 27:g0(m);case 26:case 5:Ma(f,m,s),s&&l===null&&y&4&&p0(m),Wo(m,m.return);break;case 12:Ma(f,m,s);break;case 31:Ma(f,m,s),s&&y&4&&y0(f,m);break;case 13:Ma(f,m,s),s&&y&4&&M0(f,m);break;case 22:m.memoizedState===null&&Ma(f,m,s),Wo(m,m.return);break;case 30:break;default:Ma(f,m,s)}i=i.sibling}}function hh(t,i){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&No(s))}function dh(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&No(t))}function Ni(t,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)T0(t,i,s,l),i=i.sibling}function T0(t,i,s,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:Ni(t,i,s,l),f&2048&&Xo(9,i);break;case 1:Ni(t,i,s,l);break;case 3:Ni(t,i,s,l),f&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&No(t)));break;case 12:if(f&2048){Ni(t,i,s,l),t=i.stateNode;try{var m=i.memoizedProps,y=m.id,R=m.onPostCommit;typeof R=="function"&&R(y,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(V){zt(i,i.return,V)}}else Ni(t,i,s,l);break;case 31:Ni(t,i,s,l);break;case 13:Ni(t,i,s,l);break;case 23:break;case 22:m=i.stateNode,y=i.alternate,i.memoizedState!==null?m._visibility&2?Ni(t,i,s,l):jo(t,i):m._visibility&2?Ni(t,i,s,l):(m._visibility|=2,Tr(t,i,s,l,(i.subtreeFlags&10256)!==0||!1)),f&2048&&hh(y,i);break;case 24:Ni(t,i,s,l),f&2048&&dh(i.alternate,i);break;default:Ni(t,i,s,l)}}function Tr(t,i,s,l,f){for(f=f&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var m=t,y=i,R=s,V=l,ie=y.flags;switch(y.tag){case 0:case 11:case 15:Tr(m,y,R,V,f),Xo(8,y);break;case 23:break;case 22:var pe=y.stateNode;y.memoizedState!==null?pe._visibility&2?Tr(m,y,R,V,f):jo(m,y):(pe._visibility|=2,Tr(m,y,R,V,f)),f&&ie&2048&&hh(y.alternate,y);break;case 24:Tr(m,y,R,V,f),f&&ie&2048&&dh(y.alternate,y);break;default:Tr(m,y,R,V,f)}i=i.sibling}}function jo(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=t,l=i,f=l.flags;switch(l.tag){case 22:jo(s,l),f&2048&&hh(l.alternate,l);break;case 24:jo(s,l),f&2048&&dh(l.alternate,l);break;default:jo(s,l)}i=i.sibling}}var qo=8192;function Ar(t,i,s){if(t.subtreeFlags&qo)for(t=t.child;t!==null;)A0(t,i,s),t=t.sibling}function A0(t,i,s){switch(t.tag){case 26:Ar(t,i,s),t.flags&qo&&t.memoizedState!==null&&lM(s,Di,t.memoizedState,t.memoizedProps);break;case 5:Ar(t,i,s);break;case 3:case 4:var l=Di;Di=Ic(t.stateNode.containerInfo),Ar(t,i,s),Di=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=qo,qo=16777216,Ar(t,i,s),qo=l):Ar(t,i,s));break;default:Ar(t,i,s)}}function R0(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function Yo(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];bn=l,w0(l,t)}R0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)C0(t),t=t.sibling}function C0(t){switch(t.tag){case 0:case 11:case 15:Yo(t),t.flags&2048&&$a(9,t,t.return);break;case 3:Yo(t);break;case 12:Yo(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,Mc(t)):Yo(t);break;default:Yo(t)}}function Mc(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];bn=l,w0(l,t)}R0(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:$a(8,i,i.return),Mc(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,Mc(i));break;default:Mc(i)}t=t.sibling}}function w0(t,i){for(;bn!==null;){var s=bn;switch(s.tag){case 0:case 11:case 15:$a(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:No(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,bn=l;else e:for(s=t;bn!==null;){l=bn;var f=l.sibling,m=l.return;if(x0(l),l===s){bn=null;break e}if(f!==null){f.return=m,bn=f;break e}bn=m}}}var Ey={getCacheForType:function(t){var i=wn(hn),s=i.data.get(t);return s===void 0&&(s=t(),i.data.set(t,s)),s},cacheSignal:function(){return wn(hn).controller.signal}},by=typeof WeakMap=="function"?WeakMap:Map,Ot=0,jt=null,St=null,Et=0,Ft=0,si=null,es=!1,Rr=!1,ph=!1,Ea=0,sn=0,ts=0,zs=0,mh=0,ri=0,Cr=0,Ko=null,Kn=null,gh=!1,Ec=0,D0=0,bc=1/0,Tc=null,ns=null,xn=0,is=null,wr=null,ba=0,_h=0,vh=null,N0=null,Zo=0,xh=null;function oi(){return(Ot&2)!==0&&Et!==0?Et&-Et:I.T!==null?Th():Gi()}function L0(){if(ri===0)if((Et&536870912)===0||Tt){var t=Re;Re<<=1,(Re&3932160)===0&&(Re=262144),ri=t}else ri=536870912;return t=ii.current,t!==null&&(t.flags|=32),ri}function Zn(t,i,s){(t===jt&&(Ft===2||Ft===9)||t.cancelPendingCommit!==null)&&(Dr(t,0),as(t,Et,ri,!1)),In(t,s),((Ot&2)===0||t!==jt)&&(t===jt&&((Ot&2)===0&&(zs|=s),sn===4&&as(t,Et,ri,!1)),ji(t))}function U0(t,i,s){if((Ot&6)!==0)throw Error(a(327));var l=!s&&(i&127)===0&&(i&t.expiredLanes)===0||He(t,i),f=l?Ry(t,i):yh(t,i,!0),m=l;do{if(f===0){Rr&&!l&&as(t,i,0,!1);break}else{if(s=t.current.alternate,m&&!Ty(s)){f=yh(t,i,!1),m=!1;continue}if(f===2){if(m=i,t.errorRecoveryDisabledLanes&m)var y=0;else y=t.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){i=y;e:{var R=t;f=Ko;var V=R.current.memoizedState.isDehydrated;if(V&&(Dr(R,y).flags|=256),y=yh(R,y,!1),y!==2){if(ph&&!V){R.errorRecoveryDisabledLanes|=m,zs|=m,f=4;break e}m=Kn,Kn=f,m!==null&&(Kn===null?Kn=m:Kn.push.apply(Kn,m))}f=y}if(m=!1,f!==2)continue}}if(f===1){Dr(t,0),as(t,i,0,!0);break}e:{switch(l=t,m=f,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:as(l,i,ri,!es);break e;case 2:Kn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(f=Ec+300-b(),10<f)){if(as(l,i,ri,!es),he(l,0,!0)!==0)break e;ba=i,l.timeoutHandle=u_(O0.bind(null,l,s,Kn,Tc,gh,i,ri,zs,Cr,es,m,"Throttled",-0,0),f);break e}O0(l,s,Kn,Tc,gh,i,ri,zs,Cr,es,m,null,-0,0)}}break}while(!0);ji(t)}function O0(t,i,s,l,f,m,y,R,V,ie,pe,Se,re,le){if(t.timeoutHandle=-1,Se=i.subtreeFlags,Se&8192||(Se&16785408)===16785408){Se={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ca},A0(i,m,Se);var Ge=(m&62914560)===m?Ec-b():(m&4194048)===m?D0-b():0;if(Ge=cM(Se,Ge),Ge!==null){ba=m,t.cancelPendingCommit=Ge(G0.bind(null,t,i,m,s,l,f,y,R,V,pe,Se,null,re,le)),as(t,m,y,!ie);return}}G0(t,i,m,s,l,f,y,R,V)}function Ty(t){for(var i=t;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],m=f.getSnapshot;f=f.value;try{if(!ti(m(),f))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function as(t,i,s,l){i&=~mh,i&=~zs,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var f=i;0<f;){var m=31-Oe(f),y=1<<m;l[m]=-1,f&=~y}s!==0&&vo(t,s,i)}function Ac(){return(Ot&6)===0?(Qo(0),!1):!0}function Sh(){if(St!==null){if(Ft===0)var t=St.return;else t=St,da=Ds=null,Pf(t),Sr=null,Uo=0,t=St;for(;t!==null;)f0(t.alternate,t),t=t.return;St=null}}function Dr(t,i){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,Wy(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),ba=0,Sh(),jt=t,St=s=fa(t.current,null),Et=i,Ft=0,si=null,es=!1,Rr=He(t,i),ph=!1,Cr=ri=mh=zs=ts=sn=0,Kn=Ko=null,gh=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var f=31-Oe(l),m=1<<f;i|=t[f],l&=~m}return Ea=i,ql(),s}function I0(t,i){ut=null,I.H=Vo,i===xr||i===tc?(i=Qm(),Ft=3):i===bf?(i=Qm(),Ft=4):Ft=i===Jf?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,si=i,St===null&&(sn=1,mc(t,hi(i,t.current)))}function P0(){var t=ii.current;return t===null?!0:(Et&4194048)===Et?gi===null:(Et&62914560)===Et||(Et&536870912)!==0?t===gi:!1}function B0(){var t=I.H;return I.H=Vo,t===null?Vo:t}function F0(){var t=I.A;return I.A=Ey,t}function Rc(){sn=4,es||(Et&4194048)!==Et&&ii.current!==null||(Rr=!0),(ts&134217727)===0&&(zs&134217727)===0||jt===null||as(jt,Et,ri,!1)}function yh(t,i,s){var l=Ot;Ot|=2;var f=B0(),m=F0();(jt!==t||Et!==i)&&(Tc=null,Dr(t,i)),i=!1;var y=sn;e:do try{if(Ft!==0&&St!==null){var R=St,V=si;switch(Ft){case 8:Sh(),y=6;break e;case 3:case 2:case 9:case 6:ii.current===null&&(i=!0);var ie=Ft;if(Ft=0,si=null,Nr(t,R,V,ie),s&&Rr){y=0;break e}break;default:ie=Ft,Ft=0,si=null,Nr(t,R,V,ie)}}Ay(),y=sn;break}catch(pe){I0(t,pe)}while(!0);return i&&t.shellSuspendCounter++,da=Ds=null,Ot=l,I.H=f,I.A=m,St===null&&(jt=null,Et=0,ql()),y}function Ay(){for(;St!==null;)z0(St)}function Ry(t,i){var s=Ot;Ot|=2;var l=B0(),f=F0();jt!==t||Et!==i?(Tc=null,bc=b()+500,Dr(t,i)):Rr=He(t,i);e:do try{if(Ft!==0&&St!==null){i=St;var m=si;t:switch(Ft){case 1:Ft=0,si=null,Nr(t,i,m,1);break;case 2:case 9:if(Km(m)){Ft=0,si=null,H0(i);break}i=function(){Ft!==2&&Ft!==9||jt!==t||(Ft=7),ji(t)},m.then(i,i);break e;case 3:Ft=7;break e;case 4:Ft=5;break e;case 7:Km(m)?(Ft=0,si=null,H0(i)):(Ft=0,si=null,Nr(t,i,m,7));break;case 5:var y=null;switch(St.tag){case 26:y=St.memoizedState;case 5:case 27:var R=St;if(y?T_(y):R.stateNode.complete){Ft=0,si=null;var V=R.sibling;if(V!==null)St=V;else{var ie=R.return;ie!==null?(St=ie,Cc(ie)):St=null}break t}}Ft=0,si=null,Nr(t,i,m,5);break;case 6:Ft=0,si=null,Nr(t,i,m,6);break;case 8:Sh(),sn=6;break e;default:throw Error(a(462))}}Cy();break}catch(pe){I0(t,pe)}while(!0);return da=Ds=null,I.H=l,I.A=f,Ot=s,St!==null?0:(jt=null,Et=0,ql(),sn)}function Cy(){for(;St!==null&&!je();)z0(St)}function z0(t){var i=c0(t.alternate,t,Ea);t.memoizedProps=t.pendingProps,i===null?Cc(t):St=i}function H0(t){var i=t,s=i.alternate;switch(i.tag){case 15:case 0:i=i0(s,i,i.pendingProps,i.type,void 0,Et);break;case 11:i=i0(s,i,i.pendingProps,i.type.render,i.ref,Et);break;case 5:Pf(i);default:f0(s,i),i=St=Fm(i,Ea),i=c0(s,i,Ea)}t.memoizedProps=t.pendingProps,i===null?Cc(t):St=i}function Nr(t,i,s,l){da=Ds=null,Pf(i),Sr=null,Uo=0;var f=i.return;try{if(gy(t,f,i,s,Et)){sn=1,mc(t,hi(s,t.current)),St=null;return}}catch(m){if(f!==null)throw St=f,m;sn=1,mc(t,hi(s,t.current)),St=null;return}i.flags&32768?(Tt||l===1?t=!0:Rr||(Et&536870912)!==0?t=!1:(es=t=!0,(l===2||l===9||l===3||l===6)&&(l=ii.current,l!==null&&l.tag===13&&(l.flags|=16384))),V0(i,t)):Cc(i)}function Cc(t){var i=t;do{if((i.flags&32768)!==0){V0(i,es);return}t=i.return;var s=xy(i.alternate,i,Ea);if(s!==null){St=s;return}if(i=i.sibling,i!==null){St=i;return}St=i=t}while(i!==null);sn===0&&(sn=5)}function V0(t,i){do{var s=Sy(t.alternate,t);if(s!==null){s.flags&=32767,St=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(t=t.sibling,t!==null)){St=t;return}St=t=s}while(t!==null);sn=6,St=null}function G0(t,i,s,l,f,m,y,R,V){t.cancelPendingCommit=null;do wc();while(xn!==0);if((Ot&6)!==0)throw Error(a(327));if(i!==null){if(i===t.current)throw Error(a(177));if(m=i.lanes|i.childLanes,m|=cf,Ti(t,s,m,y,R,V),t===jt&&(St=jt=null,Et=0),wr=i,is=t,ba=s,_h=m,vh=f,N0=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Ly(de,function(){return q0(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=I.T,I.T=null,f=B.p,B.p=2,y=Ot,Ot|=4;try{yy(t,i,s)}finally{Ot=y,B.p=f,I.T=l}}xn=1,k0(),X0(),W0()}}function k0(){if(xn===1){xn=0;var t=is,i=wr,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=I.T,I.T=null;var l=B.p;B.p=2;var f=Ot;Ot|=4;try{E0(i,t);var m=Uh,y=wm(t.containerInfo),R=m.focusedElem,V=m.selectionRange;if(y!==R&&R&&R.ownerDocument&&Cm(R.ownerDocument.documentElement,R)){if(V!==null&&af(R)){var ie=V.start,pe=V.end;if(pe===void 0&&(pe=ie),"selectionStart"in R)R.selectionStart=ie,R.selectionEnd=Math.min(pe,R.value.length);else{var Se=R.ownerDocument||document,re=Se&&Se.defaultView||window;if(re.getSelection){var le=re.getSelection(),Ge=R.textContent.length,$e=Math.min(V.start,Ge),Wt=V.end===void 0?$e:Math.min(V.end,Ge);!le.extend&&$e>Wt&&(y=Wt,Wt=$e,$e=y);var K=Rm(R,$e),k=Rm(R,Wt);if(K&&k&&(le.rangeCount!==1||le.anchorNode!==K.node||le.anchorOffset!==K.offset||le.focusNode!==k.node||le.focusOffset!==k.offset)){var te=Se.createRange();te.setStart(K.node,K.offset),le.removeAllRanges(),$e>Wt?(le.addRange(te),le.extend(k.node,k.offset)):(te.setEnd(k.node,k.offset),le.addRange(te))}}}}for(Se=[],le=R;le=le.parentNode;)le.nodeType===1&&Se.push({element:le,left:le.scrollLeft,top:le.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<Se.length;R++){var _e=Se[R];_e.element.scrollLeft=_e.left,_e.element.scrollTop=_e.top}}Vc=!!Lh,Uh=Lh=null}finally{Ot=f,B.p=l,I.T=s}}t.current=i,xn=2}}function X0(){if(xn===2){xn=0;var t=is,i=wr,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=I.T,I.T=null;var l=B.p;B.p=2;var f=Ot;Ot|=4;try{v0(t,i.alternate,i)}finally{Ot=f,B.p=l,I.T=s}}xn=3}}function W0(){if(xn===4||xn===3){xn=0,O();var t=is,i=wr,s=ba,l=N0;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?xn=5:(xn=0,wr=is=null,j0(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(ns=null),ir(s),i=i.stateNode,Me&&typeof Me.onCommitFiberRoot=="function")try{Me.onCommitFiberRoot(Te,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=I.T,f=B.p,B.p=2,I.T=null;try{for(var m=t.onRecoverableError,y=0;y<l.length;y++){var R=l[y];m(R.value,{componentStack:R.stack})}}finally{I.T=i,B.p=f}}(ba&3)!==0&&wc(),ji(t),f=t.pendingLanes,(s&261930)!==0&&(f&42)!==0?t===xh?Zo++:(Zo=0,xh=t):Zo=0,Qo(0)}}function j0(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,No(i)))}function wc(){return k0(),X0(),W0(),q0()}function q0(){if(xn!==5)return!1;var t=is,i=_h;_h=0;var s=ir(ba),l=I.T,f=B.p;try{B.p=32>s?32:s,I.T=null,s=vh,vh=null;var m=is,y=ba;if(xn=0,wr=is=null,ba=0,(Ot&6)!==0)throw Error(a(331));var R=Ot;if(Ot|=4,C0(m.current),T0(m,m.current,y,s),Ot=R,Qo(0,!1),Me&&typeof Me.onPostCommitFiberRoot=="function")try{Me.onPostCommitFiberRoot(Te,m)}catch{}return!0}finally{B.p=f,I.T=l,j0(t,i)}}function Y0(t,i,s){i=hi(s,i),i=Qf(t.stateNode,i,2),t=Za(t,i,2),t!==null&&(In(t,2),ji(t))}function zt(t,i,s){if(t.tag===3)Y0(t,t,s);else for(;i!==null;){if(i.tag===3){Y0(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ns===null||!ns.has(l))){t=hi(s,t),s=Kg(2),l=Za(i,s,2),l!==null&&(Zg(s,l,i,t),In(l,2),ji(l));break}}i=i.return}}function Mh(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new by;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(s)||(ph=!0,f.add(s),t=wy.bind(null,t,i,s),i.then(t,t))}function wy(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,jt===t&&(Et&s)===s&&(sn===4||sn===3&&(Et&62914560)===Et&&300>b()-Ec?(Ot&2)===0&&Dr(t,0):mh|=s,Cr===Et&&(Cr=0)),ji(t)}function K0(t,i){i===0&&(i=Bt()),t=Rs(t,i),t!==null&&(In(t,i),ji(t))}function Dy(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),K0(t,s)}function Ny(t,i){var s=0;switch(t.tag){case 31:case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),K0(t,s)}function Ly(t,i){return Rt(t,i)}var Dc=null,Lr=null,Eh=!1,Nc=!1,bh=!1,ss=0;function ji(t){t!==Lr&&t.next===null&&(Lr===null?Dc=Lr=t:Lr=Lr.next=t),Nc=!0,Eh||(Eh=!0,Oy())}function Qo(t,i){if(!bh&&Nc){bh=!0;do for(var s=!1,l=Dc;l!==null;){if(t!==0){var f=l.pendingLanes;if(f===0)var m=0;else{var y=l.suspendedLanes,R=l.pingedLanes;m=(1<<31-Oe(42|t)+1)-1,m&=f&~(y&~R),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(s=!0,$0(l,m))}else m=Et,m=he(l,l===jt?m:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(m&3)===0||He(l,m)||(s=!0,$0(l,m));l=l.next}while(s);bh=!1}}function Uy(){Z0()}function Z0(){Nc=Eh=!1;var t=0;ss!==0&&Xy()&&(t=ss);for(var i=b(),s=null,l=Dc;l!==null;){var f=l.next,m=Q0(l,i);m===0?(l.next=null,s===null?Dc=f:s.next=f,f===null&&(Lr=s)):(s=l,(t!==0||(m&3)!==0)&&(Nc=!0)),l=f}xn!==0&&xn!==5||Qo(t),ss!==0&&(ss=0)}function Q0(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,m=t.pendingLanes&-62914561;0<m;){var y=31-Oe(m),R=1<<y,V=f[y];V===-1?((R&s)===0||(R&l)!==0)&&(f[y]=at(R,i)):V<=i&&(t.expiredLanes|=R),m&=~R}if(i=jt,s=Et,s=he(t,t===i?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===i&&(Ft===2||Ft===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&It(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||He(t,s)){if(i=s&-s,i===t.callbackPriority)return i;switch(l!==null&&It(l),ir(s)){case 2:case 8:s=ye;break;case 32:s=de;break;case 268435456:s=we;break;default:s=de}return l=J0.bind(null,t),s=Rt(s,l),t.callbackPriority=i,t.callbackNode=s,i}return l!==null&&l!==null&&It(l),t.callbackPriority=2,t.callbackNode=null,2}function J0(t,i){if(xn!==0&&xn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(wc()&&t.callbackNode!==s)return null;var l=Et;return l=he(t,t===jt?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(U0(t,l,i),Q0(t,b()),t.callbackNode!=null&&t.callbackNode===s?J0.bind(null,t):null)}function $0(t,i){if(wc())return null;U0(t,i,!0)}function Oy(){jy(function(){(Ot&6)!==0?Rt(me,Uy):Z0()})}function Th(){if(ss===0){var t=_r;t===0&&(t=Ce,Ce<<=1,(Ce&261888)===0&&(Ce=256)),ss=t}return ss}function e_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:zl(""+t)}function t_(t,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,t.id&&s.setAttribute("form",t.id),i.parentNode.insertBefore(s,i),t=new FormData(t),s.parentNode.removeChild(s),t}function Iy(t,i,s,l,f){if(i==="submit"&&s&&s.stateNode===f){var m=e_((f[_n]||null).action),y=l.submitter;y&&(i=(i=y[_n]||null)?e_(i.formAction):y.getAttribute("formAction"),i!==null&&(m=i,y=null));var R=new kl("action","action",null,l,f);t.push({event:R,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ss!==0){var V=y?t_(f,y):new FormData(f);Wf(s,{pending:!0,data:V,method:f.method,action:m},null,V)}}else typeof m=="function"&&(R.preventDefault(),V=y?t_(f,y):new FormData(f),Wf(s,{pending:!0,data:V,method:f.method,action:m},m,V))},currentTarget:f}]})}}for(var Ah=0;Ah<lf.length;Ah++){var Rh=lf[Ah],Py=Rh.toLowerCase(),By=Rh[0].toUpperCase()+Rh.slice(1);wi(Py,"on"+By)}wi(Lm,"onAnimationEnd"),wi(Um,"onAnimationIteration"),wi(Om,"onAnimationStart"),wi("dblclick","onDoubleClick"),wi("focusin","onFocus"),wi("focusout","onBlur"),wi($S,"onTransitionRun"),wi(ey,"onTransitionStart"),wi(ty,"onTransitionCancel"),wi(Im,"onTransitionEnd"),De("onMouseEnter",["mouseout","mouseover"]),De("onMouseLeave",["mouseout","mouseover"]),De("onPointerEnter",["pointerout","pointerover"]),De("onPointerLeave",["pointerout","pointerover"]),ee("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ee("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ee("onBeforeInput",["compositionend","keypress","textInput","paste"]),ee("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ee("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ee("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Jo));function n_(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],f=l.event;l=l.listeners;e:{var m=void 0;if(i)for(var y=l.length-1;0<=y;y--){var R=l[y],V=R.instance,ie=R.currentTarget;if(R=R.listener,V!==m&&f.isPropagationStopped())break e;m=R,f.currentTarget=ie;try{m(f)}catch(pe){jl(pe)}f.currentTarget=null,m=V}else for(y=0;y<l.length;y++){if(R=l[y],V=R.instance,ie=R.currentTarget,R=R.listener,V!==m&&f.isPropagationStopped())break e;m=R,f.currentTarget=ie;try{m(f)}catch(pe){jl(pe)}f.currentTarget=null,m=V}}}}function yt(t,i){var s=i[Ha];s===void 0&&(s=i[Ha]=new Set);var l=t+"__bubble";s.has(l)||(i_(i,t,2,!1),s.add(l))}function Ch(t,i,s){var l=0;i&&(l|=4),i_(s,t,l,i)}var Lc="_reactListening"+Math.random().toString(36).slice(2);function wh(t){if(!t[Lc]){t[Lc]=!0,oe.forEach(function(s){s!=="selectionchange"&&(Fy.has(s)||Ch(s,!1,t),Ch(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Lc]||(i[Lc]=!0,Ch("selectionchange",!1,i))}}function i_(t,i,s,l){switch(L_(i)){case 2:var f=hM;break;case 8:f=dM;break;default:f=Xh}s=f.bind(null,i,s,t),f=void 0,!Yu||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,s,{capture:!0,passive:f}):t.addEventListener(i,s,!0):f!==void 0?t.addEventListener(i,s,{passive:f}):t.addEventListener(i,s,!1)}function Dh(t,i,s,l,f){var m=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var y=l.tag;if(y===3||y===4){var R=l.stateNode.containerInfo;if(R===f)break;if(y===4)for(y=l.return;y!==null;){var V=y.tag;if((V===3||V===4)&&y.stateNode.containerInfo===f)return;y=y.return}for(;R!==null;){if(y=Va(R),y===null)return;if(V=y.tag,V===5||V===6||V===26||V===27){l=m=y;continue e}R=R.parentNode}}l=l.return}lm(function(){var ie=m,pe=ju(s),Se=[];e:{var re=Pm.get(t);if(re!==void 0){var le=kl,Ge=t;switch(t){case"keypress":if(Vl(s)===0)break e;case"keydown":case"keyup":le=NS;break;case"focusin":Ge="focus",le=Ju;break;case"focusout":Ge="blur",le=Ju;break;case"beforeblur":case"afterblur":le=Ju;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":le=fm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":le=xS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":le=OS;break;case Lm:case Um:case Om:le=MS;break;case Im:le=PS;break;case"scroll":case"scrollend":le=_S;break;case"wheel":le=FS;break;case"copy":case"cut":case"paste":le=bS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":le=dm;break;case"toggle":case"beforetoggle":le=HS}var $e=(i&4)!==0,Wt=!$e&&(t==="scroll"||t==="scrollend"),K=$e?re!==null?re+"Capture":null:re;$e=[];for(var k=ie,te;k!==null;){var _e=k;if(te=_e.stateNode,_e=_e.tag,_e!==5&&_e!==26&&_e!==27||te===null||K===null||(_e=So(k,K),_e!=null&&$e.push($o(k,_e,te))),Wt)break;k=k.return}0<$e.length&&(re=new le(re,Ge,null,s,pe),Se.push({event:re,listeners:$e}))}}if((i&7)===0){e:{if(re=t==="mouseover"||t==="pointerover",le=t==="mouseout"||t==="pointerout",re&&s!==Wu&&(Ge=s.relatedTarget||s.fromElement)&&(Va(Ge)||Ge[oa]))break e;if((le||re)&&(re=pe.window===pe?pe:(re=pe.ownerDocument)?re.defaultView||re.parentWindow:window,le?(Ge=s.relatedTarget||s.toElement,le=ie,Ge=Ge?Va(Ge):null,Ge!==null&&(Wt=c(Ge),$e=Ge.tag,Ge!==Wt||$e!==5&&$e!==27&&$e!==6)&&(Ge=null)):(le=null,Ge=ie),le!==Ge)){if($e=fm,_e="onMouseLeave",K="onMouseEnter",k="mouse",(t==="pointerout"||t==="pointerover")&&($e=dm,_e="onPointerLeave",K="onPointerEnter",k="pointer"),Wt=le==null?re:Es(le),te=Ge==null?re:Es(Ge),re=new $e(_e,k+"leave",le,s,pe),re.target=Wt,re.relatedTarget=te,_e=null,Va(pe)===ie&&($e=new $e(K,k+"enter",Ge,s,pe),$e.target=te,$e.relatedTarget=Wt,_e=$e),Wt=_e,le&&Ge)t:{for($e=zy,K=le,k=Ge,te=0,_e=K;_e;_e=$e(_e))te++;_e=0;for(var Je=k;Je;Je=$e(Je))_e++;for(;0<te-_e;)K=$e(K),te--;for(;0<_e-te;)k=$e(k),_e--;for(;te--;){if(K===k||k!==null&&K===k.alternate){$e=K;break t}K=$e(K),k=$e(k)}$e=null}else $e=null;le!==null&&a_(Se,re,le,$e,!1),Ge!==null&&Wt!==null&&a_(Se,Wt,Ge,$e,!0)}}e:{if(re=ie?Es(ie):window,le=re.nodeName&&re.nodeName.toLowerCase(),le==="select"||le==="input"&&re.type==="file")var Nt=ym;else if(xm(re))if(Mm)Nt=ZS;else{Nt=YS;var qe=qS}else le=re.nodeName,!le||le.toLowerCase()!=="input"||re.type!=="checkbox"&&re.type!=="radio"?ie&&sr(ie.elementType)&&(Nt=ym):Nt=KS;if(Nt&&(Nt=Nt(t,ie))){Sm(Se,Nt,s,pe);break e}qe&&qe(t,re,ie),t==="focusout"&&ie&&re.type==="number"&&ie.memoizedProps.value!=null&&Ri(re,"number",re.value)}switch(qe=ie?Es(ie):window,t){case"focusin":(xm(qe)||qe.contentEditable==="true")&&(cr=qe,sf=ie,Co=null);break;case"focusout":Co=sf=cr=null;break;case"mousedown":rf=!0;break;case"contextmenu":case"mouseup":case"dragend":rf=!1,Dm(Se,s,pe);break;case"selectionchange":if(JS)break;case"keydown":case"keyup":Dm(Se,s,pe)}var dt;if(ef)e:{switch(t){case"compositionstart":var bt="onCompositionStart";break e;case"compositionend":bt="onCompositionEnd";break e;case"compositionupdate":bt="onCompositionUpdate";break e}bt=void 0}else lr?_m(t,s)&&(bt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(bt="onCompositionStart");bt&&(pm&&s.locale!=="ko"&&(lr||bt!=="onCompositionStart"?bt==="onCompositionEnd"&&lr&&(dt=cm()):(ka=pe,Ku="value"in ka?ka.value:ka.textContent,lr=!0)),qe=Uc(ie,bt),0<qe.length&&(bt=new hm(bt,t,null,s,pe),Se.push({event:bt,listeners:qe}),dt?bt.data=dt:(dt=vm(s),dt!==null&&(bt.data=dt)))),(dt=GS?kS(t,s):XS(t,s))&&(bt=Uc(ie,"onBeforeInput"),0<bt.length&&(qe=new hm("onBeforeInput","beforeinput",null,s,pe),Se.push({event:qe,listeners:bt}),qe.data=dt)),Iy(Se,t,ie,s,pe)}n_(Se,i)})}function $o(t,i,s){return{instance:t,listener:i,currentTarget:s}}function Uc(t,i){for(var s=i+"Capture",l=[];t!==null;){var f=t,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=So(t,s),f!=null&&l.unshift($o(t,f,m)),f=So(t,i),f!=null&&l.push($o(t,f,m))),t.tag===3)return l;t=t.return}return[]}function zy(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function a_(t,i,s,l,f){for(var m=i._reactName,y=[];s!==null&&s!==l;){var R=s,V=R.alternate,ie=R.stateNode;if(R=R.tag,V!==null&&V===l)break;R!==5&&R!==26&&R!==27||ie===null||(V=ie,f?(ie=So(s,m),ie!=null&&y.unshift($o(s,ie,V))):f||(ie=So(s,m),ie!=null&&y.push($o(s,ie,V)))),s=s.return}y.length!==0&&t.push({event:i,listeners:y})}var Hy=/\r\n?/g,Vy=/\u0000|\uFFFD/g;function s_(t){return(typeof t=="string"?t:""+t).replace(Hy,`
`).replace(Vy,"")}function r_(t,i){return i=s_(i),s_(t)===i}function Xt(t,i,s,l,f,m){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Fn(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Fn(t,""+l);break;case"className":ot(t,"class",l);break;case"tabIndex":ot(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ot(t,s,l);break;case"style":la(t,l,m);break;case"data":if(i!=="object"){ot(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=zl(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(s==="formAction"?(i!=="input"&&Xt(t,i,"name",f.name,f,null),Xt(t,i,"formEncType",f.formEncType,f,null),Xt(t,i,"formMethod",f.formMethod,f,null),Xt(t,i,"formTarget",f.formTarget,f,null)):(Xt(t,i,"encType",f.encType,f,null),Xt(t,i,"method",f.method,f,null),Xt(t,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=zl(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=ca);break;case"onScroll":l!=null&&yt("scroll",t);break;case"onScrollEnd":l!=null&&yt("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=zl(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":yt("beforetoggle",t),yt("toggle",t),it(t,"popover",l);break;case"xlinkActuate":Ve(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ve(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ve(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ve(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ve(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ve(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ve(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ve(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ve(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":it(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=mS.get(s)||s,it(t,s,l))}}function Nh(t,i,s,l,f,m){switch(s){case"style":la(t,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"children":typeof l=="string"?Fn(t,l):(typeof l=="number"||typeof l=="bigint")&&Fn(t,""+l);break;case"onScroll":l!=null&&yt("scroll",t);break;case"onScrollEnd":l!=null&&yt("scrollend",t);break;case"onClick":l!=null&&(t.onclick=ca);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!se.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),i=s.slice(2,f?s.length-7:void 0),m=t[_n]||null,m=m!=null?m[s]:null,typeof m=="function"&&t.removeEventListener(i,m,f),typeof l=="function")){typeof m!="function"&&m!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(i,l,f);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):it(t,s,l)}}}function Nn(t,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":yt("error",t),yt("load",t);var l=!1,f=!1,m;for(m in s)if(s.hasOwnProperty(m)){var y=s[m];if(y!=null)switch(m){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Xt(t,i,m,y,s,null)}}f&&Xt(t,i,"srcSet",s.srcSet,s,null),l&&Xt(t,i,"src",s.src,s,null);return;case"input":yt("invalid",t);var R=m=y=f=null,V=null,ie=null;for(l in s)if(s.hasOwnProperty(l)){var pe=s[l];if(pe!=null)switch(l){case"name":f=pe;break;case"type":y=pe;break;case"checked":V=pe;break;case"defaultChecked":ie=pe;break;case"value":m=pe;break;case"defaultValue":R=pe;break;case"children":case"dangerouslySetInnerHTML":if(pe!=null)throw Error(a(137,i));break;default:Xt(t,i,l,pe,s,null)}}$n(t,m,R,V,ie,y,f,!1);return;case"select":yt("invalid",t),l=y=m=null;for(f in s)if(s.hasOwnProperty(f)&&(R=s[f],R!=null))switch(f){case"value":m=R;break;case"defaultValue":y=R;break;case"multiple":l=R;default:Xt(t,i,f,R,s,null)}i=m,s=y,t.multiple=!!l,i!=null?ei(t,!!l,i,!1):s!=null&&ei(t,!!l,s,!0);return;case"textarea":yt("invalid",t),m=f=l=null;for(y in s)if(s.hasOwnProperty(y)&&(R=s[y],R!=null))switch(y){case"value":l=R;break;case"defaultValue":f=R;break;case"children":m=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(a(91));break;default:Xt(t,i,y,R,s,null)}un(t,l,f,m);return;case"option":for(V in s)s.hasOwnProperty(V)&&(l=s[V],l!=null)&&(V==="selected"?t.selected=l&&typeof l!="function"&&typeof l!="symbol":Xt(t,i,V,l,s,null));return;case"dialog":yt("beforetoggle",t),yt("toggle",t),yt("cancel",t),yt("close",t);break;case"iframe":case"object":yt("load",t);break;case"video":case"audio":for(l=0;l<Jo.length;l++)yt(Jo[l],t);break;case"image":yt("error",t),yt("load",t);break;case"details":yt("toggle",t);break;case"embed":case"source":case"link":yt("error",t),yt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ie in s)if(s.hasOwnProperty(ie)&&(l=s[ie],l!=null))switch(ie){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Xt(t,i,ie,l,s,null)}return;default:if(sr(i)){for(pe in s)s.hasOwnProperty(pe)&&(l=s[pe],l!==void 0&&Nh(t,i,pe,l,s,void 0));return}}for(R in s)s.hasOwnProperty(R)&&(l=s[R],l!=null&&Xt(t,i,R,l,s,null))}function Gy(t,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,y=null,R=null,V=null,ie=null,pe=null;for(le in s){var Se=s[le];if(s.hasOwnProperty(le)&&Se!=null)switch(le){case"checked":break;case"value":break;case"defaultValue":V=Se;default:l.hasOwnProperty(le)||Xt(t,i,le,null,l,Se)}}for(var re in l){var le=l[re];if(Se=s[re],l.hasOwnProperty(re)&&(le!=null||Se!=null))switch(re){case"type":m=le;break;case"name":f=le;break;case"checked":ie=le;break;case"defaultChecked":pe=le;break;case"value":y=le;break;case"defaultValue":R=le;break;case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(a(137,i));break;default:le!==Se&&Xt(t,i,re,le,l,Se)}}Bn(t,y,R,V,ie,pe,m,f);return;case"select":le=y=R=re=null;for(m in s)if(V=s[m],s.hasOwnProperty(m)&&V!=null)switch(m){case"value":break;case"multiple":le=V;default:l.hasOwnProperty(m)||Xt(t,i,m,null,l,V)}for(f in l)if(m=l[f],V=s[f],l.hasOwnProperty(f)&&(m!=null||V!=null))switch(f){case"value":re=m;break;case"defaultValue":R=m;break;case"multiple":y=m;default:m!==V&&Xt(t,i,f,m,l,V)}i=R,s=y,l=le,re!=null?ei(t,!!s,re,!1):!!l!=!!s&&(i!=null?ei(t,!!s,i,!0):ei(t,!!s,s?[]:"",!1));return;case"textarea":le=re=null;for(R in s)if(f=s[R],s.hasOwnProperty(R)&&f!=null&&!l.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Xt(t,i,R,null,l,f)}for(y in l)if(f=l[y],m=s[y],l.hasOwnProperty(y)&&(f!=null||m!=null))switch(y){case"value":re=f;break;case"defaultValue":le=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==m&&Xt(t,i,y,f,l,m)}Pt(t,re,le);return;case"option":for(var Ge in s)re=s[Ge],s.hasOwnProperty(Ge)&&re!=null&&!l.hasOwnProperty(Ge)&&(Ge==="selected"?t.selected=!1:Xt(t,i,Ge,null,l,re));for(V in l)re=l[V],le=s[V],l.hasOwnProperty(V)&&re!==le&&(re!=null||le!=null)&&(V==="selected"?t.selected=re&&typeof re!="function"&&typeof re!="symbol":Xt(t,i,V,re,l,le));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $e in s)re=s[$e],s.hasOwnProperty($e)&&re!=null&&!l.hasOwnProperty($e)&&Xt(t,i,$e,null,l,re);for(ie in l)if(re=l[ie],le=s[ie],l.hasOwnProperty(ie)&&re!==le&&(re!=null||le!=null))switch(ie){case"children":case"dangerouslySetInnerHTML":if(re!=null)throw Error(a(137,i));break;default:Xt(t,i,ie,re,l,le)}return;default:if(sr(i)){for(var Wt in s)re=s[Wt],s.hasOwnProperty(Wt)&&re!==void 0&&!l.hasOwnProperty(Wt)&&Nh(t,i,Wt,void 0,l,re);for(pe in l)re=l[pe],le=s[pe],!l.hasOwnProperty(pe)||re===le||re===void 0&&le===void 0||Nh(t,i,pe,re,l,le);return}}for(var K in s)re=s[K],s.hasOwnProperty(K)&&re!=null&&!l.hasOwnProperty(K)&&Xt(t,i,K,null,l,re);for(Se in l)re=l[Se],le=s[Se],!l.hasOwnProperty(Se)||re===le||re==null&&le==null||Xt(t,i,Se,re,l,le)}function o_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ky(){if(typeof performance.getEntriesByType=="function"){for(var t=0,i=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var f=s[l],m=f.transferSize,y=f.initiatorType,R=f.duration;if(m&&R&&o_(y)){for(y=0,R=f.responseEnd,l+=1;l<s.length;l++){var V=s[l],ie=V.startTime;if(ie>R)break;var pe=V.transferSize,Se=V.initiatorType;pe&&o_(Se)&&(V=V.responseEnd,y+=pe*(V<R?1:(R-ie)/(V-ie)))}if(--l,i+=8*(m+y)/(f.duration/1e3),t++,10<t)break}}if(0<t)return i/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Lh=null,Uh=null;function Oc(t){return t.nodeType===9?t:t.ownerDocument}function l_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function c_(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function Oh(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Ih=null;function Xy(){var t=window.event;return t&&t.type==="popstate"?t===Ih?!1:(Ih=t,!0):(Ih=null,!1)}var u_=typeof setTimeout=="function"?setTimeout:void 0,Wy=typeof clearTimeout=="function"?clearTimeout:void 0,f_=typeof Promise=="function"?Promise:void 0,jy=typeof queueMicrotask=="function"?queueMicrotask:typeof f_<"u"?function(t){return f_.resolve(null).then(t).catch(qy)}:u_;function qy(t){setTimeout(function(){throw t})}function rs(t){return t==="head"}function h_(t,i){var s=i,l=0;do{var f=s.nextSibling;if(t.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"||s==="/&"){if(l===0){t.removeChild(f),Pr(i);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")el(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,el(s);for(var m=s.firstChild;m;){var y=m.nextSibling,R=m.nodeName;m[Ms]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&m.rel.toLowerCase()==="stylesheet"||s.removeChild(m),m=y}}else s==="body"&&el(t.ownerDocument.body);s=f}while(s);Pr(i)}function d_(t,i){var s=t;t=0;do{var l=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=l}while(s)}function Ph(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Ph(s),xo(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function Yy(t,i,s,l){for(;t.nodeType===1;){var f=s;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Ms])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(m=t.getAttribute("rel"),m==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(m!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(m=t.getAttribute("src"),(m!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===m)return t}else return t;if(t=_i(t.nextSibling),t===null)break}return null}function Ky(t,i,s){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=_i(t.nextSibling),t===null))return null;return t}function p_(t,i){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=_i(t.nextSibling),t===null))return null;return t}function Bh(t){return t.data==="$?"||t.data==="$~"}function Fh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Zy(t,i){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=i;else if(t.data!=="$?"||s.readyState!=="loading")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function _i(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return t}var zh=null;function m_(t){t=t.nextSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(i===0)return _i(t.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}t=t.nextSibling}return null}function g_(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return t;i--}else s!=="/$"&&s!=="/&"||i++}t=t.previousSibling}return null}function __(t,i,s){switch(i=Oc(s),t){case"html":if(t=i.documentElement,!t)throw Error(a(452));return t;case"head":if(t=i.head,!t)throw Error(a(453));return t;case"body":if(t=i.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function el(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);xo(t)}var vi=new Map,v_=new Set;function Ic(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ta=B.d;B.d={f:Qy,r:Jy,D:$y,C:eM,L:tM,m:nM,X:aM,S:iM,M:sM};function Qy(){var t=Ta.f(),i=Ac();return t||i}function Jy(t){var i=Ga(t);i!==null&&i.tag===5&&i.type==="form"?Ig(i):Ta.r(t)}var Ur=typeof document>"u"?null:document;function x_(t,i,s){var l=Ur;if(l&&typeof i=="string"&&i){var f=rt(i);f='link[rel="'+t+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),v_.has(f)||(v_.add(f),t={rel:t,crossOrigin:s,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),Nn(i,"link",t),X(i),l.head.appendChild(i)))}}function $y(t){Ta.D(t),x_("dns-prefetch",t,null)}function eM(t,i){Ta.C(t,i),x_("preconnect",t,i)}function tM(t,i,s){Ta.L(t,i,s);var l=Ur;if(l&&t&&i){var f='link[rel="preload"][as="'+rt(i)+'"]';i==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+rt(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+rt(s.imageSizes)+'"]')):f+='[href="'+rt(t)+'"]';var m=f;switch(i){case"style":m=Or(t);break;case"script":m=Ir(t)}vi.has(m)||(t=v({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:t,as:i},s),vi.set(m,t),l.querySelector(f)!==null||i==="style"&&l.querySelector(tl(m))||i==="script"&&l.querySelector(nl(m))||(i=l.createElement("link"),Nn(i,"link",t),X(i),l.head.appendChild(i)))}}function nM(t,i){Ta.m(t,i);var s=Ur;if(s&&t){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+rt(l)+'"][href="'+rt(t)+'"]',m=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Ir(t)}if(!vi.has(m)&&(t=v({rel:"modulepreload",href:t},i),vi.set(m,t),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(nl(m)))return}l=s.createElement("link"),Nn(l,"link",t),X(l),s.head.appendChild(l)}}}function iM(t,i,s){Ta.S(t,i,s);var l=Ur;if(l&&t){var f=C(l).hoistableStyles,m=Or(t);i=i||"default";var y=f.get(m);if(!y){var R={loading:0,preload:null};if(y=l.querySelector(tl(m)))R.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":i},s),(s=vi.get(m))&&Hh(t,s);var V=y=l.createElement("link");X(V),Nn(V,"link",t),V._p=new Promise(function(ie,pe){V.onload=ie,V.onerror=pe}),V.addEventListener("load",function(){R.loading|=1}),V.addEventListener("error",function(){R.loading|=2}),R.loading|=4,Pc(y,i,l)}y={type:"stylesheet",instance:y,count:1,state:R},f.set(m,y)}}}function aM(t,i){Ta.X(t,i);var s=Ur;if(s&&t){var l=C(s).hoistableScripts,f=Ir(t),m=l.get(f);m||(m=s.querySelector(nl(f)),m||(t=v({src:t,async:!0},i),(i=vi.get(f))&&Vh(t,i),m=s.createElement("script"),X(m),Nn(m,"link",t),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function sM(t,i){Ta.M(t,i);var s=Ur;if(s&&t){var l=C(s).hoistableScripts,f=Ir(t),m=l.get(f);m||(m=s.querySelector(nl(f)),m||(t=v({src:t,async:!0,type:"module"},i),(i=vi.get(f))&&Vh(t,i),m=s.createElement("script"),X(m),Nn(m,"link",t),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function S_(t,i,s,l){var f=(f=ne.current)?Ic(f):null;if(!f)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=Or(s.href),s=C(f).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=Or(s.href);var m=C(f).hoistableStyles,y=m.get(t);if(y||(f=f.ownerDocument||f,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(t,y),(m=f.querySelector(tl(t)))&&!m._p&&(y.instance=m,y.state.loading=5),vi.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},vi.set(t,s),m||rM(f,t,s,y.state))),i&&l===null)throw Error(a(528,""));return y}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Ir(s),s=C(f).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function Or(t){return'href="'+rt(t)+'"'}function tl(t){return'link[rel="stylesheet"]['+t+"]"}function y_(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function rM(t,i,s,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Nn(i,"link",s),X(i),t.head.appendChild(i))}function Ir(t){return'[src="'+rt(t)+'"]'}function nl(t){return"script[async]"+t}function M_(t,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+rt(s.href)+'"]');if(l)return i.instance=l,X(l),l;var f=v({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),X(l),Nn(l,"style",f),Pc(l,s.precedence,t),i.instance=l;case"stylesheet":f=Or(s.href);var m=t.querySelector(tl(f));if(m)return i.state.loading|=4,i.instance=m,X(m),m;l=y_(s),(f=vi.get(f))&&Hh(l,f),m=(t.ownerDocument||t).createElement("link"),X(m);var y=m;return y._p=new Promise(function(R,V){y.onload=R,y.onerror=V}),Nn(m,"link",l),i.state.loading|=4,Pc(m,s.precedence,t),i.instance=m;case"script":return m=Ir(s.src),(f=t.querySelector(nl(m)))?(i.instance=f,X(f),f):(l=s,(f=vi.get(m))&&(l=v({},s),Vh(l,f)),t=t.ownerDocument||t,f=t.createElement("script"),X(f),Nn(f,"link",l),t.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Pc(l,s.precedence,t));return i.instance}function Pc(t,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,m=f,y=0;y<l.length;y++){var R=l[y];if(R.dataset.precedence===i)m=R;else if(m!==f)break}m?m.parentNode.insertBefore(t,m.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(t,i.firstChild))}function Hh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function Vh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var Bc=null;function E_(t,i,s){if(Bc===null){var l=new Map,f=Bc=new Map;f.set(s,l)}else f=Bc,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),f=0;f<s.length;f++){var m=s[f];if(!(m[Ms]||m[cn]||t==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var y=m.getAttribute(i)||"";y=t+y;var R=l.get(y);R?R.push(m):l.set(y,[m])}}return l}function b_(t,i,s){t=t.ownerDocument||t,t.head.insertBefore(s,i==="title"?t.querySelector("head > title"):null)}function oM(t,i,s){if(s===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;return i.rel==="stylesheet"?(t=i.disabled,typeof i.precedence=="string"&&t==null):!0;case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function T_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function lM(t,i,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=Or(l.href),m=i.querySelector(tl(f));if(m){i=m._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(t.count++,t=Fc.bind(t),i.then(t,t)),s.state.loading|=4,s.instance=m,X(m);return}m=i.ownerDocument||i,l=y_(l),(f=vi.get(f))&&Hh(l,f),m=m.createElement("link"),X(m);var y=m;y._p=new Promise(function(R,V){y.onload=R,y.onerror=V}),Nn(m,"link",l),s.instance=m}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=Fc.bind(t),i.addEventListener("load",s),i.addEventListener("error",s))}}var Gh=0;function cM(t,i){return t.stylesheets&&t.count===0&&Hc(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var l=setTimeout(function(){if(t.stylesheets&&Hc(t,t.stylesheets),t.unsuspend){var m=t.unsuspend;t.unsuspend=null,m()}},6e4+i);0<t.imgBytes&&Gh===0&&(Gh=62500*ky());var f=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Hc(t,t.stylesheets),t.unsuspend)){var m=t.unsuspend;t.unsuspend=null,m()}},(t.imgBytes>Gh?50:800)+i);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function Fc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Hc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var zc=null;function Hc(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,zc=new Map,i.forEach(uM,t),zc=null,Fc.call(t))}function uM(t,i){if(!(i.state.loading&4)){var s=zc.get(t);if(s)var l=s.get(null);else{s=new Map,zc.set(t,s);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var y=f[m];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(s.set(y.dataset.precedence,y),l=y)}l&&s.set(null,l)}f=i.instance,y=f.getAttribute("data-precedence"),m=s.get(y)||l,m===l&&s.set(null,f),s.set(y,f),this.count++,l=Fc.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),m?m.parentNode.insertBefore(f,m.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),i.state.loading|=4}}var il={$$typeof:N,Provider:null,Consumer:null,_currentValue:ce,_currentValue2:ce,_threadCount:0};function fM(t,i,s,l,f,m,y,R,V){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=wt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wt(0),this.hiddenUpdates=wt(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function A_(t,i,s,l,f,m,y,R,V,ie,pe,Se){return t=new fM(t,i,s,y,V,ie,pe,Se,R),i=1,m===!0&&(i|=24),m=ni(3,null,null,i),t.current=m,m.stateNode=t,i=yf(),i.refCount++,t.pooledCache=i,i.refCount++,m.memoizedState={element:l,isDehydrated:s,cache:i},Tf(m),t}function R_(t){return t?(t=hr,t):hr}function C_(t,i,s,l,f,m){f=R_(f),l.context===null?l.context=f:l.pendingContext=f,l=Ka(i),l.payload={element:s},m=m===void 0?null:m,m!==null&&(l.callback=m),s=Za(t,l,i),s!==null&&(Zn(s,t,i),Io(s,t,i))}function w_(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function kh(t,i){w_(t,i),(t=t.alternate)&&w_(t,i)}function D_(t){if(t.tag===13||t.tag===31){var i=Rs(t,67108864);i!==null&&Zn(i,t,67108864),kh(t,67108864)}}function N_(t){if(t.tag===13||t.tag===31){var i=oi();i=nr(i);var s=Rs(t,i);s!==null&&Zn(s,t,i),kh(t,i)}}var Vc=!0;function hM(t,i,s,l){var f=I.T;I.T=null;var m=B.p;try{B.p=2,Xh(t,i,s,l)}finally{B.p=m,I.T=f}}function dM(t,i,s,l){var f=I.T;I.T=null;var m=B.p;try{B.p=8,Xh(t,i,s,l)}finally{B.p=m,I.T=f}}function Xh(t,i,s,l){if(Vc){var f=Wh(l);if(f===null)Dh(t,i,l,Gc,s),U_(t,l);else if(mM(f,t,i,s,l))l.stopPropagation();else if(U_(t,l),i&4&&-1<pM.indexOf(t)){for(;f!==null;){var m=Ga(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var y=Ee(m.pendingLanes);if(y!==0){var R=m;for(R.pendingLanes|=2,R.entangledLanes|=2;y;){var V=1<<31-Oe(y);R.entanglements[1]|=V,y&=~V}ji(m),(Ot&6)===0&&(bc=b()+500,Qo(0))}}break;case 31:case 13:R=Rs(m,2),R!==null&&Zn(R,m,2),Ac(),kh(m,2)}if(m=Wh(l),m===null&&Dh(t,i,l,Gc,s),m===f)break;f=m}f!==null&&l.stopPropagation()}else Dh(t,i,l,null,s)}}function Wh(t){return t=ju(t),jh(t)}var Gc=null;function jh(t){if(Gc=null,t=Va(t),t!==null){var i=c(t);if(i===null)t=null;else{var s=i.tag;if(s===13){if(t=u(i),t!==null)return t;t=null}else if(s===31){if(t=d(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return Gc=t,null}function L_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(q()){case me:return 2;case ye:return 8;case de:case Xe:return 32;case we:return 268435456;default:return 32}default:return 32}}var qh=!1,os=null,ls=null,cs=null,al=new Map,sl=new Map,us=[],pM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function U_(t,i){switch(t){case"focusin":case"focusout":os=null;break;case"dragenter":case"dragleave":ls=null;break;case"mouseover":case"mouseout":cs=null;break;case"pointerover":case"pointerout":al.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":sl.delete(i.pointerId)}}function rl(t,i,s,l,f,m){return t===null||t.nativeEvent!==m?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:m,targetContainers:[f]},i!==null&&(i=Ga(i),i!==null&&D_(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function mM(t,i,s,l,f){switch(i){case"focusin":return os=rl(os,t,i,s,l,f),!0;case"dragenter":return ls=rl(ls,t,i,s,l,f),!0;case"mouseover":return cs=rl(cs,t,i,s,l,f),!0;case"pointerover":var m=f.pointerId;return al.set(m,rl(al.get(m)||null,t,i,s,l,f)),!0;case"gotpointercapture":return m=f.pointerId,sl.set(m,rl(sl.get(m)||null,t,i,s,l,f)),!0}return!1}function O_(t){var i=Va(t.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=u(s),i!==null){t.blockedOn=i,ar(t.priority,function(){N_(s)});return}}else if(i===31){if(i=d(s),i!==null){t.blockedOn=i,ar(t.priority,function(){N_(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function kc(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=Wh(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);Wu=l,s.target.dispatchEvent(l),Wu=null}else return i=Ga(s),i!==null&&D_(i),t.blockedOn=s,!1;i.shift()}return!0}function I_(t,i,s){kc(t)&&s.delete(i)}function gM(){qh=!1,os!==null&&kc(os)&&(os=null),ls!==null&&kc(ls)&&(ls=null),cs!==null&&kc(cs)&&(cs=null),al.forEach(I_),sl.forEach(I_)}function Xc(t,i){t.blockedOn===i&&(t.blockedOn=null,qh||(qh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,gM)))}var Wc=null;function P_(t){Wc!==t&&(Wc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Wc===t&&(Wc=null);for(var i=0;i<t.length;i+=3){var s=t[i],l=t[i+1],f=t[i+2];if(typeof l!="function"){if(jh(l||s)===null)continue;break}var m=Ga(s);m!==null&&(t.splice(i,3),i-=3,Wf(m,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function Pr(t){function i(V){return Xc(V,t)}os!==null&&Xc(os,t),ls!==null&&Xc(ls,t),cs!==null&&Xc(cs,t),al.forEach(i),sl.forEach(i);for(var s=0;s<us.length;s++){var l=us[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<us.length&&(s=us[0],s.blockedOn===null);)O_(s),s.blockedOn===null&&us.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],m=s[l+1],y=f[_n]||null;if(typeof m=="function")y||P_(s);else if(y){var R=null;if(m&&m.hasAttribute("formAction")){if(f=m,y=m[_n]||null)R=y.formAction;else if(jh(f)!==null)continue}else R=y.action;typeof R=="function"?s[l+1]=R:(s.splice(l,3),l-=3),P_(s)}}}function B_(){function t(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(y){return f=y})},focusReset:"manual",scroll:"manual"})}function i(){f!==null&&(f(),f=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),f!==null&&(f(),f=null)}}}function Yh(t){this._internalRoot=t}jc.prototype.render=Yh.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,l=oi();C_(s,l,t,i,null,null)},jc.prototype.unmount=Yh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;C_(t.current,2,null,t,null,null),Ac(),i[oa]=null}};function jc(t){this._internalRoot=t}jc.prototype.unstable_scheduleHydration=function(t){if(t){var i=Gi();t={blockedOn:null,target:t,priority:i};for(var s=0;s<us.length&&i!==0&&i<us[s].priority;s++);us.splice(s,0,t),s===0&&O_(t)}};var F_=e.version;if(F_!=="19.2.4")throw Error(a(527,F_,"19.2.4"));B.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=h(i),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var _M={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qc.isDisabled&&qc.supportsFiber)try{Te=qc.inject(_M),Me=qc}catch{}}return ll.createRoot=function(t,i){if(!o(t))throw Error(a(299));var s=!1,l="",f=Wg,m=jg,y=qg;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(y=i.onRecoverableError)),i=A_(t,1,!1,null,null,s,l,null,f,m,y,B_),t[oa]=i.current,wh(t),new Yh(i)},ll.hydrateRoot=function(t,i,s){if(!o(t))throw Error(a(299));var l=!1,f="",m=Wg,y=jg,R=qg,V=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(m=s.onUncaughtError),s.onCaughtError!==void 0&&(y=s.onCaughtError),s.onRecoverableError!==void 0&&(R=s.onRecoverableError),s.formState!==void 0&&(V=s.formState)),i=A_(t,1,!0,i,s??null,l,f,V,m,y,R,B_),i.context=R_(null),s=i.current,l=oi(),l=nr(l),f=Ka(l),f.callback=null,Za(s,f,l),s=l,i.current.lanes=s,In(i,s),ji(i),t[oa]=i.current,wh(t),new jc(i)},ll.version="19.2.4",ll}var Y_;function CM(){if(Y_)return Qh.exports;Y_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Qh.exports=RM(),Qh.exports}var wM=CM(),Mx={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},K_=$s.createContext&&$s.createContext(Mx),DM=["attr","size","title"];function NM(r,e){if(r==null)return{};var n=LM(r,e),a,o;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(r);for(o=0;o<c.length;o++)a=c[o],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(r,a)&&(n[a]=r[a])}return n}function LM(r,e){if(r==null)return{};var n={};for(var a in r)if(Object.prototype.hasOwnProperty.call(r,a)){if(e.indexOf(a)>=0)continue;n[a]=r[a]}return n}function Lu(){return Lu=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a])}return r},Lu.apply(this,arguments)}function Z_(r,e){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);e&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable})),n.push.apply(n,a)}return n}function Uu(r){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Z_(Object(n),!0).forEach(function(a){UM(r,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):Z_(Object(n)).forEach(function(a){Object.defineProperty(r,a,Object.getOwnPropertyDescriptor(n,a))})}return r}function UM(r,e,n){return e=OM(e),e in r?Object.defineProperty(r,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[e]=n,r}function OM(r){var e=IM(r,"string");return typeof e=="symbol"?e:e+""}function IM(r,e){if(typeof r!="object"||!r)return r;var n=r[Symbol.toPrimitive];if(n!==void 0){var a=n.call(r,e);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(r)}function Ex(r){return r&&r.map((e,n)=>$s.createElement(e.tag,Uu({key:n},e.attr),Ex(e.child)))}function ys(r){return e=>$s.createElement(PM,Lu({attr:Uu({},r.attr)},e),Ex(r.child))}function PM(r){var e=n=>{var{attr:a,size:o,title:c}=r,u=NM(r,DM),d=o||n.size||"1em",p;return n.className&&(p=n.className),r.className&&(p=(p?p+" ":"")+r.className),$s.createElement("svg",Lu({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,a,u,{className:p,style:Uu(Uu({color:r.color||n.color},n.style),r.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),c&&$s.createElement("title",null,c),r.children)};return K_!==void 0?$s.createElement(K_.Consumer,null,n=>e(n)):e(Mx)}function Yc(r){return ys({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M278.6 256l68.2-68.2c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-68.2-68.2c-6.2-6.2-16.4-6.2-22.6 0-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3l68.2 68.2-68.2 68.2c-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3 6.2 6.2 16.4 6.2 22.6 0l68.2-68.2 68.2 68.2c6.2 6.2 16.4 6.2 22.6 0 6.2-6.2 6.2-16.4 0-22.6L278.6 256z"},child:[]}]})(r)}function Q_(r){return ys({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M235.4 172.2c0-11.4 9.3-19.9 20.5-19.9 11.4 0 20.7 8.5 20.7 19.9s-9.3 20-20.7 20c-11.2 0-20.5-8.6-20.5-20zm1.4 35.7H275V352h-38.2V207.9z"},child:[]},{tag:"path",attr:{d:"M256 76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256s-18.7 93.3-52.7 127.3S304.1 436 256 436c-48.1 0-93.3-18.7-127.3-52.7S76 304.1 76 256s18.7-93.3 52.7-127.3S207.9 76 256 76m0-28C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z"},child:[]}]})(r)}function Kc(r){return ys({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M427 234.625H167.296l119.702-119.702L256 85 85 256l171 171 29.922-29.924-118.626-119.701H427v-42.75z"},child:[]}]})(r)}function td(r){return ys({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M271.653 1023.192c-8.685 0-17.573-3.432-24.238-10.097-13.33-13.33-13.33-35.144 0-48.474L703.67 508.163 254.08 58.573c-13.33-13.331-13.33-35.145 0-48.475 13.33-13.33 35.143-13.33 48.473 0L776.38 483.925c13.33 13.33 13.33 35.143 0 48.473l-480.492 480.694c-6.665 6.665-15.551 10.099-24.236 10.099z"},child:[]}]})(r)}function BM(r){return ys({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M7 3H4v3H2V1h5v2zm15 3V1h-5v2h3v3h2zM7 21H4v-3H2v5h5v-2zm13-3v3h-3v2h5v-5h-2zM17 6H7v12h10V6zm2 12c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v12zM15 8H9v2h6V8zm0 3H9v2h6v-2zm0 3H9v2h6v-2z"},child:[]}]})(r)}function bx(r){return ys({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M637 443H519V309c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v134H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h118v134c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V519h118c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z"},child:[]}]})(r)}function Tx(r){return ys({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2"},child:[]},{tag:"path",attr:{d:"m15.194 13.707 3.814 1.86-1.86 3.814"},child:[]},{tag:"path",attr:{d:"M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4"},child:[]}]})(r)}const Vd="/ikea-app/assets/ivarTestImage-A2Z6Yf8m.jpg",FM="/ikea-app/assets/component1-kuXqTHn6.jpg",zM="/ikea-app/assets/component2-DG1klOzY.jpg",HM="/ikea-app/assets/component3-g7WB6RF8.jpg",VM="/ikea-app/assets/component4-Cz9MzZz_.jpg",GM="/ikea-app/assets/component5-DNw_IANQ.jpg",kM="/ikea-app/assets/component6-DS3lNLYd.jpg",XM="/ikea-app/assets/component7-DFRRQvm6.jpg",WM="/ikea-app/assets/component8-DeItXErp.jpg",jM="/ikea-app/assets/component9-DaeQIKXg.jpg",qM="/ikea-app/assets/component10-DUUOy2k2.jpg",YM="/ikea-app/assets/component11-D7C6OA4o.jpg",KM="/ikea-app/assets/component12-BNa_YTto.jpg",ZM="/ikea-app/assets/component13-BHYqv8HH.jpg",QM="/ikea-app/assets/component14-1LvwDEVG.jpg",JM="/ikea-app/assets/component15-CSJzn0OP.jpg";function $M({onZoom:r,onZoomOverlay:e,on3dOverlay:n}){return Y.jsxs("main",{children:[Y.jsxs("div",{className:"mainTopSection",children:[Y.jsx("div",{className:"mainImageContainer",children:Y.jsx("img",{src:Vd,alt:"Ivar the Boneless"})}),Y.jsxs("div",{className:"mainButtonsContainer",children:[Y.jsx("button",{className:"zoomButton",onClick:()=>{r(Vd),e("zoomIn")},children:Y.jsx(bx,{})}),Y.jsxs("button",{className:"rotateButton",onClick:()=>n("view3D"),children:[Y.jsx(Tx,{}),Y.jsx("p",{children:"Visa i 3D"})]})]})]}),Y.jsxs("div",{className:"componentsContainer",children:[Y.jsxs("div",{className:"component",children:[Y.jsx("div",{className:"componentImageContainer",children:Y.jsx("img",{src:FM,alt:"Ivar the Boneless"})}),Y.jsx("p",{children:"8X"})]}),Y.jsxs("div",{className:"component",children:[Y.jsx("div",{className:"componentImageContainer",children:Y.jsx("img",{src:zM,alt:"Ivar the Boneless"})}),Y.jsx("p",{children:"8X"})]}),Y.jsxs("div",{className:"component",children:[Y.jsx("div",{className:"componentImageContainer",children:Y.jsx("img",{src:HM,alt:"Ivar the Boneless"})}),Y.jsx("p",{children:"10X"})]}),Y.jsxs("div",{className:"component",children:[Y.jsx("div",{className:"componentImageContainer",children:Y.jsx("img",{src:VM,alt:"Ivar the Boneless"})}),Y.jsx("p",{children:"16X"})]}),Y.jsxs("div",{className:"component",children:[Y.jsx("div",{className:"componentImageContainer",children:Y.jsx("img",{src:GM,alt:"Ivar the Boneless"})}),Y.jsx("p",{children:"4X"})]}),Y.jsxs("div",{className:"component",children:[Y.jsx("div",{className:"componentImageContainer",children:Y.jsx("img",{src:kM,alt:"Ivar the Boneless"})}),Y.jsx("p",{children:"1X"})]}),Y.jsxs("div",{className:"component",children:[Y.jsx("div",{className:"componentImageContainer",children:Y.jsx("img",{src:XM,alt:"Ivar the Boneless"})}),Y.jsx("p",{children:"2X"})]}),Y.jsxs("div",{className:"component",children:[Y.jsx("div",{className:"componentImageContainer",children:Y.jsx("img",{src:WM,alt:"Ivar the Boneless"})}),Y.jsx("p",{children:"2X"})]}),Y.jsxs("div",{className:"component",children:[Y.jsx("div",{className:"componentImageContainer",children:Y.jsx("img",{src:jM,alt:"Ivar the Boneless"})}),Y.jsx("p",{children:"4X"})]}),Y.jsxs("div",{className:"component",children:[Y.jsx("div",{className:"componentImageContainer",children:Y.jsx("img",{src:qM,alt:"Ivar the Boneless"})}),Y.jsx("p",{children:"4X"})]}),Y.jsxs("div",{className:"component",children:[Y.jsx("div",{className:"componentImageContainer",children:Y.jsx("img",{src:YM,alt:"Ivar the Boneless"})}),Y.jsx("p",{children:"6X"})]}),Y.jsxs("div",{className:"component",children:[Y.jsx("div",{className:"componentImageContainer",children:Y.jsx("img",{src:KM,alt:"Ivar the Boneless"})}),Y.jsx("p",{children:"6X"})]}),Y.jsxs("div",{className:"component wide",children:[Y.jsx("div",{className:"componentImageContainer",children:Y.jsx("img",{src:ZM,alt:"Ivar the Boneless"})}),Y.jsx("p",{children:"4X"})]}),Y.jsxs("div",{className:"component",children:[Y.jsx("div",{className:"componentImageContainer",children:Y.jsx("img",{src:QM,alt:"Ivar the Boneless"})}),Y.jsx("p",{children:"2"})]}),Y.jsxs("div",{className:"component",children:[Y.jsx("div",{className:"componentImageContainer",children:Y.jsx("img",{src:JM,alt:"Ivar the Boneless"})}),Y.jsx("p",{children:"4X"})]})]})]})}const Gd="/ikea-app/assets/ivarBuildImage3-DJCjawbu.jpg";function eE({onZoom:r,onZoomOverlay:e}){return Y.jsxs("main",{children:[Y.jsxs("div",{className:"mainTopSection",children:[Y.jsx("div",{className:"mainImageContainer",children:Y.jsx("img",{src:Gd,alt:"Ivar the Boneless"})}),Y.jsxs("div",{className:"mainButtonsContainer",children:[Y.jsx("button",{className:"zoomButton",onClick:()=>{r(Gd),e("zoomIn")},children:Y.jsx(bx,{})}),Y.jsxs("button",{className:"rotateButton",children:[Y.jsx(Tx,{}),Y.jsx("p",{children:"Visa i 3D"})]})]})]}),Y.jsx("div",{className:"componentsContainer",children:Y.jsxs("div",{className:"component",children:[Y.jsx("div",{className:"componentImageContainer",children:Y.jsx("img",{src:Vd,alt:"Ivar the Boneless"})}),Y.jsx("p",{children:"8X"})]})})]})}function tE(){const r=Bi.useRef(null),e=Bi.useRef(null);return Bi.useEffect(()=>{const n=r.current,a=e.current;let o=0,c=1,u=0,d=0,p=0,h=0;function g(T){const M=T[0].clientX-T[1].clientX,S=T[0].clientY-T[1].clientY;return Math.sqrt(M*M+S*S)}function v(){const T=n.getBoundingClientRect(),M=a.offsetWidth*c,S=a.offsetHeight*c,w=Math.max(0,(M-T.width)/1.5),N=Math.max(0,S-T.height/1.5);p=Math.min(w,Math.max(-w,p)),h=Math.min(N,Math.max(-N,h))}function _(){v(),a.style.transform=`translate(${p}px, ${h}px) scale(${c})`}function x(T){T.touches.length===2&&(o=g(T.touches)),T.touches.length===1&&(u=T.touches[0].clientX-p,d=T.touches[0].clientY-h)}function E(T){if(T.touches.length===2){T.preventDefault();const M=g(T.touches),S=M/o;c=Math.min(Math.max(1,c*S),5),o=M,_()}T.touches.length===1&&c>1&&(p=T.touches[0].clientX-u,h=T.touches[0].clientY-d,_())}return n.addEventListener("touchstart",x),n.addEventListener("touchmove",E),()=>{n.removeEventListener("touchstart",x),n.removeEventListener("touchmove",E)}},[]),Y.jsx("div",{className:"zoomInContainer",ref:r,children:Y.jsx("img",{ref:e,src:Gd,className:"zoomImage"})})}const zp="183",nE=0,J_=1,iE=2,bu=1,Ax=2,xl=3,Pa=0,Qn=1,Qi=2,Oa=0,$r=1,$_=2,ev=3,tv=4,aE=5,Ys=100,sE=101,rE=102,oE=103,lE=104,cE=200,uE=201,fE=202,hE=203,kd=204,Xd=205,dE=206,pE=207,mE=208,gE=209,_E=210,vE=211,xE=212,SE=213,yE=214,Wd=0,jd=1,qd=2,no=3,Yd=4,Kd=5,Zd=6,Qd=7,Rx=0,ME=1,EE=2,ea=0,Cx=1,wx=2,Dx=3,Hp=4,Nx=5,Lx=6,Ux=7,nv="attached",bE="detached",Ox=300,er=301,io=302,nd=303,id=304,Hu=306,ao=1e3,Ji=1001,Ou=1002,Sn=1003,Ix=1004,Sl=1005,yn=1006,Tu=1007,La=1008,ui=1009,Px=1010,Bx=1011,Tl=1012,Vp=1013,na=1014,yi=1015,Ba=1016,Gp=1017,kp=1018,Al=1020,Fx=35902,zx=35899,Hx=1021,Vx=1022,Mi=1023,Fa=1026,Zs=1027,Xp=1028,Wp=1029,so=1030,jp=1031,qp=1033,Au=33776,Ru=33777,Cu=33778,wu=33779,Jd=35840,$d=35841,ep=35842,tp=35843,np=36196,ip=37492,ap=37496,sp=37488,rp=37489,op=37490,lp=37491,cp=37808,up=37809,fp=37810,hp=37811,dp=37812,pp=37813,mp=37814,gp=37815,_p=37816,vp=37817,xp=37818,Sp=37819,yp=37820,Mp=37821,Ep=36492,bp=36494,Tp=36495,Ap=36283,Rp=36284,Cp=36285,wp=36286,Rl=2300,Cl=2301,ad=2302,iv=2303,av=2400,sv=2401,rv=2402,TE=2500,AE=0,Gx=1,Dp=2,RE=3200,kx=0,CE=1,xs="",An="srgb",Xn="srgb-linear",Iu="linear",Ht="srgb",Br=7680,ov=519,wE=512,DE=513,NE=514,Yp=515,LE=516,UE=517,Kp=518,OE=519,Np=35044,lv="300 es",$i=2e3,wl=2001;function IE(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function PE(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Dl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function BE(){const r=Dl("canvas");return r.style.display="block",r}const cv={};function Pu(...r){const e="THREE."+r.shift();console.log(e,...r)}function Xx(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=r[1];n&&n.isStackTrace?r[0]+=" "+n.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Ze(...r){r=Xx(r);const e="THREE."+r.shift();{const n=r[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...r)}}function nt(...r){r=Xx(r);const e="THREE."+r.shift();{const n=r[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...r)}}function Bu(...r){const e=r.join(" ");e in cv||(cv[e]=!0,Ze(...r))}function FE(r,e,n){return new Promise(function(a,o){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:a()}}setTimeout(c,n)})}const zE={[Wd]:jd,[qd]:Zd,[Yd]:Qd,[no]:Kd,[jd]:Wd,[Zd]:qd,[Qd]:Yd,[Kd]:no};class fo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(n)===-1&&a[e].push(n)}hasEventListener(e,n){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(n)!==-1}removeEventListener(e,n){const a=this._listeners;if(a===void 0)return;const o=a[e];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const a=n[e.type];if(a!==void 0){e.target=this;const o=a.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,e);e.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let uv=1234567;const Ml=Math.PI/180,ro=180/Math.PI;function Fi(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Un[r&255]+Un[r>>8&255]+Un[r>>16&255]+Un[r>>24&255]+"-"+Un[e&255]+Un[e>>8&255]+"-"+Un[e>>16&15|64]+Un[e>>24&255]+"-"+Un[n&63|128]+Un[n>>8&255]+"-"+Un[n>>16&255]+Un[n>>24&255]+Un[a&255]+Un[a>>8&255]+Un[a>>16&255]+Un[a>>24&255]).toLowerCase()}function _t(r,e,n){return Math.max(e,Math.min(n,r))}function Zp(r,e){return(r%e+e)%e}function HE(r,e,n,a,o){return a+(r-e)*(o-a)/(n-e)}function VE(r,e,n){return r!==e?(n-r)/(e-r):0}function El(r,e,n){return(1-n)*r+n*e}function GE(r,e,n,a){return El(r,e,1-Math.exp(-n*a))}function kE(r,e=1){return e-Math.abs(Zp(r,e*2)-e)}function XE(r,e,n){return r<=e?0:r>=n?1:(r=(r-e)/(n-e),r*r*(3-2*r))}function WE(r,e,n){return r<=e?0:r>=n?1:(r=(r-e)/(n-e),r*r*r*(r*(r*6-15)+10))}function jE(r,e){return r+Math.floor(Math.random()*(e-r+1))}function qE(r,e){return r+Math.random()*(e-r)}function YE(r){return r*(.5-Math.random())}function KE(r){r!==void 0&&(uv=r);let e=uv+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ZE(r){return r*Ml}function QE(r){return r*ro}function JE(r){return(r&r-1)===0&&r!==0}function $E(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function eb(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function tb(r,e,n,a,o){const c=Math.cos,u=Math.sin,d=c(n/2),p=u(n/2),h=c((e+a)/2),g=u((e+a)/2),v=c((e-a)/2),_=u((e-a)/2),x=c((a-e)/2),E=u((a-e)/2);switch(o){case"XYX":r.set(d*g,p*v,p*_,d*h);break;case"YZY":r.set(p*_,d*g,p*v,d*h);break;case"ZXZ":r.set(p*v,p*_,d*g,d*h);break;case"XZX":r.set(d*g,p*E,p*x,d*h);break;case"YXY":r.set(p*x,d*g,p*E,d*h);break;case"ZYZ":r.set(p*E,p*x,d*g,d*h);break;default:Ze("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Ii(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Vt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const nb={DEG2RAD:Ml,RAD2DEG:ro,generateUUID:Fi,clamp:_t,euclideanModulo:Zp,mapLinear:HE,inverseLerp:VE,lerp:El,damp:GE,pingpong:kE,smoothstep:XE,smootherstep:WE,randInt:jE,randFloat:qE,randFloatSpread:YE,seededRandom:KE,degToRad:ZE,radToDeg:QE,isPowerOfTwo:JE,ceilPowerOfTwo:$E,floorPowerOfTwo:eb,setQuaternionFromProperEuler:tb,normalize:Vt,denormalize:Ii};class Ct{constructor(e=0,n=0){Ct.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,a=this.y,o=e.elements;return this.x=o[0]*n+o[3]*a+o[6],this.y=o[1]*n+o[4]*a+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=_t(this.x,e.x,n.x),this.y=_t(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=_t(this.x,e,n),this.y=_t(this.y,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(_t(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(_t(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y;return n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const a=Math.cos(n),o=Math.sin(n),c=this.x-e.x,u=this.y-e.y;return this.x=c*a-u*o+e.x,this.y=c*o+u*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class za{constructor(e=0,n=0,a=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=a,this._w=o}static slerpFlat(e,n,a,o,c,u,d){let p=a[o+0],h=a[o+1],g=a[o+2],v=a[o+3],_=c[u+0],x=c[u+1],E=c[u+2],T=c[u+3];if(v!==T||p!==_||h!==x||g!==E){let M=p*_+h*x+g*E+v*T;M<0&&(_=-_,x=-x,E=-E,T=-T,M=-M);let S=1-d;if(M<.9995){const w=Math.acos(M),N=Math.sin(w);S=Math.sin(S*w)/N,d=Math.sin(d*w)/N,p=p*S+_*d,h=h*S+x*d,g=g*S+E*d,v=v*S+T*d}else{p=p*S+_*d,h=h*S+x*d,g=g*S+E*d,v=v*S+T*d;const w=1/Math.sqrt(p*p+h*h+g*g+v*v);p*=w,h*=w,g*=w,v*=w}}e[n]=p,e[n+1]=h,e[n+2]=g,e[n+3]=v}static multiplyQuaternionsFlat(e,n,a,o,c,u){const d=a[o],p=a[o+1],h=a[o+2],g=a[o+3],v=c[u],_=c[u+1],x=c[u+2],E=c[u+3];return e[n]=d*E+g*v+p*x-h*_,e[n+1]=p*E+g*_+h*v-d*x,e[n+2]=h*E+g*x+d*_-p*v,e[n+3]=g*E-d*v-p*_-h*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,a,o){return this._x=e,this._y=n,this._z=a,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const a=e._x,o=e._y,c=e._z,u=e._order,d=Math.cos,p=Math.sin,h=d(a/2),g=d(o/2),v=d(c/2),_=p(a/2),x=p(o/2),E=p(c/2);switch(u){case"XYZ":this._x=_*g*v+h*x*E,this._y=h*x*v-_*g*E,this._z=h*g*E+_*x*v,this._w=h*g*v-_*x*E;break;case"YXZ":this._x=_*g*v+h*x*E,this._y=h*x*v-_*g*E,this._z=h*g*E-_*x*v,this._w=h*g*v+_*x*E;break;case"ZXY":this._x=_*g*v-h*x*E,this._y=h*x*v+_*g*E,this._z=h*g*E+_*x*v,this._w=h*g*v-_*x*E;break;case"ZYX":this._x=_*g*v-h*x*E,this._y=h*x*v+_*g*E,this._z=h*g*E-_*x*v,this._w=h*g*v+_*x*E;break;case"YZX":this._x=_*g*v+h*x*E,this._y=h*x*v+_*g*E,this._z=h*g*E-_*x*v,this._w=h*g*v-_*x*E;break;case"XZY":this._x=_*g*v-h*x*E,this._y=h*x*v-_*g*E,this._z=h*g*E+_*x*v,this._w=h*g*v+_*x*E;break;default:Ze("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const a=n/2,o=Math.sin(a);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,a=n[0],o=n[4],c=n[8],u=n[1],d=n[5],p=n[9],h=n[2],g=n[6],v=n[10],_=a+d+v;if(_>0){const x=.5/Math.sqrt(_+1);this._w=.25/x,this._x=(g-p)*x,this._y=(c-h)*x,this._z=(u-o)*x}else if(a>d&&a>v){const x=2*Math.sqrt(1+a-d-v);this._w=(g-p)/x,this._x=.25*x,this._y=(o+u)/x,this._z=(c+h)/x}else if(d>v){const x=2*Math.sqrt(1+d-a-v);this._w=(c-h)/x,this._x=(o+u)/x,this._y=.25*x,this._z=(p+g)/x}else{const x=2*Math.sqrt(1+v-a-d);this._w=(u-o)/x,this._x=(c+h)/x,this._y=(p+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let a=e.dot(n)+1;return a<1e-8?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,n){const a=this.angleTo(e);if(a===0)return this;const o=Math.min(1,n/a);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const a=e._x,o=e._y,c=e._z,u=e._w,d=n._x,p=n._y,h=n._z,g=n._w;return this._x=a*g+u*d+o*h-c*p,this._y=o*g+u*p+c*d-a*h,this._z=c*g+u*h+a*p-o*d,this._w=u*g-a*d-o*p-c*h,this._onChangeCallback(),this}slerp(e,n){let a=e._x,o=e._y,c=e._z,u=e._w,d=this.dot(e);d<0&&(a=-a,o=-o,c=-c,u=-u,d=-d);let p=1-n;if(d<.9995){const h=Math.acos(d),g=Math.sin(h);p=Math.sin(p*h)/g,n=Math.sin(n*h)/g,this._x=this._x*p+a*n,this._y=this._y*p+o*n,this._z=this._z*p+c*n,this._w=this._w*p+u*n,this._onChangeCallback()}else this._x=this._x*p+a*n,this._y=this._y*p+o*n,this._z=this._z*p+c*n,this._w=this._w*p+u*n,this.normalize();return this}slerpQuaternions(e,n,a){return this.copy(e).slerp(n,a)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),o=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(e=0,n=0,a=0){Z.prototype.isVector3=!0,this.x=e,this.y=n,this.z=a}set(e,n,a){return a===void 0&&(a=this.z),this.x=e,this.y=n,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(fv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(fv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,a=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[3]*a+c[6]*o,this.y=c[1]*n+c[4]*a+c[7]*o,this.z=c[2]*n+c[5]*a+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,a=this.y,o=this.z,c=e.elements,u=1/(c[3]*n+c[7]*a+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*a+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*a+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*a+c[10]*o+c[14])*u,this}applyQuaternion(e){const n=this.x,a=this.y,o=this.z,c=e.x,u=e.y,d=e.z,p=e.w,h=2*(u*o-d*a),g=2*(d*n-c*o),v=2*(c*a-u*n);return this.x=n+p*h+u*v-d*g,this.y=a+p*g+d*h-c*v,this.z=o+p*v+c*g-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,a=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[4]*a+c[8]*o,this.y=c[1]*n+c[5]*a+c[9]*o,this.z=c[2]*n+c[6]*a+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=_t(this.x,e.x,n.x),this.y=_t(this.y,e.y,n.y),this.z=_t(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=_t(this.x,e,n),this.y=_t(this.y,e,n),this.z=_t(this.z,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(_t(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const a=e.x,o=e.y,c=e.z,u=n.x,d=n.y,p=n.z;return this.x=o*p-c*d,this.y=c*u-a*p,this.z=a*d-o*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const a=e.dot(this)/n;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return sd.copy(this).projectOnVector(e),this.sub(sd)}reflect(e){return this.sub(sd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(_t(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y,o=this.z-e.z;return n*n+a*a+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,a){const o=Math.sin(n)*e;return this.x=o*Math.sin(a),this.y=Math.cos(n)*e,this.z=o*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,a){return this.x=e*Math.sin(n),this.y=a,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=a,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(e),this.y=n,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sd=new Z,fv=new za;class pt{constructor(e,n,a,o,c,u,d,p,h){pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,a,o,c,u,d,p,h)}set(e,n,a,o,c,u,d,p,h){const g=this.elements;return g[0]=e,g[1]=o,g[2]=d,g[3]=n,g[4]=c,g[5]=p,g[6]=a,g[7]=u,g[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(e,n,a){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,o=n.elements,c=this.elements,u=a[0],d=a[3],p=a[6],h=a[1],g=a[4],v=a[7],_=a[2],x=a[5],E=a[8],T=o[0],M=o[3],S=o[6],w=o[1],N=o[4],D=o[7],F=o[2],z=o[5],P=o[8];return c[0]=u*T+d*w+p*F,c[3]=u*M+d*N+p*z,c[6]=u*S+d*D+p*P,c[1]=h*T+g*w+v*F,c[4]=h*M+g*N+v*z,c[7]=h*S+g*D+v*P,c[2]=_*T+x*w+E*F,c[5]=_*M+x*N+E*z,c[8]=_*S+x*D+E*P,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[1],o=e[2],c=e[3],u=e[4],d=e[5],p=e[6],h=e[7],g=e[8];return n*u*g-n*d*h-a*c*g+a*d*p+o*c*h-o*u*p}invert(){const e=this.elements,n=e[0],a=e[1],o=e[2],c=e[3],u=e[4],d=e[5],p=e[6],h=e[7],g=e[8],v=g*u-d*h,_=d*p-g*c,x=h*c-u*p,E=n*v+a*_+o*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=v*T,e[1]=(o*h-g*a)*T,e[2]=(d*a-o*u)*T,e[3]=_*T,e[4]=(g*n-o*p)*T,e[5]=(o*c-d*n)*T,e[6]=x*T,e[7]=(a*p-h*n)*T,e[8]=(u*n-a*c)*T,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,a,o,c,u,d){const p=Math.cos(c),h=Math.sin(c);return this.set(a*p,a*h,-a*(p*u+h*d)+u+e,-o*h,o*p,-o*(-h*u+p*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(rd.makeScale(e,n)),this}rotate(e){return this.premultiply(rd.makeRotation(-e)),this}translate(e,n){return this.premultiply(rd.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,a=e.elements;for(let o=0;o<9;o++)if(n[o]!==a[o])return!1;return!0}fromArray(e,n=0){for(let a=0;a<9;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const rd=new pt,hv=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dv=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ib(){const r={enabled:!0,workingColorSpace:Xn,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===Ht&&(o.r=Ia(o.r),o.g=Ia(o.g),o.b=Ia(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Ht&&(o.r=eo(o.r),o.g=eo(o.g),o.b=eo(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===xs?Iu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return Bu("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return Bu("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return r.define({[Xn]:{primaries:e,whitePoint:a,transfer:Iu,toXYZ:hv,fromXYZ:dv,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:An},outputColorSpaceConfig:{drawingBufferColorSpace:An}},[An]:{primaries:e,whitePoint:a,transfer:Ht,toXYZ:hv,fromXYZ:dv,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:An}}}),r}const At=ib();function Ia(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function eo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Fr;class ab{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{Fr===void 0&&(Fr=Dl("canvas")),Fr.width=e.width,Fr.height=e.height;const o=Fr.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),a=Fr}return a.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Dl("canvas");n.width=e.width,n.height=e.height;const a=n.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const o=a.getImageData(0,0,e.width,e.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=Ia(c[u]/255)*255;return a.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(Ia(n[a]/255)*255):n[a]=Ia(n[a]);return{data:n,width:e.width,height:e.height}}else return Ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let sb=0;class Qp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sb++}),this.uuid=Fi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?c.push(od(o[u].image)):c.push(od(o[u]))}else c=od(o);a.url=c}return n||(e.images[this.uuid]=a),a}}function od(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?ab.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Ze("Texture: Unable to serialize Texture."),{})}let rb=0;const ld=new Z;class Rn extends fo{constructor(e=Rn.DEFAULT_IMAGE,n=Rn.DEFAULT_MAPPING,a=Ji,o=Ji,c=yn,u=La,d=Mi,p=ui,h=Rn.DEFAULT_ANISOTROPY,g=xs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rb++}),this.uuid=Fi(),this.name="",this.source=new Qp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=h,this.format=d,this.internalFormat=null,this.type=p,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ld).x}get height(){return this.source.getSize(ld).y}get depth(){return this.source.getSize(ld).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const a=e[n];if(a===void 0){Ze(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){Ze(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&a&&o.isVector2&&a.isVector2||o&&a&&o.isVector3&&a.isVector3||o&&a&&o.isMatrix3&&a.isMatrix3?o.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ox)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ao:e.x=e.x-Math.floor(e.x);break;case Ji:e.x=e.x<0?0:1;break;case Ou:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ao:e.y=e.y-Math.floor(e.y);break;case Ji:e.y=e.y<0?0:1;break;case Ou:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=Ox;Rn.DEFAULT_ANISOTROPY=1;class Kt{constructor(e=0,n=0,a=0,o=1){Kt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=a,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,a,o){return this.x=e,this.y=n,this.z=a,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,a=this.y,o=this.z,c=this.w,u=e.elements;return this.x=u[0]*n+u[4]*a+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*a+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*a+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*a+u[11]*o+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,a,o,c;const p=e.elements,h=p[0],g=p[4],v=p[8],_=p[1],x=p[5],E=p[9],T=p[2],M=p[6],S=p[10];if(Math.abs(g-_)<.01&&Math.abs(v-T)<.01&&Math.abs(E-M)<.01){if(Math.abs(g+_)<.1&&Math.abs(v+T)<.1&&Math.abs(E+M)<.1&&Math.abs(h+x+S-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const N=(h+1)/2,D=(x+1)/2,F=(S+1)/2,z=(g+_)/4,P=(v+T)/4,A=(E+M)/4;return N>D&&N>F?N<.01?(a=0,o=.707106781,c=.707106781):(a=Math.sqrt(N),o=z/a,c=P/a):D>F?D<.01?(a=.707106781,o=0,c=.707106781):(o=Math.sqrt(D),a=z/o,c=A/o):F<.01?(a=.707106781,o=.707106781,c=0):(c=Math.sqrt(F),a=P/c,o=A/c),this.set(a,o,c,n),this}let w=Math.sqrt((M-E)*(M-E)+(v-T)*(v-T)+(_-g)*(_-g));return Math.abs(w)<.001&&(w=1),this.x=(M-E)/w,this.y=(v-T)/w,this.z=(_-g)/w,this.w=Math.acos((h+x+S-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=_t(this.x,e.x,n.x),this.y=_t(this.y,e.y,n.y),this.z=_t(this.z,e.z,n.z),this.w=_t(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=_t(this.x,e,n),this.y=_t(this.y,e,n),this.z=_t(this.z,e,n),this.w=_t(this.w,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(_t(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this.w=e.w+(n.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ob extends fo{constructor(e=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=a.depth,this.scissor=new Kt(0,0,e,n),this.scissorTest=!1,this.viewport=new Kt(0,0,e,n),this.textures=[];const o={width:e,height:n,depth:a.depth},c=new Rn(o),u=a.count;for(let d=0;d<u;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(e={}){const n={minFilter:yn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,a=1){if(this.width!==e||this.height!==n||this.depth!==a){this.width=e,this.height=n,this.depth=a;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=a,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,a=e.textures.length;n<a;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new Qp(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ta extends ob{constructor(e=1,n=1,a={}){super(e,n,a),this.isWebGLRenderTarget=!0}}class Wx extends Rn{constructor(e=null,n=1,a=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:a,depth:o},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class lb extends Rn{constructor(e=null,n=1,a=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:a,depth:o},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gt{constructor(e,n,a,o,c,u,d,p,h,g,v,_,x,E,T,M){gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,a,o,c,u,d,p,h,g,v,_,x,E,T,M)}set(e,n,a,o,c,u,d,p,h,g,v,_,x,E,T,M){const S=this.elements;return S[0]=e,S[4]=n,S[8]=a,S[12]=o,S[1]=c,S[5]=u,S[9]=d,S[13]=p,S[2]=h,S[6]=g,S[10]=v,S[14]=_,S[3]=x,S[7]=E,S[11]=T,S[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gt().fromArray(this.elements)}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(e){const n=this.elements,a=e.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,a){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),a.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(e,n,a){return this.set(e.x,n.x,a.x,0,e.y,n.y,a.y,0,e.z,n.z,a.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,a=e.elements,o=1/zr.setFromMatrixColumn(e,0).length(),c=1/zr.setFromMatrixColumn(e,1).length(),u=1/zr.setFromMatrixColumn(e,2).length();return n[0]=a[0]*o,n[1]=a[1]*o,n[2]=a[2]*o,n[3]=0,n[4]=a[4]*c,n[5]=a[5]*c,n[6]=a[6]*c,n[7]=0,n[8]=a[8]*u,n[9]=a[9]*u,n[10]=a[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,a=e.x,o=e.y,c=e.z,u=Math.cos(a),d=Math.sin(a),p=Math.cos(o),h=Math.sin(o),g=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const _=u*g,x=u*v,E=d*g,T=d*v;n[0]=p*g,n[4]=-p*v,n[8]=h,n[1]=x+E*h,n[5]=_-T*h,n[9]=-d*p,n[2]=T-_*h,n[6]=E+x*h,n[10]=u*p}else if(e.order==="YXZ"){const _=p*g,x=p*v,E=h*g,T=h*v;n[0]=_+T*d,n[4]=E*d-x,n[8]=u*h,n[1]=u*v,n[5]=u*g,n[9]=-d,n[2]=x*d-E,n[6]=T+_*d,n[10]=u*p}else if(e.order==="ZXY"){const _=p*g,x=p*v,E=h*g,T=h*v;n[0]=_-T*d,n[4]=-u*v,n[8]=E+x*d,n[1]=x+E*d,n[5]=u*g,n[9]=T-_*d,n[2]=-u*h,n[6]=d,n[10]=u*p}else if(e.order==="ZYX"){const _=u*g,x=u*v,E=d*g,T=d*v;n[0]=p*g,n[4]=E*h-x,n[8]=_*h+T,n[1]=p*v,n[5]=T*h+_,n[9]=x*h-E,n[2]=-h,n[6]=d*p,n[10]=u*p}else if(e.order==="YZX"){const _=u*p,x=u*h,E=d*p,T=d*h;n[0]=p*g,n[4]=T-_*v,n[8]=E*v+x,n[1]=v,n[5]=u*g,n[9]=-d*g,n[2]=-h*g,n[6]=x*v+E,n[10]=_-T*v}else if(e.order==="XZY"){const _=u*p,x=u*h,E=d*p,T=d*h;n[0]=p*g,n[4]=-v,n[8]=h*g,n[1]=_*v+T,n[5]=u*g,n[9]=x*v-E,n[2]=E*v-x,n[6]=d*g,n[10]=T*v+_}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cb,e,ub)}lookAt(e,n,a){const o=this.elements;return li.subVectors(e,n),li.lengthSq()===0&&(li.z=1),li.normalize(),hs.crossVectors(a,li),hs.lengthSq()===0&&(Math.abs(a.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),hs.crossVectors(a,li)),hs.normalize(),Zc.crossVectors(li,hs),o[0]=hs.x,o[4]=Zc.x,o[8]=li.x,o[1]=hs.y,o[5]=Zc.y,o[9]=li.y,o[2]=hs.z,o[6]=Zc.z,o[10]=li.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,o=n.elements,c=this.elements,u=a[0],d=a[4],p=a[8],h=a[12],g=a[1],v=a[5],_=a[9],x=a[13],E=a[2],T=a[6],M=a[10],S=a[14],w=a[3],N=a[7],D=a[11],F=a[15],z=o[0],P=o[4],A=o[8],L=o[12],fe=o[1],H=o[5],$=o[9],ae=o[13],ue=o[2],J=o[6],I=o[10],B=o[14],ce=o[3],Q=o[7],ve=o[11],U=o[15];return c[0]=u*z+d*fe+p*ue+h*ce,c[4]=u*P+d*H+p*J+h*Q,c[8]=u*A+d*$+p*I+h*ve,c[12]=u*L+d*ae+p*B+h*U,c[1]=g*z+v*fe+_*ue+x*ce,c[5]=g*P+v*H+_*J+x*Q,c[9]=g*A+v*$+_*I+x*ve,c[13]=g*L+v*ae+_*B+x*U,c[2]=E*z+T*fe+M*ue+S*ce,c[6]=E*P+T*H+M*J+S*Q,c[10]=E*A+T*$+M*I+S*ve,c[14]=E*L+T*ae+M*B+S*U,c[3]=w*z+N*fe+D*ue+F*ce,c[7]=w*P+N*H+D*J+F*Q,c[11]=w*A+N*$+D*I+F*ve,c[15]=w*L+N*ae+D*B+F*U,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[4],o=e[8],c=e[12],u=e[1],d=e[5],p=e[9],h=e[13],g=e[2],v=e[6],_=e[10],x=e[14],E=e[3],T=e[7],M=e[11],S=e[15],w=p*x-h*_,N=d*x-h*v,D=d*_-p*v,F=u*x-h*g,z=u*_-p*g,P=u*v-d*g;return n*(T*w-M*N+S*D)-a*(E*w-M*F+S*z)+o*(E*N-T*F+S*P)-c*(E*D-T*z+M*P)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,a){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=a),this}invert(){const e=this.elements,n=e[0],a=e[1],o=e[2],c=e[3],u=e[4],d=e[5],p=e[6],h=e[7],g=e[8],v=e[9],_=e[10],x=e[11],E=e[12],T=e[13],M=e[14],S=e[15],w=n*d-a*u,N=n*p-o*u,D=n*h-c*u,F=a*p-o*d,z=a*h-c*d,P=o*h-c*p,A=g*T-v*E,L=g*M-_*E,fe=g*S-x*E,H=v*M-_*T,$=v*S-x*T,ae=_*S-x*M,ue=w*ae-N*$+D*H+F*fe-z*L+P*A;if(ue===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const J=1/ue;return e[0]=(d*ae-p*$+h*H)*J,e[1]=(o*$-a*ae-c*H)*J,e[2]=(T*P-M*z+S*F)*J,e[3]=(_*z-v*P-x*F)*J,e[4]=(p*fe-u*ae-h*L)*J,e[5]=(n*ae-o*fe+c*L)*J,e[6]=(M*D-E*P-S*N)*J,e[7]=(g*P-_*D+x*N)*J,e[8]=(u*$-d*fe+h*A)*J,e[9]=(a*fe-n*$-c*A)*J,e[10]=(E*z-T*D+S*w)*J,e[11]=(v*D-g*z-x*w)*J,e[12]=(d*L-u*H-p*A)*J,e[13]=(n*H-a*L+o*A)*J,e[14]=(T*N-E*F-M*w)*J,e[15]=(g*F-v*N+_*w)*J,this}scale(e){const n=this.elements,a=e.x,o=e.y,c=e.z;return n[0]*=a,n[4]*=o,n[8]*=c,n[1]*=a,n[5]*=o,n[9]*=c,n[2]*=a,n[6]*=o,n[10]*=c,n[3]*=a,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,a,o))}makeTranslation(e,n,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const a=Math.cos(n),o=Math.sin(n),c=1-a,u=e.x,d=e.y,p=e.z,h=c*u,g=c*d;return this.set(h*u+a,h*d-o*p,h*p+o*d,0,h*d+o*p,g*d+a,g*p-o*u,0,h*p-o*d,g*p+o*u,c*p*p+a,0,0,0,0,1),this}makeScale(e,n,a){return this.set(e,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,n,a,o,c,u){return this.set(1,a,c,0,e,1,u,0,n,o,1,0,0,0,0,1),this}compose(e,n,a){const o=this.elements,c=n._x,u=n._y,d=n._z,p=n._w,h=c+c,g=u+u,v=d+d,_=c*h,x=c*g,E=c*v,T=u*g,M=u*v,S=d*v,w=p*h,N=p*g,D=p*v,F=a.x,z=a.y,P=a.z;return o[0]=(1-(T+S))*F,o[1]=(x+D)*F,o[2]=(E-N)*F,o[3]=0,o[4]=(x-D)*z,o[5]=(1-(_+S))*z,o[6]=(M+w)*z,o[7]=0,o[8]=(E+N)*P,o[9]=(M-w)*P,o[10]=(1-(_+T))*P,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,a){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const c=this.determinant();if(c===0)return a.set(1,1,1),n.identity(),this;let u=zr.set(o[0],o[1],o[2]).length();const d=zr.set(o[4],o[5],o[6]).length(),p=zr.set(o[8],o[9],o[10]).length();c<0&&(u=-u),Li.copy(this);const h=1/u,g=1/d,v=1/p;return Li.elements[0]*=h,Li.elements[1]*=h,Li.elements[2]*=h,Li.elements[4]*=g,Li.elements[5]*=g,Li.elements[6]*=g,Li.elements[8]*=v,Li.elements[9]*=v,Li.elements[10]*=v,n.setFromRotationMatrix(Li),a.x=u,a.y=d,a.z=p,this}makePerspective(e,n,a,o,c,u,d=$i,p=!1){const h=this.elements,g=2*c/(n-e),v=2*c/(a-o),_=(n+e)/(n-e),x=(a+o)/(a-o);let E,T;if(p)E=c/(u-c),T=u*c/(u-c);else if(d===$i)E=-(u+c)/(u-c),T=-2*u*c/(u-c);else if(d===wl)E=-u/(u-c),T=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return h[0]=g,h[4]=0,h[8]=_,h[12]=0,h[1]=0,h[5]=v,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=E,h[14]=T,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,n,a,o,c,u,d=$i,p=!1){const h=this.elements,g=2/(n-e),v=2/(a-o),_=-(n+e)/(n-e),x=-(a+o)/(a-o);let E,T;if(p)E=1/(u-c),T=u/(u-c);else if(d===$i)E=-2/(u-c),T=-(u+c)/(u-c);else if(d===wl)E=-1/(u-c),T=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return h[0]=g,h[4]=0,h[8]=0,h[12]=_,h[1]=0,h[5]=v,h[9]=0,h[13]=x,h[2]=0,h[6]=0,h[10]=E,h[14]=T,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const n=this.elements,a=e.elements;for(let o=0;o<16;o++)if(n[o]!==a[o])return!1;return!0}fromArray(e,n=0){for(let a=0;a<16;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e[n+9]=a[9],e[n+10]=a[10],e[n+11]=a[11],e[n+12]=a[12],e[n+13]=a[13],e[n+14]=a[14],e[n+15]=a[15],e}}const zr=new Z,Li=new gt,cb=new Z(0,0,0),ub=new Z(1,1,1),hs=new Z,Zc=new Z,li=new Z,pv=new gt,mv=new za;class ia{constructor(e=0,n=0,a=0,o=ia.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=a,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,a,o=this._order){return this._x=e,this._y=n,this._z=a,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,a=!0){const o=e.elements,c=o[0],u=o[4],d=o[8],p=o[1],h=o[5],g=o[9],v=o[2],_=o[6],x=o[10];switch(n){case"XYZ":this._y=Math.asin(_t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(_,h),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,x),this._z=Math.atan2(p,h)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(_t(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,x),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-_t(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,x),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(_t(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,h),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(d,x));break;case"XZY":this._z=Math.asin(-_t(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,h),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,x),this._y=0);break;default:Ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,a){return pv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pv,n,a)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return mv.setFromEuler(this),this.setFromQuaternion(mv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ia.DEFAULT_ORDER="XYZ";class jx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fb=0;const gv=new Z,Hr=new za,Aa=new gt,Qc=new Z,cl=new Z,hb=new Z,db=new za,_v=new Z(1,0,0),vv=new Z(0,1,0),xv=new Z(0,0,1),Sv={type:"added"},pb={type:"removed"},Vr={type:"childadded",child:null},cd={type:"childremoved",child:null};class en extends fo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fb++}),this.uuid=Fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=en.DEFAULT_UP.clone();const e=new Z,n=new ia,a=new za,o=new Z(1,1,1);function c(){a.setFromEuler(n,!1)}function u(){n.setFromQuaternion(a,void 0,!1)}n._onChange(c),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new gt},normalMatrix:{value:new pt}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=en.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Hr.setFromAxisAngle(e,n),this.quaternion.multiply(Hr),this}rotateOnWorldAxis(e,n){return Hr.setFromAxisAngle(e,n),this.quaternion.premultiply(Hr),this}rotateX(e){return this.rotateOnAxis(_v,e)}rotateY(e){return this.rotateOnAxis(vv,e)}rotateZ(e){return this.rotateOnAxis(xv,e)}translateOnAxis(e,n){return gv.copy(e).applyQuaternion(this.quaternion),this.position.add(gv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(_v,e)}translateY(e){return this.translateOnAxis(vv,e)}translateZ(e){return this.translateOnAxis(xv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Aa.copy(this.matrixWorld).invert())}lookAt(e,n,a){e.isVector3?Qc.copy(e):Qc.set(e,n,a);const o=this.parent;this.updateWorldMatrix(!0,!1),cl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Aa.lookAt(cl,Qc,this.up):Aa.lookAt(Qc,cl,this.up),this.quaternion.setFromRotationMatrix(Aa),o&&(Aa.extractRotation(o.matrixWorld),Hr.setFromRotationMatrix(Aa),this.quaternion.premultiply(Hr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Sv),Vr.child=e,this.dispatchEvent(Vr),Vr.child=null):nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(pb),cd.child=e,this.dispatchEvent(cd),cd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Aa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Aa.multiply(e.parent.matrixWorld)),e.applyMatrix4(Aa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Sv),Vr.child=e,this.dispatchEvent(Vr),Vr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let a=0,o=this.children.length;a<o;a++){const u=this.children[a].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,a=[]){this[e]===n&&a.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(e,n,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cl,e,hb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cl,db,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,a=e.y,o=e.z,c=this.matrix.elements;c[12]+=n-c[0]*n-c[4]*a-c[8]*o,c[13]+=a-c[1]*n-c[5]*a-c[9]*o,c[14]+=o-c[2]*n-c[6]*a-c[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].updateMatrixWorld(e)}updateWorldMatrix(e,n){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",a={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let h=0,g=p.length;h<g;h++){const v=p[h];c(e.shapes,v)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,h=this.material.length;p<h;p++)d.push(c(e.materials,this.material[p]));o.material=d}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];o.animations.push(c(e.animations,p))}}if(n){const d=u(e.geometries),p=u(e.materials),h=u(e.textures),g=u(e.images),v=u(e.shapes),_=u(e.skeletons),x=u(e.animations),E=u(e.nodes);d.length>0&&(a.geometries=d),p.length>0&&(a.materials=p),h.length>0&&(a.textures=h),g.length>0&&(a.images=g),v.length>0&&(a.shapes=v),_.length>0&&(a.skeletons=_),x.length>0&&(a.animations=x),E.length>0&&(a.nodes=E)}return a.object=o,a;function u(d){const p=[];for(const h in d){const g=d[h];delete g.metadata,p.push(g)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let a=0;a<e.children.length;a++){const o=e.children[a];this.add(o.clone())}return this}}en.DEFAULT_UP=new Z(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Qs extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mb={type:"move"};class ud{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const a of e.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,a){let o=null,c=null,u=null;const d=this._targetRay,p=this._grip,h=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const T of e.hand.values()){const M=n.getJointPose(T,a),S=this._getHandJoint(h,T);M!==null&&(S.matrix.fromArray(M.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=M.radius),S.visible=M!==null}const g=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],_=g.position.distanceTo(v.position),x=.02,E=.005;h.inputState.pinching&&_>x+E?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&_<=x-E&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,a),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(o=n.getPose(e.targetRaySpace,a),o===null&&c!==null&&(o=c),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(mb)))}return d!==null&&(d.visible=o!==null),p!==null&&(p.visible=c!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const a=new Qs;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[n.jointName]=a,e.add(a)}return e.joints[n.jointName]}}const qx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ds={h:0,s:0,l:0},Jc={h:0,s:0,l:0};function fd(r,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+(e-r)*6*n:n<1/2?e:n<2/3?r+(e-r)*6*(2/3-n):r}class st{constructor(e,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,a)}set(e,n,a){if(n===void 0&&a===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=An){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.colorSpaceToWorking(this,n),this}setRGB(e,n,a,o=At.workingColorSpace){return this.r=e,this.g=n,this.b=a,At.colorSpaceToWorking(this,o),this}setHSL(e,n,a,o=At.workingColorSpace){if(e=Zp(e,1),n=_t(n,0,1),a=_t(a,0,1),n===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+n):a+n-a*n,u=2*a-c;this.r=fd(u,c,e+1/3),this.g=fd(u,c,e),this.b=fd(u,c,e-1/3)}return At.colorSpaceToWorking(this,o),this}setStyle(e,n=An){function a(c){c!==void 0&&parseFloat(c)<1&&Ze("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:Ze("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);Ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=An){const a=qx[e.toLowerCase()];return a!==void 0?this.setHex(a,n):Ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ia(e.r),this.g=Ia(e.g),this.b=Ia(e.b),this}copyLinearToSRGB(e){return this.r=eo(e.r),this.g=eo(e.g),this.b=eo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=An){return At.workingToColorSpace(On.copy(this),e),Math.round(_t(On.r*255,0,255))*65536+Math.round(_t(On.g*255,0,255))*256+Math.round(_t(On.b*255,0,255))}getHexString(e=An){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=At.workingColorSpace){At.workingToColorSpace(On.copy(this),n);const a=On.r,o=On.g,c=On.b,u=Math.max(a,o,c),d=Math.min(a,o,c);let p,h;const g=(d+u)/2;if(d===u)p=0,h=0;else{const v=u-d;switch(h=g<=.5?v/(u+d):v/(2-u-d),u){case a:p=(o-c)/v+(o<c?6:0);break;case o:p=(c-a)/v+2;break;case c:p=(a-o)/v+4;break}p/=6}return e.h=p,e.s=h,e.l=g,e}getRGB(e,n=At.workingColorSpace){return At.workingToColorSpace(On.copy(this),n),e.r=On.r,e.g=On.g,e.b=On.b,e}getStyle(e=An){At.workingToColorSpace(On.copy(this),e);const n=On.r,a=On.g,o=On.b;return e!==An?`color(${e} ${n.toFixed(3)} ${a.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(o*255)})`}offsetHSL(e,n,a){return this.getHSL(ds),this.setHSL(ds.h+e,ds.s+n,ds.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,a){return this.r=e.r+(n.r-e.r)*a,this.g=e.g+(n.g-e.g)*a,this.b=e.b+(n.b-e.b)*a,this}lerpHSL(e,n){this.getHSL(ds),e.getHSL(Jc);const a=El(ds.h,Jc.h,n),o=El(ds.s,Jc.s,n),c=El(ds.l,Jc.l,n);return this.setHSL(a,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,a=this.g,o=this.b,c=e.elements;return this.r=c[0]*n+c[3]*a+c[6]*o,this.g=c[1]*n+c[4]*a+c[7]*o,this.b=c[2]*n+c[5]*a+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const On=new st;st.NAMES=qx;class gb extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ia,this.environmentIntensity=1,this.environmentRotation=new ia,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Ui=new Z,Ra=new Z,hd=new Z,Ca=new Z,Gr=new Z,kr=new Z,yv=new Z,dd=new Z,pd=new Z,md=new Z,gd=new Kt,_d=new Kt,vd=new Kt;class Pi{constructor(e=new Z,n=new Z,a=new Z){this.a=e,this.b=n,this.c=a}static getNormal(e,n,a,o){o.subVectors(a,n),Ui.subVectors(e,n),o.cross(Ui);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,n,a,o,c){Ui.subVectors(o,n),Ra.subVectors(a,n),hd.subVectors(e,n);const u=Ui.dot(Ui),d=Ui.dot(Ra),p=Ui.dot(hd),h=Ra.dot(Ra),g=Ra.dot(hd),v=u*h-d*d;if(v===0)return c.set(0,0,0),null;const _=1/v,x=(h*p-d*g)*_,E=(u*g-d*p)*_;return c.set(1-x-E,E,x)}static containsPoint(e,n,a,o){return this.getBarycoord(e,n,a,o,Ca)===null?!1:Ca.x>=0&&Ca.y>=0&&Ca.x+Ca.y<=1}static getInterpolation(e,n,a,o,c,u,d,p){return this.getBarycoord(e,n,a,o,Ca)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Ca.x),p.addScaledVector(u,Ca.y),p.addScaledVector(d,Ca.z),p)}static getInterpolatedAttribute(e,n,a,o,c,u){return gd.setScalar(0),_d.setScalar(0),vd.setScalar(0),gd.fromBufferAttribute(e,n),_d.fromBufferAttribute(e,a),vd.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(gd,c.x),u.addScaledVector(_d,c.y),u.addScaledVector(vd,c.z),u}static isFrontFacing(e,n,a,o){return Ui.subVectors(a,n),Ra.subVectors(e,n),Ui.cross(Ra).dot(o)<0}set(e,n,a){return this.a.copy(e),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(e,n,a,o){return this.a.copy(e[n]),this.b.copy(e[a]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,a,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ui.subVectors(this.c,this.b),Ra.subVectors(this.a,this.b),Ui.cross(Ra).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Pi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,a,o,c){return Pi.getInterpolation(e,this.a,this.b,this.c,n,a,o,c)}containsPoint(e){return Pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const a=this.a,o=this.b,c=this.c;let u,d;Gr.subVectors(o,a),kr.subVectors(c,a),dd.subVectors(e,a);const p=Gr.dot(dd),h=kr.dot(dd);if(p<=0&&h<=0)return n.copy(a);pd.subVectors(e,o);const g=Gr.dot(pd),v=kr.dot(pd);if(g>=0&&v<=g)return n.copy(o);const _=p*v-g*h;if(_<=0&&p>=0&&g<=0)return u=p/(p-g),n.copy(a).addScaledVector(Gr,u);md.subVectors(e,c);const x=Gr.dot(md),E=kr.dot(md);if(E>=0&&x<=E)return n.copy(c);const T=x*h-p*E;if(T<=0&&h>=0&&E<=0)return d=h/(h-E),n.copy(a).addScaledVector(kr,d);const M=g*E-x*v;if(M<=0&&v-g>=0&&x-E>=0)return yv.subVectors(c,o),d=(v-g)/(v-g+(x-E)),n.copy(o).addScaledVector(yv,d);const S=1/(M+T+_);return u=T*S,d=_*S,n.copy(a).addScaledVector(Gr,u).addScaledVector(kr,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ei{constructor(e=new Z(1/0,1/0,1/0),n=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n+=3)this.expandByPoint(Oi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,a=e.count;n<a;n++)this.expandByPoint(Oi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const a=Oi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const c=a.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=c.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,Oi):Oi.fromBufferAttribute(c,u),Oi.applyMatrix4(e.matrixWorld),this.expandByPoint(Oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$c.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),$c.copy(a.boundingBox)),$c.applyMatrix4(e.matrixWorld),this.union($c)}const o=e.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Oi),Oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,a;return e.normal.x>0?(n=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),n<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ul),eu.subVectors(this.max,ul),Xr.subVectors(e.a,ul),Wr.subVectors(e.b,ul),jr.subVectors(e.c,ul),ps.subVectors(Wr,Xr),ms.subVectors(jr,Wr),Hs.subVectors(Xr,jr);let n=[0,-ps.z,ps.y,0,-ms.z,ms.y,0,-Hs.z,Hs.y,ps.z,0,-ps.x,ms.z,0,-ms.x,Hs.z,0,-Hs.x,-ps.y,ps.x,0,-ms.y,ms.x,0,-Hs.y,Hs.x,0];return!xd(n,Xr,Wr,jr,eu)||(n=[1,0,0,0,1,0,0,0,1],!xd(n,Xr,Wr,jr,eu))?!1:(tu.crossVectors(ps,ms),n=[tu.x,tu.y,tu.z],xd(n,Xr,Wr,jr,eu))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const wa=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Oi=new Z,$c=new Ei,Xr=new Z,Wr=new Z,jr=new Z,ps=new Z,ms=new Z,Hs=new Z,ul=new Z,eu=new Z,tu=new Z,Vs=new Z;function xd(r,e,n,a,o){for(let c=0,u=r.length-3;c<=u;c+=3){Vs.fromArray(r,c);const d=o.x*Math.abs(Vs.x)+o.y*Math.abs(Vs.y)+o.z*Math.abs(Vs.z),p=e.dot(Vs),h=n.dot(Vs),g=a.dot(Vs);if(Math.max(-Math.max(p,h,g),Math.min(p,h,g))>d)return!1}return!0}const gn=new Z,nu=new Ct;let _b=0;class kn{constructor(e,n,a=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_b++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=a,this.usage=Np,this.updateRanges=[],this.gpuType=yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,a){e*=this.itemSize,a*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=n.array[a+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)nu.fromBufferAttribute(this,n),nu.applyMatrix3(e),this.setXY(n,nu.x,nu.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)gn.fromBufferAttribute(this,n),gn.applyMatrix3(e),this.setXYZ(n,gn.x,gn.y,gn.z);return this}applyMatrix4(e){for(let n=0,a=this.count;n<a;n++)gn.fromBufferAttribute(this,n),gn.applyMatrix4(e),this.setXYZ(n,gn.x,gn.y,gn.z);return this}applyNormalMatrix(e){for(let n=0,a=this.count;n<a;n++)gn.fromBufferAttribute(this,n),gn.applyNormalMatrix(e),this.setXYZ(n,gn.x,gn.y,gn.z);return this}transformDirection(e){for(let n=0,a=this.count;n<a;n++)gn.fromBufferAttribute(this,n),gn.transformDirection(e),this.setXYZ(n,gn.x,gn.y,gn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let a=this.array[e*this.itemSize+n];return this.normalized&&(a=Ii(a,this.array)),a}setComponent(e,n,a){return this.normalized&&(a=Vt(a,this.array)),this.array[e*this.itemSize+n]=a,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ii(n,this.array)),n}setX(e,n){return this.normalized&&(n=Vt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ii(n,this.array)),n}setY(e,n){return this.normalized&&(n=Vt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ii(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Vt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ii(n,this.array)),n}setW(e,n){return this.normalized&&(n=Vt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,a){return e*=this.itemSize,this.normalized&&(n=Vt(n,this.array),a=Vt(a,this.array)),this.array[e+0]=n,this.array[e+1]=a,this}setXYZ(e,n,a,o){return e*=this.itemSize,this.normalized&&(n=Vt(n,this.array),a=Vt(a,this.array),o=Vt(o,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=o,this}setXYZW(e,n,a,o,c){return e*=this.itemSize,this.normalized&&(n=Vt(n,this.array),a=Vt(a,this.array),o=Vt(o,this.array),c=Vt(c,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Np&&(e.usage=this.usage),e}}class Yx extends kn{constructor(e,n,a){super(new Uint16Array(e),n,a)}}class Kx extends kn{constructor(e,n,a){super(new Uint32Array(e),n,a)}}class zi extends kn{constructor(e,n,a){super(new Float32Array(e),n,a)}}const vb=new Ei,fl=new Z,Sd=new Z;class sa{constructor(e=new Z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const a=this.center;n!==void 0?a.copy(n):vb.setFromPoints(e).getCenter(a);let o=0;for(let c=0,u=e.length;c<u;c++)o=Math.max(o,a.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const a=this.center.distanceToSquared(e);return n.copy(e),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fl.subVectors(e,this.center);const n=fl.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),o=(a-this.radius)*.5;this.center.addScaledVector(fl,o/a),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fl.copy(e.center).add(Sd)),this.expandByPoint(fl.copy(e.center).sub(Sd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let xb=0;const xi=new gt,yd=new en,qr=new Z,ci=new Ei,hl=new Ei,Tn=new Z;class bi extends fo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xb++}),this.uuid=Fi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(IE(e)?Kx:Yx)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,a=0){this.groups.push({start:e,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new pt().getNormalMatrix(e);a.applyNormalMatrix(c),a.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xi.makeRotationFromQuaternion(e),this.applyMatrix4(xi),this}rotateX(e){return xi.makeRotationX(e),this.applyMatrix4(xi),this}rotateY(e){return xi.makeRotationY(e),this.applyMatrix4(xi),this}rotateZ(e){return xi.makeRotationZ(e),this.applyMatrix4(xi),this}translate(e,n,a){return xi.makeTranslation(e,n,a),this.applyMatrix4(xi),this}scale(e,n,a){return xi.makeScale(e,n,a),this.applyMatrix4(xi),this}lookAt(e){return yd.lookAt(e),yd.updateMatrix(),this.applyMatrix4(yd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qr).negate(),this.translate(qr.x,qr.y,qr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let o=0,c=e.length;o<c;o++){const u=e[o];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new zi(a,3))}else{const a=Math.min(e.length,n.count);for(let o=0;o<a;o++){const c=e[o];n.setXYZ(o,c.x,c.y,c.z||0)}e.length>n.count&&Ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ei);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let a=0,o=n.length;a<o;a++){const c=n[a];ci.setFromBufferAttribute(c),this.morphTargetsRelative?(Tn.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(Tn),Tn.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(Tn)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const a=this.boundingSphere.center;if(ci.setFromBufferAttribute(e),n)for(let c=0,u=n.length;c<u;c++){const d=n[c];hl.setFromBufferAttribute(d),this.morphTargetsRelative?(Tn.addVectors(ci.min,hl.min),ci.expandByPoint(Tn),Tn.addVectors(ci.max,hl.max),ci.expandByPoint(Tn)):(ci.expandByPoint(hl.min),ci.expandByPoint(hl.max))}ci.getCenter(a);let o=0;for(let c=0,u=e.count;c<u;c++)Tn.fromBufferAttribute(e,c),o=Math.max(o,a.distanceToSquared(Tn));if(n)for(let c=0,u=n.length;c<u;c++){const d=n[c],p=this.morphTargetsRelative;for(let h=0,g=d.count;h<g;h++)Tn.fromBufferAttribute(d,h),p&&(qr.fromBufferAttribute(e,h),Tn.add(qr)),o=Math.max(o,a.distanceToSquared(Tn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kn(new Float32Array(4*a.count),4));const u=this.getAttribute("tangent"),d=[],p=[];for(let A=0;A<a.count;A++)d[A]=new Z,p[A]=new Z;const h=new Z,g=new Z,v=new Z,_=new Ct,x=new Ct,E=new Ct,T=new Z,M=new Z;function S(A,L,fe){h.fromBufferAttribute(a,A),g.fromBufferAttribute(a,L),v.fromBufferAttribute(a,fe),_.fromBufferAttribute(c,A),x.fromBufferAttribute(c,L),E.fromBufferAttribute(c,fe),g.sub(h),v.sub(h),x.sub(_),E.sub(_);const H=1/(x.x*E.y-E.x*x.y);isFinite(H)&&(T.copy(g).multiplyScalar(E.y).addScaledVector(v,-x.y).multiplyScalar(H),M.copy(v).multiplyScalar(x.x).addScaledVector(g,-E.x).multiplyScalar(H),d[A].add(T),d[L].add(T),d[fe].add(T),p[A].add(M),p[L].add(M),p[fe].add(M))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let A=0,L=w.length;A<L;++A){const fe=w[A],H=fe.start,$=fe.count;for(let ae=H,ue=H+$;ae<ue;ae+=3)S(e.getX(ae+0),e.getX(ae+1),e.getX(ae+2))}const N=new Z,D=new Z,F=new Z,z=new Z;function P(A){F.fromBufferAttribute(o,A),z.copy(F);const L=d[A];N.copy(L),N.sub(F.multiplyScalar(F.dot(L))).normalize(),D.crossVectors(z,L);const H=D.dot(p[A])<0?-1:1;u.setXYZW(A,N.x,N.y,N.z,H)}for(let A=0,L=w.length;A<L;++A){const fe=w[A],H=fe.start,$=fe.count;for(let ae=H,ue=H+$;ae<ue;ae+=3)P(e.getX(ae+0)),P(e.getX(ae+1)),P(e.getX(ae+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new kn(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let _=0,x=a.count;_<x;_++)a.setXYZ(_,0,0,0);const o=new Z,c=new Z,u=new Z,d=new Z,p=new Z,h=new Z,g=new Z,v=new Z;if(e)for(let _=0,x=e.count;_<x;_+=3){const E=e.getX(_+0),T=e.getX(_+1),M=e.getX(_+2);o.fromBufferAttribute(n,E),c.fromBufferAttribute(n,T),u.fromBufferAttribute(n,M),g.subVectors(u,c),v.subVectors(o,c),g.cross(v),d.fromBufferAttribute(a,E),p.fromBufferAttribute(a,T),h.fromBufferAttribute(a,M),d.add(g),p.add(g),h.add(g),a.setXYZ(E,d.x,d.y,d.z),a.setXYZ(T,p.x,p.y,p.z),a.setXYZ(M,h.x,h.y,h.z)}else for(let _=0,x=n.count;_<x;_+=3)o.fromBufferAttribute(n,_+0),c.fromBufferAttribute(n,_+1),u.fromBufferAttribute(n,_+2),g.subVectors(u,c),v.subVectors(o,c),g.cross(v),a.setXYZ(_+0,g.x,g.y,g.z),a.setXYZ(_+1,g.x,g.y,g.z),a.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,a=e.count;n<a;n++)Tn.fromBufferAttribute(e,n),Tn.normalize(),e.setXYZ(n,Tn.x,Tn.y,Tn.z)}toNonIndexed(){function e(d,p){const h=d.array,g=d.itemSize,v=d.normalized,_=new h.constructor(p.length*g);let x=0,E=0;for(let T=0,M=p.length;T<M;T++){d.isInterleavedBufferAttribute?x=p[T]*d.data.stride+d.offset:x=p[T]*g;for(let S=0;S<g;S++)_[E++]=h[x++]}return new kn(_,g,v)}if(this.index===null)return Ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new bi,a=this.index.array,o=this.attributes;for(const d in o){const p=o[d],h=e(p,a);n.setAttribute(d,h)}const c=this.morphAttributes;for(const d in c){const p=[],h=c[d];for(let g=0,v=h.length;g<v;g++){const _=h[g],x=e(_,a);p.push(x)}n.morphAttributes[d]=p}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,p=u.length;d<p;d++){const h=u[d];n.addGroup(h.start,h.count,h.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const h in p)p[h]!==void 0&&(e[h]=p[h]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const p in a){const h=a[p];e.data.attributes[p]=h.toJSON(e.data)}const o={};let c=!1;for(const p in this.morphAttributes){const h=this.morphAttributes[p],g=[];for(let v=0,_=h.length;v<_;v++){const x=h[v];g.push(x.toJSON(e.data))}g.length>0&&(o[p]=g,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const o=e.attributes;for(const h in o){const g=o[h];this.setAttribute(h,g.clone(n))}const c=e.morphAttributes;for(const h in c){const g=[],v=c[h];for(let _=0,x=v.length;_<x;_++)g.push(v[_].clone(n));this.morphAttributes[h]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,g=u.length;h<g;h++){const v=u[h];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sb{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Np,this.updateRanges=[],this.version=0,this.uuid=Fi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,a){e*=this.stride,a*=n.stride;for(let o=0,c=this.stride;o<c;o++)this.array[e+o]=n.array[a+o];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),a=new this.constructor(n,this.stride);return a.setUsage(this.usage),a}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Hn=new Z;class Jp{constructor(e,n,a,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=a,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,a=this.data.count;n<a;n++)Hn.fromBufferAttribute(this,n),Hn.applyMatrix4(e),this.setXYZ(n,Hn.x,Hn.y,Hn.z);return this}applyNormalMatrix(e){for(let n=0,a=this.count;n<a;n++)Hn.fromBufferAttribute(this,n),Hn.applyNormalMatrix(e),this.setXYZ(n,Hn.x,Hn.y,Hn.z);return this}transformDirection(e){for(let n=0,a=this.count;n<a;n++)Hn.fromBufferAttribute(this,n),Hn.transformDirection(e),this.setXYZ(n,Hn.x,Hn.y,Hn.z);return this}getComponent(e,n){let a=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(a=Ii(a,this.array)),a}setComponent(e,n,a){return this.normalized&&(a=Vt(a,this.array)),this.data.array[e*this.data.stride+this.offset+n]=a,this}setX(e,n){return this.normalized&&(n=Vt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=Vt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=Vt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=Vt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=Ii(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=Ii(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=Ii(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=Ii(n,this.array)),n}setXY(e,n,a){return e=e*this.data.stride+this.offset,this.normalized&&(n=Vt(n,this.array),a=Vt(a,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=a,this}setXYZ(e,n,a,o){return e=e*this.data.stride+this.offset,this.normalized&&(n=Vt(n,this.array),a=Vt(a,this.array),o=Vt(o,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=a,this.data.array[e+2]=o,this}setXYZW(e,n,a,o,c){return e=e*this.data.stride+this.offset,this.normalized&&(n=Vt(n,this.array),a=Vt(a,this.array),o=Vt(o,this.array),c=Vt(c,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=a,this.data.array[e+2]=o,this.data.array[e+3]=c,this}clone(e){if(e===void 0){Pu("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let a=0;a<this.count;a++){const o=a*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[o+c])}return new kn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Jp(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Pu("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let a=0;a<this.count;a++){const o=a*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[o+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let yb=0;class Hi extends fo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yb++}),this.uuid=Fi(),this.name="",this.type="Material",this.blending=$r,this.side=Pa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kd,this.blendDst=Xd,this.blendEquation=Ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=no,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ov,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Br,this.stencilZFail=Br,this.stencilZPass=Br,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const a=e[n];if(a===void 0){Ze(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){Ze(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(a):o&&o.isVector3&&a&&a.isVector3?o.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==$r&&(a.blending=this.blending),this.side!==Pa&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==kd&&(a.blendSrc=this.blendSrc),this.blendDst!==Xd&&(a.blendDst=this.blendDst),this.blendEquation!==Ys&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==no&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ov&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Br&&(a.stencilFail=this.stencilFail),this.stencilZFail!==Br&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==Br&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.allowOverride===!1&&(a.allowOverride=!1),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function o(c){const u=[];for(const d in c){const p=c[d];delete p.metadata,u.push(p)}return u}if(n){const c=o(e.textures),u=o(e.images);c.length>0&&(a.textures=c),u.length>0&&(a.images=u)}return a}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let a=null;if(n!==null){const o=n.length;a=new Array(o);for(let c=0;c!==o;++c)a[c]=n[c].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Da=new Z,Md=new Z,iu=new Z,gs=new Z,Ed=new Z,au=new Z,bd=new Z;class Vu{constructor(e=new Z,n=new Z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Da)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Da.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Da.copy(this.origin).addScaledVector(this.direction,n),Da.distanceToSquared(e))}distanceSqToSegment(e,n,a,o){Md.copy(e).add(n).multiplyScalar(.5),iu.copy(n).sub(e).normalize(),gs.copy(this.origin).sub(Md);const c=e.distanceTo(n)*.5,u=-this.direction.dot(iu),d=gs.dot(this.direction),p=-gs.dot(iu),h=gs.lengthSq(),g=Math.abs(1-u*u);let v,_,x,E;if(g>0)if(v=u*p-d,_=u*d-p,E=c*g,v>=0)if(_>=-E)if(_<=E){const T=1/g;v*=T,_*=T,x=v*(v+u*_+2*d)+_*(u*v+_+2*p)+h}else _=c,v=Math.max(0,-(u*_+d)),x=-v*v+_*(_+2*p)+h;else _=-c,v=Math.max(0,-(u*_+d)),x=-v*v+_*(_+2*p)+h;else _<=-E?(v=Math.max(0,-(-u*c+d)),_=v>0?-c:Math.min(Math.max(-c,-p),c),x=-v*v+_*(_+2*p)+h):_<=E?(v=0,_=Math.min(Math.max(-c,-p),c),x=_*(_+2*p)+h):(v=Math.max(0,-(u*c+d)),_=v>0?c:Math.min(Math.max(-c,-p),c),x=-v*v+_*(_+2*p)+h);else _=u>0?-c:c,v=Math.max(0,-(u*_+d)),x=-v*v+_*(_+2*p)+h;return a&&a.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(Md).addScaledVector(iu,_),x}intersectSphere(e,n){Da.subVectors(e.center,this.origin);const a=Da.dot(this.direction),o=Da.dot(Da)-a*a,c=e.radius*e.radius;if(o>c)return null;const u=Math.sqrt(c-o),d=a-u,p=a+u;return p<0?null:d<0?this.at(p,n):this.at(d,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/n;return a>=0?a:null}intersectPlane(e,n){const a=this.distanceToPlane(e);return a===null?null:this.at(a,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let a,o,c,u,d,p;const h=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,_=this.origin;return h>=0?(a=(e.min.x-_.x)*h,o=(e.max.x-_.x)*h):(a=(e.max.x-_.x)*h,o=(e.min.x-_.x)*h),g>=0?(c=(e.min.y-_.y)*g,u=(e.max.y-_.y)*g):(c=(e.max.y-_.y)*g,u=(e.min.y-_.y)*g),a>u||c>o||((c>a||isNaN(a))&&(a=c),(u<o||isNaN(o))&&(o=u),v>=0?(d=(e.min.z-_.z)*v,p=(e.max.z-_.z)*v):(d=(e.max.z-_.z)*v,p=(e.min.z-_.z)*v),a>p||d>o)||((d>a||a!==a)&&(a=d),(p<o||o!==o)&&(o=p),o<0)?null:this.at(a>=0?a:o,n)}intersectsBox(e){return this.intersectBox(e,Da)!==null}intersectTriangle(e,n,a,o,c){Ed.subVectors(n,e),au.subVectors(a,e),bd.crossVectors(Ed,au);let u=this.direction.dot(bd),d;if(u>0){if(o)return null;d=1}else if(u<0)d=-1,u=-u;else return null;gs.subVectors(this.origin,e);const p=d*this.direction.dot(au.crossVectors(gs,au));if(p<0)return null;const h=d*this.direction.dot(Ed.cross(gs));if(h<0||p+h>u)return null;const g=-d*gs.dot(bd);return g<0?null:this.at(g/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Js extends Hi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ia,this.combine=Rx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mv=new gt,Gs=new Vu,su=new sa,Ev=new Z,ru=new Z,ou=new Z,lu=new Z,Td=new Z,cu=new Z,bv=new Z,uu=new Z;class Jn extends en{constructor(e=new bi,n=new Js){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,n){const a=this.geometry,o=a.attributes.position,c=a.morphAttributes.position,u=a.morphTargetsRelative;n.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(c&&d){cu.set(0,0,0);for(let p=0,h=c.length;p<h;p++){const g=d[p],v=c[p];g!==0&&(Td.fromBufferAttribute(v,e),u?cu.addScaledVector(Td,g):cu.addScaledVector(Td.sub(n),g))}n.add(cu)}return n}raycast(e,n){const a=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),su.copy(a.boundingSphere),su.applyMatrix4(c),Gs.copy(e.ray).recast(e.near),!(su.containsPoint(Gs.origin)===!1&&(Gs.intersectSphere(su,Ev)===null||Gs.origin.distanceToSquared(Ev)>(e.far-e.near)**2))&&(Mv.copy(c).invert(),Gs.copy(e.ray).applyMatrix4(Mv),!(a.boundingBox!==null&&Gs.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,n,Gs)))}_computeIntersections(e,n,a){let o;const c=this.geometry,u=this.material,d=c.index,p=c.attributes.position,h=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,_=c.groups,x=c.drawRange;if(d!==null)if(Array.isArray(u))for(let E=0,T=_.length;E<T;E++){const M=_[E],S=u[M.materialIndex],w=Math.max(M.start,x.start),N=Math.min(d.count,Math.min(M.start+M.count,x.start+x.count));for(let D=w,F=N;D<F;D+=3){const z=d.getX(D),P=d.getX(D+1),A=d.getX(D+2);o=fu(this,S,e,a,h,g,v,z,P,A),o&&(o.faceIndex=Math.floor(D/3),o.face.materialIndex=M.materialIndex,n.push(o))}}else{const E=Math.max(0,x.start),T=Math.min(d.count,x.start+x.count);for(let M=E,S=T;M<S;M+=3){const w=d.getX(M),N=d.getX(M+1),D=d.getX(M+2);o=fu(this,u,e,a,h,g,v,w,N,D),o&&(o.faceIndex=Math.floor(M/3),n.push(o))}}else if(p!==void 0)if(Array.isArray(u))for(let E=0,T=_.length;E<T;E++){const M=_[E],S=u[M.materialIndex],w=Math.max(M.start,x.start),N=Math.min(p.count,Math.min(M.start+M.count,x.start+x.count));for(let D=w,F=N;D<F;D+=3){const z=D,P=D+1,A=D+2;o=fu(this,S,e,a,h,g,v,z,P,A),o&&(o.faceIndex=Math.floor(D/3),o.face.materialIndex=M.materialIndex,n.push(o))}}else{const E=Math.max(0,x.start),T=Math.min(p.count,x.start+x.count);for(let M=E,S=T;M<S;M+=3){const w=M,N=M+1,D=M+2;o=fu(this,u,e,a,h,g,v,w,N,D),o&&(o.faceIndex=Math.floor(M/3),n.push(o))}}}}function Mb(r,e,n,a,o,c,u,d){let p;if(e.side===Qn?p=a.intersectTriangle(u,c,o,!0,d):p=a.intersectTriangle(o,c,u,e.side===Pa,d),p===null)return null;uu.copy(d),uu.applyMatrix4(r.matrixWorld);const h=n.ray.origin.distanceTo(uu);return h<n.near||h>n.far?null:{distance:h,point:uu.clone(),object:r}}function fu(r,e,n,a,o,c,u,d,p,h){r.getVertexPosition(d,ru),r.getVertexPosition(p,ou),r.getVertexPosition(h,lu);const g=Mb(r,e,n,a,ru,ou,lu,bv);if(g){const v=new Z;Pi.getBarycoord(bv,ru,ou,lu,v),o&&(g.uv=Pi.getInterpolatedAttribute(o,d,p,h,v,new Ct)),c&&(g.uv1=Pi.getInterpolatedAttribute(c,d,p,h,v,new Ct)),u&&(g.normal=Pi.getInterpolatedAttribute(u,d,p,h,v,new Z),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const _={a:d,b:p,c:h,normal:new Z,materialIndex:0};Pi.getNormal(ru,ou,lu,_.normal),g.face=_,g.barycoord=v}return g}const Tv=new Z,Av=new Kt,Rv=new Kt,Eb=new Z,Cv=new gt,hu=new Z,Ad=new sa,wv=new gt,Rd=new Vu;class bb extends Jn{constructor(e,n){super(e,n),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=nv,this.bindMatrix=new gt,this.bindMatrixInverse=new gt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ei),this.boundingBox.makeEmpty();const n=e.getAttribute("position");for(let a=0;a<n.count;a++)this.getVertexPosition(a,hu),this.boundingBox.expandByPoint(hu)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new sa),this.boundingSphere.makeEmpty();const n=e.getAttribute("position");for(let a=0;a<n.count;a++)this.getVertexPosition(a,hu),this.boundingSphere.expandByPoint(hu)}copy(e,n){return super.copy(e,n),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,n){const a=this.material,o=this.matrixWorld;a!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ad.copy(this.boundingSphere),Ad.applyMatrix4(o),e.ray.intersectsSphere(Ad)!==!1&&(wv.copy(o).invert(),Rd.copy(e.ray).applyMatrix4(wv),!(this.boundingBox!==null&&Rd.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,n,Rd)))}getVertexPosition(e,n){return super.getVertexPosition(e,n),this.applyBoneTransform(e,n),n}bind(e,n){this.skeleton=e,n===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),n=this.matrixWorld),this.bindMatrix.copy(n),this.bindMatrixInverse.copy(n).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Kt,n=this.geometry.attributes.skinWeight;for(let a=0,o=n.count;a<o;a++){e.fromBufferAttribute(n,a);const c=1/e.manhattanLength();c!==1/0?e.multiplyScalar(c):e.set(1,0,0,0),n.setXYZW(a,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===nv?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===bE?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ze("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,n){const a=this.skeleton,o=this.geometry;Av.fromBufferAttribute(o.attributes.skinIndex,e),Rv.fromBufferAttribute(o.attributes.skinWeight,e),Tv.copy(n).applyMatrix4(this.bindMatrix),n.set(0,0,0);for(let c=0;c<4;c++){const u=Rv.getComponent(c);if(u!==0){const d=Av.getComponent(c);Cv.multiplyMatrices(a.bones[d].matrixWorld,a.boneInverses[d]),n.addScaledVector(Eb.copy(Tv).applyMatrix4(Cv),u)}}return n.applyMatrix4(this.bindMatrixInverse)}}class Zx extends en{constructor(){super(),this.isBone=!0,this.type="Bone"}}class $p extends Rn{constructor(e=null,n=1,a=1,o,c,u,d,p,h=Sn,g=Sn,v,_){super(null,u,d,p,h,g,o,c,v,_),this.isDataTexture=!0,this.image={data:e,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Dv=new gt,Tb=new gt;class em{constructor(e=[],n=[]){this.uuid=Fi(),this.bones=e.slice(0),this.boneInverses=n,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,n=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),n.length===0)this.calculateInverses();else if(e.length!==n.length){Ze("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let a=0,o=this.bones.length;a<o;a++)this.boneInverses.push(new gt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,n=this.bones.length;e<n;e++){const a=new gt;this.bones[e]&&a.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(a)}}pose(){for(let e=0,n=this.bones.length;e<n;e++){const a=this.bones[e];a&&a.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,n=this.bones.length;e<n;e++){const a=this.bones[e];a&&(a.parent&&a.parent.isBone?(a.matrix.copy(a.parent.matrixWorld).invert(),a.matrix.multiply(a.matrixWorld)):a.matrix.copy(a.matrixWorld),a.matrix.decompose(a.position,a.quaternion,a.scale))}}update(){const e=this.bones,n=this.boneInverses,a=this.boneMatrices,o=this.boneTexture;for(let c=0,u=e.length;c<u;c++){const d=e[c]?e[c].matrixWorld:Tb;Dv.multiplyMatrices(d,n[c]),Dv.toArray(a,c*16)}o!==null&&(o.needsUpdate=!0)}clone(){return new em(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const n=new Float32Array(e*e*4);n.set(this.boneMatrices);const a=new $p(n,e,e,Mi,yi);return a.needsUpdate=!0,this.boneMatrices=n,this.boneTexture=a,this}getBoneByName(e){for(let n=0,a=this.bones.length;n<a;n++){const o=this.bones[n];if(o.name===e)return o}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,n){this.uuid=e.uuid;for(let a=0,o=e.bones.length;a<o;a++){const c=e.bones[a];let u=n[c];u===void 0&&(Ze("Skeleton: No bone found with UUID:",c),u=new Zx),this.bones.push(u),this.boneInverses.push(new gt().fromArray(e.boneInverses[a]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const n=this.bones,a=this.boneInverses;for(let o=0,c=n.length;o<c;o++){const u=n[o];e.bones.push(u.uuid);const d=a[o];e.boneInverses.push(d.toArray())}return e}}class Lp extends kn{constructor(e,n,a,o=1){super(e,n,a),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=o}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Yr=new gt,Nv=new gt,du=[],Lv=new Ei,Ab=new gt,dl=new Jn,pl=new sa;class Rb extends Jn{constructor(e,n,a){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new Lp(new Float32Array(a*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=a,this.boundingBox=null,this.boundingSphere=null;for(let o=0;o<a;o++)this.setMatrixAt(o,Ab)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new Ei),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let a=0;a<n;a++)this.getMatrixAt(a,Yr),Lv.copy(e.boundingBox).applyMatrix4(Yr),this.boundingBox.union(Lv)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new sa),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let a=0;a<n;a++)this.getMatrixAt(a,Yr),pl.copy(e.boundingSphere).applyMatrix4(Yr),this.boundingSphere.union(pl)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const a=n.morphTargetInfluences,o=this.morphTexture.source.data.data,c=a.length+1,u=e*c+1;for(let d=0;d<a.length;d++)a[d]=o[u+d]}raycast(e,n){const a=this.matrixWorld,o=this.count;if(dl.geometry=this.geometry,dl.material=this.material,dl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),pl.copy(this.boundingSphere),pl.applyMatrix4(a),e.ray.intersectsSphere(pl)!==!1))for(let c=0;c<o;c++){this.getMatrixAt(c,Yr),Nv.multiplyMatrices(a,Yr),dl.matrixWorld=Nv,dl.raycast(e,du);for(let u=0,d=du.length;u<d;u++){const p=du[u];p.instanceId=c,p.object=this,n.push(p)}du.length=0}}setColorAt(e,n){this.instanceColor===null&&(this.instanceColor=new Lp(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,n){n.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,n){const a=n.morphTargetInfluences,o=a.length+1;this.morphTexture===null&&(this.morphTexture=new $p(new Float32Array(o*this.count),o,this.count,Xp,yi));const c=this.morphTexture.source.data.data;let u=0;for(let h=0;h<a.length;h++)u+=a[h];const d=this.geometry.morphTargetsRelative?1:1-u,p=o*e;c[p]=d,c.set(a,p+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Cd=new Z,Cb=new Z,wb=new pt;class qs{constructor(e=new Z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,a,o){return this.normal.set(e,n,a),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,a){const o=Cd.subVectors(a,n).cross(Cb.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const a=e.delta(Cd),o=this.normal.dot(a);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(e.start).addScaledVector(a,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return n<0&&a>0||a<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const a=n||wb.getNormalMatrix(e),o=this.coplanarPoint(Cd).applyMatrix4(e),c=this.normal.applyMatrix3(a).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ks=new sa,Db=new Ct(.5,.5),pu=new Z;class tm{constructor(e=new qs,n=new qs,a=new qs,o=new qs,c=new qs,u=new qs){this.planes=[e,n,a,o,c,u]}set(e,n,a,o,c,u){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(a),d[3].copy(o),d[4].copy(c),d[5].copy(u),this}copy(e){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,n=$i,a=!1){const o=this.planes,c=e.elements,u=c[0],d=c[1],p=c[2],h=c[3],g=c[4],v=c[5],_=c[6],x=c[7],E=c[8],T=c[9],M=c[10],S=c[11],w=c[12],N=c[13],D=c[14],F=c[15];if(o[0].setComponents(h-u,x-g,S-E,F-w).normalize(),o[1].setComponents(h+u,x+g,S+E,F+w).normalize(),o[2].setComponents(h+d,x+v,S+T,F+N).normalize(),o[3].setComponents(h-d,x-v,S-T,F-N).normalize(),a)o[4].setComponents(p,_,M,D).normalize(),o[5].setComponents(h-p,x-_,S-M,F-D).normalize();else if(o[4].setComponents(h-p,x-_,S-M,F-D).normalize(),n===$i)o[5].setComponents(h+p,x+_,S+M,F+D).normalize();else if(n===wl)o[5].setComponents(p,_,M,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ks.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ks.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ks)}intersectsSprite(e){ks.center.set(0,0,0);const n=Db.distanceTo(e.center);return ks.radius=.7071067811865476+n,ks.applyMatrix4(e.matrixWorld),this.intersectsSphere(ks)}intersectsSphere(e){const n=this.planes,a=e.center,o=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(a)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let a=0;a<6;a++){const o=n[a];if(pu.x=o.normal.x>0?e.max.x:e.min.x,pu.y=o.normal.y>0?e.max.y:e.min.y,pu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(pu)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Qx extends Hi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new st(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Fu=new Z,zu=new Z,Uv=new gt,ml=new Vu,mu=new sa,wd=new Z,Ov=new Z;class nm extends en{constructor(e=new bi,n=new Qx){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,a=[0];for(let o=1,c=n.count;o<c;o++)Fu.fromBufferAttribute(n,o-1),zu.fromBufferAttribute(n,o),a[o]=a[o-1],a[o]+=Fu.distanceTo(zu);e.setAttribute("lineDistance",new zi(a,1))}else Ze("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const a=this.geometry,o=this.matrixWorld,c=e.params.Line.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),mu.copy(a.boundingSphere),mu.applyMatrix4(o),mu.radius+=c,e.ray.intersectsSphere(mu)===!1)return;Uv.copy(o).invert(),ml.copy(e.ray).applyMatrix4(Uv);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,h=this.isLineSegments?2:1,g=a.index,_=a.attributes.position;if(g!==null){const x=Math.max(0,u.start),E=Math.min(g.count,u.start+u.count);for(let T=x,M=E-1;T<M;T+=h){const S=g.getX(T),w=g.getX(T+1),N=gu(this,e,ml,p,S,w,T);N&&n.push(N)}if(this.isLineLoop){const T=g.getX(E-1),M=g.getX(x),S=gu(this,e,ml,p,T,M,E-1);S&&n.push(S)}}else{const x=Math.max(0,u.start),E=Math.min(_.count,u.start+u.count);for(let T=x,M=E-1;T<M;T+=h){const S=gu(this,e,ml,p,T,T+1,T);S&&n.push(S)}if(this.isLineLoop){const T=gu(this,e,ml,p,E-1,x,E-1);T&&n.push(T)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function gu(r,e,n,a,o,c,u){const d=r.geometry.attributes.position;if(Fu.fromBufferAttribute(d,o),zu.fromBufferAttribute(d,c),n.distanceSqToSegment(Fu,zu,wd,Ov)>a)return;wd.applyMatrix4(r.matrixWorld);const h=e.ray.origin.distanceTo(wd);if(!(h<e.near||h>e.far))return{distance:h,point:Ov.clone().applyMatrix4(r.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:r}}const Iv=new Z,Pv=new Z;class Nb extends nm{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,a=[];for(let o=0,c=n.count;o<c;o+=2)Iv.fromBufferAttribute(n,o),Pv.fromBufferAttribute(n,o+1),a[o]=o===0?0:a[o-1],a[o+1]=a[o]+Iv.distanceTo(Pv);e.setAttribute("lineDistance",new zi(a,1))}else Ze("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Lb extends nm{constructor(e,n){super(e,n),this.isLineLoop=!0,this.type="LineLoop"}}class Jx extends Hi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new st(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Bv=new gt,Up=new Vu,_u=new sa,vu=new Z;class Ub extends en{constructor(e=new bi,n=new Jx){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const a=this.geometry,o=this.matrixWorld,c=e.params.Points.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),_u.copy(a.boundingSphere),_u.applyMatrix4(o),_u.radius+=c,e.ray.intersectsSphere(_u)===!1)return;Bv.copy(o).invert(),Up.copy(e.ray).applyMatrix4(Bv);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,h=a.index,v=a.attributes.position;if(h!==null){const _=Math.max(0,u.start),x=Math.min(h.count,u.start+u.count);for(let E=_,T=x;E<T;E++){const M=h.getX(E);vu.fromBufferAttribute(v,M),Fv(vu,M,p,o,e,n,this)}}else{const _=Math.max(0,u.start),x=Math.min(v.count,u.start+u.count);for(let E=_,T=x;E<T;E++)vu.fromBufferAttribute(v,E),Fv(vu,E,p,o,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Fv(r,e,n,a,o,c,u){const d=Up.distanceSqToPoint(r);if(d<n){const p=new Z;Up.closestPointToPoint(r,p),p.applyMatrix4(a);const h=o.ray.origin.distanceTo(p);if(h<o.near||h>o.far)return;c.push({distance:h,distanceToRay:Math.sqrt(d),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class $x extends Rn{constructor(e=[],n=er,a,o,c,u,d,p,h,g){super(e,n,a,o,c,u,d,p,h,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Nl extends Rn{constructor(e,n,a=na,o,c,u,d=Sn,p=Sn,h,g=Fa,v=1){if(g!==Fa&&g!==Zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:n,depth:v};super(_,o,c,u,d,p,g,a,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Qp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Ob extends Nl{constructor(e,n=na,a=er,o,c,u=Sn,d=Sn,p,h=Fa){const g={width:e,height:e,depth:1},v=[g,g,g,g,g,g];super(e,e,n,a,o,c,u,d,p,h),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class eS extends Rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ll extends bi{constructor(e=1,n=1,a=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:a,widthSegments:o,heightSegments:c,depthSegments:u};const d=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const p=[],h=[],g=[],v=[];let _=0,x=0;E("z","y","x",-1,-1,a,n,e,u,c,0),E("z","y","x",1,-1,a,n,-e,u,c,1),E("x","z","y",1,1,e,a,n,o,u,2),E("x","z","y",1,-1,e,a,-n,o,u,3),E("x","y","z",1,-1,e,n,a,o,c,4),E("x","y","z",-1,-1,e,n,-a,o,c,5),this.setIndex(p),this.setAttribute("position",new zi(h,3)),this.setAttribute("normal",new zi(g,3)),this.setAttribute("uv",new zi(v,2));function E(T,M,S,w,N,D,F,z,P,A,L){const fe=D/P,H=F/A,$=D/2,ae=F/2,ue=z/2,J=P+1,I=A+1;let B=0,ce=0;const Q=new Z;for(let ve=0;ve<I;ve++){const U=ve*H-ae;for(let j=0;j<J;j++){const ge=j*fe-$;Q[T]=ge*w,Q[M]=U*N,Q[S]=ue,h.push(Q.x,Q.y,Q.z),Q[T]=0,Q[M]=0,Q[S]=z>0?1:-1,g.push(Q.x,Q.y,Q.z),v.push(j/P),v.push(1-ve/A),B+=1}}for(let ve=0;ve<A;ve++)for(let U=0;U<P;U++){const j=_+U+J*ve,ge=_+U+J*(ve+1),Ae=_+(U+1)+J*(ve+1),Ue=_+(U+1)+J*ve;p.push(j,ge,Ue),p.push(ge,Ae,Ue),ce+=6}d.addGroup(x,ce,L),x+=ce,_+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ll(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ul extends bi{constructor(e=1,n=1,a=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:a,heightSegments:o};const c=e/2,u=n/2,d=Math.floor(a),p=Math.floor(o),h=d+1,g=p+1,v=e/d,_=n/p,x=[],E=[],T=[],M=[];for(let S=0;S<g;S++){const w=S*_-u;for(let N=0;N<h;N++){const D=N*v-c;E.push(D,-w,0),T.push(0,0,1),M.push(N/d),M.push(1-S/p)}}for(let S=0;S<p;S++)for(let w=0;w<d;w++){const N=w+h*S,D=w+h*(S+1),F=w+1+h*(S+1),z=w+1+h*S;x.push(N,D,z),x.push(D,F,z)}this.setIndex(x),this.setAttribute("position",new zi(E,3)),this.setAttribute("normal",new zi(T,3)),this.setAttribute("uv",new zi(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ul(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ib extends Hi{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new st(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}function oo(r){const e={};for(const n in r){e[n]={};for(const a in r[n]){const o=r[n][a];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(Ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][a]=null):e[n][a]=o.clone():Array.isArray(o)?e[n][a]=o.slice():e[n][a]=o}}return e}function Vn(r){const e={};for(let n=0;n<r.length;n++){const a=oo(r[n]);for(const o in a)e[o]=a[o]}return e}function Pb(r){const e=[];for(let n=0;n<r.length;n++)e.push(r[n].clone());return e}function tS(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}const Bb={clone:oo,merge:Vn};var Fb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class aa extends Hi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fb,this.fragmentShader=zb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=oo(e.uniforms),this.uniformsGroups=Pb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const o in this.extensions)this.extensions[o]===!0&&(a[o]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class Hb extends aa{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class im extends Hi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new st(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new st(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kx,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ia,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ra extends im{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ct(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return _t(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new st(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new st(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new st(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Vb extends Hi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=RE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Gb extends Hi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function xu(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function kb(r){function e(o,c){return r[o]-r[c]}const n=r.length,a=new Array(n);for(let o=0;o!==n;++o)a[o]=o;return a.sort(e),a}function zv(r,e,n){const a=r.length,o=new r.constructor(a);for(let c=0,u=0;u!==a;++c){const d=n[c]*e;for(let p=0;p!==e;++p)o[u++]=r[d+p]}return o}function nS(r,e,n,a){let o=1,c=r[0];for(;c!==void 0&&c[a]===void 0;)c=r[o++];if(c===void 0)return;let u=c[a];if(u!==void 0)if(Array.isArray(u))do u=c[a],u!==void 0&&(e.push(c.time),n.push(...u)),c=r[o++];while(c!==void 0);else if(u.toArray!==void 0)do u=c[a],u!==void 0&&(e.push(c.time),u.toArray(n,n.length)),c=r[o++];while(c!==void 0);else do u=c[a],u!==void 0&&(e.push(c.time),n.push(u)),c=r[o++];while(c!==void 0)}class ho{constructor(e,n,a,o){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=o!==void 0?o:new n.constructor(a),this.sampleValues=n,this.valueSize=a,this.settings=null,this.DefaultSettings_={}}evaluate(e){const n=this.parameterPositions;let a=this._cachedIndex,o=n[a],c=n[a-1];e:{t:{let u;n:{i:if(!(e<o)){for(let d=a+2;;){if(o===void 0){if(e<c)break i;return a=n.length,this._cachedIndex=a,this.copySampleValue_(a-1)}if(a===d)break;if(c=o,o=n[++a],e<o)break t}u=n.length;break n}if(!(e>=c)){const d=n[1];e<d&&(a=2,c=d);for(let p=a-2;;){if(c===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(a===p)break;if(o=c,c=n[--a-1],e>=c)break t}u=a,a=0;break n}break e}for(;a<u;){const d=a+u>>>1;e<n[d]?u=d:a=d+1}if(o=n[a],c=n[a-1],c===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(o===void 0)return a=n.length,this._cachedIndex=a,this.copySampleValue_(a-1)}this._cachedIndex=a,this.intervalChanged_(a,c,o)}return this.interpolate_(a,c,e,o)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const n=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o;for(let u=0;u!==o;++u)n[u]=a[c+u];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Xb extends ho{constructor(e,n,a,o){super(e,n,a,o),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:av,endingEnd:av}}intervalChanged_(e,n,a){const o=this.parameterPositions;let c=e-2,u=e+1,d=o[c],p=o[u];if(d===void 0)switch(this.getSettings_().endingStart){case sv:c=e,d=2*n-a;break;case rv:c=o.length-2,d=n+o[c]-o[c+1];break;default:c=e,d=a}if(p===void 0)switch(this.getSettings_().endingEnd){case sv:u=e,p=2*a-n;break;case rv:u=1,p=a+o[1]-o[0];break;default:u=e-1,p=n}const h=(a-n)*.5,g=this.valueSize;this._weightPrev=h/(n-d),this._weightNext=h/(p-a),this._offsetPrev=c*g,this._offsetNext=u*g}interpolate_(e,n,a,o){const c=this.resultBuffer,u=this.sampleValues,d=this.valueSize,p=e*d,h=p-d,g=this._offsetPrev,v=this._offsetNext,_=this._weightPrev,x=this._weightNext,E=(a-n)/(o-n),T=E*E,M=T*E,S=-_*M+2*_*T-_*E,w=(1+_)*M+(-1.5-2*_)*T+(-.5+_)*E+1,N=(-1-x)*M+(1.5+x)*T+.5*E,D=x*M-x*T;for(let F=0;F!==d;++F)c[F]=S*u[g+F]+w*u[h+F]+N*u[p+F]+D*u[v+F];return c}}class Wb extends ho{constructor(e,n,a,o){super(e,n,a,o)}interpolate_(e,n,a,o){const c=this.resultBuffer,u=this.sampleValues,d=this.valueSize,p=e*d,h=p-d,g=(a-n)/(o-n),v=1-g;for(let _=0;_!==d;++_)c[_]=u[h+_]*v+u[p+_]*g;return c}}class jb extends ho{constructor(e,n,a,o){super(e,n,a,o)}interpolate_(e){return this.copySampleValue_(e-1)}}class qb extends ho{interpolate_(e,n,a,o){const c=this.resultBuffer,u=this.sampleValues,d=this.valueSize,p=e*d,h=p-d,g=this.settings||this.DefaultSettings_,v=g.inTangents,_=g.outTangents;if(!v||!_){const T=(a-n)/(o-n),M=1-T;for(let S=0;S!==d;++S)c[S]=u[h+S]*M+u[p+S]*T;return c}const x=d*2,E=e-1;for(let T=0;T!==d;++T){const M=u[h+T],S=u[p+T],w=E*x+T*2,N=_[w],D=_[w+1],F=e*x+T*2,z=v[F],P=v[F+1];let A=(a-n)/(o-n),L,fe,H,$,ae;for(let ue=0;ue<8;ue++){L=A*A,fe=L*A,H=1-A,$=H*H,ae=$*H;const I=ae*n+3*$*A*N+3*H*L*z+fe*o-a;if(Math.abs(I)<1e-10)break;const B=3*$*(N-n)+6*H*A*(z-N)+3*L*(o-z);if(Math.abs(B)<1e-10)break;A=A-I/B,A=Math.max(0,Math.min(1,A))}c[T]=ae*M+3*$*A*D+3*H*L*P+fe*S}return c}}class Vi{constructor(e,n,a,o){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=xu(n,this.TimeBufferType),this.values=xu(a,this.ValueBufferType),this.setInterpolation(o||this.DefaultInterpolation)}static toJSON(e){const n=e.constructor;let a;if(n.toJSON!==this.toJSON)a=n.toJSON(e);else{a={name:e.name,times:xu(e.times,Array),values:xu(e.values,Array)};const o=e.getInterpolation();o!==e.DefaultInterpolation&&(a.interpolation=o)}return a.type=e.ValueTypeName,a}InterpolantFactoryMethodDiscrete(e){return new jb(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Wb(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Xb(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const n=new qb(this.times,this.values,this.getValueSize(),e);return this.settings&&(n.settings=this.settings),n}setInterpolation(e){let n;switch(e){case Rl:n=this.InterpolantFactoryMethodDiscrete;break;case Cl:n=this.InterpolantFactoryMethodLinear;break;case ad:n=this.InterpolantFactoryMethodSmooth;break;case iv:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){const a="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(a);return Ze("KeyframeTrack:",a),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Rl;case this.InterpolantFactoryMethodLinear:return Cl;case this.InterpolantFactoryMethodSmooth:return ad;case this.InterpolantFactoryMethodBezier:return iv}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const n=this.times;for(let a=0,o=n.length;a!==o;++a)n[a]+=e}return this}scale(e){if(e!==1){const n=this.times;for(let a=0,o=n.length;a!==o;++a)n[a]*=e}return this}trim(e,n){const a=this.times,o=a.length;let c=0,u=o-1;for(;c!==o&&a[c]<e;)++c;for(;u!==-1&&a[u]>n;)--u;if(++u,c!==0||u!==o){c>=u&&(u=Math.max(u,1),c=u-1);const d=this.getValueSize();this.times=a.slice(c,u),this.values=this.values.slice(c*d,u*d)}return this}validate(){let e=!0;const n=this.getValueSize();n-Math.floor(n)!==0&&(nt("KeyframeTrack: Invalid value size in track.",this),e=!1);const a=this.times,o=this.values,c=a.length;c===0&&(nt("KeyframeTrack: Track is empty.",this),e=!1);let u=null;for(let d=0;d!==c;d++){const p=a[d];if(typeof p=="number"&&isNaN(p)){nt("KeyframeTrack: Time is not a valid number.",this,d,p),e=!1;break}if(u!==null&&u>p){nt("KeyframeTrack: Out of order keys.",this,d,p,u),e=!1;break}u=p}if(o!==void 0&&PE(o))for(let d=0,p=o.length;d!==p;++d){const h=o[d];if(isNaN(h)){nt("KeyframeTrack: Value is not a valid number.",this,d,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),n=this.values.slice(),a=this.getValueSize(),o=this.getInterpolation()===ad,c=e.length-1;let u=1;for(let d=1;d<c;++d){let p=!1;const h=e[d],g=e[d+1];if(h!==g&&(d!==1||h!==e[0]))if(o)p=!0;else{const v=d*a,_=v-a,x=v+a;for(let E=0;E!==a;++E){const T=n[v+E];if(T!==n[_+E]||T!==n[x+E]){p=!0;break}}}if(p){if(d!==u){e[u]=e[d];const v=d*a,_=u*a;for(let x=0;x!==a;++x)n[_+x]=n[v+x]}++u}}if(c>0){e[u]=e[c];for(let d=c*a,p=u*a,h=0;h!==a;++h)n[p+h]=n[d+h];++u}return u!==e.length?(this.times=e.slice(0,u),this.values=n.slice(0,u*a)):(this.times=e,this.values=n),this}clone(){const e=this.times.slice(),n=this.values.slice(),a=this.constructor,o=new a(this.name,e,n);return o.createInterpolant=this.createInterpolant,o}}Vi.prototype.ValueTypeName="";Vi.prototype.TimeBufferType=Float32Array;Vi.prototype.ValueBufferType=Float32Array;Vi.prototype.DefaultInterpolation=Cl;class po extends Vi{constructor(e,n,a){super(e,n,a)}}po.prototype.ValueTypeName="bool";po.prototype.ValueBufferType=Array;po.prototype.DefaultInterpolation=Rl;po.prototype.InterpolantFactoryMethodLinear=void 0;po.prototype.InterpolantFactoryMethodSmooth=void 0;class iS extends Vi{constructor(e,n,a,o){super(e,n,a,o)}}iS.prototype.ValueTypeName="color";class lo extends Vi{constructor(e,n,a,o){super(e,n,a,o)}}lo.prototype.ValueTypeName="number";class Yb extends ho{constructor(e,n,a,o){super(e,n,a,o)}interpolate_(e,n,a,o){const c=this.resultBuffer,u=this.sampleValues,d=this.valueSize,p=(a-n)/(o-n);let h=e*d;for(let g=h+d;h!==g;h+=4)za.slerpFlat(c,0,u,h-d,u,h,p);return c}}class co extends Vi{constructor(e,n,a,o){super(e,n,a,o)}InterpolantFactoryMethodLinear(e){return new Yb(this.times,this.values,this.getValueSize(),e)}}co.prototype.ValueTypeName="quaternion";co.prototype.InterpolantFactoryMethodSmooth=void 0;class mo extends Vi{constructor(e,n,a){super(e,n,a)}}mo.prototype.ValueTypeName="string";mo.prototype.ValueBufferType=Array;mo.prototype.DefaultInterpolation=Rl;mo.prototype.InterpolantFactoryMethodLinear=void 0;mo.prototype.InterpolantFactoryMethodSmooth=void 0;class uo extends Vi{constructor(e,n,a,o){super(e,n,a,o)}}uo.prototype.ValueTypeName="vector";class Kb{constructor(e="",n=-1,a=[],o=TE){this.name=e,this.tracks=a,this.duration=n,this.blendMode=o,this.uuid=Fi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const n=[],a=e.tracks,o=1/(e.fps||1);for(let u=0,d=a.length;u!==d;++u)n.push(Qb(a[u]).scale(o));const c=new this(e.name,e.duration,n,e.blendMode);return c.uuid=e.uuid,c.userData=JSON.parse(e.userData||"{}"),c}static toJSON(e){const n=[],a=e.tracks,o={name:e.name,duration:e.duration,tracks:n,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let c=0,u=a.length;c!==u;++c)n.push(Vi.toJSON(a[c]));return o}static CreateFromMorphTargetSequence(e,n,a,o){const c=n.length,u=[];for(let d=0;d<c;d++){let p=[],h=[];p.push((d+c-1)%c,d,(d+1)%c),h.push(0,1,0);const g=kb(p);p=zv(p,1,g),h=zv(h,1,g),!o&&p[0]===0&&(p.push(c),h.push(h[0])),u.push(new lo(".morphTargetInfluences["+n[d].name+"]",p,h).scale(1/a))}return new this(e,-1,u)}static findByName(e,n){let a=e;if(!Array.isArray(e)){const o=e;a=o.geometry&&o.geometry.animations||o.animations}for(let o=0;o<a.length;o++)if(a[o].name===n)return a[o];return null}static CreateClipsFromMorphTargetSequences(e,n,a){const o={},c=/^([\w-]*?)([\d]+)$/;for(let d=0,p=e.length;d<p;d++){const h=e[d],g=h.name.match(c);if(g&&g.length>1){const v=g[1];let _=o[v];_||(o[v]=_=[]),_.push(h)}}const u=[];for(const d in o)u.push(this.CreateFromMorphTargetSequence(d,o[d],n,a));return u}static parseAnimation(e,n){if(Ze("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return nt("AnimationClip: No animation in JSONLoader data."),null;const a=function(v,_,x,E,T){if(x.length!==0){const M=[],S=[];nS(x,M,S,E),M.length!==0&&T.push(new v(_,M,S))}},o=[],c=e.name||"default",u=e.fps||30,d=e.blendMode;let p=e.length||-1;const h=e.hierarchy||[];for(let v=0;v<h.length;v++){const _=h[v].keys;if(!(!_||_.length===0))if(_[0].morphTargets){const x={};let E;for(E=0;E<_.length;E++)if(_[E].morphTargets)for(let T=0;T<_[E].morphTargets.length;T++)x[_[E].morphTargets[T]]=-1;for(const T in x){const M=[],S=[];for(let w=0;w!==_[E].morphTargets.length;++w){const N=_[E];M.push(N.time),S.push(N.morphTarget===T?1:0)}o.push(new lo(".morphTargetInfluence["+T+"]",M,S))}p=x.length*u}else{const x=".bones["+n[v].name+"]";a(uo,x+".position",_,"pos",o),a(co,x+".quaternion",_,"rot",o),a(uo,x+".scale",_,"scl",o)}}return o.length===0?null:new this(c,p,o,d)}resetDuration(){const e=this.tracks;let n=0;for(let a=0,o=e.length;a!==o;++a){const c=this.tracks[a];n=Math.max(n,c.times[c.times.length-1])}return this.duration=n,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let n=0;n<this.tracks.length;n++)e=e&&this.tracks[n].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let a=0;a<this.tracks.length;a++)e.push(this.tracks[a].clone());const n=new this.constructor(this.name,this.duration,e,this.blendMode);return n.userData=JSON.parse(JSON.stringify(this.userData)),n}toJSON(){return this.constructor.toJSON(this)}}function Zb(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return lo;case"vector":case"vector2":case"vector3":case"vector4":return uo;case"color":return iS;case"quaternion":return co;case"bool":case"boolean":return po;case"string":return mo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Qb(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Zb(r.type);if(r.times===void 0){const n=[],a=[];nS(r.keys,n,a,"value"),r.times=n,r.values=a}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Ua={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(Hv(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!Hv(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function Hv(r){try{const e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Jb{constructor(e,n,a){const o=this;let c=!1,u=0,d=0,p;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=a,this._abortController=null,this.itemStart=function(g){d++,c===!1&&o.onStart!==void 0&&o.onStart(g,u,d),c=!0},this.itemEnd=function(g){u++,o.onProgress!==void 0&&o.onProgress(g,u,d),u===d&&(c=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(g){o.onError!==void 0&&o.onError(g)},this.resolveURL=function(g){return p?p(g):g},this.setURLModifier=function(g){return p=g,this},this.addHandler=function(g,v){return h.push(g,v),this},this.removeHandler=function(g){const v=h.indexOf(g);return v!==-1&&h.splice(v,2),this},this.getHandler=function(g){for(let v=0,_=h.length;v<_;v+=2){const x=h[v],E=h[v+1];if(x.global&&(x.lastIndex=0),x.test(g))return E}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const $b=new Jb;class go{constructor(e){this.manager=e!==void 0?e:$b,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,n){const a=this;return new Promise(function(o,c){a.load(e,o,n,c)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}go.DEFAULT_MATERIAL_NAME="__DEFAULT";const Na={};class eT extends Error{constructor(e,n){super(e),this.response=n}}class aS extends go{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,n,a,o){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=Ua.get(`file:${e}`);if(c!==void 0)return this.manager.itemStart(e),setTimeout(()=>{n&&n(c),this.manager.itemEnd(e)},0),c;if(Na[e]!==void 0){Na[e].push({onLoad:n,onProgress:a,onError:o});return}Na[e]=[],Na[e].push({onLoad:n,onProgress:a,onError:o});const u=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),d=this.mimeType,p=this.responseType;fetch(u).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&Ze("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const g=Na[e],v=h.body.getReader(),_=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),x=_?parseInt(_):0,E=x!==0;let T=0;const M=new ReadableStream({start(S){w();function w(){v.read().then(({done:N,value:D})=>{if(N)S.close();else{T+=D.byteLength;const F=new ProgressEvent("progress",{lengthComputable:E,loaded:T,total:x});for(let z=0,P=g.length;z<P;z++){const A=g[z];A.onProgress&&A.onProgress(F)}S.enqueue(D),w()}},N=>{S.error(N)})}}});return new Response(M)}else throw new eT(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(p){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(g=>new DOMParser().parseFromString(g,d));case"json":return h.json();default:if(d==="")return h.text();{const v=/charset="?([^;"\s]*)"?/i.exec(d),_=v&&v[1]?v[1].toLowerCase():void 0,x=new TextDecoder(_);return h.arrayBuffer().then(E=>x.decode(E))}}}).then(h=>{Ua.add(`file:${e}`,h);const g=Na[e];delete Na[e];for(let v=0,_=g.length;v<_;v++){const x=g[v];x.onLoad&&x.onLoad(h)}}).catch(h=>{const g=Na[e];if(g===void 0)throw this.manager.itemError(e),h;delete Na[e];for(let v=0,_=g.length;v<_;v++){const x=g[v];x.onError&&x.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Kr=new WeakMap;class tT extends go{constructor(e){super(e)}load(e,n,a,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,u=Ua.get(`image:${e}`);if(u!==void 0){if(u.complete===!0)c.manager.itemStart(e),setTimeout(function(){n&&n(u),c.manager.itemEnd(e)},0);else{let v=Kr.get(u);v===void 0&&(v=[],Kr.set(u,v)),v.push({onLoad:n,onError:o})}return u}const d=Dl("img");function p(){g(),n&&n(this);const v=Kr.get(this)||[];for(let _=0;_<v.length;_++){const x=v[_];x.onLoad&&x.onLoad(this)}Kr.delete(this),c.manager.itemEnd(e)}function h(v){g(),o&&o(v),Ua.remove(`image:${e}`);const _=Kr.get(this)||[];for(let x=0;x<_.length;x++){const E=_[x];E.onError&&E.onError(v)}Kr.delete(this),c.manager.itemError(e),c.manager.itemEnd(e)}function g(){d.removeEventListener("load",p,!1),d.removeEventListener("error",h,!1)}return d.addEventListener("load",p,!1),d.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),Ua.add(`image:${e}`,d),c.manager.itemStart(e),d.src=e,d}}class nT extends go{constructor(e){super(e)}load(e,n,a,o){const c=new Rn,u=new tT(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(d){c.image=d,c.needsUpdate=!0,n!==void 0&&n(c)},a,o),c}}class Ol extends en{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new st(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class iT extends Ol{constructor(e,n,a){super(e,a),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.groundColor=new st(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}toJSON(e){const n=super.toJSON(e);return n.object.groundColor=this.groundColor.getHex(),n}}const Dd=new gt,Vv=new Z,Gv=new Z;class am{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ct(512,512),this.mapType=ui,this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tm,this._frameExtents=new Ct(1,1),this._viewportCount=1,this._viewports=[new Kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,a=this.matrix;Vv.setFromMatrixPosition(e.matrixWorld),n.position.copy(Vv),Gv.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Gv),n.updateMatrixWorld(),Dd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dd,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===wl||n.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(Dd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Su=new Z,yu=new za,qi=new Z;class sS extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=$i,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Su,yu,qi),qi.x===1&&qi.y===1&&qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Su,yu,qi.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(Su,yu,qi),qi.x===1&&qi.y===1&&qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Su,yu,qi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const _s=new Z,kv=new Ct,Xv=new Ct;class Gn extends sS{constructor(e=50,n=1,a=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ro*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ml*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ro*2*Math.atan(Math.tan(Ml*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,a){_s.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_s.x,_s.y).multiplyScalar(-e/_s.z),_s.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(_s.x,_s.y).multiplyScalar(-e/_s.z)}getViewSize(e,n){return this.getViewBounds(e,kv,Xv),n.subVectors(Xv,kv)}setViewOffset(e,n,a,o,c,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ml*.5*this.fov)/this.zoom,a=2*n,o=this.aspect*a,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,h=u.fullHeight;c+=u.offsetX*o/p,n-=u.offsetY*a/h,o*=u.width/p,a*=u.height/h}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-a,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class aT extends am{constructor(){super(new Gn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const n=this.camera,a=ro*2*e.angle*this.focus,o=this.mapSize.width/this.mapSize.height*this.aspect,c=e.distance||n.far;(a!==n.fov||o!==n.aspect||c!==n.far)&&(n.fov=a,n.aspect=o,n.far=c,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class sT extends Ol{constructor(e,n,a=0,o=Math.PI/3,c=0,u=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.target=new en,this.distance=a,this.angle=o,this.penumbra=c,this.decay=u,this.map=null,this.shadow=new aT}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.angle=this.angle,n.object.decay=this.decay,n.object.penumbra=this.penumbra,n.object.target=this.target.uuid,this.map&&this.map.isTexture&&(n.object.map=this.map.toJSON(e).uuid),n.object.shadow=this.shadow.toJSON(),n}}class rT extends am{constructor(){super(new Gn(90,1,.5,500)),this.isPointLightShadow=!0}}class oT extends Ol{constructor(e,n,a=0,o=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=o,this.shadow=new rT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class Gu extends sS{constructor(e=-1,n=1,a=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=a,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,a,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=a-e,u=a+e,d=o+n,p=o-n;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,u=c+h*this.view.width,d-=g*this.view.offsetY,p=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,d,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class lT extends am{constructor(){super(new Gu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Du extends Ol{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.target=new en,this.shadow=new lT}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class cT extends Ol{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class bl{static extractUrlBase(e){const n=e.lastIndexOf("/");return n===-1?"./":e.slice(0,n+1)}static resolveURL(e,n){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(n)&&/^\//.test(e)&&(n=n.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:n+e)}}const Nd=new WeakMap;class uT extends go{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ze("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ze("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,n,a,o){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,u=Ua.get(`image-bitmap:${e}`);if(u!==void 0){if(c.manager.itemStart(e),u.then){u.then(h=>{if(Nd.has(u)===!0)o&&o(Nd.get(u)),c.manager.itemError(e),c.manager.itemEnd(e);else return n&&n(h),c.manager.itemEnd(e),h});return}return setTimeout(function(){n&&n(u),c.manager.itemEnd(e)},0),u}const d={};d.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",d.headers=this.requestHeader,d.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const p=fetch(e,d).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(c.options,{colorSpaceConversion:"none"}))}).then(function(h){return Ua.add(`image-bitmap:${e}`,h),n&&n(h),c.manager.itemEnd(e),h}).catch(function(h){o&&o(h),Nd.set(p,h),Ua.remove(`image-bitmap:${e}`),c.manager.itemError(e),c.manager.itemEnd(e)});Ua.add(`image-bitmap:${e}`,p),c.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Zr=-90,Qr=1;class fT extends en{constructor(e,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Gn(Zr,Qr,e,n);o.layers=this.layers,this.add(o);const c=new Gn(Zr,Qr,e,n);c.layers=this.layers,this.add(c);const u=new Gn(Zr,Qr,e,n);u.layers=this.layers,this.add(u);const d=new Gn(Zr,Qr,e,n);d.layers=this.layers,this.add(d);const p=new Gn(Zr,Qr,e,n);p.layers=this.layers,this.add(p);const h=new Gn(Zr,Qr,e,n);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[a,o,c,u,d,p]=n;for(const h of n)this.remove(h);if(e===$i)a.up.set(0,1,0),a.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===wl)a.up.set(0,-1,0),a.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of n)this.add(h),h.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,d,p,h,g]=this.children,v=e.getRenderTarget(),_=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const T=a.texture.generateMipmaps;a.texture.generateMipmaps=!1;let M=!1;e.isWebGLRenderer===!0?M=e.state.buffers.depth.getReversed():M=e.reversedDepthBuffer,e.setRenderTarget(a,0,o),M&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(a,1,o),M&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(a,2,o),M&&e.autoClear===!1&&e.clearDepth(),e.render(n,d),e.setRenderTarget(a,3,o),M&&e.autoClear===!1&&e.clearDepth(),e.render(n,p),e.setRenderTarget(a,4,o),M&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),a.texture.generateMipmaps=T,e.setRenderTarget(a,5,o),M&&e.autoClear===!1&&e.clearDepth(),e.render(n,g),e.setRenderTarget(v,_,x),e.xr.enabled=E,a.texture.needsPMREMUpdate=!0}}class hT extends Gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const sm="\\[\\]\\.:\\/",dT=new RegExp("["+sm+"]","g"),rm="[^"+sm+"]",pT="[^"+sm.replace("\\.","")+"]",mT=/((?:WC+[\/:])*)/.source.replace("WC",rm),gT=/(WCOD+)?/.source.replace("WCOD",pT),_T=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",rm),vT=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",rm),xT=new RegExp("^"+mT+gT+_T+vT+"$"),ST=["material","materials","bones","map"];class yT{constructor(e,n,a){const o=a||Gt.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,o)}getValue(e,n){this.bind();const a=this._targetGroup.nCachedObjects_,o=this._bindings[a];o!==void 0&&o.getValue(e,n)}setValue(e,n){const a=this._bindings;for(let o=this._targetGroup.nCachedObjects_,c=a.length;o!==c;++o)a[o].setValue(e,n)}bind(){const e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,a=e.length;n!==a;++n)e[n].bind()}unbind(){const e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,a=e.length;n!==a;++n)e[n].unbind()}}class Gt{constructor(e,n,a){this.path=n,this.parsedPath=a||Gt.parseTrackName(n),this.node=Gt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,a){return e&&e.isAnimationObjectGroup?new Gt.Composite(e,n,a):new Gt(e,n,a)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(dT,"")}static parseTrackName(e){const n=xT.exec(e);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const a={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},o=a.nodeName&&a.nodeName.lastIndexOf(".");if(o!==void 0&&o!==-1){const c=a.nodeName.substring(o+1);ST.indexOf(c)!==-1&&(a.nodeName=a.nodeName.substring(0,o),a.objectName=c)}if(a.propertyName===null||a.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return a}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){const a=e.skeleton.getBoneByName(n);if(a!==void 0)return a}if(e.children){const a=function(c){for(let u=0;u<c.length;u++){const d=c[u];if(d.name===n||d.uuid===n)return d;const p=a(d.children);if(p)return p}return null},o=a(e.children);if(o)return o}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){const a=this.resolvedProperty;for(let o=0,c=a.length;o!==c;++o)e[n++]=a[o]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){const a=this.resolvedProperty;for(let o=0,c=a.length;o!==c;++o)a[o]=e[n++]}_setValue_array_setNeedsUpdate(e,n){const a=this.resolvedProperty;for(let o=0,c=a.length;o!==c;++o)a[o]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){const a=this.resolvedProperty;for(let o=0,c=a.length;o!==c;++o)a[o]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node;const n=this.parsedPath,a=n.objectName,o=n.propertyName;let c=n.propertyIndex;if(e||(e=Gt.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ze("PropertyBinding: No target node found for track: "+this.path+".");return}if(a){let h=n.objectIndex;switch(a){case"materials":if(!e.material){nt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){nt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){nt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let g=0;g<e.length;g++)if(e[g].name===h){h=g;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){nt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){nt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[a]===void 0){nt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[a]}if(h!==void 0){if(e[h]===void 0){nt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const u=e[o];if(u===void 0){const h=n.nodeName;nt("PropertyBinding: Trying to update property for track: "+h+"."+o+" but it wasn't found.",e);return}let d=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?d=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(d=this.Versioning.MatrixWorldNeedsUpdate);let p=this.BindingType.Direct;if(c!==void 0){if(o==="morphTargetInfluences"){if(!e.geometry){nt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){nt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[c]!==void 0&&(c=e.morphTargetDictionary[c])}p=this.BindingType.ArrayElement,this.resolvedProperty=u,this.propertyIndex=c}else u.fromArray!==void 0&&u.toArray!==void 0?(p=this.BindingType.HasFromToArray,this.resolvedProperty=u):Array.isArray(u)?(p=this.BindingType.EntireArray,this.resolvedProperty=u):this.propertyName=o;this.getValue=this.GetterByBindingType[p],this.setValue=this.SetterByBindingTypeAndVersioning[p][d]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Gt.Composite=yT;Gt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Gt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Gt.prototype.GetterByBindingType=[Gt.prototype._getValue_direct,Gt.prototype._getValue_array,Gt.prototype._getValue_arrayElement,Gt.prototype._getValue_toArray];Gt.prototype.SetterByBindingTypeAndVersioning=[[Gt.prototype._setValue_direct,Gt.prototype._setValue_direct_setNeedsUpdate,Gt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Gt.prototype._setValue_array,Gt.prototype._setValue_array_setNeedsUpdate,Gt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Gt.prototype._setValue_arrayElement,Gt.prototype._setValue_arrayElement_setNeedsUpdate,Gt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Gt.prototype._setValue_fromArray,Gt.prototype._setValue_fromArray_setNeedsUpdate,Gt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class MT{constructor(e=1,n=0,a=0){this.radius=e,this.phi=n,this.theta=a}set(e,n,a){return this.radius=e,this.phi=n,this.theta=a,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=_t(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,a){return this.radius=Math.sqrt(e*e+n*n+a*a),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,a),this.phi=Math.acos(_t(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}function Wv(r,e,n,a){const o=ET(a);switch(n){case Hx:return r*e;case Xp:return r*e/o.components*o.byteLength;case Wp:return r*e/o.components*o.byteLength;case so:return r*e*2/o.components*o.byteLength;case jp:return r*e*2/o.components*o.byteLength;case Vx:return r*e*3/o.components*o.byteLength;case Mi:return r*e*4/o.components*o.byteLength;case qp:return r*e*4/o.components*o.byteLength;case Au:case Ru:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Cu:case wu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case $d:case tp:return Math.max(r,16)*Math.max(e,8)/4;case Jd:case ep:return Math.max(r,8)*Math.max(e,8)/2;case np:case ip:case sp:case rp:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ap:case op:case lp:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case cp:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case up:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case fp:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case hp:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case dp:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case pp:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case mp:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case gp:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case _p:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case vp:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case xp:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Sp:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case yp:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Mp:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Ep:case bp:case Tp:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Ap:case Rp:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Cp:case wp:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function ET(r){switch(r){case ui:case Px:return{byteLength:1,components:1};case Tl:case Bx:case Ba:return{byteLength:2,components:1};case Gp:case kp:return{byteLength:2,components:4};case na:case Vp:case yi:return{byteLength:4,components:1};case Fx:case zx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zp}}));typeof window<"u"&&(window.__THREE__?Ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zp);function rS(){let r=null,e=!1,n=null,a=null;function o(c,u){n(c,u),a=r.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(a=r.requestAnimationFrame(o),e=!0)},stop:function(){r.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){r=c}}}function bT(r){const e=new WeakMap;function n(d,p){const h=d.array,g=d.usage,v=h.byteLength,_=r.createBuffer();r.bindBuffer(p,_),r.bufferData(p,h,g),d.onUploadCallback();let x;if(h instanceof Float32Array)x=r.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)x=r.HALF_FLOAT;else if(h instanceof Uint16Array)d.isFloat16BufferAttribute?x=r.HALF_FLOAT:x=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=r.SHORT;else if(h instanceof Uint32Array)x=r.UNSIGNED_INT;else if(h instanceof Int32Array)x=r.INT;else if(h instanceof Int8Array)x=r.BYTE;else if(h instanceof Uint8Array)x=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:d.version,size:v}}function a(d,p,h){const g=p.array,v=p.updateRanges;if(r.bindBuffer(h,d),v.length===0)r.bufferSubData(h,0,g);else{v.sort((x,E)=>x.start-E.start);let _=0;for(let x=1;x<v.length;x++){const E=v[_],T=v[x];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++_,v[_]=T)}v.length=_+1;for(let x=0,E=v.length;x<E;x++){const T=v[x];r.bufferSubData(h,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(r.deleteBuffer(p.buffer),e.delete(d))}function u(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const h=e.get(d);if(h===void 0)e.set(d,n(d,p));else if(h.version<d.version){if(h.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(h.buffer,d,p),h.version=d.version}}return{get:o,remove:c,update:u}}var TT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,AT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,RT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,CT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,DT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,NT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,LT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,UT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,OT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,IT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,PT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,BT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,FT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,zT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,HT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,VT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,GT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,XT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,WT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,jT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,qT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,YT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,KT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ZT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,QT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,JT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$T=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,e1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,t1="gl_FragColor = linearToOutputTexel( gl_FragColor );",n1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,i1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,a1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,s1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,r1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,o1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,l1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,c1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,u1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,f1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,h1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,d1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,p1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,m1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,g1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,_1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,v1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,x1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,S1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,y1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,M1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,E1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,b1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,T1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,A1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,R1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,C1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,w1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,D1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,N1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,L1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,U1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,O1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,I1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,P1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,B1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,F1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,z1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,H1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,V1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,G1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,k1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,X1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,W1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,j1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,q1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Y1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,K1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Z1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Q1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,J1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,eA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,iA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,aA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,oA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,lA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,cA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,uA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,hA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,pA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_A=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,SA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,MA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,EA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,TA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,NA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,LA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,UA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,OA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,IA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,BA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,FA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,zA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,kA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,WA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,KA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,QA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,$A=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tR=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mt={alphahash_fragment:TT,alphahash_pars_fragment:AT,alphamap_fragment:RT,alphamap_pars_fragment:CT,alphatest_fragment:wT,alphatest_pars_fragment:DT,aomap_fragment:NT,aomap_pars_fragment:LT,batching_pars_vertex:UT,batching_vertex:OT,begin_vertex:IT,beginnormal_vertex:PT,bsdfs:BT,iridescence_fragment:FT,bumpmap_pars_fragment:zT,clipping_planes_fragment:HT,clipping_planes_pars_fragment:VT,clipping_planes_pars_vertex:GT,clipping_planes_vertex:kT,color_fragment:XT,color_pars_fragment:WT,color_pars_vertex:jT,color_vertex:qT,common:YT,cube_uv_reflection_fragment:KT,defaultnormal_vertex:ZT,displacementmap_pars_vertex:QT,displacementmap_vertex:JT,emissivemap_fragment:$T,emissivemap_pars_fragment:e1,colorspace_fragment:t1,colorspace_pars_fragment:n1,envmap_fragment:i1,envmap_common_pars_fragment:a1,envmap_pars_fragment:s1,envmap_pars_vertex:r1,envmap_physical_pars_fragment:_1,envmap_vertex:o1,fog_vertex:l1,fog_pars_vertex:c1,fog_fragment:u1,fog_pars_fragment:f1,gradientmap_pars_fragment:h1,lightmap_pars_fragment:d1,lights_lambert_fragment:p1,lights_lambert_pars_fragment:m1,lights_pars_begin:g1,lights_toon_fragment:v1,lights_toon_pars_fragment:x1,lights_phong_fragment:S1,lights_phong_pars_fragment:y1,lights_physical_fragment:M1,lights_physical_pars_fragment:E1,lights_fragment_begin:b1,lights_fragment_maps:T1,lights_fragment_end:A1,logdepthbuf_fragment:R1,logdepthbuf_pars_fragment:C1,logdepthbuf_pars_vertex:w1,logdepthbuf_vertex:D1,map_fragment:N1,map_pars_fragment:L1,map_particle_fragment:U1,map_particle_pars_fragment:O1,metalnessmap_fragment:I1,metalnessmap_pars_fragment:P1,morphinstance_vertex:B1,morphcolor_vertex:F1,morphnormal_vertex:z1,morphtarget_pars_vertex:H1,morphtarget_vertex:V1,normal_fragment_begin:G1,normal_fragment_maps:k1,normal_pars_fragment:X1,normal_pars_vertex:W1,normal_vertex:j1,normalmap_pars_fragment:q1,clearcoat_normal_fragment_begin:Y1,clearcoat_normal_fragment_maps:K1,clearcoat_pars_fragment:Z1,iridescence_pars_fragment:Q1,opaque_fragment:J1,packing:$1,premultiplied_alpha_fragment:eA,project_vertex:tA,dithering_fragment:nA,dithering_pars_fragment:iA,roughnessmap_fragment:aA,roughnessmap_pars_fragment:sA,shadowmap_pars_fragment:rA,shadowmap_pars_vertex:oA,shadowmap_vertex:lA,shadowmask_pars_fragment:cA,skinbase_vertex:uA,skinning_pars_vertex:fA,skinning_vertex:hA,skinnormal_vertex:dA,specularmap_fragment:pA,specularmap_pars_fragment:mA,tonemapping_fragment:gA,tonemapping_pars_fragment:_A,transmission_fragment:vA,transmission_pars_fragment:xA,uv_pars_fragment:SA,uv_pars_vertex:yA,uv_vertex:MA,worldpos_vertex:EA,background_vert:bA,background_frag:TA,backgroundCube_vert:AA,backgroundCube_frag:RA,cube_vert:CA,cube_frag:wA,depth_vert:DA,depth_frag:NA,distance_vert:LA,distance_frag:UA,equirect_vert:OA,equirect_frag:IA,linedashed_vert:PA,linedashed_frag:BA,meshbasic_vert:FA,meshbasic_frag:zA,meshlambert_vert:HA,meshlambert_frag:VA,meshmatcap_vert:GA,meshmatcap_frag:kA,meshnormal_vert:XA,meshnormal_frag:WA,meshphong_vert:jA,meshphong_frag:qA,meshphysical_vert:YA,meshphysical_frag:KA,meshtoon_vert:ZA,meshtoon_frag:QA,points_vert:JA,points_frag:$A,shadow_vert:eR,shadow_frag:tR,sprite_vert:nR,sprite_frag:iR},Le={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},Zi={basic:{uniforms:Vn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:Vn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new st(0)},envMapIntensity:{value:1}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:Vn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:Vn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:Vn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new st(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:Vn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:Vn([Le.points,Le.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:Vn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:Vn([Le.common,Le.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:Vn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:Vn([Le.sprite,Le.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distance:{uniforms:Vn([Le.common,Le.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distance_vert,fragmentShader:mt.distance_frag},shadow:{uniforms:Vn([Le.lights,Le.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};Zi.physical={uniforms:Vn([Zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const Mu={r:0,b:0,g:0},Xs=new ia,aR=new gt;function sR(r,e,n,a,o,c){const u=new st(0);let d=o===!0?0:1,p,h,g=null,v=0,_=null;function x(w){let N=w.isScene===!0?w.background:null;if(N&&N.isTexture){const D=w.backgroundBlurriness>0;N=e.get(N,D)}return N}function E(w){let N=!1;const D=x(w);D===null?M(u,d):D&&D.isColor&&(M(D,1),N=!0);const F=r.xr.getEnvironmentBlendMode();F==="additive"?n.buffers.color.setClear(0,0,0,1,c):F==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(r.autoClear||N)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function T(w,N){const D=x(N);D&&(D.isCubeTexture||D.mapping===Hu)?(h===void 0&&(h=new Jn(new Ll(1,1,1),new aa({name:"BackgroundCubeMaterial",uniforms:oo(Zi.backgroundCube.uniforms),vertexShader:Zi.backgroundCube.vertexShader,fragmentShader:Zi.backgroundCube.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(F,z,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(h)),Xs.copy(N.backgroundRotation),Xs.x*=-1,Xs.y*=-1,Xs.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Xs.y*=-1,Xs.z*=-1),h.material.uniforms.envMap.value=D,h.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(aR.makeRotationFromEuler(Xs)),h.material.toneMapped=At.getTransfer(D.colorSpace)!==Ht,(g!==D||v!==D.version||_!==r.toneMapping)&&(h.material.needsUpdate=!0,g=D,v=D.version,_=r.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):D&&D.isTexture&&(p===void 0&&(p=new Jn(new Ul(2,2),new aa({name:"BackgroundMaterial",uniforms:oo(Zi.background.uniforms),vertexShader:Zi.background.vertexShader,fragmentShader:Zi.background.fragmentShader,side:Pa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(p)),p.material.uniforms.t2D.value=D,p.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,p.material.toneMapped=At.getTransfer(D.colorSpace)!==Ht,D.matrixAutoUpdate===!0&&D.updateMatrix(),p.material.uniforms.uvTransform.value.copy(D.matrix),(g!==D||v!==D.version||_!==r.toneMapping)&&(p.material.needsUpdate=!0,g=D,v=D.version,_=r.toneMapping),p.layers.enableAll(),w.unshift(p,p.geometry,p.material,0,0,null))}function M(w,N){w.getRGB(Mu,tS(r)),n.buffers.color.setClear(Mu.r,Mu.g,Mu.b,N,c)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return u},setClearColor:function(w,N=1){u.set(w),d=N,M(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(w){d=w,M(u,d)},render:E,addToRenderList:T,dispose:S}}function rR(r,e){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),a={},o=_(null);let c=o,u=!1;function d(H,$,ae,ue,J){let I=!1;const B=v(H,ue,ae,$);c!==B&&(c=B,h(c.object)),I=x(H,ue,ae,J),I&&E(H,ue,ae,J),J!==null&&e.update(J,r.ELEMENT_ARRAY_BUFFER),(I||u)&&(u=!1,D(H,$,ae,ue),J!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function p(){return r.createVertexArray()}function h(H){return r.bindVertexArray(H)}function g(H){return r.deleteVertexArray(H)}function v(H,$,ae,ue){const J=ue.wireframe===!0;let I=a[$.id];I===void 0&&(I={},a[$.id]=I);const B=H.isInstancedMesh===!0?H.id:0;let ce=I[B];ce===void 0&&(ce={},I[B]=ce);let Q=ce[ae.id];Q===void 0&&(Q={},ce[ae.id]=Q);let ve=Q[J];return ve===void 0&&(ve=_(p()),Q[J]=ve),ve}function _(H){const $=[],ae=[],ue=[];for(let J=0;J<n;J++)$[J]=0,ae[J]=0,ue[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:ae,attributeDivisors:ue,object:H,attributes:{},index:null}}function x(H,$,ae,ue){const J=c.attributes,I=$.attributes;let B=0;const ce=ae.getAttributes();for(const Q in ce)if(ce[Q].location>=0){const U=J[Q];let j=I[Q];if(j===void 0&&(Q==="instanceMatrix"&&H.instanceMatrix&&(j=H.instanceMatrix),Q==="instanceColor"&&H.instanceColor&&(j=H.instanceColor)),U===void 0||U.attribute!==j||j&&U.data!==j.data)return!0;B++}return c.attributesNum!==B||c.index!==ue}function E(H,$,ae,ue){const J={},I=$.attributes;let B=0;const ce=ae.getAttributes();for(const Q in ce)if(ce[Q].location>=0){let U=I[Q];U===void 0&&(Q==="instanceMatrix"&&H.instanceMatrix&&(U=H.instanceMatrix),Q==="instanceColor"&&H.instanceColor&&(U=H.instanceColor));const j={};j.attribute=U,U&&U.data&&(j.data=U.data),J[Q]=j,B++}c.attributes=J,c.attributesNum=B,c.index=ue}function T(){const H=c.newAttributes;for(let $=0,ae=H.length;$<ae;$++)H[$]=0}function M(H){S(H,0)}function S(H,$){const ae=c.newAttributes,ue=c.enabledAttributes,J=c.attributeDivisors;ae[H]=1,ue[H]===0&&(r.enableVertexAttribArray(H),ue[H]=1),J[H]!==$&&(r.vertexAttribDivisor(H,$),J[H]=$)}function w(){const H=c.newAttributes,$=c.enabledAttributes;for(let ae=0,ue=$.length;ae<ue;ae++)$[ae]!==H[ae]&&(r.disableVertexAttribArray(ae),$[ae]=0)}function N(H,$,ae,ue,J,I,B){B===!0?r.vertexAttribIPointer(H,$,ae,J,I):r.vertexAttribPointer(H,$,ae,ue,J,I)}function D(H,$,ae,ue){T();const J=ue.attributes,I=ae.getAttributes(),B=$.defaultAttributeValues;for(const ce in I){const Q=I[ce];if(Q.location>=0){let ve=J[ce];if(ve===void 0&&(ce==="instanceMatrix"&&H.instanceMatrix&&(ve=H.instanceMatrix),ce==="instanceColor"&&H.instanceColor&&(ve=H.instanceColor)),ve!==void 0){const U=ve.normalized,j=ve.itemSize,ge=e.get(ve);if(ge===void 0)continue;const Ae=ge.buffer,Ue=ge.type,ne=ge.bytesPerElement,xe=Ue===r.INT||Ue===r.UNSIGNED_INT||ve.gpuType===Vp;if(ve.isInterleavedBufferAttribute){const be=ve.data,Fe=be.stride,Qe=ve.offset;if(be.isInstancedInterleavedBuffer){for(let et=0;et<Q.locationSize;et++)S(Q.location+et,be.meshPerAttribute);H.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let et=0;et<Q.locationSize;et++)M(Q.location+et);r.bindBuffer(r.ARRAY_BUFFER,Ae);for(let et=0;et<Q.locationSize;et++)N(Q.location+et,j/Q.locationSize,Ue,U,Fe*ne,(Qe+j/Q.locationSize*et)*ne,xe)}else{if(ve.isInstancedBufferAttribute){for(let be=0;be<Q.locationSize;be++)S(Q.location+be,ve.meshPerAttribute);H.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let be=0;be<Q.locationSize;be++)M(Q.location+be);r.bindBuffer(r.ARRAY_BUFFER,Ae);for(let be=0;be<Q.locationSize;be++)N(Q.location+be,j/Q.locationSize,Ue,U,j*ne,j/Q.locationSize*be*ne,xe)}}else if(B!==void 0){const U=B[ce];if(U!==void 0)switch(U.length){case 2:r.vertexAttrib2fv(Q.location,U);break;case 3:r.vertexAttrib3fv(Q.location,U);break;case 4:r.vertexAttrib4fv(Q.location,U);break;default:r.vertexAttrib1fv(Q.location,U)}}}}w()}function F(){L();for(const H in a){const $=a[H];for(const ae in $){const ue=$[ae];for(const J in ue){const I=ue[J];for(const B in I)g(I[B].object),delete I[B];delete ue[J]}}delete a[H]}}function z(H){if(a[H.id]===void 0)return;const $=a[H.id];for(const ae in $){const ue=$[ae];for(const J in ue){const I=ue[J];for(const B in I)g(I[B].object),delete I[B];delete ue[J]}}delete a[H.id]}function P(H){for(const $ in a){const ae=a[$];for(const ue in ae){const J=ae[ue];if(J[H.id]===void 0)continue;const I=J[H.id];for(const B in I)g(I[B].object),delete I[B];delete J[H.id]}}}function A(H){for(const $ in a){const ae=a[$],ue=H.isInstancedMesh===!0?H.id:0,J=ae[ue];if(J!==void 0){for(const I in J){const B=J[I];for(const ce in B)g(B[ce].object),delete B[ce];delete J[I]}delete ae[ue],Object.keys(ae).length===0&&delete a[$]}}}function L(){fe(),u=!0,c!==o&&(c=o,h(c.object))}function fe(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:L,resetDefaultState:fe,dispose:F,releaseStatesOfGeometry:z,releaseStatesOfObject:A,releaseStatesOfProgram:P,initAttributes:T,enableAttribute:M,disableUnusedAttributes:w}}function oR(r,e,n){let a;function o(h){a=h}function c(h,g){r.drawArrays(a,h,g),n.update(g,a,1)}function u(h,g,v){v!==0&&(r.drawArraysInstanced(a,h,g,v),n.update(g,a,v))}function d(h,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,h,0,g,0,v);let x=0;for(let E=0;E<v;E++)x+=g[E];n.update(x,a,1)}function p(h,g,v,_){if(v===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let E=0;E<h.length;E++)u(h[E],g[E],_[E]);else{x.multiDrawArraysInstancedWEBGL(a,h,0,g,0,_,0,v);let E=0;for(let T=0;T<v;T++)E+=g[T]*_[T];n.update(E,a,1)}}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function lR(r,e,n,a){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");o=r.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(P){return!(P!==Mi&&a.convert(P)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(P){const A=P===Ba&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==ui&&a.convert(P)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==yi&&!A)}function p(P){if(P==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=n.precision!==void 0?n.precision:"highp";const g=p(h);g!==h&&(Ze("WebGLRenderer:",h,"not supported, using",g,"instead."),h=g);const v=n.logarithmicDepthBuffer===!0,_=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),x=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),S=r.getParameter(r.MAX_VERTEX_ATTRIBS),w=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),N=r.getParameter(r.MAX_VARYING_VECTORS),D=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),F=r.getParameter(r.MAX_SAMPLES),z=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:d,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:_,maxTextures:x,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:M,maxAttributes:S,maxVertexUniforms:w,maxVaryings:N,maxFragmentUniforms:D,maxSamples:F,samples:z}}function cR(r){const e=this;let n=null,a=0,o=!1,c=!1;const u=new qs,d=new pt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const x=v.length!==0||_||a!==0||o;return o=_,a=v.length,x},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,_){n=g(v,_,0)},this.setState=function(v,_,x){const E=v.clippingPlanes,T=v.clipIntersection,M=v.clipShadows,S=r.get(v);if(!o||E===null||E.length===0||c&&!M)c?g(null):h();else{const w=c?0:a,N=w*4;let D=S.clippingState||null;p.value=D,D=g(E,_,N,x);for(let F=0;F!==N;++F)D[F]=n[F];S.clippingState=D,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=w}};function h(){p.value!==n&&(p.value=n,p.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function g(v,_,x,E){const T=v!==null?v.length:0;let M=null;if(T!==0){if(M=p.value,E!==!0||M===null){const S=x+T*4,w=_.matrixWorldInverse;d.getNormalMatrix(w),(M===null||M.length<S)&&(M=new Float32Array(S));for(let N=0,D=x;N!==T;++N,D+=4)u.copy(v[N]).applyMatrix4(w,d),u.normal.toArray(M,D),M[D+3]=u.constant}p.value=M,p.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,M}}const Ss=4,jv=[.125,.215,.35,.446,.526,.582],Ks=20,uR=256,gl=new Gu,qv=new st;let Ld=null,Ud=0,Od=0,Id=!1;const fR=new Z;class Yv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,a=.1,o=100,c={}){const{size:u=256,position:d=fR}=c;Ld=this._renderer.getRenderTarget(),Ud=this._renderer.getActiveCubeFace(),Od=this._renderer.getActiveMipmapLevel(),Id=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,a,o,p,d),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ld,Ud,Od),this._renderer.xr.enabled=Id,e.scissorTest=!1,Jr(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===er||e.mapping===io?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ld=this._renderer.getRenderTarget(),Ud=this._renderer.getActiveCubeFace(),Od=this._renderer.getActiveMipmapLevel(),Id=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:Ba,format:Mi,colorSpace:Xn,depthBuffer:!1},o=Kv(e,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kv(e,n,a);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=hR(c)),this._blurMaterial=pR(c,e,n),this._ggxMaterial=dR(c,e,n)}return o}_compileMaterial(e){const n=new Jn(new bi,e);this._renderer.compile(n,gl)}_sceneToCubeUV(e,n,a,o,c){const p=new Gn(90,1,n,a),h=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,x=v.toneMapping;v.getClearColor(qv),v.toneMapping=ea,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(o),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Jn(new Ll,new Js({name:"PMREM.Background",side:Qn,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,M=T.material;let S=!1;const w=e.background;w?w.isColor&&(M.color.copy(w),e.background=null,S=!0):(M.color.copy(qv),S=!0);for(let N=0;N<6;N++){const D=N%3;D===0?(p.up.set(0,h[N],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+g[N],c.y,c.z)):D===1?(p.up.set(0,0,h[N]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+g[N],c.z)):(p.up.set(0,h[N],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+g[N]));const F=this._cubeSize;Jr(o,D*F,N>2?F:0,F,F),v.setRenderTarget(o),S&&v.render(T,p),v.render(e,p)}v.toneMapping=x,v.autoClear=_,e.background=w}_textureToCubeUV(e,n){const a=this._renderer,o=e.mapping===er||e.mapping===io;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zv());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const d=c.uniforms;d.envMap.value=e;const p=this._cubeSize;Jr(n,0,0,3*p,2*p),a.setRenderTarget(n),a.render(u,gl)}_applyPMREM(e){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);n.autoClear=a}_applyGGXFilter(e,n,a){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,d=this._lodMeshes[a];d.material=u;const p=u.uniforms,h=a/(this._lodMeshes.length-1),g=n/(this._lodMeshes.length-1),v=Math.sqrt(h*h-g*g),_=0+h*1.25,x=v*_,{_lodMax:E}=this,T=this._sizeLods[a],M=3*T*(a>E-Ss?a-E+Ss:0),S=4*(this._cubeSize-T);p.envMap.value=e.texture,p.roughness.value=x,p.mipInt.value=E-n,Jr(c,M,S,3*T,2*T),o.setRenderTarget(c),o.render(d,gl),p.envMap.value=c.texture,p.roughness.value=0,p.mipInt.value=E-a,Jr(e,M,S,3*T,2*T),o.setRenderTarget(e),o.render(d,gl)}_blur(e,n,a,o,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,a,o,"latitudinal",c),this._halfBlur(u,e,a,a,o,"longitudinal",c)}_halfBlur(e,n,a,o,c,u,d){const p=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&nt("blur direction must be either latitudinal or longitudinal!");const g=3,v=this._lodMeshes[o];v.material=h;const _=h.uniforms,x=this._sizeLods[a]-1,E=isFinite(c)?Math.PI/(2*x):2*Math.PI/(2*Ks-1),T=c/E,M=isFinite(c)?1+Math.floor(g*T):Ks;M>Ks&&Ze(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Ks}`);const S=[];let w=0;for(let P=0;P<Ks;++P){const A=P/T,L=Math.exp(-A*A/2);S.push(L),P===0?w+=L:P<M&&(w+=2*L)}for(let P=0;P<S.length;P++)S[P]=S[P]/w;_.envMap.value=e.texture,_.samples.value=M,_.weights.value=S,_.latitudinal.value=u==="latitudinal",d&&(_.poleAxis.value=d);const{_lodMax:N}=this;_.dTheta.value=E,_.mipInt.value=N-a;const D=this._sizeLods[o],F=3*D*(o>N-Ss?o-N+Ss:0),z=4*(this._cubeSize-D);Jr(n,F,z,3*D,2*D),p.setRenderTarget(n),p.render(v,gl)}}function hR(r){const e=[],n=[],a=[];let o=r;const c=r-Ss+1+jv.length;for(let u=0;u<c;u++){const d=Math.pow(2,o);e.push(d);let p=1/d;u>r-Ss?p=jv[u-r+Ss-1]:u===0&&(p=0),n.push(p);const h=1/(d-2),g=-h,v=1+h,_=[g,g,v,g,v,v,g,g,v,v,g,v],x=6,E=6,T=3,M=2,S=1,w=new Float32Array(T*E*x),N=new Float32Array(M*E*x),D=new Float32Array(S*E*x);for(let z=0;z<x;z++){const P=z%3*2/3-1,A=z>2?0:-1,L=[P,A,0,P+2/3,A,0,P+2/3,A+1,0,P,A,0,P+2/3,A+1,0,P,A+1,0];w.set(L,T*E*z),N.set(_,M*E*z);const fe=[z,z,z,z,z,z];D.set(fe,S*E*z)}const F=new bi;F.setAttribute("position",new kn(w,T)),F.setAttribute("uv",new kn(N,M)),F.setAttribute("faceIndex",new kn(D,S)),a.push(new Jn(F,null)),o>Ss&&o--}return{lodMeshes:a,sizeLods:e,sigmas:n}}function Kv(r,e,n){const a=new ta(r,e,n);return a.texture.mapping=Hu,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Jr(r,e,n,a,o){r.viewport.set(e,n,a,o),r.scissor.set(e,n,a,o)}function dR(r,e,n){return new aa({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:uR,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ku(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function pR(r,e,n){const a=new Float32Array(Ks),o=new Z(0,1,0);return new aa({name:"SphericalGaussianBlur",defines:{n:Ks,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:ku(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function Zv(){return new aa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ku(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function Qv(){return new aa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ku(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function ku(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class oS extends ta{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},o=[a,a,a,a,a,a];this.texture=new $x(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Ll(5,5,5),c=new aa({name:"CubemapFromEquirect",uniforms:oo(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:Qn,blending:Oa});c.uniforms.tEquirect.value=n;const u=new Jn(o,c),d=n.minFilter;return n.minFilter===La&&(n.minFilter=yn),new fT(1,10,this).update(e,u),n.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,a=!0,o=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,a,o);e.setRenderTarget(c)}}function mR(r){let e=new WeakMap,n=new WeakMap,a=null;function o(_,x=!1){return _==null?null:x?u(_):c(_)}function c(_){if(_&&_.isTexture){const x=_.mapping;if(x===nd||x===id)if(e.has(_)){const E=e.get(_).texture;return d(E,_.mapping)}else{const E=_.image;if(E&&E.height>0){const T=new oS(E.height);return T.fromEquirectangularTexture(r,_),e.set(_,T),_.addEventListener("dispose",h),d(T.texture,_.mapping)}else return null}}return _}function u(_){if(_&&_.isTexture){const x=_.mapping,E=x===nd||x===id,T=x===er||x===io;if(E||T){let M=n.get(_);const S=M!==void 0?M.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==S)return a===null&&(a=new Yv(r)),M=E?a.fromEquirectangular(_,M):a.fromCubemap(_,M),M.texture.pmremVersion=_.pmremVersion,n.set(_,M),M.texture;if(M!==void 0)return M.texture;{const w=_.image;return E&&w&&w.height>0||T&&w&&p(w)?(a===null&&(a=new Yv(r)),M=E?a.fromEquirectangular(_):a.fromCubemap(_),M.texture.pmremVersion=_.pmremVersion,n.set(_,M),_.addEventListener("dispose",g),M.texture):null}}}return _}function d(_,x){return x===nd?_.mapping=er:x===id&&(_.mapping=io),_}function p(_){let x=0;const E=6;for(let T=0;T<E;T++)_[T]!==void 0&&x++;return x===E}function h(_){const x=_.target;x.removeEventListener("dispose",h);const E=e.get(x);E!==void 0&&(e.delete(x),E.dispose())}function g(_){const x=_.target;x.removeEventListener("dispose",g);const E=n.get(x);E!==void 0&&(n.delete(x),E.dispose())}function v(){e=new WeakMap,n=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:o,dispose:v}}function gR(r){const e={};function n(a){if(e[a]!==void 0)return e[a];const o=r.getExtension(a);return e[a]=o,o}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const o=n(a);return o===null&&Bu("WebGLRenderer: "+a+" extension not supported."),o}}}function _R(r,e,n,a){const o={},c=new WeakMap;function u(v){const _=v.target;_.index!==null&&e.remove(_.index);for(const E in _.attributes)e.remove(_.attributes[E]);_.removeEventListener("dispose",u),delete o[_.id];const x=c.get(_);x&&(e.remove(x),c.delete(_)),a.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function d(v,_){return o[_.id]===!0||(_.addEventListener("dispose",u),o[_.id]=!0,n.memory.geometries++),_}function p(v){const _=v.attributes;for(const x in _)e.update(_[x],r.ARRAY_BUFFER)}function h(v){const _=[],x=v.index,E=v.attributes.position;let T=0;if(E===void 0)return;if(x!==null){const w=x.array;T=x.version;for(let N=0,D=w.length;N<D;N+=3){const F=w[N+0],z=w[N+1],P=w[N+2];_.push(F,z,z,P,P,F)}}else{const w=E.array;T=E.version;for(let N=0,D=w.length/3-1;N<D;N+=3){const F=N+0,z=N+1,P=N+2;_.push(F,z,z,P,P,F)}}const M=new(E.count>=65535?Kx:Yx)(_,1);M.version=T;const S=c.get(v);S&&e.remove(S),c.set(v,M)}function g(v){const _=c.get(v);if(_){const x=v.index;x!==null&&_.version<x.version&&h(v)}else h(v);return c.get(v)}return{get:d,update:p,getWireframeAttribute:g}}function vR(r,e,n){let a;function o(_){a=_}let c,u;function d(_){c=_.type,u=_.bytesPerElement}function p(_,x){r.drawElements(a,x,c,_*u),n.update(x,a,1)}function h(_,x,E){E!==0&&(r.drawElementsInstanced(a,x,c,_*u,E),n.update(x,a,E))}function g(_,x,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,x,0,c,_,0,E);let M=0;for(let S=0;S<E;S++)M+=x[S];n.update(M,a,1)}function v(_,x,E,T){if(E===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let S=0;S<_.length;S++)h(_[S]/u,x[S],T[S]);else{M.multiDrawElementsInstancedWEBGL(a,x,0,c,_,0,T,0,E);let S=0;for(let w=0;w<E;w++)S+=x[w]*T[w];n.update(S,a,1)}}this.setMode=o,this.setIndex=d,this.render=p,this.renderInstances=h,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function xR(r){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,u,d){switch(n.calls++,u){case r.TRIANGLES:n.triangles+=d*(c/3);break;case r.LINES:n.lines+=d*(c/2);break;case r.LINE_STRIP:n.lines+=d*(c-1);break;case r.LINE_LOOP:n.lines+=d*c;break;case r.POINTS:n.points+=d*c;break;default:nt("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:a}}function SR(r,e,n){const a=new WeakMap,o=new Kt;function c(u,d,p){const h=u.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let _=a.get(d);if(_===void 0||_.count!==v){let fe=function(){A.dispose(),a.delete(d),d.removeEventListener("dispose",fe)};var x=fe;_!==void 0&&_.texture.dispose();const E=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],w=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let D=0;E===!0&&(D=1),T===!0&&(D=2),M===!0&&(D=3);let F=d.attributes.position.count*D,z=1;F>e.maxTextureSize&&(z=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const P=new Float32Array(F*z*4*v),A=new Wx(P,F,z,v);A.type=yi,A.needsUpdate=!0;const L=D*4;for(let H=0;H<v;H++){const $=S[H],ae=w[H],ue=N[H],J=F*z*4*H;for(let I=0;I<$.count;I++){const B=I*L;E===!0&&(o.fromBufferAttribute($,I),P[J+B+0]=o.x,P[J+B+1]=o.y,P[J+B+2]=o.z,P[J+B+3]=0),T===!0&&(o.fromBufferAttribute(ae,I),P[J+B+4]=o.x,P[J+B+5]=o.y,P[J+B+6]=o.z,P[J+B+7]=0),M===!0&&(o.fromBufferAttribute(ue,I),P[J+B+8]=o.x,P[J+B+9]=o.y,P[J+B+10]=o.z,P[J+B+11]=ue.itemSize===4?o.w:1)}}_={count:v,texture:A,size:new Ct(F,z)},a.set(d,_),d.addEventListener("dispose",fe)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(r,"morphTexture",u.morphTexture,n);else{let E=0;for(let M=0;M<h.length;M++)E+=h[M];const T=d.morphTargetsRelative?1:1-E;p.getUniforms().setValue(r,"morphTargetBaseInfluence",T),p.getUniforms().setValue(r,"morphTargetInfluences",h)}p.getUniforms().setValue(r,"morphTargetsTexture",_.texture,n),p.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}return{update:c}}function yR(r,e,n,a,o){let c=new WeakMap;function u(h){const g=o.render.frame,v=h.geometry,_=e.get(h,v);if(c.get(_)!==g&&(e.update(_),c.set(_,g)),h.isInstancedMesh&&(h.hasEventListener("dispose",p)===!1&&h.addEventListener("dispose",p),c.get(h)!==g&&(n.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&n.update(h.instanceColor,r.ARRAY_BUFFER),c.set(h,g))),h.isSkinnedMesh){const x=h.skeleton;c.get(x)!==g&&(x.update(),c.set(x,g))}return _}function d(){c=new WeakMap}function p(h){const g=h.target;g.removeEventListener("dispose",p),a.releaseStatesOfObject(g),n.remove(g.instanceMatrix),g.instanceColor!==null&&n.remove(g.instanceColor)}return{update:u,dispose:d}}const MR={[Cx]:"LINEAR_TONE_MAPPING",[wx]:"REINHARD_TONE_MAPPING",[Dx]:"CINEON_TONE_MAPPING",[Hp]:"ACES_FILMIC_TONE_MAPPING",[Lx]:"AGX_TONE_MAPPING",[Ux]:"NEUTRAL_TONE_MAPPING",[Nx]:"CUSTOM_TONE_MAPPING"};function ER(r,e,n,a,o){const c=new ta(e,n,{type:r,depthBuffer:a,stencilBuffer:o}),u=new ta(e,n,{type:Ba,depthBuffer:!1,stencilBuffer:!1}),d=new bi;d.setAttribute("position",new zi([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new zi([0,2,0,0,2,0],2));const p=new Hb({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Jn(d,p),g=new Gu(-1,1,1,-1,0,1);let v=null,_=null,x=!1,E,T=null,M=[],S=!1;this.setSize=function(w,N){c.setSize(w,N),u.setSize(w,N);for(let D=0;D<M.length;D++){const F=M[D];F.setSize&&F.setSize(w,N)}},this.setEffects=function(w){M=w,S=M.length>0&&M[0].isRenderPass===!0;const N=c.width,D=c.height;for(let F=0;F<M.length;F++){const z=M[F];z.setSize&&z.setSize(N,D)}},this.begin=function(w,N){if(x||w.toneMapping===ea&&M.length===0)return!1;if(T=N,N!==null){const D=N.width,F=N.height;(c.width!==D||c.height!==F)&&this.setSize(D,F)}return S===!1&&w.setRenderTarget(c),E=w.toneMapping,w.toneMapping=ea,!0},this.hasRenderPass=function(){return S},this.end=function(w,N){w.toneMapping=E,x=!0;let D=c,F=u;for(let z=0;z<M.length;z++){const P=M[z];if(P.enabled!==!1&&(P.render(w,F,D,N),P.needsSwap!==!1)){const A=D;D=F,F=A}}if(v!==w.outputColorSpace||_!==w.toneMapping){v=w.outputColorSpace,_=w.toneMapping,p.defines={},At.getTransfer(v)===Ht&&(p.defines.SRGB_TRANSFER="");const z=MR[_];z&&(p.defines[z]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=D.texture,w.setRenderTarget(T),w.render(h,g),T=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){c.dispose(),u.dispose(),d.dispose(),p.dispose()}}const lS=new Rn,Op=new Nl(1,1),cS=new Wx,uS=new lb,fS=new $x,Jv=[],$v=[],ex=new Float32Array(16),tx=new Float32Array(9),nx=new Float32Array(4);function _o(r,e,n){const a=r[0];if(a<=0||a>0)return r;const o=e*n;let c=Jv[o];if(c===void 0&&(c=new Float32Array(o),Jv[o]=c),e!==0){a.toArray(c,0);for(let u=1,d=0;u!==e;++u)d+=n,r[u].toArray(c,d)}return c}function Mn(r,e){if(r.length!==e.length)return!1;for(let n=0,a=r.length;n<a;n++)if(r[n]!==e[n])return!1;return!0}function En(r,e){for(let n=0,a=e.length;n<a;n++)r[n]=e[n]}function Xu(r,e){let n=$v[e];n===void 0&&(n=new Int32Array(e),$v[e]=n);for(let a=0;a!==e;++a)n[a]=r.allocateTextureUnit();return n}function bR(r,e){const n=this.cache;n[0]!==e&&(r.uniform1f(this.addr,e),n[0]=e)}function TR(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Mn(n,e))return;r.uniform2fv(this.addr,e),En(n,e)}}function AR(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Mn(n,e))return;r.uniform3fv(this.addr,e),En(n,e)}}function RR(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Mn(n,e))return;r.uniform4fv(this.addr,e),En(n,e)}}function CR(r,e){const n=this.cache,a=e.elements;if(a===void 0){if(Mn(n,e))return;r.uniformMatrix2fv(this.addr,!1,e),En(n,e)}else{if(Mn(n,a))return;nx.set(a),r.uniformMatrix2fv(this.addr,!1,nx),En(n,a)}}function wR(r,e){const n=this.cache,a=e.elements;if(a===void 0){if(Mn(n,e))return;r.uniformMatrix3fv(this.addr,!1,e),En(n,e)}else{if(Mn(n,a))return;tx.set(a),r.uniformMatrix3fv(this.addr,!1,tx),En(n,a)}}function DR(r,e){const n=this.cache,a=e.elements;if(a===void 0){if(Mn(n,e))return;r.uniformMatrix4fv(this.addr,!1,e),En(n,e)}else{if(Mn(n,a))return;ex.set(a),r.uniformMatrix4fv(this.addr,!1,ex),En(n,a)}}function NR(r,e){const n=this.cache;n[0]!==e&&(r.uniform1i(this.addr,e),n[0]=e)}function LR(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Mn(n,e))return;r.uniform2iv(this.addr,e),En(n,e)}}function UR(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Mn(n,e))return;r.uniform3iv(this.addr,e),En(n,e)}}function OR(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Mn(n,e))return;r.uniform4iv(this.addr,e),En(n,e)}}function IR(r,e){const n=this.cache;n[0]!==e&&(r.uniform1ui(this.addr,e),n[0]=e)}function PR(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Mn(n,e))return;r.uniform2uiv(this.addr,e),En(n,e)}}function BR(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Mn(n,e))return;r.uniform3uiv(this.addr,e),En(n,e)}}function FR(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Mn(n,e))return;r.uniform4uiv(this.addr,e),En(n,e)}}function zR(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o);let c;this.type===r.SAMPLER_2D_SHADOW?(Op.compareFunction=n.isReversedDepthBuffer()?Kp:Yp,c=Op):c=lS,n.setTexture2D(e||c,o)}function HR(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTexture3D(e||uS,o)}function VR(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTextureCube(e||fS,o)}function GR(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTexture2DArray(e||cS,o)}function kR(r){switch(r){case 5126:return bR;case 35664:return TR;case 35665:return AR;case 35666:return RR;case 35674:return CR;case 35675:return wR;case 35676:return DR;case 5124:case 35670:return NR;case 35667:case 35671:return LR;case 35668:case 35672:return UR;case 35669:case 35673:return OR;case 5125:return IR;case 36294:return PR;case 36295:return BR;case 36296:return FR;case 35678:case 36198:case 36298:case 36306:case 35682:return zR;case 35679:case 36299:case 36307:return HR;case 35680:case 36300:case 36308:case 36293:return VR;case 36289:case 36303:case 36311:case 36292:return GR}}function XR(r,e){r.uniform1fv(this.addr,e)}function WR(r,e){const n=_o(e,this.size,2);r.uniform2fv(this.addr,n)}function jR(r,e){const n=_o(e,this.size,3);r.uniform3fv(this.addr,n)}function qR(r,e){const n=_o(e,this.size,4);r.uniform4fv(this.addr,n)}function YR(r,e){const n=_o(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,n)}function KR(r,e){const n=_o(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,n)}function ZR(r,e){const n=_o(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,n)}function QR(r,e){r.uniform1iv(this.addr,e)}function JR(r,e){r.uniform2iv(this.addr,e)}function $R(r,e){r.uniform3iv(this.addr,e)}function eC(r,e){r.uniform4iv(this.addr,e)}function tC(r,e){r.uniform1uiv(this.addr,e)}function nC(r,e){r.uniform2uiv(this.addr,e)}function iC(r,e){r.uniform3uiv(this.addr,e)}function aC(r,e){r.uniform4uiv(this.addr,e)}function sC(r,e,n){const a=this.cache,o=e.length,c=Xu(n,o);Mn(a,c)||(r.uniform1iv(this.addr,c),En(a,c));let u;this.type===r.SAMPLER_2D_SHADOW?u=Op:u=lS;for(let d=0;d!==o;++d)n.setTexture2D(e[d]||u,c[d])}function rC(r,e,n){const a=this.cache,o=e.length,c=Xu(n,o);Mn(a,c)||(r.uniform1iv(this.addr,c),En(a,c));for(let u=0;u!==o;++u)n.setTexture3D(e[u]||uS,c[u])}function oC(r,e,n){const a=this.cache,o=e.length,c=Xu(n,o);Mn(a,c)||(r.uniform1iv(this.addr,c),En(a,c));for(let u=0;u!==o;++u)n.setTextureCube(e[u]||fS,c[u])}function lC(r,e,n){const a=this.cache,o=e.length,c=Xu(n,o);Mn(a,c)||(r.uniform1iv(this.addr,c),En(a,c));for(let u=0;u!==o;++u)n.setTexture2DArray(e[u]||cS,c[u])}function cC(r){switch(r){case 5126:return XR;case 35664:return WR;case 35665:return jR;case 35666:return qR;case 35674:return YR;case 35675:return KR;case 35676:return ZR;case 5124:case 35670:return QR;case 35667:case 35671:return JR;case 35668:case 35672:return $R;case 35669:case 35673:return eC;case 5125:return tC;case 36294:return nC;case 36295:return iC;case 36296:return aC;case 35678:case 36198:case 36298:case 36306:case 35682:return sC;case 35679:case 36299:case 36307:return rC;case 35680:case 36300:case 36308:case 36293:return oC;case 36289:case 36303:case 36311:case 36292:return lC}}class uC{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.setValue=kR(n.type)}}class fC{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=cC(n.type)}}class hC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,a){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const d=o[c];d.setValue(e,n[d.id],a)}}}const Pd=/(\w+)(\])?(\[|\.)?/g;function ix(r,e){r.seq.push(e),r.map[e.id]=e}function dC(r,e,n){const a=r.name,o=a.length;for(Pd.lastIndex=0;;){const c=Pd.exec(a),u=Pd.lastIndex;let d=c[1];const p=c[2]==="]",h=c[3];if(p&&(d=d|0),h===void 0||h==="["&&u+2===o){ix(n,h===void 0?new uC(d,r,e):new fC(d,r,e));break}else{let v=n.map[d];v===void 0&&(v=new hC(d),ix(n,v)),n=v}}}class Nu{constructor(e,n){this.seq=[],this.map={};const a=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let u=0;u<a;++u){const d=e.getActiveUniform(n,u),p=e.getUniformLocation(n,d.name);dC(d,p,this)}const o=[],c=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):c.push(u);o.length>0&&(this.seq=o.concat(c))}setValue(e,n,a,o){const c=this.map[n];c!==void 0&&c.setValue(e,a,o)}setOptional(e,n,a){const o=n[a];o!==void 0&&this.setValue(e,a,o)}static upload(e,n,a,o){for(let c=0,u=n.length;c!==u;++c){const d=n[c],p=a[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,o)}}static seqWithValue(e,n){const a=[];for(let o=0,c=e.length;o!==c;++o){const u=e[o];u.id in n&&a.push(u)}return a}}function ax(r,e,n){const a=r.createShader(e);return r.shaderSource(a,n),r.compileShader(a),a}const pC=37297;let mC=0;function gC(r,e){const n=r.split(`
`),a=[],o=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let u=o;u<c;u++){const d=u+1;a.push(`${d===e?">":" "} ${d}: ${n[u]}`)}return a.join(`
`)}const sx=new pt;function _C(r){At._getMatrix(sx,At.workingColorSpace,r);const e=`mat3( ${sx.elements.map(n=>n.toFixed(4))} )`;switch(At.getTransfer(r)){case Iu:return[e,"LinearTransferOETF"];case Ht:return[e,"sRGBTransferOETF"];default:return Ze("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function rx(r,e,n){const a=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(a&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const d=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+gC(r.getShaderSource(e),d)}else return c}function vC(r,e){const n=_C(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const xC={[Cx]:"Linear",[wx]:"Reinhard",[Dx]:"Cineon",[Hp]:"ACESFilmic",[Lx]:"AgX",[Ux]:"Neutral",[Nx]:"Custom"};function SC(r,e){const n=xC[e];return n===void 0?(Ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Eu=new Z;function yC(){At.getLuminanceCoefficients(Eu);const r=Eu.x.toFixed(4),e=Eu.y.toFixed(4),n=Eu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function MC(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yl).join(`
`)}function EC(r){const e=[];for(const n in r){const a=r[n];a!==!1&&e.push("#define "+n+" "+a)}return e.join(`
`)}function bC(r,e){const n={},a=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<a;o++){const c=r.getActiveAttrib(e,o),u=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),n[u]={type:c.type,location:r.getAttribLocation(e,u),locationSize:d}}return n}function yl(r){return r!==""}function ox(r,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function lx(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const TC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ip(r){return r.replace(TC,RC)}const AC=new Map;function RC(r,e){let n=mt[e];if(n===void 0){const a=AC.get(e);if(a!==void 0)n=mt[a],Ze('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("Can not resolve #include <"+e+">")}return Ip(n)}const CC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cx(r){return r.replace(CC,wC)}function wC(r,e,n,a){let o="";for(let c=parseInt(e);c<parseInt(n);c++)o+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function ux(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const DC={[bu]:"SHADOWMAP_TYPE_PCF",[xl]:"SHADOWMAP_TYPE_VSM"};function NC(r){return DC[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const LC={[er]:"ENVMAP_TYPE_CUBE",[io]:"ENVMAP_TYPE_CUBE",[Hu]:"ENVMAP_TYPE_CUBE_UV"};function UC(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":LC[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const OC={[io]:"ENVMAP_MODE_REFRACTION"};function IC(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":OC[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const PC={[Rx]:"ENVMAP_BLENDING_MULTIPLY",[ME]:"ENVMAP_BLENDING_MIX",[EE]:"ENVMAP_BLENDING_ADD"};function BC(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":PC[r.combine]||"ENVMAP_BLENDING_NONE"}function FC(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function zC(r,e,n,a){const o=r.getContext(),c=n.defines;let u=n.vertexShader,d=n.fragmentShader;const p=NC(n),h=UC(n),g=IC(n),v=BC(n),_=FC(n),x=MC(n),E=EC(c),T=o.createProgram();let M,S,w=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(M=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(yl).join(`
`),M.length>0&&(M+=`
`),S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(yl).join(`
`),S.length>0&&(S+=`
`)):(M=[ux(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yl).join(`
`),S=[ux(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.envMap?"#define "+g:"",n.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ea?"#define TONE_MAPPING":"",n.toneMapping!==ea?mt.tonemapping_pars_fragment:"",n.toneMapping!==ea?SC("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,vC("linearToOutputTexel",n.outputColorSpace),yC(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(yl).join(`
`)),u=Ip(u),u=ox(u,n),u=lx(u,n),d=Ip(d),d=ox(d,n),d=lx(d,n),u=cx(u),d=cx(d),n.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,M=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,S=["#define varying in",n.glslVersion===lv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===lv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const N=w+M+u,D=w+S+d,F=ax(o,o.VERTEX_SHADER,N),z=ax(o,o.FRAGMENT_SHADER,D);o.attachShader(T,F),o.attachShader(T,z),n.index0AttributeName!==void 0?o.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(T,0,"position"),o.linkProgram(T);function P(H){if(r.debug.checkShaderErrors){const $=o.getProgramInfoLog(T)||"",ae=o.getShaderInfoLog(F)||"",ue=o.getShaderInfoLog(z)||"",J=$.trim(),I=ae.trim(),B=ue.trim();let ce=!0,Q=!0;if(o.getProgramParameter(T,o.LINK_STATUS)===!1)if(ce=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,T,F,z);else{const ve=rx(o,F,"vertex"),U=rx(o,z,"fragment");nt("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(T,o.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+J+`
`+ve+`
`+U)}else J!==""?Ze("WebGLProgram: Program Info Log:",J):(I===""||B==="")&&(Q=!1);Q&&(H.diagnostics={runnable:ce,programLog:J,vertexShader:{log:I,prefix:M},fragmentShader:{log:B,prefix:S}})}o.deleteShader(F),o.deleteShader(z),A=new Nu(o,T),L=bC(o,T)}let A;this.getUniforms=function(){return A===void 0&&P(this),A};let L;this.getAttributes=function(){return L===void 0&&P(this),L};let fe=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return fe===!1&&(fe=o.getProgramParameter(T,pC)),fe},this.destroy=function(){a.releaseStatesOfProgram(this),o.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=mC++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=F,this.fragmentShader=z,this}let HC=0;class VC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,a=e.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(a),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let a=n.get(e);return a===void 0&&(a=new Set,n.set(e,a)),a}_getShaderStage(e){const n=this.shaderCache;let a=n.get(e);return a===void 0&&(a=new GC(e),n.set(e,a)),a}}class GC{constructor(e){this.id=HC++,this.code=e,this.usedTimes=0}}function kC(r,e,n,a,o,c){const u=new jx,d=new VC,p=new Set,h=[],g=new Map,v=a.logarithmicDepthBuffer;let _=a.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(A){return p.add(A),A===0?"uv":`uv${A}`}function T(A,L,fe,H,$){const ae=H.fog,ue=$.geometry,J=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?H.environment:null,I=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,B=e.get(A.envMap||J,I),ce=B&&B.mapping===Hu?B.image.height:null,Q=x[A.type];A.precision!==null&&(_=a.getMaxPrecision(A.precision),_!==A.precision&&Ze("WebGLProgram.getParameters:",A.precision,"not supported, using",_,"instead."));const ve=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,U=ve!==void 0?ve.length:0;let j=0;ue.morphAttributes.position!==void 0&&(j=1),ue.morphAttributes.normal!==void 0&&(j=2),ue.morphAttributes.color!==void 0&&(j=3);let ge,Ae,Ue,ne;if(Q){const wt=Zi[Q];ge=wt.vertexShader,Ae=wt.fragmentShader}else ge=A.vertexShader,Ae=A.fragmentShader,d.update(A),Ue=d.getVertexShaderID(A),ne=d.getFragmentShaderID(A);const xe=r.getRenderTarget(),be=r.state.buffers.depth.getReversed(),Fe=$.isInstancedMesh===!0,Qe=$.isBatchedMesh===!0,et=!!A.map,nn=!!A.matcap,Mt=!!B,xt=!!A.aoMap,Ut=!!A.lightMap,ct=!!A.bumpMap,tn=!!A.normalMap,G=!!A.displacementMap,Zt=!!A.emissiveMap,Rt=!!A.metalnessMap,It=!!A.roughnessMap,je=A.anisotropy>0,O=A.clearcoat>0,b=A.dispersion>0,q=A.iridescence>0,me=A.sheen>0,ye=A.transmission>0,de=je&&!!A.anisotropyMap,Xe=O&&!!A.clearcoatMap,we=O&&!!A.clearcoatNormalMap,Ke=O&&!!A.clearcoatRoughnessMap,tt=q&&!!A.iridescenceMap,Te=q&&!!A.iridescenceThicknessMap,Me=me&&!!A.sheenColorMap,Ie=me&&!!A.sheenRoughnessMap,Oe=!!A.specularMap,Pe=!!A.specularColorMap,ft=!!A.specularIntensityMap,W=ye&&!!A.transmissionMap,Ce=ye&&!!A.thicknessMap,Re=!!A.gradientMap,Be=!!A.alphaMap,Ee=A.alphaTest>0,he=!!A.alphaHash,He=!!A.extensions;let at=ea;A.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(at=r.toneMapping);const Bt={shaderID:Q,shaderType:A.type,shaderName:A.name,vertexShader:ge,fragmentShader:Ae,defines:A.defines,customVertexShaderID:Ue,customFragmentShaderID:ne,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:_,batching:Qe,batchingColor:Qe&&$._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&$.instanceColor!==null,instancingMorph:Fe&&$.morphTexture!==null,outputColorSpace:xe===null?r.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:Xn,alphaToCoverage:!!A.alphaToCoverage,map:et,matcap:nn,envMap:Mt,envMapMode:Mt&&B.mapping,envMapCubeUVHeight:ce,aoMap:xt,lightMap:Ut,bumpMap:ct,normalMap:tn,displacementMap:G,emissiveMap:Zt,normalMapObjectSpace:tn&&A.normalMapType===CE,normalMapTangentSpace:tn&&A.normalMapType===kx,metalnessMap:Rt,roughnessMap:It,anisotropy:je,anisotropyMap:de,clearcoat:O,clearcoatMap:Xe,clearcoatNormalMap:we,clearcoatRoughnessMap:Ke,dispersion:b,iridescence:q,iridescenceMap:tt,iridescenceThicknessMap:Te,sheen:me,sheenColorMap:Me,sheenRoughnessMap:Ie,specularMap:Oe,specularColorMap:Pe,specularIntensityMap:ft,transmission:ye,transmissionMap:W,thicknessMap:Ce,gradientMap:Re,opaque:A.transparent===!1&&A.blending===$r&&A.alphaToCoverage===!1,alphaMap:Be,alphaTest:Ee,alphaHash:he,combine:A.combine,mapUv:et&&E(A.map.channel),aoMapUv:xt&&E(A.aoMap.channel),lightMapUv:Ut&&E(A.lightMap.channel),bumpMapUv:ct&&E(A.bumpMap.channel),normalMapUv:tn&&E(A.normalMap.channel),displacementMapUv:G&&E(A.displacementMap.channel),emissiveMapUv:Zt&&E(A.emissiveMap.channel),metalnessMapUv:Rt&&E(A.metalnessMap.channel),roughnessMapUv:It&&E(A.roughnessMap.channel),anisotropyMapUv:de&&E(A.anisotropyMap.channel),clearcoatMapUv:Xe&&E(A.clearcoatMap.channel),clearcoatNormalMapUv:we&&E(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ke&&E(A.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&E(A.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&E(A.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&E(A.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&E(A.sheenRoughnessMap.channel),specularMapUv:Oe&&E(A.specularMap.channel),specularColorMapUv:Pe&&E(A.specularColorMap.channel),specularIntensityMapUv:ft&&E(A.specularIntensityMap.channel),transmissionMapUv:W&&E(A.transmissionMap.channel),thicknessMapUv:Ce&&E(A.thicknessMap.channel),alphaMapUv:Be&&E(A.alphaMap.channel),vertexTangents:!!ue.attributes.tangent&&(tn||je),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!ue.attributes.uv&&(et||Be),fog:!!ae,useFog:A.fog===!0,fogExp2:!!ae&&ae.isFogExp2,flatShading:A.wireframe===!1&&(A.flatShading===!0||ue.attributes.normal===void 0&&tn===!1&&(A.isMeshLambertMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isMeshPhysicalMaterial)),sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:be,skinning:$.isSkinnedMesh===!0,morphTargets:ue.morphAttributes.position!==void 0,morphNormals:ue.morphAttributes.normal!==void 0,morphColors:ue.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:j,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:A.dithering,shadowMapEnabled:r.shadowMap.enabled&&fe.length>0,shadowMapType:r.shadowMap.type,toneMapping:at,decodeVideoTexture:et&&A.map.isVideoTexture===!0&&At.getTransfer(A.map.colorSpace)===Ht,decodeVideoTextureEmissive:Zt&&A.emissiveMap.isVideoTexture===!0&&At.getTransfer(A.emissiveMap.colorSpace)===Ht,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Qi,flipSided:A.side===Qn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:He&&A.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&A.extensions.multiDraw===!0||Qe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Bt.vertexUv1s=p.has(1),Bt.vertexUv2s=p.has(2),Bt.vertexUv3s=p.has(3),p.clear(),Bt}function M(A){const L=[];if(A.shaderID?L.push(A.shaderID):(L.push(A.customVertexShaderID),L.push(A.customFragmentShaderID)),A.defines!==void 0)for(const fe in A.defines)L.push(fe),L.push(A.defines[fe]);return A.isRawShaderMaterial===!1&&(S(L,A),w(L,A),L.push(r.outputColorSpace)),L.push(A.customProgramCacheKey),L.join()}function S(A,L){A.push(L.precision),A.push(L.outputColorSpace),A.push(L.envMapMode),A.push(L.envMapCubeUVHeight),A.push(L.mapUv),A.push(L.alphaMapUv),A.push(L.lightMapUv),A.push(L.aoMapUv),A.push(L.bumpMapUv),A.push(L.normalMapUv),A.push(L.displacementMapUv),A.push(L.emissiveMapUv),A.push(L.metalnessMapUv),A.push(L.roughnessMapUv),A.push(L.anisotropyMapUv),A.push(L.clearcoatMapUv),A.push(L.clearcoatNormalMapUv),A.push(L.clearcoatRoughnessMapUv),A.push(L.iridescenceMapUv),A.push(L.iridescenceThicknessMapUv),A.push(L.sheenColorMapUv),A.push(L.sheenRoughnessMapUv),A.push(L.specularMapUv),A.push(L.specularColorMapUv),A.push(L.specularIntensityMapUv),A.push(L.transmissionMapUv),A.push(L.thicknessMapUv),A.push(L.combine),A.push(L.fogExp2),A.push(L.sizeAttenuation),A.push(L.morphTargetsCount),A.push(L.morphAttributeCount),A.push(L.numDirLights),A.push(L.numPointLights),A.push(L.numSpotLights),A.push(L.numSpotLightMaps),A.push(L.numHemiLights),A.push(L.numRectAreaLights),A.push(L.numDirLightShadows),A.push(L.numPointLightShadows),A.push(L.numSpotLightShadows),A.push(L.numSpotLightShadowsWithMaps),A.push(L.numLightProbes),A.push(L.shadowMapType),A.push(L.toneMapping),A.push(L.numClippingPlanes),A.push(L.numClipIntersection),A.push(L.depthPacking)}function w(A,L){u.disableAll(),L.instancing&&u.enable(0),L.instancingColor&&u.enable(1),L.instancingMorph&&u.enable(2),L.matcap&&u.enable(3),L.envMap&&u.enable(4),L.normalMapObjectSpace&&u.enable(5),L.normalMapTangentSpace&&u.enable(6),L.clearcoat&&u.enable(7),L.iridescence&&u.enable(8),L.alphaTest&&u.enable(9),L.vertexColors&&u.enable(10),L.vertexAlphas&&u.enable(11),L.vertexUv1s&&u.enable(12),L.vertexUv2s&&u.enable(13),L.vertexUv3s&&u.enable(14),L.vertexTangents&&u.enable(15),L.anisotropy&&u.enable(16),L.alphaHash&&u.enable(17),L.batching&&u.enable(18),L.dispersion&&u.enable(19),L.batchingColor&&u.enable(20),L.gradientMap&&u.enable(21),A.push(u.mask),u.disableAll(),L.fog&&u.enable(0),L.useFog&&u.enable(1),L.flatShading&&u.enable(2),L.logarithmicDepthBuffer&&u.enable(3),L.reversedDepthBuffer&&u.enable(4),L.skinning&&u.enable(5),L.morphTargets&&u.enable(6),L.morphNormals&&u.enable(7),L.morphColors&&u.enable(8),L.premultipliedAlpha&&u.enable(9),L.shadowMapEnabled&&u.enable(10),L.doubleSided&&u.enable(11),L.flipSided&&u.enable(12),L.useDepthPacking&&u.enable(13),L.dithering&&u.enable(14),L.transmission&&u.enable(15),L.sheen&&u.enable(16),L.opaque&&u.enable(17),L.pointsUvs&&u.enable(18),L.decodeVideoTexture&&u.enable(19),L.decodeVideoTextureEmissive&&u.enable(20),L.alphaToCoverage&&u.enable(21),A.push(u.mask)}function N(A){const L=x[A.type];let fe;if(L){const H=Zi[L];fe=Bb.clone(H.uniforms)}else fe=A.uniforms;return fe}function D(A,L){let fe=g.get(L);return fe!==void 0?++fe.usedTimes:(fe=new zC(r,L,A,o),h.push(fe),g.set(L,fe)),fe}function F(A){if(--A.usedTimes===0){const L=h.indexOf(A);h[L]=h[h.length-1],h.pop(),g.delete(A.cacheKey),A.destroy()}}function z(A){d.remove(A)}function P(){d.dispose()}return{getParameters:T,getProgramCacheKey:M,getUniforms:N,acquireProgram:D,releaseProgram:F,releaseShaderCache:z,programs:h,dispose:P}}function XC(){let r=new WeakMap;function e(u){return r.has(u)}function n(u){let d=r.get(u);return d===void 0&&(d={},r.set(u,d)),d}function a(u){r.delete(u)}function o(u,d,p){r.get(u)[d]=p}function c(){r=new WeakMap}return{has:e,get:n,remove:a,update:o,dispose:c}}function WC(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function fx(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function hx(){const r=[];let e=0;const n=[],a=[],o=[];function c(){e=0,n.length=0,a.length=0,o.length=0}function u(_){let x=0;return _.isInstancedMesh&&(x+=2),_.isSkinnedMesh&&(x+=1),x}function d(_,x,E,T,M,S){let w=r[e];return w===void 0?(w={id:_.id,object:_,geometry:x,material:E,materialVariant:u(_),groupOrder:T,renderOrder:_.renderOrder,z:M,group:S},r[e]=w):(w.id=_.id,w.object=_,w.geometry=x,w.material=E,w.materialVariant=u(_),w.groupOrder=T,w.renderOrder=_.renderOrder,w.z=M,w.group=S),e++,w}function p(_,x,E,T,M,S){const w=d(_,x,E,T,M,S);E.transmission>0?a.push(w):E.transparent===!0?o.push(w):n.push(w)}function h(_,x,E,T,M,S){const w=d(_,x,E,T,M,S);E.transmission>0?a.unshift(w):E.transparent===!0?o.unshift(w):n.unshift(w)}function g(_,x){n.length>1&&n.sort(_||WC),a.length>1&&a.sort(x||fx),o.length>1&&o.sort(x||fx)}function v(){for(let _=e,x=r.length;_<x;_++){const E=r[_];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:n,transmissive:a,transparent:o,init:c,push:p,unshift:h,finish:v,sort:g}}function jC(){let r=new WeakMap;function e(a,o){const c=r.get(a);let u;return c===void 0?(u=new hx,r.set(a,[u])):o>=c.length?(u=new hx,c.push(u)):u=c[o],u}function n(){r=new WeakMap}return{get:e,dispose:n}}function qC(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Z,color:new st};break;case"SpotLight":n={position:new Z,direction:new Z,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Z,color:new st,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Z,skyColor:new st,groundColor:new st};break;case"RectAreaLight":n={color:new st,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return r[e.id]=n,n}}}function YC(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=n,n}}}let KC=0;function ZC(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function QC(r){const e=new qC,n=YC(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)a.probe.push(new Z);const o=new Z,c=new gt,u=new gt;function d(h){let g=0,v=0,_=0;for(let L=0;L<9;L++)a.probe[L].set(0,0,0);let x=0,E=0,T=0,M=0,S=0,w=0,N=0,D=0,F=0,z=0,P=0;h.sort(ZC);for(let L=0,fe=h.length;L<fe;L++){const H=h[L],$=H.color,ae=H.intensity,ue=H.distance;let J=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===so?J=H.shadow.map.texture:J=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)g+=$.r*ae,v+=$.g*ae,_+=$.b*ae;else if(H.isLightProbe){for(let I=0;I<9;I++)a.probe[I].addScaledVector(H.sh.coefficients[I],ae);P++}else if(H.isDirectionalLight){const I=e.get(H);if(I.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const B=H.shadow,ce=n.get(H);ce.shadowIntensity=B.intensity,ce.shadowBias=B.bias,ce.shadowNormalBias=B.normalBias,ce.shadowRadius=B.radius,ce.shadowMapSize=B.mapSize,a.directionalShadow[x]=ce,a.directionalShadowMap[x]=J,a.directionalShadowMatrix[x]=H.shadow.matrix,w++}a.directional[x]=I,x++}else if(H.isSpotLight){const I=e.get(H);I.position.setFromMatrixPosition(H.matrixWorld),I.color.copy($).multiplyScalar(ae),I.distance=ue,I.coneCos=Math.cos(H.angle),I.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),I.decay=H.decay,a.spot[T]=I;const B=H.shadow;if(H.map&&(a.spotLightMap[F]=H.map,F++,B.updateMatrices(H),H.castShadow&&z++),a.spotLightMatrix[T]=B.matrix,H.castShadow){const ce=n.get(H);ce.shadowIntensity=B.intensity,ce.shadowBias=B.bias,ce.shadowNormalBias=B.normalBias,ce.shadowRadius=B.radius,ce.shadowMapSize=B.mapSize,a.spotShadow[T]=ce,a.spotShadowMap[T]=J,D++}T++}else if(H.isRectAreaLight){const I=e.get(H);I.color.copy($).multiplyScalar(ae),I.halfWidth.set(H.width*.5,0,0),I.halfHeight.set(0,H.height*.5,0),a.rectArea[M]=I,M++}else if(H.isPointLight){const I=e.get(H);if(I.color.copy(H.color).multiplyScalar(H.intensity),I.distance=H.distance,I.decay=H.decay,H.castShadow){const B=H.shadow,ce=n.get(H);ce.shadowIntensity=B.intensity,ce.shadowBias=B.bias,ce.shadowNormalBias=B.normalBias,ce.shadowRadius=B.radius,ce.shadowMapSize=B.mapSize,ce.shadowCameraNear=B.camera.near,ce.shadowCameraFar=B.camera.far,a.pointShadow[E]=ce,a.pointShadowMap[E]=J,a.pointShadowMatrix[E]=H.shadow.matrix,N++}a.point[E]=I,E++}else if(H.isHemisphereLight){const I=e.get(H);I.skyColor.copy(H.color).multiplyScalar(ae),I.groundColor.copy(H.groundColor).multiplyScalar(ae),a.hemi[S]=I,S++}}M>0&&(r.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Le.LTC_FLOAT_1,a.rectAreaLTC2=Le.LTC_FLOAT_2):(a.rectAreaLTC1=Le.LTC_HALF_1,a.rectAreaLTC2=Le.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=v,a.ambient[2]=_;const A=a.hash;(A.directionalLength!==x||A.pointLength!==E||A.spotLength!==T||A.rectAreaLength!==M||A.hemiLength!==S||A.numDirectionalShadows!==w||A.numPointShadows!==N||A.numSpotShadows!==D||A.numSpotMaps!==F||A.numLightProbes!==P)&&(a.directional.length=x,a.spot.length=T,a.rectArea.length=M,a.point.length=E,a.hemi.length=S,a.directionalShadow.length=w,a.directionalShadowMap.length=w,a.pointShadow.length=N,a.pointShadowMap.length=N,a.spotShadow.length=D,a.spotShadowMap.length=D,a.directionalShadowMatrix.length=w,a.pointShadowMatrix.length=N,a.spotLightMatrix.length=D+F-z,a.spotLightMap.length=F,a.numSpotLightShadowsWithMaps=z,a.numLightProbes=P,A.directionalLength=x,A.pointLength=E,A.spotLength=T,A.rectAreaLength=M,A.hemiLength=S,A.numDirectionalShadows=w,A.numPointShadows=N,A.numSpotShadows=D,A.numSpotMaps=F,A.numLightProbes=P,a.version=KC++)}function p(h,g){let v=0,_=0,x=0,E=0,T=0;const M=g.matrixWorldInverse;for(let S=0,w=h.length;S<w;S++){const N=h[S];if(N.isDirectionalLight){const D=a.directional[v];D.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),D.direction.sub(o),D.direction.transformDirection(M),v++}else if(N.isSpotLight){const D=a.spot[x];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(M),D.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),D.direction.sub(o),D.direction.transformDirection(M),x++}else if(N.isRectAreaLight){const D=a.rectArea[E];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(M),u.identity(),c.copy(N.matrixWorld),c.premultiply(M),u.extractRotation(c),D.halfWidth.set(N.width*.5,0,0),D.halfHeight.set(0,N.height*.5,0),D.halfWidth.applyMatrix4(u),D.halfHeight.applyMatrix4(u),E++}else if(N.isPointLight){const D=a.point[_];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(M),_++}else if(N.isHemisphereLight){const D=a.hemi[T];D.direction.setFromMatrixPosition(N.matrixWorld),D.direction.transformDirection(M),T++}}}return{setup:d,setupView:p,state:a}}function dx(r){const e=new QC(r),n=[],a=[];function o(g){h.camera=g,n.length=0,a.length=0}function c(g){n.push(g)}function u(g){a.push(g)}function d(){e.setup(n)}function p(g){e.setupView(n,g)}const h={lightsArray:n,shadowsArray:a,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:h,setupLights:d,setupLightsView:p,pushLight:c,pushShadow:u}}function JC(r){let e=new WeakMap;function n(o,c=0){const u=e.get(o);let d;return u===void 0?(d=new dx(r),e.set(o,[d])):c>=u.length?(d=new dx(r),u.push(d)):d=u[c],d}function a(){e=new WeakMap}return{get:n,dispose:a}}const $C=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,e2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,t2=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],n2=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],px=new gt,_l=new Z,Bd=new Z;function i2(r,e,n){let a=new tm;const o=new Ct,c=new Ct,u=new Kt,d=new Vb,p=new Gb,h={},g=n.maxTextureSize,v={[Pa]:Qn,[Qn]:Pa,[Qi]:Qi},_=new aa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:$C,fragmentShader:e2}),x=_.clone();x.defines.HORIZONTAL_PASS=1;const E=new bi;E.setAttribute("position",new kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Jn(E,_),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bu;let S=this.type;this.render=function(z,P,A){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||z.length===0)return;this.type===Ax&&(Ze("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=bu);const L=r.getRenderTarget(),fe=r.getActiveCubeFace(),H=r.getActiveMipmapLevel(),$=r.state;$.setBlending(Oa),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const ae=S!==this.type;ae&&P.traverse(function(ue){ue.material&&(Array.isArray(ue.material)?ue.material.forEach(J=>J.needsUpdate=!0):ue.material.needsUpdate=!0)});for(let ue=0,J=z.length;ue<J;ue++){const I=z[ue],B=I.shadow;if(B===void 0){Ze("WebGLShadowMap:",I,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;o.copy(B.mapSize);const ce=B.getFrameExtents();o.multiply(ce),c.copy(B.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/ce.x),o.x=c.x*ce.x,B.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/ce.y),o.y=c.y*ce.y,B.mapSize.y=c.y));const Q=r.state.buffers.depth.getReversed();if(B.camera._reversedDepth=Q,B.map===null||ae===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===xl){if(I.isPointLight){Ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new ta(o.x,o.y,{format:so,type:Ba,minFilter:yn,magFilter:yn,generateMipmaps:!1}),B.map.texture.name=I.name+".shadowMap",B.map.depthTexture=new Nl(o.x,o.y,yi),B.map.depthTexture.name=I.name+".shadowMapDepth",B.map.depthTexture.format=Fa,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Sn,B.map.depthTexture.magFilter=Sn}else I.isPointLight?(B.map=new oS(o.x),B.map.depthTexture=new Ob(o.x,na)):(B.map=new ta(o.x,o.y),B.map.depthTexture=new Nl(o.x,o.y,na)),B.map.depthTexture.name=I.name+".shadowMap",B.map.depthTexture.format=Fa,this.type===bu?(B.map.depthTexture.compareFunction=Q?Kp:Yp,B.map.depthTexture.minFilter=yn,B.map.depthTexture.magFilter=yn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Sn,B.map.depthTexture.magFilter=Sn);B.camera.updateProjectionMatrix()}const ve=B.map.isWebGLCubeRenderTarget?6:1;for(let U=0;U<ve;U++){if(B.map.isWebGLCubeRenderTarget)r.setRenderTarget(B.map,U),r.clear();else{U===0&&(r.setRenderTarget(B.map),r.clear());const j=B.getViewport(U);u.set(c.x*j.x,c.y*j.y,c.x*j.z,c.y*j.w),$.viewport(u)}if(I.isPointLight){const j=B.camera,ge=B.matrix,Ae=I.distance||j.far;Ae!==j.far&&(j.far=Ae,j.updateProjectionMatrix()),_l.setFromMatrixPosition(I.matrixWorld),j.position.copy(_l),Bd.copy(j.position),Bd.add(t2[U]),j.up.copy(n2[U]),j.lookAt(Bd),j.updateMatrixWorld(),ge.makeTranslation(-_l.x,-_l.y,-_l.z),px.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),B._frustum.setFromProjectionMatrix(px,j.coordinateSystem,j.reversedDepth)}else B.updateMatrices(I);a=B.getFrustum(),D(P,A,B.camera,I,this.type)}B.isPointLightShadow!==!0&&this.type===xl&&w(B,A),B.needsUpdate=!1}S=this.type,M.needsUpdate=!1,r.setRenderTarget(L,fe,H)};function w(z,P){const A=e.update(T);_.defines.VSM_SAMPLES!==z.blurSamples&&(_.defines.VSM_SAMPLES=z.blurSamples,x.defines.VSM_SAMPLES=z.blurSamples,_.needsUpdate=!0,x.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new ta(o.x,o.y,{format:so,type:Ba})),_.uniforms.shadow_pass.value=z.map.depthTexture,_.uniforms.resolution.value=z.mapSize,_.uniforms.radius.value=z.radius,r.setRenderTarget(z.mapPass),r.clear(),r.renderBufferDirect(P,null,A,_,T,null),x.uniforms.shadow_pass.value=z.mapPass.texture,x.uniforms.resolution.value=z.mapSize,x.uniforms.radius.value=z.radius,r.setRenderTarget(z.map),r.clear(),r.renderBufferDirect(P,null,A,x,T,null)}function N(z,P,A,L){let fe=null;const H=A.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(H!==void 0)fe=H;else if(fe=A.isPointLight===!0?p:d,r.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const $=fe.uuid,ae=P.uuid;let ue=h[$];ue===void 0&&(ue={},h[$]=ue);let J=ue[ae];J===void 0&&(J=fe.clone(),ue[ae]=J,P.addEventListener("dispose",F)),fe=J}if(fe.visible=P.visible,fe.wireframe=P.wireframe,L===xl?fe.side=P.shadowSide!==null?P.shadowSide:P.side:fe.side=P.shadowSide!==null?P.shadowSide:v[P.side],fe.alphaMap=P.alphaMap,fe.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,fe.map=P.map,fe.clipShadows=P.clipShadows,fe.clippingPlanes=P.clippingPlanes,fe.clipIntersection=P.clipIntersection,fe.displacementMap=P.displacementMap,fe.displacementScale=P.displacementScale,fe.displacementBias=P.displacementBias,fe.wireframeLinewidth=P.wireframeLinewidth,fe.linewidth=P.linewidth,A.isPointLight===!0&&fe.isMeshDistanceMaterial===!0){const $=r.properties.get(fe);$.light=A}return fe}function D(z,P,A,L,fe){if(z.visible===!1)return;if(z.layers.test(P.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&fe===xl)&&(!z.frustumCulled||a.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,z.matrixWorld);const ae=e.update(z),ue=z.material;if(Array.isArray(ue)){const J=ae.groups;for(let I=0,B=J.length;I<B;I++){const ce=J[I],Q=ue[ce.materialIndex];if(Q&&Q.visible){const ve=N(z,Q,L,fe);z.onBeforeShadow(r,z,P,A,ae,ve,ce),r.renderBufferDirect(A,null,ae,ve,z,ce),z.onAfterShadow(r,z,P,A,ae,ve,ce)}}}else if(ue.visible){const J=N(z,ue,L,fe);z.onBeforeShadow(r,z,P,A,ae,J,null),r.renderBufferDirect(A,null,ae,J,z,null),z.onAfterShadow(r,z,P,A,ae,J,null)}}const $=z.children;for(let ae=0,ue=$.length;ae<ue;ae++)D($[ae],P,A,L,fe)}function F(z){z.target.removeEventListener("dispose",F);for(const A in h){const L=h[A],fe=z.target.uuid;fe in L&&(L[fe].dispose(),delete L[fe])}}}function a2(r,e){function n(){let W=!1;const Ce=new Kt;let Re=null;const Be=new Kt(0,0,0,0);return{setMask:function(Ee){Re!==Ee&&!W&&(r.colorMask(Ee,Ee,Ee,Ee),Re=Ee)},setLocked:function(Ee){W=Ee},setClear:function(Ee,he,He,at,Bt){Bt===!0&&(Ee*=at,he*=at,He*=at),Ce.set(Ee,he,He,at),Be.equals(Ce)===!1&&(r.clearColor(Ee,he,He,at),Be.copy(Ce))},reset:function(){W=!1,Re=null,Be.set(-1,0,0,0)}}}function a(){let W=!1,Ce=!1,Re=null,Be=null,Ee=null;return{setReversed:function(he){if(Ce!==he){const He=e.get("EXT_clip_control");he?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),Ce=he;const at=Ee;Ee=null,this.setClear(at)}},getReversed:function(){return Ce},setTest:function(he){he?xe(r.DEPTH_TEST):be(r.DEPTH_TEST)},setMask:function(he){Re!==he&&!W&&(r.depthMask(he),Re=he)},setFunc:function(he){if(Ce&&(he=zE[he]),Be!==he){switch(he){case Wd:r.depthFunc(r.NEVER);break;case jd:r.depthFunc(r.ALWAYS);break;case qd:r.depthFunc(r.LESS);break;case no:r.depthFunc(r.LEQUAL);break;case Yd:r.depthFunc(r.EQUAL);break;case Kd:r.depthFunc(r.GEQUAL);break;case Zd:r.depthFunc(r.GREATER);break;case Qd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Be=he}},setLocked:function(he){W=he},setClear:function(he){Ee!==he&&(Ee=he,Ce&&(he=1-he),r.clearDepth(he))},reset:function(){W=!1,Re=null,Be=null,Ee=null,Ce=!1}}}function o(){let W=!1,Ce=null,Re=null,Be=null,Ee=null,he=null,He=null,at=null,Bt=null;return{setTest:function(wt){W||(wt?xe(r.STENCIL_TEST):be(r.STENCIL_TEST))},setMask:function(wt){Ce!==wt&&!W&&(r.stencilMask(wt),Ce=wt)},setFunc:function(wt,In,Ti){(Re!==wt||Be!==In||Ee!==Ti)&&(r.stencilFunc(wt,In,Ti),Re=wt,Be=In,Ee=Ti)},setOp:function(wt,In,Ti){(he!==wt||He!==In||at!==Ti)&&(r.stencilOp(wt,In,Ti),he=wt,He=In,at=Ti)},setLocked:function(wt){W=wt},setClear:function(wt){Bt!==wt&&(r.clearStencil(wt),Bt=wt)},reset:function(){W=!1,Ce=null,Re=null,Be=null,Ee=null,he=null,He=null,at=null,Bt=null}}}const c=new n,u=new a,d=new o,p=new WeakMap,h=new WeakMap;let g={},v={},_=new WeakMap,x=[],E=null,T=!1,M=null,S=null,w=null,N=null,D=null,F=null,z=null,P=new st(0,0,0),A=0,L=!1,fe=null,H=null,$=null,ae=null,ue=null;const J=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,B=0;const ce=r.getParameter(r.VERSION);ce.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(ce)[1]),I=B>=1):ce.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(ce)[1]),I=B>=2);let Q=null,ve={};const U=r.getParameter(r.SCISSOR_BOX),j=r.getParameter(r.VIEWPORT),ge=new Kt().fromArray(U),Ae=new Kt().fromArray(j);function Ue(W,Ce,Re,Be){const Ee=new Uint8Array(4),he=r.createTexture();r.bindTexture(W,he),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let He=0;He<Re;He++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(Ce,0,r.RGBA,1,1,Be,0,r.RGBA,r.UNSIGNED_BYTE,Ee):r.texImage2D(Ce+He,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ee);return he}const ne={};ne[r.TEXTURE_2D]=Ue(r.TEXTURE_2D,r.TEXTURE_2D,1),ne[r.TEXTURE_CUBE_MAP]=Ue(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[r.TEXTURE_2D_ARRAY]=Ue(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ne[r.TEXTURE_3D]=Ue(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),d.setClear(0),xe(r.DEPTH_TEST),u.setFunc(no),ct(!1),tn(J_),xe(r.CULL_FACE),xt(Oa);function xe(W){g[W]!==!0&&(r.enable(W),g[W]=!0)}function be(W){g[W]!==!1&&(r.disable(W),g[W]=!1)}function Fe(W,Ce){return v[W]!==Ce?(r.bindFramebuffer(W,Ce),v[W]=Ce,W===r.DRAW_FRAMEBUFFER&&(v[r.FRAMEBUFFER]=Ce),W===r.FRAMEBUFFER&&(v[r.DRAW_FRAMEBUFFER]=Ce),!0):!1}function Qe(W,Ce){let Re=x,Be=!1;if(W){Re=_.get(Ce),Re===void 0&&(Re=[],_.set(Ce,Re));const Ee=W.textures;if(Re.length!==Ee.length||Re[0]!==r.COLOR_ATTACHMENT0){for(let he=0,He=Ee.length;he<He;he++)Re[he]=r.COLOR_ATTACHMENT0+he;Re.length=Ee.length,Be=!0}}else Re[0]!==r.BACK&&(Re[0]=r.BACK,Be=!0);Be&&r.drawBuffers(Re)}function et(W){return E!==W?(r.useProgram(W),E=W,!0):!1}const nn={[Ys]:r.FUNC_ADD,[sE]:r.FUNC_SUBTRACT,[rE]:r.FUNC_REVERSE_SUBTRACT};nn[oE]=r.MIN,nn[lE]=r.MAX;const Mt={[cE]:r.ZERO,[uE]:r.ONE,[fE]:r.SRC_COLOR,[kd]:r.SRC_ALPHA,[_E]:r.SRC_ALPHA_SATURATE,[mE]:r.DST_COLOR,[dE]:r.DST_ALPHA,[hE]:r.ONE_MINUS_SRC_COLOR,[Xd]:r.ONE_MINUS_SRC_ALPHA,[gE]:r.ONE_MINUS_DST_COLOR,[pE]:r.ONE_MINUS_DST_ALPHA,[vE]:r.CONSTANT_COLOR,[xE]:r.ONE_MINUS_CONSTANT_COLOR,[SE]:r.CONSTANT_ALPHA,[yE]:r.ONE_MINUS_CONSTANT_ALPHA};function xt(W,Ce,Re,Be,Ee,he,He,at,Bt,wt){if(W===Oa){T===!0&&(be(r.BLEND),T=!1);return}if(T===!1&&(xe(r.BLEND),T=!0),W!==aE){if(W!==M||wt!==L){if((S!==Ys||D!==Ys)&&(r.blendEquation(r.FUNC_ADD),S=Ys,D=Ys),wt)switch(W){case $r:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case $_:r.blendFunc(r.ONE,r.ONE);break;case ev:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case tv:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:nt("WebGLState: Invalid blending: ",W);break}else switch(W){case $r:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case $_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case ev:nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case tv:nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:nt("WebGLState: Invalid blending: ",W);break}w=null,N=null,F=null,z=null,P.set(0,0,0),A=0,M=W,L=wt}return}Ee=Ee||Ce,he=he||Re,He=He||Be,(Ce!==S||Ee!==D)&&(r.blendEquationSeparate(nn[Ce],nn[Ee]),S=Ce,D=Ee),(Re!==w||Be!==N||he!==F||He!==z)&&(r.blendFuncSeparate(Mt[Re],Mt[Be],Mt[he],Mt[He]),w=Re,N=Be,F=he,z=He),(at.equals(P)===!1||Bt!==A)&&(r.blendColor(at.r,at.g,at.b,Bt),P.copy(at),A=Bt),M=W,L=!1}function Ut(W,Ce){W.side===Qi?be(r.CULL_FACE):xe(r.CULL_FACE);let Re=W.side===Qn;Ce&&(Re=!Re),ct(Re),W.blending===$r&&W.transparent===!1?xt(Oa):xt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),u.setFunc(W.depthFunc),u.setTest(W.depthTest),u.setMask(W.depthWrite),c.setMask(W.colorWrite);const Be=W.stencilWrite;d.setTest(Be),Be&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Zt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?xe(r.SAMPLE_ALPHA_TO_COVERAGE):be(r.SAMPLE_ALPHA_TO_COVERAGE)}function ct(W){fe!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),fe=W)}function tn(W){W!==nE?(xe(r.CULL_FACE),W!==H&&(W===J_?r.cullFace(r.BACK):W===iE?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):be(r.CULL_FACE),H=W}function G(W){W!==$&&(I&&r.lineWidth(W),$=W)}function Zt(W,Ce,Re){W?(xe(r.POLYGON_OFFSET_FILL),(ae!==Ce||ue!==Re)&&(ae=Ce,ue=Re,u.getReversed()&&(Ce=-Ce),r.polygonOffset(Ce,Re))):be(r.POLYGON_OFFSET_FILL)}function Rt(W){W?xe(r.SCISSOR_TEST):be(r.SCISSOR_TEST)}function It(W){W===void 0&&(W=r.TEXTURE0+J-1),Q!==W&&(r.activeTexture(W),Q=W)}function je(W,Ce,Re){Re===void 0&&(Q===null?Re=r.TEXTURE0+J-1:Re=Q);let Be=ve[Re];Be===void 0&&(Be={type:void 0,texture:void 0},ve[Re]=Be),(Be.type!==W||Be.texture!==Ce)&&(Q!==Re&&(r.activeTexture(Re),Q=Re),r.bindTexture(W,Ce||ne[W]),Be.type=W,Be.texture=Ce)}function O(){const W=ve[Q];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function b(){try{r.compressedTexImage2D(...arguments)}catch(W){nt("WebGLState:",W)}}function q(){try{r.compressedTexImage3D(...arguments)}catch(W){nt("WebGLState:",W)}}function me(){try{r.texSubImage2D(...arguments)}catch(W){nt("WebGLState:",W)}}function ye(){try{r.texSubImage3D(...arguments)}catch(W){nt("WebGLState:",W)}}function de(){try{r.compressedTexSubImage2D(...arguments)}catch(W){nt("WebGLState:",W)}}function Xe(){try{r.compressedTexSubImage3D(...arguments)}catch(W){nt("WebGLState:",W)}}function we(){try{r.texStorage2D(...arguments)}catch(W){nt("WebGLState:",W)}}function Ke(){try{r.texStorage3D(...arguments)}catch(W){nt("WebGLState:",W)}}function tt(){try{r.texImage2D(...arguments)}catch(W){nt("WebGLState:",W)}}function Te(){try{r.texImage3D(...arguments)}catch(W){nt("WebGLState:",W)}}function Me(W){ge.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),ge.copy(W))}function Ie(W){Ae.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),Ae.copy(W))}function Oe(W,Ce){let Re=h.get(Ce);Re===void 0&&(Re=new WeakMap,h.set(Ce,Re));let Be=Re.get(W);Be===void 0&&(Be=r.getUniformBlockIndex(Ce,W.name),Re.set(W,Be))}function Pe(W,Ce){const Be=h.get(Ce).get(W);p.get(Ce)!==Be&&(r.uniformBlockBinding(Ce,Be,W.__bindingPointIndex),p.set(Ce,Be))}function ft(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},Q=null,ve={},v={},_=new WeakMap,x=[],E=null,T=!1,M=null,S=null,w=null,N=null,D=null,F=null,z=null,P=new st(0,0,0),A=0,L=!1,fe=null,H=null,$=null,ae=null,ue=null,ge.set(0,0,r.canvas.width,r.canvas.height),Ae.set(0,0,r.canvas.width,r.canvas.height),c.reset(),u.reset(),d.reset()}return{buffers:{color:c,depth:u,stencil:d},enable:xe,disable:be,bindFramebuffer:Fe,drawBuffers:Qe,useProgram:et,setBlending:xt,setMaterial:Ut,setFlipSided:ct,setCullFace:tn,setLineWidth:G,setPolygonOffset:Zt,setScissorTest:Rt,activeTexture:It,bindTexture:je,unbindTexture:O,compressedTexImage2D:b,compressedTexImage3D:q,texImage2D:tt,texImage3D:Te,updateUBOMapping:Oe,uniformBlockBinding:Pe,texStorage2D:we,texStorage3D:Ke,texSubImage2D:me,texSubImage3D:ye,compressedTexSubImage2D:de,compressedTexSubImage3D:Xe,scissor:Me,viewport:Ie,reset:ft}}function s2(r,e,n,a,o,c,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ct,g=new WeakMap;let v;const _=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(O,b){return x?new OffscreenCanvas(O,b):Dl("canvas")}function T(O,b,q){let me=1;const ye=je(O);if((ye.width>q||ye.height>q)&&(me=q/Math.max(ye.width,ye.height)),me<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const de=Math.floor(me*ye.width),Xe=Math.floor(me*ye.height);v===void 0&&(v=E(de,Xe));const we=b?E(de,Xe):v;return we.width=de,we.height=Xe,we.getContext("2d").drawImage(O,0,0,de,Xe),Ze("WebGLRenderer: Texture has been resized from ("+ye.width+"x"+ye.height+") to ("+de+"x"+Xe+")."),we}else return"data"in O&&Ze("WebGLRenderer: Image in DataTexture is too big ("+ye.width+"x"+ye.height+")."),O;return O}function M(O){return O.generateMipmaps}function S(O){r.generateMipmap(O)}function w(O){return O.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?r.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function N(O,b,q,me,ye=!1){if(O!==null){if(r[O]!==void 0)return r[O];Ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let de=b;if(b===r.RED&&(q===r.FLOAT&&(de=r.R32F),q===r.HALF_FLOAT&&(de=r.R16F),q===r.UNSIGNED_BYTE&&(de=r.R8)),b===r.RED_INTEGER&&(q===r.UNSIGNED_BYTE&&(de=r.R8UI),q===r.UNSIGNED_SHORT&&(de=r.R16UI),q===r.UNSIGNED_INT&&(de=r.R32UI),q===r.BYTE&&(de=r.R8I),q===r.SHORT&&(de=r.R16I),q===r.INT&&(de=r.R32I)),b===r.RG&&(q===r.FLOAT&&(de=r.RG32F),q===r.HALF_FLOAT&&(de=r.RG16F),q===r.UNSIGNED_BYTE&&(de=r.RG8)),b===r.RG_INTEGER&&(q===r.UNSIGNED_BYTE&&(de=r.RG8UI),q===r.UNSIGNED_SHORT&&(de=r.RG16UI),q===r.UNSIGNED_INT&&(de=r.RG32UI),q===r.BYTE&&(de=r.RG8I),q===r.SHORT&&(de=r.RG16I),q===r.INT&&(de=r.RG32I)),b===r.RGB_INTEGER&&(q===r.UNSIGNED_BYTE&&(de=r.RGB8UI),q===r.UNSIGNED_SHORT&&(de=r.RGB16UI),q===r.UNSIGNED_INT&&(de=r.RGB32UI),q===r.BYTE&&(de=r.RGB8I),q===r.SHORT&&(de=r.RGB16I),q===r.INT&&(de=r.RGB32I)),b===r.RGBA_INTEGER&&(q===r.UNSIGNED_BYTE&&(de=r.RGBA8UI),q===r.UNSIGNED_SHORT&&(de=r.RGBA16UI),q===r.UNSIGNED_INT&&(de=r.RGBA32UI),q===r.BYTE&&(de=r.RGBA8I),q===r.SHORT&&(de=r.RGBA16I),q===r.INT&&(de=r.RGBA32I)),b===r.RGB&&(q===r.UNSIGNED_INT_5_9_9_9_REV&&(de=r.RGB9_E5),q===r.UNSIGNED_INT_10F_11F_11F_REV&&(de=r.R11F_G11F_B10F)),b===r.RGBA){const Xe=ye?Iu:At.getTransfer(me);q===r.FLOAT&&(de=r.RGBA32F),q===r.HALF_FLOAT&&(de=r.RGBA16F),q===r.UNSIGNED_BYTE&&(de=Xe===Ht?r.SRGB8_ALPHA8:r.RGBA8),q===r.UNSIGNED_SHORT_4_4_4_4&&(de=r.RGBA4),q===r.UNSIGNED_SHORT_5_5_5_1&&(de=r.RGB5_A1)}return(de===r.R16F||de===r.R32F||de===r.RG16F||de===r.RG32F||de===r.RGBA16F||de===r.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function D(O,b){let q;return O?b===null||b===na||b===Al?q=r.DEPTH24_STENCIL8:b===yi?q=r.DEPTH32F_STENCIL8:b===Tl&&(q=r.DEPTH24_STENCIL8,Ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===na||b===Al?q=r.DEPTH_COMPONENT24:b===yi?q=r.DEPTH_COMPONENT32F:b===Tl&&(q=r.DEPTH_COMPONENT16),q}function F(O,b){return M(O)===!0||O.isFramebufferTexture&&O.minFilter!==Sn&&O.minFilter!==yn?Math.log2(Math.max(b.width,b.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?b.mipmaps.length:1}function z(O){const b=O.target;b.removeEventListener("dispose",z),A(b),b.isVideoTexture&&g.delete(b)}function P(O){const b=O.target;b.removeEventListener("dispose",P),fe(b)}function A(O){const b=a.get(O);if(b.__webglInit===void 0)return;const q=O.source,me=_.get(q);if(me){const ye=me[b.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&L(O),Object.keys(me).length===0&&_.delete(q)}a.remove(O)}function L(O){const b=a.get(O);r.deleteTexture(b.__webglTexture);const q=O.source,me=_.get(q);delete me[b.__cacheKey],u.memory.textures--}function fe(O){const b=a.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),a.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(b.__webglFramebuffer[me]))for(let ye=0;ye<b.__webglFramebuffer[me].length;ye++)r.deleteFramebuffer(b.__webglFramebuffer[me][ye]);else r.deleteFramebuffer(b.__webglFramebuffer[me]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[me])}else{if(Array.isArray(b.__webglFramebuffer))for(let me=0;me<b.__webglFramebuffer.length;me++)r.deleteFramebuffer(b.__webglFramebuffer[me]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let me=0;me<b.__webglColorRenderbuffer.length;me++)b.__webglColorRenderbuffer[me]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[me]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const q=O.textures;for(let me=0,ye=q.length;me<ye;me++){const de=a.get(q[me]);de.__webglTexture&&(r.deleteTexture(de.__webglTexture),u.memory.textures--),a.remove(q[me])}a.remove(O)}let H=0;function $(){H=0}function ae(){const O=H;return O>=o.maxTextures&&Ze("WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+o.maxTextures),H+=1,O}function ue(O){const b=[];return b.push(O.wrapS),b.push(O.wrapT),b.push(O.wrapR||0),b.push(O.magFilter),b.push(O.minFilter),b.push(O.anisotropy),b.push(O.internalFormat),b.push(O.format),b.push(O.type),b.push(O.generateMipmaps),b.push(O.premultiplyAlpha),b.push(O.flipY),b.push(O.unpackAlignment),b.push(O.colorSpace),b.join()}function J(O,b){const q=a.get(O);if(O.isVideoTexture&&Rt(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&q.__version!==O.version){const me=O.image;if(me===null)Ze("WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)Ze("WebGLRenderer: Texture marked for update but image is incomplete");else{ne(q,O,b);return}}else O.isExternalTexture&&(q.__webglTexture=O.sourceTexture?O.sourceTexture:null);n.bindTexture(r.TEXTURE_2D,q.__webglTexture,r.TEXTURE0+b)}function I(O,b){const q=a.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&q.__version!==O.version){ne(q,O,b);return}else O.isExternalTexture&&(q.__webglTexture=O.sourceTexture?O.sourceTexture:null);n.bindTexture(r.TEXTURE_2D_ARRAY,q.__webglTexture,r.TEXTURE0+b)}function B(O,b){const q=a.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&q.__version!==O.version){ne(q,O,b);return}n.bindTexture(r.TEXTURE_3D,q.__webglTexture,r.TEXTURE0+b)}function ce(O,b){const q=a.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&q.__version!==O.version){xe(q,O,b);return}n.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture,r.TEXTURE0+b)}const Q={[ao]:r.REPEAT,[Ji]:r.CLAMP_TO_EDGE,[Ou]:r.MIRRORED_REPEAT},ve={[Sn]:r.NEAREST,[Ix]:r.NEAREST_MIPMAP_NEAREST,[Sl]:r.NEAREST_MIPMAP_LINEAR,[yn]:r.LINEAR,[Tu]:r.LINEAR_MIPMAP_NEAREST,[La]:r.LINEAR_MIPMAP_LINEAR},U={[wE]:r.NEVER,[OE]:r.ALWAYS,[DE]:r.LESS,[Yp]:r.LEQUAL,[NE]:r.EQUAL,[Kp]:r.GEQUAL,[LE]:r.GREATER,[UE]:r.NOTEQUAL};function j(O,b){if(b.type===yi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===yn||b.magFilter===Tu||b.magFilter===Sl||b.magFilter===La||b.minFilter===yn||b.minFilter===Tu||b.minFilter===Sl||b.minFilter===La)&&Ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(O,r.TEXTURE_WRAP_S,Q[b.wrapS]),r.texParameteri(O,r.TEXTURE_WRAP_T,Q[b.wrapT]),(O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY)&&r.texParameteri(O,r.TEXTURE_WRAP_R,Q[b.wrapR]),r.texParameteri(O,r.TEXTURE_MAG_FILTER,ve[b.magFilter]),r.texParameteri(O,r.TEXTURE_MIN_FILTER,ve[b.minFilter]),b.compareFunction&&(r.texParameteri(O,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(O,r.TEXTURE_COMPARE_FUNC,U[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Sn||b.minFilter!==Sl&&b.minFilter!==La||b.type===yi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||a.get(b).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");r.texParameterf(O,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,o.getMaxAnisotropy())),a.get(b).__currentAnisotropy=b.anisotropy}}}function ge(O,b){let q=!1;O.__webglInit===void 0&&(O.__webglInit=!0,b.addEventListener("dispose",z));const me=b.source;let ye=_.get(me);ye===void 0&&(ye={},_.set(me,ye));const de=ue(b);if(de!==O.__cacheKey){ye[de]===void 0&&(ye[de]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,q=!0),ye[de].usedTimes++;const Xe=ye[O.__cacheKey];Xe!==void 0&&(ye[O.__cacheKey].usedTimes--,Xe.usedTimes===0&&L(b)),O.__cacheKey=de,O.__webglTexture=ye[de].texture}return q}function Ae(O,b,q){return Math.floor(Math.floor(O/q)/b)}function Ue(O,b,q,me){const de=O.updateRanges;if(de.length===0)n.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,q,me,b.data);else{de.sort((Te,Me)=>Te.start-Me.start);let Xe=0;for(let Te=1;Te<de.length;Te++){const Me=de[Xe],Ie=de[Te],Oe=Me.start+Me.count,Pe=Ae(Ie.start,b.width,4),ft=Ae(Me.start,b.width,4);Ie.start<=Oe+1&&Pe===ft&&Ae(Ie.start+Ie.count-1,b.width,4)===Pe?Me.count=Math.max(Me.count,Ie.start+Ie.count-Me.start):(++Xe,de[Xe]=Ie)}de.length=Xe+1;const we=r.getParameter(r.UNPACK_ROW_LENGTH),Ke=r.getParameter(r.UNPACK_SKIP_PIXELS),tt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let Te=0,Me=de.length;Te<Me;Te++){const Ie=de[Te],Oe=Math.floor(Ie.start/4),Pe=Math.ceil(Ie.count/4),ft=Oe%b.width,W=Math.floor(Oe/b.width),Ce=Pe,Re=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ft),r.pixelStorei(r.UNPACK_SKIP_ROWS,W),n.texSubImage2D(r.TEXTURE_2D,0,ft,W,Ce,Re,q,me,b.data)}O.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,we),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ke),r.pixelStorei(r.UNPACK_SKIP_ROWS,tt)}}function ne(O,b,q){let me=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(me=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(me=r.TEXTURE_3D);const ye=ge(O,b),de=b.source;n.bindTexture(me,O.__webglTexture,r.TEXTURE0+q);const Xe=a.get(de);if(de.version!==Xe.__version||ye===!0){n.activeTexture(r.TEXTURE0+q);const we=At.getPrimaries(At.workingColorSpace),Ke=b.colorSpace===xs?null:At.getPrimaries(b.colorSpace),tt=b.colorSpace===xs||we===Ke?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let Te=T(b.image,!1,o.maxTextureSize);Te=It(b,Te);const Me=c.convert(b.format,b.colorSpace),Ie=c.convert(b.type);let Oe=N(b.internalFormat,Me,Ie,b.colorSpace,b.isVideoTexture);j(me,b);let Pe;const ft=b.mipmaps,W=b.isVideoTexture!==!0,Ce=Xe.__version===void 0||ye===!0,Re=de.dataReady,Be=F(b,Te);if(b.isDepthTexture)Oe=D(b.format===Zs,b.type),Ce&&(W?n.texStorage2D(r.TEXTURE_2D,1,Oe,Te.width,Te.height):n.texImage2D(r.TEXTURE_2D,0,Oe,Te.width,Te.height,0,Me,Ie,null));else if(b.isDataTexture)if(ft.length>0){W&&Ce&&n.texStorage2D(r.TEXTURE_2D,Be,Oe,ft[0].width,ft[0].height);for(let Ee=0,he=ft.length;Ee<he;Ee++)Pe=ft[Ee],W?Re&&n.texSubImage2D(r.TEXTURE_2D,Ee,0,0,Pe.width,Pe.height,Me,Ie,Pe.data):n.texImage2D(r.TEXTURE_2D,Ee,Oe,Pe.width,Pe.height,0,Me,Ie,Pe.data);b.generateMipmaps=!1}else W?(Ce&&n.texStorage2D(r.TEXTURE_2D,Be,Oe,Te.width,Te.height),Re&&Ue(b,Te,Me,Ie)):n.texImage2D(r.TEXTURE_2D,0,Oe,Te.width,Te.height,0,Me,Ie,Te.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){W&&Ce&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Be,Oe,ft[0].width,ft[0].height,Te.depth);for(let Ee=0,he=ft.length;Ee<he;Ee++)if(Pe=ft[Ee],b.format!==Mi)if(Me!==null)if(W){if(Re)if(b.layerUpdates.size>0){const He=Wv(Pe.width,Pe.height,b.format,b.type);for(const at of b.layerUpdates){const Bt=Pe.data.subarray(at*He/Pe.data.BYTES_PER_ELEMENT,(at+1)*He/Pe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Ee,0,0,at,Pe.width,Pe.height,1,Me,Bt)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Ee,0,0,0,Pe.width,Pe.height,Te.depth,Me,Pe.data)}else n.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Ee,Oe,Pe.width,Pe.height,Te.depth,0,Pe.data,0,0);else Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Re&&n.texSubImage3D(r.TEXTURE_2D_ARRAY,Ee,0,0,0,Pe.width,Pe.height,Te.depth,Me,Ie,Pe.data):n.texImage3D(r.TEXTURE_2D_ARRAY,Ee,Oe,Pe.width,Pe.height,Te.depth,0,Me,Ie,Pe.data)}else{W&&Ce&&n.texStorage2D(r.TEXTURE_2D,Be,Oe,ft[0].width,ft[0].height);for(let Ee=0,he=ft.length;Ee<he;Ee++)Pe=ft[Ee],b.format!==Mi?Me!==null?W?Re&&n.compressedTexSubImage2D(r.TEXTURE_2D,Ee,0,0,Pe.width,Pe.height,Me,Pe.data):n.compressedTexImage2D(r.TEXTURE_2D,Ee,Oe,Pe.width,Pe.height,0,Pe.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Re&&n.texSubImage2D(r.TEXTURE_2D,Ee,0,0,Pe.width,Pe.height,Me,Ie,Pe.data):n.texImage2D(r.TEXTURE_2D,Ee,Oe,Pe.width,Pe.height,0,Me,Ie,Pe.data)}else if(b.isDataArrayTexture)if(W){if(Ce&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Be,Oe,Te.width,Te.height,Te.depth),Re)if(b.layerUpdates.size>0){const Ee=Wv(Te.width,Te.height,b.format,b.type);for(const he of b.layerUpdates){const He=Te.data.subarray(he*Ee/Te.data.BYTES_PER_ELEMENT,(he+1)*Ee/Te.data.BYTES_PER_ELEMENT);n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,he,Te.width,Te.height,1,Me,Ie,He)}b.clearLayerUpdates()}else n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Te.width,Te.height,Te.depth,Me,Ie,Te.data)}else n.texImage3D(r.TEXTURE_2D_ARRAY,0,Oe,Te.width,Te.height,Te.depth,0,Me,Ie,Te.data);else if(b.isData3DTexture)W?(Ce&&n.texStorage3D(r.TEXTURE_3D,Be,Oe,Te.width,Te.height,Te.depth),Re&&n.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Te.width,Te.height,Te.depth,Me,Ie,Te.data)):n.texImage3D(r.TEXTURE_3D,0,Oe,Te.width,Te.height,Te.depth,0,Me,Ie,Te.data);else if(b.isFramebufferTexture){if(Ce)if(W)n.texStorage2D(r.TEXTURE_2D,Be,Oe,Te.width,Te.height);else{let Ee=Te.width,he=Te.height;for(let He=0;He<Be;He++)n.texImage2D(r.TEXTURE_2D,He,Oe,Ee,he,0,Me,Ie,null),Ee>>=1,he>>=1}}else if(ft.length>0){if(W&&Ce){const Ee=je(ft[0]);n.texStorage2D(r.TEXTURE_2D,Be,Oe,Ee.width,Ee.height)}for(let Ee=0,he=ft.length;Ee<he;Ee++)Pe=ft[Ee],W?Re&&n.texSubImage2D(r.TEXTURE_2D,Ee,0,0,Me,Ie,Pe):n.texImage2D(r.TEXTURE_2D,Ee,Oe,Me,Ie,Pe);b.generateMipmaps=!1}else if(W){if(Ce){const Ee=je(Te);n.texStorage2D(r.TEXTURE_2D,Be,Oe,Ee.width,Ee.height)}Re&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,Me,Ie,Te)}else n.texImage2D(r.TEXTURE_2D,0,Oe,Me,Ie,Te);M(b)&&S(me),Xe.__version=de.version,b.onUpdate&&b.onUpdate(b)}O.__version=b.version}function xe(O,b,q){if(b.image.length!==6)return;const me=ge(O,b),ye=b.source;n.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+q);const de=a.get(ye);if(ye.version!==de.__version||me===!0){n.activeTexture(r.TEXTURE0+q);const Xe=At.getPrimaries(At.workingColorSpace),we=b.colorSpace===xs?null:At.getPrimaries(b.colorSpace),Ke=b.colorSpace===xs||Xe===we?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);const tt=b.isCompressedTexture||b.image[0].isCompressedTexture,Te=b.image[0]&&b.image[0].isDataTexture,Me=[];for(let he=0;he<6;he++)!tt&&!Te?Me[he]=T(b.image[he],!0,o.maxCubemapSize):Me[he]=Te?b.image[he].image:b.image[he],Me[he]=It(b,Me[he]);const Ie=Me[0],Oe=c.convert(b.format,b.colorSpace),Pe=c.convert(b.type),ft=N(b.internalFormat,Oe,Pe,b.colorSpace),W=b.isVideoTexture!==!0,Ce=de.__version===void 0||me===!0,Re=ye.dataReady;let Be=F(b,Ie);j(r.TEXTURE_CUBE_MAP,b);let Ee;if(tt){W&&Ce&&n.texStorage2D(r.TEXTURE_CUBE_MAP,Be,ft,Ie.width,Ie.height);for(let he=0;he<6;he++){Ee=Me[he].mipmaps;for(let He=0;He<Ee.length;He++){const at=Ee[He];b.format!==Mi?Oe!==null?W?Re&&n.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,He,0,0,at.width,at.height,Oe,at.data):n.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,He,ft,at.width,at.height,0,at.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Re&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,He,0,0,at.width,at.height,Oe,Pe,at.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,He,ft,at.width,at.height,0,Oe,Pe,at.data)}}}else{if(Ee=b.mipmaps,W&&Ce){Ee.length>0&&Be++;const he=je(Me[0]);n.texStorage2D(r.TEXTURE_CUBE_MAP,Be,ft,he.width,he.height)}for(let he=0;he<6;he++)if(Te){W?Re&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Me[he].width,Me[he].height,Oe,Pe,Me[he].data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ft,Me[he].width,Me[he].height,0,Oe,Pe,Me[he].data);for(let He=0;He<Ee.length;He++){const Bt=Ee[He].image[he].image;W?Re&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,He+1,0,0,Bt.width,Bt.height,Oe,Pe,Bt.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,He+1,ft,Bt.width,Bt.height,0,Oe,Pe,Bt.data)}}else{W?Re&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Oe,Pe,Me[he]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ft,Oe,Pe,Me[he]);for(let He=0;He<Ee.length;He++){const at=Ee[He];W?Re&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,He+1,0,0,Oe,Pe,at.image[he]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,He+1,ft,Oe,Pe,at.image[he])}}}M(b)&&S(r.TEXTURE_CUBE_MAP),de.__version=ye.version,b.onUpdate&&b.onUpdate(b)}O.__version=b.version}function be(O,b,q,me,ye,de){const Xe=c.convert(q.format,q.colorSpace),we=c.convert(q.type),Ke=N(q.internalFormat,Xe,we,q.colorSpace),tt=a.get(b),Te=a.get(q);if(Te.__renderTarget=b,!tt.__hasExternalTextures){const Me=Math.max(1,b.width>>de),Ie=Math.max(1,b.height>>de);ye===r.TEXTURE_3D||ye===r.TEXTURE_2D_ARRAY?n.texImage3D(ye,de,Ke,Me,Ie,b.depth,0,Xe,we,null):n.texImage2D(ye,de,Ke,Me,Ie,0,Xe,we,null)}n.bindFramebuffer(r.FRAMEBUFFER,O),Zt(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,me,ye,Te.__webglTexture,0,G(b)):(ye===r.TEXTURE_2D||ye>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,me,ye,Te.__webglTexture,de),n.bindFramebuffer(r.FRAMEBUFFER,null)}function Fe(O,b,q){if(r.bindRenderbuffer(r.RENDERBUFFER,O),b.depthBuffer){const me=b.depthTexture,ye=me&&me.isDepthTexture?me.type:null,de=D(b.stencilBuffer,ye),Xe=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Zt(b)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,G(b),de,b.width,b.height):q?r.renderbufferStorageMultisample(r.RENDERBUFFER,G(b),de,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,de,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Xe,r.RENDERBUFFER,O)}else{const me=b.textures;for(let ye=0;ye<me.length;ye++){const de=me[ye],Xe=c.convert(de.format,de.colorSpace),we=c.convert(de.type),Ke=N(de.internalFormat,Xe,we,de.colorSpace);Zt(b)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,G(b),Ke,b.width,b.height):q?r.renderbufferStorageMultisample(r.RENDERBUFFER,G(b),Ke,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Ke,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Qe(O,b,q){const me=b.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(r.FRAMEBUFFER,O),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ye=a.get(b.depthTexture);if(ye.__renderTarget=b,(!ye.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),me){if(ye.__webglInit===void 0&&(ye.__webglInit=!0,b.depthTexture.addEventListener("dispose",z)),ye.__webglTexture===void 0){ye.__webglTexture=r.createTexture(),n.bindTexture(r.TEXTURE_CUBE_MAP,ye.__webglTexture),j(r.TEXTURE_CUBE_MAP,b.depthTexture);const tt=c.convert(b.depthTexture.format),Te=c.convert(b.depthTexture.type);let Me;b.depthTexture.format===Fa?Me=r.DEPTH_COMPONENT24:b.depthTexture.format===Zs&&(Me=r.DEPTH24_STENCIL8);for(let Ie=0;Ie<6;Ie++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,Me,b.width,b.height,0,tt,Te,null)}}else J(b.depthTexture,0);const de=ye.__webglTexture,Xe=G(b),we=me?r.TEXTURE_CUBE_MAP_POSITIVE_X+q:r.TEXTURE_2D,Ke=b.depthTexture.format===Zs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(b.depthTexture.format===Fa)Zt(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Ke,we,de,0,Xe):r.framebufferTexture2D(r.FRAMEBUFFER,Ke,we,de,0);else if(b.depthTexture.format===Zs)Zt(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Ke,we,de,0,Xe):r.framebufferTexture2D(r.FRAMEBUFFER,Ke,we,de,0);else throw new Error("Unknown depthTexture format")}function et(O){const b=a.get(O),q=O.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==O.depthTexture){const me=O.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),me){const ye=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,me.removeEventListener("dispose",ye)};me.addEventListener("dispose",ye),b.__depthDisposeCallback=ye}b.__boundDepthTexture=me}if(O.depthTexture&&!b.__autoAllocateDepthBuffer)if(q)for(let me=0;me<6;me++)Qe(b.__webglFramebuffer[me],O,me);else{const me=O.texture.mipmaps;me&&me.length>0?Qe(b.__webglFramebuffer[0],O,0):Qe(b.__webglFramebuffer,O,0)}else if(q){b.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(n.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[me]),b.__webglDepthbuffer[me]===void 0)b.__webglDepthbuffer[me]=r.createRenderbuffer(),Fe(b.__webglDepthbuffer[me],O,!1);else{const ye=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,de=b.__webglDepthbuffer[me];r.bindRenderbuffer(r.RENDERBUFFER,de),r.framebufferRenderbuffer(r.FRAMEBUFFER,ye,r.RENDERBUFFER,de)}}else{const me=O.texture.mipmaps;if(me&&me.length>0?n.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):n.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),Fe(b.__webglDepthbuffer,O,!1);else{const ye=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,de=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,de),r.framebufferRenderbuffer(r.FRAMEBUFFER,ye,r.RENDERBUFFER,de)}}n.bindFramebuffer(r.FRAMEBUFFER,null)}function nn(O,b,q){const me=a.get(O);b!==void 0&&be(me.__webglFramebuffer,O,O.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),q!==void 0&&et(O)}function Mt(O){const b=O.texture,q=a.get(O),me=a.get(b);O.addEventListener("dispose",P);const ye=O.textures,de=O.isWebGLCubeRenderTarget===!0,Xe=ye.length>1;if(Xe||(me.__webglTexture===void 0&&(me.__webglTexture=r.createTexture()),me.__version=b.version,u.memory.textures++),de){q.__webglFramebuffer=[];for(let we=0;we<6;we++)if(b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer[we]=[];for(let Ke=0;Ke<b.mipmaps.length;Ke++)q.__webglFramebuffer[we][Ke]=r.createFramebuffer()}else q.__webglFramebuffer[we]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer=[];for(let we=0;we<b.mipmaps.length;we++)q.__webglFramebuffer[we]=r.createFramebuffer()}else q.__webglFramebuffer=r.createFramebuffer();if(Xe)for(let we=0,Ke=ye.length;we<Ke;we++){const tt=a.get(ye[we]);tt.__webglTexture===void 0&&(tt.__webglTexture=r.createTexture(),u.memory.textures++)}if(O.samples>0&&Zt(O)===!1){q.__webglMultisampledFramebuffer=r.createFramebuffer(),q.__webglColorRenderbuffer=[],n.bindFramebuffer(r.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let we=0;we<ye.length;we++){const Ke=ye[we];q.__webglColorRenderbuffer[we]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,q.__webglColorRenderbuffer[we]);const tt=c.convert(Ke.format,Ke.colorSpace),Te=c.convert(Ke.type),Me=N(Ke.internalFormat,tt,Te,Ke.colorSpace,O.isXRRenderTarget===!0),Ie=G(O);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ie,Me,O.width,O.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.RENDERBUFFER,q.__webglColorRenderbuffer[we])}r.bindRenderbuffer(r.RENDERBUFFER,null),O.depthBuffer&&(q.__webglDepthRenderbuffer=r.createRenderbuffer(),Fe(q.__webglDepthRenderbuffer,O,!0)),n.bindFramebuffer(r.FRAMEBUFFER,null)}}if(de){n.bindTexture(r.TEXTURE_CUBE_MAP,me.__webglTexture),j(r.TEXTURE_CUBE_MAP,b);for(let we=0;we<6;we++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ke=0;Ke<b.mipmaps.length;Ke++)be(q.__webglFramebuffer[we][Ke],O,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ke);else be(q.__webglFramebuffer[we],O,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);M(b)&&S(r.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Xe){for(let we=0,Ke=ye.length;we<Ke;we++){const tt=ye[we],Te=a.get(tt);let Me=r.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Me=O.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Me,Te.__webglTexture),j(Me,tt),be(q.__webglFramebuffer,O,tt,r.COLOR_ATTACHMENT0+we,Me,0),M(tt)&&S(Me)}n.unbindTexture()}else{let we=r.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(we=O.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(we,me.__webglTexture),j(we,b),b.mipmaps&&b.mipmaps.length>0)for(let Ke=0;Ke<b.mipmaps.length;Ke++)be(q.__webglFramebuffer[Ke],O,b,r.COLOR_ATTACHMENT0,we,Ke);else be(q.__webglFramebuffer,O,b,r.COLOR_ATTACHMENT0,we,0);M(b)&&S(we),n.unbindTexture()}O.depthBuffer&&et(O)}function xt(O){const b=O.textures;for(let q=0,me=b.length;q<me;q++){const ye=b[q];if(M(ye)){const de=w(O),Xe=a.get(ye).__webglTexture;n.bindTexture(de,Xe),S(de),n.unbindTexture()}}}const Ut=[],ct=[];function tn(O){if(O.samples>0){if(Zt(O)===!1){const b=O.textures,q=O.width,me=O.height;let ye=r.COLOR_BUFFER_BIT;const de=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Xe=a.get(O),we=b.length>1;if(we)for(let tt=0;tt<b.length;tt++)n.bindFramebuffer(r.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+tt,r.RENDERBUFFER,null),n.bindFramebuffer(r.FRAMEBUFFER,Xe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+tt,r.TEXTURE_2D,null,0);n.bindFramebuffer(r.READ_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer);const Ke=O.texture.mipmaps;Ke&&Ke.length>0?n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Xe.__webglFramebuffer[0]):n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Xe.__webglFramebuffer);for(let tt=0;tt<b.length;tt++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(ye|=r.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(ye|=r.STENCIL_BUFFER_BIT)),we){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Xe.__webglColorRenderbuffer[tt]);const Te=a.get(b[tt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Te,0)}r.blitFramebuffer(0,0,q,me,0,0,q,me,ye,r.NEAREST),p===!0&&(Ut.length=0,ct.length=0,Ut.push(r.COLOR_ATTACHMENT0+tt),O.depthBuffer&&O.resolveDepthBuffer===!1&&(Ut.push(de),ct.push(de),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ct)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ut))}if(n.bindFramebuffer(r.READ_FRAMEBUFFER,null),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),we)for(let tt=0;tt<b.length;tt++){n.bindFramebuffer(r.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+tt,r.RENDERBUFFER,Xe.__webglColorRenderbuffer[tt]);const Te=a.get(b[tt]).__webglTexture;n.bindFramebuffer(r.FRAMEBUFFER,Xe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+tt,r.TEXTURE_2D,Te,0)}n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&p){const b=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function G(O){return Math.min(o.maxSamples,O.samples)}function Zt(O){const b=a.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Rt(O){const b=u.render.frame;g.get(O)!==b&&(g.set(O,b),O.update())}function It(O,b){const q=O.colorSpace,me=O.format,ye=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||q!==Xn&&q!==xs&&(At.getTransfer(q)===Ht?(me!==Mi||ye!==ui)&&Ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):nt("WebGLTextures: Unsupported texture color space:",q)),b}function je(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(h.width=O.naturalWidth||O.width,h.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(h.width=O.displayWidth,h.height=O.displayHeight):(h.width=O.width,h.height=O.height),h}this.allocateTextureUnit=ae,this.resetTextureUnits=$,this.setTexture2D=J,this.setTexture2DArray=I,this.setTexture3D=B,this.setTextureCube=ce,this.rebindTextures=nn,this.setupRenderTarget=Mt,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=tn,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=be,this.useMultisampledRTT=Zt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function r2(r,e){function n(a,o=xs){let c;const u=At.getTransfer(o);if(a===ui)return r.UNSIGNED_BYTE;if(a===Gp)return r.UNSIGNED_SHORT_4_4_4_4;if(a===kp)return r.UNSIGNED_SHORT_5_5_5_1;if(a===Fx)return r.UNSIGNED_INT_5_9_9_9_REV;if(a===zx)return r.UNSIGNED_INT_10F_11F_11F_REV;if(a===Px)return r.BYTE;if(a===Bx)return r.SHORT;if(a===Tl)return r.UNSIGNED_SHORT;if(a===Vp)return r.INT;if(a===na)return r.UNSIGNED_INT;if(a===yi)return r.FLOAT;if(a===Ba)return r.HALF_FLOAT;if(a===Hx)return r.ALPHA;if(a===Vx)return r.RGB;if(a===Mi)return r.RGBA;if(a===Fa)return r.DEPTH_COMPONENT;if(a===Zs)return r.DEPTH_STENCIL;if(a===Xp)return r.RED;if(a===Wp)return r.RED_INTEGER;if(a===so)return r.RG;if(a===jp)return r.RG_INTEGER;if(a===qp)return r.RGBA_INTEGER;if(a===Au||a===Ru||a===Cu||a===wu)if(u===Ht)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===Au)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Ru)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Cu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===wu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===Au)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Ru)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Cu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===wu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Jd||a===$d||a===ep||a===tp)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===Jd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===$d)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===ep)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===tp)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===np||a===ip||a===ap||a===sp||a===rp||a===op||a===lp)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(a===np||a===ip)return u===Ht?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===ap)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(a===sp)return c.COMPRESSED_R11_EAC;if(a===rp)return c.COMPRESSED_SIGNED_R11_EAC;if(a===op)return c.COMPRESSED_RG11_EAC;if(a===lp)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===cp||a===up||a===fp||a===hp||a===dp||a===pp||a===mp||a===gp||a===_p||a===vp||a===xp||a===Sp||a===yp||a===Mp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(a===cp)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===up)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===fp)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===hp)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===dp)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===pp)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===mp)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===gp)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===_p)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===vp)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===xp)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Sp)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===yp)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Mp)return u===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Ep||a===bp||a===Tp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(a===Ep)return u===Ht?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===bp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Tp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Ap||a===Rp||a===Cp||a===wp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(a===Ap)return c.COMPRESSED_RED_RGTC1_EXT;if(a===Rp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Cp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===wp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Al?r.UNSIGNED_INT_24_8:r[a]!==void 0?r[a]:null}return{convert:n}}const o2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,l2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class c2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const a=new eS(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,a=new aa({vertexShader:o2,fragmentShader:l2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Jn(new Ul(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class u2 extends fo{constructor(e,n){super();const a=this;let o=null,c=1,u=null,d="local-floor",p=1,h=null,g=null,v=null,_=null,x=null,E=null;const T=typeof XRWebGLBinding<"u",M=new c2,S={},w=n.getContextAttributes();let N=null,D=null;const F=[],z=[],P=new Ct;let A=null;const L=new Gn;L.viewport=new Kt;const fe=new Gn;fe.viewport=new Kt;const H=[L,fe],$=new hT;let ae=null,ue=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let xe=F[ne];return xe===void 0&&(xe=new ud,F[ne]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(ne){let xe=F[ne];return xe===void 0&&(xe=new ud,F[ne]=xe),xe.getGripSpace()},this.getHand=function(ne){let xe=F[ne];return xe===void 0&&(xe=new ud,F[ne]=xe),xe.getHandSpace()};function J(ne){const xe=z.indexOf(ne.inputSource);if(xe===-1)return;const be=F[xe];be!==void 0&&(be.update(ne.inputSource,ne.frame,h||u),be.dispatchEvent({type:ne.type,data:ne.inputSource}))}function I(){o.removeEventListener("select",J),o.removeEventListener("selectstart",J),o.removeEventListener("selectend",J),o.removeEventListener("squeeze",J),o.removeEventListener("squeezestart",J),o.removeEventListener("squeezeend",J),o.removeEventListener("end",I),o.removeEventListener("inputsourceschange",B);for(let ne=0;ne<F.length;ne++){const xe=z[ne];xe!==null&&(z[ne]=null,F[ne].disconnect(xe))}ae=null,ue=null,M.reset();for(const ne in S)delete S[ne];e.setRenderTarget(N),x=null,_=null,v=null,o=null,D=null,Ue.stop(),a.isPresenting=!1,e.setPixelRatio(A),e.setSize(P.width,P.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){c=ne,a.isPresenting===!0&&Ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){d=ne,a.isPresenting===!0&&Ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(ne){h=ne},this.getBaseLayer=function(){return _!==null?_:x},this.getBinding=function(){return v===null&&T&&(v=new XRWebGLBinding(o,n)),v},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(ne){if(o=ne,o!==null){if(N=e.getRenderTarget(),o.addEventListener("select",J),o.addEventListener("selectstart",J),o.addEventListener("selectend",J),o.addEventListener("squeeze",J),o.addEventListener("squeezestart",J),o.addEventListener("squeezeend",J),o.addEventListener("end",I),o.addEventListener("inputsourceschange",B),w.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(P),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,Fe=null,Qe=null;w.depth&&(Qe=w.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,be=w.stencil?Zs:Fa,Fe=w.stencil?Al:na);const et={colorFormat:n.RGBA8,depthFormat:Qe,scaleFactor:c};v=this.getBinding(),_=v.createProjectionLayer(et),o.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),D=new ta(_.textureWidth,_.textureHeight,{format:Mi,type:ui,depthTexture:new Nl(_.textureWidth,_.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const be={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:c};x=new XRWebGLLayer(o,n,be),o.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),D=new ta(x.framebufferWidth,x.framebufferHeight,{format:Mi,type:ui,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(p),h=null,u=await o.requestReferenceSpace(d),Ue.setContext(o),Ue.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function B(ne){for(let xe=0;xe<ne.removed.length;xe++){const be=ne.removed[xe],Fe=z.indexOf(be);Fe>=0&&(z[Fe]=null,F[Fe].disconnect(be))}for(let xe=0;xe<ne.added.length;xe++){const be=ne.added[xe];let Fe=z.indexOf(be);if(Fe===-1){for(let et=0;et<F.length;et++)if(et>=z.length){z.push(be),Fe=et;break}else if(z[et]===null){z[et]=be,Fe=et;break}if(Fe===-1)break}const Qe=F[Fe];Qe&&Qe.connect(be)}}const ce=new Z,Q=new Z;function ve(ne,xe,be){ce.setFromMatrixPosition(xe.matrixWorld),Q.setFromMatrixPosition(be.matrixWorld);const Fe=ce.distanceTo(Q),Qe=xe.projectionMatrix.elements,et=be.projectionMatrix.elements,nn=Qe[14]/(Qe[10]-1),Mt=Qe[14]/(Qe[10]+1),xt=(Qe[9]+1)/Qe[5],Ut=(Qe[9]-1)/Qe[5],ct=(Qe[8]-1)/Qe[0],tn=(et[8]+1)/et[0],G=nn*ct,Zt=nn*tn,Rt=Fe/(-ct+tn),It=Rt*-ct;if(xe.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(It),ne.translateZ(Rt),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Qe[10]===-1)ne.projectionMatrix.copy(xe.projectionMatrix),ne.projectionMatrixInverse.copy(xe.projectionMatrixInverse);else{const je=nn+Rt,O=Mt+Rt,b=G-It,q=Zt+(Fe-It),me=xt*Mt/O*je,ye=Ut*Mt/O*je;ne.projectionMatrix.makePerspective(b,q,me,ye,je,O),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function U(ne,xe){xe===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(xe.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(o===null)return;let xe=ne.near,be=ne.far;M.texture!==null&&(M.depthNear>0&&(xe=M.depthNear),M.depthFar>0&&(be=M.depthFar)),$.near=fe.near=L.near=xe,$.far=fe.far=L.far=be,(ae!==$.near||ue!==$.far)&&(o.updateRenderState({depthNear:$.near,depthFar:$.far}),ae=$.near,ue=$.far),$.layers.mask=ne.layers.mask|6,L.layers.mask=$.layers.mask&-5,fe.layers.mask=$.layers.mask&-3;const Fe=ne.parent,Qe=$.cameras;U($,Fe);for(let et=0;et<Qe.length;et++)U(Qe[et],Fe);Qe.length===2?ve($,L,fe):$.projectionMatrix.copy(L.projectionMatrix),j(ne,$,Fe)};function j(ne,xe,be){be===null?ne.matrix.copy(xe.matrixWorld):(ne.matrix.copy(be.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(xe.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(xe.projectionMatrix),ne.projectionMatrixInverse.copy(xe.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=ro*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(_===null&&x===null))return p},this.setFoveation=function(ne){p=ne,_!==null&&(_.fixedFoveation=ne),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=ne)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh($)},this.getCameraTexture=function(ne){return S[ne]};let ge=null;function Ae(ne,xe){if(g=xe.getViewerPose(h||u),E=xe,g!==null){const be=g.views;x!==null&&(e.setRenderTargetFramebuffer(D,x.framebuffer),e.setRenderTarget(D));let Fe=!1;be.length!==$.cameras.length&&($.cameras.length=0,Fe=!0);for(let Mt=0;Mt<be.length;Mt++){const xt=be[Mt];let Ut=null;if(x!==null)Ut=x.getViewport(xt);else{const tn=v.getViewSubImage(_,xt);Ut=tn.viewport,Mt===0&&(e.setRenderTargetTextures(D,tn.colorTexture,tn.depthStencilTexture),e.setRenderTarget(D))}let ct=H[Mt];ct===void 0&&(ct=new Gn,ct.layers.enable(Mt),ct.viewport=new Kt,H[Mt]=ct),ct.matrix.fromArray(xt.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(xt.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(Ut.x,Ut.y,Ut.width,Ut.height),Mt===0&&($.matrix.copy(ct.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),Fe===!0&&$.cameras.push(ct)}const Qe=o.enabledFeatures;if(Qe&&Qe.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&T){v=a.getBinding();const Mt=v.getDepthInformation(be[0]);Mt&&Mt.isValid&&Mt.texture&&M.init(Mt,o.renderState)}if(Qe&&Qe.includes("camera-access")&&T){e.state.unbindTexture(),v=a.getBinding();for(let Mt=0;Mt<be.length;Mt++){const xt=be[Mt].camera;if(xt){let Ut=S[xt];Ut||(Ut=new eS,S[xt]=Ut);const ct=v.getCameraImage(xt);Ut.sourceTexture=ct}}}}for(let be=0;be<F.length;be++){const Fe=z[be],Qe=F[be];Fe!==null&&Qe!==void 0&&Qe.update(Fe,xe,h||u)}ge&&ge(ne,xe),xe.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:xe}),E=null}const Ue=new rS;Ue.setAnimationLoop(Ae),this.setAnimationLoop=function(ne){ge=ne},this.dispose=function(){}}}const Ws=new ia,f2=new gt;function h2(r,e){function n(M,S){M.matrixAutoUpdate===!0&&M.updateMatrix(),S.value.copy(M.matrix)}function a(M,S){S.color.getRGB(M.fogColor.value,tS(r)),S.isFog?(M.fogNear.value=S.near,M.fogFar.value=S.far):S.isFogExp2&&(M.fogDensity.value=S.density)}function o(M,S,w,N,D){S.isMeshBasicMaterial?c(M,S):S.isMeshLambertMaterial?(c(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(c(M,S),v(M,S)):S.isMeshPhongMaterial?(c(M,S),g(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(c(M,S),_(M,S),S.isMeshPhysicalMaterial&&x(M,S,D)):S.isMeshMatcapMaterial?(c(M,S),E(M,S)):S.isMeshDepthMaterial?c(M,S):S.isMeshDistanceMaterial?(c(M,S),T(M,S)):S.isMeshNormalMaterial?c(M,S):S.isLineBasicMaterial?(u(M,S),S.isLineDashedMaterial&&d(M,S)):S.isPointsMaterial?p(M,S,w,N):S.isSpriteMaterial?h(M,S):S.isShadowMaterial?(M.color.value.copy(S.color),M.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(M,S){M.opacity.value=S.opacity,S.color&&M.diffuse.value.copy(S.color),S.emissive&&M.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(M.map.value=S.map,n(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,n(S.alphaMap,M.alphaMapTransform)),S.bumpMap&&(M.bumpMap.value=S.bumpMap,n(S.bumpMap,M.bumpMapTransform),M.bumpScale.value=S.bumpScale,S.side===Qn&&(M.bumpScale.value*=-1)),S.normalMap&&(M.normalMap.value=S.normalMap,n(S.normalMap,M.normalMapTransform),M.normalScale.value.copy(S.normalScale),S.side===Qn&&M.normalScale.value.negate()),S.displacementMap&&(M.displacementMap.value=S.displacementMap,n(S.displacementMap,M.displacementMapTransform),M.displacementScale.value=S.displacementScale,M.displacementBias.value=S.displacementBias),S.emissiveMap&&(M.emissiveMap.value=S.emissiveMap,n(S.emissiveMap,M.emissiveMapTransform)),S.specularMap&&(M.specularMap.value=S.specularMap,n(S.specularMap,M.specularMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest);const w=e.get(S),N=w.envMap,D=w.envMapRotation;N&&(M.envMap.value=N,Ws.copy(D),Ws.x*=-1,Ws.y*=-1,Ws.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Ws.y*=-1,Ws.z*=-1),M.envMapRotation.value.setFromMatrix4(f2.makeRotationFromEuler(Ws)),M.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=S.reflectivity,M.ior.value=S.ior,M.refractionRatio.value=S.refractionRatio),S.lightMap&&(M.lightMap.value=S.lightMap,M.lightMapIntensity.value=S.lightMapIntensity,n(S.lightMap,M.lightMapTransform)),S.aoMap&&(M.aoMap.value=S.aoMap,M.aoMapIntensity.value=S.aoMapIntensity,n(S.aoMap,M.aoMapTransform))}function u(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,S.map&&(M.map.value=S.map,n(S.map,M.mapTransform))}function d(M,S){M.dashSize.value=S.dashSize,M.totalSize.value=S.dashSize+S.gapSize,M.scale.value=S.scale}function p(M,S,w,N){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.size.value=S.size*w,M.scale.value=N*.5,S.map&&(M.map.value=S.map,n(S.map,M.uvTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,n(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function h(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.rotation.value=S.rotation,S.map&&(M.map.value=S.map,n(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,n(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function g(M,S){M.specular.value.copy(S.specular),M.shininess.value=Math.max(S.shininess,1e-4)}function v(M,S){S.gradientMap&&(M.gradientMap.value=S.gradientMap)}function _(M,S){M.metalness.value=S.metalness,S.metalnessMap&&(M.metalnessMap.value=S.metalnessMap,n(S.metalnessMap,M.metalnessMapTransform)),M.roughness.value=S.roughness,S.roughnessMap&&(M.roughnessMap.value=S.roughnessMap,n(S.roughnessMap,M.roughnessMapTransform)),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)}function x(M,S,w){M.ior.value=S.ior,S.sheen>0&&(M.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),M.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(M.sheenColorMap.value=S.sheenColorMap,n(S.sheenColorMap,M.sheenColorMapTransform)),S.sheenRoughnessMap&&(M.sheenRoughnessMap.value=S.sheenRoughnessMap,n(S.sheenRoughnessMap,M.sheenRoughnessMapTransform))),S.clearcoat>0&&(M.clearcoat.value=S.clearcoat,M.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(M.clearcoatMap.value=S.clearcoatMap,n(S.clearcoatMap,M.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,n(S.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(M.clearcoatNormalMap.value=S.clearcoatNormalMap,n(S.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Qn&&M.clearcoatNormalScale.value.negate())),S.dispersion>0&&(M.dispersion.value=S.dispersion),S.iridescence>0&&(M.iridescence.value=S.iridescence,M.iridescenceIOR.value=S.iridescenceIOR,M.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(M.iridescenceMap.value=S.iridescenceMap,n(S.iridescenceMap,M.iridescenceMapTransform)),S.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=S.iridescenceThicknessMap,n(S.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),S.transmission>0&&(M.transmission.value=S.transmission,M.transmissionSamplerMap.value=w.texture,M.transmissionSamplerSize.value.set(w.width,w.height),S.transmissionMap&&(M.transmissionMap.value=S.transmissionMap,n(S.transmissionMap,M.transmissionMapTransform)),M.thickness.value=S.thickness,S.thicknessMap&&(M.thicknessMap.value=S.thicknessMap,n(S.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=S.attenuationDistance,M.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(M.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(M.anisotropyMap.value=S.anisotropyMap,n(S.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=S.specularIntensity,M.specularColor.value.copy(S.specularColor),S.specularColorMap&&(M.specularColorMap.value=S.specularColorMap,n(S.specularColorMap,M.specularColorMapTransform)),S.specularIntensityMap&&(M.specularIntensityMap.value=S.specularIntensityMap,n(S.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,S){S.matcap&&(M.matcap.value=S.matcap)}function T(M,S){const w=e.get(S).light;M.referencePosition.value.setFromMatrixPosition(w.matrixWorld),M.nearDistance.value=w.shadow.camera.near,M.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:o}}function d2(r,e,n,a){let o={},c={},u=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function p(w,N){const D=N.program;a.uniformBlockBinding(w,D)}function h(w,N){let D=o[w.id];D===void 0&&(E(w),D=g(w),o[w.id]=D,w.addEventListener("dispose",M));const F=N.program;a.updateUBOMapping(w,F);const z=e.render.frame;c[w.id]!==z&&(_(w),c[w.id]=z)}function g(w){const N=v();w.__bindingPointIndex=N;const D=r.createBuffer(),F=w.__size,z=w.usage;return r.bindBuffer(r.UNIFORM_BUFFER,D),r.bufferData(r.UNIFORM_BUFFER,F,z),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,N,D),D}function v(){for(let w=0;w<d;w++)if(u.indexOf(w)===-1)return u.push(w),w;return nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(w){const N=o[w.id],D=w.uniforms,F=w.__cache;r.bindBuffer(r.UNIFORM_BUFFER,N);for(let z=0,P=D.length;z<P;z++){const A=Array.isArray(D[z])?D[z]:[D[z]];for(let L=0,fe=A.length;L<fe;L++){const H=A[L];if(x(H,z,L,F)===!0){const $=H.__offset,ae=Array.isArray(H.value)?H.value:[H.value];let ue=0;for(let J=0;J<ae.length;J++){const I=ae[J],B=T(I);typeof I=="number"||typeof I=="boolean"?(H.__data[0]=I,r.bufferSubData(r.UNIFORM_BUFFER,$+ue,H.__data)):I.isMatrix3?(H.__data[0]=I.elements[0],H.__data[1]=I.elements[1],H.__data[2]=I.elements[2],H.__data[3]=0,H.__data[4]=I.elements[3],H.__data[5]=I.elements[4],H.__data[6]=I.elements[5],H.__data[7]=0,H.__data[8]=I.elements[6],H.__data[9]=I.elements[7],H.__data[10]=I.elements[8],H.__data[11]=0):(I.toArray(H.__data,ue),ue+=B.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,$,H.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function x(w,N,D,F){const z=w.value,P=N+"_"+D;if(F[P]===void 0)return typeof z=="number"||typeof z=="boolean"?F[P]=z:F[P]=z.clone(),!0;{const A=F[P];if(typeof z=="number"||typeof z=="boolean"){if(A!==z)return F[P]=z,!0}else if(A.equals(z)===!1)return A.copy(z),!0}return!1}function E(w){const N=w.uniforms;let D=0;const F=16;for(let P=0,A=N.length;P<A;P++){const L=Array.isArray(N[P])?N[P]:[N[P]];for(let fe=0,H=L.length;fe<H;fe++){const $=L[fe],ae=Array.isArray($.value)?$.value:[$.value];for(let ue=0,J=ae.length;ue<J;ue++){const I=ae[ue],B=T(I),ce=D%F,Q=ce%B.boundary,ve=ce+Q;D+=Q,ve!==0&&F-ve<B.storage&&(D+=F-ve),$.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=D,D+=B.storage}}}const z=D%F;return z>0&&(D+=F-z),w.__size=D,w.__cache={},this}function T(w){const N={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(N.boundary=4,N.storage=4):w.isVector2?(N.boundary=8,N.storage=8):w.isVector3||w.isColor?(N.boundary=16,N.storage=12):w.isVector4?(N.boundary=16,N.storage=16):w.isMatrix3?(N.boundary=48,N.storage=48):w.isMatrix4?(N.boundary=64,N.storage=64):w.isTexture?Ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ze("WebGLRenderer: Unsupported uniform value type.",w),N}function M(w){const N=w.target;N.removeEventListener("dispose",M);const D=u.indexOf(N.__bindingPointIndex);u.splice(D,1),r.deleteBuffer(o[N.id]),delete o[N.id],delete c[N.id]}function S(){for(const w in o)r.deleteBuffer(o[w]);u=[],o={},c={}}return{bind:p,update:h,dispose:S}}const p2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Yi=null;function m2(){return Yi===null&&(Yi=new $p(p2,16,16,so,Ba),Yi.name="DFG_LUT",Yi.minFilter=yn,Yi.magFilter=yn,Yi.wrapS=Ji,Yi.wrapT=Ji,Yi.generateMipmaps=!1,Yi.needsUpdate=!0),Yi}class g2{constructor(e={}){const{canvas:n=BE(),context:a=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:h=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:_=!1,outputBufferType:x=ui}=e;this.isWebGLRenderer=!0;let E;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=a.getContextAttributes().alpha}else E=u;const T=x,M=new Set([qp,jp,Wp]),S=new Set([ui,na,Tl,Al,Gp,kp]),w=new Uint32Array(4),N=new Int32Array(4);let D=null,F=null;const z=[],P=[];let A=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ea,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let fe=!1;this._outputColorSpace=An;let H=0,$=0,ae=null,ue=-1,J=null;const I=new Kt,B=new Kt;let ce=null;const Q=new st(0);let ve=0,U=n.width,j=n.height,ge=1,Ae=null,Ue=null;const ne=new Kt(0,0,U,j),xe=new Kt(0,0,U,j);let be=!1;const Fe=new tm;let Qe=!1,et=!1;const nn=new gt,Mt=new Z,xt=new Kt,Ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ct=!1;function tn(){return ae===null?ge:1}let G=a;function Zt(C,X){return n.getContext(C,X)}try{const C={alpha:!0,depth:o,stencil:c,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:h,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${zp}`),n.addEventListener("webglcontextlost",He,!1),n.addEventListener("webglcontextrestored",at,!1),n.addEventListener("webglcontextcreationerror",Bt,!1),G===null){const X="webgl2";if(G=Zt(X,C),G===null)throw Zt(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw nt("WebGLRenderer: "+C.message),C}let Rt,It,je,O,b,q,me,ye,de,Xe,we,Ke,tt,Te,Me,Ie,Oe,Pe,ft,W,Ce,Re,Be;function Ee(){Rt=new gR(G),Rt.init(),Ce=new r2(G,Rt),It=new lR(G,Rt,e,Ce),je=new a2(G,Rt),It.reversedDepthBuffer&&_&&je.buffers.depth.setReversed(!0),O=new xR(G),b=new XC,q=new s2(G,Rt,je,b,It,Ce,O),me=new mR(L),ye=new bT(G),Re=new rR(G,ye),de=new _R(G,ye,O,Re),Xe=new yR(G,de,ye,Re,O),Pe=new SR(G,It,q),Me=new cR(b),we=new kC(L,me,Rt,It,Re,Me),Ke=new h2(L,b),tt=new jC,Te=new JC(Rt),Oe=new sR(L,me,je,Xe,E,p),Ie=new i2(L,Xe,It),Be=new d2(G,O,It,je),ft=new oR(G,Rt,O),W=new vR(G,Rt,O),O.programs=we.programs,L.capabilities=It,L.extensions=Rt,L.properties=b,L.renderLists=tt,L.shadowMap=Ie,L.state=je,L.info=O}Ee(),T!==ui&&(A=new ER(T,n.width,n.height,o,c));const he=new u2(L,G);this.xr=he,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const C=Rt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Rt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(C){C!==void 0&&(ge=C,this.setSize(U,j,!1))},this.getSize=function(C){return C.set(U,j)},this.setSize=function(C,X,oe=!0){if(he.isPresenting){Ze("WebGLRenderer: Can't change size while VR device is presenting.");return}U=C,j=X,n.width=Math.floor(C*ge),n.height=Math.floor(X*ge),oe===!0&&(n.style.width=C+"px",n.style.height=X+"px"),A!==null&&A.setSize(n.width,n.height),this.setViewport(0,0,C,X)},this.getDrawingBufferSize=function(C){return C.set(U*ge,j*ge).floor()},this.setDrawingBufferSize=function(C,X,oe){U=C,j=X,ge=oe,n.width=Math.floor(C*oe),n.height=Math.floor(X*oe),this.setViewport(0,0,C,X)},this.setEffects=function(C){if(T===ui){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let X=0;X<C.length;X++)if(C[X].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(I)},this.getViewport=function(C){return C.copy(ne)},this.setViewport=function(C,X,oe,se){C.isVector4?ne.set(C.x,C.y,C.z,C.w):ne.set(C,X,oe,se),je.viewport(I.copy(ne).multiplyScalar(ge).round())},this.getScissor=function(C){return C.copy(xe)},this.setScissor=function(C,X,oe,se){C.isVector4?xe.set(C.x,C.y,C.z,C.w):xe.set(C,X,oe,se),je.scissor(B.copy(xe).multiplyScalar(ge).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(C){je.setScissorTest(be=C)},this.setOpaqueSort=function(C){Ae=C},this.setTransparentSort=function(C){Ue=C},this.getClearColor=function(C){return C.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor(...arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha(...arguments)},this.clear=function(C=!0,X=!0,oe=!0){let se=0;if(C){let ee=!1;if(ae!==null){const De=ae.texture.format;ee=M.has(De)}if(ee){const De=ae.texture.type,ze=S.has(De),Ne=Oe.getClearColor(),We=Oe.getClearAlpha(),Ye=Ne.r,it=Ne.g,ot=Ne.b;ze?(w[0]=Ye,w[1]=it,w[2]=ot,w[3]=We,G.clearBufferuiv(G.COLOR,0,w)):(N[0]=Ye,N[1]=it,N[2]=ot,N[3]=We,G.clearBufferiv(G.COLOR,0,N))}else se|=G.COLOR_BUFFER_BIT}X&&(se|=G.DEPTH_BUFFER_BIT),oe&&(se|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),se!==0&&G.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",He,!1),n.removeEventListener("webglcontextrestored",at,!1),n.removeEventListener("webglcontextcreationerror",Bt,!1),Oe.dispose(),tt.dispose(),Te.dispose(),b.dispose(),me.dispose(),Xe.dispose(),Re.dispose(),Be.dispose(),we.dispose(),he.dispose(),he.removeEventListener("sessionstart",nr),he.removeEventListener("sessionend",ir),Gi.stop()};function He(C){C.preventDefault(),Pu("WebGLRenderer: Context Lost."),fe=!0}function at(){Pu("WebGLRenderer: Context Restored."),fe=!1;const C=O.autoReset,X=Ie.enabled,oe=Ie.autoUpdate,se=Ie.needsUpdate,ee=Ie.type;Ee(),O.autoReset=C,Ie.enabled=X,Ie.autoUpdate=oe,Ie.needsUpdate=se,Ie.type=ee}function Bt(C){nt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function wt(C){const X=C.target;X.removeEventListener("dispose",wt),In(X)}function In(C){Ti(C),b.remove(C)}function Ti(C){const X=b.get(C).programs;X!==void 0&&(X.forEach(function(oe){we.releaseProgram(oe)}),C.isShaderMaterial&&we.releaseShaderCache(C))}this.renderBufferDirect=function(C,X,oe,se,ee,De){X===null&&(X=Ut);const ze=ee.isMesh&&ee.matrixWorld.determinant()<0,Ne=Fl(C,X,oe,se,ee);je.setMaterial(se,ze);let We=oe.index,Ye=1;if(se.wireframe===!0){if(We=de.getWireframeAttribute(oe),We===void 0)return;Ye=2}const it=oe.drawRange,ot=oe.attributes.position;let Ve=it.start*Ye,ht=(it.start+it.count)*Ye;De!==null&&(Ve=Math.max(Ve,De.start*Ye),ht=Math.min(ht,(De.start+De.count)*Ye)),We!==null?(Ve=Math.max(Ve,0),ht=Math.min(ht,We.count)):ot!=null&&(Ve=Math.max(Ve,0),ht=Math.min(ht,ot.count));const Qt=ht-Ve;if(Qt<0||Qt===1/0)return;Re.setup(ee,se,Ne,oe,We);let Jt,Dt=ft;if(We!==null&&(Jt=ye.get(We),Dt=W,Dt.setIndex(Jt)),ee.isMesh)se.wireframe===!0?(je.setLineWidth(se.wireframeLinewidth*tn()),Dt.setMode(G.LINES)):Dt.setMode(G.TRIANGLES);else if(ee.isLine){let vn=se.linewidth;vn===void 0&&(vn=1),je.setLineWidth(vn*tn()),ee.isLineSegments?Dt.setMode(G.LINES):ee.isLineLoop?Dt.setMode(G.LINE_LOOP):Dt.setMode(G.LINE_STRIP)}else ee.isPoints?Dt.setMode(G.POINTS):ee.isSprite&&Dt.setMode(G.TRIANGLES);if(ee.isBatchedMesh)if(ee._multiDrawInstances!==null)Bu("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Dt.renderMultiDrawInstances(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount,ee._multiDrawInstances);else if(Rt.get("WEBGL_multi_draw"))Dt.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{const vn=ee._multiDrawStarts,ke=ee._multiDrawCounts,Pn=ee._multiDrawCount,rt=We?ye.get(We).bytesPerElement:1,Bn=b.get(se).currentProgram.getUniforms();for(let $n=0;$n<Pn;$n++)Bn.setValue(G,"_gl_DrawID",$n),Dt.render(vn[$n]/rt,ke[$n])}else if(ee.isInstancedMesh)Dt.renderInstances(Ve,Qt,ee.count);else if(oe.isInstancedBufferGeometry){const vn=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,ke=Math.min(oe.instanceCount,vn);Dt.renderInstances(Ve,Qt,ke)}else Dt.render(Ve,Qt)};function vo(C,X,oe){C.transparent===!0&&C.side===Qi&&C.forceSinglePass===!1?(C.side=Qn,C.needsUpdate=!0,Ha(C,X,oe),C.side=Pa,C.needsUpdate=!0,Ha(C,X,oe),C.side=Qi):Ha(C,X,oe)}this.compile=function(C,X,oe=null){oe===null&&(oe=C),F=Te.get(oe),F.init(X),P.push(F),oe.traverseVisible(function(ee){ee.isLight&&ee.layers.test(X.layers)&&(F.pushLight(ee),ee.castShadow&&F.pushShadow(ee))}),C!==oe&&C.traverseVisible(function(ee){ee.isLight&&ee.layers.test(X.layers)&&(F.pushLight(ee),ee.castShadow&&F.pushShadow(ee))}),F.setupLights();const se=new Set;return C.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;const De=ee.material;if(De)if(Array.isArray(De))for(let ze=0;ze<De.length;ze++){const Ne=De[ze];vo(Ne,oe,ee),se.add(Ne)}else vo(De,oe,ee),se.add(De)}),F=P.pop(),se},this.compileAsync=function(C,X,oe=null){const se=this.compile(C,X,oe);return new Promise(ee=>{function De(){if(se.forEach(function(ze){b.get(ze).currentProgram.isReady()&&se.delete(ze)}),se.size===0){ee(C);return}setTimeout(De,10)}Rt.get("KHR_parallel_shader_compile")!==null?De():setTimeout(De,10)})};let tr=null;function Il(C){tr&&tr(C)}function nr(){Gi.stop()}function ir(){Gi.start()}const Gi=new rS;Gi.setAnimationLoop(Il),typeof self<"u"&&Gi.setContext(self),this.setAnimationLoop=function(C){tr=C,he.setAnimationLoop(C),C===null?Gi.stop():Gi.start()},he.addEventListener("sessionstart",nr),he.addEventListener("sessionend",ir),this.render=function(C,X){if(X!==void 0&&X.isCamera!==!0){nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(fe===!0)return;const oe=he.enabled===!0&&he.isPresenting===!0,se=A!==null&&(ae===null||oe)&&A.begin(L,ae);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(he.cameraAutoUpdate===!0&&he.updateCamera(X),X=he.getCamera()),C.isScene===!0&&C.onBeforeRender(L,C,X,ae),F=Te.get(C,P.length),F.init(X),P.push(F),nn.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Fe.setFromProjectionMatrix(nn,$i,X.reversedDepth),et=this.localClippingEnabled,Qe=Me.init(this.clippingPlanes,et),D=tt.get(C,z.length),D.init(),z.push(D),he.enabled===!0&&he.isPresenting===!0){const ze=L.xr.getDepthSensingMesh();ze!==null&&ar(ze,X,-1/0,L.sortObjects)}ar(C,X,0,L.sortObjects),D.finish(),L.sortObjects===!0&&D.sort(Ae,Ue),ct=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,ct&&Oe.addToRenderList(D,C),this.info.render.frame++,Qe===!0&&Me.beginShadows();const ee=F.state.shadowsArray;if(Ie.render(ee,C,X),Qe===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset(),(se&&A.hasRenderPass())===!1){const ze=D.opaque,Ne=D.transmissive;if(F.setupLights(),X.isArrayCamera){const We=X.cameras;if(Ne.length>0)for(let Ye=0,it=We.length;Ye<it;Ye++){const ot=We[Ye];cn(ze,Ne,C,ot)}ct&&Oe.render(C);for(let Ye=0,it=We.length;Ye<it;Ye++){const ot=We[Ye];Ai(D,C,ot,ot.viewport)}}else Ne.length>0&&cn(ze,Ne,C,X),ct&&Oe.render(C),Ai(D,C,X)}ae!==null&&$===0&&(q.updateMultisampleRenderTarget(ae),q.updateRenderTargetMipmap(ae)),se&&A.end(L),C.isScene===!0&&C.onAfterRender(L,C,X),Re.resetDefaultState(),ue=-1,J=null,P.pop(),P.length>0?(F=P[P.length-1],Qe===!0&&Me.setGlobalState(L.clippingPlanes,F.state.camera)):F=null,z.pop(),z.length>0?D=z[z.length-1]:D=null};function ar(C,X,oe,se){if(C.visible===!1)return;if(C.layers.test(X.layers)){if(C.isGroup)oe=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(X);else if(C.isLight)F.pushLight(C),C.castShadow&&F.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Fe.intersectsSprite(C)){se&&xt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(nn);const ze=Xe.update(C),Ne=C.material;Ne.visible&&D.push(C,ze,Ne,oe,xt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Fe.intersectsObject(C))){const ze=Xe.update(C),Ne=C.material;if(se&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),xt.copy(C.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),xt.copy(ze.boundingSphere.center)),xt.applyMatrix4(C.matrixWorld).applyMatrix4(nn)),Array.isArray(Ne)){const We=ze.groups;for(let Ye=0,it=We.length;Ye<it;Ye++){const ot=We[Ye],Ve=Ne[ot.materialIndex];Ve&&Ve.visible&&D.push(C,ze,Ve,oe,xt.z,ot)}}else Ne.visible&&D.push(C,ze,Ne,oe,xt.z,null)}}const De=C.children;for(let ze=0,Ne=De.length;ze<Ne;ze++)ar(De[ze],X,oe,se)}function Ai(C,X,oe,se){const{opaque:ee,transmissive:De,transparent:ze}=C;F.setupLightsView(oe),Qe===!0&&Me.setGlobalState(L.clippingPlanes,oe),se&&je.viewport(I.copy(se)),ee.length>0&&_n(ee,X,oe),De.length>0&&_n(De,X,oe),ze.length>0&&_n(ze,X,oe),je.buffers.depth.setTest(!0),je.buffers.depth.setMask(!0),je.buffers.color.setMask(!0),je.setPolygonOffset(!1)}function cn(C,X,oe,se){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(F.state.transmissionRenderTarget[se.id]===void 0){const Ve=Rt.has("EXT_color_buffer_half_float")||Rt.has("EXT_color_buffer_float");F.state.transmissionRenderTarget[se.id]=new ta(1,1,{generateMipmaps:!0,type:Ve?Ba:ui,minFilter:La,samples:Math.max(4,It.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace})}const De=F.state.transmissionRenderTarget[se.id],ze=se.viewport||I;De.setSize(ze.z*L.transmissionResolutionScale,ze.w*L.transmissionResolutionScale);const Ne=L.getRenderTarget(),We=L.getActiveCubeFace(),Ye=L.getActiveMipmapLevel();L.setRenderTarget(De),L.getClearColor(Q),ve=L.getClearAlpha(),ve<1&&L.setClearColor(16777215,.5),L.clear(),ct&&Oe.render(oe);const it=L.toneMapping;L.toneMapping=ea;const ot=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),F.setupLightsView(se),Qe===!0&&Me.setGlobalState(L.clippingPlanes,se),_n(C,oe,se),q.updateMultisampleRenderTarget(De),q.updateRenderTargetMipmap(De),Rt.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let ht=0,Qt=X.length;ht<Qt;ht++){const Jt=X[ht],{object:Dt,geometry:vn,material:ke,group:Pn}=Jt;if(ke.side===Qi&&Dt.layers.test(se.layers)){const rt=ke.side;ke.side=Qn,ke.needsUpdate=!0,oa(Dt,oe,se,vn,ke,Pn),ke.side=rt,ke.needsUpdate=!0,Ve=!0}}Ve===!0&&(q.updateMultisampleRenderTarget(De),q.updateRenderTargetMipmap(De))}L.setRenderTarget(Ne,We,Ye),L.setClearColor(Q,ve),ot!==void 0&&(se.viewport=ot),L.toneMapping=it}function _n(C,X,oe){const se=X.isScene===!0?X.overrideMaterial:null;for(let ee=0,De=C.length;ee<De;ee++){const ze=C[ee],{object:Ne,geometry:We,group:Ye}=ze;let it=ze.material;it.allowOverride===!0&&se!==null&&(it=se),Ne.layers.test(oe.layers)&&oa(Ne,X,oe,We,it,Ye)}}function oa(C,X,oe,se,ee,De){C.onBeforeRender(L,X,oe,se,ee,De),C.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ee.onBeforeRender(L,X,oe,se,C,De),ee.transparent===!0&&ee.side===Qi&&ee.forceSinglePass===!1?(ee.side=Qn,ee.needsUpdate=!0,L.renderBufferDirect(oe,X,se,ee,C,De),ee.side=Pa,ee.needsUpdate=!0,L.renderBufferDirect(oe,X,se,ee,C,De),ee.side=Qi):L.renderBufferDirect(oe,X,se,ee,C,De),C.onAfterRender(L,X,oe,se,ee,De)}function Ha(C,X,oe){X.isScene!==!0&&(X=Ut);const se=b.get(C),ee=F.state.lights,De=F.state.shadowsArray,ze=ee.state.version,Ne=we.getParameters(C,ee.state,De,X,oe),We=we.getProgramCacheKey(Ne);let Ye=se.programs;se.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?X.environment:null,se.fog=X.fog;const it=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;se.envMap=me.get(C.envMap||se.environment,it),se.envMapRotation=se.environment!==null&&C.envMap===null?X.environmentRotation:C.envMapRotation,Ye===void 0&&(C.addEventListener("dispose",wt),Ye=new Map,se.programs=Ye);let ot=Ye.get(We);if(ot!==void 0){if(se.currentProgram===ot&&se.lightsStateVersion===ze)return Bl(C,Ne),ot}else Ne.uniforms=we.getUniforms(C),C.onBeforeCompile(Ne,L),ot=we.acquireProgram(Ne,We),Ye.set(We,ot),se.uniforms=Ne.uniforms;const Ve=se.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ve.clippingPlanes=Me.uniform),Bl(C,Ne),se.needsLights=xo(C),se.lightsStateVersion=ze,se.needsLights&&(Ve.ambientLightColor.value=ee.state.ambient,Ve.lightProbe.value=ee.state.probe,Ve.directionalLights.value=ee.state.directional,Ve.directionalLightShadows.value=ee.state.directionalShadow,Ve.spotLights.value=ee.state.spot,Ve.spotLightShadows.value=ee.state.spotShadow,Ve.rectAreaLights.value=ee.state.rectArea,Ve.ltc_1.value=ee.state.rectAreaLTC1,Ve.ltc_2.value=ee.state.rectAreaLTC2,Ve.pointLights.value=ee.state.point,Ve.pointLightShadows.value=ee.state.pointShadow,Ve.hemisphereLights.value=ee.state.hemi,Ve.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Ve.spotLightMatrix.value=ee.state.spotLightMatrix,Ve.spotLightMap.value=ee.state.spotLightMap,Ve.pointShadowMatrix.value=ee.state.pointShadowMatrix),se.currentProgram=ot,se.uniformsList=null,ot}function Pl(C){if(C.uniformsList===null){const X=C.currentProgram.getUniforms();C.uniformsList=Nu.seqWithValue(X.seq,C.uniforms)}return C.uniformsList}function Bl(C,X){const oe=b.get(C);oe.outputColorSpace=X.outputColorSpace,oe.batching=X.batching,oe.batchingColor=X.batchingColor,oe.instancing=X.instancing,oe.instancingColor=X.instancingColor,oe.instancingMorph=X.instancingMorph,oe.skinning=X.skinning,oe.morphTargets=X.morphTargets,oe.morphNormals=X.morphNormals,oe.morphColors=X.morphColors,oe.morphTargetsCount=X.morphTargetsCount,oe.numClippingPlanes=X.numClippingPlanes,oe.numIntersection=X.numClipIntersection,oe.vertexAlphas=X.vertexAlphas,oe.vertexTangents=X.vertexTangents,oe.toneMapping=X.toneMapping}function Fl(C,X,oe,se,ee){X.isScene!==!0&&(X=Ut),q.resetTextureUnits();const De=X.fog,ze=se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial?X.environment:null,Ne=ae===null?L.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Xn,We=se.isMeshStandardMaterial||se.isMeshLambertMaterial&&!se.envMap||se.isMeshPhongMaterial&&!se.envMap,Ye=me.get(se.envMap||ze,We),it=se.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,ot=!!oe.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),Ve=!!oe.morphAttributes.position,ht=!!oe.morphAttributes.normal,Qt=!!oe.morphAttributes.color;let Jt=ea;se.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(Jt=L.toneMapping);const Dt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,vn=Dt!==void 0?Dt.length:0,ke=b.get(se),Pn=F.state.lights;if(Qe===!0&&(et===!0||C!==J)){const fn=C===J&&se.id===ue;Me.setState(se,C,fn)}let rt=!1;se.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Pn.state.version||ke.outputColorSpace!==Ne||ee.isBatchedMesh&&ke.batching===!1||!ee.isBatchedMesh&&ke.batching===!0||ee.isBatchedMesh&&ke.batchingColor===!0&&ee.colorTexture===null||ee.isBatchedMesh&&ke.batchingColor===!1&&ee.colorTexture!==null||ee.isInstancedMesh&&ke.instancing===!1||!ee.isInstancedMesh&&ke.instancing===!0||ee.isSkinnedMesh&&ke.skinning===!1||!ee.isSkinnedMesh&&ke.skinning===!0||ee.isInstancedMesh&&ke.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&ke.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&ke.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&ke.instancingMorph===!1&&ee.morphTexture!==null||ke.envMap!==Ye||se.fog===!0&&ke.fog!==De||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==Me.numPlanes||ke.numIntersection!==Me.numIntersection)||ke.vertexAlphas!==it||ke.vertexTangents!==ot||ke.morphTargets!==Ve||ke.morphNormals!==ht||ke.morphColors!==Qt||ke.toneMapping!==Jt||ke.morphTargetsCount!==vn)&&(rt=!0):(rt=!0,ke.__version=se.version);let Bn=ke.currentProgram;rt===!0&&(Bn=Ha(se,X,ee));let $n=!1,Ri=!1,ei=!1;const Pt=Bn.getUniforms(),un=ke.uniforms;if(je.useProgram(Bn.program)&&($n=!0,Ri=!0,ei=!0),se.id!==ue&&(ue=se.id,Ri=!0),$n||J!==C){je.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Pt.setValue(G,"projectionMatrix",C.projectionMatrix),Pt.setValue(G,"viewMatrix",C.matrixWorldInverse);const Ci=Pt.map.cameraPosition;Ci!==void 0&&Ci.setValue(G,Mt.setFromMatrixPosition(C.matrixWorld)),It.logarithmicDepthBuffer&&Pt.setValue(G,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&Pt.setValue(G,"isOrthographic",C.isOrthographicCamera===!0),J!==C&&(J=C,Ri=!0,ei=!0)}if(ke.needsLights&&(Pn.state.directionalShadowMap.length>0&&Pt.setValue(G,"directionalShadowMap",Pn.state.directionalShadowMap,q),Pn.state.spotShadowMap.length>0&&Pt.setValue(G,"spotShadowMap",Pn.state.spotShadowMap,q),Pn.state.pointShadowMap.length>0&&Pt.setValue(G,"pointShadowMap",Pn.state.pointShadowMap,q)),ee.isSkinnedMesh){Pt.setOptional(G,ee,"bindMatrix"),Pt.setOptional(G,ee,"bindMatrixInverse");const fn=ee.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),Pt.setValue(G,"boneTexture",fn.boneTexture,q))}ee.isBatchedMesh&&(Pt.setOptional(G,ee,"batchingTexture"),Pt.setValue(G,"batchingTexture",ee._matricesTexture,q),Pt.setOptional(G,ee,"batchingIdTexture"),Pt.setValue(G,"batchingIdTexture",ee._indirectTexture,q),Pt.setOptional(G,ee,"batchingColorTexture"),ee._colorsTexture!==null&&Pt.setValue(G,"batchingColorTexture",ee._colorsTexture,q));const Fn=oe.morphAttributes;if((Fn.position!==void 0||Fn.normal!==void 0||Fn.color!==void 0)&&Pe.update(ee,oe,Bn),(Ri||ke.receiveShadow!==ee.receiveShadow)&&(ke.receiveShadow=ee.receiveShadow,Pt.setValue(G,"receiveShadow",ee.receiveShadow)),(se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial)&&se.envMap===null&&X.environment!==null&&(un.envMapIntensity.value=X.environmentIntensity),un.dfgLUT!==void 0&&(un.dfgLUT.value=m2()),Ri&&(Pt.setValue(G,"toneMappingExposure",L.toneMappingExposure),ke.needsLights&&Ms(un,ei),De&&se.fog===!0&&Ke.refreshFogUniforms(un,De),Ke.refreshMaterialUniforms(un,se,ge,j,F.state.transmissionRenderTarget[C.id]),Nu.upload(G,Pl(ke),un,q)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Nu.upload(G,Pl(ke),un,q),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&Pt.setValue(G,"center",ee.center),Pt.setValue(G,"modelViewMatrix",ee.modelViewMatrix),Pt.setValue(G,"normalMatrix",ee.normalMatrix),Pt.setValue(G,"modelMatrix",ee.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const fn=se.uniformsGroups;for(let Ci=0,la=fn.length;Ci<la;Ci++){const sr=fn[Ci];Be.update(sr,Bn),Be.bind(sr,Bn)}}return Bn}function Ms(C,X){C.ambientLightColor.needsUpdate=X,C.lightProbe.needsUpdate=X,C.directionalLights.needsUpdate=X,C.directionalLightShadows.needsUpdate=X,C.pointLights.needsUpdate=X,C.pointLightShadows.needsUpdate=X,C.spotLights.needsUpdate=X,C.spotLightShadows.needsUpdate=X,C.rectAreaLights.needsUpdate=X,C.hemisphereLights.needsUpdate=X}function xo(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return ae},this.setRenderTargetTextures=function(C,X,oe){const se=b.get(C);se.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),b.get(C.texture).__webglTexture=X,b.get(C.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:oe,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,X){const oe=b.get(C);oe.__webglFramebuffer=X,oe.__useDefaultFramebuffer=X===void 0};const Va=G.createFramebuffer();this.setRenderTarget=function(C,X=0,oe=0){ae=C,H=X,$=oe;let se=null,ee=!1,De=!1;if(C){const Ne=b.get(C);if(Ne.__useDefaultFramebuffer!==void 0){je.bindFramebuffer(G.FRAMEBUFFER,Ne.__webglFramebuffer),I.copy(C.viewport),B.copy(C.scissor),ce=C.scissorTest,je.viewport(I),je.scissor(B),je.setScissorTest(ce),ue=-1;return}else if(Ne.__webglFramebuffer===void 0)q.setupRenderTarget(C);else if(Ne.__hasExternalTextures)q.rebindTextures(C,b.get(C.texture).__webglTexture,b.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const it=C.depthTexture;if(Ne.__boundDepthTexture!==it){if(it!==null&&b.has(it)&&(C.width!==it.image.width||C.height!==it.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(C)}}const We=C.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(De=!0);const Ye=b.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ye[X])?se=Ye[X][oe]:se=Ye[X],ee=!0):C.samples>0&&q.useMultisampledRTT(C)===!1?se=b.get(C).__webglMultisampledFramebuffer:Array.isArray(Ye)?se=Ye[oe]:se=Ye,I.copy(C.viewport),B.copy(C.scissor),ce=C.scissorTest}else I.copy(ne).multiplyScalar(ge).floor(),B.copy(xe).multiplyScalar(ge).floor(),ce=be;if(oe!==0&&(se=Va),je.bindFramebuffer(G.FRAMEBUFFER,se)&&je.drawBuffers(C,se),je.viewport(I),je.scissor(B),je.setScissorTest(ce),ee){const Ne=b.get(C.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ne.__webglTexture,oe)}else if(De){const Ne=X;for(let We=0;We<C.textures.length;We++){const Ye=b.get(C.textures[We]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+We,Ye.__webglTexture,oe,Ne)}}else if(C!==null&&oe!==0){const Ne=b.get(C.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ne.__webglTexture,oe)}ue=-1},this.readRenderTargetPixels=function(C,X,oe,se,ee,De,ze,Ne=0){if(!(C&&C.isWebGLRenderTarget)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=b.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ze!==void 0&&(We=We[ze]),We){je.bindFramebuffer(G.FRAMEBUFFER,We);try{const Ye=C.textures[Ne],it=Ye.format,ot=Ye.type;if(C.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Ne),!It.textureFormatReadable(it)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!It.textureTypeReadable(ot)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=C.width-se&&oe>=0&&oe<=C.height-ee&&G.readPixels(X,oe,se,ee,Ce.convert(it),Ce.convert(ot),De)}finally{const Ye=ae!==null?b.get(ae).__webglFramebuffer:null;je.bindFramebuffer(G.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(C,X,oe,se,ee,De,ze,Ne=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=b.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ze!==void 0&&(We=We[ze]),We)if(X>=0&&X<=C.width-se&&oe>=0&&oe<=C.height-ee){je.bindFramebuffer(G.FRAMEBUFFER,We);const Ye=C.textures[Ne],it=Ye.format,ot=Ye.type;if(C.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Ne),!It.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!It.textureTypeReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ve=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,Ve),G.bufferData(G.PIXEL_PACK_BUFFER,De.byteLength,G.STREAM_READ),G.readPixels(X,oe,se,ee,Ce.convert(it),Ce.convert(ot),0);const ht=ae!==null?b.get(ae).__webglFramebuffer:null;je.bindFramebuffer(G.FRAMEBUFFER,ht);const Qt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await FE(G,Qt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,Ve),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,De),G.deleteBuffer(Ve),G.deleteSync(Qt),De}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,X=null,oe=0){const se=Math.pow(2,-oe),ee=Math.floor(C.image.width*se),De=Math.floor(C.image.height*se),ze=X!==null?X.x:0,Ne=X!==null?X.y:0;q.setTexture2D(C,0),G.copyTexSubImage2D(G.TEXTURE_2D,oe,0,0,ze,Ne,ee,De),je.unbindTexture()};const Ga=G.createFramebuffer(),Es=G.createFramebuffer();this.copyTextureToTexture=function(C,X,oe=null,se=null,ee=0,De=0){let ze,Ne,We,Ye,it,ot,Ve,ht,Qt;const Jt=C.isCompressedTexture?C.mipmaps[De]:C.image;if(oe!==null)ze=oe.max.x-oe.min.x,Ne=oe.max.y-oe.min.y,We=oe.isBox3?oe.max.z-oe.min.z:1,Ye=oe.min.x,it=oe.min.y,ot=oe.isBox3?oe.min.z:0;else{const un=Math.pow(2,-ee);ze=Math.floor(Jt.width*un),Ne=Math.floor(Jt.height*un),C.isDataArrayTexture?We=Jt.depth:C.isData3DTexture?We=Math.floor(Jt.depth*un):We=1,Ye=0,it=0,ot=0}se!==null?(Ve=se.x,ht=se.y,Qt=se.z):(Ve=0,ht=0,Qt=0);const Dt=Ce.convert(X.format),vn=Ce.convert(X.type);let ke;X.isData3DTexture?(q.setTexture3D(X,0),ke=G.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(q.setTexture2DArray(X,0),ke=G.TEXTURE_2D_ARRAY):(q.setTexture2D(X,0),ke=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,X.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,X.unpackAlignment);const Pn=G.getParameter(G.UNPACK_ROW_LENGTH),rt=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Bn=G.getParameter(G.UNPACK_SKIP_PIXELS),$n=G.getParameter(G.UNPACK_SKIP_ROWS),Ri=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Jt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Jt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Ye),G.pixelStorei(G.UNPACK_SKIP_ROWS,it),G.pixelStorei(G.UNPACK_SKIP_IMAGES,ot);const ei=C.isDataArrayTexture||C.isData3DTexture,Pt=X.isDataArrayTexture||X.isData3DTexture;if(C.isDepthTexture){const un=b.get(C),Fn=b.get(X),fn=b.get(un.__renderTarget),Ci=b.get(Fn.__renderTarget);je.bindFramebuffer(G.READ_FRAMEBUFFER,fn.__webglFramebuffer),je.bindFramebuffer(G.DRAW_FRAMEBUFFER,Ci.__webglFramebuffer);for(let la=0;la<We;la++)ei&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,b.get(C).__webglTexture,ee,ot+la),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,b.get(X).__webglTexture,De,Qt+la)),G.blitFramebuffer(Ye,it,ze,Ne,Ve,ht,ze,Ne,G.DEPTH_BUFFER_BIT,G.NEAREST);je.bindFramebuffer(G.READ_FRAMEBUFFER,null),je.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(ee!==0||C.isRenderTargetTexture||b.has(C)){const un=b.get(C),Fn=b.get(X);je.bindFramebuffer(G.READ_FRAMEBUFFER,Ga),je.bindFramebuffer(G.DRAW_FRAMEBUFFER,Es);for(let fn=0;fn<We;fn++)ei?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,un.__webglTexture,ee,ot+fn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,un.__webglTexture,ee),Pt?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Fn.__webglTexture,De,Qt+fn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Fn.__webglTexture,De),ee!==0?G.blitFramebuffer(Ye,it,ze,Ne,Ve,ht,ze,Ne,G.COLOR_BUFFER_BIT,G.NEAREST):Pt?G.copyTexSubImage3D(ke,De,Ve,ht,Qt+fn,Ye,it,ze,Ne):G.copyTexSubImage2D(ke,De,Ve,ht,Ye,it,ze,Ne);je.bindFramebuffer(G.READ_FRAMEBUFFER,null),je.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Pt?C.isDataTexture||C.isData3DTexture?G.texSubImage3D(ke,De,Ve,ht,Qt,ze,Ne,We,Dt,vn,Jt.data):X.isCompressedArrayTexture?G.compressedTexSubImage3D(ke,De,Ve,ht,Qt,ze,Ne,We,Dt,Jt.data):G.texSubImage3D(ke,De,Ve,ht,Qt,ze,Ne,We,Dt,vn,Jt):C.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,De,Ve,ht,ze,Ne,Dt,vn,Jt.data):C.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,De,Ve,ht,Jt.width,Jt.height,Dt,Jt.data):G.texSubImage2D(G.TEXTURE_2D,De,Ve,ht,ze,Ne,Dt,vn,Jt);G.pixelStorei(G.UNPACK_ROW_LENGTH,Pn),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,rt),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Bn),G.pixelStorei(G.UNPACK_SKIP_ROWS,$n),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Ri),De===0&&X.generateMipmaps&&G.generateMipmap(ke),je.unbindTexture()},this.initRenderTarget=function(C){b.get(C).__webglFramebuffer===void 0&&q.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?q.setTextureCube(C,0):C.isData3DTexture?q.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?q.setTexture2DArray(C,0):q.setTexture2D(C,0),je.unbindTexture()},this.resetState=function(){H=0,$=0,ae=null,je.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=At._getDrawingBufferColorSpace(e),n.unpackColorSpace=At._getUnpackColorSpace()}}function mx(r,e){if(e===AE)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Dp||e===Gx){let n=r.getIndex();if(n===null){const u=[],d=r.getAttribute("position");if(d!==void 0){for(let p=0;p<d.count;p++)u.push(p);r.setIndex(u),n=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const a=n.count-2,o=[];if(e===Dp)for(let u=1;u<=a;u++)o.push(n.getX(0)),o.push(n.getX(u)),o.push(n.getX(u+1));else for(let u=0;u<a;u++)u%2===0?(o.push(n.getX(u)),o.push(n.getX(u+1)),o.push(n.getX(u+2))):(o.push(n.getX(u+2)),o.push(n.getX(u+1)),o.push(n.getX(u)));o.length/3!==a&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const c=r.clone();return c.setIndex(o),c.clearGroups(),c}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}function _2(r){const e=new Map,n=new Map,a=r.clone();return hS(r,a,function(o,c){e.set(c,o),n.set(o,c)}),a.traverse(function(o){if(!o.isSkinnedMesh)return;const c=o,u=e.get(o),d=u.skeleton.bones;c.skeleton=u.skeleton.clone(),c.bindMatrix.copy(u.bindMatrix),c.skeleton.bones=d.map(function(p){return n.get(p)}),c.bind(c.skeleton,c.bindMatrix)}),a}function hS(r,e,n){n(r,e);for(let a=0;a<r.children.length;a++)hS(r.children[a],e.children[a],n)}class v2 extends go{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(n){return new E2(n)}),this.register(function(n){return new b2(n)}),this.register(function(n){return new U2(n)}),this.register(function(n){return new O2(n)}),this.register(function(n){return new I2(n)}),this.register(function(n){return new A2(n)}),this.register(function(n){return new R2(n)}),this.register(function(n){return new C2(n)}),this.register(function(n){return new w2(n)}),this.register(function(n){return new M2(n)}),this.register(function(n){return new D2(n)}),this.register(function(n){return new T2(n)}),this.register(function(n){return new L2(n)}),this.register(function(n){return new N2(n)}),this.register(function(n){return new S2(n)}),this.register(function(n){return new gx(n,vt.EXT_MESHOPT_COMPRESSION)}),this.register(function(n){return new gx(n,vt.KHR_MESHOPT_COMPRESSION)}),this.register(function(n){return new P2(n)})}load(e,n,a,o){const c=this;let u;if(this.resourcePath!=="")u=this.resourcePath;else if(this.path!==""){const h=bl.extractUrlBase(e);u=bl.resolveURL(h,this.path)}else u=bl.extractUrlBase(e);this.manager.itemStart(e);const d=function(h){o?o(h):console.error(h),c.manager.itemError(e),c.manager.itemEnd(e)},p=new aS(this.manager);p.setPath(this.path),p.setResponseType("arraybuffer"),p.setRequestHeader(this.requestHeader),p.setWithCredentials(this.withCredentials),p.load(e,function(h){try{c.parse(h,u,function(g){n(g),c.manager.itemEnd(e)},d)}catch(g){d(g)}},a,d)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,n,a,o){let c;const u={},d={},p=new TextDecoder;if(typeof e=="string")c=JSON.parse(e);else if(e instanceof ArrayBuffer)if(p.decode(new Uint8Array(e,0,4))===dS){try{u[vt.KHR_BINARY_GLTF]=new B2(e)}catch(v){o&&o(v);return}c=JSON.parse(u[vt.KHR_BINARY_GLTF].content)}else c=JSON.parse(p.decode(e));else c=e;if(c.asset===void 0||c.asset.version[0]<2){o&&o(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const h=new Z2(c,{path:n||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let g=0;g<this.pluginCallbacks.length;g++){const v=this.pluginCallbacks[g](h);v.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),d[v.name]=v,u[v.name]=!0}if(c.extensionsUsed)for(let g=0;g<c.extensionsUsed.length;++g){const v=c.extensionsUsed[g],_=c.extensionsRequired||[];switch(v){case vt.KHR_MATERIALS_UNLIT:u[v]=new y2;break;case vt.KHR_DRACO_MESH_COMPRESSION:u[v]=new F2(c,this.dracoLoader);break;case vt.KHR_TEXTURE_TRANSFORM:u[v]=new z2;break;case vt.KHR_MESH_QUANTIZATION:u[v]=new H2;break;default:_.indexOf(v)>=0&&d[v]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+v+'".')}}h.setExtensions(u),h.setPlugins(d),h.parse(a,o)}parseAsync(e,n){const a=this;return new Promise(function(o,c){a.parse(e,n,o,c)})}}function x2(){let r={};return{get:function(e){return r[e]},add:function(e,n){r[e]=n},remove:function(e){delete r[e]},removeAll:function(){r={}}}}function ln(r,e,n){const a=r.json.materials[e];return a.extensions&&a.extensions[n]?a.extensions[n]:null}const vt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class S2{constructor(e){this.parser=e,this.name=vt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,n=this.parser.json.nodes||[];for(let a=0,o=n.length;a<o;a++){const c=n[a];c.extensions&&c.extensions[this.name]&&c.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,c.extensions[this.name].light)}}_loadLight(e){const n=this.parser,a="light:"+e;let o=n.cache.get(a);if(o)return o;const c=n.json,p=((c.extensions&&c.extensions[this.name]||{}).lights||[])[e];let h;const g=new st(16777215);p.color!==void 0&&g.setRGB(p.color[0],p.color[1],p.color[2],Xn);const v=p.range!==void 0?p.range:0;switch(p.type){case"directional":h=new Du(g),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new oT(g),h.distance=v;break;case"spot":h=new sT(g),h.distance=v,p.spot=p.spot||{},p.spot.innerConeAngle=p.spot.innerConeAngle!==void 0?p.spot.innerConeAngle:0,p.spot.outerConeAngle=p.spot.outerConeAngle!==void 0?p.spot.outerConeAngle:Math.PI/4,h.angle=p.spot.outerConeAngle,h.penumbra=1-p.spot.innerConeAngle/p.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+p.type)}return h.position.set(0,0,0),Ki(h,p),p.intensity!==void 0&&(h.intensity=p.intensity),h.name=n.createUniqueName(p.name||"light_"+e),o=Promise.resolve(h),n.cache.add(a,o),o}getDependency(e,n){if(e==="light")return this._loadLight(n)}createNodeAttachment(e){const n=this,a=this.parser,c=a.json.nodes[e],d=(c.extensions&&c.extensions[this.name]||{}).light;return d===void 0?null:this._loadLight(d).then(function(p){return a._getNodeRef(n.cache,d,p)})}}class y2{constructor(){this.name=vt.KHR_MATERIALS_UNLIT}getMaterialType(){return Js}extendParams(e,n,a){const o=[];e.color=new st(1,1,1),e.opacity=1;const c=n.pbrMetallicRoughness;if(c){if(Array.isArray(c.baseColorFactor)){const u=c.baseColorFactor;e.color.setRGB(u[0],u[1],u[2],Xn),e.opacity=u[3]}c.baseColorTexture!==void 0&&o.push(a.assignTexture(e,"map",c.baseColorTexture,An))}return Promise.all(o)}}class M2{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,n){const a=ln(this.parser,e,this.name);return a===null||a.emissiveStrength!==void 0&&(n.emissiveIntensity=a.emissiveStrength),Promise.resolve()}}class E2{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return ln(this.parser,e,this.name)!==null?ra:null}extendMaterialParams(e,n){const a=ln(this.parser,e,this.name);if(a===null)return Promise.resolve();const o=[];if(a.clearcoatFactor!==void 0&&(n.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&o.push(this.parser.assignTexture(n,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(n.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&o.push(this.parser.assignTexture(n,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(o.push(this.parser.assignTexture(n,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const c=a.clearcoatNormalTexture.scale;n.clearcoatNormalScale=new Ct(c,c)}return Promise.all(o)}}class b2{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return ln(this.parser,e,this.name)!==null?ra:null}extendMaterialParams(e,n){const a=ln(this.parser,e,this.name);return a===null||(n.dispersion=a.dispersion!==void 0?a.dispersion:0),Promise.resolve()}}class T2{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return ln(this.parser,e,this.name)!==null?ra:null}extendMaterialParams(e,n){const a=ln(this.parser,e,this.name);if(a===null)return Promise.resolve();const o=[];return a.iridescenceFactor!==void 0&&(n.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&o.push(this.parser.assignTexture(n,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(n.iridescenceIOR=a.iridescenceIor),n.iridescenceThicknessRange===void 0&&(n.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&o.push(this.parser.assignTexture(n,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(o)}}class A2{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_SHEEN}getMaterialType(e){return ln(this.parser,e,this.name)!==null?ra:null}extendMaterialParams(e,n){const a=ln(this.parser,e,this.name);if(a===null)return Promise.resolve();const o=[];if(n.sheenColor=new st(0,0,0),n.sheenRoughness=0,n.sheen=1,a.sheenColorFactor!==void 0){const c=a.sheenColorFactor;n.sheenColor.setRGB(c[0],c[1],c[2],Xn)}return a.sheenRoughnessFactor!==void 0&&(n.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&o.push(this.parser.assignTexture(n,"sheenColorMap",a.sheenColorTexture,An)),a.sheenRoughnessTexture!==void 0&&o.push(this.parser.assignTexture(n,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(o)}}class R2{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return ln(this.parser,e,this.name)!==null?ra:null}extendMaterialParams(e,n){const a=ln(this.parser,e,this.name);if(a===null)return Promise.resolve();const o=[];return a.transmissionFactor!==void 0&&(n.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&o.push(this.parser.assignTexture(n,"transmissionMap",a.transmissionTexture)),Promise.all(o)}}class C2{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_VOLUME}getMaterialType(e){return ln(this.parser,e,this.name)!==null?ra:null}extendMaterialParams(e,n){const a=ln(this.parser,e,this.name);if(a===null)return Promise.resolve();const o=[];n.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&o.push(this.parser.assignTexture(n,"thicknessMap",a.thicknessTexture)),n.attenuationDistance=a.attenuationDistance||1/0;const c=a.attenuationColor||[1,1,1];return n.attenuationColor=new st().setRGB(c[0],c[1],c[2],Xn),Promise.all(o)}}class w2{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_IOR}getMaterialType(e){return ln(this.parser,e,this.name)!==null?ra:null}extendMaterialParams(e,n){const a=ln(this.parser,e,this.name);return a===null||(n.ior=a.ior!==void 0?a.ior:1.5),Promise.resolve()}}class D2{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return ln(this.parser,e,this.name)!==null?ra:null}extendMaterialParams(e,n){const a=ln(this.parser,e,this.name);if(a===null)return Promise.resolve();const o=[];n.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&o.push(this.parser.assignTexture(n,"specularIntensityMap",a.specularTexture));const c=a.specularColorFactor||[1,1,1];return n.specularColor=new st().setRGB(c[0],c[1],c[2],Xn),a.specularColorTexture!==void 0&&o.push(this.parser.assignTexture(n,"specularColorMap",a.specularColorTexture,An)),Promise.all(o)}}class N2{constructor(e){this.parser=e,this.name=vt.EXT_MATERIALS_BUMP}getMaterialType(e){return ln(this.parser,e,this.name)!==null?ra:null}extendMaterialParams(e,n){const a=ln(this.parser,e,this.name);if(a===null)return Promise.resolve();const o=[];return n.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&o.push(this.parser.assignTexture(n,"bumpMap",a.bumpTexture)),Promise.all(o)}}class L2{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return ln(this.parser,e,this.name)!==null?ra:null}extendMaterialParams(e,n){const a=ln(this.parser,e,this.name);if(a===null)return Promise.resolve();const o=[];return a.anisotropyStrength!==void 0&&(n.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(n.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&o.push(this.parser.assignTexture(n,"anisotropyMap",a.anisotropyTexture)),Promise.all(o)}}class U2{constructor(e){this.parser=e,this.name=vt.KHR_TEXTURE_BASISU}loadTexture(e){const n=this.parser,a=n.json,o=a.textures[e];if(!o.extensions||!o.extensions[this.name])return null;const c=o.extensions[this.name],u=n.options.ktx2Loader;if(!u){if(a.extensionsRequired&&a.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return n.loadTextureImage(e,c.source,u)}}class O2{constructor(e){this.parser=e,this.name=vt.EXT_TEXTURE_WEBP}loadTexture(e){const n=this.name,a=this.parser,o=a.json,c=o.textures[e];if(!c.extensions||!c.extensions[n])return null;const u=c.extensions[n],d=o.images[u.source];let p=a.textureLoader;if(d.uri){const h=a.options.manager.getHandler(d.uri);h!==null&&(p=h)}return a.loadTextureImage(e,u.source,p)}}class I2{constructor(e){this.parser=e,this.name=vt.EXT_TEXTURE_AVIF}loadTexture(e){const n=this.name,a=this.parser,o=a.json,c=o.textures[e];if(!c.extensions||!c.extensions[n])return null;const u=c.extensions[n],d=o.images[u.source];let p=a.textureLoader;if(d.uri){const h=a.options.manager.getHandler(d.uri);h!==null&&(p=h)}return a.loadTextureImage(e,u.source,p)}}class gx{constructor(e,n){this.name=n,this.parser=e}loadBufferView(e){const n=this.parser.json,a=n.bufferViews[e];if(a.extensions&&a.extensions[this.name]){const o=a.extensions[this.name],c=this.parser.getDependency("buffer",o.buffer),u=this.parser.options.meshoptDecoder;if(!u||!u.supported){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return c.then(function(d){const p=o.byteOffset||0,h=o.byteLength||0,g=o.count,v=o.byteStride,_=new Uint8Array(d,p,h);return u.decodeGltfBufferAsync?u.decodeGltfBufferAsync(g,v,_,o.mode,o.filter).then(function(x){return x.buffer}):u.ready.then(function(){const x=new ArrayBuffer(g*v);return u.decodeGltfBuffer(new Uint8Array(x),g,v,_,o.mode,o.filter),x})})}else return null}}class P2{constructor(e){this.name=vt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const n=this.parser.json,a=n.nodes[e];if(!a.extensions||!a.extensions[this.name]||a.mesh===void 0)return null;const o=n.meshes[a.mesh];for(const h of o.primitives)if(h.mode!==Si.TRIANGLES&&h.mode!==Si.TRIANGLE_STRIP&&h.mode!==Si.TRIANGLE_FAN&&h.mode!==void 0)return null;const u=a.extensions[this.name].attributes,d=[],p={};for(const h in u)d.push(this.parser.getDependency("accessor",u[h]).then(g=>(p[h]=g,p[h])));return d.length<1?null:(d.push(this.parser.createNodeMesh(e)),Promise.all(d).then(h=>{const g=h.pop(),v=g.isGroup?g.children:[g],_=h[0].count,x=[];for(const E of v){const T=new gt,M=new Z,S=new za,w=new Z(1,1,1),N=new Rb(E.geometry,E.material,_);for(let D=0;D<_;D++)p.TRANSLATION&&M.fromBufferAttribute(p.TRANSLATION,D),p.ROTATION&&S.fromBufferAttribute(p.ROTATION,D),p.SCALE&&w.fromBufferAttribute(p.SCALE,D),N.setMatrixAt(D,T.compose(M,S,w));for(const D in p)if(D==="_COLOR_0"){const F=p[D];N.instanceColor=new Lp(F.array,F.itemSize,F.normalized)}else D!=="TRANSLATION"&&D!=="ROTATION"&&D!=="SCALE"&&E.geometry.setAttribute(D,p[D]);en.prototype.copy.call(N,E),this.parser.assignFinalMaterial(N),x.push(N)}return g.isGroup?(g.clear(),g.add(...x),g):x[0]}))}}const dS="glTF",vl=12,_x={JSON:1313821514,BIN:5130562};class B2{constructor(e){this.name=vt.KHR_BINARY_GLTF,this.content=null,this.body=null;const n=new DataView(e,0,vl),a=new TextDecoder;if(this.header={magic:a.decode(new Uint8Array(e.slice(0,4))),version:n.getUint32(4,!0),length:n.getUint32(8,!0)},this.header.magic!==dS)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const o=this.header.length-vl,c=new DataView(e,vl);let u=0;for(;u<o;){const d=c.getUint32(u,!0);u+=4;const p=c.getUint32(u,!0);if(u+=4,p===_x.JSON){const h=new Uint8Array(e,vl+u,d);this.content=a.decode(h)}else if(p===_x.BIN){const h=vl+u;this.body=e.slice(h,h+d)}u+=d}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class F2{constructor(e,n){if(!n)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=vt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=n,this.dracoLoader.preload()}decodePrimitive(e,n){const a=this.json,o=this.dracoLoader,c=e.extensions[this.name].bufferView,u=e.extensions[this.name].attributes,d={},p={},h={};for(const g in u){const v=Pp[g]||g.toLowerCase();d[v]=u[g]}for(const g in e.attributes){const v=Pp[g]||g.toLowerCase();if(u[g]!==void 0){const _=a.accessors[e.attributes[g]],x=to[_.componentType];h[v]=x.name,p[v]=_.normalized===!0}}return n.getDependency("bufferView",c).then(function(g){return new Promise(function(v,_){o.decodeDracoFile(g,function(x){for(const E in x.attributes){const T=x.attributes[E],M=p[E];M!==void 0&&(T.normalized=M)}v(x)},d,h,Xn,_)})})}}class z2{constructor(){this.name=vt.KHR_TEXTURE_TRANSFORM}extendTexture(e,n){return(n.texCoord===void 0||n.texCoord===e.channel)&&n.offset===void 0&&n.rotation===void 0&&n.scale===void 0||(e=e.clone(),n.texCoord!==void 0&&(e.channel=n.texCoord),n.offset!==void 0&&e.offset.fromArray(n.offset),n.rotation!==void 0&&(e.rotation=n.rotation),n.scale!==void 0&&e.repeat.fromArray(n.scale),e.needsUpdate=!0),e}}class H2{constructor(){this.name=vt.KHR_MESH_QUANTIZATION}}class pS extends ho{constructor(e,n,a,o){super(e,n,a,o)}copySampleValue_(e){const n=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o*3+o;for(let u=0;u!==o;u++)n[u]=a[c+u];return n}interpolate_(e,n,a,o){const c=this.resultBuffer,u=this.sampleValues,d=this.valueSize,p=d*2,h=d*3,g=o-n,v=(a-n)/g,_=v*v,x=_*v,E=e*h,T=E-h,M=-2*x+3*_,S=x-_,w=1-M,N=S-_+v;for(let D=0;D!==d;D++){const F=u[T+D+d],z=u[T+D+p]*g,P=u[E+D+d],A=u[E+D]*g;c[D]=w*F+N*z+M*P+S*A}return c}}const V2=new za;class G2 extends pS{interpolate_(e,n,a,o){const c=super.interpolate_(e,n,a,o);return V2.fromArray(c).normalize().toArray(c),c}}const Si={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},to={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},vx={9728:Sn,9729:yn,9984:Ix,9985:Tu,9986:Sl,9987:La},xx={33071:Ji,33648:Ou,10497:ao},Fd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Pp={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},vs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},k2={CUBICSPLINE:void 0,LINEAR:Cl,STEP:Rl},zd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function X2(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new im({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Pa})),r.DefaultMaterial}function js(r,e,n){for(const a in n.extensions)r[a]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[a]=n.extensions[a])}function Ki(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function W2(r,e,n){let a=!1,o=!1,c=!1;for(let h=0,g=e.length;h<g;h++){const v=e[h];if(v.POSITION!==void 0&&(a=!0),v.NORMAL!==void 0&&(o=!0),v.COLOR_0!==void 0&&(c=!0),a&&o&&c)break}if(!a&&!o&&!c)return Promise.resolve(r);const u=[],d=[],p=[];for(let h=0,g=e.length;h<g;h++){const v=e[h];if(a){const _=v.POSITION!==void 0?n.getDependency("accessor",v.POSITION):r.attributes.position;u.push(_)}if(o){const _=v.NORMAL!==void 0?n.getDependency("accessor",v.NORMAL):r.attributes.normal;d.push(_)}if(c){const _=v.COLOR_0!==void 0?n.getDependency("accessor",v.COLOR_0):r.attributes.color;p.push(_)}}return Promise.all([Promise.all(u),Promise.all(d),Promise.all(p)]).then(function(h){const g=h[0],v=h[1],_=h[2];return a&&(r.morphAttributes.position=g),o&&(r.morphAttributes.normal=v),c&&(r.morphAttributes.color=_),r.morphTargetsRelative=!0,r})}function j2(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let n=0,a=e.weights.length;n<a;n++)r.morphTargetInfluences[n]=e.weights[n];if(e.extras&&Array.isArray(e.extras.targetNames)){const n=e.extras.targetNames;if(r.morphTargetInfluences.length===n.length){r.morphTargetDictionary={};for(let a=0,o=n.length;a<o;a++)r.morphTargetDictionary[n[a]]=a}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function q2(r){let e;const n=r.extensions&&r.extensions[vt.KHR_DRACO_MESH_COMPRESSION];if(n?e="draco:"+n.bufferView+":"+n.indices+":"+Hd(n.attributes):e=r.indices+":"+Hd(r.attributes)+":"+r.mode,r.targets!==void 0)for(let a=0,o=r.targets.length;a<o;a++)e+=":"+Hd(r.targets[a]);return e}function Hd(r){let e="";const n=Object.keys(r).sort();for(let a=0,o=n.length;a<o;a++)e+=n[a]+":"+r[n[a]]+";";return e}function Bp(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Y2(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const K2=new gt;class Z2{constructor(e={},n={}){this.json=e,this.extensions={},this.plugins={},this.options=n,this.cache=new x2,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let a=!1,o=-1,c=!1,u=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const d=navigator.userAgent;a=/^((?!chrome|android).)*safari/i.test(d)===!0;const p=d.match(/Version\/(\d+)/);o=a&&p?parseInt(p[1],10):-1,c=d.indexOf("Firefox")>-1,u=c?d.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||a&&o<17||c&&u<98?this.textureLoader=new nT(this.options.manager):this.textureLoader=new uT(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new aS(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,n){const a=this,o=this.json,c=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(u){return u._markDefs&&u._markDefs()}),Promise.all(this._invokeAll(function(u){return u.beforeRoot&&u.beforeRoot()})).then(function(){return Promise.all([a.getDependencies("scene"),a.getDependencies("animation"),a.getDependencies("camera")])}).then(function(u){const d={scene:u[0][o.scene||0],scenes:u[0],animations:u[1],cameras:u[2],asset:o.asset,parser:a,userData:{}};return js(c,d,o),Ki(d,o),Promise.all(a._invokeAll(function(p){return p.afterRoot&&p.afterRoot(d)})).then(function(){for(const p of d.scenes)p.updateMatrixWorld();e(d)})}).catch(n)}_markDefs(){const e=this.json.nodes||[],n=this.json.skins||[],a=this.json.meshes||[];for(let o=0,c=n.length;o<c;o++){const u=n[o].joints;for(let d=0,p=u.length;d<p;d++)e[u[d]].isBone=!0}for(let o=0,c=e.length;o<c;o++){const u=e[o];u.mesh!==void 0&&(this._addNodeRef(this.meshCache,u.mesh),u.skin!==void 0&&(a[u.mesh].isSkinnedMesh=!0)),u.camera!==void 0&&this._addNodeRef(this.cameraCache,u.camera)}}_addNodeRef(e,n){n!==void 0&&(e.refs[n]===void 0&&(e.refs[n]=e.uses[n]=0),e.refs[n]++)}_getNodeRef(e,n,a){if(e.refs[n]<=1)return a;const o=a.clone(),c=(u,d)=>{const p=this.associations.get(u);p!=null&&this.associations.set(d,p);for(const[h,g]of u.children.entries())c(g,d.children[h])};return c(a,o),o.name+="_instance_"+e.uses[n]++,o}_invokeOne(e){const n=Object.values(this.plugins);n.push(this);for(let a=0;a<n.length;a++){const o=e(n[a]);if(o)return o}return null}_invokeAll(e){const n=Object.values(this.plugins);n.unshift(this);const a=[];for(let o=0;o<n.length;o++){const c=e(n[o]);c&&a.push(c)}return a}getDependency(e,n){const a=e+":"+n;let o=this.cache.get(a);if(!o){switch(e){case"scene":o=this.loadScene(n);break;case"node":o=this._invokeOne(function(c){return c.loadNode&&c.loadNode(n)});break;case"mesh":o=this._invokeOne(function(c){return c.loadMesh&&c.loadMesh(n)});break;case"accessor":o=this.loadAccessor(n);break;case"bufferView":o=this._invokeOne(function(c){return c.loadBufferView&&c.loadBufferView(n)});break;case"buffer":o=this.loadBuffer(n);break;case"material":o=this._invokeOne(function(c){return c.loadMaterial&&c.loadMaterial(n)});break;case"texture":o=this._invokeOne(function(c){return c.loadTexture&&c.loadTexture(n)});break;case"skin":o=this.loadSkin(n);break;case"animation":o=this._invokeOne(function(c){return c.loadAnimation&&c.loadAnimation(n)});break;case"camera":o=this.loadCamera(n);break;default:if(o=this._invokeOne(function(c){return c!=this&&c.getDependency&&c.getDependency(e,n)}),!o)throw new Error("Unknown type: "+e);break}this.cache.add(a,o)}return o}getDependencies(e){let n=this.cache.get(e);if(!n){const a=this,o=this.json[e+(e==="mesh"?"es":"s")]||[];n=Promise.all(o.map(function(c,u){return a.getDependency(e,u)})),this.cache.add(e,n)}return n}loadBuffer(e){const n=this.json.buffers[e],a=this.fileLoader;if(n.type&&n.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+n.type+" buffer type is not supported.");if(n.uri===void 0&&e===0)return Promise.resolve(this.extensions[vt.KHR_BINARY_GLTF].body);const o=this.options;return new Promise(function(c,u){a.load(bl.resolveURL(n.uri,o.path),c,void 0,function(){u(new Error('THREE.GLTFLoader: Failed to load buffer "'+n.uri+'".'))})})}loadBufferView(e){const n=this.json.bufferViews[e];return this.getDependency("buffer",n.buffer).then(function(a){const o=n.byteLength||0,c=n.byteOffset||0;return a.slice(c,c+o)})}loadAccessor(e){const n=this,a=this.json,o=this.json.accessors[e];if(o.bufferView===void 0&&o.sparse===void 0){const u=Fd[o.type],d=to[o.componentType],p=o.normalized===!0,h=new d(o.count*u);return Promise.resolve(new kn(h,u,p))}const c=[];return o.bufferView!==void 0?c.push(this.getDependency("bufferView",o.bufferView)):c.push(null),o.sparse!==void 0&&(c.push(this.getDependency("bufferView",o.sparse.indices.bufferView)),c.push(this.getDependency("bufferView",o.sparse.values.bufferView))),Promise.all(c).then(function(u){const d=u[0],p=Fd[o.type],h=to[o.componentType],g=h.BYTES_PER_ELEMENT,v=g*p,_=o.byteOffset||0,x=o.bufferView!==void 0?a.bufferViews[o.bufferView].byteStride:void 0,E=o.normalized===!0;let T,M;if(x&&x!==v){const S=Math.floor(_/x),w="InterleavedBuffer:"+o.bufferView+":"+o.componentType+":"+S+":"+o.count;let N=n.cache.get(w);N||(T=new h(d,S*x,o.count*x/g),N=new Sb(T,x/g),n.cache.add(w,N)),M=new Jp(N,p,_%x/g,E)}else d===null?T=new h(o.count*p):T=new h(d,_,o.count*p),M=new kn(T,p,E);if(o.sparse!==void 0){const S=Fd.SCALAR,w=to[o.sparse.indices.componentType],N=o.sparse.indices.byteOffset||0,D=o.sparse.values.byteOffset||0,F=new w(u[1],N,o.sparse.count*S),z=new h(u[2],D,o.sparse.count*p);d!==null&&(M=new kn(M.array.slice(),M.itemSize,M.normalized)),M.normalized=!1;for(let P=0,A=F.length;P<A;P++){const L=F[P];if(M.setX(L,z[P*p]),p>=2&&M.setY(L,z[P*p+1]),p>=3&&M.setZ(L,z[P*p+2]),p>=4&&M.setW(L,z[P*p+3]),p>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}M.normalized=E}return M})}loadTexture(e){const n=this.json,a=this.options,c=n.textures[e].source,u=n.images[c];let d=this.textureLoader;if(u.uri){const p=a.manager.getHandler(u.uri);p!==null&&(d=p)}return this.loadTextureImage(e,c,d)}loadTextureImage(e,n,a){const o=this,c=this.json,u=c.textures[e],d=c.images[n],p=(d.uri||d.bufferView)+":"+u.sampler;if(this.textureCache[p])return this.textureCache[p];const h=this.loadImageSource(n,a).then(function(g){g.flipY=!1,g.name=u.name||d.name||"",g.name===""&&typeof d.uri=="string"&&d.uri.startsWith("data:image/")===!1&&(g.name=d.uri);const _=(c.samplers||{})[u.sampler]||{};return g.magFilter=vx[_.magFilter]||yn,g.minFilter=vx[_.minFilter]||La,g.wrapS=xx[_.wrapS]||ao,g.wrapT=xx[_.wrapT]||ao,g.generateMipmaps=!g.isCompressedTexture&&g.minFilter!==Sn&&g.minFilter!==yn,o.associations.set(g,{textures:e}),g}).catch(function(){return null});return this.textureCache[p]=h,h}loadImageSource(e,n){const a=this,o=this.json,c=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(v=>v.clone());const u=o.images[e],d=self.URL||self.webkitURL;let p=u.uri||"",h=!1;if(u.bufferView!==void 0)p=a.getDependency("bufferView",u.bufferView).then(function(v){h=!0;const _=new Blob([v],{type:u.mimeType});return p=d.createObjectURL(_),p});else if(u.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const g=Promise.resolve(p).then(function(v){return new Promise(function(_,x){let E=_;n.isImageBitmapLoader===!0&&(E=function(T){const M=new Rn(T);M.needsUpdate=!0,_(M)}),n.load(bl.resolveURL(v,c.path),E,void 0,x)})}).then(function(v){return h===!0&&d.revokeObjectURL(p),Ki(v,u),v.userData.mimeType=u.mimeType||Y2(u.uri),v}).catch(function(v){throw console.error("THREE.GLTFLoader: Couldn't load texture",p),v});return this.sourceCache[e]=g,g}assignTexture(e,n,a,o){const c=this;return this.getDependency("texture",a.index).then(function(u){if(!u)return null;if(a.texCoord!==void 0&&a.texCoord>0&&(u=u.clone(),u.channel=a.texCoord),c.extensions[vt.KHR_TEXTURE_TRANSFORM]){const d=a.extensions!==void 0?a.extensions[vt.KHR_TEXTURE_TRANSFORM]:void 0;if(d){const p=c.associations.get(u);u=c.extensions[vt.KHR_TEXTURE_TRANSFORM].extendTexture(u,d),c.associations.set(u,p)}}return o!==void 0&&(u.colorSpace=o),e[n]=u,u})}assignFinalMaterial(e){const n=e.geometry;let a=e.material;const o=n.attributes.tangent===void 0,c=n.attributes.color!==void 0,u=n.attributes.normal===void 0;if(e.isPoints){const d="PointsMaterial:"+a.uuid;let p=this.cache.get(d);p||(p=new Jx,Hi.prototype.copy.call(p,a),p.color.copy(a.color),p.map=a.map,p.sizeAttenuation=!1,this.cache.add(d,p)),a=p}else if(e.isLine){const d="LineBasicMaterial:"+a.uuid;let p=this.cache.get(d);p||(p=new Qx,Hi.prototype.copy.call(p,a),p.color.copy(a.color),p.map=a.map,this.cache.add(d,p)),a=p}if(o||c||u){let d="ClonedMaterial:"+a.uuid+":";o&&(d+="derivative-tangents:"),c&&(d+="vertex-colors:"),u&&(d+="flat-shading:");let p=this.cache.get(d);p||(p=a.clone(),c&&(p.vertexColors=!0),u&&(p.flatShading=!0),o&&(p.normalScale&&(p.normalScale.y*=-1),p.clearcoatNormalScale&&(p.clearcoatNormalScale.y*=-1)),this.cache.add(d,p),this.associations.set(p,this.associations.get(a))),a=p}e.material=a}getMaterialType(){return im}loadMaterial(e){const n=this,a=this.json,o=this.extensions,c=a.materials[e];let u;const d={},p=c.extensions||{},h=[];if(p[vt.KHR_MATERIALS_UNLIT]){const v=o[vt.KHR_MATERIALS_UNLIT];u=v.getMaterialType(),h.push(v.extendParams(d,c,n))}else{const v=c.pbrMetallicRoughness||{};if(d.color=new st(1,1,1),d.opacity=1,Array.isArray(v.baseColorFactor)){const _=v.baseColorFactor;d.color.setRGB(_[0],_[1],_[2],Xn),d.opacity=_[3]}v.baseColorTexture!==void 0&&h.push(n.assignTexture(d,"map",v.baseColorTexture,An)),d.metalness=v.metallicFactor!==void 0?v.metallicFactor:1,d.roughness=v.roughnessFactor!==void 0?v.roughnessFactor:1,v.metallicRoughnessTexture!==void 0&&(h.push(n.assignTexture(d,"metalnessMap",v.metallicRoughnessTexture)),h.push(n.assignTexture(d,"roughnessMap",v.metallicRoughnessTexture))),u=this._invokeOne(function(_){return _.getMaterialType&&_.getMaterialType(e)}),h.push(Promise.all(this._invokeAll(function(_){return _.extendMaterialParams&&_.extendMaterialParams(e,d)})))}c.doubleSided===!0&&(d.side=Qi);const g=c.alphaMode||zd.OPAQUE;if(g===zd.BLEND?(d.transparent=!0,d.depthWrite=!1):(d.transparent=!1,g===zd.MASK&&(d.alphaTest=c.alphaCutoff!==void 0?c.alphaCutoff:.5)),c.normalTexture!==void 0&&u!==Js&&(h.push(n.assignTexture(d,"normalMap",c.normalTexture)),d.normalScale=new Ct(1,1),c.normalTexture.scale!==void 0)){const v=c.normalTexture.scale;d.normalScale.set(v,v)}if(c.occlusionTexture!==void 0&&u!==Js&&(h.push(n.assignTexture(d,"aoMap",c.occlusionTexture)),c.occlusionTexture.strength!==void 0&&(d.aoMapIntensity=c.occlusionTexture.strength)),c.emissiveFactor!==void 0&&u!==Js){const v=c.emissiveFactor;d.emissive=new st().setRGB(v[0],v[1],v[2],Xn)}return c.emissiveTexture!==void 0&&u!==Js&&h.push(n.assignTexture(d,"emissiveMap",c.emissiveTexture,An)),Promise.all(h).then(function(){const v=new u(d);return c.name&&(v.name=c.name),Ki(v,c),n.associations.set(v,{materials:e}),c.extensions&&js(o,v,c),v})}createUniqueName(e){const n=Gt.sanitizeNodeName(e||"");return n in this.nodeNamesUsed?n+"_"+ ++this.nodeNamesUsed[n]:(this.nodeNamesUsed[n]=0,n)}loadGeometries(e){const n=this,a=this.extensions,o=this.primitiveCache;function c(d){return a[vt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(d,n).then(function(p){return Sx(p,d,n)})}const u=[];for(let d=0,p=e.length;d<p;d++){const h=e[d],g=q2(h),v=o[g];if(v)u.push(v.promise);else{let _;h.extensions&&h.extensions[vt.KHR_DRACO_MESH_COMPRESSION]?_=c(h):_=Sx(new bi,h,n),o[g]={primitive:h,promise:_},u.push(_)}}return Promise.all(u)}loadMesh(e){const n=this,a=this.json,o=this.extensions,c=a.meshes[e],u=c.primitives,d=[];for(let p=0,h=u.length;p<h;p++){const g=u[p].material===void 0?X2(this.cache):this.getDependency("material",u[p].material);d.push(g)}return d.push(n.loadGeometries(u)),Promise.all(d).then(function(p){const h=p.slice(0,p.length-1),g=p[p.length-1],v=[];for(let x=0,E=g.length;x<E;x++){const T=g[x],M=u[x];let S;const w=h[x];if(M.mode===Si.TRIANGLES||M.mode===Si.TRIANGLE_STRIP||M.mode===Si.TRIANGLE_FAN||M.mode===void 0)S=c.isSkinnedMesh===!0?new bb(T,w):new Jn(T,w),S.isSkinnedMesh===!0&&S.normalizeSkinWeights(),M.mode===Si.TRIANGLE_STRIP?S.geometry=mx(S.geometry,Gx):M.mode===Si.TRIANGLE_FAN&&(S.geometry=mx(S.geometry,Dp));else if(M.mode===Si.LINES)S=new Nb(T,w);else if(M.mode===Si.LINE_STRIP)S=new nm(T,w);else if(M.mode===Si.LINE_LOOP)S=new Lb(T,w);else if(M.mode===Si.POINTS)S=new Ub(T,w);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+M.mode);Object.keys(S.geometry.morphAttributes).length>0&&j2(S,c),S.name=n.createUniqueName(c.name||"mesh_"+e),Ki(S,c),M.extensions&&js(o,S,M),n.assignFinalMaterial(S),v.push(S)}for(let x=0,E=v.length;x<E;x++)n.associations.set(v[x],{meshes:e,primitives:x});if(v.length===1)return c.extensions&&js(o,v[0],c),v[0];const _=new Qs;c.extensions&&js(o,_,c),n.associations.set(_,{meshes:e});for(let x=0,E=v.length;x<E;x++)_.add(v[x]);return _})}loadCamera(e){let n;const a=this.json.cameras[e],o=a[a.type];if(!o){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return a.type==="perspective"?n=new Gn(nb.radToDeg(o.yfov),o.aspectRatio||1,o.znear||1,o.zfar||2e6):a.type==="orthographic"&&(n=new Gu(-o.xmag,o.xmag,o.ymag,-o.ymag,o.znear,o.zfar)),a.name&&(n.name=this.createUniqueName(a.name)),Ki(n,a),Promise.resolve(n)}loadSkin(e){const n=this.json.skins[e],a=[];for(let o=0,c=n.joints.length;o<c;o++)a.push(this._loadNodeShallow(n.joints[o]));return n.inverseBindMatrices!==void 0?a.push(this.getDependency("accessor",n.inverseBindMatrices)):a.push(null),Promise.all(a).then(function(o){const c=o.pop(),u=o,d=[],p=[];for(let h=0,g=u.length;h<g;h++){const v=u[h];if(v){d.push(v);const _=new gt;c!==null&&_.fromArray(c.array,h*16),p.push(_)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',n.joints[h])}return new em(d,p)})}loadAnimation(e){const n=this.json,a=this,o=n.animations[e],c=o.name?o.name:"animation_"+e,u=[],d=[],p=[],h=[],g=[];for(let v=0,_=o.channels.length;v<_;v++){const x=o.channels[v],E=o.samplers[x.sampler],T=x.target,M=T.node,S=o.parameters!==void 0?o.parameters[E.input]:E.input,w=o.parameters!==void 0?o.parameters[E.output]:E.output;T.node!==void 0&&(u.push(this.getDependency("node",M)),d.push(this.getDependency("accessor",S)),p.push(this.getDependency("accessor",w)),h.push(E),g.push(T))}return Promise.all([Promise.all(u),Promise.all(d),Promise.all(p),Promise.all(h),Promise.all(g)]).then(function(v){const _=v[0],x=v[1],E=v[2],T=v[3],M=v[4],S=[];for(let N=0,D=_.length;N<D;N++){const F=_[N],z=x[N],P=E[N],A=T[N],L=M[N];if(F===void 0)continue;F.updateMatrix&&F.updateMatrix();const fe=a._createAnimationTracks(F,z,P,A,L);if(fe)for(let H=0;H<fe.length;H++)S.push(fe[H])}const w=new Kb(c,void 0,S);return Ki(w,o),w})}createNodeMesh(e){const n=this.json,a=this,o=n.nodes[e];return o.mesh===void 0?null:a.getDependency("mesh",o.mesh).then(function(c){const u=a._getNodeRef(a.meshCache,o.mesh,c);return o.weights!==void 0&&u.traverse(function(d){if(d.isMesh)for(let p=0,h=o.weights.length;p<h;p++)d.morphTargetInfluences[p]=o.weights[p]}),u})}loadNode(e){const n=this.json,a=this,o=n.nodes[e],c=a._loadNodeShallow(e),u=[],d=o.children||[];for(let h=0,g=d.length;h<g;h++)u.push(a.getDependency("node",d[h]));const p=o.skin===void 0?Promise.resolve(null):a.getDependency("skin",o.skin);return Promise.all([c,Promise.all(u),p]).then(function(h){const g=h[0],v=h[1],_=h[2];_!==null&&g.traverse(function(x){x.isSkinnedMesh&&x.bind(_,K2)});for(let x=0,E=v.length;x<E;x++)g.add(v[x]);if(g.userData.pivot!==void 0&&v.length>0){const x=g.userData.pivot,E=v[0];g.pivot=new Z().fromArray(x),g.position.x-=x[0],g.position.y-=x[1],g.position.z-=x[2],E.position.set(0,0,0),delete g.userData.pivot}return g})}_loadNodeShallow(e){const n=this.json,a=this.extensions,o=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const c=n.nodes[e],u=c.name?o.createUniqueName(c.name):"",d=[],p=o._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(e)});return p&&d.push(p),c.camera!==void 0&&d.push(o.getDependency("camera",c.camera).then(function(h){return o._getNodeRef(o.cameraCache,c.camera,h)})),o._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(e)}).forEach(function(h){d.push(h)}),this.nodeCache[e]=Promise.all(d).then(function(h){let g;if(c.isBone===!0?g=new Zx:h.length>1?g=new Qs:h.length===1?g=h[0]:g=new en,g!==h[0])for(let v=0,_=h.length;v<_;v++)g.add(h[v]);if(c.name&&(g.userData.name=c.name,g.name=u),Ki(g,c),c.extensions&&js(a,g,c),c.matrix!==void 0){const v=new gt;v.fromArray(c.matrix),g.applyMatrix4(v)}else c.translation!==void 0&&g.position.fromArray(c.translation),c.rotation!==void 0&&g.quaternion.fromArray(c.rotation),c.scale!==void 0&&g.scale.fromArray(c.scale);if(!o.associations.has(g))o.associations.set(g,{});else if(c.mesh!==void 0&&o.meshCache.refs[c.mesh]>1){const v=o.associations.get(g);o.associations.set(g,{...v})}return o.associations.get(g).nodes=e,g}),this.nodeCache[e]}loadScene(e){const n=this.extensions,a=this.json.scenes[e],o=this,c=new Qs;a.name&&(c.name=o.createUniqueName(a.name)),Ki(c,a),a.extensions&&js(n,c,a);const u=a.nodes||[],d=[];for(let p=0,h=u.length;p<h;p++)d.push(o.getDependency("node",u[p]));return Promise.all(d).then(function(p){for(let g=0,v=p.length;g<v;g++){const _=p[g];_.parent!==null?c.add(_2(_)):c.add(_)}const h=g=>{const v=new Map;for(const[_,x]of o.associations)(_ instanceof Hi||_ instanceof Rn)&&v.set(_,x);return g.traverse(_=>{const x=o.associations.get(_);x!=null&&v.set(_,x)}),v};return o.associations=h(c),c})}_createAnimationTracks(e,n,a,o,c){const u=[],d=e.name?e.name:e.uuid,p=[];vs[c.path]===vs.weights?e.traverse(function(_){_.morphTargetInfluences&&p.push(_.name?_.name:_.uuid)}):p.push(d);let h;switch(vs[c.path]){case vs.weights:h=lo;break;case vs.rotation:h=co;break;case vs.translation:case vs.scale:h=uo;break;default:a.itemSize===1?h=lo:h=uo;break}const g=o.interpolation!==void 0?k2[o.interpolation]:Cl,v=this._getArrayFromAccessor(a);for(let _=0,x=p.length;_<x;_++){const E=new h(p[_]+"."+vs[c.path],n.array,v,g);o.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(E),u.push(E)}return u}_getArrayFromAccessor(e){let n=e.array;if(e.normalized){const a=Bp(n.constructor),o=new Float32Array(n.length);for(let c=0,u=n.length;c<u;c++)o[c]=n[c]*a;n=o}return n}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(a){const o=this instanceof co?G2:pS;return new o(this.times,this.values,this.getValueSize()/3,a)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Q2(r,e,n){const a=e.attributes,o=new Ei;if(a.POSITION!==void 0){const d=n.json.accessors[a.POSITION],p=d.min,h=d.max;if(p!==void 0&&h!==void 0){if(o.set(new Z(p[0],p[1],p[2]),new Z(h[0],h[1],h[2])),d.normalized){const g=Bp(to[d.componentType]);o.min.multiplyScalar(g),o.max.multiplyScalar(g)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const c=e.targets;if(c!==void 0){const d=new Z,p=new Z;for(let h=0,g=c.length;h<g;h++){const v=c[h];if(v.POSITION!==void 0){const _=n.json.accessors[v.POSITION],x=_.min,E=_.max;if(x!==void 0&&E!==void 0){if(p.setX(Math.max(Math.abs(x[0]),Math.abs(E[0]))),p.setY(Math.max(Math.abs(x[1]),Math.abs(E[1]))),p.setZ(Math.max(Math.abs(x[2]),Math.abs(E[2]))),_.normalized){const T=Bp(to[_.componentType]);p.multiplyScalar(T)}d.max(p)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}o.expandByVector(d)}r.boundingBox=o;const u=new sa;o.getCenter(u.center),u.radius=o.min.distanceTo(o.max)/2,r.boundingSphere=u}function Sx(r,e,n){const a=e.attributes,o=[];function c(u,d){return n.getDependency("accessor",u).then(function(p){r.setAttribute(d,p)})}for(const u in a){const d=Pp[u]||u.toLowerCase();d in r.attributes||o.push(c(a[u],d))}if(e.indices!==void 0&&!r.index){const u=n.getDependency("accessor",e.indices).then(function(d){r.setIndex(d)});o.push(u)}return At.workingColorSpace!==Xn&&"COLOR_0"in a&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${At.workingColorSpace}" not supported.`),Ki(r,e),Q2(r,e,n),Promise.all(o).then(function(){return e.targets!==void 0?W2(r,e.targets,n):r})}const J2="/ikea-app/assets/Ivar1-CAShUIEK.glb";function $2(){const r=Bi.useRef(null);return Bi.useEffect(()=>{const e=r.current;if(!e)return;const n=e.clientWidth,a=e.clientHeight/1.1,o=new g2({antialias:!0,alpha:!0});o.setPixelRatio(window.devicePixelRatio),o.setSize(n,a),o.shadowMap.enabled=!0,o.shadowMap.type=Ax,o.outputColorSpace=An,o.toneMapping=Hp,o.toneMappingExposure=1.4,e.appendChild(o.domElement);const c=new gb;c.background=new st("#f5f5f3");const u=new Gn(45,n/a,.1,100);u.position.set(0,1.2,3.5);const d=new cT(16777215,.6);c.add(d);const p=new Du(16774368,2.2);p.position.set(-3,5,4),p.castShadow=!0,p.shadow.mapSize.width=2048,p.shadow.mapSize.height=2048,p.shadow.camera.near=.5,p.shadow.camera.far=20,p.shadow.bias=-.001,c.add(p);const h=new Du(13691135,1);h.position.set(4,2,-2),c.add(h);const g=new Du(16769200,.6);g.position.set(0,-2,-4),c.add(g);const v=new iT(16777215,13682864,.4);c.add(v);const _=new Ul(10,10),x=new Ib({opacity:.15}),E=new Jn(_,x);E.rotation.x=-Math.PI/2,E.position.y=-.01,E.receiveShadow=!0,c.add(E);const T={target:new Z(0,.8,0),spherical:new MT(3.5,Math.PI/3,0)};new v2().load(J2,Q=>{const ve=Q.scene;ve.traverse(Fe=>{Fe.isMesh&&(Fe.castShadow=!0,Fe.receiveShadow=!0,Fe.material&&(Fe.material.needsUpdate=!0))});const U=new Ei().setFromObject(ve),j=U.getCenter(new Z),ge=U.getSize(new Z),Ue=2.5/Math.max(ge.x,ge.y,ge.z);ve.scale.setScalar(Ue),ve.position.sub(j.multiplyScalar(Ue));const ne=new Ei().setFromObject(ve);ve.position.y-=ne.min.y,c.add(ve);const be=new Ei().setFromObject(ve).getCenter(new Z);T.target.copy(be),F()},void 0,Q=>console.error("GLB load error:",Q));let S=!1,w={x:0,y:0},N=null,D=null;function F(){const Q=new Z().setFromSpherical(T.spherical);u.position.copy(Q.add(T.target)),u.lookAt(T.target)}F();function z(Q){S=!0,w.x=Q.clientX,w.y=Q.clientY}function P(Q){if(!S)return;const ve=Q.clientX-w.x,U=Q.clientY-w.y;T.spherical.theta-=ve*.008,T.spherical.phi=Math.max(.15,Math.min(Math.PI-.1,T.spherical.phi+U*.008)),w.x=Q.clientX,w.y=Q.clientY,F()}function A(){S=!1}function L(Q){T.spherical.radius=Math.max(1.2,Math.min(8,T.spherical.radius+Q.deltaY*.005)),F()}function fe(Q){const ve=Q[0].clientX-Q[1].clientX,U=Q[0].clientY-Q[1].clientY;return Math.sqrt(ve*ve+U*U)}function H(Q){return{x:(Q[0].clientX+Q[1].clientX)/2,y:(Q[0].clientY+Q[1].clientY)/2}}function $(Q){Q.preventDefault(),Q.touches.length===1?(S=!0,w.x=Q.touches[0].clientX,w.y=Q.touches[0].clientY):Q.touches.length===2&&(S=!1,N=fe(Q.touches),D=H(Q.touches))}function ae(Q){if(Q.preventDefault(),Q.touches.length===1&&S){const ve=Q.touches[0].clientX-w.x,U=Q.touches[0].clientY-w.y;T.spherical.theta-=ve*.008,T.spherical.phi=Math.max(.15,Math.min(Math.PI-.1,T.spherical.phi+U*.008)),w.x=Q.touches[0].clientX,w.y=Q.touches[0].clientY,F()}else if(Q.touches.length===2&&N!==null){const ve=fe(Q.touches),U=N-ve;T.spherical.radius=Math.max(1.2,Math.min(8,T.spherical.radius+U*.012)),N=ve;const j=H(Q.touches);if(D){const ge=j.x-D.x,Ae=j.y-D.y,Ue=T.spherical.radius*.0018,ne=new Z,xe=new Z;u.matrix.extractBasis(ne,xe,new Z),T.target.addScaledVector(ne,-ge*Ue),T.target.addScaledVector(xe,Ae*Ue)}D=j,F()}}function ue(Q){Q.touches.length<2&&(N=null,D=null),Q.touches.length===0&&(S=!1)}const J=o.domElement;J.addEventListener("pointerdown",z),window.addEventListener("pointermove",P),window.addEventListener("pointerup",A),J.addEventListener("wheel",L,{passive:!0}),J.addEventListener("touchstart",$,{passive:!1}),J.addEventListener("touchmove",ae,{passive:!1}),J.addEventListener("touchend",ue);let I;function B(){I=requestAnimationFrame(B),o.render(c,u)}B();function ce(){const Q=e.clientWidth,ve=e.clientHeight;u.aspect=Q/ve,u.updateProjectionMatrix(),o.setSize(Q,ve)}return window.addEventListener("resize",ce),()=>{cancelAnimationFrame(I),J.removeEventListener("pointerdown",z),window.removeEventListener("pointermove",P),window.removeEventListener("pointerup",A),J.removeEventListener("wheel",L),J.removeEventListener("touchstart",$),J.removeEventListener("touchmove",ae),J.removeEventListener("touchend",ue),window.removeEventListener("resize",ce),o.dispose(),e.contains(J)&&e.removeChild(J)}},[]),Y.jsx("div",{ref:r,style:{width:"100%",flex:1,borderRadius:"8px",overflow:"hidden",touchAction:"none",cursor:"grab"}})}function e3(r){return ys({attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M7.56 1h.88l6.54 12.26-.44.74H1.44L1 13.26 7.56 1zM8 2.28L2.28 13H13.7L8 2.28zM8.625 12v-1h-1.25v1h1.25zm-1.25-2V6h1.25v4h-1.25z"},child:[]}]})(r)}const yx="/ikea-app/assets/warningImage1-BcTSUnIf.jpg",t3="/ikea-app/assets/warningImage2-DL7StSJK.jpg",n3="/ikea-app/assets/warningImage3-BdEYGEyG.jpg";function i3(){const[r,e]=Bi.useState("main"),[n,a]=Bi.useState("none"),o=12,[c,u]=Bi.useState(1),[d,p]=Bi.useState(null);function h(){e("main"),u(1)}return Y.jsxs("div",{className:"mainContainer",children:[n!=="none"&&Y.jsxs("div",{className:"overlay",children:[Y.jsx("div",{onClick:()=>a("none"),className:"overlayCloseBackground"}),Y.jsx("div",{className:"overlayContainer",children:Y.jsxs("div",{className:"overlayContent",children:[n==="rotate"&&Y.jsxs(Y.Fragment,{children:[Y.jsx("div",{className:"topRotateOverlayBar",children:Y.jsx("p",{children:"Rotera möbel"})}),Y.jsx("div",{className:"rotateOverlayImageContainer",children:Y.jsx("img",{src:yx,alt:"Ivar the Boneless"})}),Y.jsxs("div",{className:"bottomRotateOverlayNav",children:[Y.jsx("button",{className:"rotateOverlayCloseButton",children:Y.jsx(Yc,{size:"3rem"})}),Y.jsx("button",{className:"rotateOverlayNextButton",children:Y.jsx(td,{size:"3rem"})})]})]}),n==="info"&&Y.jsxs(Y.Fragment,{children:[Y.jsxs("div",{className:"topOverlayBar",children:[Y.jsx("button",{className:"overlayCloseButton",onClick:()=>a("none"),children:Y.jsx(Yc,{size:"3rem"})}),Y.jsx("p",{children:"Information"})]}),Y.jsxs("div",{className:"infoWarningContainer",children:[Y.jsx("div",{className:"warningIconContainer",children:Y.jsx(e3,{size:"3rem"})}),Y.jsxs("div",{className:"infoWarningTextContainer",children:[Y.jsx("p",{children:"VARNING!"}),Y.jsx("p",{children:"Allvarliga eller livsfarliga klämskador kan uppstå från möbler som välter. För att förhindra att möbeln välter måste den användas med medföljande väggfäste."}),Y.jsx("p",{children:"Skruv och plugg för väggen ingår inte. Använd skruv och plugg som passar dina väggar. Om du är osäker, sök professionell rådgivning. Läs och följ varje steg i anvisningen noga."})]})]}),Y.jsx("img",{src:yx,alt:"Warning",srcSet:""}),Y.jsx("img",{src:t3,alt:"Warning",srcSet:""}),Y.jsx("img",{src:n3,alt:"Warning",srcSet:""})]}),n==="zoomIn"&&Y.jsxs(Y.Fragment,{children:[Y.jsxs("div",{className:"topOverlayBar",children:[Y.jsx("button",{className:"overlayCloseButton",onClick:()=>a("none"),children:Y.jsx(Yc,{size:"3rem"})}),Y.jsx("p",{children:"Zoom in"})]}),Y.jsx(tE,{})]}),n==="view3D"&&Y.jsxs(Y.Fragment,{children:[Y.jsxs("div",{className:"topOverlayBar",children:[Y.jsx("button",{className:"overlayCloseButton",onClick:()=>a("none"),children:Y.jsx(Yc,{size:"3rem"})}),Y.jsx("p",{children:"Visa i 3D"})]}),Y.jsx("div",{className:"view3DHintText",children:Y.jsx("p",{children:"Dra för att rotera · Nyp för att zooma"})}),Y.jsx($2,{})]})]})})]}),Y.jsxs("header",{className:"topNavContainer",children:[r==="build"&&Y.jsxs(Y.Fragment,{children:[Y.jsx("button",{onClick:()=>h(),type:"button",className:"backButton",children:Y.jsx(Kc,{})}),Y.jsx("h2",{children:"IVAR"}),Y.jsx("button",{onClick:()=>a("info"),type:"button",className:"infoButton",children:Y.jsx(Q_,{})})]}),r==="main"&&Y.jsxs(Y.Fragment,{children:[Y.jsx("button",{style:{opacity:0},onClick:()=>h(),type:"button",className:"backButton",children:Y.jsx(Kc,{})}),Y.jsx("h2",{children:"IVAR"}),Y.jsx("button",{onClick:()=>a("rotate"),type:"button",className:"infoButton",children:Y.jsx(Q_,{})})]})]}),r==="main"&&Y.jsx($M,{onZoom:p,onZoomOverlay:a,on3dOverlay:a}),r==="build"&&Y.jsx(eE,{onZoom:p,onZoomOverlay:a}),Y.jsxs("nav",{className:"bottomNav",children:[r==="main"&&Y.jsxs("button",{onClick:()=>e("build"),className:"beginButton",children:[Y.jsx("p",{children:"BÖRJA BYGG"}),Y.jsx(td,{})]}),r==="build"&&Y.jsxs(Y.Fragment,{children:[Y.jsxs("button",{onClick:()=>c<o&&u(c+1),className:"beginButton",children:[Y.jsx("p",{children:"NÄSTA STEG"}),Y.jsx(td,{})]}),Y.jsx("div",{className:"progressBarContainer",children:Y.jsx("div",{className:"progressBar",children:Y.jsx("div",{className:"progressBarFill",style:{width:`${c/o*100}%`}})})}),Y.jsxs("div",{className:"bottomNavButtonsContainer",children:[c===1&&Y.jsx(Y.Fragment,{children:Y.jsxs("button",{style:{opacity:0,pointerEvents:"none"},onClick:()=>c>1&&u(c-1),className:"stepBackButton",children:[Y.jsx(Kc,{}),Y.jsx("p",{children:"Föregående"})]})}),c>1&&Y.jsx(Y.Fragment,{children:Y.jsxs("button",{onClick:()=>c>1&&u(c-1),className:"stepBackButton",children:[Y.jsx(Kc,{}),Y.jsx("p",{children:"Föregående"})]})}),Y.jsxs("p",{className:"stepCounter",children:[c," av ",o]}),Y.jsxs("button",{className:"overviewButton",children:[Y.jsx("p",{children:"Översikt"}),Y.jsx(BM,{})]})]})]})]})]})}wM.createRoot(document.getElementById("root")).render(Y.jsx(Bi.StrictMode,{children:Y.jsx(i3,{})}));
