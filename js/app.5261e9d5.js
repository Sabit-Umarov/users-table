(function(){"use strict";var e={8603:function(e,t,r){var s=r(144),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[r("h1",{staticClass:"app-title"},[e._v("Roistat test")])]),r("v-main",[r("v-container",{staticClass:"content-wrapper"},[r("UsersTable"),r("v-btn",{staticClass:"mt-4",attrs:{color:"primary"},on:{click:function(t){return e.toggleModal(!0)}}},[e._v("Добавить")]),r("ModalWrapper",{attrs:{title:"Добавление пользователя",isShowModal:e.isShowModal},on:{handleCloseModal:function(t){return e.toggleModal(!1)}}},[r("AddUserForm",{on:{handleCloseModal:function(t){return e.toggleModal(!1)}}})],1)],1)],1)],1)},a=[],o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",{attrs:{width:"100%","max-width":"600"}},[r("v-simple-table",{attrs:{"fixed-header":"",height:"600px"},scopedSlots:e._u([{key:"default",fn:function(){return[r("UsersTableHead"),r("tbody",{key:e.parentKey},e._l(e.allUsers,(function(e){return r("UsersTableUserRow",{key:e.id,attrs:{user:e,childs:e.childs,depth:0}})})),1)]},proxy:!0}])})],1)},l=[],i=r(629),u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.childs?r("Fragment",[r("tr",[r("td",{staticClass:"d-flex align-center",style:e.indent},[e.depth>0?r("v-icon",{attrs:{light:""}},[e._v("mdi-subdirectory-arrow-right")]):e._e(),r("span",{staticClass:"username"},[e._v(e._s(e.user.name))])],1),r("td",{staticClass:"phone"},[e._v(e._s(e.user.phone))])]),e._l(e.childs,(function(t){return r("UsersTableUserRow",{key:t.name,attrs:{childs:t.childs,user:t,depth:e.depth+1}})}))],2):e._e()},d=[],c=r(266),h={name:"UsersTableUserRow",components:{Fragment:c.HY},props:["user","childs","depth"],computed:{indent(){return{"padding-left":20*this.depth+16+"px"}}}},p=h,m=r(1001),f=r(3453),v=r.n(f),b=r(6428),y=(0,m.Z)(p,u,d,!1,null,"6afdd2d6",null),g=y.exports;v()(y,{VIcon:b.Z});var _=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("thead",[r("tr",e._l(e.tableHeadings,(function(t,s){return r("UsersTableHeadColumn",{key:s,attrs:{title:t.title,sortKey:t.sortKey,sortedBy:e.getSortKey}})})),1)])},w=[],S=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("th",{staticClass:"table-heading text-left",on:{click:function(t){return e.sortTableByKey(e.sortKey)}}},[e._v(" "+e._s(e.title)+" "),e.isShowArrowIcon?r("v-icon",[e._v(e._s(e.arrowIcon))]):e._e()],1)},U=[],Z={name:"UsersTableHeadColumn",props:{sortKey:String,title:String,sortedBy:String},computed:{isKeysEqual(){return this.sortedBy===this.sortKey},isShowArrowIcon(){return this.isKeysEqual||this.sortedBy===`reversed ${this.sortKey}`},arrowIcon(){return this.isKeysEqual?"mdi-arrow-down":"mdi-arrow-up"}},methods:{...(0,i.nv)(["sortTableByKey"])}},C=Z,T=(0,m.Z)(C,S,U,!1,null,"b0ea21f6",null),k=T.exports;v()(T,{VIcon:b.Z});var x={name:"UsersTableHead",data:()=>({tableHeadings:[{title:"Имя",sortKey:"name"},{title:"Телефон",sortKey:"phone"}]}),components:{UsersTableHeadColumn:k},computed:(0,i.Se)(["getSortKey"])},M=x,B=(0,m.Z)(M,_,w,!1,null,null,null),K=B.exports,I={name:"UsersTable",data:()=>({parentKey:"parent"}),components:{UsersTableUserRow:g,UsersTableHead:K},computed:(0,i.Se)(["allUsers"]),mounted(){this.loadUsers()},methods:{...(0,i.nv)(["loadUsers"])},watch:{allUsers(){this.parentKey=Math.random()}}},O=I,$=r(3237),E=r(3568),V=(0,m.Z)(O,o,l,!1,null,null,null),N=V.exports;v()(V,{VCard:$.Z,VSimpleTable:E.Z});var P=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-overlay",{attrs:{"z-index":e.zIndex,value:e.isShowModal}},[r("div",{staticClass:"modal"},[r("header",{staticClass:"modal__header"},[r("h2",[e._v(e._s(e.title))]),r("v-btn",{staticClass:"modal__close-button",attrs:{icon:"",light:""},on:{click:function(t){return e.$emit("handleCloseModal")}}},[r("v-icon",[e._v("mdi-close")])],1)],1),e._t("default")],2)])},A=[],F={name:"ModalWrapper",props:{title:String,isShowModal:Boolean,zIndex:{type:Number,default:10}}},H=F,j=r(680),L=r(1058),R=(0,m.Z)(H,P,A,!1,null,"74e9f97d",null),q=R.exports;v()(R,{VBtn:j.Z,VIcon:b.Z,VOverlay:L.Z});var z=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{attrs:{name:"add-new-user"}},[r("InputContainer",{attrs:{label:"Имя"}},[r("v-text-field",{attrs:{light:"",dense:"","hide-details":"true",outlined:"",label:"Введите имя"},model:{value:e.user.name,callback:function(t){e.$set(e.user,"name",t)},expression:"user.name"}})],1),r("InputContainer",{attrs:{label:"Телефон"}},[r("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:"+# ### ### ## ##",expression:"'+# ### ### ## ##'"}],attrs:{light:"",dense:"","hide-details":"true",outlined:"",label:"Введите номер телефона"},model:{value:e.user.phone,callback:function(t){e.$set(e.user,"phone",t)},expression:"user.phone"}})],1),r("InputContainer",{attrs:{label:"Начальник"}},[r("v-select",{attrs:{items:e.chiefs,"hide-details":"true",light:"",dense:"",outlined:"",label:"Выбрать начальника"},model:{value:e.user.chief,callback:function(t){e.$set(e.user,"chief",t)},expression:"user.chief"}})],1),r("v-btn",{staticClass:"mt-6",attrs:{color:"primary",type:"submit",light:"",width:"100%",disabled:e.isDisableAddButton},on:{click:e.addUserForm}},[e._v("Сохранить")])],1)},W=[],D=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"form-container"},[r("label",{staticClass:"form-container__label"},[e._v(e._s(e.label))]),e._t("default")],2)},J=[],Y={name:"InputContainer",props:{label:String}},G=Y,Q=(0,m.Z)(G,D,J,!1,null,"0b494498",null),X=Q.exports,ee={name:"AddUserForm",data:()=>({user:{id:null,name:"",phone:"",childs:[],chief:null},chiefs:[]}),components:{InputContainer:X},created(){this.getChiefs(this.allUsers),this.user.id=this.chiefs.length+1},computed:{...(0,i.Se)(["allUsers"]),isDisableAddButton(){return!this.user.name||!this.user.phone}},methods:{...(0,i.nv)(["addNewUser"]),getChiefs(e){e.forEach((e=>{this.chiefs.push(e.name),e.childs&&this.getChiefs(e.childs)}))},addUserForm(){this.addNewUser(this.user),this.$emit("handleCloseModal"),localStorage.setItem("users",JSON.stringify(this.allUsers))}}},te=ee,re=r(4812),se=r(5978),ne=(0,m.Z)(te,z,W,!1,null,null,null),ae=ne.exports;v()(ne,{VBtn:j.Z,VSelect:re.Z,VTextField:se.Z});var oe={name:"App",components:{UsersTable:N,ModalWrapper:q,AddUserForm:ae},data:()=>({isShowModal:!1}),methods:{toggleModal(e){this.isShowModal=e}}},le=oe,ie=r(7524),ue=r(7199),de=r(2255),ce=r(7877),he=(0,m.Z)(le,n,a,!1,null,null,null),pe=he.exports;v()(he,{VApp:ie.Z,VAppBar:ue.Z,VBtn:j.Z,VContainer:de.Z,VMain:ce.Z}),s.Z.use(i.ZP);var me=new i.ZP.Store({actions:{addNewUser({commit:e},t){e("addNewUser",t)},loadUsers({commit:e}){const t=JSON.parse(localStorage.getItem("users"));t&&e("updateUsers",t)},sortTableByKey({commit:e},t){e("sortTable",t)}},state:{keyTableSortedBy:"",users:[{id:0,name:"Майкл Бабл",phone:"+7 978 785 48 99",childs:[]},{id:1,name:"Кэти Пэрри",phone:"+7 978 785 48 00",childs:[{id:2,name:"Тэйлор Свифт",phone:"+7 978 985 48 99",childs:[]}]},{id:3,name:"Викенд",phone:"+7 978 785 48 01",childs:[]}]},getters:{allUsers(e){return e.users},getSortKey(e){return e.keyTableSortedBy}},mutations:{addNewUser(e,t){e.users.push(t),e.users.pop(t);let r=!1;function s(e){e.forEach((e=>{e.name===t.chief?(r=!0,e.childs.push(t)):s(e.childs)}))}s(e.users),r||e.users.push(t)},updateUsers(e,t){e.users=t},sortTable(e,t){function r(s){switch(t){case"name":s=s.sort(((r,s)=>r.name.toLocaleLowerCase()>s.name.toLocaleLowerCase()?t===e.keyTableSortedBy?1:-1:r.name.toLocaleLowerCase()<s.name.toLocaleLowerCase()?t===e.keyTableSortedBy?-1:1:0));break;case"phone":s=s.sort(((r,s)=>{const n=Number(r.phone.replace(/\s+/g,"")),a=Number(s.phone.replace(/\s+/g,""));return t===e.keyTableSortedBy?n-a:a-n}));break}return s.forEach((e=>{e.childs&&r(e.childs)})),s}e.keyTableSortedBy=t===e.keyTableSortedBy?`reversed ${t}`:t,r(e.users)}}}),fe=r(9132),ve=r(1846);s.Z.use(fe.Z);var be=new fe.Z({theme:{themes:{light:{primary:ve.Z.deepPurple.darken2,secondary:ve.Z.deepPurple.lighten4,accent:ve.Z.indigo.base}}}}),ye=r(9278);s.Z.use(c.ZP.Plugin),s.Z.use(ye.ZP),s.Z.config.productionTip=!1,new s.Z({store:me,vuetify:be,render:e=>e(pe)}).$mount("#app")}},t={};function r(s){var n=t[s];if(void 0!==n)return n.exports;var a=t[s]={exports:{}};return e[s](a,a.exports,r),a.exports}r.m=e,function(){var e=[];r.O=function(t,s,n,a){if(!s){var o=1/0;for(d=0;d<e.length;d++){s=e[d][0],n=e[d][1],a=e[d][2];for(var l=!0,i=0;i<s.length;i++)(!1&a||o>=a)&&Object.keys(r.O).every((function(e){return r.O[e](s[i])}))?s.splice(i--,1):(l=!1,a<o&&(o=a));if(l){e.splice(d--,1);var u=n();void 0!==u&&(t=u)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[s,n,a]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var s in t)r.o(t,s)&&!r.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,s){var n,a,o=s[0],l=s[1],i=s[2],u=0;if(o.some((function(t){return 0!==e[t]}))){for(n in l)r.o(l,n)&&(r.m[n]=l[n]);if(i)var d=i(r)}for(t&&t(s);u<o.length;u++)a=o[u],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(d)},s=self["webpackChunkvue_test"]=self["webpackChunkvue_test"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=r.O(void 0,[998],(function(){return r(8603)}));s=r.O(s)})();
//# sourceMappingURL=app.5261e9d5.js.map