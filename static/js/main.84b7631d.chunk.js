(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[0],{129:function(e,t,n){e.exports={item:"News_item__g-_6y"}},130:function(e,t,n){e.exports={item:"Music_item__3oVaZ"}},131:function(e,t,n){e.exports={item:"Settings_item__3vgb4"}},15:function(e,t,n){e.exports={nav:"Navbar_nav__2fnbk",item:"Navbar_item__3TpPD",active:"Navbar_active__ugoIQ"}},162:function(e,t,n){},244:function(e,t,n){},286:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),r=n(60),i=n.n(r),c=(n(162),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,288)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),s(e),a(e),r(e),i(e)}))}),o=n(11),u=n(10),l=n(8),d=n(40),j=n(3),b=n(287),p=n(126),f=n.n(p).a.create({withCredentials:!0,headers:{"API-KEY":"22d983b1-894f-49cd-9ef9-5c17b8e4c8a6"},baseURL:"https://social-network.samuraijs.com/api/1.0/"}),h=function(e,t){return f.get("https://social-network.samuraijs.com/api/1.0/"+"users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},m=function(e){return f.get("profile/"+e)},O=function(e){return f.get("profile/status/"+e)},g=function(e){return f.put("profile/status/",{status:e})},v=function(){return f.get("auth/me")},x=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return f.post("auth/login",{email:e,password:t,rememberMe:n})},_=function(){return f.delete("auth/login")},P="ADD-POST",N="SET_USER_PROFILE",S="SET_STATUS",C={posts:[{id:Object(b.a)(),message:"HiHello",likes:5},{id:Object(b.a)(),message:"YoHello",likes:15}],newPostText:"",profile:null,status:""},w=function(e){return{type:S,status:e}},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:var n={id:Object(b.a)(),message:t.newPostText,likes:0};return Object(j.a)(Object(j.a)({},e),{},{newPostText:"",posts:[].concat(Object(d.a)(e.posts),[n])});case N:return Object(j.a)(Object(j.a)({},e),{},{profile:t.profile});case S:return Object(j.a)(Object(j.a)({},e),{},{status:t.status});default:return e}},y=n.p+"static/media/avatar3.98fcfaf1.jpg",F=n.p+"static/media/avatar5.4f1f971b.jpg",k=n.p+"static/media/avatar4.b85489ca.jpeg",M=n.p+"static/media/avatar1.1b29529b.png",U=n.p+"static/media/avatar2.273adcab.jpg",E="ADD-NEW-MESSAGE-TEXT",A={dialogs:[{id:Object(b.a)(),name:"Dimych",avatar:y},{id:Object(b.a)(),name:"Sveta",avatar:F},{id:Object(b.a)(),name:"Valera",avatar:k},{id:Object(b.a)(),name:"Ignat",avatar:M},{id:Object(b.a)(),name:"Victor",avatar:U}],messages:[{id:Object(b.a)(),message:"Hi"},{id:Object(b.a)(),message:"Yo"},{id:Object(b.a)(),message:"Hello!"}]},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:var n={id:Object(b.a)(),message:t.nameMessageBody};return Object(j.a)(Object(j.a)({},e),{},{messages:[].concat(Object(d.a)(e.messages),[n])});default:return e}},D="ADD_FRIENDS",B={friendsBlock:[{id:Object(b.a)(),friendName:"Kostya",avatar:y},{id:Object(b.a)(),friendName:"Masha",avatar:F},{id:Object(b.a)(),friendName:"Misha",avatar:k}]},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return Object(j.a)(Object(j.a)({},e),{},{friendsBlock:t.friendsBlock});default:return e}},z="FOLLOW",R="UNFOLLOW",G="SET_USERS",W="SET_CURRENT_PAGE",H="SET_USERS_TOTAL_COUNT",V="TOGGLE_IS_FETCHING",K="TOGGLE_IS_FOLLOWING_PROGRESS",Y={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},J=function(e){return{type:z,userId:e}},Z=function(e){return{type:R,userId:e}},q=function(e){return{type:G,users:e}},Q=function(e){return{type:W,currentPage:e}},X=function(e){return{type:H,totalCount:e}},$=function(e){return{type:V,IsFetching:e}},ee=function(e,t){return{type:K,IsFetching:e,userId:t}},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z:return Object(j.a)(Object(j.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(j.a)(Object(j.a)({},e),{},{followed:!0}):e}))});case R:return Object(j.a)(Object(j.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(j.a)(Object(j.a)({},e),{},{followed:!1}):e}))});case G:return Object(j.a)(Object(j.a)({},e),{},{users:t.users});case W:return Object(j.a)(Object(j.a)({},e),{},{currentPage:t.currentPage});case H:return Object(j.a)(Object(j.a)({},e),{},{totalUsersCount:t.totalCount});case V:return Object(j.a)(Object(j.a)({},e),{},{isFetching:t.IsFetching});case K:return Object(j.a)(Object(j.a)({},e),{},{followingInProgress:t.IsFetching?[].concat(Object(d.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},ne=n(35),se="SET_USER_DATA",ae={id:null,email:null,login:null,isAuth:!1},re=function(e,t,n,s){return{type:se,payload:{id:e,email:t,login:n,isAuth:s}}},ie=function(){return function(e){return v().then((function(t){if(0===t.data.resultCode){var n=t.data.data,s=n.id,a=n.email,r=n.login;e(re(s,a,r,!0))}}))}},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case se:return Object(j.a)(Object(j.a)({},e),t.payload);default:return e}},oe=n(127),ue=n(125),le="INITIALIZED_SUCCESS",de={initialized:!1},je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case le:return Object(j.a)(Object(j.a)({},e),{},{initialized:!0});default:return e}},be=Object(l.c)({profilePage:I,dialogsPage:T,sidebar:L,usersPage:te,auth:ce,form:ue.a,app:je}),pe=Object(l.e)(be,Object(l.a)(oe.a));window.store=pe;var fe=pe,he=n(19),me=n(20),Oe=n(22),ge=n(21),ve=(n(244),n(15)),xe=n.n(ve),_e=n(0),Pe=function(){return Object(_e.jsxs)("nav",{className:xe.a.nav,children:[Object(_e.jsx)("div",{className:xe.a.item,children:Object(_e.jsx)(o.b,{to:"/profile",activeClassName:xe.a.active,children:"Profile"})}),Object(_e.jsx)("div",{className:xe.a.item,children:Object(_e.jsx)(o.b,{to:"/dialogs",activeClassName:xe.a.active,children:"Messages"})}),Object(_e.jsx)("div",{className:xe.a.item,children:Object(_e.jsx)(o.b,{to:"/users",activeClassName:xe.a.active,children:"Users"})}),Object(_e.jsx)("div",{className:xe.a.item,children:Object(_e.jsx)(o.b,{to:"/news",activeClassName:xe.a.active,children:"News"})}),Object(_e.jsx)("div",{className:xe.a.item,children:Object(_e.jsx)(o.b,{to:"/music",activeClassName:xe.a.active,children:"Music"})}),Object(_e.jsx)("div",{className:xe.a.item,children:Object(_e.jsx)(o.b,{to:"/settings",activeClassName:xe.a.active,children:"Settings"})})]})},Ne=n(12),Se=n(129),Ce=n.n(Se),we=n.p+"static/media/news.6d9ef3aa.jpg",Ie=function(){return Object(_e.jsx)("div",{className:Ce.a.item,children:Object(_e.jsx)("img",{src:we,alt:"news_image"})})},ye=n(130),Fe=n.n(ye),ke=n.p+"static/media/music.0e999249.png",Me=function(){return Object(_e.jsxs)("div",{className:Fe.a.item,children:[Object(_e.jsx)("img",{src:ke,alt:"music_image"}),"Music"]})},Ue=n(131),Ee=n.n(Ue),Ae=n.p+"static/media/settings.f6a8201c.png",Te=function(){return Object(_e.jsxs)("div",{className:Ee.a.item,children:[Object(_e.jsx)("div",{children:"Settings"}),Object(_e.jsx)("img",{src:Ae,alt:"settings_image"})]})},De=n(63),Be=n.n(De),Le=n(64),ze=n.n(Le),Re=function(e){var t="/dialogs/"+e.id;return Object(_e.jsxs)("div",{className:ze.a.dialogItem,children:[Object(_e.jsx)("div",{className:ze.a.dialogAvatar,children:Object(_e.jsx)(o.b,{to:t,children:Object(_e.jsx)("img",{src:e.avatar,alt:"avatar"})})}),Object(_e.jsx)("div",{className:ze.a.dialogName,children:Object(_e.jsx)(o.b,{to:t,children:e.name})})]})},Ge=n(86),We=n.n(Ge),He=function(e){return Object(_e.jsx)("div",{className:We.a.itemText,children:Object(_e.jsx)("div",{className:We.a.message,children:e.message})})},Ve=n(123),Ke=n(124),Ye=n(50),Je=n(41),Ze=n.n(Je),qe=function(e){var t=e.meta,n=t.touched,s=t.error,a=e.children,r=n&&s;return Object(_e.jsxs)("div",{className:Ze.a.formControl+" "+(r?Ze.a.error:""),children:[Object(_e.jsx)("div",{children:a}),r&&Object(_e.jsx)("span",{children:s})]})},Qe=function(e){var t=e.input,n=(e.meta,Object(Ye.a)(e,["input","meta"]));return Object(_e.jsxs)(qe,Object(j.a)(Object(j.a)({},e),{},{children:[" ",Object(_e.jsx)("textarea",Object(j.a)(Object(j.a)({},t),n))]}))},Xe=function(e){var t=e.input,n=(e.meta,Object(Ye.a)(e,["input","meta"]));return Object(_e.jsx)(qe,Object(j.a)(Object(j.a)({},e),{},{children:Object(_e.jsx)("input",Object(j.a)(Object(j.a)({},t),n))}))},$e=function(e){if(!e)return"Field is required"},et=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}},tt=et(50),nt=Object(Ke.a)({form:"dialogAddMessageForm"})((function(e){return Object(_e.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(_e.jsx)("div",{children:Object(_e.jsx)(Ve.a,{component:Qe,name:"nameMessageBody",placeholder:"Enter your message",validate:[$e,tt]})}),Object(_e.jsx)("button",{children:"Send"})]})})),st=function(e){var t=e.dialogsPage.dialogs.map((function(e){return Object(_e.jsx)(Re,{name:e.name,id:e.id,avatar:e.avatar},e.id)})),n=e.dialogsPage.messages.map((function(e){return Object(_e.jsx)(He,{id:e.id,message:e.message},e.id)}));return Object(_e.jsxs)("div",{className:Be.a.dialogs,children:[Object(_e.jsx)("div",{className:Be.a.dialogsItems,children:t}),Object(_e.jsx)("div",{className:Be.a.messages,children:n}),Object(_e.jsx)(nt,{onSubmit:function(t){e.addNewMessage(t.nameMessageBody)}})]})},at=function(e){return{isAuth:e.auth.isAuth}};var rt=Object(l.d)(Object(u.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{addNewMessage:function(t){e(function(e){return{type:E,nameMessageBody:e}}(t))}}})),(function(e){return Object(u.b)(at)((function(t){var n=t.isAuth,s=Object(Ye.a)(t,["isAuth"]);return n?Object(_e.jsx)(e,Object(j.a)({},s)):Object(_e.jsx)(Ne.a,{to:"/login"})}))}))(st),it=n(51),ct=n.n(it),ot=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),n=[],s=1;s<=t;s++)n.push(s);return Object(_e.jsxs)("div",{className:ct.a.usersItemContainer,children:[Object(_e.jsx)("div",{children:n.map((function(t,n){return Object(_e.jsx)("span",{className:e.currentPage===t?ct.a.selectedPage:"",onClick:function(n){e.onPageChanged(t)},children:t},n)}))}),e.users.map((function(t){return Object(_e.jsxs)("div",{className:ct.a.usersItem,children:[Object(_e.jsxs)("span",{children:[Object(_e.jsx)("div",{children:Object(_e.jsx)(o.b,{to:"/profile/"+t.id,children:Object(_e.jsx)("img",{src:null!==t.photos.small?t.photos.large:y,alt:"userImage",className:ct.a.photoItem})})}),Object(_e.jsx)("div",{children:t.followed?Object(_e.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.unfollow(t.id)},children:"Unfollow"}):Object(_e.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.follow(t.id)},children:"Follow"})})]}),Object(_e.jsxs)("span",{children:[Object(_e.jsxs)("span",{children:[Object(_e.jsx)("div",{children:t.name}),Object(_e.jsx)("div",{children:t.status})]}),Object(_e.jsxs)("span",{children:[Object(_e.jsx)("div",{children:"u.location.country"}),Object(_e.jsx)("div",{children:"u.location.city"})]})]})]},t.id)}))]})},ut=n.p+"static/media/preloader.adbf1264.gif",lt=function(e){return Object(_e.jsx)("div",{children:Object(_e.jsx)("img",{src:ut,alt:"isFetching"})})},dt=n(132),jt=Object(dt.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),bt=function(e){return e.usersPage.pageSize},pt=function(e){return e.usersPage.totalUsersCount},ft=function(e){return e.usersPage.currentPage},ht=function(e){return e.usersPage.isFetching},mt=function(e){return e.usersPage.followingInProgress},Ot=function(e){Object(Oe.a)(n,e);var t=Object(ge.a)(n);function n(){var e;Object(he.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){e.props.getUsers(t,e.props.pageSize)},e}return Object(me.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(_e.jsxs)(_e.Fragment,{children:[this.props.isFetching?Object(_e.jsx)(lt,{}):null,Object(_e.jsx)(ot,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,onPageChanged:this.onPageChanged,followingInProgress:this.props.followingInProgress})]})}}]),n}(a.a.Component),gt=Object(l.d)(Object(u.b)((function(e){return{users:jt(e),pageSize:bt(e),totalUsersCount:pt(e),currentPage:ft(e),isFetching:ht(e),followingInProgress:mt(e)}}),{follow:J,unfollow:Z,setUsers:q,setCurrentPage:Q,setUsersTotalCount:X,toggleFollowingProgress:ee,getUsers:function(e,t){return function(n){n($(!0)),n(Q(e)),h(e,t).then((function(e){n($(!1)),n(q(e.items)),n(X(e.totalCount))}))}}}))(Ot),vt=n(89),xt=n.n(vt),_t=function(e){Object(Oe.a)(n,e);var t=Object(ge.a)(n);function n(){var e;Object(he.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={editMode:!1,status:e.props.status},e.activateEditMode=function(){e.setState({editMode:!0})},e.deactivateEditMode=function(){e.setState({editMode:!1}),e.props.updateUserStatus(e.state.status)},e.onStatusChange=function(t){e.setState({status:t.currentTarget.value})},e}return Object(me.a)(n,[{key:"componentDidUpdate",value:function(e,t){e.status!==this.props.status&&this.setState({status:this.props.status})}},{key:"render",value:function(){return Object(_e.jsxs)("div",{children:[!this.state.editMode&&Object(_e.jsx)("div",{children:Object(_e.jsx)("span",{onClick:this.activateEditMode,children:this.props.status||"-----"})}),this.state.editMode&&Object(_e.jsx)("div",{children:Object(_e.jsx)("input",{autoFocus:!0,onBlur:this.deactivateEditMode,value:this.state.status,onChange:this.onStatusChange})})]})}}]),n}(a.a.Component),Pt=function(e){return e.profile?Object(_e.jsx)("div",{children:Object(_e.jsx)("div",{children:Object(_e.jsxs)("div",{className:xt.a.descriptionBlock,children:[Object(_e.jsx)("div",{className:xt.a.ProfilePhotos,children:Object(_e.jsx)("img",{src:e.profile.photos.small?e.profile.photos.large:y,alt:"photos"})}),Object(_e.jsx)("div",{children:e.profile.fullName}),Object(_e.jsx)("div",{children:e.profile.aboutMe}),Object(_e.jsx)("div",{children:e.profile.contacts.github}),Object(_e.jsx)("div",{children:Object(_e.jsx)(_t,{status:e.status,updateUserStatus:e.updateUserStatus})})]})})}):Object(_e.jsx)(lt,{})},Nt=n(90),St=n.n(Nt),Ct=n(91),wt=n.n(Ct),It=function(e){return Object(_e.jsxs)("div",{className:wt.a.item,children:[Object(_e.jsx)("div",{className:wt.a.post_avatar,children:Object(_e.jsx)("img",{src:M,alt:"avatar"})}),Object(_e.jsx)("div",{children:e.message}),Object(_e.jsx)("div",{children:Object(_e.jsxs)("span",{children:["Like: ",e.likes]})})]})},yt=et(10),Ft=Object(Ke.a)({form:"postMyPostsForm"})((function(e){return Object(_e.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(_e.jsx)("div",{children:Object(_e.jsx)(Ve.a,{component:Qe,name:"newPostText",placeholder:"Post message",validate:[$e,yt]})}),Object(_e.jsx)("div",{children:Object(_e.jsx)("button",{children:"Add post"})})]})})),kt=function(e){var t=e.posts.map((function(e){return Object(_e.jsx)(It,{id:e.id,message:e.message,likes:e.likes},e.id)}));return Object(_e.jsxs)("div",{className:St.a.postBlock,children:[Object(_e.jsx)("h3",{children:"My posts"}),Object(_e.jsx)(Ft,{onSubmit:function(t){e.addPost(t.newPostText)}}),Object(_e.jsx)("div",{className:St.a.posts,children:t})]})},Mt=Object(u.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(function(e){return{type:P,newPostText:e}}(t))}}}))(kt),Ut=function(e){return Object(_e.jsxs)("div",{children:[Object(_e.jsx)(Pt,{profile:e.profile,status:e.status,updateUserStatus:e.updateUserStatus}),Object(_e.jsx)(Mt,{})]})},Et=function(e){Object(Oe.a)(n,e);var t=Object(ge.a)(n);function n(){return Object(he.a)(this,n),t.apply(this,arguments)}return Object(me.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getUserStatus(e)}},{key:"render",value:function(){return Object(_e.jsx)("div",{children:Object(_e.jsx)(Ut,Object(j.a)(Object(j.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateUserStatus:this.props.updateUserStatus}))})}}]),n}(a.a.Component),At=Object(l.d)(Object(u.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.id,isAuth:e.auth.isAuth}}),{getUserProfile:function(e){return function(t){m(e).then((function(e){var n;t((n=e.data,{type:N,profile:n}))}))}},getUserStatus:function(e){return function(t){O(e).then((function(e){t(w(e.data))}))}},updateUserStatus:function(e){return function(t){g(e).then((function(n){0===n.data.resultCode&&t(w(e))}))}}}),Ne.f)(Et),Tt=n(92),Dt=n.n(Tt),Bt=function(e){return Object(_e.jsx)("header",{className:Dt.a.header,children:Object(_e.jsx)("div",{className:Dt.a.login,children:e.isAuth?Object(_e.jsxs)("div",{children:[e.login," - ",Object(_e.jsx)("button",{onClick:e.logout,children:"Logout"})]}):Object(_e.jsx)(o.b,{to:"/login",children:"Login"})})})},Lt=function(e){Object(Oe.a)(n,e);var t=Object(ge.a)(n);function n(){return Object(he.a)(this,n),t.apply(this,arguments)}return Object(me.a)(n,[{key:"render",value:function(){return Object(_e.jsx)(Bt,Object(j.a)({},this.props))}}]),n}(a.a.Component),zt=Object(u.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(e){_().then((function(t){0===t.data.resultCode&&e(re(null,null,null,!1))}))}}})(Lt),Rt=Object(Ke.a)({form:"login"})((function(e){return Object(_e.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(_e.jsx)("div",{children:Object(_e.jsx)(Ve.a,{placeholder:"email",name:"email",component:Xe,validate:[$e]})}),Object(_e.jsx)("div",{children:Object(_e.jsx)(Ve.a,{placeholder:"password",name:"password",component:Xe,type:"password",validate:[$e]})}),Object(_e.jsxs)("div",{children:[Object(_e.jsx)(Ve.a,{component:Xe,name:"rememberMe",type:"checkbox"}),"rememberMe"]}),e.error&&Object(_e.jsx)("div",{className:Ze.a.formSummaryError,children:e.error}),Object(_e.jsx)("div",{children:Object(_e.jsx)("button",{children:"Login"})})]})})),Gt=Object(u.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(s){x(e,t,n).then((function(e){if(0===e.data.resultCode)s(ie());else{var t=e.data.messages.length>0?e.data.messages[0]:"Some error";s(Object(ne.a)("login",{_error:t}))}}))}}})((function(e){return e.isAuth?Object(_e.jsx)(Ne.a,{to:"/profile"}):Object(_e.jsxs)("div",{className:Ze.a.formControlWrapper,children:[Object(_e.jsx)("h1",{children:"Login"}),Object(_e.jsx)(Rt,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})]})})),Wt=n(66),Ht=n.n(Wt),Vt=n(67),Kt=n.n(Vt),Yt=function(e){var t="/friendsBlock/"+e.id;return Object(_e.jsxs)("div",{className:Kt.a.itemFriend,children:[Object(_e.jsx)("div",{className:Kt.a.friendAvatar,children:Object(_e.jsx)(o.b,{to:t,children:Object(_e.jsx)("img",{src:e.avatar,alt:"avatar"})})}),Object(_e.jsx)("div",{className:Kt.a.nameClass,children:Object(_e.jsx)(o.b,{style:{textDecoration:"none",color:"blanchedalmond"},to:t,children:e.friendName})})]})},Jt=function(e){var t=e.friendsBlock.map((function(e){return Object(_e.jsx)(Yt,{avatar:e.avatar,friendName:e.friendName,id:e.id},e.id)}));return Object(_e.jsxs)("div",{className:Ht.a.headerFriends,children:[Object(_e.jsx)("div",{className:Ht.a.titleFriends,children:Object(_e.jsx)("span",{children:"My friends"})}),Object(_e.jsx)("div",{}),Object(_e.jsx)("div",{className:Ht.a.itemFriends,children:t})]})},Zt=function(e){Object(Oe.a)(n,e);var t=Object(ge.a)(n);function n(){return Object(he.a)(this,n),t.apply(this,arguments)}return Object(me.a)(n,[{key:"render",value:function(){return Object(_e.jsx)(Jt,Object(j.a)({},this.props))}}]),n}(a.a.Component),qt=Object(l.d)(Object(u.b)((function(e){return{friendsBlock:e.sidebar.friendsBlock}}),{}))(Zt),Qt=function(e){Object(Oe.a)(n,e);var t=Object(ge.a)(n);function n(){return Object(he.a)(this,n),t.apply(this,arguments)}return Object(me.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(_e.jsxs)("div",{className:"app-wrapper",children:[Object(_e.jsx)(zt,{}),Object(_e.jsx)(Pe,{}),Object(_e.jsx)(qt,{}),Object(_e.jsxs)("div",{className:"app-wrapper-content",children:[Object(_e.jsx)(Ne.b,{path:"/profile/:userId?",render:function(){return Object(_e.jsx)(At,{})}}),Object(_e.jsx)(Ne.b,{path:"/dialogs",render:function(){return Object(_e.jsx)(rt,{})}}),Object(_e.jsx)(Ne.b,{path:"/users",render:function(){return Object(_e.jsx)(gt,{})}}),Object(_e.jsx)(Ne.b,{path:"/login",render:function(){return Object(_e.jsx)(Gt,{})}}),Object(_e.jsx)(Ne.b,{path:"/news",component:Ie}),Object(_e.jsx)(Ne.b,{path:"/music",component:Me}),Object(_e.jsx)(Ne.b,{path:"/settings",component:Te})]})]}):Object(_e.jsx)(lt,{})}}]),n}(a.a.Component),Xt=Object(l.d)(Ne.f,Object(u.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(ie());Promise.all([t]).then((function(){e({type:le})}))}}}))(Qt);i.a.render(Object(_e.jsx)(o.a,{children:Object(_e.jsx)(u.a,{store:fe,children:Object(_e.jsx)(Xt,{})})}),document.getElementById("root")),c()},41:function(e,t,n){e.exports={formControlWrapper:"FormsControl_formControlWrapper__3dn2-",formControl:"FormsControl_formControl__3EBbE",error:"FormsControl_error__3gpt0",formSummaryError:"FormsControl_formSummaryError__1sXsL"}},51:function(e,t,n){e.exports={photoItem:"Users_photoItem__2_QJb",usersItemContainer:"Users_usersItemContainer__2debM",usersItem:"Users_usersItem__2YmN3",selectedPage:"Users_selectedPage__1PV8A"}},63:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__32IEi",dialogsItems:"Dialogs_dialogsItems__3PoRR",messages:"Dialogs_messages__3aKtr"}},64:function(e,t,n){e.exports={dialogItem:"DialogItem_dialogItem__1R5W4",dialog:"DialogItem_dialog__3ChSY",dialogAvatar:"DialogItem_dialogAvatar__35j3p",dialogName:"DialogItem_dialogName__ucqdT"}},66:function(e,t,n){e.exports={headerFriends:"Friends_headerFriends__2bQ4Z",itemFriends:"Friends_itemFriends__1hI_K",titleFriends:"Friends_titleFriends__2beEv"}},67:function(e,t,n){e.exports={friendAvatar:"Friend_friendAvatar__3wEbM",nameClass:"Friend_nameClass__1mo9p",itemFriend:"Friend_itemFriend__1zVTR"}},86:function(e,t,n){e.exports={message:"Message_message__g2Egm",itemText:"Message_itemText__34RBh"}},89:function(e,t,n){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__3C0mM",ProfilePhotos:"ProfileInfo_ProfilePhotos__2WeJd"}},90:function(e,t,n){e.exports={postBlock:"MyPosts_postBlock__2mcAp",posts:"MyPosts_posts__1BTGS"}},91:function(e,t,n){e.exports={item:"Post_item__1mEk_",post_avatar:"Post_post_avatar__1tIXi"}},92:function(e,t,n){e.exports={header:"Header_header__1BxDK",login:"Header_login__VuZqN"}}},[[286,1,2]]]);
//# sourceMappingURL=main.84b7631d.chunk.js.map