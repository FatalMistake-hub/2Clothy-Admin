(this["webpackJsonp2Clothy-SellCenter"]=this["webpackJsonp2Clothy-SellCenter"]||[]).push([[15],{1015:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(63),c=(a(102),a(159),a(103),a(104),a(163));t.default=function(){return n.a.createElement("div",null,n.a.createElement(r.a,null,"Manage Profile"),n.a.createElement(c.a,{resultsPerPage:10}))}},102:function(e,t,a){"use strict";var l=a(0),n=a.n(l);t.a=function(e){var t=e.children,a=e.title;return n.a.createElement("div",{className:"w-min h-full flex items-center flex-col p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800"},n.a.createElement("p",{className:"mb-4 font-semibold text-gray-800 dark:text-gray-300"},a),t)}},103:function(e,t,a){"use strict";var l=a(0),n=a.n(l);t.a=function(e){var t=e.legends;return n.a.createElement("div",{className:"flex justify-center mt-4 space-x-3 text-sm text-gray-600 dark:text-gray-400"},t.map((function(e){return n.a.createElement("div",{className:"flex items-center",key:e.title},n.a.createElement("span",{className:"inline-block w-3 h-3 mr-1 ".concat(e.color," rounded-full")}),n.a.createElement("span",null,e.title))})))}},104:function(e,t,a){"use strict";a.d(t,"c",(function(){return l})),a.d(t,"d",(function(){return n})),a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return c}));var l=[{title:"Organic",color:"bg-teal-600"},{title:"Paid",color:"bg-orange-600"}],n={data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"Organic",backgroundColor:"#0694a2",borderColor:"#0694a2",data:[43,48,40,54,67,73,70],fill:!1},{label:"Paid",fill:!1,backgroundColor:"#7e3af2",borderColor:"#7e3af2",data:[24,50,64,74,52,51,65]}]},options:{responsive:!0,tooltips:{mode:"index",intersect:!1},hover:{mode:"nearest",intersect:!0},scales:{x:{display:!0,scaleLabel:{display:!0,labelString:"Month"}},y:{display:!0,scaleLabel:{display:!0,labelString:"Value"}}}},legend:{display:!0,position:"bottom"}},r=[{title:"Shirts",color:"bg-blue-500"},{title:"Shoes",color:"bg-teal-600"},{title:"Bags",color:"bg-orange-600"}],c={data:{datasets:[{data:[33,33,33],backgroundColor:["#0694a2","#1c64f2","#7e3af2"],label:"Dataset 1"}],labels:["Shoes","Shirts","Bags"]},options:{responsive:!0,cutoutPercentage:80},legend:{display:!1}}},163:function(e,t,a){"use strict";var l=a(69),n=a.n(l),r=a(71),c=a(10),s=a(0),o=a.n(s),i=a(25),u=a(26),m=a(17),d=a(91),b=a(27),f=a(80),p=a(126),g=a.n(p);t.a=function(e){var t=e.resultsPerPage,a=e.filter,l=Object(s.useState)(1),p=Object(c.a)(l,2),E=p[0],v=p[1],y=Object(s.useState)([]),x=Object(c.a)(y,2),h=x[0],C=x[1],T=Object(s.useState)([]),k=Object(c.a)(T,2),O=k[0],j=k[1],N=Object(s.useState)([]),S=Object(c.a)(N,2),w=S[0],P=S[1],J=O.length;var L=Object(m.c)(u.a),I=null===L||void 0===L?void 0:L.login.currentUser,M=Object(m.b)(),U=Object(d.a)(I,M,b.a.actions.loginSuccess);Object(s.useEffect)((function(){(function(){var e=Object(r.a)(n.a.mark((function e(){var t,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.d(I.accessToken,U);case 2:return t=e.sent,e.next=5,f.f(I.accessToken,U);case 5:a=e.sent,j(t),P(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(s.useLayoutEffect)((function(){C(null===O||void 0===O?void 0:O.slice((E-1)*t,E*t))}),[E,t,a,O]);var B=function(){var e=Object(r.a)(n.a.mark((function e(t,a){var l,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(parseInt(t),a),l=Object(d.a)(I,M,b.a.actions.loginSuccess),e.next=4,f.l({UserId:parseInt(t),UserGroupId:a},I.accessToken,l);case 4:r=e.sent,j(r);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();return o.a.createElement("div",null,o.a.createElement(i.TableContainer,{className:"mb-8"},o.a.createElement(i.Table,null,o.a.createElement(i.TableHeader,null,o.a.createElement("tr",null,o.a.createElement(i.TableCell,null,"First Name"),o.a.createElement(i.TableCell,null,"Last Name"),o.a.createElement(i.TableCell,null,"Email"),o.a.createElement(i.TableCell,null,"Joined on"),o.a.createElement(i.TableCell,null,"Role"))),o.a.createElement(i.TableBody,null,h.map((function(e,t){return o.a.createElement(i.TableRow,{key:t},o.a.createElement(i.TableCell,null,o.a.createElement("div",{className:"flex items-center text-sm"},o.a.createElement("div",null,o.a.createElement("p",{className:"font-semibold"},"#UID",e.id)))),o.a.createElement(i.TableCell,null,o.a.createElement("span",{className:"text-sm"},e.name)),o.a.createElement(i.TableCell,null,o.a.createElement("span",{className:"text-sm"},e.email)),o.a.createElement(i.TableCell,null,o.a.createElement("span",{className:"text-sm"},g()(e.dateCreated).format("L"))),o.a.createElement(i.TableCell,null,o.a.createElement("div",{className:"relative"},o.a.createElement(i.Label,null,o.a.createElement("span",null),o.a.createElement(i.Select,{className:"mt-1",onChange:function(t){return B(t.target.value,e.id)}},w.map((function(t,a){return o.a.createElement("option",{key:a,value:t.id,selected:t.description===e.userGroupName},t.description)})))))))})))),o.a.createElement(i.TableFooter,null,o.a.createElement(i.Pagination,{totalResults:J,resultsPerPage:t,label:"Table navigation",onChange:function(e){v(e)}}))))}},63:function(e,t,a){"use strict";var l=a(0),n=a.n(l);t.a=function(e){var t=e.children;return n.a.createElement("h1",{className:"my-4 text-2xl font-semibold text-gray-700 dark:text-gray-200"},t)}}}]);
//# sourceMappingURL=15.5409470e.chunk.js.map