!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("react"),require("redux")):"function"==typeof define&&define.amd?define(["exports","react","redux"],e):e(t.ReactRedux=t.ReactRedux||{},t.React,t.Redux)}(this,function(t,e,n){"use strict";function r(t){return function(){return t}}function o(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"store",r=arguments[1]||n+"Subscription",o=function(t){function o(e,r){q(this,o);var i=D(this,t.call(this,e,r));return i[n]=e.store,i}return M(o,t),o.prototype.getChildContext=function(){var t;return t={},t[n]=this[n],t[r]=null,t},o.prototype.render=function(){return e.Children.only(this.props.children)},o}(e.Component);return o.propTypes={store:j.isRequired,children:R.element.isRequired},o.childContextTypes=(t={},t[n]=j.isRequired,t[r]=x,t),o}function i(){var t=[],e=[];return{clear:function(){e=Y,t=Y},notify:function(){for(var n=t=e,r=0;n.length>r;r++)n[r]()},get:function(){return e},subscribe:function(n){var r=!0;return e===t&&(e=t.slice()),e.push(n),function(){r&&t!==Y&&(r=!1,e===t&&(e=t.slice()),e.splice(e.indexOf(n),1))}}}}function s(){}function u(t,e){var n={run:function(r){try{var o=t(e.getState(),r);(o!==n.props||n.error)&&(n.shouldComponentUpdate=!0,n.props=o,n.error=null)}catch(t){n.shouldComponentUpdate=!0,n.error=t}}};return n}function p(t){var n,r,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=o.getDisplayName,p=void 0===i?function(t){return"ConnectAdvanced("+t+")"}:i,a=o.methodName,c=void 0===a?"connectAdvanced":a,d=o.renderCountProp,f=void 0===d?void 0:d,l=o.shouldHandleStateChanges,h=void 0===l||l,y=o.storeKey,b=void 0===y?"store":y,v=o.withRef,m=void 0!==v&&v,P=U(o,["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef"]),O=b+"Subscription",g=z++,S=(n={},n[b]=j,n[O]=x,n),C=(r={},r[O]=x,r);return function(n){V("function"==typeof n,"You must pass a component to the function returned by connect. Instead received "+JSON.stringify(n));var r=n.displayName||n.name||"Component",o=p(r),i=N({},P,{getDisplayName:p,methodName:c,renderCountProp:f,shouldHandleStateChanges:h,storeKey:b,withRef:m,displayName:o,wrappedComponentName:r,WrappedComponent:n}),a=function(r){function p(t,e){q(this,p);var n=D(this,r.call(this,t,e));return n.version=g,n.state={},n.renderCount=0,n.store=t[b]||e[b],n.propsMode=!!t[b],n.setWrappedInstance=n.setWrappedInstance.bind(n),V(n.store,'Could not find "'+b+'" in either the context or props of "'+o+'". Either wrap the root component in a <Provider>, or explicitly pass "'+b+'" as a prop to "'+o+'".'),n.initSelector(),n.initSubscription(),n}return M(p,r),p.prototype.getChildContext=function(){var t,e=this.propsMode?null:this.subscription;return t={},t[O]=e||this.context[O],t},p.prototype.componentDidMount=function(){h&&(this.subscription.trySubscribe(),this.selector.run(this.props),this.selector.shouldComponentUpdate&&this.forceUpdate())},p.prototype.componentWillReceiveProps=function(t){this.selector.run(t)},p.prototype.shouldComponentUpdate=function(){return this.selector.shouldComponentUpdate},p.prototype.componentWillUnmount=function(){this.subscription&&this.subscription.tryUnsubscribe(),this.subscription=null,this.notifyNestedSubs=s,this.store=null,this.selector.run=s,this.selector.shouldComponentUpdate=!1},p.prototype.getWrappedInstance=function(){return V(m,"To access the wrapped instance, you need to specify { withRef: true } in the options argument of the "+c+"() call."),this.wrappedInstance},p.prototype.setWrappedInstance=function(t){this.wrappedInstance=t},p.prototype.initSelector=function(){var e=t(this.store.dispatch,i);(this.selector=u(e,this.store)).run(this.props)},p.prototype.initSubscription=function(){if(h){var t=(this.propsMode?this.props:this.context)[O];this.subscription=new J(this.store,t,this.onStateChange.bind(this)),this.notifyNestedSubs=this.subscription.notifyNestedSubs.bind(this.subscription)}},p.prototype.onStateChange=function(){this.selector.run(this.props),this.selector.shouldComponentUpdate?(this.componentDidUpdate=this.notifyNestedSubsOnComponentDidUpdate,this.setState(G)):this.notifyNestedSubs()},p.prototype.notifyNestedSubsOnComponentDidUpdate=function(){this.componentDidUpdate=void 0,this.notifyNestedSubs()},p.prototype.isSubscribed=function(){return!!this.subscription&&this.subscription.isSubscribed()},p.prototype.addExtraProps=function(t){if(!(m||f||this.propsMode&&this.subscription))return t;var e=N({},t);return m&&(e.ref=this.setWrappedInstance),f&&(e[f]=this.renderCount++),this.propsMode&&this.subscription&&(e[O]=this.subscription),e},p.prototype.render=function(){var t=this.selector;if(t.shouldComponentUpdate=!1,t.error)throw t.error;return e.createElement(n,this.addExtraProps(t.props))},p}(e.Component);return a.WrappedComponent=n,a.displayName=o,a.childContextTypes=C,a.contextTypes=S,a.propTypes=S,L(a,n)}}function a(t,e){return t===e?0!==t||0!==e||1/t==1/e:t!==t&&e!==e}function c(t,e){if(a(t,e))return!0;if("object"!=typeof t||null===t||"object"!=typeof e||null===e)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(var o=0;n.length>o;o++)if(!Q.call(e,n[o])||!a(t[n[o]],e[n[o]]))return!1;return!0}function d(t){return function(e,n){function r(){return o}var o=t(e,n);return r.dependsOnOwnProps=!1,r}}function f(t){return null!==t.dependsOnOwnProps&&void 0!==t.dependsOnOwnProps?!!t.dependsOnOwnProps:1!==t.length}function l(t,e){return function(e,n){var r=function(t,e){return r.dependsOnOwnProps?r.mapToProps(t,e):r.mapToProps(t)};return r.dependsOnOwnProps=!0,r.mapToProps=function(e,n){r.mapToProps=t,r.dependsOnOwnProps=f(t);var o=r(e,n);return"function"==typeof o&&(r.mapToProps=o,r.dependsOnOwnProps=f(o),o=r(e,n)),o},r}}function h(t,e,n){return N({},n,t,e)}function y(t){return function(e,n){var r=n.pure,o=n.areMergedPropsEqual,i=!1,s=void 0;return function(e,n,u){var p=t(e,n,u);return i?r&&o(p,s)||(s=p):(i=!0,s=p),s}}}function b(t,e,n,r){return function(o,i){return n(t(o,i),e(r,i),i)}}function v(t,e,n,r,o){function i(o,i){return h=o,y=i,b=t(h,y),v=e(r,y),m=n(b,v,y),l=!0,m}function s(){return b=t(h,y),e.dependsOnOwnProps&&(v=e(r,y)),m=n(b,v,y)}function u(){return t.dependsOnOwnProps&&(b=t(h,y)),e.dependsOnOwnProps&&(v=e(r,y)),m=n(b,v,y)}function p(){var e=t(h,y),r=!f(e,b);return b=e,r&&(m=n(b,v,y)),m}function a(t,e){var n=!d(e,y),r=!c(t,h);return h=t,y=e,n&&r?s():n?u():r?p():m}var c=o.areStatesEqual,d=o.areOwnPropsEqual,f=o.areStatePropsEqual,l=!1,h=void 0,y=void 0,b=void 0,v=void 0,m=void 0;return function(t,e){return l?a(t,e):i(t,e)}}function m(t,e){var n=e.initMapStateToProps,r=e.initMapDispatchToProps,o=e.initMergeProps,i=U(e,["initMapStateToProps","initMapDispatchToProps","initMergeProps"]),s=n(t,i),u=r(t,i),p=o(t,i);return(i.pure?v:b)(s,u,p,t,i)}function P(t,e,n){for(var r=e.length-1;r>=0;r--){var o=e[r](t);if(o)return o}return function(e,r){throw Error("Invalid value of type "+typeof t+" for "+n+" argument when connecting component "+r.wrappedComponentName+".")}}function O(t,e){return t===e}var g=function(){};g.thatReturns=r,g.thatReturnsFalse=r(!1),g.thatReturnsTrue=r(!0),g.thatReturnsNull=r(null),g.thatReturnsThis=function(){return this},g.thatReturnsArgument=function(t){return t};var S=g,C=function(t){},w=function(t,e,n,r,o,i,s,u){if(C(e),!t){var p;if(void 0===e)p=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var a=[n,r,o,i,s,u],c=0;(p=Error(e.replace(/%s/g,function(){return a[c++]}))).name="Invariant Violation"}throw p.framesToPop=1,p}},T="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",E=function(){function t(t,e,n,r,o,i){i!==T&&w(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e};return n.checkPropTypes=S,n.PropTypes=n,n},R=function(t,e){return e={exports:{}},t(e,e.exports),e.exports}(function(t){t.exports=E()}),x=R.shape({trySubscribe:R.func.isRequired,tryUnsubscribe:R.func.isRequired,notifyNestedSubs:R.func.isRequired,isSubscribed:R.func.isRequired}),j=R.shape({subscribe:R.func.isRequired,dispatch:R.func.isRequired,getState:R.func.isRequired}),q=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},N=Object.assign||function(t){for(var e=1;arguments.length>e;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},M=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},U=function(t,e){var n={};for(var r in t)0>e.indexOf(r)&&Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},D=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},I=o(),_={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},W={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},F=Object.getOwnPropertySymbols,k=Object.prototype.propertyIsEnumerable,A=Object.getPrototypeOf,H=A&&A(Object),K=Object.getOwnPropertyNames,L=function t(e,n,r){if("string"!=typeof n){if(H){var o=A(n);o&&o!==H&&t(e,o,r)}var i=K(n);F&&(i=i.concat(F(n)));for(var s=0;i.length>s;++s){var u=i[s];if(!(_[u]||W[u]||r&&r[u])&&(k.call(n,u)||"function"==typeof n[u]))try{e[u]=n[u]}catch(t){}}return e}return e},V=function(t,e,n,r,o,i,s,u){if(!t){var p;if(void 0===e)p=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var a=[n,r,o,i,s,u],c=0;(p=Error(e.replace(/%s/g,function(){return a[c++]}))).name="Invariant Violation"}throw p.framesToPop=1,p}},Y=null,B={notify:function(){}},J=function(){function t(e,n,r){q(this,t),this.store=e,this.parentSub=n,this.onStateChange=r,this.unsubscribe=null,this.listeners=B}return t.prototype.addNestedSub=function(t){return this.trySubscribe(),this.listeners.subscribe(t)},t.prototype.notifyNestedSubs=function(){this.listeners.notify()},t.prototype.isSubscribed=function(){return!!this.unsubscribe},t.prototype.trySubscribe=function(){this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.onStateChange):this.store.subscribe(this.onStateChange),this.listeners=i())},t.prototype.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=B)},t}(),z=0,G={},Q=Object.prototype.hasOwnProperty,X="object"==typeof global&&global&&global.Object===Object&&global,Z="object"==typeof self&&self&&self.Object===Object&&self,$=(X||Z||Function("return this")(),Function.prototype.toString.call(Object),[function(t){return"function"==typeof t?l(t,"mapDispatchToProps"):void 0},function(t){return t?void 0:d(function(t){return{dispatch:t}})},function(t){return t&&"object"==typeof t?d(function(e){return n.bindActionCreators(t,e)}):void 0}]),tt=[function(t){return"function"==typeof t?l(t,"mapStateToProps"):void 0},function(t){return t?void 0:d(function(){return{}})}],et=[function(t){return"function"==typeof t?y(t):void 0},function(t){return t?void 0:function(){return h}}],nt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.connectHOC,n=void 0===e?p:e,r=t.mapStateToPropsFactories,o=void 0===r?tt:r,i=t.mapDispatchToPropsFactories,s=void 0===i?$:i,u=t.mergePropsFactories,a=void 0===u?et:u,d=t.selectorFactory,f=void 0===d?m:d;return function(t,e,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},u=i.pure,p=void 0===u||u,d=i.areStatesEqual,l=void 0===d?O:d,h=i.areOwnPropsEqual,y=void 0===h?c:h,b=i.areStatePropsEqual,v=void 0===b?c:b,m=i.areMergedPropsEqual,g=void 0===m?c:m,S=U(i,["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"]),C=P(t,o,"mapStateToProps"),w=P(e,s,"mapDispatchToProps"),T=P(r,a,"mergeProps");return n(f,N({methodName:"connect",getDisplayName:function(t){return"Connect("+t+")"},shouldHandleStateChanges:!!t,initMapStateToProps:C,initMapDispatchToProps:w,initMergeProps:T,pure:p,areStatesEqual:l,areOwnPropsEqual:y,areStatePropsEqual:v,areMergedPropsEqual:g},S))}}();t.Provider=I,t.createProvider=o,t.connectAdvanced=p,t.connect=nt,Object.defineProperty(t,"__esModule",{value:!0})});