(this.webpackJsonpTikTuk=this.webpackJsonpTikTuk||[]).push([[5],{101:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return p}));var i=a(50),s=a(1),r=a(0),c=a(38),n=a.n(c),o=a(34),l=a(99),d=a.n(l),j=a(35),u=a(2);function p(){var e=Object(s.f)().uniqueId,t=Object(r.useState)([]),c=Object(i.a)(t,2),l=c[0],p=c[1],h=Object(r.useState)([]),b=Object(i.a)(h,2),f=b[0],m=b[1],x=a(41).default,O={method:"GET",url:"https://tiktok33.p.rapidapi.com/user/info/".concat(e),headers:{"x-rapidapi-host":"tiktok33.p.rapidapi.com","x-rapidapi-key":"98c48d70edmsh2b6af9661af19a5p11b7f7jsnbe8317f49551"}};Object(r.useEffect)((function(){x.request(O).then((function(e){var t=e.data;m(t)})).catch((function(e){console.error(e)}))}),[m]);var _={method:"GET",url:"https://tiktok33.p.rapidapi.com/user/feed/".concat(e),headers:{"x-rapidapi-host":"tiktok33.p.rapidapi.com","x-rapidapi-key":"98c48d70edmsh2b6af9661af19a5p11b7f7jsnbe8317f49551"}};return Object(r.useEffect)((function(){x.request(_).then((function(e){var t=e.data;p(t)})).catch((function(e){console.error(e)}))}),[p]),Object(u.jsxs)("div",{children:[f.user&&Object(u.jsxs)("div",{className:d.a.profile,children:[Object(u.jsxs)("div",{className:d.a.list_noorder,children:[f.user.avatarThumb?Object(u.jsx)("img",{width:"150px",src:f.user.avatarMedium,alt:f.user.nickname,className:d.a.avatar},n.a.generate()):Object(u.jsx)("img",{width:"150px",src:o.a,alt:f.user.nickname}),Object(u.jsx)("h2",{className:d.a.title,children:f.user.nickname}),Object(u.jsx)("p",{children:f.user.signature}),Object(u.jsxs)("p",{children:[Object(u.jsx)("b",{children:f.stats.followerCount})," followers"]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("b",{children:f.stats.followingCount})," followings"]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("b",{children:f.stats.videoCount})," videos"]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("b",{children:f.stats.heart})," hearts"]})]}),Object(u.jsxs)("h2",{className:d.a.title,children:["Other posts created by ",f.user.nickname]})]},n.a.generate()),Object(u.jsx)("div",{className:d.a.wrap,children:l.length?l.map((function(e){return Object(u.jsxs)("div",{className:d.a.list_noorder,children:[Object(u.jsxs)("p",{children:[Object(u.jsx)("b",{children:e.stats.playCount})," views"]}),e.video.originCover?Object(u.jsx)("img",{src:e.video.originCover,alt:e.desc,className:d.a.main_element},n.a.generate()):Object(u.jsx)("img",{width:"150px",src:o.a,alt:f.user.nickname}),Object(u.jsx)("p",{children:e.desc})]},n.a.generate())})):Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(j.a,{})})},n.a.generate())]},n.a.generate())}},34:function(e,t,a){"use strict";t.a=a.p+"static/media/default.9d463bad.png"},35:function(e,t,a){"use strict";var i=a(39),s=a.n(i),r=(a(40),a(2));t.a=function(){return Object(r.jsx)("div",{className:"Loader",children:Object(r.jsx)(s.a,{type:"BallTriangle",color:"#005eaa",height:200,width:200})})}},99:function(e,t,a){e.exports={wrap:"ProfileView_wrap__t-JEZ",profile:"ProfileView_profile__2DeUV",avatar:"ProfileView_avatar__kLGaf",list_noorder:"ProfileView_list_noorder__1peco",main_element:"ProfileView_main_element__12KrY",title:"ProfileView_title__3Cdy5"}}}]);
//# sourceMappingURL=profile-view.4c38be28.chunk.js.map