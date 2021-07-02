(this["webpackJsonpmovies-series-app"]=this["webpackJsonpmovies-series-app"]||[]).push([[0],{144:function(e,t,n){},174:function(e,t){},177:function(e,t){},178:function(e,t){},179:function(e,t){},180:function(e,t){},198:function(e,t){},751:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(31),s=n.n(r),o=(n(144),n(19)),i=n(4),l=n(52),u=n(15),b=n(24),d=n.n(b),j=n(26),p=n.n(j),m=n(48),O=n(49),h=n.n(O),x=n(137),f=n.n(x),g=n(1),v=function(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)(1),i=Object(l.a)(s,2),b=i[0],j=i[1],O=Object(u.b)(),x=Object(u.c)((function(e){return e.pokemonList}));Object(a.useEffect)((function(){v(b)}),[b]);var v=function(e){O(function(e){return function(){var t=Object(m.a)(p.a.mark((function t(n){var a,c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:"Pokemon_List_Loading"}),a=15*(e-1),t.next=6,h.a.get("https://pokeapi.co/api/v2/pokemon?limit=".concat(15,"&offset=").concat(a));case 6:c=t.sent,n({type:"Pokemon_List_Success",payload:c.data}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),n({type:"Pokemon_List_Fail"});case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()}(e))};return Object(g.jsxs)("div",{className:"",children:[Object(g.jsxs)("div",{className:"flex items-center justify-center m-2",children:["Search:",Object(g.jsx)("input",{type:"text",className:" border-2 mx-2",onChange:function(e){return r(e.target.value)}}),Object(g.jsx)("button",{className:"border-2 rounded-full bg-green-200 ",onClick:function(){return e.history.push("/pokemon/".concat(c))},children:"Search"})]}),d.a.isEmpty(x.data)?x.loading?Object(g.jsx)("p",{children:"Loading..."}):""!==x.errorMeg?Object(g.jsx)("p",{children:x.errorMsg}):Object(g.jsx)("p",{children:"unable to get data"}):Object(g.jsx)("div",{className:"p-1 w-10/12 m-auto",children:x.data.map((function(e){return Object(g.jsx)(o.b,{to:"/pokemon/".concat(e.name),className:"",children:Object(g.jsx)("div",{className:"m-2 items-center w-5 flex justify-between w-full border-yellow-600 border-2 rounded-lg p-2 hover:bg-yellow-300",children:Object(g.jsx)("p",{children:e.name})})},e.name)}))}),!d.a.isEmpty(x.data)&&Object(g.jsx)(f.a,{pageCount:Math.ceil(x.count/15),pageRangeDisplayed:2,marginPagesDisplayed:1,onPageChange:function(e){return j(e.selected+1)},previousLabel:"<",nextLabel:">",containerClassName:"flex items-center justify-center p-1 w-10/12 m-auto",pageClassName:"mx-5 border-2 w-7 text-center border-blue-300 hover:bg-blue-300 ",nextClassName:" border-2 w-7 text-center border-blue-300 hover:bg-blue-300",previousClassName:" border-2 w-7 text-center border-blue-300 hover:bg-blue-300"})]})},k=function(e){var t=e.match.params.pokemon,n=Object(u.b)(),c=Object(u.c)((function(e){return e.pokemon})),r=function(){return n(function(e){return function(){var t=Object(m.a)(p.a.mark((function t(n){var a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:"Pokemon_Multiple_Loading"}),t.next=4,h.a.get("https://pokeapi.co/api/v2/pokemon/".concat(e));case 4:a=t.sent,n({type:"Pokemon_Multiple_Success",payload:a.data,pokemonName:e}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),n({type:"Pokemon_Multiple_Fail"});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}(t))};Object(a.useEffect)((function(){r(),console.log(c)}),[]);return Object(g.jsxs)("div",{className:"m-auto w-11/12",children:[Object(g.jsx)("h1",{className:"",children:t}),function(){if(!d.a.isEmpty(c.data[t])){var e=c.data[t];return Object(g.jsxs)("div",{className:"flex justify-between bg-gray-300 p-3",children:[Object(g.jsxs)("div",{className:"flex items-center flex-wrap w-1/5 bg-red-100 rounded-xl p-2",children:[Object(g.jsx)("h1",{className:"w-screen",children:"Spires"}),Object(g.jsx)("img",{src:e.sprites.front_default,alt:""}),Object(g.jsx)("img",{src:e.sprites.back_default,alt:""}),Object(g.jsx)("img",{src:e.sprites.front_shiny,alt:""}),Object(g.jsx)("img",{src:e.sprites.back_shiny,alt:""})]}),Object(g.jsxs)("div",{className:"w-2/5 bg-red-100 rounded-xl p-2",children:[Object(g.jsx)("h1",{children:"Status"}),e.stats.map((function(e){return Object(g.jsxs)("p",{children:[e.stat.name," : ",e.base_stat]})}))]}),Object(g.jsxs)("div",{className:"w-1/5 bg-red-100 rounded-xl p-2",children:[Object(g.jsx)("h1",{children:"Abilities"}),e.abilities.map((function(e){return Object(g.jsx)("div",{children:Object(g.jsx)("p",{children:e.ability.name})})}))]})]})}return c.loading?Object(g.jsx)("p",{children:"Loading..."}):""!==c.errorMsg?Object(g.jsx)("p",{children:c.errorMsg}):void 0}()]})};var y=function(){return Object(g.jsxs)("div",{children:[Object(g.jsx)("nav",{className:"sticky top-0 flex justify-end items-center h-14 w-screen bg-gray-500",children:Object(g.jsx)(o.c,{className:"mr-12",to:"/",children:"Search"})}),Object(g.jsxs)(i.d,{children:[Object(g.jsx)(i.b,{path:"/",exact:!0,component:v}),Object(g.jsx)(i.b,{path:"/pokemon/:pokemon",exact:!0,component:k}),Object(g.jsx)(i.a,{to:"/"})]})]})},_=n(25),w=n(138),N=n(6),M={loading:!1,data:[],errorMeg:"",count:0},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"Pokemon_List_Loading":return Object(N.a)(Object(N.a)({},e),{},{loading:!0,errorMeg:""});case"Pokemon_List_Fail":return Object(N.a)(Object(N.a)({},e),{},{loading:!1,errorMeg:"unable to get pokemon"});case"Pokemon_List_Success":return Object(N.a)(Object(N.a)({},e),{},{loading:!1,data:a.results,count:a.count,errorMeg:""});default:return e}},P=n(33),S=n(139),C={loading:!1,data:{},errorMsg:""},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload,c=t.pokemonName;switch(n){case"Pokemon_Multiple_Loading":return Object(N.a)(Object(N.a)({},e),{},{loading:!0,errorMsg:""});case"Pokemon_Multiple_Fail":return Object(N.a)(Object(N.a)({},e),{},{loading:!1,errorMsg:"unable to find pokemon"});case"Pokemon_Multiple_Success":return Object(N.a)(Object(N.a)({},e),{},{loading:!1,errorMsg:"",data:Object(N.a)(Object(N.a)({},S.data),{},Object(P.a)({},c,a))});default:return e}},F=Object(_.b)({pokemonList:L,pokemon:E}),D=Object(_.c)(F,Object(_.a)(w.a));s.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(o.a,{children:Object(g.jsx)(u.a,{store:D,children:Object(g.jsx)(y,{})})})}),document.getElementById("root"))}},[[751,1,2]]]);
//# sourceMappingURL=main.456a71df.chunk.js.map