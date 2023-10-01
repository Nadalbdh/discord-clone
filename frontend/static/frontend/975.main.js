"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[975],{8247:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294);const r=function(e){var t=e.children;return a.createElement("div",{className:"container is-max-desktop content is-large has-text-centered"},a.createElement("div",{className:"notification is-primary"},a.createElement("div",{className:"material-icons"},"refresh"),a.createElement("h5",{className:"title is-5"},t)))}},1975:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var a=n(7294),r=n(5977),i=n(8247),c=n(6748);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,i=[],c=!0,o=!1;try{for(n=n.call(e);!(c=(a=n.next()).done)&&(i.push(a.value),!t||i.length!==t);c=!0);}catch(e){o=!0,r=e}finally{try{c||null==n.return||n.return()}finally{if(o)throw r}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}const s=function(){var e=(0,r.k6)(),t=o((0,a.useState)([]),2),n=t[0],l=t[1],s=o((0,a.useState)(!1),2),u=s[0],m=s[1];(0,a.useEffect)((function(){(0,c._6)().then((function(e){l(e),m(!0)}))}),[]);var f=function(e){e.preventDefault(),(0,c.LC)(e.target.id).then((function(t){document.getElementById(e.target.id).parentNode.parentNode.style.display="none"}))},d=function(e){e.preventDefault(),(0,c.no)(e.target.id).then((function(t){document.getElementById(e.target.id).parentNode.parentNode.style.display="none"}))};return a.createElement(a.Fragment,null,u?a.createElement("div",{className:"container"},a.createElement("div",{className:"columns"},a.createElement("div",{className:"column is-half is-offset-one-quarter"},a.createElement("div",{className:"card"},a.createElement("div",{className:"card-content"},a.createElement("div",{className:"level-right"},a.createElement("button",{onClick:function(){return e.push("/")},className:"delete"})),a.createElement("div",{className:"content"},a.createElement("h1",{className:"title"},"All Your Notifications"),n.length?n.map((function(e){return a.createElement("article",{key:e.id,className:"media"},a.createElement("figure",{className:"media-left"},a.createElement("p",{className:"image is-64x64"},a.createElement("img",{className:"is-rounded",src:e.from_user.profile.picture}))),a.createElement("div",{className:"media-content"},a.createElement("div",{className:"content"},a.createElement("p",null,a.createElement("strong",null,e.from_user.first_name," ",e.from_user.last_name),a.createElement("small",null,"@",e.from_user.username)),a.createElement("p",null,1===e.notification_type?"Invited you to the server ":"Wants to Join to the Server ",a.createElement("strong",null,e.to_server.title)))),a.createElement("div",{className:"media-right"},a.createElement("button",{id:e.id,onClick:f,className:"button is-success"},a.createElement("i",{className:"material-icons"},"check"),"Accept"),a.createElement("button",{id:e.id,onClick:d,className:"button is-danger"},a.createElement("i",{className:"material-icons"},"clear"),"Decline")))})):a.createElement("p",null,"No notifications..."))))))):a.createElement(i.Z,null,"You don't have any notifications to show."))}},6748:(e,t,n)=>{n.d(t,{dt:()=>i,sk:()=>c,_6:()=>o,LC:()=>l,no:()=>s});var a=n(9669),r=n.n(a),i=function(e,t){var n={to_user:e,to_server:t,notification_type:1};return r().post("api/notification/createinvitation/",n).then((function(e){return e.data}))},c=function(e){var t={to_server:e,notification_type:2};return r().post("api/notification/invitation/request/",t).then((function(e){return e.data}))},o=function(){return r().get("api/notification/getnotifications/").then((function(e){return e.data}))},l=function(e){return r().post("api/notification/invitation/".concat(e,"/")).then((function(e){return e.data}))},s=function(e){return r().delete("api/notification/deletenotification/".concat(e,"/")).then((function(e){return e.data}))}}}]);