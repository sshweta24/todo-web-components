!function(e){function t(e){delete installedChunks[e]}function n(e){var t=document.getElementsByTagName("head")[0],n=document.createElement("script");n.type="text/javascript",n.charset="utf-8",n.src=p.p+""+e+"."+w+".hot-update.js",t.appendChild(n)}function o(e){return e=e||1e4,new Promise(function(t,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var o=new XMLHttpRequest,r=p.p+""+w+".hot-update.json";o.open("GET",r,!0),o.timeout=e,o.send(null)}catch(e){return n(e)}o.onreadystatechange=function(){if(4===o.readyState)if(0===o.status)n(new Error("Manifest request to "+r+" timed out."));else if(404===o.status)t();else if(200!==o.status&&304!==o.status)n(new Error("Manifest request to "+r+" failed."));else{try{var e=JSON.parse(o.responseText)}catch(e){return void n(e)}t(e)}}})}function r(e){var t=H[e];if(!t)return p;var n=function(n){return t.hot.active?(H[n]?H[n].parents.indexOf(e)<0&&H[n].parents.push(e):(j=[e],b=n),t.children.indexOf(n)<0&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),j=[]),p(n)};for(var o in p)Object.prototype.hasOwnProperty.call(p,o)&&"e"!==o&&Object.defineProperty(n,o,function(e){return{configurable:!0,enumerable:!0,get:function(){return p[e]},set:function(t){p[e]=t}}}(o));return n.e=function(e){function t(){P--,"prepare"===E&&(D[e]||l(e),0===P&&0===S&&f())}return"ready"===E&&c("prepare"),P++,p.e(e).then(t,function(e){throw t(),e})},n}function i(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:b!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var o=0;o<e.length;o++)t._acceptedDependencies[e[o]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:s,apply:d,status:function(e){if(!e)return E;x.push(e)},addStatusHandler:function(e){x.push(e)},removeStatusHandler:function(e){var t=x.indexOf(e);t>=0&&x.splice(t,1)},data:g[e]};return b=void 0,t}function c(e){E=e;for(var t=0;t<x.length;t++)x[t].call(null,e)}function a(e){return+e+""===e?+e:e}function s(e){if("idle"!==E)throw new Error("check() is only allowed in idle status");return _=e,c("check"),o(O).then(function(e){if(!e)return c("idle"),null;M={},D={},T=e.c,v=e.h,c("prepare");var t=new Promise(function(e,t){h={resolve:e,reject:t}});m={};return l(0),"prepare"===E&&0===P&&0===S&&f(),t})}function u(e,t){if(T[e]&&M[e]){M[e]=!1;for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(m[n]=t[n]);0==--S&&0===P&&f()}}function l(e){T[e]?(M[e]=!0,S++,n(e)):D[e]=!0}function f(){c("ready");var e=h;if(h=null,e)if(_)Promise.resolve().then(function(){return d(_)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in m)Object.prototype.hasOwnProperty.call(m,n)&&t.push(a(n));e.resolve(t)}}function d(n){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];e.indexOf(o)<0&&e.push(o)}}if("ready"!==E)throw new Error("apply() is only allowed in ready status");n=n||{};var r,i,s,u,l,f={},d=[],y={},b=function(){console.warn("[HMR] unexpected require("+_.moduleId+") to disposed module")};for(var h in m)if(Object.prototype.hasOwnProperty.call(m,h)){l=a(h);var _;_=m[h]?function(e){for(var t=[e],n={},r=t.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var i=r.pop(),c=i.id,a=i.chain;if((u=H[c])&&!u.hot._selfAccepted){if(u.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:c};if(u.hot._main)return{type:"unaccepted",chain:a,moduleId:c};for(var s=0;s<u.parents.length;s++){var l=u.parents[s],f=H[l];if(f){if(f.hot._declinedDependencies[c])return{type:"declined",chain:a.concat([l]),moduleId:c,parentId:l};t.indexOf(l)>=0||(f.hot._acceptedDependencies[c]?(n[l]||(n[l]=[]),o(n[l],[c])):(delete n[l],t.push(l),r.push({chain:a.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}(l):{type:"disposed",moduleId:h};var O=!1,k=!1,x=!1,S="";switch(_.chain&&(S="\nUpdate propagation: "+_.chain.join(" -> ")),_.type){case"self-declined":n.onDeclined&&n.onDeclined(_),n.ignoreDeclined||(O=new Error("Aborted because of self decline: "+_.moduleId+S));break;case"declined":n.onDeclined&&n.onDeclined(_),n.ignoreDeclined||(O=new Error("Aborted because of declined dependency: "+_.moduleId+" in "+_.parentId+S));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(_),n.ignoreUnaccepted||(O=new Error("Aborted because "+l+" is not accepted"+S));break;case"accepted":n.onAccepted&&n.onAccepted(_),k=!0;break;case"disposed":n.onDisposed&&n.onDisposed(_),x=!0;break;default:throw new Error("Unexception type "+_.type)}if(O)return c("abort"),Promise.reject(O);if(k){y[l]=m[l],o(d,_.outdatedModules);for(l in _.outdatedDependencies)Object.prototype.hasOwnProperty.call(_.outdatedDependencies,l)&&(f[l]||(f[l]=[]),o(f[l],_.outdatedDependencies[l]))}x&&(o(d,[_.moduleId]),y[l]=b)}var P=[];for(i=0;i<d.length;i++)l=d[i],H[l]&&H[l].hot._selfAccepted&&P.push({module:l,errorHandler:H[l].hot._selfAccepted});c("dispose"),Object.keys(T).forEach(function(e){!1===T[e]&&t(e)});for(var D,M=d.slice();M.length>0;)if(l=M.pop(),u=H[l]){var A={},q=u.hot._disposeHandlers;for(s=0;s<q.length;s++)(r=q[s])(A);for(g[l]=A,u.hot.active=!1,delete H[l],delete f[l],s=0;s<u.children.length;s++){var R=H[u.children[s]];R&&((D=R.parents.indexOf(l))>=0&&R.parents.splice(D,1))}}var I,C;for(l in f)if(Object.prototype.hasOwnProperty.call(f,l)&&(u=H[l]))for(C=f[l],s=0;s<C.length;s++)I=C[s],(D=u.children.indexOf(I))>=0&&u.children.splice(D,1);c("apply"),w=v;for(l in y)Object.prototype.hasOwnProperty.call(y,l)&&(e[l]=y[l]);var L=null;for(l in f)if(Object.prototype.hasOwnProperty.call(f,l)&&(u=H[l])){C=f[l];var N=[];for(i=0;i<C.length;i++)if(I=C[i],r=u.hot._acceptedDependencies[I]){if(N.indexOf(r)>=0)continue;N.push(r)}for(i=0;i<N.length;i++){r=N[i];try{r(C)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:l,dependencyId:C[i],error:e}),n.ignoreErrored||L||(L=e)}}}for(i=0;i<P.length;i++){var U=P[i];l=U.module,j=[l];try{p(l)}catch(e){if("function"==typeof U.errorHandler)try{U.errorHandler(e)}catch(t){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:l,error:t,orginalError:e,originalError:e}),n.ignoreErrored||L||(L=t),L||(L=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:l,error:e}),n.ignoreErrored||L||(L=e)}}return L?(c("fail"),Promise.reject(L)):(c("idle"),new Promise(function(e){e(d)}))}function p(t){if(H[t])return H[t].exports;var n=H[t]={i:t,l:!1,exports:{},hot:i(t),parents:(k=j,j=[],k),children:[]};return e[t].call(n.exports,n,n.exports,r(t)),n.l=!0,n.exports}var y=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){u(e,t),y&&y(e,t)};var b,h,m,v,_=!0,w="2cb9e441641df91130b2",O=1e4,g={},j=[],k=[],x=[],E="idle",S=0,P=0,D={},M={},T={},H={};p.m=e,p.c=H,p.d=function(e,t,n){p.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},p.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return p.d(t,"a",t),t},p.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},p.p="",p.h=function(){return w},r(0)(p.s=0)}([function(e,t,n){"use strict";n(1);var o=document.createElement("todo-application");document.querySelector("#app").appendChild(o)},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function a(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),e}function s(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n(2),n(5);var l=o(n(10)),f=o(n(11)),d=Object.getPrototypeOf||function(e){return e.__proto__},p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},y="object"===r(Reflect)&&Reflect.construct||function(e,t,n){var o,r=[null];return r.push.apply(r,t),o=e.bind.apply(e,r),p(new o,n.prototype)},b="function"==typeof Map&&new Map,h=["Done","Not Done",{label:"Remove",classNames:["float-right"]}],m={"comp-1":{done:!0,id:"comp-1",actions:h,text:"Intro to WebComponents",description:'<a href="https://time2hack.com/2017/12/introduction-to-webcomponents-and-shadowdom/"\n      target="_blank">https://time2hack.com/2017/12/introduction-to-webcomponents-and-shadowdom/</a>'},"comp-2":{done:!1,id:"comp-2",actions:h,text:"ToDo App with WebComponents",description:'<a href="https://time2hack.com/2018/01/todo-app-with-webcomponents-shadowdom/"\n      target="_blank">https://time2hack.com/2018/01/todo-app-with-webcomponents-shadowdom/</a>'}},v=function(e){function t(){return i(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),a(t,[{key:"connectedCallback",value:function(){this.dom=this.attachShadow({mode:"open"}),this.dom.innerHTML=(0,l.default)({title:"ToDo App",css:f.default}),this.refs={form:this.dom.querySelector("todo-form"),list:this.dom.querySelector("todo-list")},this.refs.form.props={onSubmit:this.addTask.bind(this)},this.refs.list.props={tasks:m,actions:{remove:function(e){delete m[e]},done:function(e){m[e].done=!m[e].done}}},this.refs.form.render(),this.refs.list.render()}},{key:"addTask",value:function(e){console.log(m);var t=new Date,n="task-".concat(+t);m[n]=Object.assign({},e,{id:n,createdOn:t,done:!1,actions:h}),this.refs.list.render(m)}}]),t}(function(e){function t(){}if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==b){if(b.has(e))return b.get(e);b.set(e,t)}return t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writeable:!0,configurable:!0}}),p(t,p(function(){return y(e,arguments,d(this).constructor)},e))}(HTMLElement));customElements.define("todo-application",v)},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function a(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),e}function s(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=o(n(3)),f=o(n(4)),d=Object.getPrototypeOf||function(e){return e.__proto__},p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},y="object"===r(Reflect)&&Reflect.construct||function(e,t,n){var o,r=[null];return r.push.apply(r,t),o=e.bind.apply(e,r),p(new o,n.prototype)},b="function"==typeof Map&&new Map,h=function(e){function t(){return i(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),a(t,[{key:"connectedCallback",value:function(){}},{key:"render",value:function(){var e=this;this.innerHTML=(0,l.default)({css:f.default}),this.refs={text:this.querySelector('[ref="text"]'),form:this.querySelector('[ref="form"]'),description:this.querySelector('[ref="description"]')},this.refs.form.addEventListener("submit",function(t){t.preventDefault(),e.props.onSubmit({text:e.refs.text.value,description:e.refs.description.value}),e.refs.form.reset()})}}]),t}(function(e){function t(){}if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==b){if(b.has(e))return b.get(e);b.set(e,t)}return t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writeable:!0,configurable:!0}}),p(t,p(function(){return y(e,arguments,d(this).constructor)},e))}(HTMLElement));customElements.define("todo-form",h)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){return"\n<style>".concat(e.css,'</style>\n<div class="card todo-form">\n  <div class="card-body">\n    <form ref="form">\n      <input class="form-control form-control-lg" name="task"\n        type="text" placeholder="Task" ref="text" />\n      <textarea class="form-control form-control-md" name="description"\n        type="text" placeholder="Task Description/Notes" ref="description" ></textarea>\n      <button type="submit" class="btn btn-block btn-outline-dark" ref="btn-submit">Add</button>\n    </form>\n  </div>\n</div>\n')};t.default=o},function(e,t){e.exports='[ref="text"] {\n  border: 1px solid #343a40;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n[ref="description"] {\n  border: 1px solid #343a40;\n  border-radius: 0;\n  border-top: 0;\n  border-bottom: 0;\n}\n[ref="btn-submit"] {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  background: #eee;\n}\ntodo-form .card {\n  border: 0;\n}\ntodo-form .card .card-body{\n  padding: 0;\n}\n'},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function a(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),e}function s(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n(6);var l=o(n(8)),f=o(n(9)),d=Object.getPrototypeOf||function(e){return e.__proto__},p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},y="object"===r(Reflect)&&Reflect.construct||function(e,t,n){var o,r=[null];return r.push.apply(r,t),o=e.bind.apply(e,r),p(new o,n.prototype)},b="function"==typeof Map&&new Map,h=function(e){function t(){return i(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),a(t,[{key:"connectedCallback",value:function(){var e=this;this.innerHTML=(0,f.default)({css:l.default}),this.list=this.querySelector('[ref="todos"]'),this.list.addEventListener("click",function(t){t.target.matches(".btn-done")&&(e.props.actions.done(t.target.dataset.id),e.querySelector('[ref="'.concat(t.target.dataset.id,'"]')).markDone()),t.target.matches(".btn-not-done")&&(e.props.actions.done(t.target.dataset.id),e.querySelector('[ref="'.concat(t.target.dataset.id,'"]')).markNotDone()),t.target.matches(".btn-remove")&&(e.props.actions.remove(t.target.dataset.id),e.querySelector('[ref="'.concat(t.target.dataset.id,'"]')).remove())})}},{key:"createAndAppend",value:function(e){if(!this.querySelector("[ref=".concat(e.id,"]"))){var t=document.createElement("todo-task");t.setAttribute("ref",e.id),t.setAttribute("id",e.id),this.list.appendChild(t),t.render(e)}}},{key:"render",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props.tasks||{};Object.keys(t).forEach(function(n){var o=t[n];e.createAndAppend(o)})}}]),t}(function(e){function t(){}if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==b){if(b.has(e))return b.get(e);b.set(e,t)}return t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writeable:!0,configurable:!0}}),p(t,p(function(){return y(e,arguments,d(this).constructor)},e))}(HTMLElement));customElements.define("todo-list",h)},function(e,t,n){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function c(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function a(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(e){return e&&e.__esModule?e:{default:e}}(n(7)),l=Object.getPrototypeOf||function(e){return e.__proto__},f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d="object"===o(Reflect)&&Reflect.construct||function(e,t,n){var o,r=[null];return r.push.apply(r,t),o=e.bind.apply(e,r),f(new o,n.prototype)},p="function"==typeof Map&&new Map,y=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),c(t,[{key:"connectedCallback",value:function(){this.refs={}}},{key:"render",value:function(e){this.task=e,this.innerHTML=(0,u.default)(e),this.refs.element=this.querySelector(".card")}},{key:"markDone",value:function(){this.refs.element.classList.add("done")}},{key:"markNotDone",value:function(){this.refs.element.classList.remove("done")}}]),t}(function(e){function t(){}if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==p){if(p.has(e))return p.get(e);p.set(e,t)}return t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writeable:!0,configurable:!0}}),f(t,f(function(){return d(e,arguments,l(this).constructor)},e))}(HTMLElement));customElements.define("todo-task",y)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){return'\n<div class="card">\n  <div class="card-body '.concat(e.done?"done":"",'">\n    ').concat(e.text?'<h4 class="card-title">'.concat(e.text,"</h4>"):"","\n    ").concat(e.description?'<p class="card-text">'.concat(e.description,"</p>"):"","\n    ").concat((e.actions||[]).map(function(t){var n=t.label||t,o=(t.classNames||[]).concat("btn-".concat(n.toLowerCase().replace(" ","-"))).join(" ");return'<a href="#" data-id="'.concat(e.id,'" class="btn btn-primary ').concat(o,'">').concat(n,"</a>")}).join(" "),"\n  </div>\n</div>")};t.default=o},function(e,t){e.exports=".done {\n  text-decoration: line-through;\n}\n.btn-not-done {\n  display: none;\n}\n.done .btn-done {\n  display: none;\n}\n.done .btn-not-done {\n  display: inline-block;\n}\n"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){return"\n<style>".concat(e.css,'</style>\n<h2>Tasks:</h2>\n<ul ref="todos" class="list-group"></ul>')};t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){return'\n<link rel="stylesheet" type="text/css" href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">\n<style>'.concat(e.css,'</style>\n<nav class="navbar navbar-expand-md navbar-dark bg-dark">\n  <div class="container">\n    <h1 class="navbar-brand">').concat(e.title,'</h1>\n    <small class="float-right text-light">by <a href="https://time2hack.com/" target="_blank">https://time2hack.com</a></small>\n  </div>\n</nav>\n<main class="container">\n  <todo-form></todo-form>\n  <hr/>\n  <todo-list ref="list"></todo-list>\n</main>\n')};t.default=o},function(e,t){e.exports=":host {\n  display: block;\n}\ntodo-form,\ntodo-list {\n  display: block;\n}\n.card {\n  margin-top: 1rem;\n}\n.navbar-brand {\n  padding-bottom: 0;\n}\n.card.done {\n  text-decoration: line-through;\n  text-decoration-color: green;\n}\n"}]);