(this.webpackJsonpsamurai=this.webpackJsonpsamurai||[]).push([[0],{128:function(e,t,n){e.exports=n.p+"static/media/user.8b1dbb1f.png"},129:function(e,t,n){e.exports=n.p+"static/media/preloader.6e7c9db7.svg"},131:function(e,t,n){e.exports={item:"Post_item__3BWO-"}},157:function(e,t,n){e.exports=n(282)},17:function(e,t,n){e.exports={nav:"Navbar_nav__Zy3Y2",item:"Navbar_item__1QSYs",activeLink:"Navbar_activeLink__38ePE"}},239:function(e,t,n){},240:function(e,t,n){},26:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__3VC_2",dialogsItems:"Dialogs_dialogsItems__2kqJc",active:"Dialogs_active__2BNoM",messages:"Dialogs_messages__2wkRp",message:"Dialogs_message__267j8"}},282:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var a=n(7),r=n(40),o=n(5),s=n(124).create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"0dc0052f-ffe1-48e4-a713-bfd762fabcaa"}}),i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return s.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},l=function(e){return s.post("follow/".concat(e))},u=function(e){return s.delete("follow/".concat(e))},c=function(e){return console.warn("Obsolete method. Please profileAPI object."),m.getProfile(e)},m={getProfile:function(e){return s.get("profile/"+e)},getStatus:function(e){return s.get("profile/status/"+e)},updateStatus:function(e){return s.put("profile/status",{status:e})}},d=function(){return s.get("auth/me")},f=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return s.post("auth/login",{email:e,password:t,rememberMe:n})},p=function(){return s.delete("auth/login")},g={posts:[{id:1,message:"Hi, how are you?",likesCount:12},{id:2,message:"It's my first post",likesCount:11},{id:3,message:"Blabla",likesCount:11},{id:4,message:"Dada",likesCount:11}],profile:null,status:""},E=function(e){return{type:"SET_STATUS",status:e}},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:5,message:t.newPostText,likesCount:0};return Object(o.a)(Object(o.a)({},e),{},{posts:[].concat(Object(r.a)(e.posts),[n]),newPostText:""});case"SET_STATUS":return Object(o.a)(Object(o.a)({},e),{},{status:t.status});case"SET_USER_PROFILE":return Object(o.a)(Object(o.a)({},e),{},{profile:t.profile});default:return e}},b={dialogs:[{id:1,name:"Dimych"},{id:2,name:"Andrew"},{id:3,name:"Sveta"},{id:4,name:"Sasha"},{id:5,name:"Viktor"},{id:6,name:"Valera"}],messages:[{id:1,message:"Hi"},{id:2,message:"How is your it-kamasutra?"},{id:3,message:"Yo"},{id:4,message:"Yo"},{id:5,message:"Yo"}]},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND_MESSAGE":var n=t.newMessageBody;return Object(o.a)(Object(o.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:6,message:n}])});default:return e}},O={},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O;return e},_={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[],fake:10},j=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},P=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},w=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FAKE":return Object(o.a)(Object(o.a)({},e),{},{fake:e.fake+1});case"FOLLOW":return Object(o.a)(Object(o.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(o.a)(Object(o.a)({},e),{},{followed:!0}):e}))});case"UNFOLLOW":return Object(o.a)(Object(o.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(o.a)(Object(o.a)({},e),{},{followed:!1}):e}))});case"SET_USERS":return Object(o.a)(Object(o.a)({},e),{},{users:t.users});case"SET_CURRENT_PAGE":return Object(o.a)(Object(o.a)({},e),{},{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(o.a)(Object(o.a)({},e),{},{totalUsersCount:t.count});case"TOGGLE_IS_FETCHING":return Object(o.a)(Object(o.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(o.a)(Object(o.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(r.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},C=n(29),k={userId:null,email:null,login:null,isAuth:!1},I=function(e,t,n,a){return{type:"SET_USER_DATA",payload:{userId:e,email:t,login:n,isAuth:a}}},N=function(){return function(e){return d().then((function(t){if(0===t.data.resultCode){var n=t.data.data,a=n.id,r=n.login,o=n.email;e(I(a,o,r,!0))}}))}},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA":return Object(o.a)(Object(o.a)({},e),t.payload);default:return e}},A=n(125),U=n(123),L={initialized:!1},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Object(o.a)(Object(o.a)({},e),{},{initialized:!0});default:return e}},R=Object(a.c)({profilePage:h,dialogsPage:v,sidebar:S,usersPage:y,auth:T,form:U.a,app:F}),M=Object(a.e)(R,Object(a.a)(A.a));window.store=M;var x=M,B=n(0),D=n.n(B),G=n(59),z=n.n(G),W=(n(239),n(18)),H=n(19),Y=n(21),K=n(20),J=(n(240),n(17)),V=n.n(J),Z=n(11),q=function(){return D.a.createElement("nav",{className:V.a.nav},D.a.createElement("div",{className:V.a.item},D.a.createElement(Z.b,{to:"/profile",activeClassName:V.a.activeLink},"Profile")),D.a.createElement("div",{className:"".concat(V.a.item," ").concat(V.a.active)},D.a.createElement(Z.b,{to:"/dialogs",activeClassName:V.a.activeLink},"Messages")),D.a.createElement("div",{className:"".concat(V.a.item," ").concat(V.a.active)},D.a.createElement(Z.b,{to:"/users",activeClassName:V.a.activeLink},"Users")),D.a.createElement("div",{className:V.a.item},D.a.createElement("a",null,"News")),D.a.createElement("div",{className:V.a.item},D.a.createElement("a",null,"Music")),D.a.createElement("div",{className:V.a.item},D.a.createElement("a",null,"Settings")))},Q=n(10),X=n(26),$=n.n(X),ee=function(e){var t="/dialogs/"+e.id;return D.a.createElement("div",{className:$.a.dialog+" "+$.a.active},D.a.createElement(Z.b,{to:t},e.name))},te=function(e){return D.a.createElement("div",{className:$.a.dialog},e.message)},ne=n(121),ae=n(122),re=n(64),oe=n(49),se=n.n(oe),ie=function(e){e.input;var t=e.meta,n=(e.child,Object(re.a)(e,["input","meta","child"])),a=t.touched&&t.error;return D.a.createElement("div",{className:se.a.formControl+" "+(a?se.a.error:"")},D.a.createElement("div",null,n.children),a&&D.a.createElement("span",null,t.error))},le=function(e){var t=e.input,n=(e.meta,e.child,Object(re.a)(e,["input","meta","child"]));return D.a.createElement(ie,e,D.a.createElement("textarea",Object.assign({},t,n)))},ue=function(e){var t=e.input,n=(e.meta,e.child,Object(re.a)(e,["input","meta","child"]));return D.a.createElement(ie,e,D.a.createElement("input",Object.assign({},t,n)))},ce=function(e){if(!e)return"Field is required"},me=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}},de=me(50),fe=Object(ae.a)({form:"dialog-add-message-form"})((function(e){return D.a.createElement("form",{onSubmit:e.handleSubmit},D.a.createElement("div",null,D.a.createElement(ne.a,{component:le,validate:[ce,de],placeholder:"Enter your message",name:"newMessageBody"})),D.a.createElement("div",null,D.a.createElement("button",null,"Send222")))})),pe=function(e){var t=e.dialogsPage,n=t.dialogs.map((function(e){return D.a.createElement(ee,{name:e.name,key:e.id,id:e.id})})),a=t.messages.map((function(e){return D.a.createElement(te,{message:e.message,key:e.id})}));t.newMessageBody;return e.isAuth?D.a.createElement("div",{className:$.a.dialogs},D.a.createElement("div",{className:$.a.dialogsItems},n),D.a.createElement("div",{className:$.a.messages},D.a.createElement("div",null,a)),D.a.createElement(fe,{onSubmit:function(t){e.sendMessage(t.newMessageBody)}})):D.a.createElement(Q.a,{to:"/login"})},ge=n(9),Ee=function(e){return{isAuth:e.auth.isAuth}},he=Object(a.d)(Object(ge.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(t){e(function(e){return{type:"SEND_MESSAGE",newMessageBody:e}}(t))}}})),(function(e){var t=function(t){Object(Y.a)(a,t);var n=Object(K.a)(a);function a(){return Object(W.a)(this,a),n.apply(this,arguments)}return Object(H.a)(a,[{key:"render",value:function(){return this.props.isAuth?D.a.createElement(e,this.props):D.a.createElement(Q.a,{to:"/login"})}}]),a}(D.a.Component);return Object(ge.b)(Ee)(t)}))(pe),be=n(87),ve=n.n(be),Oe=n(128),Se=n.n(Oe),_e=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),n=[],a=1;a<=t;a++)n.push(a);return D.a.createElement("div",null,D.a.createElement("div",null,n.map((function(t){return D.a.createElement("span",{className:e.currentPage===t&&ve.a.selectedPage,onClick:function(n){e.onPageChanged(t)}},t)}))),e.users.map((function(t){return D.a.createElement("div",{key:t.id},D.a.createElement("span",null,D.a.createElement("div",null,D.a.createElement(Z.b,{to:"/profile/"+t.id},D.a.createElement("img",{src:null!=t.photos.small?t.photos.small:Se.a,className:ve.a.userPhoto}))),D.a.createElement("div",null,t.followed?D.a.createElement("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.unfollow(t.id)}},"Unfollow"):D.a.createElement("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.follow(t.id)}},"Follow"))),D.a.createElement("span",null,D.a.createElement("span",null,D.a.createElement("div",null,t.name),D.a.createElement("div",null,t.status)),D.a.createElement("span",null,D.a.createElement("div",null,"u.location.country"),D.a.createElement("div",null,"u.location.city"))))})))},je=n(129),Pe=n.n(je),we=function(e){return D.a.createElement("div",{style:{backgroundColor:"white"}},D.a.createElement("img",{src:Pe.a}))},ye=n(130),Ce=Object(ye.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),ke=function(e){return e.usersPage.pageSize},Ie=function(e){return e.usersPage.totalUsersCount},Ne=function(e){return e.usersPage.currentPage},Te=function(e){return e.usersPage.isFetching},Ae=function(e){return e.usersPage.followingInProgress},Ue=function(e){Object(Y.a)(n,e);var t=Object(K.a)(n);function n(){var e;Object(W.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){e.props.getUsers(t,e.props.pageSize)},e}return Object(H.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return console.log("USERS"),D.a.createElement(D.a.Fragment,null,this.props.isFetching?D.a.createElement(we,null):null,D.a.createElement(_e,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress}))}}]),n}(D.a.Component),Le=Object(a.d)(Object(ge.b)((function(e){return console.log("mapStateToProps USERS"),{users:Ce(e),pageSize:ke(e),totalUsersCount:Ie(e),currentPage:Ne(e),isFetching:Te(e),followingInProgress:Ae(e)}}),{follow:function(e){return function(t){t(w(!0,e)),l(e).then((function(n){0==n.data.resultCode&&t(function(e){return{type:"FOLLOW",userId:e}}(e)),t(w(!1,e))}))}},unfollow:function(e){return function(t){t(w(!0,e)),u(e).then((function(n){0==n.data.resultCode&&t(function(e){return{type:"UNFOLLOW",userId:e}}(e)),t(w(!1,e))}))}},setCurrentPage:j,toggleFollowingProgress:w,getUsers:function(e,t){return function(n){n(P(!0)),n(j(e)),i(e,t).then((function(e){n(P(!1)),n({type:"SET_USERS",users:e.items}),n({type:"SET_TOTAL_USERS_COUNT",count:e.totalCount})}))}}}))(Ue),Fe=n(61),Re=n.n(Fe),Me=(D.a.Component,n(90)),xe=function(e){var t=Object(B.useState)(!1),n=Object(Me.a)(t,2),a=n[0],r=n[1],o=Object(B.useState)(e.status),s=Object(Me.a)(o,2),i=s[0],l=s[1];Object(B.useEffect)((function(){l(e.status)}),[e.status]);return D.a.createElement("div",null,!a&&D.a.createElement("div",null,D.a.createElement("span",{onDoubleClick:function(){r(!0)}},e.status||"-------")),a&&D.a.createElement("div",null,D.a.createElement("input",{onChange:function(e){l(e.currentTarget.value)},autoFocus:!0,onBlur:function(){r(!1),e.updateStatus(i)},value:i})))},Be=function(e){return e.profile?D.a.createElement("div",null,D.a.createElement("div",{className:Re.a.descriptionBlock},D.a.createElement("img",{src:e.profile.photos.large}),D.a.createElement(xe,{status:e.status,updateStatus:e.updateStatus}))):D.a.createElement(we,null)},De=n(88),Ge=n.n(De),ze=n(131),We=n.n(ze),He=function(e){return D.a.createElement("div",{className:We.a.item},D.a.createElement("img",{src:"https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg"}),e.message,D.a.createElement("div",null,D.a.createElement("span",null,"like")," ",e.likesCount))},Ye=me(10),Ke=Object(ae.a)({form:"ProfileAddNewPostForm"})((function(e){return D.a.createElement("form",{onSubmit:e.handleSubmit},D.a.createElement("div",null,D.a.createElement(ne.a,{name:"newPostText",component:le,placeholder:"Post message",validate:[ce,Ye]})),D.a.createElement("div",null,D.a.createElement("button",null,"Add post")))})),Je=function(e){var t=e.posts.map((function(e){return D.a.createElement(He,{message:e.message,likesCount:e.likesCount})}));D.a.createRef();return D.a.createElement("div",{className:Ge.a.postsBlock},D.a.createElement("h3",null,"My posts"),D.a.createElement(Ke,{onSubmit:function(t){e.addPost(t.newPostText)}}),D.a.createElement("div",{className:Ge.a.posts},t))},Ve=Object(ge.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(function(e){return{type:"ADD-POST",newPostText:e}}(t))}}}))(Je),Ze=function(e){return D.a.createElement("div",null,D.a.createElement(Be,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),D.a.createElement(Ve,null))},qe=function(e){Object(Y.a)(n,e);var t=Object(K.a)(n);function n(){return Object(W.a)(this,n),t.apply(this,arguments)}return Object(H.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return D.a.createElement(Ze,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),n}(D.a.Component),Qe=Object(a.d)(Object(ge.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:function(e){return function(t){c(e).then((function(e){t({type:"SET_USER_PROFILE",profile:e.data})}))}},getStatus:function(e){return function(t){m.getStatus(e).then((function(e){t(E(e.data))}))}},updateStatus:function(e){return function(t){m.updateStatus(e).then((function(n){0===n.data.resultCode&&t(E(e))}))}}}),Q.f)(qe),Xe=n(89),$e=n.n(Xe),et=function(e){return D.a.createElement("header",{className:$e.a.header},D.a.createElement("img",{src:"https://www.freelogodesign.org/Content/img/logo-ex-7.png"}),D.a.createElement("div",{className:$e.a.loginBlock},e.isAuth?D.a.createElement("div",null,e.login," - ",D.a.createElement("button",{onClick:e.logout},"Log out")," "):D.a.createElement(Z.b,{to:"/login"},"Login")))},tt=function(e){Object(Y.a)(n,e);var t=Object(K.a)(n);function n(){return Object(W.a)(this,n),t.apply(this,arguments)}return Object(H.a)(n,[{key:"render",value:function(){return D.a.createElement(et,this.props)}}]),n}(D.a.Component),nt=Object(ge.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(e){p().then((function(t){0===t.data.resultCode&&e(I(null,null,null,!1))}))}}})(tt),at=Object(ae.a)({form:"login"})((function(e){return D.a.createElement("form",{onSubmit:e.handleSubmit},D.a.createElement("div",null,D.a.createElement(ne.a,{placeholder:"Email",name:"email",validate:[ce],component:ue})),D.a.createElement("div",null,D.a.createElement(ne.a,{placeholder:"Password",name:"password",type:"password",validate:[ce],component:ue})),D.a.createElement("div",null,D.a.createElement(ne.a,{component:ue,name:"rememberMe",type:"checkbox"})," remember me"),e.error&&D.a.createElement("div",{className:se.a.formSummaryError},e.error),D.a.createElement("div",null,D.a.createElement("button",null,"Login")))})),rt=Object(ge.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(a){f(e,t,n).then((function(e){if(0===e.data.resultCode)a(N());else{var t=e.data.messages.length>0?e.data.messages[0]:"Some error";a(Object(C.a)("login",{_error:t}))}}))}}})((function(e){return e.isAuth?D.a.createElement(Q.a,{to:"/profile"}):D.a.createElement("div",null,D.a.createElement("h1",null,"Login"),D.a.createElement(at,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}}))})),ot=function(e){Object(Y.a)(n,e);var t=Object(K.a)(n);function n(){return Object(W.a)(this,n),t.apply(this,arguments)}return Object(H.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?D.a.createElement("div",{className:"app-wrapper"},D.a.createElement(nt,null),D.a.createElement(q,null),D.a.createElement("div",{className:"app-wrapper-content"},D.a.createElement(Q.b,{path:"/dialogs",render:function(){return D.a.createElement(he,null)}}),D.a.createElement(Q.b,{path:"/profile/:userId?",render:function(){return D.a.createElement(Qe,null)}}),D.a.createElement(Q.b,{path:"/users",render:function(){return D.a.createElement(Le,null)}}),D.a.createElement(Q.b,{path:"/login",render:function(){return D.a.createElement(rt,null)}}))):D.a.createElement(we,null)}}]),n}(B.Component),st=Object(a.d)(Q.f,Object(ge.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(N());Promise.all([t]).then((function(){e({type:"INITIALIZED_SUCCESS"})}))}}}))(ot);setInterval((function(){x.dispatch({type:"FAKE"})}),1e3),z.a.render(D.a.createElement(Z.a,null,D.a.createElement(ge.a,{store:x},D.a.createElement(st,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},49:function(e,t,n){e.exports={formControl:"FormsControls_formControl__1GEsR",error:"FormsControls_error__2nxPa",formSummaryError:"FormsControls_formSummaryError__liw5Y"}},61:function(e,t,n){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__gUU3B"}},87:function(e,t,n){e.exports={userPhoto:"users_userPhoto__12T4-",selectedPage:"users_selectedPage__2U2RN"}},88:function(e,t,n){e.exports={postsBlock:"MyPosts_postsBlock__RMaKW",posts:"MyPosts_posts__2-rQC"}},89:function(e,t,n){e.exports={header:"Header_header__1X12X",loginBlock:"Header_loginBlock__4lmu_"}}},[[157,1,2]]]);
//# sourceMappingURL=main.39c0e8cc.chunk.js.map