(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,a,t){},11:function(e,a,t){},13:function(e,a,t){"use strict";t.r(a);var n=t(2),c=t.n(n),i=t(4),s=t.n(i),r=(t(10),t.p,t(11),t(1)),l=t(5),o=t(0);function j(){var e=Object(n.useState)({people:1e4,maxPeople:1e5,day:1,maxDay:180,peoplePrice:.01,allprice:100,salePrice:0,additionPrice:0}),a=Object(l.a)(e,2),t=a[0],c=a[1],i=function(e,a){var t=Math.floor(a/10),n=Array(t).fill("").reduce((function(e,a){return.95*e}),e);c((function(e){return Object(r.a)(Object(r.a)({},e),{},{salePrice:n.toFixed(1)})}))},s=function(e){var a=parseInt(e.target.value),t=e.target.checked;c(t?function(e){return Object(r.a)(Object(r.a)({},e),{},{additionPrice:parseInt(e.additionPrice)+a})}:function(e){return Object(r.a)(Object(r.a)({},e),{},{additionPrice:parseInt(e.additionPrice)-a})})};return Object(o.jsxs)("div",{className:"calc-section",children:[Object(o.jsxs)("div",{className:"s-input",children:[Object(o.jsx)("span",{className:"s-input__start",children:"min:10000"}),Object(o.jsxs)("span",{children:["\u041b\u044e\u0434\u0438",Object(o.jsx)("input",{className:"line__appendLine",name:"newcountPeople",placeholder:"\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0438\u0441\u043b\u043e \u0432\u044b\u0448\u0435 100000",onChange:function(e){var a=parseInt(e.target.value);isNaN(a)&&c((function(e){return Object(r.a)(Object(r.a)({},e),{},{maxPeople:1e5})})),a>1e3&&c((function(e){return Object(r.a)(Object(r.a)({},e),{},{maxPeople:a})}))},onBlur:function(e){""===e.target.value.trim()&&c((function(e){return Object(r.a)(Object(r.a)({},e),{},{maxPeople:1e5})})),e.target.value=""}})]}),Object(o.jsx)("input",{className:"line__input",name:"people",type:"range",min:"10000",max:t.maxPeople,onChange:function(e){var a=parseInt(e.target.value),n=t.peoplePrice,s=t.day;c((function(e){return i(a*n*a,s),Object(r.a)(Object(r.a)({},e),{},{allprice:(a*n*s).toFixed(1),people:a})}))}}),Object(o.jsx)("span",{className:"count",children:t.people})]}),Object(o.jsxs)("div",{className:"s-input",children:[Object(o.jsx)("span",{className:"s-input__start",children:"min:1"}),Object(o.jsxs)("span",{children:["\u0414\u043d\u0438",Object(o.jsx)("input",{className:"line__appendLine",name:"newcountDay",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u043d\u0438 \u043d\u0435 \u043c\u0435\u043d\u044c\u0448\u0435 1",onChange:function(e){var a=parseInt(e.target.value);isNaN(a)&&c((function(e){return Object(r.a)(Object(r.a)({},e),{},{maxDay:180})})),a>1&&c((function(e){return Object(r.a)(Object(r.a)({},e),{},{maxDay:a})}))},onBlur:function(e){""===e.target.value.trim()&&c((function(e){return Object(r.a)(Object(r.a)({},e),{},{maxDay:180})})),e.target.value=""}})]}),Object(o.jsx)("input",{className:"line__input",name:"day",type:"range",min:"1",max:t.maxDay,defaultValue:"1",onChange:function(e){var a=parseInt(e.target.value),n=t.peoplePrice,s=t.people;c((function(e){return i(s*n*a,a),Object(r.a)(Object(r.a)({},e),{},{allprice:s*n*a,day:a})}))}}),Object(o.jsx)("span",{className:"count",children:t.day})]}),Object(o.jsxs)("div",{className:"s-input s-input--checkbox",children:[Object(o.jsxs)("label",{for:"50",children:["50",Object(o.jsx)("input",{onChange:s,className:"checkbox-price",name:"50",type:"checkbox",value:"50"})]}),Object(o.jsxs)("label",{for:"100",children:["100",Object(o.jsx)("input",{onChange:s,className:"checkbox-price",name:"100",type:"checkbox",value:"100"})]}),Object(o.jsxs)("label",{for:"200",children:["200",Object(o.jsx)("input",{onChange:s,className:"checkbox-price",name:"200",type:"checkbox",value:"200"})]})]}),Object(o.jsxs)("div",{className:"show-result",children:["in day: ",t.day<10?(t.allprice/t.day).toFixed(1):(t.salePrice/t.day).toFixed(1)]}),Object(o.jsxs)("div",{className:"show-result",children:[Object(o.jsx)("span",{className:"result_field",children:"result:"}),t.day<10?Object(o.jsxs)("span",{children:[(+t.allprice+t.additionPrice).toFixed(1),"$"]}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("span",{className:"sale",children:[(+t.allprice+t.additionPrice).toFixed(1),"$"]}),Object(o.jsxs)("span",{children:[(+t.salePrice+t.additionPrice).toFixed(1),"$"]})]})]})]})}var p=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)("header",{className:"App-header",children:Object(o.jsx)(j,{})})})},u=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,14)).then((function(a){var t=a.getCLS,n=a.getFID,c=a.getFCP,i=a.getLCP,s=a.getTTFB;t(e),n(e),c(e),i(e),s(e)}))};s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(p,{})}),document.getElementById("root")),u()}},[[13,1,2]]]);
//# sourceMappingURL=main.0411711a.chunk.js.map