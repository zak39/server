/*! For license information please see files-personal-settings.js.LICENSE.txt */
(()=>{"use strict";var e,r,s,n={75433:(e,r,s)=>{var n=s(20144),i=s(77958),a=s(93664),o=s(20296),l=s.n(o),c=s(79753),d=s(64024),u=s(86884),g=s(74628);const p=(0,s(17499).IY)().setApp("files").detectUser().build(),f=(0,d.fn)(t("files","Choose a file or folder to transfer")).setMultiSelect(!1).setType(1).allowDirectories().build(),h={name:"TransferOwnershipDialogue",components:{NcSelect:u.Z,NcButton:g.Z},data:()=>({directory:void 0,directoryPickerError:void 0,submitError:void 0,loadingUsers:!1,selectedUser:null,userSuggestions:{},config:{minSearchStringLength:parseInt(OC.config["sharing.minSearchStringLength"],10)||0}}),computed:{canSubmit(){return!!this.directory&&!!this.selectedUser},formatedUserSuggestions(){return Object.keys(this.userSuggestions).map((e=>{const t=this.userSuggestions[e];return{user:t.uid,displayName:t.displayName,icon:"icon-user"}}))},submitButtonText(){if(!this.canSubmit)return t("files","Transfer");const e=this.readableDirectory.split("/");return t("files","Transfer {path} to {userid}",{path:e[e.length-1],userid:this.selectedUser.displayName})},readableDirectory(){return this.directory?this.directory.substring(1):""}},created(){this.findUserDebounced=l()(this.findUser,300),this.findUser("")},methods:{start(){this.directoryPickerError=void 0,f.pick().then((e=>""===e?"/":e)).then((e=>{if(p.debug(`path ${e} selected for transferring ownership`),!e.startsWith("/"))throw new Error(t("files","Invalid path selected"));this.directory=e})).catch((e=>{p.error(`Selecting object for transfer aborted: ${e.message||"Unknown error"}`,{error:e}),this.directoryPickerError=e.message||t("files","Unknown error")}))},async findUser(e){if(this.query=e.trim(),!(e.length<this.config.minSearchStringLength)){this.loadingUsers=!0;try{const t=await a.Z.get((0,c.generateOcsUrl)("apps/files_sharing/api/v1/sharees"),{params:{format:"json",itemType:"file",search:e,perPage:20,lookup:!1}});this.userSuggestions={},t.data.ocs.data.exact.users.concat(t.data.ocs.data.users).forEach((e=>{n.default.set(this.userSuggestions,e.value.shareWith,{uid:e.value.shareWith,displayName:e.label})}))}catch(e){p.error("could not fetch users",{error:e})}finally{this.loadingUsers=!1}}},submit(){this.canSubmit||p.warn("ignoring form submit"),this.submitError=void 0;const e={path:this.directory,recipient:this.selectedUser.user};p.debug("submit transfer ownership form",e);const r=(0,c.generateOcsUrl)("apps/files/api/v1/transferownership");a.Z.post(r,e).then((e=>e.data)).then((e=>{p.info("Transfer ownership request sent",{data:e}),this.directory=void 0,this.selectedUser=null,(0,d.s$)(t("files","Ownership transfer request sent"))})).catch((e=>{p.error("Could not send ownership transfer request",{error:e}),this.submitError=403===e?.response?.status?t("files","Cannot transfer ownership of a file or folder you do not own"):e.message||t("files","Unknown error")}))}}};var m=s(93379),A=s.n(m),v=s(7795),b=s.n(v),y=s(90569),C=s.n(y),w=s(3565),I=s.n(w),x=s(19216),S=s.n(x),j=s(44589),M=s.n(j),Z=s(29039),N={};N.styleTagTransform=M(),N.setAttributes=I(),N.insert=C().bind(null,"head"),N.domAPI=b(),N.insertStyleElement=S(),A()(Z.Z,N),Z.Z&&Z.Z.locals&&Z.Z.locals;var D=s(51900);const T={name:"PersonalSettings",components:{TransferOwnershipDialogue:(0,D.Z)(h,(function(){var e=this,t=e._self._c;return t("div",[t("h3",[e._v(e._s(e.t("files","Transfer ownership of a file or folder"))+" ")]),e._v(" "),t("form",{on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[t("p",{staticClass:"transfer-select-row"},[t("span",[e._v(e._s(e.readableDirectory))]),e._v(" "),void 0===e.directory?t("NcButton",{staticClass:"transfer-select-row__choose_button",on:{click:function(t){return t.preventDefault(),e.start.apply(null,arguments)}}},[e._v("\n\t\t\t\t"+e._s(e.t("files","Choose file or folder to transfer"))+"\n\t\t\t")]):t("NcButton",{on:{click:function(t){return t.preventDefault(),e.start.apply(null,arguments)}}},[e._v("\n\t\t\t\t"+e._s(e.t("files","Change"))+"\n\t\t\t")]),e._v(" "),t("span",{staticClass:"error"},[e._v(e._s(e.directoryPickerError))])],1),e._v(" "),t("p",{staticClass:"new-owner-row"},[t("label",{attrs:{for:"targetUser"}},[t("span",[e._v(e._s(e.t("files","New owner")))])]),e._v(" "),t("NcSelect",{staticClass:"middle-align",attrs:{"input-id":"targetUser",options:e.formatedUserSuggestions,multiple:!1,loading:e.loadingUsers,label:"displayName","user-select":!0},on:{search:e.findUserDebounced},model:{value:e.selectedUser,callback:function(t){e.selectedUser=t},expression:"selectedUser"}})],1),e._v(" "),t("p",[t("input",{staticClass:"primary",attrs:{type:"submit",disabled:!e.canSubmit},domProps:{value:e.submitButtonText}}),e._v(" "),t("span",{staticClass:"error"},[e._v(e._s(e.submitError))])])])])}),[],!1,null,"67866491",null).exports}},L=(0,D.Z)(T,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"section",attrs:{id:"files-personal-settings"}},[t("h2",[e._v(e._s(e.t("files","Files")))]),e._v(" "),t("TransferOwnershipDialogue")],1)}),[],!1,null,null,null).exports;s.nc=btoa((0,i.IH)()),n.default.prototype.t=t,window.TESTING||(new(n.default.extend(L))).$mount("#files-personal-settings")},29039:(e,t,r)=>{r.d(t,{Z:()=>o});var s=r(87537),n=r.n(s),i=r(23645),a=r.n(i)()(n());a.push([e.id,".middle-align[data-v-67866491]{vertical-align:middle}p[data-v-67866491]{margin-top:12px;margin-bottom:12px}.new-owner-row[data-v-67866491]{display:flex;flex-wrap:wrap}.new-owner-row label[data-v-67866491]{display:flex;align-items:center;margin-bottom:calc(var(--default-grid-baseline)*2)}.new-owner-row label span[data-v-67866491]{margin-right:8px}.new-owner-row .multiselect[data-v-67866491]{flex-grow:1;max-width:280px}.transfer-select-row span[data-v-67866491]{margin-right:8px}.transfer-select-row__choose_button[data-v-67866491]{width:min(100%,400px) !important}","",{version:3,sources:["webpack://./apps/files/src/components/TransferOwnershipDialogue.vue"],names:[],mappings:"AACA,+BACC,qBAAA,CAED,mBACC,eAAA,CACA,kBAAA,CAED,gCACC,YAAA,CACA,cAAA,CAEA,sCACC,YAAA,CACA,kBAAA,CACA,kDAAA,CAEA,2CACC,gBAAA,CAIF,6CACC,WAAA,CACA,eAAA,CAID,2CACC,gBAAA,CAGD,qDACC,gCAAA",sourcesContent:["\n.middle-align {\n\tvertical-align: middle;\n}\np {\n\tmargin-top: 12px;\n\tmargin-bottom: 12px;\n}\n.new-owner-row {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\n\tlabel {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tmargin-bottom: calc(var(--default-grid-baseline) * 2);\n\n\t\tspan {\n\t\t\tmargin-right: 8px;\n\t\t}\n\t}\n\n\t.multiselect {\n\t\tflex-grow: 1;\n\t\tmax-width: 280px;\n\t}\n}\n.transfer-select-row {\n\tspan {\n\t\tmargin-right: 8px;\n\t}\n\n\t&__choose_button {\n\t\twidth: min(100%, 400px) !important;\n\t}\n}\n"],sourceRoot:""}]);const o=a},42761:e=>{e.exports="data:image/svg+xml;base64,PCEtLSBUaGlzIGljb24gaXMgcGFydCBvZiBNYXRlcmlhbCBVSSBJY29ucy4gQ29weXJpZ2h0IDIwMjAgR29vZ2xlIEluYy4sIEFwYWNoZS0yLjAgTGljZW5zZSAtLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiI+PHBhdGggZD0iTS00LTRoMjR2MjRILTRWLTR6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTggMEMzLjYgMCAwIDMuNiAwIDhzMy42IDggOCA4IDgtMy42IDgtOC0zLjYtOC04LTh6IiBmaWxsPSIjZWQ0ODRjIi8+PHBhdGggZD0iTTUgNi41aDZjLjggMCAxLjUuNyAxLjUgMS41cy0uNyAxLjUtMS41IDEuNUg1Yy0uOCAwLTEuNS0uNy0xLjUtMS41UzQuMiA2LjUgNSA2LjV6IiBmaWxsPSIjZmRmZmZmIi8+PC9zdmc+Cg=="},87210:e=>{e.exports="data:image/svg+xml;base64,PCEtLSBUaGlzIGljb24gaXMgcGFydCBvZiBNYXRlcmlhbCBVSSBJY29ucy4gQ29weXJpZ2h0IDIwMjAgR29vZ2xlIEluYy4sIEFwYWNoZS0yLjAgTGljZW5zZSAtLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiI+PHBhdGggZD0iTTQuOCAxMS4yaDYuNFY0LjhINC44djYuNHpNOCAwQzMuNiAwIDAgMy42IDAgOHMzLjYgOCA4IDggOC0zLjYgOC04LTMuNi04LTgtOHoiIGZpbGw9IiM0OWIzODIiLz48L3N2Zz4K"},94659:e=>{e.exports="data:image/svg+xml;base64,PCEtLSBUaGlzIGljb24gaXMgcGFydCBvZiBNYXRlcmlhbCBVSSBJY29ucy4gQ29weXJpZ2h0IDIwMjAgR29vZ2xlIEluYy4sIEFwYWNoZS0yLjAgTGljZW5zZSAtLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTS00LTRoMjR2MjRILTR6Ii8+PHBhdGggZD0iTTYuOS4xQzMgLjYtLjEgNC0uMSA4YzAgNC40IDMuNiA4IDggOCA0IDAgNy40LTMgOC02LjktMS4yIDEuMy0yLjkgMi4xLTQuNyAyLjEtMy41IDAtNi40LTIuOS02LjQtNi40IDAtMS45LjgtMy42IDIuMS00Ljd6IiBmaWxsPSIjZjRhMzMxIi8+PC9zdmc+Cg=="}},i={};function a(e){var t=i[e];if(void 0!==t)return t.exports;var r=i[e]={id:e,loaded:!1,exports:{}};return n[e].call(r.exports,r,r.exports,a),r.loaded=!0,r.exports}a.m=n,e=[],a.O=(t,r,s,n)=>{if(!r){var i=1/0;for(d=0;d<e.length;d++){r=e[d][0],s=e[d][1],n=e[d][2];for(var o=!0,l=0;l<r.length;l++)(!1&n||i>=n)&&Object.keys(a.O).every((e=>a.O[e](r[l])))?r.splice(l--,1):(o=!1,n<i&&(i=n));if(o){e.splice(d--,1);var c=s();void 0!==c&&(t=c)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[r,s,n]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,r)=>(a.f[r](e,t),t)),[])),a.u=e=>e+"-"+e+".js?v="+{2863:"410edc658e5ed3f0b304",5823:"0e86c6180c9d5a635e70"}[e],a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r={},s="nextcloud:",a.l=(e,t,n,i)=>{if(r[e])r[e].push(t);else{var o,l;if(void 0!==n)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==s+n){o=u;break}}o||(l=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,a.nc&&o.setAttribute("nonce",a.nc),o.setAttribute("data-webpack",s+n),o.src=e),r[e]=[t];var g=(t,s)=>{o.onerror=o.onload=null,clearTimeout(p);var n=r[e];if(delete r[e],o.parentNode&&o.parentNode.removeChild(o),n&&n.forEach((e=>e(s))),t)return t(s)},p=setTimeout(g.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=g.bind(null,o.onerror),o.onload=g.bind(null,o.onload),l&&document.head.appendChild(o)}},a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),a.j=1623,(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var s=r.length-1;s>-1&&!e;)e=r[s--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e})(),(()=>{a.b=document.baseURI||self.location.href;var e={1623:0};a.f.j=(t,r)=>{var s=a.o(e,t)?e[t]:void 0;if(0!==s)if(s)r.push(s[2]);else{var n=new Promise(((r,n)=>s=e[t]=[r,n]));r.push(s[2]=n);var i=a.p+a.u(t),o=new Error;a.l(i,(r=>{if(a.o(e,t)&&(0!==(s=e[t])&&(e[t]=void 0),s)){var n=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;o.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",o.name="ChunkLoadError",o.type=n,o.request=i,s[1](o)}}),"chunk-"+t,t)}},a.O.j=t=>0===e[t];var t=(t,r)=>{var s,n,i=r[0],o=r[1],l=r[2],c=0;if(i.some((t=>0!==e[t]))){for(s in o)a.o(o,s)&&(a.m[s]=o[s]);if(l)var d=l(a)}for(t&&t(r);c<i.length;c++)n=i[c],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(d)},r=self.webpackChunknextcloud=self.webpackChunknextcloud||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),a.nc=void 0;var o=a.O(void 0,[7874],(()=>a(75433)));o=a.O(o)})();
//# sourceMappingURL=files-personal-settings.js.map?v=60f2d32adfd261d2f93b