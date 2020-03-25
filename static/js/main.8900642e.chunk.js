(this.webpackJsonpcovid2019=this.webpackJsonpcovid2019||[]).push([[0],{168:function(e,t,n){e.exports=n(184)},174:function(e,t,n){},175:function(e,t,n){},180:function(e,t,n){},181:function(e,t,n){},183:function(e,t,n){},184:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(12),o=n.n(c),i=n(15),l=n(223),u=n(221),s=n(222),m=n(227),f=n(10),d=[["Confirmed","https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv"],["Deaths","https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv"]],h=["Province/State","Country/Region","Lat","Long"],b=function(){var e=Object(a.useState)(null),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){Promise.all(d.map((function(e){return Object(f.b)(e[1])}))).then((function(e){var t=e.map((function(e,t){return Object(f.h)().key((function(e){return e["Country/Region"]})).key((function(e){return e.date})).map(function(e,t){var n=[];return e.forEach((function(e){Object.keys(e).filter((function(e){return!h.includes(e)})).forEach((function(a){if(""!==e[a]){var r={};h.forEach((function(t){return r[t]=e[t]})),r.date=a,r[t]=+e[a],n.push(r)}}))})),n}(e,d[t][0]))})),n=t[0].keys(),a=[];n.forEach((function(e){var n=t.map((function(t){return t["$".concat(e)]})).filter((function(e){return e}));n[0].keys().forEach((function(e){var t=n.map((function(t){return t["$".concat(e)]})),r={};h.forEach((function(e){var n=t[0][0][e];r[e]=["Lat","Long"].includes(e)?+n:n})),r.date=new Date(e),t.forEach((function(e,t){if(e){var n=d[t][0];r[n]=e.map((function(e){return e[n]})).reduce((function(e,t){return t+e}))}})),a.push(r)}))}));var c=Object(f.h)().key((function(e){return e["Country/Region"]})).sortValues((function(e,t){return e.date-t.date})).map(a);r(c)}))}),[]),n},g=n(46),E=n.n(g),v=(n(94),function(e){var t=e.xScale,n=e.boundedHeight,c=e.boundedWidth,o=e.label,i=e.labelOffset,l=e.tickSize,u=e.tickOffset,s=e.tickWidth,m=Object(a.useMemo)((function(){return t.range()}),[t]),f=Object(a.useMemo)((function(){return c/s}),[c,s]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("path",{className:"line",d:["M",m[0],n,"H",m[1]].join(" "),fill:"none"}),t.ticks(f).map((function(e,a){return r.a.createElement("g",{className:"tick",key:a,transform:"translate(".concat(t(e),",0)")},r.a.createElement("line",{y1:n,y2:n+l}),r.a.createElement("text",{style:{textAnchor:"middle"},dy:".71em",y:n+u},E()(e).format("Do MMM")))})),o&&r.a.createElement("text",{className:"label",x:c/2,y:n+i,textAnchor:"middle"},o))}),O=Object(f.e)(".0s"),j=function(e){var t=e.yScale,n=e.boundedHeight,c=(e.boundedWidth,e.label),o=e.labelOffset,i=e.tickSize,l=e.tickOffset,u=e.tickHeight,s=Object(a.useMemo)((function(){return t.range()}),[t]),m=Object(a.useMemo)((function(){return n/u}),[n,u]),f=t.tickFormat(m,"");return r.a.createElement(r.a.Fragment,null,r.a.createElement("path",{className:"line",d:["M",0,s[1],"v",s[0]].join(" "),fill:"none"}),t.ticks(m).filter((function(e){return e>=1})).map(f).filter((function(e){return""!==e})).map((function(e,n){return r.a.createElement("g",{key:n,className:"tick",transform:"translate(0,".concat(t(e),")")},r.a.createElement("line",{x2:-i}),r.a.createElement("text",{key:e,style:{textAnchor:"end"},x:-l,dy:".32em"},O(e)))})),c&&r.a.createElement("text",{className:"label",textAnchor:"middle",transform:"translate(".concat(-o,",").concat(n/2,") rotate(-90)")},c))},p=n(95),y=n(58),x=(n(174),function(e){var t=e.x,n=e.y,c=e.fill,o=e.transition,l=e.onPointerEnter,u=e.onPointerLeave,s=Object(y.b)((function(){return{config:{duration:o,easing:f.c},cx:t,cy:n,fill:c||"#efefef"}})),m=Object(i.a)(s,2),d=m[0],h=m[1];return Object(a.useEffect)((function(){h({cx:t,cy:n,fill:c||"#efefef"})}),[h,t,n,c]),r.a.createElement(y.a.circle,Object.assign({},d,{onPointerEnter:l,onPointerLeave:u}))}),k=function(e){var t=e.data,n=e.xScale,c=e.yScale,o=e.xValue,i=e.yValue,l=e.transition,u=e.color,s=e.setToolTipData,m=Object(a.useRef)(null);return Object(a.useEffect)((function(){Object(f.l)(m.current).transition().duration(l).attrTween("d",(function(){var e=Object(f.l)(this).attr("d"),a=Object(f.f)().x((function(e){return n(o(e))})).y((function(e){return c(i(e))}))(t);return Object(p.interpolatePath)(e,a)}))}),[t,n,c,o,i,l]),r.a.createElement("g",{className:"marks"},r.a.createElement("path",{ref:m,stroke:u}),t.map((function(e,t){var a=n(o(e)),m=c(i(e));return r.a.createElement(x,{key:t,x:a,y:m,fill:u,transition:l,onPointerEnter:function(){return s({data:e,x:a,y:m,color:u})},onPointerLeave:function(){return s("")}})})))},S=n(50),C=n(100),_=function(e){var t=Object(S.a)({},e,{marginTop:e.marginTop||10,marginRight:e.marginRight||10,marginBottom:e.marginBottom||40,marginLeft:e.marginLeft||75});return Object(S.a)({},t,{boundedHeight:Math.max(t.height-t.marginTop-t.marginBottom,0),boundedWidth:Math.max(t.width-t.marginLeft-t.marginRight,0)})},N=n(225),D=n(224),M=n(228),w=(n(175),function(e){var t=e.tag,n=e.color,a=e.onDelete;return r.a.createElement(M.a,{className:"location-tag",label:t,onDelete:function(e){return a(e,t)},style:{backgroundColor:n,color:"white"}})}),R=function(e){var t=e.locations,n=e.values,a=e.colors,c=e.colorScheme,o=e.onChange,i=e.onDelete;return r.a.createElement(N.a,{className:"autocomplete",multiple:!0,options:t.sort(f.a),value:n,onChange:o,renderInput:function(e){return r.a.createElement(D.a,Object.assign({},e,{variant:"standard",label:"Select locations"}))},renderTags:function(e){return e.map((function(e,t){return r.a.createElement(w,{key:e,tag:e,color:c[a[e]%c.length],onDelete:i})}))}})},L=(n(180),Object(f.e)(",")),A=function(e){var t=e.data,n=e.x,c=e.y,o=e.color,i=Object(a.useMemo)((function(){if(t)return{date:E()(t.date).format("Do MMM"),country:t["Country/Region"],confirmed:L(t.Confirmed),deaths:L(t.Deaths)}}),[t]);return r.a.createElement("div",{className:"wrapper",style:{transform:"translate(calc(-50% + ".concat(n,"px),").concat(c+30,"px)"),backgroundColor:o,opacity:i?.85:0}},r.a.createElement("div",{className:"chart-tooltip"},t&&r.a.createElement(r.a.Fragment,null,r.a.createElement("b",null,i.country," - ",i.date),r.a.createElement("br",null),r.a.createElement("span",null,"Confirmed: ",i.confirmed),r.a.createElement("br",null),r.a.createElement("span",null,"Deaths: ",i.deaths))))},V=(n(181),function(e){var t=e.title,n=e.data,c=e.dimensions,o=e.xAxis,l=e.yAxis,d=e.xValues,h=e.yValues,b=e.transitions,g=e.defaultLocations,E=e.onClose,O=function(e){var t=Object(a.useRef)(),n=_(e),r=Object(a.useState)(0),c=Object(i.a)(r,2),o=c[0],l=c[1],u=Object(a.useState)(0),s=Object(i.a)(u,2),m=s[0],f=s[1];Object(a.useEffect)((function(){if(n.width&&n.height)return[t,n];var e=t.current,a=new C.a((function(e){if(Array.isArray(e)&&e.length){var t=e[0];o!==t.contentRect.width&&l(t.contentRect.width),m!==t.contentRect.height&&f(t.contentRect.height)}}));return a.observe(e),function(){return a.unobserve(e)}}),[]);var d=_(Object(S.a)({},n,{width:n.width||o,height:n.height||m}));return[t,d]}(c),p=Object(i.a)(O,2),y=p[0],x=p[1],N=x.width,D=x.height,M=x.marginLeft,w=x.marginTop,L=(x.marginBottom,x.marginRight,x.boundedHeight),V=x.boundedWidth,P=Object(a.useState)(g),T=Object(i.a)(P,2),I=T[0],H=T[1],W=Object(a.useState)({}),B=Object(i.a)(W,2),F=B[0],z=B[1],G=Object(a.useState)(),$=Object(i.a)(G,2),J=$[0],q=$[1],K=Object(a.useMemo)((function(){if(n)return I.map((function(e){return n["$".concat(e)]}))}),[n,I]),Q=Object(a.useMemo)((function(){if(K){var e=Object(f.d)(K.map((function(e){return e.map(d)})).flat());return Object(f.j)().domain(e).range([0,V])}}),[K,d,V]),U=Object(a.useMemo)((function(){if(K){var e=[.1,Object(f.g)(K.map((function(e){return e.map(h)})).flat())];return Object(f.i)().domain(e).range([L,0]).nice()}}),[K,h,L]);Object(a.useEffect)((function(){n&&z((function(e){var t=Object.keys(e);if(0===t.length){var n={};return I.forEach((function(e,t){return n[e]=t})),n}var a=Object.values(e),r=Object.assign({},e);return I.filter((function(e){return!t.includes(e)})).forEach((function(e){for(var t=0;a.includes(t);)t++;r[e]=t})),t.filter((function(e){return!I.includes(e)})).forEach((function(e){delete r[e]})),r}))}),[n,I]);var X=Object(a.useMemo)((function(){if(K)return r.a.createElement(r.a.Fragment,null,K.map((function(e,t){var n=e[0]["Country/Region"],a=f.k[F[n]%f.k.length];return r.a.createElement(k,{key:n,data:e,xScale:Q,yScale:U,xValue:d,yValue:h,transition:b.lines,color:a,setToolTipData:q})})))}),[F,K,b.lines,Q,d,U,h]);return r.a.createElement("div",{className:"chart"},r.a.createElement(u.a,{className:"chart-selector justify-content-center"},r.a.createElement(s.a,{md:11},r.a.createElement(R,{locations:n?n.keys():g,values:I,colors:F,colorScheme:f.k,onChange:function(e,t){return H(t)},onDelete:function(e,t){return H((function(e){var n=e.indexOf(t),a=e.slice();return a.splice(n,1),a}))}})),r.a.createElement(s.a,{md:1},r.a.createElement(m.a,{variant:"outline-danger close-button",size:"sm",onClick:E},r.a.createElement("span",null,"x")))),r.a.createElement("div",{className:"chart-container",ref:y},r.a.createElement(A,J),r.a.createElement("svg",{width:N,height:D},r.a.createElement("g",{transform:"translate(".concat(M,",").concat(w,")")},t&&r.a.createElement("text",{className:"title",x:V/2+t.dx,y:t.dy,textAnchor:"middle"},t.label),K?r.a.createElement(r.a.Fragment,null,r.a.createElement(v,Object.assign({xScale:Q,boundedHeight:L,boundedWidth:V},o)),r.a.createElement(j,Object.assign({yScale:U,boundedHeight:L,boundedWidth:V},l)),X):r.a.createElement("text",null,"Loading...")))))}),P=(n(182),n(183),{dimensions:{marginTop:10,marginRight:35,marginBottom:30,marginLeft:75},xAxis:{tickSize:6,tickOffset:15,tickWidth:130},yAxis:{label:"Cases",labelOffset:50,tickSize:6,tickOffset:10,tickHeight:100},xValues:function(e){return e.date},yValues:function(e){return 0===e.Confirmed?.1:e.Confirmed},transitions:{lines:500},defaultLocations:["Peru","Australia","Iran","Italy"]});var T=function(){var e=b(),t=Object(a.useState)([0]),n=Object(i.a)(t,2),c=n[0],o=n[1];return r.a.createElement(l.a,{className:"app-container"},r.a.createElement("header",null,r.a.createElement("h1",{className:"mt-4 mb-4"},"Covid 2019")),r.a.createElement("main",{className:"app-main"},r.a.createElement(u.a,null,r.a.createElement(s.a,null,r.a.createElement("p",null,"Plots of coronavirus data (",r.a.createElement("a",{href:"https://github.com/CSSEGISandData/COVID-19/tree/master/csse_covid_19_data",target:"_black"},"source"),")."))),r.a.createElement(u.a,null,c.map((function(t){return r.a.createElement(s.a,{key:t,md:12,xl:c.length>1?6:12},r.a.createElement(V,Object.assign({data:e,onClose:function(){return o((function(e){var n=e.indexOf(t),a=e.slice();return a.splice(n,1),a}))}},P)))}))),r.a.createElement(u.a,{className:"mt-2"},r.a.createElement(s.a,{className:"text-right"},r.a.createElement(m.a,{onClick:function(){return o((function(e){var t=0===e.length?0:e[e.length-1]+1;return e.concat(t)}))}},"Add Chart")))),r.a.createElement("footer",null,r.a.createElement(u.a,null,r.a.createElement(s.a,{className:"mt-4 text-right"},r.a.createElement("a",{href:"https://github.com/renato145/covid2019",target:"_black"},"Source code")))))};o.a.render(r.a.createElement(T,null),document.getElementById("root"))},94:function(e,t,n){}},[[168,1,2]]]);
//# sourceMappingURL=main.8900642e.chunk.js.map