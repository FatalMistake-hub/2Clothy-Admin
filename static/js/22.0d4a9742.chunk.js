(this["webpackJsonp2Clothy-Admin"]=this["webpackJsonp2Clothy-Admin"]||[]).push([[22],{1e3:function(e,t,a){},1022:function(e,t,a){"use strict";a.r(t);var l=a(10),n=a(0),r=a.n(n),s=a(25),i=function(e){var t=e.avatar,a=e.first_name,l=e.last_name,n=e.state,i=e.handleClick;return r.a.createElement("div",{onClick:i,className:"flex items-center my-4 transition duration-100 hover:ease-in dark:hover:bg-gray-600 hover:bg-gray-300 rounded-lg cursor-pointer"},r.a.createElement("div",{className:"mr-5 m-1 relative"},n&&r.a.createElement("div",{className:"absolute z-10 drop-shadow-lg bottom-4 left-0 ml-6 w-2 h-2 bg-green-500 rounded-full "}),r.a.createElement(s.Avatar,{className:"hidden md:inline-block",src:t,alt:"user icon"})),r.a.createElement("div",null,r.a.createElement("p",{className:"text-gray-800 dark:text-gray-300 text-sm"},a," ",l)))},c=(a(1e3),function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"lds-grid"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))}),m=a(63);var o=function(e){var t=e.children;return r.a.createElement("h2",{className:"mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300"},t)},d=[{avatar:"https://i.pravatar.cc/300",first_name:"Chandler",last_name:"Jacobi",email:"chandlerjacobi@test.net",joined_on:"Mon Feb 03 2020 04:13:15 GMT-0300 (Brasilia Standard Time)",state:!0,messages:[{flag:"from_client",text:"Hello there..,"},{flag:"to_client",text:"Hello sir, How can I help you"},{flag:"from_client",text:"I need to know the price of New Nike Shoues"},{flag:"to_client",text:"Newset Nike one will be $199.00 sir"},{flag:"from_client",text:"Okay, Do you deliver it my home after purchase..?"},{flag:"to_client",text:"Yes sir, But it may take at least 1 Day... Are you okay with that time..?"}]},{avatar:"https://i.pravatar.cc/300",first_name:"Harry",last_name:"Peter",email:"harrypeter@test.net",joined_on:"Mon Feb 03 2020 04:13:15 GMT-0300 (Brasilia Standard Time)",state:!1,messages:[{flag:"from_client",text:"Hello there..,"},{flag:"to_client",text:"Hello sir, How can I help you"},{flag:"from_client",text:"I need to buy latest revealed Apple Watch"}]},{avatar:"https://i.pravatar.cc/300",first_name:"Judith",last_name:"Espanaso",email:"judith.es@test.net",joined_on:"Mon Feb 03 2020 04:13:15 GMT-0300 (Brasilia Standard Time)",state:!0,messages:[{flag:"from_client",text:"Hello..,"}]},{avatar:"https://i.pravatar.cc/300",first_name:"Jason",last_name:"Mike",email:"jjmike@test.net",joined_on:"Mon Feb 03 2020 04:13:15 GMT-0300 (Brasilia Standard Time)",state:!1,messages:[{flag:"from_client",text:"Hello there..,"},{flag:"to_client",text:"Hello sir, How can I help you"},{flag:"from_client",text:"I need to know the price of New Addidas Shoues"}]},{avatar:"https://i.pravatar.cc/300",first_name:"Smith",last_name:"Shane",email:"shane_smith@test.net",joined_on:"Mon Feb 03 2020 04:13:15 GMT-0300 (Brasilia Standard Time)",state:!1,messages:null},{avatar:"https://i.pravatar.cc/300",first_name:"Adam",last_name:"Joe",email:"adam.jj@test.net",joined_on:"Mon Feb 03 2020 04:13:15 GMT-0300 (Brasilia Standard Time)",state:!0,messages:[{flag:"from_client",text:"Hello there..,"},{flag:"to_client",text:"Hello sir, How can I help you"},{flag:"from_client",text:"I need to know the price of New Addidas Shoues"}]},{avatar:"https://i.pravatar.cc/300",first_name:"Josheph ",last_name:"churchille",email:"joe.churchile@test.net",joined_on:"Mon Feb 03 2020 04:13:15 GMT-0300 (Brasilia Standard Time)",state:!1,messages:null}],u=function(e){var t=e.messages;return r.a.createElement("div",{className:"mt-3 mb-8 mr-4"},r.a.createElement(s.Card,{className:"shadow-md relative h-screen"},r.a.createElement(s.CardBody,null,t.map((function(e,t){return r.a.createElement("div",null,r.a.createElement("div",{key:t,className:"absolute block\n                ".concat("from_client"===e.flag?"left-0 ml-8":"to_client"===e.flag?"right-0 mr-8":"")},r.a.createElement(s.Badge,{type:"from_client"===e.flag?"neutral":"success"},r.a.createElement("p",{className:"text-sm m-3"},e.text))),r.a.createElement("br",null),r.a.createElement("br",null))})))),r.a.createElement("div",{className:"bottom-0"},r.a.createElement(s.Label,{className:""},r.a.createElement("div",{className:"relative text-gray-500 focus-within:text-orange-600"},r.a.createElement("input",{className:"block w-full pr-20 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-orange-400 focus:outline-none focus:shadow-outline-orange dark:focus:shadow-outline-gray form-input",placeholder:"Type your message here"}),r.a.createElement("button",{className:"absolute inset-y-0 right-0 px-4 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-orange-600 border border-transparent rounded-r-md active:bg-orange-600 hover:bg-orange-700 focus:outline-none focus:shadow-outline-orange"},"Send")))))};t.default=function(){var e=Object(n.useState)(void 0),t=Object(l.a)(e,2),a=t[0],f=t[1];return r.a.createElement("div",null,!a&&r.a.createElement(m.a,null,"Connect with your customers"),a&&r.a.createElement("div",{className:"flex items-center mt-6"},r.a.createElement(s.Avatar,{className:"hidden md:inline-flex",src:a.avatar}),r.a.createElement("p",{className:"mx-3 inline-flex text-2xl font-semibold text-gray-700 dark:text-gray-200"},a.first_name," ",a.last_name),r.a.createElement(s.Badge,{type:!0===a.state?"success":"danger"},!0===a.state?"Online":"Away")),r.a.createElement("div",{className:"grid grid-col md:grid-cols-4 gap-1"},r.a.createElement("div",{className:"md:col-span-3 "},a?r.a.createElement("div",null,r.a.createElement(u,{messages:a.messages})):r.a.createElement("div",{className:"mt-32 flex flex-col justify-center items-center"},r.a.createElement(c,null),r.a.createElement("p",{className:"text-gray-600 dark:text-gray-400"},"Select a chat"))),r.a.createElement("div",{className:""},r.a.createElement(o,null,"Contacts"),d.map((function(e,t){if(null!==e.messages)return r.a.createElement(i,{key:t,avatar:e.avatar,first_name:e.first_name,last_name:e.last_name,state:e.state,handleClick:function(){return function(e){return f(e)}(e)}})})))))}},63:function(e,t,a){"use strict";var l=a(0),n=a.n(l);t.a=function(e){var t=e.children;return n.a.createElement("h1",{className:"my-4 text-2xl font-semibold text-gray-700 dark:text-gray-200"},t)}}}]);
//# sourceMappingURL=22.0d4a9742.chunk.js.map