/*! For license information please see 14.22f22012.chunk.js.LICENSE.txt */
(this["webpackJsonp2Clothy-Admin"]=this["webpackJsonp2Clothy-Admin"]||[]).push([[14],{1010:function(e,t,a){"use strict";a.r(t);var i=a(67),o=a.n(i),r=a(70),n=a(10),s=a(0),l=a.n(s),u=(a(63),a(2)),c=a(19),m=a(66),d=a(25),p=a(83),v=a(69),f=a(75),h=a(89),g=a(26),y=a(17),b=a(91),x=a(27),w=a(161),q=a(93),E=a(94),I=a(80),N=function(e){var t=e.children;return l.a.createElement("h2",{className:" text-3xl  font-semibold text-gray-600 dark:text-gray-300"},t)};t.default=function(){var e=Object(u.i)().id,t=Object(s.useState)("grid"),a=Object(n.a)(t,2),i=a[0],j=(a[1],Object(s.useState)(1)),S=Object(n.a)(j,2),D=S[0],C=S[1],O=Object(s.useState)([]),L=Object(n.a)(O,2),k=(L[0],L[1]),_=Object(s.useState)(10),T=Object(n.a)(_,2),H=T[0],P=T[1],A=p.a.length;Object(s.useEffect)((function(){k(p.a.slice((D-1)*H,D*H))}),[D,H]);var M=Object(s.useState)(!1),B=Object(n.a)(M,2),R=B[0],Q=B[1],U=Object(s.useState)(!1),$=Object(n.a)(U,2),F=$[0],X=$[1],z=Object(s.useState)(null),G=Object(n.a)(z,2),J=G[0],V=(G[1],Object(s.useState)(!1)),K=Object(n.a)(V,2),W=K[0],Y=K[1],Z=function(){var e=Object(r.a)(o.a.mark((function e(t,a){var i,r,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("del"!=a){e.next=9;break}return i=Object(b.a)(ye,be,x.a.actions.loginSuccess),e.next=4,I.c(t,ye.accessToken,i);case 4:r=e.sent,oe(r),Q(!1),e.next=10;break;case 9:"add"==a?X(!0):"update"==a&&(Y(!0),n=ie.find((function(e){return e.id==t})),we.values.NameUpdate=n.name,we.values.DescriptionUpdate=n.description,we.values.Id=n.id,ve(["",n.imagePath]),console.log(n));case 10:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),ee=function(e){"del"==e?Q(!1):"add"==e?X(!1):"update"==e&&Y(!1)},te=Object(s.useState)([]),ae=Object(n.a)(te,2),ie=ae[0],oe=ae[1];Object(s.useEffect)((function(){(function(){var t=Object(r.a)(o.a.mark((function t(){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.b(e);case 2:a=t.sent,oe(a.categories);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]);var re=Object(s.useState)(),ne=Object(n.a)(re,2),se=(ne[0],ne[1],Object(s.useRef)(null)),le=Object(s.useState)(""),ue=Object(n.a)(le,2),ce=(ue[0],ue[1]),me=Object(s.useState)(["https://cf.shopee.vn/file/72443418d390c42dd6342d7a010532d1"]),de=Object(n.a)(me,2),pe=de[0],ve=de[1],fe=function(){se.current.click()};function he(e){var t=e.target.files;Object(w.a)(t,ve);!function(e){var t=e.type.split("/")[1];return["png","jpeg","jpg"].includes(t)}(t[0])?alert("File invalid"):ce(t)}var ge=Object(y.c)(g.a),ye=null===ge||void 0===ge?void 0:ge.login.currentUser,be=Object(y.b)(),xe=Object(q.a)({initialValues:{},validationSchema:E.a({}),onSubmit:function(t){var a={ImagePath:pe[pe.length-1],ParentId:parseInt(e),Name:t.Name,Description:t.Description,Gender:!0},i=Object(b.a)(ye,be,x.a.actions.loginSuccess);(function(){var e=Object(r.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a),e.next=3,I.a(a,ye.accessToken,i);case 3:t=e.sent,oe(t),X(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}}),we=Object(q.a)({initialValues:{},validationSchema:E.a({}),onSubmit:function(t){var a={ImagePath:pe[pe.length-1],Id:t.Id,Name:t.NameUpdate,Description:t.DescriptionUpdate,Gender:!0,ParentId:parseInt(e)};(function(){var e=Object(r.a)(o.a.mark((function e(){var t,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(b.a)(ye,be,x.a.actions.loginSuccess),console.log(a),e.next=4,I.m(a,ye.accessToken,t);case 4:i=e.sent,oe(i),X(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}});return l.a.createElement("div",null,l.a.createElement("div",{className:"flex mt-8 text-gray-800 dark:text-gray-300"},l.a.createElement("div",{className:"flex items-center text-orange-600"},l.a.createElement(v.a,{className:"w-5 h-5","aria-hidden":"true",icon:m.HomeIcon}),l.a.createElement(c.c,{exact:!0,to:"/dashboard",className:"mx-2"},"K\xeanh ng\u01b0\u1eddi b\xe1n")),">",l.a.createElement("p",{className:"mx-2"},"Qu\u1ea3n l\xfd danh m\u1ee5c")),l.a.createElement(d.Card,{className:"px-8 shadow-md my-8"},l.a.createElement(d.CardBody,null,l.a.createElement("div",{className:"flex items-center justify-between py-4 mb-5"},l.a.createElement("div",{className:"flex items-center w-full justify-between"},l.a.createElement("div",{className:"flex items-center"},l.a.createElement(N,{className:" text-sm text-gray-600 dark:text-gray-400"},"T\u1ea5t c\u1ea3 danh m\u1ee5c")),l.a.createElement("div",{className:" flex justify-end"},l.a.createElement(d.Label,{className:"mr-8"},l.a.createElement("div",{className:"relative text-gray-500 focus-within:text-orange-600 dark:focus-within:text-orange-400"},l.a.createElement("input",{className:"py-3 pr-5 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-orange-400 focus:outline-none focus:shadow-outline-orange dark:focus:shadow-outline-gray form-input",placeholder:"Number of Results",value:H,onChange:function(e){return P(e.target.value)}}),l.a.createElement("div",{className:"absolute inset-y-0 right-0 flex items-center mr-3 pointer-events-none"},"Results on ","".concat(i)))),l.a.createElement(d.Button,{size:"large",iconLeft:m.AddIcon,onClick:function(){return Z(null,"add")}},"Th\xeam danh m\u1ee5c")))),l.a.createElement(d.TableContainer,{className:"mb-8"},l.a.createElement(d.Table,null,l.a.createElement(d.TableHeader,null,l.a.createElement("tr",null,l.a.createElement(d.TableCell,null,"T\xean danh m\u1ee5c"),l.a.createElement(d.TableCell,null,"T\u1ea1o b\u1edfi"),l.a.createElement(d.TableCell,null,"S\u1ea3n ph\u1ea9m"),l.a.createElement(d.TableCell,null,"Thao t\xe1c"))),l.a.createElement(d.TableBody,null,null===ie||void 0===ie?void 0:ie.map((function(e,t){return l.a.createElement(d.TableRow,{key:t},l.a.createElement(d.TableCell,null,l.a.createElement("div",{className:"flex items-center text-sm"},l.a.createElement(f.a,{className:"hidden mr-4 md:block",src:e.imagePath,alt:"Product image"}),l.a.createElement("div",null,l.a.createElement("p",{className:"font-semibold"},e.name)))),l.a.createElement(d.TableCell,{className:"text-sm"},"Qu\u1ea3n tr\u1ecb vi\xean"),l.a.createElement(d.TableCell,{className:"text-sm"},e.description),l.a.createElement(d.TableCell,null,l.a.createElement("div",{className:"flex"},l.a.createElement(d.Button,{icon:m.EditIcon,className:"mr-3",layout:"outline","aria-label":"Edit",onClick:function(){return Z(e.id,"update")}}),l.a.createElement(d.Button,{icon:m.TrashIcon,layout:"outline",onClick:function(){return Z(e.id,"del")},"aria-label":"Delete"}))))})))),l.a.createElement(d.TableFooter,null,l.a.createElement(d.Pagination,{totalResults:A,resultsPerPage:H,label:"Table navigation",onChange:function(e){C(e)}}))))),l.a.createElement(d.Modal,{isOpen:R,onClose:function(){return ee("del")},style:{width:"400px"}},l.a.createElement(d.ModalHeader,{className:"flex items-center"},l.a.createElement(v.a,{icon:m.TrashIcon,className:"w-6 h-6 mr-3"}),"Xo\xe1 danh m\u1ee5c"),l.a.createElement(d.ModalBody,null,"B\u1ea1n c\xf3 mu\u1ed1n xo\xe1 danh m\u1ee5c ",J&&'"'.concat(J.name,'"')," ?"),l.a.createElement(d.ModalFooter,null,l.a.createElement("div",{className:"hidden sm:block"},l.a.createElement(d.Button,{layout:"outline",onClick:function(){return ee("del")}},"Hu\u1ef7")),l.a.createElement("div",{className:"hidden sm:block"},l.a.createElement(d.Button,null,"Xo\xe1")))),l.a.createElement(d.Modal,{isOpen:F,onClose:function(){return ee("add")},style:{width:"1000px"}},l.a.createElement("form",{onSubmit:xe.handleSubmit},l.a.createElement(d.ModalHeader,{className:"flex items-center"}," ",l.a.createElement(N,null,"Th\xeam danh m\u1ee5c")),l.a.createElement(d.ModalBody,null,l.a.createElement("h3",{className:"text-xl  font-normal text-gray-600 my-4"},"\u0110\u1eb7t t\xean danh m\u1ee5c:"),l.a.createElement(d.Label,{className:"mb-4 mx-6 w-1/2"},l.a.createElement(d.Input,{placeholder:"Nh\u1eadp v\xe0o t\xean danh m\u1ee5c hi\u1ec3n th\u1ecb",id:"Name",name:"Name",value:xe.values.Name,onChange:xe.handleChange})),l.a.createElement("h3",{className:"text-xl  font-normal text-gray-600 mb-4"},"M\xf4 t\u1ea3:"),l.a.createElement("div",{className:"flex-grow min-h-8 overflow-auto text-sm px-6"},l.a.createElement(d.Textarea,{id:"Description",name:"Description",value:xe.values.Description,onChange:xe.handleChange,className:"mt-1",rows:"3",placeholder:"Enter some long form content."})),l.a.createElement("h3",{className:"text-xl  font-normal text-gray-600 mb-4"},"\u1ea2nh m\xf4 t\u1ea3:"),l.a.createElement("div",{className:"flex-grow min-h-8 overflow-auto text-sm px-6"},l.a.createElement("div",{className:"w-32 h-32 relative  rounded mr-4 mb-4  text-center  flex",onClick:fe},l.a.createElement("div",{className:"w-full h-full   flex items-center"},l.a.createElement("input",{id:"Paths",name:"Paths",type:"file",className:"hidden",onChange:he,ref:se}),l.a.createElement("img",{src:pe[pe.length-1],alt:"",className:"rounded"})),l.a.createElement("div",{className:" rounded-b absolute bottom-0 w-full h-6 text-medium leading-6 bg-gray-700 opacity-75 hover:bg-gray-500 text-white text-center cursor-pointer"},"S\u1eeda")))),l.a.createElement(d.ModalFooter,null,l.a.createElement("div",{className:"w-full flex justify-between flex-row-reverse"},l.a.createElement("div",{className:"flex "},l.a.createElement("div",{className:"ml-4  "},l.a.createElement(d.Button,{layout:"outline",onClick:function(){return ee("add")}},"Hu\u1ef7")),l.a.createElement("div",{className:"ml-4 hidden sm:block"},l.a.createElement(d.Button,{type:"submit"},"X\xe1c nh\u1eadn"))))))),l.a.createElement(d.Modal,{isOpen:W,onClose:function(){return ee("update")},style:{width:"1000px"}},l.a.createElement("form",{onSubmit:we.handleSubmit},l.a.createElement(d.ModalHeader,{className:"flex items-center"}," ",l.a.createElement(N,null,"Th\xeam danh m\u1ee5c")),l.a.createElement(d.ModalBody,null,l.a.createElement("h3",{className:"text-xl  font-normal text-gray-600 my-4"},"\u0110\u1eb7t t\xean danh m\u1ee5c:"),l.a.createElement(d.Label,{className:"mb-4 mx-6 w-1/2"},l.a.createElement(d.Input,{placeholder:"Nh\u1eadp v\xe0o t\xean danh m\u1ee5c hi\u1ec3n th\u1ecb",id:"Id",name:"Id",value:we.values.Id,onChange:we.handleChange,className:"hidden"}),l.a.createElement(d.Input,{placeholder:"Nh\u1eadp v\xe0o t\xean danh m\u1ee5c hi\u1ec3n th\u1ecb",id:"NameUpdate",name:"NameUpdate",value:we.values.NameUpdate,onChange:we.handleChange})),l.a.createElement("h3",{className:"text-xl  font-normal text-gray-600 mb-4"},"M\xf4 t\u1ea3:"),l.a.createElement("div",{className:"flex-grow min-h-8 overflow-auto text-sm px-6"},l.a.createElement(d.Textarea,{id:"DescriptionUpdate",name:"DescriptionUpdate",value:we.values.DescriptionUpdate,onChange:we.handleChange,className:"mt-1",rows:"3",placeholder:"Enter some long form content."})),l.a.createElement("h3",{className:"text-xl  font-normal text-gray-600 mb-4"},"\u1ea2nh m\xf4 t\u1ea3:"),l.a.createElement("div",{className:"flex-grow min-h-8 overflow-auto text-sm px-6"},l.a.createElement("div",{className:"w-32 h-32 relative  rounded mr-4 mb-4  text-center  flex",onClick:fe},l.a.createElement("div",{className:"w-full h-full   flex items-center"},l.a.createElement("input",{id:"Paths",name:"Paths",type:"file",className:"hidden",onChange:he,ref:se}),l.a.createElement("img",{src:pe[pe.length-1],alt:"",className:"rounded"})),l.a.createElement("div",{className:" rounded-b absolute bottom-0 w-full h-6 text-medium leading-6 bg-gray-700 opacity-75 hover:bg-gray-500 text-white text-center cursor-pointer"},"S\u1eeda")))),l.a.createElement(d.ModalFooter,null,l.a.createElement("div",{className:"w-full flex justify-between flex-row-reverse"},l.a.createElement("div",{className:"flex "},l.a.createElement("div",{className:"ml-4  "},l.a.createElement(d.Button,{layout:"outline",onClick:function(){return ee("add")}},"Hu\u1ef7")),l.a.createElement("div",{className:"ml-4 hidden sm:block"},l.a.createElement(d.Button,{type:"submit"},"X\xe1c nh\u1eadn"))))))))}},161:function(e,t,a){"use strict";var i=a(67),o=a.n(i),r=a(28),n=a(70);t.a=function(e,t){for(var a=function(){var e=Object(n.a)(o.a.mark((function e(a){var i,n,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(i=new FormData).append("file",a),i.append("upload_preset","2clothy"),e.next=5,fetch("https://api.cloudinary.com/v1_1/sacchidananad-utech/image/upload",{method:"POST",body:i});case 5:return n=e.sent,e.next=8,n.json();case 8:s=e.sent,t((function(e){return[].concat(Object(r.a)(e),[s.secure_url])}));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=0;i<e.length;i++)a(e[i])}},63:function(e,t,a){"use strict";var i=a(0),o=a.n(i);t.a=function(e){var t=e.children;return o.a.createElement("h1",{className:"my-4 text-2xl font-semibold text-gray-700 dark:text-gray-200"},t)}},69:function(e,t,a){"use strict";var i=a(77),o=a(0),r=a.n(o),n=["icon"];t.a=function(e){var t=e.icon,a=Object(i.a)(e,n),o=t;return r.a.createElement(o,a)}},72:function(e,t,a){var i;!function(){"use strict";var a={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var i=arguments[t];if(i){var r=typeof i;if("string"===r||"number"===r)e.push(i);else if(Array.isArray(i)&&i.length){var n=o.apply(null,i);n&&e.push(n)}else if("object"===r)for(var s in i)a.call(i,s)&&i[s]&&e.push(s)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(i=function(){return o}.apply(t,[]))||(e.exports=i)}()},75:function(e,t,a){"use strict";var i=a(0),o=a.n(i);a(72);t.a=function(e){var t=e.src,a=e.alt,i=e.size,r=void 0===i?"w-20 h-20":i;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"relative rounded-md inline-block ".concat(r," hidden mr-4 md:block")},o.a.createElement("img",{className:"object-cover w-full h-full rounded-md",src:t,alt:a,loading:"lazy"})))}},83:function(e,t,a){"use strict";t.a=[{id:1,photo:"https://vetra.laborasyon.com/assets/images/products/1.jpg",name:"Headphone",shortDescription:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",featureDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam dolor sit amet consectetur adipisicing elit., eaque. Porro dolorem asperiores eos nostrum corrupti! Sit officia distinctio quidem amet nulla",londDescription:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores ad saepe porro laudantium, assumenda eos perspiciatis. Quia repellendus\n\n eligendi exercitationem explicabo consectetur facilis vitae nemo dignissimos, totam quas in nostrum optio blanditiis amet quam consequatur illum eos minus voluptates possimus aperiam non modi voluptatem velit!\n Doloremque distinctio commodi corporis adipisci voluptatem fugit maxime error officiis dicta deleniti exercitationem provident a obcaecati, quaerat dolores dolor harum non perferendis blanditiis ipsum aliquam\n\n ducimus sapiente molestias. Atque odio inventore consequuntur delectus beatae fugit. Accusamus, aut tempora cupiditate temporibus consequuntur dolorem iusto laborum nihil!",price:"$120.00",qty:120,rating:5,reviews:[{username:"Rodger Stutely",avatar_url:"https://i.pravatar.cc/150?img=69",review:"I love your products. It is very easy and fun to use this panel. I would recommend it to everyone.",rate:5},{username:"Corly Hailston",avatar_url:"https://i.pravatar.cc/150?img=25",review:"I love your products. It is very easy and fun to use this panel. I would recommend it to everyone.",rate:5},{username:"Hurleigh Smallcomb",avatar_url:"https://i.pravatar.cc/150?img=41",review:"I love your products. It is very easy and fun to use this panel. I would recommend it to everyone.",rate:5}]},{id:2,photo:"https://vetra.laborasyon.com/assets/images/products/2.jpg",name:"Shoe",shortDescription:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",featureDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam dolor sit amet consectetur adipisicing elit., eaque. Porro dolorem asperiores eos nostrum corrupti! Sit officia distinctio quidem amet nulla",londDescription:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores ad saepe porro laudantium, assumenda eos perspiciatis. Quia repellendus\n\n eligendi exercitationem explicabo consectetur facilis vitae nemo dignissimos, totam quas in nostrum optio blanditiis amet quam consequatur illum eos minus voluptates possimus aperiam non modi voluptatem velit!\n Doloremque distinctio commodi corporis adipisci voluptatem fugit maxime error officiis dicta deleniti exercitationem provident a obcaecati, quaerat dolores dolor harum non perferendis blanditiis ipsum aliquam\n\n ducimus sapiente molestias. Atque odio inventore consequuntur delectus beatae fugit. Accusamus, aut tempora cupiditate temporibus consequuntur dolorem iusto laborum nihil!",price:"$320.00",qty:54,rating:5,reviews:[{username:"Rodger Stutely",avatar_url:"https://i.pravatar.cc/150?img=69",review:"I love your products. It is very easy and fun to use this panel. I would recommend it to everyone.",rate:5},{username:"Corly Hailston",avatar_url:"https://i.pravatar.cc/150?img=25",review:"I love your products. It is very easy and fun to use this panel. I would recommend it to everyone.",rate:5},{username:"Hurleigh Smallcomb",avatar_url:"https://i.pravatar.cc/150?img=41",review:"I love your products. It is very easy and fun to use this panel. I would recommend it to everyone.",rate:5}]},{id:3,photo:"https://vetra.laborasyon.com/assets/images/products/3.jpg",name:"Digital Clock",shortDescription:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",featureDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam dolor sit amet consectetur adipisicing elit., eaque. Porro dolorem asperiores eos nostrum corrupti! Sit officia distinctio quidem amet nulla",londDescription:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores ad saepe porro laudantium, assumenda eos perspiciatis. Quia repellendus\n\n eligendi exercitationem explicabo consectetur facilis vitae nemo dignissimos, totam quas in nostrum optio blanditiis amet quam consequatur illum eos minus voluptates possimus aperiam non modi voluptatem velit!\n Doloremque distinctio commodi corporis adipisci voluptatem fugit maxime error officiis dicta deleniti exercitationem provident a obcaecati, quaerat dolores dolor harum non perferendis blanditiis ipsum aliquam\n\n ducimus sapiente molestias. Atque odio inventore consequuntur delectus beatae fugit. Accusamus, aut tempora cupiditate temporibus consequuntur dolorem iusto laborum nihil!",price:"$230.00",qty:0,rating:3,reviews:[{username:"Rodger Stutely",avatar_url:"https://i.pravatar.cc/150?img=69",review:"I love your products. It is very easy and fun to use this panel. I would recommend it to everyone.",rate:5},{username:"Corly Hailston",avatar_url:"https://i.pravatar.cc/150?img=25",review:"I love your products. It is very easy and fun to use this panel. I would recommend it to everyone.",rate:5},{username:"Hurleigh Smallcomb",avatar_url:"https://i.pravatar.cc/150?img=41",review:"I love your products. It is very easy and fun to use this panel. I would recommend it to everyone.",rate:5}]},{id:4,photo:"https://vetra.laborasyon.com/assets/images/products/4.jpg",name:"Toy Car",shortDescription:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",featureDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam dolor sit amet consectetur adipisicing elit., eaque. Porro dolorem asperiores eos nostrum corrupti! Sit officia distinctio quidem amet nulla",londDescription:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores ad saepe porro laudantium, assumenda eos perspiciatis. Quia repellendus\n\n eligendi exercitationem explicabo consectetur facilis vitae nemo dignissimos, totam quas in nostrum optio blanditiis amet quam consequatur illum eos minus voluptates possimus aperiam non modi voluptatem velit!\n Doloremque distinctio commodi corporis adipisci voluptatem fugit maxime error officiis dicta deleniti exercitationem provident a obcaecati, quaerat dolores dolor harum non perferendis blanditiis ipsum aliquam\n\n ducimus sapiente molestias. Atque odio inventore consequuntur delectus beatae fugit. Accusamus, aut tempora cupiditate temporibus consequuntur dolorem iusto laborum nihil!",price:"$54.00",qty:12,rating:4,reviews:[{username:"Rodger Stutely",avatar_url:"https://i.pravatar.cc/150?img=69",review:"I love your products. It is very easy and fun to use this panel. I would recommend it to everyone.",rate:5},{username:"Corly Hailston",avatar_url:"https://i.pravatar.cc/150?img=25",review:"I love your products. It is very easy and fun to use this panel. I would recommend it to everyone.",rate:5},{username:"Hurleigh Smallcomb",avatar_url:"https://i.pravatar.cc/150?img=41",review:"I love your products. It is very easy and fun to use this panel. I would recommend it to everyone.",rate:5}]},{id:5,photo:"https://vetra.laborasyon.com/assets/images/products/5.jpg",name:"Sunglasses",shortDescription:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",featureDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam dolor sit amet consectetur adipisicing elit., eaque. Porro dolorem asperiores eos nostrum corrupti! Sit officia distinctio quidem amet nulla",londDescription:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores ad saepe porro laudantium, assumenda eos perspiciatis. Quia repellendus\n\n eligendi exercitationem explicabo consectetur facilis vitae nemo dignissimos, totam quas in nostrum optio blanditiis amet quam consequatur illum eos minus voluptates possimus aperiam non modi voluptatem velit!\n Doloremque distinctio commodi corporis adipisci voluptatem fugit maxime error officiis dicta deleniti exercitationem provident a obcaecati, quaerat dolores dolor harum non perferendis blanditiis ipsum aliquam\n\n ducimus sapiente molestias. Atque odio inventore consequuntur delectus beatae fugit. Accusamus, aut tempora cupiditate temporibus consequuntur dolorem iusto laborum nihil!",price:"$20.00",qty:340,rating:4,reviews:[{username:"Rodger Stutely",avatar_url:"https://i.pravatar.cc/150?img=69",review:"I love your products. It is very easy and fun to use this panel. I would recommend it to everyone.",rate:5},{username:"Corly Hailston",avatar_url:"https://i.pravatar.cc/150?img=25",review:"I love your products. It is very easy and fun to use this panel. I would recommend it to everyone.",rate:5},{username:"Hurleigh Smallcomb",avatar_url:"https://i.pravatar.cc/150?img=41",review:"I love your products. It is very easy and fun to use this panel. I would recommend it to everyone.",rate:5}]},{id:6,photo:"https://vetra.laborasyon.com/assets/images/products/6.jpg",name:"Cake",shortDescription:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",featureDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam dolor sit amet consectetur adipisicing elit., eaque. Porro dolorem asperiores eos nostrum corrupti! Sit officia distinctio quidem amet nulla",londDescription:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores ad saepe porro laudantium, assumenda eos perspiciatis. Quia repellendus \n\neligendi exercitationem explicabo consectetur facilis vitae nemo dignissimos, totam quas in nostrum optio blanditiis amet quam consequatur illum eos minus voluptates possimus aperiam non modi voluptatem velit! \nDoloremque distinctio commodi corporis adipisci voluptatem fugit maxime error officiis dicta deleniti exercitationem provident a obcaecati, quaerat dolores dolor harum non perferendis blanditiis ipsum aliquam \n\nducimus sapiente molestias. Atque odio inventore consequuntur delectus beatae fugit. Accusamus, aut tempora cupiditate temporibus consequuntur dolorem iusto laborum nihil!",price:"$69.00",qty:0,rating:4,reviews:[{username:"Rodger Stutely",avatar_url:"https://i.pravatar.cc/150?img=69",review:"I love your products. It is very easy and fun to use this panel. I would recommend it to everyone.",rate:5},{username:"Corly Hailston",avatar_url:"https://i.pravatar.cc/150?img=25",review:"I love your products. It is very easy and fun to use this panel. I would recommend it to everyone.",rate:5},{username:"Hurleigh Smallcomb",avatar_url:"https://i.pravatar.cc/150?img=41",review:"I love your products. It is very easy and fun to use this panel. I would recommend it to everyone.",rate:5}]},{id:7,photo:"https://vetra.laborasyon.com/assets/images/products/7.jpg",name:"Glass",shortDescription:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",featureDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam dolor sit amet consectetur adipisicing elit., eaque. Porro dolorem asperiores eos nostrum corrupti! Sit officia distinctio quidem amet nulla",londDescription:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores ad saepe porro laudantium, assumenda eos perspiciatis. Quia repellendus\n\n eligendi exercitationem explicabo consectetur facilis vitae nemo dignissimos, totam quas in nostrum optio blanditiis amet quam consequatur illum eos minus voluptates possimus aperiam non modi voluptatem velit!\n Doloremque distinctio commodi corporis adipisci voluptatem fugit maxime error officiis dicta deleniti exercitationem provident a obcaecati, quaerat dolores dolor harum non perferendis blanditiis ipsum aliquam\n\n ducimus sapiente molestias. Atque odio inventore consequuntur delectus beatae fugit. Accusamus, aut tempora cupiditate temporibus consequuntur dolorem iusto laborum nihil!",price:"$34.00",qty:12,rating:5,reviews:[{username:"Rodger Stutely",avatar_url:"https://i.pravatar.cc/150?img=69",review:"I love your products. It is very easy and fun to use this panel. I would recommend it to everyone.",rate:5},{username:"Corly Hailston",avatar_url:"https://i.pravatar.cc/150?img=25",review:"I love your products. It is very easy and fun to use this panel. I would recommend it to everyone.",rate:5},{username:"Hurleigh Smallcomb",avatar_url:"https://i.pravatar.cc/150?img=41",review:"I love your products. It is very easy and fun to use this panel. I would recommend it to everyone.",rate:5}]},{id:8,photo:"https://vetra.laborasyon.com/assets/images/products/8.jpg",name:"Ear Buds",shortDescription:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",featureDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam dolor sit amet consectetur adipisicing elit., eaque. Porro dolorem asperiores eos nostrum corrupti! Sit officia distinctio quidem amet nulla",londDescription:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores ad saepe porro laudantium, assumenda eos perspiciatis. Quia repellendus\n\n eligendi exercitationem explicabo consectetur facilis vitae nemo dignissimos, totam quas in nostrum optio blanditiis amet quam consequatur illum eos minus voluptates possimus aperiam non modi voluptatem velit!\n Doloremque distinctio commodi corporis adipisci voluptatem fugit maxime error officiis dicta deleniti exercitationem provident a obcaecati, quaerat dolores dolor harum non perferendis blanditiis ipsum aliquam\n\n ducimus sapiente molestias. Atque odio inventore consequuntur delectus beatae fugit. Accusamus, aut tempora cupiditate temporibus consequuntur dolorem iusto laborum nihil!",price:"$100.00",qty:0,rating:5,reviews:[{username:"Rodger Stutely",avatar_url:"https://i.pravatar.cc/150?img=69",review:"I love your products. It is very easy and fun to use this panel. I would recommend it to everyone.",rate:5},{username:"Corly Hailston",avatar_url:"https://i.pravatar.cc/150?img=25",review:"I love your products. It is very easy and fun to use this panel. I would recommend it to everyone.",rate:5},{username:"Hurleigh Smallcomb",avatar_url:"https://i.pravatar.cc/150?img=41",review:"I love your products. It is very easy and fun to use this panel. I would recommend it to everyone.",rate:5}]},{id:9,photo:"https://vetra.laborasyon.com/assets/images/products/9.jpg",name:"Perfume",shortDescription:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",featureDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam dolor sit amet consectetur adipisicing elit., eaque. Porro dolorem asperiores eos nostrum corrupti! Sit officia distinctio quidem amet nulla",londDescription:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores ad saepe porro laudantium, assumenda eos perspiciatis. Quia repellendus\n\n eligendi exercitationem explicabo consectetur facilis vitae nemo dignissimos, totam quas in nostrum optio blanditiis amet quam consequatur illum eos minus voluptates possimus aperiam non modi voluptatem velit!\n Doloremque distinctio commodi corporis adipisci voluptatem fugit maxime error officiis dicta deleniti exercitationem provident a obcaecati, quaerat dolores dolor harum non perferendis blanditiis ipsum aliquam\n\n ducimus sapiente molestias. Atque odio inventore consequuntur delectus beatae fugit. Accusamus, aut tempora cupiditate temporibus consequuntur dolorem iusto laborum nihil!",price:"$90.00",qty:34,rating:5,reviews:[{username:"Rodger Stutely",avatar_url:"https://i.pravatar.cc/150?img=69",review:"I love your products. It is very easy and fun to use this panel. I would recommend it to everyone.",rate:5},{username:"Corly Hailston",avatar_url:"https://i.pravatar.cc/150?img=25",review:"I love your products. It is very easy and fun to use this panel. I would recommend it to everyone.",rate:5},{username:"Hurleigh Smallcomb",avatar_url:"https://i.pravatar.cc/150?img=41",review:"I love your products. It is very easy and fun to use this panel. I would recommend it to everyone.",rate:5}]},{id:10,photo:"https://vetra.laborasyon.com/assets/images/products/10.jpg",name:"Cookie",shortDescription:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",featureDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam dolor sit amet consectetur adipisicing elit., eaque. Porro dolorem asperiores eos nostrum corrupti! Sit officia distinctio quidem amet nulla",londDescription:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores ad saepe porro laudantium, assumenda eos perspiciatis. Quia repellendus\n\n eligendi exercitationem explicabo consectetur facilis vitae nemo dignissimos, totam quas in nostrum optio blanditiis amet quam consequatur illum eos minus voluptates possimus aperiam non modi voluptatem velit!\n Doloremque distinctio commodi corporis adipisci voluptatem fugit maxime error officiis dicta deleniti exercitationem provident a obcaecati, quaerat dolores dolor harum non perferendis blanditiis ipsum aliquam\n\n ducimus sapiente molestias. Atque odio inventore consequuntur delectus beatae fugit. Accusamus, aut tempora cupiditate temporibus consequuntur dolorem iusto laborum nihil!",price:"$10.00",qty:0,rating:3,reviews:[{username:"Rodger Stutely",avatar_url:"https://i.pravatar.cc/150?img=69",review:"I love your products. It is very easy and fun to use this panel. I would recommend it to everyone.",rate:5},{username:"Corly Hailston",avatar_url:"https://i.pravatar.cc/150?img=25",review:"I love your products. It is very easy and fun to use this panel. I would recommend it to everyone.",rate:5},{username:"Hurleigh Smallcomb",avatar_url:"https://i.pravatar.cc/150?img=41",review:"I love your products. It is very easy and fun to use this panel. I would recommend it to everyone.",rate:5}]}]}}]);
//# sourceMappingURL=14.22f22012.chunk.js.map