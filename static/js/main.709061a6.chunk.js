(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{46:function(t,e,a){},47:function(t,e,a){"use strict";a.r(e);var n=a(2),r=a.n(n),s=a(19),i=a.n(s),c=a(10),u=a.n(c),o=a(20),m=a(3),l=a(4),p=a(6),h=a(5),j=a(21),b=a.n(j).a.create({baseURL:"https://api.unsplash.com",headers:{Authorization:"Client-ID D5g_fhg9ZJ0591wh1rgjMMtJMYV0jyorUembQAt0ZFs"}}),f=a(0),d=function(t){Object(p.a)(a,t);var e=Object(h.a)(a);function a(){var t;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).state={term:""},t.onImputSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state.term)},t}return Object(l.a)(a,[{key:"render",value:function(){var t=this;return Object(f.jsx)("div",{className:"ui segment",children:Object(f.jsx)("form",{onSubmit:this.onImputSubmit,className:"ui form",children:Object(f.jsxs)("div",{className:"field",children:[Object(f.jsx)("label",{value:this.state.term,children:"image search"}),Object(f.jsx)("input",{type:"text",onChange:function(e){return t.setState({term:e.target.value})}})]})})})}}]),a}(r.a.Component),v=d,g=(a(46),function(t){Object(p.a)(a,t);var e=Object(h.a)(a);function a(t){var n;return Object(m.a)(this,a),(n=e.call(this,t)).setspans=function(){var t=n.imageRef.current.clientHeight,e=Math.ceil(t/10);n.setState({spans:e})},n.state={spans:0},n.imageRef=r.a.createRef(),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.imageRef.current.addEventListener("load",this.setspans)}},{key:"render",value:function(){var t=this.props.image,e=t.desciption,a=t.urls;return Object(f.jsx)("div",{style:{gridRowEnd:"span ".concat(this.state.spans)},children:Object(f.jsx)("img",{ref:this.imageRef,alt:e,src:a.regular})})}}]),a}(r.a.Component)),O=function(t){var e=t.images.map((function(t){return Object(f.jsx)(g,{image:t},t.id)}));return Object(f.jsxs)("div",{className:"image-list",children:[" ",e]})},x=function(t){Object(p.a)(a,t);var e=Object(h.a)(a);function a(){var t;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).state={images:[]},t.onSearchSubmit=function(){var e=Object(o.a)(u.a.mark((function e(a){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.get("/search/photos",{params:{query:a}});case 2:n=e.sent,t.setState({images:n.data.results});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t}return Object(l.a)(a,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"ui contaner",style:{margin:"10px"},children:[Object(f.jsx)(v,{onSubmit:this.onSearchSubmit}),Object(f.jsx)(O,{images:this.state.images})]})}}]),a}(r.a.Component),y=x;i.a.render(Object(f.jsx)(y,{}),document.querySelector("#root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.709061a6.chunk.js.map