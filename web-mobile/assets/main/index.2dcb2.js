window.__require=function t(e,o,n){function r(c,l){if(!o[c]){if(!e[c]){var u=c.split("/");if(u=u[u.length-1],!e[u]){var p="function"==typeof __require&&__require;if(!l&&p)return p(u,!0);if(i)return i(u,!0);throw new Error("Cannot find module '"+c+"'")}c=u}var s=o[c]={exports:{}};e[c][0].call(s.exports,function(t){return r(e[c][1][t]||t)},s,s.exports,t,e,o,n)}return o[c].exports}for(var i="function"==typeof __require&&__require,c=0;c<n.length;c++)r(n[c]);return r}({ButtonClick:[function(t,e,o){"use strict";cc._RF.push(e,"9a01byqXD9Ah7bsop6zn43N","ButtonClick");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),i=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,c=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(c=(i<3?r(c):i>3?r(e,o,c):r(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,l=c.ccclass,u=c.property,p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.label=null,e.editBox=null,e.webView=null,e.text="hello",e}return r(e,t),e.prototype.start=function(){this.node.getComponent(cc.Button).node.on("click",this.onClicked,this),this.webView.active=!1;var t=new cc.Component.EventHandler;t.target=this.node,t.component="ButtonClick",t.handler="webload",t.customEventData="foobar",this.webView.webviewEvents.push(t)},e.prototype.onClicked=function(){this.label.string="click",console.info("visiting ",this.editBox.string),this.webView.url=this.editBox.string},e.prototype.webload=function(t,e,o){console.info("web load:",e,o)},i([u(cc.Label)],e.prototype,"label",void 0),i([u(cc.EditBox)],e.prototype,"editBox",void 0),i([u(cc.WebView)],e.prototype,"webView",void 0),i([u],e.prototype,"text",void 0),i([l],e)}(cc.Component);o.default=p,cc._RF.pop()},{}]},{},["ButtonClick"]);