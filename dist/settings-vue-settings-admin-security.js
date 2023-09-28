/*! For license information please see settings-vue-settings-admin-security.js.LICENSE.txt */
!function(){var e,n,r,o={93772:function(e,n,r){"use strict";var o=r(43554),i=r(20144),a=r(93664),s=r(36456),c=r.n(s),u=r(10861),l=r.n(u),d=r(20571),p=r.n(d),f=r(13299),h=r.n(f),g=r(97520),m=r.n(g),v=r(44908),y=r.n(v),b=r(23279),w=r.n(b),A=r(79753),x=r(25108),C={name:"AdminTwoFactor",components:{NcSelect:c(),NcButton:l(),NcCheckboxRadioSwitch:p(),NcSettingsSection:h()},data:function(){return{loading:!1,dirty:!1,groups:[],loadingGroups:!1,twoFactorAdminDoc:(0,o.j)("settings","two-factor-admin-doc")}},computed:{enforced:{get:function(){return this.$store.state.enforced},set:function(t){this.dirty=!0,this.$store.commit("setEnforced",t)}},enforcedGroups:{get:function(){return this.$store.state.enforcedGroups},set:function(t){this.dirty=!0,this.$store.commit("setEnforcedGroups",t)}},excludedGroups:{get:function(){return this.$store.state.excludedGroups},set:function(t){this.dirty=!0,this.$store.commit("setExcludedGroups",t)}}},mounted:function(){this.groups=m()(y()(this.enforcedGroups.concat(this.excludedGroups))),this.searchGroup("")},methods:{searchGroup:w()((function(t){var e=this;this.loadingGroups=!0,a.Z.get((0,A.generateOcsUrl)("cloud/groups?offset=0&search={query}&limit=20",{query:t})).then((function(t){return t.data.ocs})).then((function(t){return t.data.groups})).then((function(t){e.groups=m()(y()(e.groups.concat(t)))})).catch((function(t){return x.error("could not search groups",t)})).then((function(){e.loadingGroups=!1}))}),500),saveChanges:function(){var t=this;this.loading=!0;var e={enforced:this.enforced,enforcedGroups:this.enforcedGroups,excludedGroups:this.excludedGroups};a.Z.put((0,A.generateUrl)("/settings/api/admin/twofactorauth"),e).then((function(t){return t.data})).then((function(e){t.state=e,t.dirty=!1})).catch((function(t){x.error("could not save changes",t)})).then((function(){t.loading=!1}))}}},_=r(93379),k=r.n(_),G=r(7795),E=r.n(G),S=r(90569),N=r.n(S),j=r(3565),O=r.n(j),T=r(19216),L=r.n(T),B=r(44589),D=r.n(B),P=r(93262),F={};F.styleTagTransform=D(),F.setAttributes=O(),F.insert=N().bind(null,"head"),F.domAPI=E(),F.insertStyleElement=L(),k()(P.Z,F),P.Z&&P.Z.locals&&P.Z.locals;var I=r(51900),M=(0,I.Z)(C,(function(){var t=this,e=t._self._c;return e("NcSettingsSection",{attrs:{name:t.t("settings","Two-Factor Authentication"),description:t.t("settings","Two-factor authentication can be enforced for all users and specific groups. If they do not have a two-factor provider configured, they will be unable to log into the system."),"doc-url":t.twoFactorAdminDoc}},[t.loading?e("p",[e("span",{staticClass:"icon-loading-small two-factor-loading"}),t._v(" "),e("span",[t._v(t._s(t.t("settings","Enforce two-factor authentication")))])]):e("NcCheckboxRadioSwitch",{attrs:{id:"two-factor-enforced",checked:t.enforced,type:"switch"},on:{"update:checked":function(e){t.enforced=e}}},[t._v("\n\t\t"+t._s(t.t("settings","Enforce two-factor authentication"))+"\n\t")]),t._v(" "),t.enforced?[e("h3",[t._v(t._s(t.t("settings","Limit to groups")))]),t._v("\n\t\t"+t._s(t.t("settings","Enforcement of two-factor authentication can be set for certain groups only."))+"\n\t\t"),e("p",{staticClass:"top-margin"},[t._v("\n\t\t\t"+t._s(t.t("settings","Two-factor authentication is enforced for all members of the following groups."))+"\n\t\t")]),t._v(" "),e("p",[e("label",{attrs:{for:"enforcedGroups"}},[e("span",[t._v(t._s(t.t("settings","Enforced groups")))])]),t._v(" "),e("NcSelect",{attrs:{"input-id":"enforcedGroups",options:t.groups,disabled:t.loading,multiple:!0,loading:t.loadingGroups,"close-on-select":!1},on:{search:t.searchGroup},model:{value:t.enforcedGroups,callback:function(e){t.enforcedGroups=e},expression:"enforcedGroups"}})],1),t._v(" "),e("p",{staticClass:"top-margin"},[t._v("\n\t\t\t"+t._s(t.t("settings","Two-factor authentication is not enforced for members of the following groups."))+"\n\t\t")]),t._v(" "),e("p",[e("label",{attrs:{for:"excludedGroups"}},[e("span",[t._v(t._s(t.t("settings","Excluded groups")))])]),t._v(" "),e("NcSelect",{attrs:{"input-id":"excludedGroups",options:t.groups,disabled:t.loading,multiple:!0,loading:t.loadingGroups,"close-on-select":!1},on:{search:t.searchGroup},model:{value:t.excludedGroups,callback:function(e){t.excludedGroups=e},expression:"excludedGroups"}})],1),t._v(" "),e("p",{staticClass:"top-margin"},[e("em",[t._v("\n\t\t\t\t"+t._s(t.t("settings","When groups are selected/excluded, they use the following logic to determine if a user has 2FA enforced: If no groups are selected, 2FA is enabled for everyone except members of the excluded groups. If groups are selected, 2FA is enabled for all members of these. If a user is both in a selected and excluded group, the selected takes precedence and 2FA is enforced."))+"\n\t\t\t")])])]:t._e(),t._v(" "),e("p",{staticClass:"top-margin"},[t.dirty?e("NcButton",{attrs:{type:"primary",disabled:t.loading},on:{click:t.saveChanges}},[t._v("\n\t\t\t"+t._s(t.t("settings","Save changes"))+"\n\t\t")]):t._e()],1)],2)}),[],!1,null,"9beab486",null).exports,R=r(17499),$=r(10128),q=(r(65509),r(64024));function Z(t){return Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Z(t)}function U(){U=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,n){return t[e]=n}}function u(t,e,n,o){var i=e&&e.prototype instanceof p?e:p,a=Object.create(i.prototype),s=new k(o||[]);return r(a,"_invoke",{value:A(t,n,s)}),a}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var d={};function p(){}function f(){}function h(){}var g={};c(g,i,(function(){return this}));var m=Object.getPrototypeOf,v=m&&m(m(G([])));v&&v!==e&&n.call(v,i)&&(g=v);var y=h.prototype=p.prototype=Object.create(g);function b(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function o(r,i,a,s){var c=l(t[r],t,i);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==Z(d)&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){o("next",t,a,s)}),(function(t){o("throw",t,a,s)})):e.resolve(d).then((function(t){u.value=t,a(u)}),(function(t){return o("throw",t,a,s)}))}s(c.arg)}var i;r(this,"_invoke",{value:function(t,n){function r(){return new e((function(e,r){o(t,n,e,r)}))}return i=i?i.then(r,r):r()}})}function A(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return{value:void 0,done:!0}}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var s=x(a,n);if(s){if(s===d)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=l(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}function x(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var o=l(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function G(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:E}}function E(){return{value:void 0,done:!0}}return f.prototype=h,r(y,"constructor",{value:h,configurable:!0}),r(h,"constructor",{value:f,configurable:!0}),f.displayName=c(h,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,c(t,s,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},b(w.prototype),c(w.prototype,a,(function(){return this})),t.AsyncIterator=w,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new w(u(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(y),c(y,s,"Generator"),c(y,i,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=G,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),_(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;_(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:G(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},t}function W(t,e,n,r,o,i,a){try{var s=t[i](a),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,o)}function Y(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){W(i,r,o,a,s,"next",t)}function s(t){W(i,r,o,a,s,"throw",t)}a(void 0)}))}}var z=(0,R.IY)().setApp("settings").detectUser().build(),H={name:"Encryption",components:{NcCheckboxRadioSwitch:p(),NcSettingsSection:h(),NcButton:l()},data:function(){var t=(0,o.j)("settings","encryption-modules");return{encryptionReady:(0,o.j)("settings","encryption-ready"),encryptionEnabled:(0,o.j)("settings","encryption-enabled"),externalBackendsEnabled:(0,o.j)("settings","external-backends-enabled"),encryptionAdminDoc:(0,o.j)("settings","encryption-admin-doc"),encryptionModules:t,shouldDisplayWarning:!1,migrating:!1,defaultCheckedModule:Object.entries(t).find((function(t){return t[1].default}))[0]}},computed:{migrationMessage:function(){return t("settings",'You need to migrate your encryption keys from the old encryption (ownCloud <= 8.0) to the new one. Please enable the "Default encryption module" and run {command}',{command:'"occ encryption:migrate"'})}},methods:{displayWarning:function(){this.encryptionEnabled?(this.encryptionEnabled=!1,this.shouldDisplayWarning=!1):this.shouldDisplayWarning=!this.shouldDisplayWarning},update:function(e,n){var r=this;return Y(U().mark((function o(){var i,s,c,u,l;return U().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,(0,$.confirmPassword)();case 2:return i=(0,A.generateOcsUrl)("/apps/provisioning_api/api/v1/config/apps/{appId}/{key}",{appId:"core",key:e}),s=n?"yes":"no",o.prev=4,o.next=7,a.Z.post(i,{value:s});case 7:u=o.sent,l=u.data,r.handleResponse({status:null===(c=l.ocs)||void 0===c||null===(c=c.meta)||void 0===c?void 0:c.status}),o.next=15;break;case 12:o.prev=12,o.t0=o.catch(4),r.handleResponse({errorMessage:t("settings","Unable to update server side encryption config"),error:o.t0});case 15:case"end":return o.stop()}}),o,null,[[4,12]])})))()},checkDefaultModule:function(){var t=this;return Y(U().mark((function e(){return U().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.update("default_encryption_module",t.defaultCheckedModule);case 2:case"end":return e.stop()}}),e)})))()},enableEncryption:function(){var t=this;return Y(U().mark((function e(){return U().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.encryptionEnabled=!0,e.next=3,t.update("encryption_enabled",!0);case 3:case"end":return e.stop()}}),e)})))()},handleResponse:function(t){return Y(U().mark((function e(){var n,r,o;return U().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.status,r=t.errorMessage,o=t.error,"ok"!==n&&((0,q.x2)(r),z.error(r,{error:o}));case 2:case"end":return e.stop()}}),e)})))()}}},J=r(8394),K={};K.styleTagTransform=D(),K.setAttributes=O(),K.insert=N().bind(null,"head"),K.domAPI=E(),K.insertStyleElement=L(),k()(J.Z,K),J.Z&&J.Z.locals&&J.Z.locals;var Q=(0,I.Z)(H,(function(){var t=this,e=t._self._c;return e("NcSettingsSection",{attrs:{name:t.t("settings","Server-side encryption"),description:t.t("settings","Server-side encryption makes it possible to encrypt files which are uploaded to this server. This comes with limitations like a performance penalty, so enable this only if needed."),"doc-url":t.encryptionAdminDoc}},[e("NcCheckboxRadioSwitch",{attrs:{checked:t.encryptionEnabled||t.shouldDisplayWarning,disabled:t.encryptionEnabled,type:"switch"},on:{"update:checked":t.displayWarning}},[t._v("\n\t\t"+t._s(t.t("settings","Enable server-side encryption"))+"\n\t")]),t._v(" "),t.shouldDisplayWarning&&!t.encryptionEnabled?e("div",{staticClass:"notecard warning",attrs:{role:"alert"}},[e("p",[t._v(t._s(t.t("settings","Please read carefully before activating server-side encryption:")))]),t._v(" "),e("ul",[e("li",[t._v(t._s(t.t("settings","Once encryption is enabled, all files uploaded to the server from that point forward will be encrypted at rest on the server. It will only be possible to disable encryption at a later date if the active encryption module supports that function, and all pre-conditions (e.g. setting a recover key) are met.")))]),t._v(" "),e("li",[t._v(t._s(t.t("settings","Encryption alone does not guarantee security of the system. Please see documentation for more information about how the encryption app works, and the supported use cases.")))]),t._v(" "),e("li",[t._v(t._s(t.t("settings","Be aware that encryption always increases the file size.")))]),t._v(" "),e("li",[t._v(t._s(t.t("settings","It is always good to create regular backups of your data, in case of encryption make sure to backup the encryption keys along with your data.")))])]),t._v(" "),e("p",{staticClass:"margin-bottom"},[t._v("\n\t\t\t"+t._s(t.t("settings","This is the final warning: Do you really want to enable encryption?"))+"\n\t\t")]),t._v(" "),e("NcButton",{attrs:{type:"primary"},on:{click:function(e){return t.enableEncryption()}}},[t._v("\n\t\t\t"+t._s(t.t("settings","Enable encryption"))+"\n\t\t")])],1):t._e(),t._v(" "),t.encryptionEnabled?e("div",[t.encryptionReady?e("div",[0===t.encryptionModules.length?e("p",[t._v("\n\t\t\t\t"+t._s(t.t("settings","No encryption module loaded, please enable an encryption module in the app menu."))+"\n\t\t\t")]):[e("h3",[t._v(t._s(t.t("settings","Select default encryption module:")))]),t._v(" "),e("fieldset",t._l(t.encryptionModules,(function(n,r){return e("NcCheckboxRadioSwitch",{key:r,attrs:{checked:t.defaultCheckedModule,value:r,type:"radio",name:"default_encryption_module"},on:{"update:checked":[function(e){t.defaultCheckedModule=e},t.checkDefaultModule]}},[t._v("\n\t\t\t\t\t\t"+t._s(n.displayName)+"\n\t\t\t\t\t")])})),1)]],2):t.externalBackendsEnabled?e("div",{domProps:{innerHTML:t._s(t.migrationMessage)}}):t._e()]):t._e()],1)}),[],!1,null,"706a22be",null).exports,V=r(20629);i.default.use(V.ZP);var X={setEnforced:function(t,e){i.default.set(t,"enforced",e)},setEnforcedGroups:function(t,e){i.default.set(t,"enforcedGroups",e)},setExcludedGroups:function(t,e){i.default.set(t,"excludedGroups",e)}},tt=new V.yh({strict:!1,state:{enforced:!1,enforcedGroups:[],excludedGroups:[]},mutations:X});r.nc=btoa(OC.requestToken),i.default.prototype.t=t,window.OC=window.OC||{},window.OC.Settings=window.OC.Settings||{},tt.replaceState((0,o.j)("settings","mandatory2FAState")),new(i.default.extend(M))({store:tt}).$mount("#two-factor-auth-settings"),(new(i.default.extend(Q))).$mount("#vue-admin-encryption")},8394:function(t,e,n){"use strict";var r=n(87537),o=n.n(r),i=n(23645),a=n.n(i)()(o());a.push([t.id,".notecard.success[data-v-706a22be]{--note-background: rgba(var(--color-success-rgb), 0.2);--note-theme: var(--color-success)}.notecard.error[data-v-706a22be]{--note-background: rgba(var(--color-error-rgb), 0.2);--note-theme: var(--color-error)}.notecard.warning[data-v-706a22be]{--note-background: rgba(var(--color-warning-rgb), 0.2);--note-theme: var(--color-warning)}#body-settings .notecard[data-v-706a22be]{color:var(--color-text-light);background-color:var(--note-background);border:1px solid var(--color-border);border-left:4px solid var(--note-theme);border-radius:var(--border-radius);box-shadow:rgba(43,42,51,.05) 0px 1px 2px 0px;margin:1rem 0;margin-top:1rem;padding:1rem}li[data-v-706a22be]{list-style-type:initial;margin-left:1rem;padding:.25rem 0}.margin-bottom[data-v-706a22be]{margin-bottom:.75rem}","",{version:3,sources:["webpack://./apps/settings/src/components/Encryption.vue"],names:[],mappings:"AAEA,mCACC,sDAAA,CACA,kCAAA,CAGD,iCACC,oDAAA,CACA,gCAAA,CAGD,mCACC,sDAAA,CACA,kCAAA,CAGD,0CACC,6BAAA,CACA,uCAAA,CACA,oCAAA,CACA,uCAAA,CACA,kCAAA,CACA,6CAAA,CACA,aAAA,CACA,eAAA,CACA,YAAA,CAGD,oBACC,uBAAA,CACA,gBAAA,CACA,gBAAA,CAGD,gCACC,oBAAA",sourcesContent:["\n\n.notecard.success {\n\t--note-background: rgba(var(--color-success-rgb), 0.2);\n\t--note-theme: var(--color-success);\n}\n\n.notecard.error {\n\t--note-background: rgba(var(--color-error-rgb), 0.2);\n\t--note-theme: var(--color-error);\n}\n\n.notecard.warning {\n\t--note-background: rgba(var(--color-warning-rgb), 0.2);\n\t--note-theme: var(--color-warning);\n}\n\n#body-settings .notecard {\n\tcolor: var(--color-text-light);\n\tbackground-color: var(--note-background);\n\tborder: 1px solid var(--color-border);\n\tborder-left: 4px solid var(--note-theme);\n\tborder-radius: var(--border-radius);\n\tbox-shadow: rgba(43, 42, 51, 0.05) 0px 1px 2px 0px;\n\tmargin: 1rem 0;\n\tmargin-top: 1rem;\n\tpadding: 1rem;\n}\n\nli {\n\tlist-style-type: initial;\n\tmargin-left: 1rem;\n\tpadding: 0.25rem 0;\n}\n\n.margin-bottom {\n\tmargin-bottom: 0.75rem;\n}\n"],sourceRoot:""}]),e.Z=a},93262:function(t,e,n){"use strict";var r=n(87537),o=n.n(r),i=n(23645),a=n.n(i)()(o());a.push([t.id,"\n.two-factor-loading[data-v-9beab486] {\n\tdisplay: inline-block;\n\tvertical-align: sub;\n\tmargin-left: -2px;\n\tmargin-right: 1px;\n}\n.top-margin[data-v-9beab486] {\n\tmargin-top: 0.5rem;\n}\n","",{version:3,sources:["webpack://./apps/settings/src/components/AdminTwoFactor.vue"],names:[],mappings:";AAsLA;CACA,qBAAA;CACA,mBAAA;CACA,iBAAA;CACA,iBAAA;AACA;AAEA;CACA,kBAAA;AACA",sourcesContent:["<template>\n\t<NcSettingsSection :name=\"t('settings', 'Two-Factor Authentication')\"\n\t\t:description=\"t('settings', 'Two-factor authentication can be enforced for all users and specific groups. If they do not have a two-factor provider configured, they will be unable to log into the system.')\"\n\t\t:doc-url=\"twoFactorAdminDoc\">\n\t\t<p v-if=\"loading\">\n\t\t\t<span class=\"icon-loading-small two-factor-loading\" />\n\t\t\t<span>{{ t('settings', 'Enforce two-factor authentication') }}</span>\n\t\t</p>\n\t\t<NcCheckboxRadioSwitch v-else\n\t\t\tid=\"two-factor-enforced\"\n\t\t\t:checked.sync=\"enforced\"\n\t\t\ttype=\"switch\">\n\t\t\t{{ t('settings', 'Enforce two-factor authentication') }}\n\t\t</NcCheckboxRadioSwitch>\n\t\t<template v-if=\"enforced\">\n\t\t\t<h3>{{ t('settings', 'Limit to groups') }}</h3>\n\t\t\t{{ t('settings', 'Enforcement of two-factor authentication can be set for certain groups only.') }}\n\t\t\t<p class=\"top-margin\">\n\t\t\t\t{{ t('settings', 'Two-factor authentication is enforced for all members of the following groups.') }}\n\t\t\t</p>\n\t\t\t<p>\n\t\t\t\t<label for=\"enforcedGroups\">\n\t\t\t\t\t<span>{{ t('settings', 'Enforced groups') }}</span>\n\t\t\t\t</label>\n\t\t\t\t<NcSelect v-model=\"enforcedGroups\"\n\t\t\t\t\tinput-id=\"enforcedGroups\"\n\t\t\t\t\t:options=\"groups\"\n\t\t\t\t\t:disabled=\"loading\"\n\t\t\t\t\t:multiple=\"true\"\n\t\t\t\t\t:loading=\"loadingGroups\"\n\t\t\t\t\t:close-on-select=\"false\"\n\t\t\t\t\t@search=\"searchGroup\" />\n\t\t\t</p>\n\t\t\t<p class=\"top-margin\">\n\t\t\t\t{{ t('settings', 'Two-factor authentication is not enforced for members of the following groups.') }}\n\t\t\t</p>\n\t\t\t<p>\n\t\t\t\t<label for=\"excludedGroups\">\n\t\t\t\t\t<span>{{ t('settings', 'Excluded groups') }}</span>\n\t\t\t\t</label>\n\t\t\t\t<NcSelect v-model=\"excludedGroups\"\n\t\t\t\t\tinput-id=\"excludedGroups\"\n\t\t\t\t\t:options=\"groups\"\n\t\t\t\t\t:disabled=\"loading\"\n\t\t\t\t\t:multiple=\"true\"\n\t\t\t\t\t:loading=\"loadingGroups\"\n\t\t\t\t\t:close-on-select=\"false\"\n\t\t\t\t\t@search=\"searchGroup\" />\n\t\t\t</p>\n\t\t\t<p class=\"top-margin\">\n\t\t\t\t<em>\n\t\t\t\t\t\x3c!-- this text is also found in the documentation. update it there as well if it ever changes --\x3e\n\t\t\t\t\t{{ t('settings', 'When groups are selected/excluded, they use the following logic to determine if a user has 2FA enforced: If no groups are selected, 2FA is enabled for everyone except members of the excluded groups. If groups are selected, 2FA is enabled for all members of these. If a user is both in a selected and excluded group, the selected takes precedence and 2FA is enforced.') }}\n\t\t\t\t</em>\n\t\t\t</p>\n\t\t</template>\n\t\t<p class=\"top-margin\">\n\t\t\t<NcButton v-if=\"dirty\"\n\t\t\t\ttype=\"primary\"\n\t\t\t\t:disabled=\"loading\"\n\t\t\t\t@click=\"saveChanges\">\n\t\t\t\t{{ t('settings', 'Save changes') }}\n\t\t\t</NcButton>\n\t\t</p>\n\t</NcSettingsSection>\n</template>\n\n<script>\nimport axios from '@nextcloud/axios'\nimport NcSelect from '@nextcloud/vue/dist/Components/NcSelect.js'\nimport NcButton from '@nextcloud/vue/dist/Components/NcButton.js'\nimport NcCheckboxRadioSwitch from '@nextcloud/vue/dist/Components/NcCheckboxRadioSwitch.js'\nimport NcSettingsSection from '@nextcloud/vue/dist/Components/NcSettingsSection.js'\nimport { loadState } from '@nextcloud/initial-state'\n\nimport sortedUniq from 'lodash/sortedUniq.js'\nimport uniq from 'lodash/uniq.js'\nimport debounce from 'lodash/debounce.js'\nimport { generateUrl, generateOcsUrl } from '@nextcloud/router'\n\nexport default {\n\tname: 'AdminTwoFactor',\n\tcomponents: {\n\t\tNcSelect,\n\t\tNcButton,\n\t\tNcCheckboxRadioSwitch,\n\t\tNcSettingsSection,\n\t},\n\tdata() {\n\t\treturn {\n\t\t\tloading: false,\n\t\t\tdirty: false,\n\t\t\tgroups: [],\n\t\t\tloadingGroups: false,\n\t\t\ttwoFactorAdminDoc: loadState('settings', 'two-factor-admin-doc'),\n\t\t}\n\t},\n\tcomputed: {\n\t\tenforced: {\n\t\t\tget() {\n\t\t\t\treturn this.$store.state.enforced\n\t\t\t},\n\t\t\tset(val) {\n\t\t\t\tthis.dirty = true\n\t\t\t\tthis.$store.commit('setEnforced', val)\n\t\t\t},\n\t\t},\n\t\tenforcedGroups: {\n\t\t\tget() {\n\t\t\t\treturn this.$store.state.enforcedGroups\n\t\t\t},\n\t\t\tset(val) {\n\t\t\t\tthis.dirty = true\n\t\t\t\tthis.$store.commit('setEnforcedGroups', val)\n\t\t\t},\n\t\t},\n\t\texcludedGroups: {\n\t\t\tget() {\n\t\t\t\treturn this.$store.state.excludedGroups\n\t\t\t},\n\t\t\tset(val) {\n\t\t\t\tthis.dirty = true\n\t\t\t\tthis.$store.commit('setExcludedGroups', val)\n\t\t\t},\n\t\t},\n\t},\n\tmounted() {\n\t\t// Groups are loaded dynamically, but the assigned ones *should*\n\t\t// be valid groups, so let's add them as initial state\n\t\tthis.groups = sortedUniq(uniq(this.enforcedGroups.concat(this.excludedGroups)))\n\n\t\t// Populate the groups with a first set so the dropdown is not empty\n\t\t// when opening the page the first time\n\t\tthis.searchGroup('')\n\t},\n\tmethods: {\n\t\tsearchGroup: debounce(function(query) {\n\t\t\tthis.loadingGroups = true\n\t\t\taxios.get(generateOcsUrl('cloud/groups?offset=0&search={query}&limit=20', { query }))\n\t\t\t\t.then(res => res.data.ocs)\n\t\t\t\t.then(ocs => ocs.data.groups)\n\t\t\t\t.then(groups => { this.groups = sortedUniq(uniq(this.groups.concat(groups))) })\n\t\t\t\t.catch(err => console.error('could not search groups', err))\n\t\t\t\t.then(() => { this.loadingGroups = false })\n\t\t}, 500),\n\n\t\tsaveChanges() {\n\t\t\tthis.loading = true\n\n\t\t\tconst data = {\n\t\t\t\tenforced: this.enforced,\n\t\t\t\tenforcedGroups: this.enforcedGroups,\n\t\t\t\texcludedGroups: this.excludedGroups,\n\t\t\t}\n\t\t\taxios.put(generateUrl('/settings/api/admin/twofactorauth'), data)\n\t\t\t\t.then(resp => resp.data)\n\t\t\t\t.then(state => {\n\t\t\t\t\tthis.state = state\n\t\t\t\t\tthis.dirty = false\n\t\t\t\t})\n\t\t\t\t.catch(err => {\n\t\t\t\t\tconsole.error('could not save changes', err)\n\t\t\t\t})\n\t\t\t\t.then(() => { this.loading = false })\n\t\t},\n\t},\n}\n<\/script>\n\n<style scoped>\n\t.two-factor-loading {\n\t\tdisplay: inline-block;\n\t\tvertical-align: sub;\n\t\tmargin-left: -2px;\n\t\tmargin-right: 1px;\n\t}\n\n\t.top-margin {\n\t\tmargin-top: 0.5rem;\n\t}\n</style>\n"],sourceRoot:""}]),e.Z=a},1196:function(t){t.exports=function(t,e,n){for(var r=-1,o=null==t?0:t.length;++r<o;)if(n(e,t[r]))return!0;return!1}},93680:function(t,e,n){var r=n(77813);t.exports=function(t,e){for(var n=-1,o=t.length,i=0,a=[];++n<o;){var s=t[n],c=e?e(s):s;if(!n||!r(c,u)){var u=c;a[i++]=0===s?0:s}}return a}},45652:function(t,e,n){var r=n(88668),o=n(47443),i=n(1196),a=n(74757),s=n(23593),c=n(21814);t.exports=function(t,e,n){var u=-1,l=o,d=t.length,p=!0,f=[],h=f;if(n)p=!1,l=i;else if(d>=200){var g=e?null:s(t);if(g)return c(g);p=!1,l=a,h=new r}else h=e?[]:f;t:for(;++u<d;){var m=t[u],v=e?e(m):m;if(m=n||0!==m?m:0,p&&v==v){for(var y=h.length;y--;)if(h[y]===v)continue t;e&&h.push(v),f.push(m)}else l(h,v,n)||(h!==f&&h.push(v),f.push(m))}return f}},23593:function(t,e,n){var r=n(58525),o=n(50308),i=n(21814),a=r&&1/i(new r([,-0]))[1]==1/0?function(t){return new r(t)}:o;t.exports=a},23279:function(t,e,n){var r=n(13218),o=n(7771),i=n(14841),a=Math.max,s=Math.min;t.exports=function(t,e,n){var c,u,l,d,p,f,h=0,g=!1,m=!1,v=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function y(e){var n=c,r=u;return c=u=void 0,h=e,d=t.apply(r,n)}function b(t){var n=t-f;return void 0===f||n>=e||n<0||m&&t-h>=l}function w(){var t=o();if(b(t))return A(t);p=setTimeout(w,function(t){var n=e-(t-f);return m?s(n,l-(t-h)):n}(t))}function A(t){return p=void 0,v&&c?y(t):(c=u=void 0,d)}function x(){var t=o(),n=b(t);if(c=arguments,u=this,f=t,n){if(void 0===p)return function(t){return h=t,p=setTimeout(w,e),g?y(t):d}(f);if(m)return clearTimeout(p),p=setTimeout(w,e),y(f)}return void 0===p&&(p=setTimeout(w,e)),d}return e=i(e)||0,r(n)&&(g=!!n.leading,l=(m="maxWait"in n)?a(i(n.maxWait)||0,e):l,v="trailing"in n?!!n.trailing:v),x.cancel=function(){void 0!==p&&clearTimeout(p),h=0,c=f=u=p=void 0},x.flush=function(){return void 0===p?d:A(o())},x}},7771:function(t,e,n){var r=n(55639);t.exports=function(){return r.Date.now()}},97520:function(t,e,n){var r=n(93680);t.exports=function(t){return t&&t.length?r(t):[]}},44908:function(t,e,n){var r=n(45652);t.exports=function(t){return t&&t.length?r(t):[]}}},i={};function a(t){var e=i[t];if(void 0!==e)return e.exports;var n=i[t]={id:t,loaded:!1,exports:{}};return o[t].call(n.exports,n,n.exports,a),n.loaded=!0,n.exports}a.m=o,e=[],a.O=function(t,n,r,o){if(!n){var i=1/0;for(l=0;l<e.length;l++){n=e[l][0],r=e[l][1],o=e[l][2];for(var s=!0,c=0;c<n.length;c++)(!1&o||i>=o)&&Object.keys(a.O).every((function(t){return a.O[t](n[c])}))?n.splice(c--,1):(s=!1,o<i&&(i=o));if(s){e.splice(l--,1);var u=r();void 0!==u&&(t=u)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[n,r,o]},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,{a:e}),e},a.d=function(t,e){for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},a.f={},a.e=function(t){return Promise.all(Object.keys(a.f).reduce((function(e,n){return a.f[n](t,e),e}),[]))},a.u=function(t){return t+"-"+t+".js?v=2c0c1c90293ee127481e"},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n={},r="nextcloud:",a.l=function(t,e,o,i){if(n[t])n[t].push(e);else{var s,c;if(void 0!==o)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var d=u[l];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==r+o){s=d;break}}s||(c=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.setAttribute("data-webpack",r+o),s.src=t),n[t]=[e];var p=function(e,r){s.onerror=s.onload=null,clearTimeout(f);var o=n[t];if(delete n[t],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(t){return t(r)})),e)return e(r)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),c&&document.head.appendChild(s)}},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t},a.j=788,function(){var t;a.g.importScripts&&(t=a.g.location+"");var e=a.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");if(n.length)for(var r=n.length-1;r>-1&&!t;)t=n[r--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=t}(),function(){a.b=document.baseURI||self.location.href;var t={788:0};a.f.j=function(e,n){var r=a.o(t,e)?t[e]:void 0;if(0!==r)if(r)n.push(r[2]);else{var o=new Promise((function(n,o){r=t[e]=[n,o]}));n.push(r[2]=o);var i=a.p+a.u(e),s=new Error;a.l(i,(function(n){if(a.o(t,e)&&(0!==(r=t[e])&&(t[e]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",s.name="ChunkLoadError",s.type=o,s.request=i,r[1](s)}}),"chunk-"+e,e)}},a.O.j=function(e){return 0===t[e]};var e=function(e,n){var r,o,i=n[0],s=n[1],c=n[2],u=0;if(i.some((function(e){return 0!==t[e]}))){for(r in s)a.o(s,r)&&(a.m[r]=s[r]);if(c)var l=c(a)}for(e&&e(n);u<i.length;u++)o=i[u],a.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return a.O(l)},n=self.webpackChunknextcloud=self.webpackChunknextcloud||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}(),a.nc=void 0;var s=a.O(void 0,[7874],(function(){return a(93772)}));s=a.O(s)}();
//# sourceMappingURL=settings-vue-settings-admin-security.js.map?v=e219a90e9d1befdac52a