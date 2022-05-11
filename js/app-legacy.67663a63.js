(function(){"use strict";var e={8391:function(e,t,n){n(6992),n(8674),n(9601),n(7727);var r=n(144),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("h1",{staticClass:"app-title"},[e._v("Roistat test")])]),n("v-main",[n("v-container",{staticClass:"content-wrapper"},[n("UsersTable"),n("v-btn",{staticClass:"mt-4",attrs:{color:"primary"},on:{click:function(t){return e.toggleModal(!0)}}},[e._v("Добавить")]),n("ModalUI",{attrs:{title:"Добавление пользователя",isShowModal:e.isShowModal},on:{handleCloseModal:function(t){return e.toggleModal(!1)}}},[n("AddUserForm",{on:{handleCloseModal:function(t){return e.toggleModal(!1)}}})],1)],1)],1)],1)},o=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{attrs:{width:"100%","max-width":"600"}},[n("v-simple-table",{attrs:{"fixed-header":"",height:"600px"},scopedSlots:e._u([{key:"default",fn:function(){return[n("UsersTableHead"),n("tbody",{key:e.parentKey},e._l(e.allUsers,(function(e){return n("UsersTableUserRow",{key:e.id,attrs:{user:e,childs:e.childs,depth:0}})})),1)]},proxy:!0}])})],1)},l=[],i=n(4367),u=n(629),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.childs?n("Fragment",[n("tr",[n("td",{staticClass:"d-flex align-center",style:e.indent},[e.depth>0?n("v-icon",{attrs:{light:""}},[e._v("mdi-subdirectory-arrow-right")]):e._e(),n("span",{staticClass:"username"},[e._v(e._s(e.user.name))])],1),n("td",[e._v(e._s(e.user.phone))])]),e._l(e.childs,(function(t){return n("UsersTableUserRow",{key:t.name,attrs:{childs:t.childs,user:t,depth:e.depth+1}})}))],2):e._e()},d=[],h=n(266),f={name:"UsersTableUserRow",components:{Fragment:h.HY},props:["user","childs","depth"],computed:{indent:function(){return{"padding-left":"".concat(20*this.depth+16,"px")}}}},p=f,m=n(1001),v=n(3453),b=n.n(v),y=n(6428),g=(0,m.Z)(p,c,d,!1,null,"99d7bd64",null),_=g.exports;b()(g,{VIcon:y.Z});var U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("thead",[n("tr",e._l(e.tableHeadings,(function(t,r){return n("UsersTableHeadColumn",{key:r,attrs:{title:t.title,sortKey:t.sortKey,sortedBy:e.getSortKey}})})),1)])},w=[],Z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("th",{staticClass:"table-heading text-left",on:{click:function(t){return e.sortTableByKey(e.sortKey)}}},[e._v(" "+e._s(e.title)+" "),e.sortedBy===e.sortKey||e.sortedBy==="reversed "+e.sortKey?n("v-icon",[e._v(e._s(e.sortedBy===e.sortKey?"mdi-arrow-down":"mdi-arrow-up"))]):e._e()],1)},S=[],C={name:"UsersTableHeadColumn",props:{sortKey:String,title:String,sortedBy:String},methods:(0,i.Z)({},(0,u.nv)(["sortTableByKey"]))},T=C,k=(0,m.Z)(T,Z,S,!1,null,"2e96c0d4",null),x=k.exports;b()(k,{VIcon:y.Z});var M={name:"UsersTableHead",data:function(){return{tableHeadings:[{title:"Имя",sortKey:"name"},{title:"Телефон",sortKey:"phone"}]}},components:{UsersTableHeadColumn:x},computed:(0,u.Se)(["getSortKey"])},B=M,K=(0,m.Z)(B,U,w,!1,null,null,null),O=K.exports,V={name:"UsersTable",data:function(){return{parentKey:"parent"}},components:{UsersTableUserRow:_,UsersTableHead:O},computed:(0,u.Se)(["allUsers"]),mounted:function(){this.loadUsers()},methods:(0,i.Z)({},(0,u.nv)(["loadUsers"])),watch:{allUsers:function(){this.parentKey=Math.random()}}},F=V,$=n(3237),A=n(3568),E=(0,m.Z)(F,a,l,!1,null,null,null),I=E.exports;b()(E,{VCard:$.Z,VSimpleTable:A.Z});var P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-overlay",{attrs:{"z-index":"10",value:e.isShowModal}},[n("div",{staticClass:"modal"},[n("header",{staticClass:"modal__header"},[n("h2",[e._v(e._s(e.title))]),n("v-btn",{staticClass:"modal__close-button",attrs:{icon:"",light:""},on:{click:function(t){return e.$emit("handleCloseModal")}}},[n("v-icon",[e._v("mdi-close")])],1)],1),e._t("default")],2)])},N=[],H={name:"ModalUI",props:{title:String,isShowModal:Boolean}},j=H,L=n(680),R=n(1058),J=(0,m.Z)(j,P,N,!1,null,"44c2d7b2",null),z=J.exports;b()(J,{VBtn:L.Z,VIcon:y.Z,VOverlay:R.Z});var Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{attrs:{name:"add-new-user"}},[n("AddUserFormInputContainer",{attrs:{label:"Имя"}},[n("v-text-field",{attrs:{light:"",dense:"","hide-details":"true",outlined:"",label:"Введите имя"},model:{value:e.user.name,callback:function(t){e.$set(e.user,"name",t)},expression:"user.name"}})],1),n("AddUserFormInputContainer",{attrs:{label:"Телефон"}},[n("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:"+# ### ### ## ##",expression:"'+# ### ### ## ##'"}],attrs:{light:"",dense:"","hide-details":"true",outlined:"",label:"Введите номер телефона"},model:{value:e.user.phone,callback:function(t){e.$set(e.user,"phone",t)},expression:"user.phone"}})],1),n("AddUserFormInputContainer",{attrs:{label:"Начальник"}},[n("v-select",{attrs:{items:e.chiefs,"hide-details":"true",light:"",dense:"",outlined:"",label:"Выбрать начальника"},model:{value:e.user.chief,callback:function(t){e.$set(e.user,"chief",t)},expression:"user.chief"}})],1),n("v-btn",{staticClass:"mt-6",attrs:{color:"primary",type:"submit",light:"",width:"100%",disabled:!e.user.name||!e.user.phone},on:{click:e.AddUserForm}},[e._v("Сохранить")])],1)},q=[],D=(n(1539),n(4747),n(8309),n(8862),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"add-user-form__container"},[n("label",{staticClass:"add-user-form__label"},[e._v(e._s(e.label))]),e._t("default")],2)}),G=[],Q={name:"AddUserFormInputContainer",props:{label:String}},W=Q,X=(0,m.Z)(W,D,G,!1,null,"195ef120",null),ee=X.exports,te={name:"AddUserForm",data:function(){return{user:{id:null,name:"",phone:"",childs:[],chief:null},chiefs:[]}},components:{AddUserFormInputContainer:ee},computed:(0,u.Se)(["allUsers"]),mounted:function(){var e=this.allUsers;this.getChiefs(e),this.user.id=this.chiefs.length+1},methods:(0,i.Z)((0,i.Z)({},(0,u.nv)(["addNewUser"])),{},{getChiefs:function(e){var t=this;e.forEach((function(e){t.chiefs.push(e.name),e.childs&&t.getChiefs(e.childs)}))},AddUserForm:function(){this.addNewUser(this.user),this.$emit("handleCloseModal"),localStorage.setItem("users",JSON.stringify(this.allUsers))}})},ne=te,re=n(4812),se=n(5978),oe=(0,m.Z)(ne,Y,q,!1,null,null,null),ae=oe.exports;b()(oe,{VBtn:L.Z,VSelect:re.Z,VTextField:se.Z});var le={name:"App",components:{UsersTable:I,ModalUI:z,AddUserForm:ae},data:function(){return{isShowModal:!1}},methods:{toggleModal:function(e){this.isShowModal=e}}},ie=le,ue=n(7524),ce=n(7199),de=n(2255),he=n(7877),fe=(0,m.Z)(ie,s,o,!1,null,null,null),pe=fe.exports;b()(fe,{VApp:ue.Z,VAppBar:ce.Z,VBtn:L.Z,VContainer:de.Z,VMain:he.Z});n(2707),n(9653),n(4916),n(5306);r.Z.use(u.ZP);var me=new u.ZP.Store({actions:{addNewUser:function(e,t){var n=e.commit;n("addNewUser",t)},loadUsers:function(e){var t=e.commit,n=JSON.parse(localStorage.getItem("users"));n&&t("updateUsers",n)},sortTableByKey:function(e,t){var n=e.commit;n("sortTable",t)}},state:{keyTableSortedBy:"",users:[{id:0,name:"Майкл Бабл",phone:"+7 978 785 48 99",childs:[]},{id:1,name:"Кэти Пэрри",phone:"+7 978 785 48 00",childs:[{id:2,name:"Тэйлор Свифт",phone:"+7 978 985 48 99",childs:[]}]},{id:3,name:"Викенд",phone:"+7 978 785 48 01",childs:[]}]},getters:{allUsers:function(e){return e.users},getSortKey:function(e){return e.keyTableSortedBy}},mutations:{addNewUser:function(e,t){e.users.push(t),e.users.pop(t);var n=!1;function r(e){e.forEach((function(e){e.name===t.chief?(n=!0,e.childs.push(t)):r(e.childs)}))}r(e.users),n||e.users.push(t)},updateUsers:function(e,t){e.users=t},sortTable:function(e,t){function n(r){switch(t){case"name":r=r.sort((function(n,r){return n.name.toLocaleLowerCase()>r.name.toLocaleLowerCase()?t===e.keyTableSortedBy?1:-1:n.name.toLocaleLowerCase()<r.name.toLocaleLowerCase()?t===e.keyTableSortedBy?-1:1:0})),r.forEach((function(e){e.childs&&n(e.childs)}));break;case"phone":r=r.sort((function(n,r){var s=Number(n.phone.replace(/\s+/g,"")),o=Number(r.phone.replace(/\s+/g,""));return t===e.keyTableSortedBy?s-o:o-s})),r.forEach((function(e){e.childs&&n(e.childs)}));break}return r}t===e.keyTableSortedBy?e.keyTableSortedBy="reversed ".concat(t):e.keyTableSortedBy=t,n(e.users)}}}),ve=n(9132),be=n(1846);r.Z.use(ve.Z);var ye=new ve.Z({theme:{themes:{light:{primary:be.Z.deepPurple.darken2,secondary:be.Z.deepPurple.lighten4,accent:be.Z.indigo.base}}}}),ge=n(9278);r.Z.use(h.ZP.Plugin),r.Z.use(ge.ZP),r.Z.config.productionTip=!1,new r.Z({store:me,vuetify:ye,render:function(e){return e(pe)}}).$mount("#app")}},t={};function n(r){var s=t[r];if(void 0!==s)return s.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,r,s,o){if(!r){var a=1/0;for(c=0;c<e.length;c++){r=e[c][0],s=e[c][1],o=e[c][2];for(var l=!0,i=0;i<r.length;i++)(!1&o||a>=o)&&Object.keys(n.O).every((function(e){return n.O[e](r[i])}))?r.splice(i--,1):(l=!1,o<a&&(a=o));if(l){e.splice(c--,1);var u=s();void 0!==u&&(t=u)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[r,s,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var s,o,a=r[0],l=r[1],i=r[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(s in l)n.o(l,s)&&(n.m[s]=l[s]);if(i)var c=i(n)}for(t&&t(r);u<a.length;u++)o=a[u],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(c)},r=self["webpackChunkvue_test"]=self["webpackChunkvue_test"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(8391)}));r=n.O(r)})();
//# sourceMappingURL=app-legacy.67663a63.js.map