(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{131:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(24),o=a.n(r),i=a(11),l=a(12),s=a(14),m=a(13),u=a(15),p=a(27),h=a(26),b=(a(85),a(76)),d=a.n(b),f=a(75),j=a.n(f),E=a(146),O=a(147),g=a(153),v=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement(E.a,null,c.a.createElement(O.a,{className:"nav-container"},c.a.createElement(g.a,{color:"inherit",component:p.b,to:"/"},"Home"),c.a.createElement(g.a,{color:"inherit",component:p.b,to:"/signup"},"Signup"),c.a.createElement(g.a,{color:"inherit",component:p.b,to:"/login"},"Login")))}}]),t}(n.Component),y=a(74),k=a.n(y),w=a(152),x=a(6),C=a(148),N=a(150),I=a(149),P=a(151),S=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.scream,n=a.body,r=a.createdAt,o=a.userImage,i=a.userHandle;a.screamId,a.likeCount,a.commentCount;return c.a.createElement(C.a,{className:t.card},c.a.createElement(I.a,{image:o,title:"Profile Image",className:t.image}),c.a.createElement(N.a,{className:t.content},c.a.createElement(P.a,{variant:"h5",color:"primary",component:p.b,to:"/users/".concat(i)},i),c.a.createElement(P.a,{variant:"body2",color:"textSecondary"},r),c.a.createElement(P.a,{variant:"body1"},n)))}}]),t}(n.Component),A=Object(x.a)({card:{display:"flex",marginBottom:20},image:{minWidth:200},content:{padding:25,objectFit:"cover"}})(S),B=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={screams:null},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;k.a.get("".concat("https://asia-east2-xhk1995.cloudfunctions.net/api","/screams")).then(function(t){e.setState({screams:t.data})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this.state.screams?this.state.screams.map(function(e){return c.a.createElement(A,{key:e.screamId,scream:e})}):c.a.createElement("p",null,"Loading...");return c.a.createElement(w.a,{container:!0,spacing:2},c.a.createElement(w.a,{item:!0,sm:8,xs:12},e),c.a.createElement(w.a,{item:!0,sm:4,xs:12},c.a.createElement("p",null,"Profile")))}}]),t}(n.Component),L=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Login Page"))}}]),t}(n.Component),W=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Signup Page"))}}]),t}(n.Component),H=j()({palette:{primary:{light:"#33c9dc",main:"#00bcd4",dark:"#008394",contrastText:"#fff"},secondary:{light:"#ff6333",main:"#ff3d00",dark:"#b22a00",contrastText:"#fff"}}}),J=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement(d.a,{theme:H},c.a.createElement("div",{className:"App"},c.a.createElement(p.a,{basename:"/socialape-client"},c.a.createElement(v,null),c.a.createElement("div",{className:"container"},c.a.createElement(h.c,null,c.a.createElement(h.a,{exact:!0,path:"/",component:B}),c.a.createElement(h.a,{path:"/login",component:L}),c.a.createElement(h.a,{path:"/signup",component:W}))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},80:function(e,t,a){e.exports=a(131)},85:function(e,t,a){}},[[80,1,2]]]);
//# sourceMappingURL=main.f3ac6e5d.chunk.js.map