(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{"+EG+":function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return s}));var r=n("mrSG"),o=n("q1tI"),i=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(r.__extends)(e,t),e.prototype.shouldComponentUpdate=function(){return!1},e.prototype.render=function(){return o.createElement("div",{style:{position:"fixed",zIndex:150,left:0,top:0},ref:this.props.reference})},e}(o.Component),s=o.createContext(null)},"/KDZ":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("mrSG"),o=n("q1tI"),i=function(t){function e(e){var n=t.call(this,e)||this;return n._handleChange=function(){n.forceUpdate()},n.state={query:window.matchMedia(n.props.rule)},n}return Object(r.__extends)(e,t),e.prototype.componentDidMount=function(){this._subscribe(this.state.query)},e.prototype.componentDidUpdate=function(t,e){this.state.query!==e.query&&(this._unsubscribe(e.query),this._subscribe(this.state.query))},e.prototype.componentWillUnmount=function(){this._unsubscribe(this.state.query)},e.prototype.render=function(){return this.props.children(this.state.query.matches)},e.getDerivedStateFromProps=function(t,e){return t.rule!==e.query.media?{query:window.matchMedia(t.rule)}:null},e.prototype._subscribe=function(t){t.addListener(this._handleChange)},e.prototype._unsubscribe=function(t){t.removeListener(this._handleChange)},e}(o.PureComponent)},"1TxM":function(t,e,n){"use strict";n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return l}));var r=n("q1tI"),o=n.n(r),i=n("17x9"),s=n.n(i),c=o.a.createContext({});function u(t,e){s.a.checkPropTypes(e,t,"context","RegistryContext")}function a(t){var e=t.validation,n=t.value;return u(n,e),o.a.createElement(c.Provider,{value:n},t.children)}function l(){return c}},"8d0Q":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return i}));var r=n("q1tI");function o(){var t=Object(r.useState)(!1),e=t[0],n=t[1];return[e,{onMouseOver:function(t){i(t)&&n(!0)},onMouseOut:function(t){i(t)&&n(!1)}}]}function i(t){return!t.currentTarget.contains(t.relatedTarget)}},AiMB:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return l}));var r=n("mrSG"),o=n("q1tI"),i=n("i8i4"),s=n("e3/o"),c=n("jAh7"),u=n("+EG+"),a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._uuid=Object(s.guid)(),e}return Object(r.__extends)(e,t),e.prototype.componentWillUnmount=function(){this._manager().removeWindow(this._uuid)},e.prototype.render=function(){var t=this._manager().ensureWindow(this._uuid,this.props.layerOptions);return t.style.top=this.props.top||"",t.style.bottom=this.props.bottom||"",t.style.left=this.props.left||"",t.style.right=this.props.right||"",t.style.pointerEvents=this.props.pointerEvents||"",i.createPortal(o.createElement(l.Provider,{value:this},this.props.children),t)},e.prototype.moveToTop=function(){this._manager().moveToTop(this._uuid)},
e.prototype._manager=function(){return null===this.context?Object(c.getRootOverlapManager)():this.context},e.contextType=u.b,e}(o.PureComponent),l=o.createContext(null)},HD8h:function(t,e,n){t.exports={item:"item-184T8X5A",label:"label-20cSBx98",labelRow:"labelRow-2fmEJqjl",toolbox:"toolbox-2H0D5bLi"}},KKsp:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("q1tI"),o=n("TSYQ"),i=n.n(o),s=n("NOPy");function c(t){var e=t.size,n=void 0===e?"normal":e,o=t.className;return r.createElement("div",{className:i()(s.separator,"small"===n&&s.small,"normal"===n&&s.normal,"large"===n&&s.large,o)})}},NOPy:function(t,e,n){t.exports={separator:"separator-25lkUpN-",small:"small-1IE19htj",normal:"normal-2jX5NqMI",large:"large-3vmbMIE7"}},U8H2:function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var r=n("mrSG"),o=(n("YFKU"),n("q1tI")),i=n("17x9"),s=n("Kxc7"),c=n("FQhm"),u=n("/DW5"),a=n("1TxM"),l={takeSnapshot:window.t("Take a snapshot")},p=Object(u.b)({keys:["Alt","S"],text:"{0} + {1}"}),d=Object(a.b)();function h(t){var e;return(e=function(e){function n(t,n){var r=e.call(this,t,n)||this;return r._handleClick=function(t){if(!s.enabled("show_dialog_on_snapshot_ready")){if(r.state.isProcessing)return;r.setState({isProcessing:!0}),c.subscribe("onScreenshotReady",(function(){return r.setState({isProcessing:!1})}),null,!0)}r.context.chartWidgetCollection.takeScreenshot()},Object(a.c)(n,{chartWidgetCollection:i.any.isRequired}),r.state={isProcessing:!1},r}return Object(r.__extends)(n,e),n.prototype.render=function(){var e=this.props,n=e.className,r=e.id,i=this.state.isProcessing;return o.createElement(t,{id:r,className:n,isProcessing:i,onClick:this._handleClick,tooltip:l.takeSnapshot,hotkey:p})},n}(o.PureComponent)).contextType=d,e}},X0gx:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n("q1tI"),o=n.n(r),i=n("tWVy"),s=o.a.createContext(i.a)},XfUw:function(t,e){t.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" d="M9 2.13l1.903 3.855.116.236.26.038 4.255.618-3.079 3.001-.188.184.044.259.727 4.237-3.805-2L9 12.434l-.233.122-3.805 2.001.727-4.237.044-.26-.188-.183-3.079-3.001 4.255-.618.26-.038.116-.236L9 2.13z"/></svg>'},dhVi:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n("nPPD"),o=n("v1bN"),i=n("HD8h"),s=Object(r.a)(o,i)},fEjm:function(t,e,n){t.exports={favorite:"favorite-2V8VHwKe",disabled:"disabled-3ebwimbb",active:"active-3pQAvYvT",checked:"checked-2bhy04CF"}},"koZ+":function(t,e){
t.exports='<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.118 6a.5.5 0 0 0-.447.276L9.809 8H5.5A1.5 1.5 0 0 0 4 9.5v10A1.5 1.5 0 0 0 5.5 21h16a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 21.5 8h-4.309l-.862-1.724A.5.5 0 0 0 15.882 6h-4.764zm-1.342-.17A1.5 1.5 0 0 1 11.118 5h4.764a1.5 1.5 0 0 1 1.342.83L17.809 7H21.5A2.5 2.5 0 0 1 24 9.5v10a2.5 2.5 0 0 1-2.5 2.5h-16A2.5 2.5 0 0 1 3 19.5v-10A2.5 2.5 0 0 1 5.5 7h3.691l.585-1.17z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 18a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zm0 1a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9z"/></svg>'},nPPD:function(t,e,n){"use strict";function r(t,e,n){void 0===n&&(n={});for(var r=Object.assign({},e),o=0,i=Object.keys(e);o<i.length;o++){var s=i[o],c=n[s]||s;c in t&&(r[s]=[t[c],e[s]].join(" "))}return r}function o(t,e,n){return void 0===n&&(n={}),Object.assign({},t,r(t,e,n))}n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return o}))},pr86:function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var r=n("mrSG"),o=(n("YFKU"),n("q1tI")),i=n("TSYQ"),s=n("Iivm"),c=n("sg5d"),u=n("XfUw"),a=n("fEjm"),l={add:window.t("Add to favorites"),remove:window.t("Remove from favorites")};function p(t){var e=t.className,n=t.isFilled,p=t.isActive,d=t.onClick,h=Object(r.__rest)(t,["className","isFilled","isActive","onClick"]);return o.createElement(s.Icon,Object(r.__assign)({},h,{className:i(a.favorite,"apply-common-tooltip",n&&a.checked,p&&a.active,e),icon:n?c:u,onClick:d,title:n?l.remove:l.add}))}},sg5d:function(t,e){t.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path fill="currentColor" d="M9 1l2.35 4.76 5.26.77-3.8 3.7.9 5.24L9 13l-4.7 2.47.9-5.23-3.8-3.71 5.25-.77L9 1z"/></svg>'}}]);