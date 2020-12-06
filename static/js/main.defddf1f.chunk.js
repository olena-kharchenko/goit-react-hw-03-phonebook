(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={section:"Section_section__34K1c",title:"Section_title__1CsMU"}},12:function(t,e,n){t.exports={filter:"Filter_filter__3h-rm",input:"Filter_input__1qwhf"}},2:function(t,e,n){t.exports={list:"ContactList_list__gFNSy",item:"ContactList_item__3WEKC",text:"ContactList_text__1gAxF",span:"ContactList_span__3feFn",button:"ContactList_button__2WAYu",heart:"ContactList_heart__3Z5oY"}},31:function(t,e,n){},32:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),r=n.n(c),i=n(13),s=n.n(i),o=n(3),u=n(5),l=n(6),b=n(8),m=n(7),h=n(14),d=n.n(h),j=n(11),f=n.n(j);var p=function(t){var e=t.title,n=t.children;return Object(a.jsxs)("div",{className:f.a.section,children:[Object(a.jsx)("h2",{className:f.a.title,children:e}),n]})},_=n(15),O=n(16),x=n.n(O),v=(n(30),n(9)),C=n.n(v),g=function(t){Object(b.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.contactMatching=function(){var e=t.state,n=e.name,a=e.number,c=t.props.contacts,r=c.reduce((function(t,e){return[].concat(Object(o.a)(t),[e.name])}),[]),i=c.reduce((function(t,e){return[].concat(Object(o.a)(t),[e.number])}),[]);return r.includes(n)||i.includes(a)?(alert("".concat(n).concat(a," is already in contacts")),!0):""===n||""===a?(alert("Please enter all data"),!0):void 0},t.handleChange=function(e){t.setState(Object(_.a)({},e.currentTarget.name,e.currentTarget.value))},t.handleSubmit=function(e){var n=t.state,a=n.name,c=n.number;e.preventDefault(),t.setState({name:"",number:""}),t.contactMatching()||t.props.onSubmit(a,c)},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.name,c=e.number;return Object(a.jsxs)("form",{onSubmit:this.handleSubmit,className:C.a.form,children:[Object(a.jsxs)("label",{children:["Name",Object(a.jsx)("input",{type:"text",name:"name",value:n,placeholder:"Rosie Simpson",onChange:this.handleChange,className:C.a.input})]}),Object(a.jsxs)("label",{children:["Number",Object(a.jsx)(x.a,{country:"ua",value:c,placeholder:"+380 (66) 123-4567",onChange:function(e){return t.setState({number:e})}})]}),Object(a.jsx)("button",{type:"submit",className:C.a.button,children:"Add contact"})]})}}]),n}(c.Component),S=n(12),N=n.n(S);var y=function(t){var e=t.value,n=t.onChange;return Object(a.jsxs)("label",{className:N.a.filter,children:["Find contacts by name",Object(a.jsx)("input",{type:"text",value:e,onChange:n,placeholder:"Enter name to search",className:N.a.input})]})},F=n(2),w=n.n(F);var k=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(a.jsx)("ul",{className:w.a.list,children:e.map((function(t){var e=t.id,c=t.name,r=t.number;return Object(a.jsxs)("li",{className:w.a.item,children:[Object(a.jsx)("span",{className:w.a.heart,children:"\u2665"}),Object(a.jsxs)("p",{className:w.a.text,children:[c,": ",r]}),Object(a.jsx)("span",{className:w.a.span}),Object(a.jsx)("button",{type:"button",onClick:function(){return n(e)},className:w.a.button,children:"Delete"})]},e)}))})},L=function(t){Object(b.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e,n){var a={id:d.a.generate(),name:e,number:n};t.setState((function(t){var e=t.contacts;return{contacts:[a].concat(Object(o.a)(e))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.filter,n=t.contacts,c=this.getVisibleContacts();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(p,{title:"Phonebook",children:Object(a.jsx)(g,{onSubmit:this.addContact,contacts:n})}),Object(a.jsxs)(p,{title:"Contacts",children:[Object(a.jsx)(y,{value:e,onChange:this.changeFilter}),Object(a.jsx)(k,{contacts:c,onDeleteContact:this.deleteContact})]})]})}}]),n}(c.Component);n(31);s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(L,{})}),document.getElementById("root"))},9:function(t,e,n){t.exports={form:"Form_form__2xrXi",input:"Form_input__3pFGA",button:"Form_button__3Y7YT"}}},[[32,1,2]]]);
//# sourceMappingURL=main.defddf1f.chunk.js.map