(this.webpackJsonpTikTuk=this.webpackJsonpTikTuk||[]).push([[6],{34:function(e,t,c){"use strict";t.a=c.p+"static/media/default.9d463bad.png"},79:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return j}));var s=c(47),a=c(1),n=c(0),r=c(37),i=c.n(r),d=c(34),o=c(2);function j(){var e=Object(a.f)().uniqueId,t=Object(n.useState)([]),r=Object(s.a)(t,2),j=r[0],u=r[1],h=Object(n.useState)([]),b=Object(s.a)(h,2),p=b[0],l=b[1],f=c(38).default,O={method:"GET",url:"https://tiktok33.p.rapidapi.com/user/info/".concat(e),headers:{"x-rapidapi-host":"tiktok33.p.rapidapi.com","x-rapidapi-key":"98c48d70edmsh2b6af9661af19a5p11b7f7jsnbe8317f49551"}};Object(n.useEffect)((function(){f.request(O).then((function(e){var t=e.data;l(t)})).catch((function(e){console.error(e)}))}),[l]);var x={method:"GET",url:"https://tiktok33.p.rapidapi.com/user/feed/".concat(e),headers:{"x-rapidapi-host":"tiktok33.p.rapidapi.com","x-rapidapi-key":"98c48d70edmsh2b6af9661af19a5p11b7f7jsnbe8317f49551"}};return Object(n.useEffect)((function(){f.request(x).then((function(e){var t=e.data;u(t)})).catch((function(e){console.error(e)}))}),[u]),Object(o.jsxs)("div",{children:[p.user&&Object(o.jsxs)(n.Fragment,{children:[p.user.avatarThumb?Object(o.jsx)("img",{width:"150px",src:p.user.avatarThumb,alt:p.user.nickname},i.a.generate()):Object(o.jsx)("img",{width:"150px",src:d.a,alt:p.user.nickname}),Object(o.jsx)("h2",{children:p.user.nickname}),Object(o.jsx)("p",{children:p.user.signature}),Object(o.jsxs)("p",{children:[Object(o.jsx)("b",{children:p.stats.followerCount})," followers"]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("b",{children:p.stats.followingCount})," followings"]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("b",{children:p.stats.videoCount})," videos"]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("b",{children:p.stats.heart})," hearts"]}),Object(o.jsxs)("h3",{children:["Other posts created by ",p.user.nickname]})]},i.a.generate()),j.length?j.map((function(e){return Object(o.jsxs)(n.Fragment,{children:[Object(o.jsxs)("p",{children:[Object(o.jsx)("b",{children:e.stats.playCount})," views"]}),Object(o.jsx)("img",{width:"200px",src:e.video.dynamicCover,alt:e.desc},i.a.generate()),Object(o.jsx)("p",{children:e.desc})]},i.a.generate())})):Object(o.jsx)("p",{children:"Loading..."})]})}}}]);
//# sourceMappingURL=profile-view.8523ce6d.chunk.js.map