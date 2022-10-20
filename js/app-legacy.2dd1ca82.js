(function(){"use strict";var e={8603:function(e,t,n){n(6992),n(8674),n(9601),n(7727);var r=n(144),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("h1",{staticClass:"app-title"},[e._v("Roistat test")])]),n("v-main",[n("v-container",{staticClass:"content-wrapper"},[n("UsersTable"),n("v-btn",{staticClass:"mt-4",attrs:{color:"primary"},on:{click:function(t){return e.toggleModal(!0)}}},[e._v("Добавить")]),n("ModalWrapper",{attrs:{title:"Добавление пользователя",isShowModal:e.isShowModal},on:{handleCloseModal:function(t){return e.toggleModal(!1)}}},[n("AddUserForm",{on:{handleCloseModal:function(t){return e.toggleModal(!1)}}})],1)],1)],1)],1)},a=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{attrs:{width:"100%","max-width":"600"}},[n("v-simple-table",{attrs:{"fixed-header":"",height:"600px"},scopedSlots:e._u([{key:"default",fn:function(){return[n("UsersTableHead"),n("tbody",{key:e.parentKey},e._l(e.allUsers,(function(e){return n("UsersTableUserRow",{key:e.id,attrs:{user:e,childs:e.childs,depth:0}})})),1)]},proxy:!0}])})],1)},l=[],i=n(4367),u=n(629),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.childs?n("Fragment",[n("tr",[n("td",{staticClass:"d-flex align-center",style:e.indent},[e.depth>0?n("v-icon",{attrs:{light:""}},[e._v("mdi-subdirectory-arrow-right")]):e._e(),n("span",{staticClass:"username"},[e._v(e._s(e.user.name))])],1),n("td",{staticClass:"phone"},[e._v(e._s(e.user.phone))])]),e._l(e.childs,(function(t){return n("UsersTableUserRow",{key:t.name,attrs:{childs:t.childs,user:t,depth:e.depth+1}})}))],2):e._e()},d=[],h=n(266),f={name:"UsersTableUserRow",components:{Fragment:h.HY},props:["user","childs","depth"],computed:{indent:function(){return{"padding-left":"".concat(20*this.depth+16,"px")}}}},p=f,m=n(1001),v=n(3453),b=n.n(v),y=n(6428),g=(0,m.Z)(p,c,d,!1,null,"6afdd2d6",null),_=g.exports;b()(g,{VIcon:y.Z});var w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("thead",[n("tr",e._l(e.tableHeadings,(function(t,r){return n("UsersTableHeadColumn",{key:r,attrs:{title:t.title,sortKey:t.sortKey,sortedBy:e.getSortKey}})})),1)])},Z=[],S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("th",{staticClass:"table-heading text-left",on:{click:function(t){return e.sortTableByKey(e.sortKey)}}},[e._v(" "+e._s(e.title)+" "),e.isShowArrowIcon?n("v-icon",[e._v(e._s(e.arrowIcon))]):e._e()],1)},U=[],C={name:"UsersTableHeadColumn",props:{sortKey:String,title:String,sortedBy:String},computed:{isKeysEqual:function(){return this.sortedBy===this.sortKey},isShowArrowIcon:function(){return this.isKeysEqual||this.sortedBy==="reversed ".concat(this.sortKey)},arrowIcon:function(){return this.isKeysEqual?"mdi-arrow-down":"mdi-arrow-up"}},methods:(0,i.Z)({},(0,u.nv)(["sortTableByKey"]))},T=C,k=(0,m.Z)(T,S,U,!1,null,"b0ea21f6",null),x=k.exports;b()(k,{VIcon:y.Z});var M={name:"UsersTableHead",data:function(){return{tableHeadings:[{title:"Имя",sortKey:"name"},{title:"Телефон",sortKey:"phone"}]}},components:{UsersTableHeadColumn:x},computed:(0,u.Se)(["getSortKey"])},B=M,K=(0,m.Z)(B,w,Z,!1,null,null,null),I=K.exports,O={name:"UsersTable",data:function(){return{parentKey:"parent"}},components:{UsersTableUserRow:_,UsersTableHead:I},computed:(0,u.Se)(["allUsers"]),mounted:function(){this.loadUsers()},methods:(0,i.Z)({},(0,u.nv)(["loadUsers"])),watch:{allUsers:function(){this.parentKey=Math.random()}}},E=O,V=n(3237),$=n(3568),N=(0,m.Z)(E,o,l,!1,null,null,null),P=N.exports;b()(N,{VCard:V.Z,VSimpleTable:$.Z});var A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-overlay",{attrs:{"z-index":e.zIndex,value:e.isShowModal}},[n("div",{staticClass:"modal"},[n("header",{staticClass:"modal__header"},[n("h2",[e._v(e._s(e.title))]),n("v-btn",{staticClass:"modal__close-button",attrs:{icon:"",light:""},on:{click:function(t){return e.$emit("handleCloseModal")}}},[n("v-icon",[e._v("mdi-close")])],1)],1),e._t("default")],2)])},F=[],H=(n(9653),{name:"ModalWrapper",props:{title:String,isShowModal:Boolean,zIndex:{type:Number,default:10}}}),j=H,L=n(680),R=n(1058),q=(0,m.Z)(j,A,F,!1,null,"74e9f97d",null),z=q.exports;b()(q,{VBtn:L.Z,VIcon:y.Z,VOverlay:R.Z});var W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{attrs:{name:"add-new-user"}},[n("InputContainer",{attrs:{label:"Имя"}},[n("v-text-field",{attrs:{light:"",dense:"","hide-details":"true",outlined:"",label:"Введите имя"},model:{value:e.user.name,callback:function(t){e.$set(e.user,"name",t)},expression:"user.name"}})],1),n("InputContainer",{attrs:{label:"Телефон"}},[n("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:"+# ### ### ## ##",expression:"'+# ### ### ## ##'"}],attrs:{light:"",dense:"","hide-details":"true",outlined:"",label:"Введите номер телефона"},model:{value:e.user.phone,callback:function(t){e.$set(e.user,"phone",t)},expression:"user.phone"}})],1),n("InputContainer",{attrs:{label:"Начальник"}},[n("v-select",{attrs:{items:e.chiefs,"hide-details":"true",light:"",dense:"",outlined:"",label:"Выбрать начальника"},model:{value:e.user.chief,callback:function(t){e.$set(e.user,"chief",t)},expression:"user.chief"}})],1),n("v-btn",{staticClass:"mt-6",attrs:{color:"primary",type:"submit",light:"",width:"100%",disabled:e.isDisableAddButton},on:{click:e.addUserForm}},[e._v("Сохранить")])],1)},D=[],J=(n(8309),n(1539),n(4747),n(8862),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"form-container"},[n("label",{staticClass:"form-container__label"},[e._v(e._s(e.label))]),e._t("default")],2)}),Y=[],G={name:"InputContainer",props:{label:String}},Q=G,X=(0,m.Z)(Q,J,Y,!1,null,"0b494498",null),ee=X.exports,te={name:"AddUserForm",data:function(){return{user:{id:null,name:"",phone:"",childs:[],chief:null},chiefs:[]}},components:{InputContainer:ee},created:function(){this.getChiefs(this.allUsers),this.user.id=this.chiefs.length+1},computed:(0,i.Z)((0,i.Z)({},(0,u.Se)(["allUsers"])),{},{isDisableAddButton:function(){return!this.user.name||!this.user.phone}}),methods:(0,i.Z)((0,i.Z)({},(0,u.nv)(["addNewUser"])),{},{getChiefs:function(e){var t=this;e.forEach((function(e){t.chiefs.push(e.name),e.childs&&t.getChiefs(e.childs)}))},addUserForm:function(){this.addNewUser(this.user),this.$emit("handleCloseModal"),localStorage.setItem("users",JSON.stringify(this.allUsers))}})},ne=te,re=n(4812),se=n(5978),ae=(0,m.Z)(ne,W,D,!1,null,null,null),oe=ae.exports;b()(ae,{VBtn:L.Z,VSelect:re.Z,VTextField:se.Z});var le={name:"App",components:{UsersTable:P,ModalWrapper:z,AddUserForm:oe},data:function(){return{isShowModal:!1}},methods:{toggleModal:function(e){this.isShowModal=e}}},ie=le,ue=n(7524),ce=n(7199),de=n(2255),he=n(7877),fe=(0,m.Z)(ie,s,a,!1,null,null,null),pe=fe.exports;b()(fe,{VApp:ue.Z,VAppBar:ce.Z,VBtn:L.Z,VContainer:de.Z,VMain:he.Z});n(2707),n(4916),n(5306);r.Z.use(u.ZP);var me=new u.ZP.Store({actions:{addNewUser:function(e,t){var n=e.commit;n("addNewUser",t)},loadUsers:function(e){var t=e.commit,n=JSON.parse(localStorage.getItem("users"));n&&t("updateUsers",n)},sortTableByKey:function(e,t){var n=e.commit;n("sortTable",t)}},state:{keyTableSortedBy:"",users:[{id:0,name:"Майкл Бабл",phone:"+7 978 785 48 99",childs:[]},{id:1,name:"Кэти Пэрри",phone:"+7 978 785 48 00",childs:[{id:2,name:"Тэйлор Свифт",phone:"+7 978 985 48 99",childs:[]}]},{id:3,name:"Викенд",phone:"+7 978 785 48 01",childs:[]}]},getters:{allUsers:function(e){return e.users},getSortKey:function(e){return e.keyTableSortedBy}},mutations:{addNewUser:function(e,t){e.users.push(t),e.users.pop(t);var n=!1;function r(e){e.forEach((function(e){e.name===t.chief?(n=!0,e.childs.push(t)):r(e.childs)}))}r(e.users),n||e.users.push(t)},updateUsers:function(e,t){e.users=t},sortTable:function(e,t){function n(r){switch(t){case"name":r=r.sort((function(n,r){return n.name.toLocaleLowerCase()>r.name.toLocaleLowerCase()?t===e.keyTableSortedBy?1:-1:n.name.toLocaleLowerCase()<r.name.toLocaleLowerCase()?t===e.keyTableSortedBy?-1:1:0}));break;case"phone":r=r.sort((function(n,r){var s=Number(n.phone.replace(/\s+/g,"")),a=Number(r.phone.replace(/\s+/g,""));return t===e.keyTableSortedBy?s-a:a-s}));break}return r.forEach((function(e){e.childs&&n(e.childs)})),r}e.keyTableSortedBy=t===e.keyTableSortedBy?"reversed ".concat(t):t,n(e.users)}}}),ve=n(9132),be=n(1846);r.Z.use(ve.Z);var ye=new ve.Z({theme:{themes:{light:{primary:be.Z.deepPurple.darken2,secondary:be.Z.deepPurple.lighten4,accent:be.Z.indigo.base}}}}),ge=n(9278);r.Z.use(h.ZP.Plugin),r.Z.use(ge.ZP),r.Z.config.productionTip=!1,new r.Z({store:me,vuetify:ye,render:function(e){return e(pe)}}).$mount("#app")}},t={};function n(r){var s=t[r];if(void 0!==s)return s.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,s,a){if(!r){var o=1/0;for(c=0;c<e.length;c++){r=e[c][0],s=e[c][1],a=e[c][2];for(var l=!0,i=0;i<r.length;i++)(!1&a||o>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[i])}))?r.splice(i--,1):(l=!1,a<o&&(o=a));if(l){e.splice(c--,1);var u=s();void 0!==u&&(t=u)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[r,s,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var s,a,o=r[0],l=r[1],i=r[2],u=0;if(o.some((function(t){return 0!==e[t]}))){for(s in l)n.o(l,s)&&(n.m[s]=l[s]);if(i)var c=i(n)}for(t&&t(r);u<o.length;u++)a=o[u],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(c)},r=self["webpackChunkvue_test"]=self["webpackChunkvue_test"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(8603)}));r=n.O(r)})();
//# sourceMappingURL=app-legacy.2dd1ca82.js.map