webpackJsonp([2],{"/wPe":function(t,e,a){"use strict";function i(t){a("oKB7")}var s=a("ib+Y"),n=a("7trJ"),r=a("VU/8"),o=i,l=r(s.a,n.a,o,"data-v-74f8afe6",null);e.a=l.exports},"7nvf":function(t,e,a){"use strict";var i=a("ar1J"),s=a("A4/p"),n=a("VU/8"),r=n(i.a,s.a,null,null,null);e.a=r.exports},"7trJ":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-card",{staticClass:"primary",attrs:{dark:""}},[a("v-card-text",{staticClass:"px-0"},[t._v("My Vaults")])],1)],1),t._v(" "),t._l(t.userVaults,function(t){return a("v-flex",{attrs:{xs4:""}},[a("Vault",{attrs:{vault:t}})],1)})],2),t._v(" "),a("v-btn",{attrs:{id:"add-vault",primary:"",fab:"",fixed:"",bottom:"",right:""},on:{click:function(e){t.dialog=!0}},model:{value:t.fab,callback:function(e){t.fab=e},expression:"fab"}},[a("v-icon",[t._v("add")])],1),t._v(" "),a("v-dialog",{attrs:{persistent:"",width:"50%"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("Create New Vault")])]),t._v(" "),a("v-card-text",[a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{label:"Title",required:""},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),t._v(" "),a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{label:"Description"},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1),t._v(" "),a("v-switch",{attrs:{label:"Private"},model:{value:t.private,callback:function(e){t.private=e},expression:"private"}})],1)],1),t._v(" "),a("small",[t._v("*indicates required field")])],1),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{staticClass:"blue--text darken-1",attrs:{flat:""},on:{click:t.closeDialog}},[t._v("Cancel")]),t._v(" "),a("v-btn",{staticClass:"blue--text darken-1",attrs:{flat:""},on:{click:t.createVault}},[t._v("Create")])],1)],1)],1)],1)},s=[],n={render:i,staticRenderFns:s};e.a=n},"A4/p":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-card-media",{attrs:{src:t.activeKeep.imgUrl,height:"400px"}}),t._v(" "),a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("h3",{staticClass:"headline mb-0"},[t._v(t._s(t.activeKeep.title))]),t._v(" "),a("div",[t._v(t._s(t.activeKeep.description))])])]),t._v(" "),a("v-card-actions",[a("v-btn",{staticClass:"orange--text",attrs:{flat:""}},[t._v("Share")]),t._v(" "),a("v-btn",{staticClass:"orange--text add-keep",attrs:{flat:""},on:{click:t.selectKeep}},[t._v("Keep")])],1)],1)},s=[],n={render:i,staticRenderFns:s};e.a=n},Fs8J:function(t,e,a){"use strict";var i=a("YNvL");e.a={name:"home",data:function(){return{fab:!1,dialog:!1,private:"",title:"",description:"",imgUrl:""}},methods:{closeDialog:function(){this.dialog=!1,this.title="",this.description="",this.imgUrl="",this.private=!1},createKeep:function(){var t={title:this.title,description:this.description,imgUrl:this.imgUrl,private:this.private};this.$store.dispatch("addKeep",t),this.closeDialog()}},computed:{keeps:function(){return this.$store.state.homeKeeps}},mounted:function(){this.$store.dispatch("getKeeps")},components:{Keep:i.a}}},IcnI:function(t,e,a){"use strict";var i=a("mtWM"),s=a.n(i),n=a("7+uW"),r=a("NYxO"),o=a("YaEn"),l=!window.location.host.includes("localhost"),c=l?"//trhinehart-keepr.herokuapp.com/":"//localhost:5000/",u=s.a.create({baseURL:c+"api/",timeout:1e4,withCredentials:!0});n.a.use(r.a);var d=new r.a.Store({state:{user:{},loggedIn:!1,userVaults:[],homeKeeps:[],activeVault:{},activeVaultKeeps:[],activeKeep:{},showBottomVaultsBar:!1,selectedKeep:""},mutations:{login:function(t,e){t.user=e,t.loggedIn=!0},logout:function(t){t.user={},t.loggedIn=!1},addVault:function(t,e){t.userVaults.push(e)},findKeep:function(t,e){t.activeKeep=t.homeKeeps.find(function(t){return t.id==e})},clearActiveKeep:function(t){t.activeKeep={}},addKeep:function(t,e){t.homeKeeps.push(e)},addToVault:function(t,e){},showBottomVaultsBar:function(t){t.showBottomVaultsBar=!t.showBottomVaultsBar},findVault:function(t,e){t.activeVault=t.userVaults.find(function(t){return t.id==e})},updateKeeps:function(t,e){t.homeKeeps=e},updateVaults:function(t,e){t.userVaults=e},selectKeep:function(t,e){t.selectedKeep=e},setActiveVault:function(t,e){t.activeVault=e}},actions:{login:function(t,e){var a=t.commit,i=t.dispatch;u.post("account/login",e).then(function(t){a("login",t.data)}).then(function(){i("getUserVaults")}).catch(function(t){return console.error(t)})},signup:function(t,e){var a=t.commit;t.dispath;u.post("account",e).then(function(t){a("login",t.data)}).catch(function(t){return console.error(t)})},logout:function(t){var e=t.commit;t.dispatch;u.delete("account/logout").then(function(){e("logout"),o.a.push("/")})},getAuth:function(t){var e=t.commit,a=t.dispatch;u("account").then(function(t){if(!t.data.email)return o.a.push("/");var a={id:t.data.id,email:t.data.email,userName:t.data.userName,profileImgUrl:t.data.profileImgUrl};e("login",a)}).then(function(){a("getUserVaults")}).catch(function(t){return console.error(t)})},addVault:function(t,e){var a=(t.commit,t.dispatch);e.userId=this.state.user.id,e.vaultKeeps=[],u.post("vaults",e).then(function(t){a("getUserVaults")})},findKeep:function(t,e){var a=t.commit;t.dispatch;a("findKeep",e)},clearActiveKeep:function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(t){var e=t.commit;t.dispatch;e(clearActiveKeep)}),addKeep:function(t,e){var a=(t.commit,t.dispatch);e.userId=this.state.user.id,u.post("keeps",e).then(function(t){a("getKeeps")})},addToVault:function(t,e){t.commit,t.dispatch;e.keepId=this.state.selectedKeep,u.post("vaults/"+e.vaultId+"/addkeep/"+this.state.selectedKeep).then(function(t){console.log(t)})},showBottomVaultsBar:function(t){var e=t.commit;t.dispatch;e("showBottomVaultsBar")},getVaultKeeps:function(t,e){t.commit,t.dispatch;u("vaults/"+this.state.user.id+"/uservaults/"+e).then(function(t){console.log(t)})},getKeeps:function(t){var e=t.commit;t.dispatch;u("keeps").then(function(t){e("updateKeeps",t.data)})},getUserVaults:function(t){var e=t.commit;t.dispatch;u("vaults/"+this.state.user.id+"/uservaults").then(function(t){e("updateVaults",t.data)})},selectKeep:function(t,e){var a=t.commit;t.dispatch;a("selectKeep",e)},setActiveVault:function(t,e){var a=t.commit;t.dispatch;a("setActiveVault",e)}}});e.a=d},"Jf/Y":function(t,e,a){"use strict";var i=a("pr9k"),s=a("L35j"),n=a("VU/8"),r=n(i.a,s.a,null,null,null);e.a=r.exports},L35j:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-card-media",{attrs:{src:t.activeVault.imgUrl,height:"400px"}}),t._v(" "),a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("h3",{staticClass:"headline mb-0"},[t._v(t._s(t.activeVault.title))]),t._v(" "),a("div",[t._v(t._s(t.activeVault.description))])])]),t._v(" "),a("v-card-actions",[a("v-btn",{staticClass:"orange--text",attrs:{flat:""}},[t._v("Share")]),t._v(" "),a("v-btn",{staticClass:"orange--text add-keep",attrs:{flat:""}},[t._v("Keep")])],1)],1)},s=[],n={render:i,staticRenderFns:s};e.a=n},LBbB:function(t,e,a){"use strict";var i=a("YaEn");e.a={name:"Keep",props:["keep"],data:function(){return{}},methods:{singleView:function(t){i.a.push("/keeps/"+t.id)},selectKeep:function(){this.$store.dispatch("selectKeep",this.keep.id),this.$store.dispatch("showBottomVaultsBar")}}}},M93x:function(t,e,a){"use strict";function i(t){a("VQZu")}var s=a("xJD8"),n=a("o8nR"),r=a("VU/8"),o=i,l=r(s.a,n.a,o,null,null);e.a=l.exports},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("7+uW"),s=a("M93x"),n=a("YaEn"),r=a("IcnI"),o=a("3EgV"),l=a.n(o);i.a.config.productionTip=!1,a.e(0).then(a.bind(null,"7zck")),i.a.use(l.a),new i.a({el:"#app",router:n.a,store:r.a,template:"<App/>",components:{App:s.a}})},VQZu:function(t,e){},XbrT:function(t,e,a){"use strict";var i=a("tClW"),s=a("askK"),n=a("VU/8"),r=n(i.a,s.a,null,null,null);e.a=r.exports},YNvL:function(t,e,a){"use strict";var i=a("LBbB"),s=a("m2fB"),n=a("VU/8"),r=n(i.a,s.a,null,null,null);e.a=r.exports},YaEn:function(t,e,a){"use strict";var i=a("7+uW"),s=a("/ocq"),n=a("lO7g"),r=a("/wPe"),o=(a("XbrT"),a("YNvL"),a("7nvf")),l=a("Jf/Y");i.a.use(s.a),e.a=new s.a({routes:[{path:"/",name:"Home",component:n.a},{path:"/vaults",name:"UserVaults",component:r.a},{path:"/vaults/:vaultId",name:"Vault",component:l.a},{path:"/keeps/:keepId",name:"SingleKeepView",component:o.a}]})},ar1J:function(t,e,a){"use strict";e.a={name:"SingleKeepView",data:function(){return{}},methods:{selectKeep:function(){this.$store.dispatch("showBottomVaultsBar")}},computed:{activeKeep:function(){return this.$store.state.activeKeep}},mounted:function(){this.$store.dispatch("selectKeep",this.activeKeep.id),this.$store.dispatch("findKeep",this.$route.params.keepId)}}},askK:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("div",{on:{click:t.singleView}},[a("v-card-media",{attrs:{src:t.vault.imgUrl,height:"200px"}}),t._v(" "),a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("h3",{staticClass:"headline mb-0"},[t._v(t._s(t.vault.title))]),t._v(" "),a("div",[t._v(t._s(t.vault.description))])])])],1),t._v(" "),a("v-card-actions",[a("v-btn",{staticClass:"orange--text",attrs:{flat:""}},[t._v("Share")]),t._v(" "),a("v-btn",{staticClass:"orange--text",attrs:{flat:""}},[t._v("Explore")])],1)],1)},s=[],n={render:i,staticRenderFns:s};e.a=n},bez0:function(t,e,a){"use strict";e.a={name:"BottomVaultsBar",data:function(){return{sheet:!1}},methods:{selectVault:function(){event.stopPropagation(),this.sheet=!0},addToVault:function(t){var e={keepId:null,vaultId:t};this.sheet=!1,this.$store.dispatch("addToVault",e)}},watch:{showBottomVaultsBar:function(t){this.selectVault()}},computed:{userVaults:function(){return this.$store.state.userVaults},showBottomVaultsBar:function(){return this.$store.state.showBottomVaultsBar}},created:function(){}}},"ib+Y":function(t,e,a){"use strict";var i=a("XbrT");e.a={name:"UserVaults",data:function(){return{fab:!1,dialog:!1,title:"",description:"",private:!1}},methods:{closeDialog:function(){this.dialog=!1,this.title="",this.description="",this.private=!1},createVault:function(){var t={title:this.title,description:this.description};this.$store.dispatch("addVault",t),this.closeDialog()}},computed:{userVaults:function(){return this.$store.state.userVaults}},beforeMount:function(){},components:{Vault:i.a}}},kygP:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-card",{staticClass:"primary",attrs:{dark:""}},[a("v-card-text",{staticClass:"px-0"},[t._v("Top Keeps")])],1)],1),t._v(" "),t._l(t.keeps,function(t){return a("v-flex",{attrs:{xs4:""}},[a("Keep",{attrs:{keep:t}})],1)})],2),t._v(" "),a("v-btn",{attrs:{id:"add-keep",primary:"",fab:"",fixed:"",bottom:"",right:""},on:{click:function(e){t.dialog=!0}},model:{value:t.fab,callback:function(e){t.fab=e},expression:"fab"}},[a("v-icon",[t._v("add")])],1),t._v(" "),a("v-dialog",{attrs:{persistent:"",width:"50%"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("Create New Vault")])]),t._v(" "),a("v-card-text",[a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{label:"Title",required:""},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),t._v(" "),a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{label:"Description"},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1),t._v(" "),a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{label:"Image"},model:{value:t.imgUrl,callback:function(e){t.imgUrl=e},expression:"imgUrl"}})],1),t._v(" "),a("v-switch",{attrs:{label:"Private"},model:{value:t.private,callback:function(e){t.private=e},expression:"private"}})],1)],1),t._v(" "),a("small",[t._v("*indicates required field")])],1),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{staticClass:"blue--text darken-1",attrs:{flat:""},on:{click:t.closeDialog}},[t._v("Cancel")]),t._v(" "),a("v-btn",{staticClass:"blue--text darken-1",attrs:{flat:""},on:{click:t.createKeep}},[t._v("Create")])],1)],1)],1)],1)},s=[],n={render:i,staticRenderFns:s};e.a=n},lIJ1:function(t,e){},lO7g:function(t,e,a){"use strict";function i(t){a("lIJ1")}var s=a("Fs8J"),n=a("kygP"),r=a("VU/8"),o=i,l=r(s.a,n.a,o,"data-v-69bb6c99",null);e.a=l.exports},m2fB:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-card",[a("div",{on:{click:function(e){t.singleView(t.keep)}}},[a("v-card-media",{attrs:{src:t.keep.imgUrl,height:"200px"}}),t._v(" "),a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("h3",{staticClass:"headline mb-0"},[t._v(t._s(t.keep.title))]),t._v(" "),a("div",[t._v(t._s(t.keep.description))])])])],1),t._v(" "),a("v-card-actions",[a("v-btn",{staticClass:"orange--text",attrs:{flat:""}},[t._v("Share")]),t._v(" "),a("v-btn",{staticClass:"orange--text add-keep",attrs:{flat:""},on:{click:t.selectKeep}},[t._v("Keep")])],1)],1)],1)},s=[],n={render:i,staticRenderFns:s};e.a=n},o8nR:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{light:""}},[a("v-navigation-drawer",{attrs:{temporary:"","mini-variant":t.miniVariant,clipped:t.clipped,right:t.right,"enable-resize-watcher":""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",t._l(t.items,function(e,i){return a("v-list-tile",{key:i,attrs:{value:"true"},on:{click:e.function}},[a("v-list-tile-action",[a("v-icon",{attrs:{light:""},domProps:{innerHTML:t._s(e.icon)}})],1),t._v(" "),a("v-list-tile-content",[a("v-list-tile-title",{domProps:{textContent:t._s(e.title)}})],1)],1)}))],1),t._v(" "),a("v-toolbar",{attrs:{fixed:""}},[a("v-toolbar-title",{domProps:{textContent:t._s(t.title)},on:{click:t.home}}),t._v(" "),a("v-spacer"),t._v(" "),a("v-btn",{directives:[{name:"show",rawName:"v-show",value:!t.loggedIn,expression:"!loggedIn"}],on:{click:function(e){t.form("Login")}}},[t._v("Login")]),t._v(" "),a("v-btn",{directives:[{name:"show",rawName:"v-show",value:!t.loggedIn,expression:"!loggedIn"}],on:{click:function(e){t.form("Sign Up")}}},[t._v("Sign Up")]),t._v(" "),a("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.loggedIn,expression:"loggedIn"}],attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}},[a("v-icon",[t._v("menu")])],1)],1),t._v(" "),a("main",{attrs:{id:"main"}},[a("router-view")],1),t._v(" "),a("v-layout",{attrs:{row:"","justify-center":""}},[a("v-dialog",{attrs:{persistent:"",width:"50%"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v(t._s(t.authType))])]),t._v(" "),a("v-card-text",[a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{directives:[{name:"show",rawName:"v-show",value:"Sign Up"==t.authType,expression:"authType == 'Sign Up'"}],attrs:{xs12:"",sm6:"",md6:""}},[a("v-text-field",{attrs:{label:"Legal first name",required:""},model:{value:t.formInput.firstName,callback:function(e){t.formInput.firstName=e},expression:"formInput.firstName"}})],1),t._v(" "),a("v-flex",{directives:[{name:"show",rawName:"v-show",value:"Sign Up"==t.authType,expression:"authType == 'Sign Up'"}],attrs:{xs12:"",sm6:"",md6:""}},[a("v-text-field",{attrs:{label:"Legal last name",required:""},model:{value:t.formInput.lastName,callback:function(e){t.formInput.lastName=e},expression:"formInput.lastName"}})],1),t._v(" "),a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{label:"Email",required:""},model:{value:t.formInput.email,callback:function(e){t.formInput.email=e},expression:"formInput.email"}})],1),t._v(" "),a("v-flex",{directives:[{name:"show",rawName:"v-show",value:"Sign Up"==t.authType,expression:"authType == 'Sign Up'"}],attrs:{xs12:""}},[a("v-text-field",{attrs:{label:"Username",required:""},model:{value:t.formInput.username,callback:function(e){t.formInput.username=e},expression:"formInput.username"}})],1),t._v(" "),a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{label:"Password",type:"password",required:""},model:{value:t.formInput.password,callback:function(e){t.formInput.password=e},expression:"formInput.password"}})],1),t._v(" "),a("v-flex",{directives:[{name:"show",rawName:"v-show",value:"Sign Up"==t.authType,expression:"authType == 'Sign Up'"}],attrs:{xs12:""}},[a("v-text-field",{attrs:{label:"Confirm Password",type:"password",required:""},model:{value:t.formInput.confirmPassword,callback:function(e){t.formInput.confirmPassword=e},expression:"formInput.confirmPassword"}})],1)],1)],1),t._v(" "),a("small",[t._v("*indicates required field")])],1),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{staticClass:"blue--text darken-1",attrs:{flat:""},on:{click:t.closeDialog}},[t._v("Cancel")]),t._v(" "),a("v-btn",{staticClass:"blue--text darken-1",attrs:{flat:""},on:{click:t.handleForm}},[t._v(t._s(t.authType))])],1)],1)],1)],1),t._v(" "),a("v-footer",{attrs:{id:"footer",fixed:t.fixed}},[a("span",[t._v("Keepr © 2017")])]),t._v(" "),a("BottomVaultsBar")],1)},s=[],n={render:i,staticRenderFns:s};e.a=n},oKB7:function(t,e){},pr9k:function(t,e,a){"use strict";e.a={name:"SingleVaultView",data:function(){return{}},computed:{activeVault:function(){return this.$store.state.activeVault}},mounted:function(){this.$store.dispatch("getVaultKeeps",this.$route.params.vaultId)}}},sTSO:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-bottom-sheet",{model:{value:t.sheet,callback:function(e){t.sheet=e},expression:"sheet"}},[a("v-list",[a("v-subheader",[t._v("Click Vault to Add Keep to")]),t._v(" "),t._l(t.userVaults,function(e){return a("v-list-tile",{key:e.title,on:{click:function(a){t.addToVault(e.id)}}},[a("v-list-tile-title",[t._v(t._s(e.title))])],1)})],2)],1)},s=[],n={render:i,staticRenderFns:s};e.a=n},tClW:function(t,e,a){"use strict";var i=a("YaEn");e.a={name:"Vault",props:["vault"],data:function(){return{}},methods:{singleView:function(){this.$store.dispatch("setActiveVault",this.vault),i.a.push("/vaults/"+this.vault.id)}}}},vKKP:function(t,e,a){"use strict";var i=a("bez0"),s=a("sTSO"),n=a("VU/8"),r=n(i.a,s.a,null,null,null);e.a=r.exports},xJD8:function(t,e,a){"use strict";var i=a("YaEn"),s=a("vKKP");e.a={name:"app",data:function(){return{clipped:!1,drawer:!1,fixed:!0,items:[{icon:"home",title:"Home",function:this.home},{icon:"account_circle",title:"My Account",function:this.account},{icon:"web",title:"My Vaults",function:this.myVaults},{icon:"remove_circle",title:"Logout",function:this.logout}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Keepr",dialog:!1,authType:"",formInput:{firstName:"",lastName:"",username:"",email:"",password:"",confirmPassword:""}}},methods:{home:function(){i.a.push("/"),this.drawer=!1},account:function(){console.log("account")},logout:function(){this.$store.dispatch("logout"),this.drawer=!1},form:function(t){this.authType=t,this.dialog=!0},closeDialog:function(){this.dialog=!1,this.formInput.firstName="",this.formInput.lastName="",this.formInput.username="",this.formInput.password="",this.formInput.confirmPassword="",this.formInput.email=""},handleForm:function(){if("Login"==this.authType)this.login();else{if(this.formInput.password!=this.formInput.confirmPassword)return;this.signup()}},login:function(){var t={email:this.formInput.email,password:this.formInput.password};this.$store.dispatch("login",t),this.closeDialog()},signup:function(){var t={firstName:this.formInput.firstName,lastName:this.formInput.lastName,username:this.formInput.username,password:this.formInput.password,confirmPassword:this.formInput.confirmPassword,email:this.formInput.email};this.$store.dispatch("signup",t),this.closeDialog()},myVaults:function(){i.a.push("/vaults")}},computed:{loggedIn:function(){return this.$store.state.loggedIn}},components:{BottomVaultsBar:s.a},mounted:function(){this.$store.dispatch("getAuth")}}}},["NHnr"]);
//# sourceMappingURL=app.f4287d8455a51240170e.js.map