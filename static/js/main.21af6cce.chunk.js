(this.webpackJsonpcovid2019=this.webpackJsonpcovid2019||[]).push([[0],{122:function(e,t,n){},201:function(e,t,n){e.exports=n(242)},231:function(e,t,n){},232:function(e,t,n){},237:function(e,t,n){},239:function(e,t,n){},241:function(e,t,n){},242:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(12),i=n.n(c),o=n(13),l=n(282),u=n(280),s=n(281),m=n(286),f=n(9),d=[["Confirmed","https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv"],["Deaths","https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv"],["Recovered","https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_recovered_global.csv"]],h=["Province/State","Country/Region","Lat","Long"],b={Peru:{"3/16/20":"Quarantine starts"}},g=function(){var e=Object(a.useState)(null),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){Promise.all(d.map((function(e){return Object(f.b)(e[1])}))).then((function(e){var t=e.map((function(e,t){return Object(f.h)().key((function(e){return e["Country/Region"]})).key((function(e){return e.date})).map(function(e,t){var n=[];return e.forEach((function(e){Object.keys(e).filter((function(e){return!h.includes(e)})).forEach((function(a){if(""!==e[a]){var r={};h.forEach((function(t){return r[t]=e[t]})),r.date=a,r[t]=+e[a],n.push(r)}}))})),n}(e,d[t][0]))})),n=t[0].keys(),a=[];n.forEach((function(e){var n=t.map((function(t){return t["$".concat(e)]})).filter((function(e){return e})),r=n[0].keys(),c=-1,i=-1,o=b[e];r.forEach((function(e){var t=n.map((function(t){return t["$".concat(e)]})),r={};h.forEach((function(n){var a=t[0][0][n];if(r[n]=["Lat","Long"].includes(n)?+a:a,o){var c=o[e];c&&(r.annotation=c)}})),t.forEach((function(e,t){if(e){var n=d[t][0];r[n]=e.map((function(e){return e[n]})).reduce((function(e,t){return t+e}))}})),r.Confirmed>0&&(c++,r.date=new Date(e),r.idxConfirmed=c,r.Deaths>0&&(i++,r.idxDeaths=i),a.push(r))}))}));var c=Object(f.h)().key((function(e){return e["Country/Region"]})).sortValues((function(e,t){return e.date-t.date})).map(a);r(c)}))}),[]),n},v=n(124),E=n(57),p=n.n(E),O=(n(122),function(e){var t=e.xScale,n=e.boundedHeight,c=e.boundedWidth,i=e.date,o=e.label,l=e.labelOffset,u=e.tickSize,s=e.tickOffset,m=e.tickWidth,f=e.tickWidthDate,d=Object(a.useMemo)((function(){return t.range()}),[t]),h=Object(a.useMemo)((function(){return c/(i?f:m)}),[c,m,f,i]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("path",{className:"line",d:["M",d[0],n,"H",d[1]].join(" "),fill:"none"}),t.ticks(h).map((function(e,a){return r.a.createElement("g",{className:"tick",key:a,transform:"translate(".concat(t(e),",0)")},r.a.createElement("line",{y1:n,y2:n+u}),r.a.createElement("text",{style:{textAnchor:"middle"},dy:".71em",y:n+s},i?p()(e).format("Do MMM"):e))})),o&&r.a.createElement("text",{className:"label",x:c/2,y:n+l,textAnchor:"middle"},o))}),j=Object(f.e)(".0s"),y=function(e){var t=e.yScale,n=e.boundedHeight,c=e.boundedWidth,i=e.label,o=e.labelOffset,l=e.tickSize,u=e.tickOffset,s=e.tickHeight,m=Object(a.useMemo)((function(){return t.range()}),[t]),f=Object(a.useMemo)((function(){return n/s}),[n,s]),d=t.tickFormat(f,"");return r.a.createElement(r.a.Fragment,null,r.a.createElement("path",{className:"line",d:["M",0,m[1],"v",m[0]].join(" "),fill:"none"}),t.ticks(f).filter((function(e){return e>=1})).map(d).filter((function(e){return""!==e})).map((function(e,n){return r.a.createElement("g",{key:n,className:"tick",transform:"translate(0,".concat(t(e),")")},r.a.createElement("line",{x2:-l}),r.a.createElement("line",{className:"axis-line",x2:c}),r.a.createElement("text",{key:e,style:{textAnchor:"end"},x:-u,dy:".32em"},j(e)))})),i&&r.a.createElement("text",{className:"label",textAnchor:"middle",transform:"translate(".concat(-o,",").concat(n/2,") rotate(-90)")},i))},k=n(125),x=n(74),C=(n(231),function(e){var t=e.x,n=e.y,c=e.fill,i=e.transition,l=e.onPointerEnter,u=e.onPointerLeave,s=Object(x.b)((function(){return{config:{duration:i,easing:f.c},cx:t,cy:n,r:0,fill:c||"#efefef"}})),m=Object(o.a)(s,2),d=m[0],h=m[1];return Object(a.useEffect)((function(){h({cx:t,cy:n,r:5,fill:c||"#efefef"})}),[h,t,n,c]),r.a.createElement(x.a.circle,Object.assign({},d,{onPointerEnter:l,onPointerLeave:u}))}),S=function(e){var t=e.data,n=e.xScale,c=e.yScale,i=e.xValue,o=e.yValue,l=e.transition,u=e.color,s=e.setToolTipData,m=e.marginRight,d=e.marginLeft,h=e.boundedWidth,b=e.boundedHeight,g=Object(a.useRef)(null);return Object(a.useEffect)((function(){Object(f.m)(g.current).transition().duration(l).ease(f.c).attrTween("d",(function(){var e=Object(f.m)(this).attr("d"),a=Object(f.f)().x((function(e){return n(i(e))})).y((function(e){return c(o(e))}))(t);return Object(k.interpolatePath)(e,a)}))}),[t,n,c,i,o,l]),r.a.createElement("g",{className:"marks"},r.a.createElement("path",{ref:g,stroke:u}),t.map((function(e,t){var a=n(i(e)),f=c(o(e));return r.a.createElement(C,{key:t,x:a,y:f,fill:u,transition:l,onPointerEnter:function(){return s({data:e,x:(t=a,n=d,r=h-m-25,t>=r?r:t<=n?n:t),y:f,up:f>b/2,color:u});var t,n,r},onPointerLeave:function(){return s("")}})})))},_=n(61),w=n(132),D=function(e){var t=Object(_.a)({},e,{marginTop:e.marginTop||10,marginRight:e.marginRight||10,marginBottom:e.marginBottom||40,marginLeft:e.marginLeft||75});return Object(_.a)({},t,{boundedHeight:Math.max(t.height-t.marginTop-t.marginBottom,0),boundedWidth:Math.max(t.width-t.marginLeft-t.marginRight,0)})},N=n(284),M=n(283),R=n(287),L=(n(232),function(e){var t=e.tag,n=e.color,a=e.onDelete;return r.a.createElement(R.a,{className:"location-tag",label:t,onDelete:function(e){return a(e,t)},style:{backgroundColor:n,color:"white"}})}),A=function(e){var t=e.locations,n=e.values,a=e.colors,c=e.colorScheme,i=e.onChange,o=e.onDelete;return r.a.createElement(N.a,{className:"autocomplete",multiple:!0,options:t.sort(f.a),value:n,onChange:i,renderInput:function(e){return r.a.createElement(M.a,Object.assign({},e,{variant:"standard",label:"Select locations"}))},renderTags:function(e){return e.map((function(e,t){return r.a.createElement(L,{key:e,tag:e,color:c[a[e]%c.length],onDelete:o})}))}})},P=(n(237),Object(f.e)(",")),I=function(e){var t=e.data,n=e.x,c=e.y,i=e.color,o=e.up,l=Object(a.useMemo)((function(){if(t)return{date:p()(t.date).format("Do MMM"),country:t["Country/Region"],confirmed:P(t.Confirmed),deaths:P(t.Deaths),recovered:P(t.Recovered)}}),[t]);return r.a.createElement("div",{className:"wrapper",style:{transform:"translate(".concat(n,"px,").concat(o?"calc(".concat(c-10,"px - 100%)"):"".concat(c+30,"px"),")"),backgroundColor:i,opacity:l?.85:0}},r.a.createElement("div",{className:"chart-tooltip"},t&&r.a.createElement(r.a.Fragment,null,r.a.createElement("b",null,l.country," - ",l.date),r.a.createElement("br",null),r.a.createElement("span",null,"Confirmed: ",l.confirmed),r.a.createElement("br",null),r.a.createElement("span",null,"Deaths: ",l.deaths),r.a.createElement("br",null),r.a.createElement("span",null,"Recovered: ",l.recovered))))},T=n(62),W=n(63);function H(){var e=Object(T.a)(["\n  position: absolute;\n  cursor: pointer;\n  border-radius: 1rem;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: ",";\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n\n  &:before {\n    position: absolute;\n    content: '';\n    border-radius: 50%;\n    height: ","rem;\n    width: ","rem;\n    left: ","rem;\n    bottom: ","rem;\n    background-color: white;\n    -webkit-transition: 0.2s;\n    transition: 0.2s;\n  }\n\n  input:checked + & {\n    background-color: ",";\n  }\n\n  input:focus + & {\n    box-shadow: 0 0 1px ",";\n  }\n\n  input:checked + &:before {\n    -webkit-transform: translateX(","rem);\n    -ms-transform: translateX(","rem);\n    transform: translateX(","rem);\n  }\n"]);return H=function(){return e},e}function z(){var e=Object(T.a)(["\n  position: relative;\n  display: inline-block;\n  width: ","rem;\n  height: ","rem;\n\n  input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n  }\n"]);return z=function(){return e},e}function V(){var e=Object(T.a)(["\n  color: black;\n  font-size: 0.9rem;\n  font-weight: ",";\n  // font-weight: ",";\n  opacity: ",";\n  margin-left: ","rem;\n  margin-right: ","rem;\n  transition: 0.2s;\n"]);return V=function(){return e},e}var B=W.a.label(V(),(function(e){return e.active?400:300}),(function(e){return e.active?500:400}),(function(e){return e.active?1:.5}),(function(e){return e.right?.25:0}),(function(e){return e.left?.25:0})),F=W.a.label(z(),(function(e){return e.width}),(function(e){return e.height})),G=W.a.span(H(),(function(e){return e.inactiveColor}),(function(e){return e.ballSize}),(function(e){return e.ballSize}),(function(e){return e.ballMargin}),(function(e){return e.ballMargin}),(function(e){return e.activeColor}),(function(e){return e.activeColor}),(function(e){return e.move}),(function(e){return e.move}),(function(e){return e.move})),X=function(e){var t=e.value,n=e.preLabel,a=e.label,c=e.width,i=void 0===c?3.5:c,o=e.height,l=void 0===o?1.5:o,u=e.ballMargin,s=void 0===u?.2:u,m=e.activeColor,f=void 0===m?"#007bff":m,d=e.inactiveColor,h=void 0===d?"#ccc":d,b=e.onChange,g=void 0===b?function(){}:b,v=l-2*s;return r.a.createElement("div",null,n&&r.a.createElement(B,{left:!0,active:!t},n),r.a.createElement(F,{width:i,height:l},r.a.createElement("input",{type:"checkbox",checked:t,onChange:g}),r.a.createElement(G,{ballSize:v,move:i-v-2*s,ballMargin:s,activeColor:f,inactiveColor:h})),a&&r.a.createElement(B,{right:!0,active:t},a))},$=(n(239),function(e){var t=e.title,n=e.data,c=e.dimensions,i=e.xAxis,l=e.yAxis,d=e.transitions,h=e.defaultLocations,b=e.onClose,g=function(e){var t=Object(a.useRef)(),n=D(e),r=Object(a.useState)(0),c=Object(o.a)(r,2),i=c[0],l=c[1],u=Object(a.useState)(0),s=Object(o.a)(u,2),m=s[0],f=s[1];Object(a.useEffect)((function(){if(n.width&&n.height)return[t,n];var e=t.current,a=new w.a((function(e){if(Array.isArray(e)&&e.length){var t=e[0];i!==t.contentRect.width&&l(t.contentRect.width),m!==t.contentRect.height&&f(t.contentRect.height)}}));return a.observe(e),function(){return a.unobserve(e)}}),[]);var d=D(Object(_.a)({},n,{width:n.width||i,height:n.height||m}));return[t,d]}(c),E=Object(o.a)(g,2),p=E[0],j=E[1],k=j.width,x=j.height,C=j.marginLeft,N=j.marginTop,M=(j.marginBottom,j.marginRight),R=j.boundedHeight,L=j.boundedWidth,P=Object(a.useState)(h),T=Object(o.a)(P,2),W=T[0],H=T[1],z=Object(a.useState)({}),V=Object(o.a)(z,2),B=V[0],F=V[1],G=Object(a.useState)(),$=Object(o.a)(G,2),J=$[0],Q=$[1],q=Object(a.useState)(!1),K=Object(o.a)(q,2),U=K[0],Y=K[1],Z=Object(a.useState)(!1),ee=Object(o.a)(Z,2),te=ee[0],ne=ee[1],ae=Object(a.useCallback)((function(e){return te?U?e.idxDeaths:e.idxConfirmed:e.date}),[te,U]),re=Object(a.useCallback)((function(e){return U?e.Deaths:e.Confirmed}),[U]),ce=Object(a.useMemo)((function(){if(n)return W.map((function(e){return n["$".concat(e)]})).map((function(e){return e.filter((function(e){return re(e)>=1}))}))}),[n,W,re]),ie=Object(a.useMemo)((function(){if(ce){var e=Object(f.d)(ce.map((function(e){return e.map(ae)})).flat());return(te?f.i:f.k)().domain(e).range([0,L])}}),[ce,ae,L,te]),oe=Object(a.useMemo)((function(){if(ce){var e=[.1,Object(f.g)(ce.map((function(e){return e.map(re)})).flat())];return Object(f.j)().domain(e).range([R,0]).nice()}}),[ce,re,R]);Object(a.useEffect)((function(){n&&F((function(e){var t=Object.keys(e);if(0===t.length){var n={};return W.forEach((function(e,t){return n[e]=t})),n}var a=Object.values(e),r=Object.assign({},e);return W.filter((function(e){return!t.includes(e)})).forEach((function(e){for(var t=0;a.includes(t);)t++;r[e]=t})),t.filter((function(e){return!W.includes(e)})).forEach((function(e){delete r[e]})),r}))}),[n,W]);var le=Object(a.useMemo)((function(){if(ce){var e=[];return ce.forEach((function(t){return t.filter((function(e){return e.annotation})).forEach((function(t){e.push({className:"custom-annotation",x:ie(ae(t)),y:oe(re(t)),dx:40,dy:20,note:{title:t["Country/Region"],label:t.annotation,lineType:null,align:"middle",wrap:120,orientation:"leftRight"},subject:{radius:10,radiusPadding:0}})}))})),e}}),[ce,ie,ae,oe,re]),ue=Object(a.useMemo)((function(){if(ce)return r.a.createElement(r.a.Fragment,null,ce.map((function(e,t){if(0!==e.length){var n=e[0]["Country/Region"],a=f.l[B[n]%f.l.length];return r.a.createElement(S,{key:n,data:e,xScale:ie,yScale:oe,xValue:ae,yValue:re,transition:d.lines,color:a,setToolTipData:Q,marginRight:M,marginLeft:C,boundedWidth:L,boundedHeight:R})}})))}),[L,R,B,C,M,ce,d.lines,ie,ae,oe,re]);return r.a.createElement("div",{className:"chart"},r.a.createElement(u.a,{className:"chart-selector justify-content-center"},r.a.createElement(s.a,{className:"select-location"},r.a.createElement(A,{locations:n?n.keys():h,values:W,colors:B,colorScheme:f.l,onChange:function(e,t){return H(t)},onDelete:function(e,t){return H((function(e){var n=e.indexOf(t),a=e.slice();return a.splice(n,1),a}))}})),r.a.createElement(s.a,{className:"close-wrapper"},r.a.createElement(m.a,{variant:"outline-danger close-button",size:"sm",onClick:b},r.a.createElement("span",null,"x")))),r.a.createElement(u.a,{className:"justify-content-between"},r.a.createElement(s.a,{className:"chart-options",sm:12,md:6},r.a.createElement("label",{className:"chart-option-label"},"Show value:"),r.a.createElement(X,{value:U,preLabel:"Confirmed",label:"Deaths",width:2.75,height:1.3,activeColor:"#7a9abe",inactiveColor:"#7a9abe",onChange:function(){return Y((function(e){return!e}))}})),r.a.createElement(s.a,{className:"chart-options",sm:12,md:6},r.a.createElement("label",{className:"chart-option-label"},"x Axis:"),r.a.createElement(X,{value:te,preLabel:"Date",label:"Days since",width:2.75,height:1.3,activeColor:"#7a9abe",inactiveColor:"#7a9abe",onChange:function(){return ne((function(e){return!e}))}}))),r.a.createElement(u.a,{className:"chart-container",ref:p},r.a.createElement(s.a,null,r.a.createElement(I,J),r.a.createElement("svg",{width:k,height:x},r.a.createElement("g",{transform:"translate(".concat(C,",").concat(N,")")},t&&r.a.createElement("text",{className:"title",x:L/2+t.dx,y:t.dy,textAnchor:"middle"},t.label),ce?r.a.createElement(r.a.Fragment,null,r.a.createElement(O,Object.assign({xScale:ie,boundedHeight:R,boundedWidth:L,date:!te},i)),r.a.createElement(y,Object.assign({yScale:oe,boundedHeight:R,boundedWidth:L},l)),le.map((function(e,t){return r.a.createElement(v.AnnotationCalloutCircle,Object.assign({key:t},e))})),ue):r.a.createElement("text",null,"Loading..."))))))}),J=(n(240),n(241),{dimensions:{marginTop:10,marginRight:35,marginBottom:30,marginLeft:75},xAxis:{tickSize:6,tickOffset:15,tickWidth:45,tickWidthDate:130},yAxis:{label:"Cases",labelOffset:50,tickSize:6,tickOffset:10,tickHeight:100},transitions:{lines:500},defaultLocations:["Peru","Australia","Iran","Italy"]});var Q=function(){var e=g(),t=Object(a.useState)([0]),n=Object(o.a)(t,2),c=n[0],i=n[1];return r.a.createElement(l.a,{className:"app-container"},r.a.createElement("header",null,r.a.createElement("h1",{className:"mt-4 mb-4"},"Covid 2019")),r.a.createElement("main",{className:"app-main"},r.a.createElement(u.a,null,r.a.createElement(s.a,null,r.a.createElement("p",null,"Plots of coronavirus data (",r.a.createElement("a",{href:"https://github.com/CSSEGISandData/COVID-19/tree/master/csse_covid_19_data",target:"_black"},"source"),")."))),r.a.createElement(u.a,null,c.map((function(t){return r.a.createElement(s.a,{key:t,md:12,xl:c.length>1?6:12},r.a.createElement($,Object.assign({data:e,onClose:function(){return i((function(e){var n=e.indexOf(t),a=e.slice();return a.splice(n,1),a}))}},J)))}))),r.a.createElement(u.a,{className:"mt-2"},r.a.createElement(s.a,{className:"text-right"},r.a.createElement(m.a,{onClick:function(){return i((function(e){var t=0===e.length?0:e[e.length-1]+1;return e.concat(t)}))}},"Add Chart")))),r.a.createElement("footer",null,r.a.createElement(u.a,null,r.a.createElement(s.a,{className:"mt-4 text-right"},r.a.createElement("a",{href:"https://github.com/renato145/covid2019",target:"_black"},"Source code")))))};i.a.render(r.a.createElement(Q,null),document.getElementById("root"))}},[[201,1,2]]]);
//# sourceMappingURL=main.21af6cce.chunk.js.map