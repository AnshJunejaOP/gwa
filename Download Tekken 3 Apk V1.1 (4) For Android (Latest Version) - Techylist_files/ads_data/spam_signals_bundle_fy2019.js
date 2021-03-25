(function(){/* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/ 
'use strict';var e=this||self;function h(a){let b=!1,c;return function(){b||(c=a(),b=!0);return c}};(class{constructor(a,b){this.g=b===m?a:""}}).prototype.toString=function(){return this.g.toString()};var m={};function n(a){n[" "](a);return a}n[" "]=function(){};var p={Event:{l:"click",J:"dblclick",j:"mousedown",ca:"mouseup",ba:"mouseover",aa:"mouseout",$:"mousemove",Y:"mouseenter",Z:"mouseleave",ya:"touchstart",xa:"touchmove",wa:"touchend",va:"touchcancel",S:"keypress",o:"keydown",T:"keyup",L:"deviceorientation",da:"MozOrientation",K:"devicemotion",ka:"orientationchange",la:"pagehide",ma:"pageshow",D:"beforeunload",F:"blur",H:"contextmenu",m:"DOMContentLoaded",N:"error",O:"focus",P:"hashchange",R:"help",s:"load",W:"losecapture",X:"message",fa:"msvisibilitychange", 
ea:"mozvisibilitychange",na:"popstate",pa:"readystatechange",qa:"resize",ra:"scroll",ta:"storage",ua:"submit",Aa:"unload",Ca:"visibilitychange",Ea:"webkitvisibilitychange",za:"transitionend",Da:"webkitTransitionEnd",G:"change",V:"loadstart",oa:"progress",B:"abort",U:"loadend",I:"crash",ha:"onshow",ga:"onhide",M:"DOMNodeRemoved",Ba:"viewableChange",C:"animationend",sa:"securitypolicyviolation"},u:{capture:!0},ja:{passive:!0},ia:{once:!0}}; 
p.v=h(function(){let a=!1;try{const b=Object.defineProperty({},"passive",{get:function(){a=!0}});e.addEventListener("test",null,b)}catch(b){}return a});function q(a){return a?a.passive&&p.v()?a:a.capture||!1:!1}p.i=function(a,b,c,d){return a.addEventListener?(a.addEventListener(b,c,q(d)),!0):!1};p.Ga=function(a,b,c,d){return a.removeEventListener?(a.removeEventListener(b,c,q(d)),!0):!1}; 
p.Fa=function(a,b,c={}){let d;"function"===typeof window.CustomEvent?d=new CustomEvent(b,c):(d=document.createEvent("CustomEvent"),d.initCustomEvent(b,!!c.bubbles,!!c.cancelable,c.detail));a.dispatchEvent(d)};function r(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a};function t(){var a=v;try{var b;if(b=!!a&&null!=a.location.href)a:{try{n(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}};var w=document;var x=!!window.google_async_iframe_id;let v=x&&window.parent||window;let y=null;class z{constructor(a,b){var c=e.performance;(c=c&&c.now?c.now():null)||(c=(c=e.performance)&&c.now&&c.timing?Math.floor(c.now()+c.timing.navigationStart):Date.now());this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=Math.random();this.slotId=void 0}};const B=e.performance,C=!!(B&&B.mark&&B.measure&&B.clearMarks),D=h(()=>{var a;if(a=C){var b;if(null===y){y="";try{a="";try{a=e.top.location.hash}catch(c){a=e.location.hash}a&&(y=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=y;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});function E(a){a&&B&&D()&&(B.clearMarks(`goog_${a.label}_${a.uniqueId}_start`),B.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))} 
class H{constructor(){var a=I;this.g=[];this.A=a||e;let b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.g=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.h=D()||(null!=b?b:1>Math.random())}start(a,b){if(!this.h)return null;a=new z(a,b);b=`goog_${a.label}_${a.uniqueId}_start`;B&&D()&&B.mark(b);return a}};if(x&&!t()){let a="."+w.domain;try{for(;2<a.split(".").length&&!t();)w.domain=a=a.substr(a.indexOf(".")+1),v=window.parent}catch(b){}t()||(v=window)}const I=v,J=new H;var K=()=>{I.google_measure_js_timing||(J.h=!1,J.g!=J.A.google_js_reporting_queue&&(D()&&Array.prototype.forEach.call(J.g,E,void 0),J.g.length=0))};"number"!==typeof I.google_srt&&(I.google_srt=Math.random());"complete"==I.document.readyState?K():J.h&&(0,p.i)(I,p.Event.s,()=>{K()});var L=(a,b,c,d,g)=>{window.css?window.css(b,c,d,g,void 0):a&&(b=a.href,g?d=b+("&"+c+"="+d):(g="&"+c+"=",c=b.indexOf(g),0>c?d=b+g+d:(c+=g.length,g=b.indexOf("&",c),d=0<=g?b.substring(0,c)+d+b.substring(g):b.substring(0,c)+d)),a.href=2E3<d.length?b:d)};let M=!1,N=!1,O=null;const P=()=>{var a;null===(a=p.i)||void 0===a?void 0:a.call(p,document,p.Event.l,b=>{O=b},p.u)};var Q=()=>{const a=O;return a?M||N?!1:(a.preventDefault?a.preventDefault():a.returnValue=!1,!0):!1},R=()=>{(0,p.i)(document,p.Event.j,()=>{M=!0});(0,p.i)(document,p.Event.o,()=>{N=!0});P()};var T=(a,b=17)=>{if(0>b||Math.floor(b)!==b)b=17;S(a,b)},aa=(a,b)=>{S(a,b||1)},ba=a=>{S(a,2)},ca=(a,b)=>{S(a,b||0)};let U={},V=!0;const S=(a,b)=>{var c;if(c=V)void 0===U[a]&&(U[a]=[]),(c=U[a][b])||(U[a][b]=!0);c||L(document.getElementById(a),a,"nb",b,V)};function W(a,b,c){const d=a.id||"";L(a,d,"nx",b);L(a,d,"ny",c)}var da=class{constructor(){this.g=this.h=null;w.addEventListener&&w.addEventListener(p.Event.j,a=>{this.h=a},!0);(0,p.i)(w,p.Event.m,()=>{this.g=w.getElementById("common_15click_anchor")})}};const ea=[0,2,1];let X=null;var Y=a=>{if(a){var b;{const c=window.event||X;c?((b=c.which?1<<ea[c.which-1]:c.button)&&c.shiftKey&&(b|=8),b&&c.altKey&&(b|=16),b&&c.ctrlKey&&(b|=32)):b=null}b&&L(a,a.id,"mb",b)}};document.addEventListener&&document.addEventListener("mousedown",a=>{X=a},!0);window.mb=Y;var Z={},fa=(a,b=2,c="")=>{c=c?c:a;1!==b&&(void 0===Z[c]?Z[c]=1:Z[c]++);0!==b&&Z[c]&&L(document.getElementById(a),a,"nm",Z[c])};window.init_ssb=(a,b,c,d,g,ha)=>{const l=window;a&&(R(),l.accbk=Q);b&&(ha&&(V=!1),l.cla=T,l.cll=aa,l.clb=ba,l.clh=ca);if(c){const A=new da;l.xy=(f,F,k)=>{k=k||F;const u=f||A.h;if(u&&F&&k&&!r(A.g,u.target)&&(f=w.querySelector("a.one-point-five-click.rhbutton"),!f||(f.classList?f.classList.contains("preexpanded"):0<=Array.prototype.indexOf.call(f.classList?f.classList:("string"==typeof f.className?f.className:f.getAttribute&&f.getAttribute("class")||"").match(/\S+/g)||[],"preexpanded",void 0))||!r(f, 
u.target))){var G=Math.round(u.clientX-k.offsetLeft);k=Math.round(u.clientY-k.offsetTop);W(F,G,k);A.g&&W(A.g,G,k);f&&W(f,G,k)}}}d&&(l.mb=Y);g&&(l.ss=fa)};}).call(this);
