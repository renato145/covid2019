(this.webpackJsonpcovid2019=this.webpackJsonpcovid2019||[]).push([[0],{167:function(e,t,n){e.exports=n(182)},173:function(e,t,n){},175:function(e,t,n){},176:function(e,t,n){},181:function(e,t,n){},182:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(11),i=n.n(c),o=n(17),l=n(222),u=n(220),s=n(221),m=n(225),f=(n(172),n(173),n(12)),d=[["Confirmed","https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Confirmed.csv"],["Deaths","https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Deaths.csv"],["Recovered","https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Recovered.csv"]],h=["Province/State","Country/Region","Lat","Long"],g=function(){var e=Object(a.useState)(null),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){Promise.all(d.map((function(e){return Object(f.b)(e[1])}))).then((function(e){var t=e.map((function(e,t){return Object(f.h)().key((function(e){return e["Country/Region"]})).key((function(e){return e.date})).map(function(e,t){var n=[];return e.forEach((function(e){Object.keys(e).filter((function(e){return!h.includes(e)})).forEach((function(a){var r={};h.forEach((function(t){return r[t]=e[t]})),r.date=a,r[t]=+e[a],n.push(r)}))})),n}(e,d[t][0]))})),n=t[0].keys(),a=[];n.forEach((function(e){var n=t.map((function(t){return t["$".concat(e)]}));n[0].keys().forEach((function(e){var t=n.map((function(t){return t["$".concat(e)][0]})),r={};h.forEach((function(e){var n=t[0][e];r[e]=["Lat","Long"].includes(e)?+n:n})),r.date=new Date(e),t.forEach((function(e,t){var n=d[t][0];r[n]=e[n]})),a.push(r)}))}));var c=Object(f.h)().key((function(e){return e["Country/Region"]})).sortValues((function(e,t){return e.date-t.date})).map(a);r(c)}))}),[]),n},b=n(94),E=n.n(b),O=(n(93),function(e){var t=e.xScale,n=e.boundedHeight,c=e.boundedWidth,i=e.label,o=e.labelOffset,l=e.tickSize,u=e.tickOffset,s=e.tickWidth,m=Object(a.useMemo)((function(){return t.range()}),[t]),f=Object(a.useMemo)((function(){return c/s}),[c,s]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("path",{className:"line",d:["M",m[0],n,"H",m[1]].join(" "),fill:"none"}),t.ticks(f).map((function(e,a){return r.a.createElement("g",{className:"tick",key:a,transform:"translate(".concat(t(e),",0)")},r.a.createElement("line",{y1:n,y2:n+l}),r.a.createElement("text",{style:{textAnchor:"middle"},dy:".71em",y:n+u},E()(e).format("Do MMM")))})),i&&r.a.createElement("text",{className:"label",x:c/2,y:n+o,textAnchor:"middle"},i))}),v=Object(f.e)(".0s"),j=function(e){var t=e.yScale,n=e.boundedHeight,c=(e.boundedWidth,e.label),i=e.labelOffset,o=e.tickSize,l=e.tickOffset,u=e.tickHeight,s=Object(a.useMemo)((function(){return t.range()}),[t]),m=Object(a.useMemo)((function(){return n/u}),[n,u]),f=t.tickFormat(m,"");return r.a.createElement(r.a.Fragment,null,r.a.createElement("path",{className:"line",d:["M",0,s[1],"v",s[0]].join(" "),fill:"none"}),t.ticks(m).filter((function(e){return e>=1})).map(f).filter((function(e){return""!==e})).map((function(e,n){return r.a.createElement("g",{key:n,className:"tick",transform:"translate(0,".concat(t(e),")")},r.a.createElement("line",{x2:-o}),r.a.createElement("text",{key:e,style:{textAnchor:"end"},x:-l,dy:".32em"},v(e)))})),c&&r.a.createElement("text",{className:"label",textAnchor:"middle",transform:"translate(".concat(-i,",").concat(n/2,") rotate(-90)")},c))},p=n(95),y=n(57),x=(n(175),function(e){var t=e.x,n=e.y,c=e.fill,i=e.transition,o=Object(a.useRef)(),l=Object(y.b)({config:{duration:i,easing:f.c},cx:t,cy:n,fill:c});return r.a.createElement(y.a.circle,Object.assign({},l,{ref:o}))}),k=function(e){var t=e.data,n=e.xScale,c=e.yScale,i=e.xValue,o=e.yValue,l=e.transition,u=e.color,s=Object(a.useRef)(null);return Object(a.useEffect)((function(){Object(f.l)(s.current).transition().duration(l).attrTween("d",(function(){var e=Object(f.l)(this).attr("d"),a=Object(f.f)().x((function(e){return n(i(e))})).y((function(e){return c(o(e))}))(t);return Object(p.interpolatePath)(e,a)}))}),[t,n,c,i,o,l]),r.a.createElement("g",{className:"marks"},r.a.createElement("path",{ref:s,stroke:u}),t.map((function(e,t){return r.a.createElement(x,{key:t,x:n(i(e)),y:c(o(e)),fill:u,transition:l})})))},S=n(49),_=n(100),C=function(e){var t=Object(S.a)({},e,{marginTop:e.marginTop||10,marginRight:e.marginRight||10,marginBottom:e.marginBottom||40,marginLeft:e.marginLeft||75});return Object(S.a)({},t,{boundedHeight:Math.max(t.height-t.marginTop-t.marginBottom,0),boundedWidth:Math.max(t.width-t.marginLeft-t.marginRight,0)})},N=n(224),R=n(223),w=(n(176),function(e){var t=e.locations,n=e.defaultLocation,a=e.onChange;return r.a.createElement(N.a,{className:"autocomplete",multiple:!0,options:t.sort(f.a),defaultValue:n,onChange:a,renderInput:function(e){return r.a.createElement(R.a,Object.assign({},e,{variant:"standard",label:"Select locations"}))}})}),L=(n(181),function(e){var t=e.title,n=e.data,c=e.dimensions,i=e.xAxis,l=e.yAxis,d=e.xValues,h=e.yValues,g=e.transitions,b=e.defaultLocations,E=e.onClose,v=function(e){var t=Object(a.useRef)(),n=C(e),r=Object(a.useState)(0),c=Object(o.a)(r,2),i=c[0],l=c[1],u=Object(a.useState)(0),s=Object(o.a)(u,2),m=s[0],f=s[1];Object(a.useEffect)((function(){if(n.width&&n.height)return[t,n];var e=t.current,a=new _.a((function(e){if(Array.isArray(e)&&e.length){var t=e[0];i!==t.contentRect.width&&l(t.contentRect.width),m!==t.contentRect.height&&f(t.contentRect.height)}}));return a.observe(e),function(){return a.unobserve(e)}}),[]);var d=C(Object(S.a)({},n,{width:n.width||i,height:n.height||m}));return[t,d]}(c),p=Object(o.a)(v,2),y=p[0],x=p[1],N=x.width,R=x.height,L=x.marginLeft,M=x.marginTop,V=(x.marginBottom,x.marginRight,x.boundedHeight),A=x.boundedWidth,D=Object(a.useState)(b),I=Object(o.a)(D,2),H=I[0],W=I[1],B=Object(a.useMemo)((function(){if(n)return H.map((function(e){return n["$".concat(e)]}))}),[n,H]),T=Object(a.useMemo)((function(){if(B){var e=Object(f.d)(B.map((function(e){return e.map(d)})).flat());return Object(f.j)().domain(e).range([0,A]).nice()}}),[B,d,A]),z=Object(a.useMemo)((function(){if(B){var e=[.1,Object(f.g)(B.map((function(e){return e.map(h)})).flat())];return Object(f.i)().domain(e).range([V,0]).nice()}}),[B,h,V]);return r.a.createElement("div",{className:"chart"},r.a.createElement(u.a,{className:"chart-selector justify-content-center"},r.a.createElement(s.a,{md:11},r.a.createElement(w,{locations:n?n.keys():[H],defaultLocation:b,onChange:function(e,t){return W(t)}})),r.a.createElement(s.a,{md:1},r.a.createElement(m.a,{variant:"outline-danger close-button",size:"sm",onClick:E},r.a.createElement("span",null,"x")))),r.a.createElement("div",{className:"chart-container",ref:y},r.a.createElement("svg",{width:N,height:R},r.a.createElement("g",{transform:"translate(".concat(L,",").concat(M,")")},t&&r.a.createElement("text",{className:"title",x:A/2+t.dx,y:t.dy,textAnchor:"middle"},t.label),B?r.a.createElement(r.a.Fragment,null,r.a.createElement(O,Object.assign({xScale:T,boundedHeight:V,boundedWidth:A},i)),r.a.createElement(j,Object.assign({yScale:z,boundedHeight:V,boundedWidth:A},l)),B.map((function(e,t){return r.a.createElement(k,{key:t,data:e,xScale:T,yScale:z,xValue:d,yValue:h,transition:g.lines,color:f.k[t%f.k.length]})}))):r.a.createElement("text",null,"Loading...")))))}),M={dimensions:{marginTop:10,marginRight:35,marginBottom:30,marginLeft:75},xAxis:{tickSize:6,tickOffset:15,tickWidth:130},yAxis:{label:"Cases",labelOffset:50,tickSize:6,tickOffset:10,tickHeight:100},xValues:function(e){return e.date},yValues:function(e){return 0===e.Confirmed?.1:e.Confirmed},transitions:{lines:500},defaultLocations:["Peru","Australia","Iran","Italy"]};var V=function(){var e=g(),t=Object(a.useState)([0]),n=Object(o.a)(t,2),c=n[0],i=n[1];return r.a.createElement(l.a,{className:"app-container"},r.a.createElement("header",null,r.a.createElement("h1",{className:"mt-4 mb-4"},"Covid 2019")),r.a.createElement("main",null,r.a.createElement(u.a,null,r.a.createElement(s.a,null,r.a.createElement("p",null,"Plots of coronavirus data (",r.a.createElement("a",{href:"https://github.com/CSSEGISandData/COVID-19/tree/master/csse_covid_19_data",target:"_black"},"source"),")."))),r.a.createElement(u.a,null,c.map((function(t){return r.a.createElement(s.a,{key:t,md:12,xl:c.length>1?6:12},r.a.createElement(L,Object.assign({data:e,onClose:function(){return i((function(e){var n=e.indexOf(t),a=e.slice();return a.splice(n,1),a}))}},M)))}))),r.a.createElement(u.a,{className:"mt-2"},r.a.createElement(s.a,{className:"text-right"},r.a.createElement(m.a,{onClick:function(){return i((function(e){var t=0===e.length?0:e[e.length-1]+1;return e.concat(t)}))}},"Add Chart")))),r.a.createElement("footer",null,r.a.createElement(u.a,null,r.a.createElement(s.a,{className:"mt-4 text-right"},r.a.createElement("a",{href:"https://github.com/renato145/covid2019",target:"_black"},"Source code")))))};i.a.render(r.a.createElement(V,null),document.getElementById("root"))},93:function(e,t,n){}},[[167,1,2]]]);
//# sourceMappingURL=main.314865fd.chunk.js.map