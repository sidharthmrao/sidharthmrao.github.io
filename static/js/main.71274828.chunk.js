(this.webpackJsonpreactniceresume=this.webpackJsonpreactniceresume||[]).push([[0],{23:function(e,t,s){},26:function(e,t,s){},38:function(e,t,s){"use strict";s.r(t);var c=s(2),a=s(13),n=s.n(a),i=(s(23),s(6)),r=s(7),l=s(9),j=s(8),d=s(14),o=s(16),h=s.n(o),b=(s(26),s(17)),m=s(5),O=s.n(m),u=s(1),x=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.project,t=this.props.data.github,s=this.props.data.name,c=this.props.data.description;return Object(u.jsxs)("header",{id:"home",children:[Object(u.jsx)(b.a,{type:"polygon",bg:!0}),Object(u.jsxs)("nav",{id:"nav-wrap",children:[Object(u.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(u.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(u.jsxs)("ul",{id:"nav",className:"nav",children:[Object(u.jsx)("li",{className:"current",children:Object(u.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})]}),Object(u.jsx)("div",{className:"row banner",children:Object(u.jsxs)("div",{className:"banner-text",children:[Object(u.jsx)(O.a,{bottom:!0,children:Object(u.jsx)("h1",{className:"responsive-headline",children:s})}),Object(u.jsx)(O.a,{bottom:!0,duration:1200,children:Object(u.jsxs)("h3",{className:"scrambletext",children:[c,"."]})}),Object(u.jsx)("hr",{}),Object(u.jsx)(O.a,{bottom:!0,duration:2e3,children:Object(u.jsxs)("ul",{className:"social",children:[Object(u.jsxs)("a",{href:e,target:"_blank",rel:"noopener noreferrer",className:"button btn project-btn",children:[Object(u.jsx)("i",{className:"fa fa-linkedin-square"}),"LinkedIn"]}),Object(u.jsxs)("a",{href:t,target:"_blank",rel:"noopener noreferrer",className:"button btn github-btn",children:[Object(u.jsx)("i",{className:"fa fa-github"}),"Github"]})]})})]})}),Object(u.jsx)("p",{className:"scrolldown",children:Object(u.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(u.jsx)("i",{className:"icon-down-circle"})})})]})}}]),s}(c.Component),p=x,f=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.social.map((function(e){return Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:Object(u.jsx)("i",{className:e.className})})},e.name)}));return Object(u.jsx)("footer",{children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)(O.a,{bottom:!0,children:Object(u.jsxs)("div",{className:"twelve columns",children:[Object(u.jsx)("ul",{className:"social-links",children:e}),Object(u.jsx)("ul",{className:"copyright",children:Object(u.jsx)("li",{children:"Sidharth Rao"})})]})}),Object(u.jsx)("div",{id:"go-top",children:Object(u.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(u.jsx)("i",{className:"icon-up-open"})})})]})})}}]),s}(c.Component),v=f,N=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e="images/"+this.props.data.image,t=this.props.data.resumedownload,s=this.props.data.bio,c=(this.props.data.address.street,this.props.data.address.city),a=this.props.data.address.state,n=this.props.data.address.zip,i=this.props.data.phone,r=this.props.data.email;this.props.data.resumedownload;return Object(u.jsx)("section",{id:"about",children:Object(u.jsx)(O.a,{duration:1e3,children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"three columns",children:Object(u.jsx)("img",{className:"profile-pic",src:e,alt:"Sidharth Rao Profile Pic"})}),Object(u.jsxs)("div",{className:"nine columns main-col",children:[Object(u.jsx)("h2",{children:"About Me"}),Object(u.jsx)("p",{children:s}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)("div",{className:"columns contact-details",children:[Object(u.jsx)("h2",{children:"Contact Details"}),Object(u.jsxs)("p",{className:"address",children:[Object(u.jsx)("span",{children:"Sidharth Rao"}),Object(u.jsx)("br",{}),Object(u.jsxs)("span",{children:[c," ",a,", ",n]}),Object(u.jsx)("br",{}),Object(u.jsx)("span",{children:i}),Object(u.jsx)("br",{}),Object(u.jsx)("span",{children:r})]})]}),Object(u.jsx)("div",{className:"columns download",children:Object(u.jsx)("p",{children:Object(u.jsxs)("a",{href:t,target:"_blank",rel:"noopener noreferrer",className:"button",children:[Object(u.jsx)("i",{className:"fa fa-linkedin-square"}),"LinkedIn Resume"]})})})]})]})]})})})}}]),s}(c.Component),g=N,w=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.education.map((function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:e.school}),Object(u.jsxs)("p",{className:"info",children:[e.degree," ",Object(u.jsx)("span",{children:"\u2022"}),Object(u.jsx)("em",{className:"date",children:e.graduated})]}),Object(u.jsx)("p",{children:e.description})]},e.school)})),t=this.props.data.work.map((function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:e.company}),Object(u.jsxs)("p",{className:"info",children:[e.title,Object(u.jsx)("span",{children:"\u2022"})," ",Object(u.jsx)("em",{className:"date",children:e.years})]}),Object(u.jsx)("p",{children:e.description})]},e.company)}));return Object(u.jsxs)("section",{id:"resume",children:[Object(u.jsx)(O.a,{left:!0,duration:1300,children:Object(u.jsxs)("div",{className:"row education",children:[Object(u.jsx)("div",{className:"three columns header-col",children:Object(u.jsx)("h1",{children:Object(u.jsx)("span",{children:"Education"})})}),Object(u.jsx)("div",{className:"nine columns main-col",children:Object(u.jsx)("div",{className:"row item",children:Object(u.jsx)("div",{className:"twelve columns",children:e})})})]})}),Object(u.jsx)(O.a,{left:!0,duration:1300,children:Object(u.jsxs)("div",{className:"row work",children:[Object(u.jsx)("div",{className:"three columns header-col",children:Object(u.jsx)("h1",{children:Object(u.jsx)("span",{children:"Work"})})}),Object(u.jsx)("div",{className:"nine columns main-col",children:t})]})})]})}}]),s}(c.Component),y=w,k=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.name,t=this.props.data.address.street,s=this.props.data.address.city,c=this.props.data.address.state,a=this.props.data.address.zip,n=this.props.data.phone,i=this.props.data.contactmessage;return Object(u.jsxs)("section",{id:"contact",children:[Object(u.jsx)(m.Fade,{bottom:!0,duration:1e3,children:Object(u.jsxs)("div",{className:"row section-head",children:[Object(u.jsx)("div",{className:"two columns header-col",children:Object(u.jsx)("h1",{children:Object(u.jsx)("span",{children:"Get In Touch."})})}),Object(u.jsx)("div",{className:"ten columns",children:Object(u.jsx)("p",{className:"lead",children:i})})]})}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)(m.Slide,{left:!0,duration:1e3,children:Object(u.jsxs)("div",{className:"eight columns",children:[Object(u.jsx)("form",{action:"",method:"post",id:"contactForm",name:"contactForm",children:Object(u.jsxs)("fieldset",{children:[Object(u.jsxs)("div",{children:[Object(u.jsxs)("label",{htmlFor:"contactName",children:["Name ",Object(u.jsx)("span",{className:"required",children:"*"})]}),Object(u.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactName",name:"contactName",onChange:this.handleChange})]}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("label",{htmlFor:"contactEmail",children:["Email ",Object(u.jsx)("span",{className:"required",children:"*"})]}),Object(u.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactEmail",name:"contactEmail",onChange:this.handleChange})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{htmlFor:"contactSubject",children:"Subject"}),Object(u.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactSubject",name:"contactSubject",onChange:this.handleChange})]}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("label",{htmlFor:"contactMessage",children:["Message ",Object(u.jsx)("span",{className:"required",children:"*"})]}),Object(u.jsx)("textarea",{cols:"50",rows:"15",id:"contactMessage",name:"contactMessage"})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{className:"submit",children:"Submit"}),Object(u.jsx)("span",{id:"image-loader",children:Object(u.jsx)("img",{alt:"",src:"images/loader.gif"})})]})]})}),Object(u.jsx)("div",{id:"message-warning",children:" Error boy"}),Object(u.jsxs)("div",{id:"message-success",children:[Object(u.jsx)("i",{className:"fa fa-check"}),"Your message was sent, thank you!",Object(u.jsx)("br",{})]})]})}),Object(u.jsx)(m.Slide,{right:!0,duration:1e3,children:Object(u.jsxs)("aside",{className:"four columns footer-widgets",children:[Object(u.jsxs)("div",{className:"widget widget_contact",children:[Object(u.jsx)("h4",{children:"Contact"}),Object(u.jsxs)("p",{className:"address",children:[e,Object(u.jsx)("br",{}),"sidharthmrao@gmail.com",t," ",Object(u.jsx)("br",{}),s,", ",c," ",a,Object(u.jsx)("br",{}),Object(u.jsx)("span",{children:n})]})]}),Object(u.jsxs)("div",{className:"widget widget_tweets",children:[Object(u.jsx)("h4",{className:"widget-title",children:"My Friends' Websites:"}),Object(u.jsxs)("ul",{id:"twitter",children:[Object(u.jsx)("li",{children:Object(u.jsx)("span",{children:Object(u.jsx)("a",{href:"https://ryanyang.us",children:"Ryan Yang"})})}),Object(u.jsx)("li",{children:Object(u.jsx)("span",{children:Object(u.jsx)("a",{href:"https://www.korvyakov.us",children:"Michael Korvyakov"})})}),Object(u.jsx)("li",{children:Object(u.jsx)("span",{children:Object(u.jsx)("a",{href:"https://tsviii.wixsite.com/david",children:"David Garsten"})})})]})]})]})})]})]})}}]),s}(c.Component),C=k,D=s(18),S=s.n(D),F=0,M=(c.Component,function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(e){var c;return Object(i.a)(this,s),(c=t.call(this,e)).state={foo:"bar",resumeData:{}},d.a.initialize("UA-110570651-1"),d.a.pageview(window.location.pathname),c}return Object(r.a)(s,[{key:"getResumeData",value:function(){h.a.ajax({url:"./resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,t,s){console.log(s),alert(s)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(p,{data:this.state.resumeData.main}),Object(u.jsx)(g,{data:this.state.resumeData.main}),Object(u.jsx)(y,{data:this.state.resumeData.resume}),Object(u.jsx)(C,{data:this.state.resumeData.main}),Object(u.jsx)(v,{data:this.state.resumeData.main})]})}}]),s}(c.Component)),R=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,39)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),c(e),a(e),n(e),i(e)}))};n.a.render(Object(u.jsx)(M,{}),document.getElementById("root")),R()}},[[38,1,2]]]);
//# sourceMappingURL=main.71274828.chunk.js.map