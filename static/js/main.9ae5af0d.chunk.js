(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[0],{134:function(e,t,n){e.exports={item:"News_item__g-_6y"}},135:function(e,t,n){e.exports={item:"Music_item__3oVaZ"}},136:function(e,t,n){e.exports={item:"Settings_item__3vgb4"}},137:function(e,t,n){e.exports={selectedPage:"Paginator_selectedPage__31d3x"}},16:function(e,t,n){e.exports={nav:"Navbar_nav__2fnbk",item:"Navbar_item__3TpPD",active:"Navbar_active__ugoIQ"}},168:function(e,t,n){},251:function(e,t,n){},293:function(e,t,n){"use strict";n.r(t);var s=n(1),r=n.n(s),a=n(63),i=n.n(a),c=(n(168),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,295)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),s(e),r(e),a(e),i(e)}))}),o=n(11),u=n(10),l=n(8),d=n(12),j=n.n(d),b=n(18),f=n(43),p=n(3),O=n(294),m=n(131),h=n.n(m).a.create({withCredentials:!0,headers:{"API-KEY":"22d983b1-894f-49cd-9ef9-5c17b8e4c8a6"},baseURL:"https://social-network.samuraijs.com/api/1.0/"}),g={getUsers:function(e,t){return h.get("https://social-network.samuraijs.com/api/1.0/"+"users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return h.post("follow/".concat(e))},unfollow:function(e){return h.delete("unfollow/".concat(e))}},v=function(e){return h.get("profile/"+e)},x=function(e){return h.get("profile/status/"+e)},_=function(e){return h.put("profile/status/",{status:e})},P=function(){return h.get("auth/me")},w=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return h.post("auth/login",{email:e,password:t,rememberMe:n})},N=function(){return h.delete("auth/login")},S="ADD-POST",C="SET_USER_PROFILE",I="SET_STATUS",y="DELETE_POST",k={posts:[{id:Object(O.a)(),message:"HiHello",likes:5},{id:Object(O.a)(),message:"YoHello",likes:15}],newPostText:"",profile:null,status:""},F=function(e){return{type:I,status:e}},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:var n={id:Object(O.a)(),message:t.newPostText,likes:0};return Object(p.a)(Object(p.a)({},e),{},{newPostText:"",posts:[].concat(Object(f.a)(e.posts),[n])});case C:return Object(p.a)(Object(p.a)({},e),{},{profile:t.profile});case I:return Object(p.a)(Object(p.a)({},e),{},{status:t.status});case y:return Object(p.a)(Object(p.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});default:return e}},E=n.p+"static/media/avatar3.98fcfaf1.jpg",T=n.p+"static/media/avatar5.4f1f971b.jpg",A=n.p+"static/media/avatar4.b85489ca.jpeg",M=n.p+"static/media/avatar1.1b29529b.png",D=n.p+"static/media/avatar2.273adcab.jpg",B="ADD-NEW-MESSAGE-TEXT",z={dialogs:[{id:Object(O.a)(),name:"Dimych",avatar:E},{id:Object(O.a)(),name:"Sveta",avatar:T},{id:Object(O.a)(),name:"Valera",avatar:A},{id:Object(O.a)(),name:"Ignat",avatar:M},{id:Object(O.a)(),name:"Victor",avatar:D}],messages:[{id:Object(O.a)(),message:"Hi"},{id:Object(O.a)(),message:"Yo"},{id:Object(O.a)(),message:"Hello!"}]},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B:var n={id:Object(O.a)(),message:t.nameMessageBody};return Object(p.a)(Object(p.a)({},e),{},{messages:[].concat(Object(f.a)(e.messages),[n])});default:return e}},R="ADD_FRIENDS",G={friendsBlock:[{id:Object(O.a)(),friendName:"Kostya",avatar:E},{id:Object(O.a)(),friendName:"Masha",avatar:T},{id:Object(O.a)(),friendName:"Misha",avatar:A}]},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:return Object(p.a)(Object(p.a)({},e),{},{friendsBlock:t.friendsBlock});default:return e}},H=function(e,t,n,s){return e.map((function(e){return e[n]===t?Object(p.a)(Object(p.a)({},e),s):e}))},K="FOLLOW",V="UNFOLLOW",J="SET_USERS",Y="SET_CURRENT_PAGE",Z="SET_USERS_TOTAL_COUNT",q="TOGGLE_IS_FETCHING",Q="TOGGLE_IS_FOLLOWING_PROGRESS",X={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},$=function(e){return{type:K,userId:e}},ee=function(e){return{type:V,userId:e}},te=function(e){return{type:J,users:e}},ne=function(e){return{type:Y,currentPage:e}},se=function(e){return{type:Z,totalCount:e}},re=function(e){return{type:q,IsFetching:e}},ae=function(e,t){return{type:Q,IsFetching:e,userId:t}},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case K:return Object(p.a)(Object(p.a)({},e),{},{users:H(e.users,t.userId,"id",{followed:!0})});case V:return Object(p.a)(Object(p.a)({},e),{},{users:H(e.users,t.userId,"id",{followed:!1})});case J:return Object(p.a)(Object(p.a)({},e),{},{users:t.users});case Y:return Object(p.a)(Object(p.a)({},e),{},{currentPage:t.currentPage});case Z:return Object(p.a)(Object(p.a)({},e),{},{totalUsersCount:t.totalCount});case q:return Object(p.a)(Object(p.a)({},e),{},{isFetching:t.IsFetching});case Q:return Object(p.a)(Object(p.a)({},e),{},{followingInProgress:t.IsFetching?[].concat(Object(f.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},ce=n(35),oe="samurai-network/auth/SET_USER_DATA",ue={id:null,email:null,login:null,isAuth:!1},le=function(e,t,n,s){return{type:oe,payload:{id:e,email:t,login:n,isAuth:s}}},de=function(){return function(){var e=Object(b.a)(j.a.mark((function e(t){var n,s,r,a,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P();case 2:0===(n=e.sent).data.resultCode&&(s=n.data.data,r=s.id,a=s.email,i=s.login,t(le(r,a,i,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case oe:return Object(p.a)(Object(p.a)({},e),t.payload);default:return e}},be=n(132),fe=n(130),pe="INITIALIZED_SUCCESS",Oe={initialized:!1},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case pe:return Object(p.a)(Object(p.a)({},e),{},{initialized:!0});default:return e}},he=Object(l.c)({profilePage:U,dialogsPage:L,sidebar:W,usersPage:ie,auth:je,form:fe.a,app:me}),ge=Object(l.e)(he,Object(l.a)(be.a));window.store=ge;var ve=ge,xe=n(25),_e=n(26),Pe=n(28),we=n(27),Ne=(n(251),n(16)),Se=n.n(Ne),Ce=n(0),Ie=function(){return Object(Ce.jsxs)("nav",{className:Se.a.nav,children:[Object(Ce.jsx)("div",{className:Se.a.item,children:Object(Ce.jsx)(o.b,{to:"/profile",activeClassName:Se.a.active,children:"Profile"})}),Object(Ce.jsx)("div",{className:Se.a.item,children:Object(Ce.jsx)(o.b,{to:"/dialogs",activeClassName:Se.a.active,children:"Messages"})}),Object(Ce.jsx)("div",{className:Se.a.item,children:Object(Ce.jsx)(o.b,{to:"/users",activeClassName:Se.a.active,children:"Users"})}),Object(Ce.jsx)("div",{className:Se.a.item,children:Object(Ce.jsx)(o.b,{to:"/news",activeClassName:Se.a.active,children:"News"})}),Object(Ce.jsx)("div",{className:Se.a.item,children:Object(Ce.jsx)(o.b,{to:"/music",activeClassName:Se.a.active,children:"Music"})}),Object(Ce.jsx)("div",{className:Se.a.item,children:Object(Ce.jsx)(o.b,{to:"/settings",activeClassName:Se.a.active,children:"Settings"})})]})},ye=n(13),ke=n(134),Fe=n.n(ke),Ue=n.p+"static/media/news.6d9ef3aa.jpg",Ee=function(){return Object(Ce.jsx)("div",{className:Fe.a.item,children:Object(Ce.jsx)("img",{src:Ue,alt:"news_image"})})},Te=n(135),Ae=n.n(Te),Me=n.p+"static/media/music.0e999249.png",De=function(){return Object(Ce.jsxs)("div",{className:Ae.a.item,children:[Object(Ce.jsx)("img",{src:Me,alt:"music_image"}),"Music"]})},Be=n(136),ze=n.n(Be),Le=n.p+"static/media/settings.f6a8201c.png",Re=function(){return Object(Ce.jsxs)("div",{className:ze.a.item,children:[Object(Ce.jsx)("div",{children:"Settings"}),Object(Ce.jsx)("img",{src:Le,alt:"settings_image"})]})},Ge=n(67),We=n.n(Ge),He=n(68),Ke=n.n(He),Ve=function(e){var t="/dialogs/"+e.id;return Object(Ce.jsxs)("div",{className:Ke.a.dialogItem,children:[Object(Ce.jsx)("div",{className:Ke.a.dialogAvatar,children:Object(Ce.jsx)(o.b,{to:t,children:Object(Ce.jsx)("img",{src:e.avatar,alt:"avatar"})})}),Object(Ce.jsx)("div",{className:Ke.a.dialogName,children:Object(Ce.jsx)(o.b,{to:t,children:e.name})})]})},Je=n(90),Ye=n.n(Je),Ze=function(e){return Object(Ce.jsx)("div",{className:Ye.a.itemText,children:Object(Ce.jsx)("div",{className:Ye.a.message,children:e.message})})},qe=n(128),Qe=n(129),Xe=n(37),$e=n(44),et=n.n($e),tt=function(e){var t=e.meta,n=t.touched,s=t.error,r=e.children,a=n&&s;return Object(Ce.jsxs)("div",{className:et.a.formControl+" "+(a?et.a.error:""),children:[Object(Ce.jsx)("div",{children:r}),a&&Object(Ce.jsx)("span",{children:s})]})},nt=function(e){var t=e.input,n=(e.meta,Object(Xe.a)(e,["input","meta"]));return Object(Ce.jsxs)(tt,Object(p.a)(Object(p.a)({},e),{},{children:[" ",Object(Ce.jsx)("textarea",Object(p.a)(Object(p.a)({},t),n))]}))},st=function(e){var t=e.input,n=(e.meta,Object(Xe.a)(e,["input","meta"]));return Object(Ce.jsx)(tt,Object(p.a)(Object(p.a)({},e),{},{children:Object(Ce.jsx)("input",Object(p.a)(Object(p.a)({},t),n))}))};function rt(e,t,n,s){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(Ce.jsxs)("div",{children:[Object(Ce.jsx)(qe.a,Object(p.a)({placeholder:e,name:t,component:s},r))," ",a]})}var at=function(e){if(!e)return"Field is required"},it=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}},ct=it(50),ot=Object(Qe.a)({form:"dialogAddMessageForm"})((function(e){return Object(Ce.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(Ce.jsx)("div",{children:Object(Ce.jsx)(qe.a,{component:nt,name:"nameMessageBody",placeholder:"Enter your message",validate:[at,ct]})}),Object(Ce.jsx)("button",{children:"Send"})]})})),ut=function(e){var t=e.dialogsPage.dialogs.map((function(e){return Object(Ce.jsx)(Ve,{name:e.name,id:e.id,avatar:e.avatar},e.id)})),n=e.dialogsPage.messages.map((function(e){return Object(Ce.jsx)(Ze,{id:e.id,message:e.message},e.id)}));return Object(Ce.jsxs)("div",{className:We.a.dialogs,children:[Object(Ce.jsx)("div",{className:We.a.dialogsItems,children:t}),Object(Ce.jsx)("div",{className:We.a.messages,children:n}),Object(Ce.jsx)(ot,{onSubmit:function(t){e.addNewMessage(t.nameMessageBody)}})]})},lt=function(e){return{isAuth:e.auth.isAuth}};var dt=Object(l.d)(Object(u.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{addNewMessage:function(t){e(function(e){return{type:B,nameMessageBody:e}}(t))}}})),(function(e){return Object(u.b)(lt)((function(t){var n=t.isAuth,s=Object(Xe.a)(t,["isAuth"]);return n?Object(Ce.jsx)(e,Object(p.a)({},s)):Object(Ce.jsx)(ye.a,{to:"/login"})}))}))(ut),jt=n(54),bt=n.n(jt),ft=n(137),pt=n.n(ft),Ot=function(e){for(var t=e.totalUsersCount,n=e.pageSize,s=e.currentPage,r=e.onPageChanged,a=Math.ceil(t/n),i=[],c=1;c<=a;c++)i.push(c);return Object(Ce.jsx)("div",{children:i.map((function(e,t){return Object(Ce.jsx)("span",{className:s===e?pt.a.selectedPage:"",onClick:function(t){r(e)},children:e},t)}))})},mt=function(e){var t=e.user,n=e.followingInProgress,s=e.unfollow,r=e.follow;return Object(Ce.jsxs)("div",{className:bt.a.userItem,children:[Object(Ce.jsxs)("span",{children:[Object(Ce.jsx)("div",{children:Object(Ce.jsx)(o.b,{to:"/profile/"+t.id,children:Object(Ce.jsx)("img",{src:null!==t.photos.small?t.photos.large:E,alt:"userImage",className:bt.a.photoItem})})}),Object(Ce.jsx)("div",{children:t.followed?Object(Ce.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){s(t.id)},children:"Unfollow"}):Object(Ce.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:"Follow"})})]}),Object(Ce.jsxs)("span",{children:[Object(Ce.jsxs)("span",{children:[Object(Ce.jsx)("div",{children:t.name}),Object(Ce.jsx)("div",{children:t.status})]}),Object(Ce.jsxs)("span",{children:[Object(Ce.jsx)("div",{children:"u.location.country"}),Object(Ce.jsx)("div",{children:"u.location.city"})]})]})]})},ht=function(e){var t=e.totalUsersCount,n=e.pageSize,s=e.currentPage,r=e.onPageChanged,a=e.users,i=(e.user,e.followingInProgress),c=e.unfollow,o=e.follow;Object(Xe.a)(e,["totalUsersCount","pageSize","currentPage","onPageChanged","users","user","followingInProgress","unfollow","follow"]);return Object(Ce.jsxs)("div",{className:bt.a.usersItemContainer,children:[Object(Ce.jsx)(Ot,{totalUsersCount:t,pageSize:n,onPageChanged:r,currentPage:s}),a.map((function(e){return Object(Ce.jsx)(mt,{user:e,followingInProgress:i,unfollow:c,follow:o},e.id)}))]})},gt=n.p+"static/media/preloader.adbf1264.gif",vt=function(e){return Object(Ce.jsx)("div",{children:Object(Ce.jsx)("img",{src:gt,alt:"isFetching"})})},xt=n(138),_t=Object(xt.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),Pt=function(e){return e.usersPage.pageSize},wt=function(e){return e.usersPage.totalUsersCount},Nt=function(e){return e.usersPage.currentPage},St=function(e){return e.usersPage.isFetching},Ct=function(e){return e.usersPage.followingInProgress},It=function(e){Object(Pe.a)(n,e);var t=Object(we.a)(n);function n(){var e;Object(xe.a)(this,n);for(var s=arguments.length,r=new Array(s),a=0;a<s;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){var n=e.props.pageSize;e.props.getUsers(t,n)},e}return Object(_e.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return Object(Ce.jsxs)(Ce.Fragment,{children:[this.props.isFetching?Object(Ce.jsx)(vt,{}):null,Object(Ce.jsx)(ht,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,users:this.props.users,user:this.props.user,follow:this.props.follow,unfollow:this.props.unfollow,onPageChanged:this.onPageChanged,followingInProgress:this.props.followingInProgress})]})}}]),n}(r.a.Component),yt=Object(l.d)(Object(u.b)((function(e){return{users:_t(e),pageSize:Pt(e),totalUsersCount:wt(e),currentPage:Nt(e),isFetching:St(e),followingInProgress:Ct(e)}}),{follow:$,unfollow:ee,setUsers:te,setCurrentPage:ne,setUsersTotalCount:se,toggleFollowingProgress:ae,getUsers:function(e,t){return function(){var n=Object(b.a)(j.a.mark((function n(s){var r;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s(re(!0)),s(ne(e)),n.next=4,g.getUsers(e,t);case 4:r=n.sent,s(re(!1)),s(te(r.items)),s(se(r.totalCount));case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(It),kt=n(93),Ft=n.n(kt),Ut=n(97),Et=function(e){var t=Object(s.useState)(!1),n=Object(Ut.a)(t,2),r=n[0],a=n[1],i=Object(s.useState)(e.status),c=Object(Ut.a)(i,2),o=c[0],u=c[1];Object(s.useEffect)((function(){u(e.status)}),[]);return Object(Ce.jsxs)("div",{children:[!r&&Object(Ce.jsx)("div",{children:Object(Ce.jsx)("span",{onDoubleClick:function(){a(!0)},children:e.status||"-----"})}),r&&Object(Ce.jsx)("div",{children:Object(Ce.jsx)("input",{autoFocus:!0,onBlur:function(){a(!1),e.updateUserStatus(o)},onChange:function(e){u(e.currentTarget.value)},value:o})})]})},Tt=function(e){var t=e.profile,n=e.status,s=e.updateUserStatus;return t?Object(Ce.jsx)("div",{children:Object(Ce.jsx)("div",{children:Object(Ce.jsxs)("div",{className:Ft.a.descriptionBlock,children:[Object(Ce.jsx)("div",{className:Ft.a.ProfilePhotos,children:Object(Ce.jsx)("img",{src:t.photos.small?t.photos.large:E,alt:"photos"})}),Object(Ce.jsx)("div",{children:t.fullName}),Object(Ce.jsx)("div",{children:t.aboutMe}),Object(Ce.jsx)("div",{children:t.contacts.github}),Object(Ce.jsx)("div",{children:Object(Ce.jsx)(Et,{status:n,updateUserStatus:s})})]})})}):Object(Ce.jsx)(vt,{})},At=n(94),Mt=n.n(At),Dt=n(95),Bt=n.n(Dt),zt=function(e){return Object(Ce.jsxs)("div",{className:Bt.a.item,children:[Object(Ce.jsx)("div",{className:Bt.a.post_avatar,children:Object(Ce.jsx)("img",{src:M,alt:"avatar"})}),Object(Ce.jsx)("div",{children:e.message}),Object(Ce.jsx)("div",{children:Object(Ce.jsxs)("span",{children:["Like: ",e.likes]})})]})},Lt=it(10),Rt=r.a.memo((function(e){var t=e.posts.map((function(e){return Object(Ce.jsx)(zt,{id:e.id,message:e.message,likes:e.likes},e.id)}));return Object(Ce.jsxs)("div",{className:Mt.a.postBlock,children:[Object(Ce.jsx)("h3",{children:"My posts"}),Object(Ce.jsx)(Gt,{onSubmit:function(t){e.addPost(t.newPostText)}}),Object(Ce.jsx)("div",{className:Mt.a.posts,children:t})]})})),Gt=Object(Qe.a)({form:"postMyPostsForm"})((function(e){return Object(Ce.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(Ce.jsx)("div",{children:Object(Ce.jsx)(qe.a,{component:nt,name:"newPostText",placeholder:"Post message",validate:[at,Lt]})}),Object(Ce.jsx)("div",{children:Object(Ce.jsx)("button",{children:"Add post"})})]})})),Wt=Rt,Ht=Object(u.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(function(e){return{type:S,newPostText:e}}(t))}}}))(Wt),Kt=function(e){return Object(Ce.jsxs)("div",{children:[Object(Ce.jsx)(Tt,{profile:e.profile,status:e.status,updateUserStatus:e.updateUserStatus}),Object(Ce.jsx)(Ht,{})]})},Vt=function(e){Object(Pe.a)(n,e);var t=Object(we.a)(n);function n(){return Object(xe.a)(this,n),t.apply(this,arguments)}return Object(_e.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getUserStatus(e)}},{key:"render",value:function(){return Object(Ce.jsx)("div",{children:Object(Ce.jsx)(Kt,Object(p.a)(Object(p.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateUserStatus:this.props.updateUserStatus}))})}}]),n}(r.a.Component),Jt=Object(l.d)(Object(u.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.id,isAuth:e.auth.isAuth}}),{getUserProfile:function(e){return function(){var t=Object(b.a)(j.a.mark((function t(n){var s;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v(e);case 2:s=t.sent,n((r=s.data,{type:C,profile:r}));case 4:case"end":return t.stop()}var r}),t)})));return function(e){return t.apply(this,arguments)}}()},getUserStatus:function(e){return function(){var t=Object(b.a)(j.a.mark((function t(n){var s;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x(e);case 2:s=t.sent,n(F(s.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateUserStatus:function(e){return function(){var t=Object(b.a)(j.a.mark((function t(n){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_(e);case 2:0===t.sent.data.resultCode&&n(F(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),ye.f)(Vt),Yt=n(96),Zt=n.n(Yt),qt=function(e){return Object(Ce.jsx)("header",{className:Zt.a.header,children:Object(Ce.jsx)("div",{className:Zt.a.login,children:e.isAuth?Object(Ce.jsxs)("div",{children:[e.login," - ",Object(Ce.jsx)("button",{onClick:e.logout,children:"Logout"})]}):Object(Ce.jsx)(o.b,{to:"/login",children:"Login"})})})},Qt=function(e){Object(Pe.a)(n,e);var t=Object(we.a)(n);function n(){return Object(xe.a)(this,n),t.apply(this,arguments)}return Object(_e.a)(n,[{key:"render",value:function(){return Object(Ce.jsx)(qt,Object(p.a)({},this.props))}}]),n}(r.a.Component),Xt=Object(u.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:0===e.sent.data.resultCode&&t(le(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Qt),$t=Object(Qe.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return Object(Ce.jsxs)("form",{onSubmit:t,children:[rt("Email","email",[at],st),rt("Password","password",[at],st,{type:"password"}),rt(void 0,"rememberMe",[],st,{type:"checkbox"},"remember me"),n&&Object(Ce.jsx)("div",{className:et.a.formSummaryError,children:n}),Object(Ce.jsx)("div",{children:Object(Ce.jsx)("button",{children:"Login"})})]})})),en=Object(u.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var s=Object(b.a)(j.a.mark((function s(r){var a,i;return j.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,w(e,t,n);case 2:0===(a=s.sent).data.resultCode?r(de()):(i=a.data.messages.length>0?a.data.messages[0]:"Some error",r(Object(ce.a)("login",{_error:i})));case 4:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}()}})((function(e){var t=e.login;return e.isAuth?Object(Ce.jsx)(ye.a,{to:"/profile"}):Object(Ce.jsxs)("div",{className:et.a.formControlWrapper,children:[Object(Ce.jsx)("h1",{children:"Login"}),Object(Ce.jsx)($t,{onSubmit:function(e){t(e.email,e.password,e.rememberMe)}})]})})),tn=n(70),nn=n.n(tn),sn=n(71),rn=n.n(sn),an=function(e){var t="/friendsBlock/"+e.id;return Object(Ce.jsxs)("div",{className:rn.a.itemFriend,children:[Object(Ce.jsx)("div",{className:rn.a.friendAvatar,children:Object(Ce.jsx)(o.b,{to:t,children:Object(Ce.jsx)("img",{src:e.avatar,alt:"avatar"})})}),Object(Ce.jsx)("div",{className:rn.a.nameClass,children:Object(Ce.jsx)(o.b,{style:{textDecoration:"none",color:"blanchedalmond"},to:t,children:e.friendName})})]})},cn=function(e){var t=e.friendsBlock.map((function(e){return Object(Ce.jsx)(an,{avatar:e.avatar,friendName:e.friendName,id:e.id},e.id)}));return Object(Ce.jsxs)("div",{className:nn.a.headerFriends,children:[Object(Ce.jsx)("div",{className:nn.a.titleFriends,children:Object(Ce.jsx)("span",{children:"My friends"})}),Object(Ce.jsx)("div",{}),Object(Ce.jsx)("div",{className:nn.a.itemFriends,children:t})]})},on=function(e){Object(Pe.a)(n,e);var t=Object(we.a)(n);function n(){return Object(xe.a)(this,n),t.apply(this,arguments)}return Object(_e.a)(n,[{key:"render",value:function(){return Object(Ce.jsx)(cn,Object(p.a)({},this.props))}}]),n}(r.a.Component),un=Object(l.d)(Object(u.b)((function(e){return{friendsBlock:e.sidebar.friendsBlock}}),{}))(on),ln=function(e){Object(Pe.a)(n,e);var t=Object(we.a)(n);function n(){return Object(xe.a)(this,n),t.apply(this,arguments)}return Object(_e.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(Ce.jsxs)("div",{className:"app-wrapper",children:[Object(Ce.jsx)(Xt,{}),Object(Ce.jsx)(Ie,{}),Object(Ce.jsx)(un,{}),Object(Ce.jsxs)("div",{className:"app-wrapper-content",children:[Object(Ce.jsx)(ye.b,{path:"/profile/:userId?",render:function(){return Object(Ce.jsx)(Jt,{})}}),Object(Ce.jsx)(ye.b,{path:"/dialogs",render:function(){return Object(Ce.jsx)(dt,{})}}),Object(Ce.jsx)(ye.b,{path:"/users",render:function(){return Object(Ce.jsx)(yt,{})}}),Object(Ce.jsx)(ye.b,{path:"/login",render:function(){return Object(Ce.jsx)(en,{})}}),Object(Ce.jsx)(ye.b,{path:"/news",component:Ee}),Object(Ce.jsx)(ye.b,{path:"/music",component:De}),Object(Ce.jsx)(ye.b,{path:"/settings",component:Re})]})]}):Object(Ce.jsx)(vt,{})}}]),n}(r.a.Component),dn=Object(l.d)(ye.f,Object(u.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(de());Promise.all([t]).then((function(){e({type:pe})}))}}}))(ln);i.a.render(Object(Ce.jsx)(o.a,{children:Object(Ce.jsx)(u.a,{store:ve,children:Object(Ce.jsx)(dn,{})})}),document.getElementById("root")),c()},44:function(e,t,n){e.exports={formControlWrapper:"FormsControl_formControlWrapper__3dn2-",formControl:"FormsControl_formControl__3EBbE",error:"FormsControl_error__3gpt0",formSummaryError:"FormsControl_formSummaryError__1sXsL"}},54:function(e,t,n){e.exports={photoItem:"Users_photoItem__2_QJb",usersItemContainer:"Users_usersItemContainer__2debM",userItem:"Users_userItem__2xIKS"}},67:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__32IEi",dialogsItems:"Dialogs_dialogsItems__3PoRR",messages:"Dialogs_messages__3aKtr"}},68:function(e,t,n){e.exports={dialogItem:"DialogItem_dialogItem__1R5W4",dialog:"DialogItem_dialog__3ChSY",dialogAvatar:"DialogItem_dialogAvatar__35j3p",dialogName:"DialogItem_dialogName__ucqdT"}},70:function(e,t,n){e.exports={headerFriends:"Friends_headerFriends__2bQ4Z",itemFriends:"Friends_itemFriends__1hI_K",titleFriends:"Friends_titleFriends__2beEv"}},71:function(e,t,n){e.exports={friendAvatar:"Friend_friendAvatar__3wEbM",nameClass:"Friend_nameClass__1mo9p",itemFriend:"Friend_itemFriend__1zVTR"}},90:function(e,t,n){e.exports={message:"Message_message__g2Egm",itemText:"Message_itemText__34RBh"}},93:function(e,t,n){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__3C0mM",ProfilePhotos:"ProfileInfo_ProfilePhotos__2WeJd"}},94:function(e,t,n){e.exports={postBlock:"MyPosts_postBlock__2mcAp",posts:"MyPosts_posts__1BTGS"}},95:function(e,t,n){e.exports={item:"Post_item__1mEk_",post_avatar:"Post_post_avatar__1tIXi"}},96:function(e,t,n){e.exports={header:"Header_header__1BxDK",login:"Header_login__VuZqN"}}},[[293,1,2]]]);
//# sourceMappingURL=main.9ae5af0d.chunk.js.map