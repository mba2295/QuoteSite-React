(this["webpackJsonpreact-quote-app"]=this["webpackJsonpreact-quote-app"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){e.exports={header:"MainNavigation_header__pcWBd",logo:"MainNavigation_logo__3mTft",nav:"MainNavigation_nav__2KJfX",active:"MainNavigation_active__oN3Ka"}},function(e,t,n){e.exports={form:"QuoteForm_form__3Ndw9",loading:"QuoteForm_loading__iDpS0",control:"QuoteForm_control__2lCiE",actions:"QuoteForm_actions__354La"}},,function(e,t,n){e.exports={form:"NewCommentForm_form__2Te8b",loading:"NewCommentForm_loading__2veC2",control:"NewCommentForm_control__3NVeP",actions:"NewCommentForm_actions__2fwWP"}},,,,,function(e,t,n){e.exports={list:"QuoteList_list__3pzcl",sorting:"QuoteList_sorting__rL6H1"}},,function(e,t,n){e.exports={main:"Layout_main__auk_r"}},,,function(e,t,n){e.exports={card:"Card_card__1m44e"}},function(e,t,n){e.exports={spinner:"LoadingSpinner_spinner__2Kyqv"}},function(e,t,n){e.exports={noquotes:"NoQuotesFound_noquotes__3DIYb"}},function(e,t,n){e.exports={item:"QuoteItem_item__2dOvb"}},function(e,t,n){e.exports={comments:"Comments_comments__iZX-v"}},function(e,t,n){e.exports={item:"CommentItem_item__24mbD"}},function(e,t,n){e.exports={comments:"CommentsList_comments__valp0"}},function(e,t,n){e.exports={quote:"HighlightedQuote_quote__nE9T6"}},,,,,,,,function(e,t,n){},,,,,,,,,function(e,t,n){"use strict";n.r(t);var c=n(22),r=n.n(c),s=(n(41),n(2)),a=n(1),o=n(23),i=n.n(o),u=n(3),j=n(13),d=n.n(j),l=n(0),b=function(){return Object(l.jsxs)("header",{className:d.a.header,children:[Object(l.jsx)("div",{className:d.a.logo,children:"Wise Quotes"}),Object(l.jsx)("nav",{className:d.a.nav,children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)(u.c,{to:"/quotes",activeClassName:d.a.active,children:"All Quotes"})}),Object(l.jsx)("li",{children:Object(l.jsx)(u.c,{to:"/addquote",activeClassName:d.a.active,children:"Add New Quotes"})})]})})]})},m=function(e){return Object(l.jsxs)(a.Fragment,{children:[Object(l.jsx)(b,{}),Object(l.jsx)("main",{className:i.a.main,children:e.children})]})},h=n(11),x=n(19),O=n(26),f=n.n(O),p=function(e){return Object(l.jsx)("div",{className:f.a.card,children:e.children})},v=n(27),_=n.n(v),g=function(){return Object(l.jsx)("div",{className:_.a.spinner})},N=n(14),q=n.n(N),w=function(e){var t=Object(a.useState)(),n=Object(h.a)(t,2),c=n[0],r=n[1],o=Object(a.useRef)(),i=Object(a.useRef)();return Object(l.jsxs)(x.Fragment,{children:[Object(l.jsx)(s.a,{when:c,message:"Are you sure? data entered will be lost"}),Object(l.jsx)(p,{children:Object(l.jsxs)("form",{onFocus:function(e){r(!0)},className:q.a.form,onSubmit:function(t){t.preventDefault();var n=o.current.value,c=i.current.value;e.onAddQuote({author:n,text:c})},children:[e.isLoading&&Object(l.jsx)("div",{className:q.a.loading,children:Object(l.jsx)(g,{})}),Object(l.jsxs)("div",{className:q.a.control,children:[Object(l.jsx)("label",{htmlFor:"author",children:"Author"}),Object(l.jsx)("input",{type:"text",id:"author",ref:o})]}),Object(l.jsxs)("div",{className:q.a.control,children:[Object(l.jsx)("label",{htmlFor:"text",children:"Text"}),Object(l.jsx)("textarea",{id:"text",rows:"5",ref:i})]}),Object(l.jsx)("div",{className:q.a.actions,children:Object(l.jsx)("button",{onClick:function(e){r(!1)},className:"btn",children:"Add Quote"})})]})})]})},C=n(12),y=n(6),k=n(9);function S(e,t){return"SEND"===t.type?{data:null,error:null,status:"pending"}:"SUCCESS"===t.type?{data:t.responseData,error:null,status:"completed"}:"ERROR"===t.type?{data:null,error:t.errorMessage,status:"completed"}:e}var E=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Object(a.useReducer)(S,{status:t?"pending":null,data:null,error:null}),c=Object(h.a)(n,2),r=c[0],s=c[1],o=Object(a.useCallback)(function(){var t=Object(k.a)(Object(y.a)().mark((function t(n){var c;return Object(y.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s({type:"SEND"}),t.prev=1,t.next=4,e(n);case 4:c=t.sent,s({type:"SUCCESS",responseData:c}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),s({type:"ERROR",errorMessage:t.t0.message||"Something went wrong!"});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),[e]);return Object(C.a)({sendRequest:o},r)},R="https://react-http-demo-944cb-default-rtdb.asia-southeast1.firebasedatabase.app";function F(){return Q.apply(this,arguments)}function Q(){return(Q=Object(k.a)(Object(y.a)().mark((function e(){var t,n,c,r,s;return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(R,"/quotes.json"));case 2:return t=e.sent,e.next=5,t.json();case 5:if(n=e.sent,t.ok){e.next=8;break}throw new Error(n.message||"Could not fetch quotes.");case 8:for(r in c=[],n)s=Object(C.a)({id:r},n[r]),c.push(s);return e.abrupt("return",c);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e){return A.apply(this,arguments)}function A(){return(A=Object(k.a)(Object(y.a)().mark((function e(t){var n,c,r;return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(R,"/quotes/").concat(t,".json"));case 2:return n=e.sent,e.next=5,n.json();case 5:if(c=e.sent,n.ok){e.next=8;break}throw new Error(c.message||"Could not fetch quote.");case 8:return r=Object(C.a)({id:t},c),e.abrupt("return",r);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e){return L.apply(this,arguments)}function L(){return(L=Object(k.a)(Object(y.a)().mark((function e(t){var n,c;return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(R,"/quotes.json"),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:if(c=e.sent,n.ok){e.next=8;break}throw new Error(c.message||"Could not create quote.");case 8:return e.abrupt("return",null);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e){return M.apply(this,arguments)}function M(){return(M=Object(k.a)(Object(y.a)().mark((function e(t){var n,c;return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(R,"/comments/").concat(t.quoteId,".json"),{method:"POST",body:JSON.stringify(t.commentData),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:if(c=e.sent,n.ok){e.next=8;break}throw new Error(c.message||"Could not add comment.");case 8:return e.abrupt("return",{commentId:c.name});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function J(e){return P.apply(this,arguments)}function P(){return(P=Object(k.a)(Object(y.a)().mark((function e(t){var n,c,r,s,a;return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(R,"/comments/").concat(t,".json"));case 2:return n=e.sent,e.next=5,n.json();case 5:if(c=e.sent,n.ok){e.next=8;break}throw new Error(c.message||"Could not get comments.");case 8:for(s in r=[],c)a=Object(C.a)({id:s},c[s]),r.push(a);return e.abrupt("return",r);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var U=function(){var e=E(D,!1),t=e.status,n=e.sendRequest,c=Object(s.h)();Object(a.useEffect)((function(){"completed"===t&&c.push("/quotes")}),[t,c]);return Object(l.jsx)(w,{isLoading:"pending"===t,onAddQuote:function(e){console.log(e),n(e)}})},K=n(28),W=n.n(K),B=function(){return Object(l.jsxs)("div",{className:W.a.noquotes,children:[Object(l.jsx)("p",{children:"No quotes found!"}),Object(l.jsx)(u.b,{to:"/addquote",className:"btn",children:"Add a Quote"})]})},H=n(29),X=n.n(H),Y=function(e){return Object(l.jsxs)("li",{className:X.a.item,children:[Object(l.jsxs)("figure",{children:[Object(l.jsx)("blockquote",{children:Object(l.jsx)("p",{children:e.text})}),Object(l.jsx)("figcaption",{children:e.author})]}),Object(l.jsx)(u.b,{className:"btn",to:"/quotes/".concat(e.id),children:"Show Details"})]})},z=n(21),V=n.n(z),Z=function(e){var t,n,c,r=Object(s.h)(),o=Object(s.i)(),i="asc"===(null===(t=new URLSearchParams(o.search).get("sort"))||void 0===t?void 0:t.toLowerCase()),u=(n=e.quotes,c=i,n.sort((function(e,t){return c?e.id>t.id?1:-1:e.id<t.id?1:-1})));return Object(l.jsxs)(a.Fragment,{children:[Object(l.jsx)("div",{className:V.a.sorting,children:Object(l.jsxs)("button",{onClick:function(){r.push({pathname:o.pathname,search:"?sort=".concat(i?"desc":"asc")})},children:["Sort ",i?"Descending":"Ascending"]})}),Object(l.jsx)("ul",{className:V.a.list,children:u.map((function(e){return Object(l.jsx)(Y,{id:e.id,author:e.author,text:e.text},e.id)}))})]})},G=function(e){return"pending"===e.status?Object(l.jsx)("div",{className:"centered",children:Object(l.jsx)(g,{})}):e.error?Object(l.jsx)("p",{className:"centered focus",children:e.error}):void 0},$=function(){var e=E(F,!0),t=e.status,n=e.error,c=e.data,r=e.sendRequest;return Object(a.useEffect)((function(){r()}),[r]),Object(l.jsxs)(a.Fragment,{children:["completed"===t&&(!c||0===c.length)&&Object(l.jsx)(B,{}),Object(l.jsx)(G,{status:t,error:n}),c&&c.length>0&&Object(l.jsx)(Z,{quotes:c})]})},ee=function(){return Object(l.jsx)("p",{children:"No page found!"})},te=n(30),ne=n.n(te),ce=n(16),re=n.n(ce),se=function(e){var t=Object(a.useRef)(),n=E(T),c=n.status,r=n.error,s=n.sendRequest,o=e.onCommentAdded;Object(a.useEffect)((function(){"completed"!==c||r||o()}),[r,o,c]);var i=function(n){n.preventDefault(),s({commentData:{text:t.current.value},quoteId:e.quoteId}),t.current.value=""};return Object(l.jsxs)("form",{className:re.a.form,onSubmit:i,children:[Object(l.jsx)(G,{status:c,error:r}),Object(l.jsxs)("div",{className:re.a.control,onSubmit:i,children:[Object(l.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(l.jsx)("textarea",{id:"comment",rows:"5",ref:t})]}),Object(l.jsx)("div",{className:re.a.actions,children:Object(l.jsx)("button",{className:"btn",children:"Add Comment"})})]})},ae=n(31),oe=n.n(ae),ie=function(e){return Object(l.jsx)("li",{className:oe.a.item,children:Object(l.jsx)("p",{children:e.text})})},ue=n(32),je=n.n(ue),de=function(e){return Object(l.jsx)("ul",{className:je.a.comments,children:e.comments.map((function(e){return Object(l.jsx)(ie,{text:e.text},e.id)}))})},le=function(){var e=Object(s.j)(),t=E(J),n=t.status,c=t.error,r=t.data,o=t.sendRequest,i=Object(a.useState)(!1),u=Object(h.a)(i,2),j=u[0],d=u[1],b=e.quoteId,m=Object(a.useCallback)((function(){o(b)}),[o,b]);return Object(a.useEffect)((function(){o(b)}),[b,o]),Object(l.jsxs)("section",{className:ne.a.comments,children:[Object(l.jsx)("h2",{children:"User Comments"}),!j&&Object(l.jsx)("button",{className:"btn",onClick:function(){d(!0)},children:"Add a Comment"}),j&&Object(l.jsx)(se,{quoteId:e.quoteId,onCommentAdded:m}),"completed"===n&&(!r||0===r.length)&&Object(l.jsx)("p",{children:"No comments found"}),Object(l.jsx)(G,{status:n,error:c}),r&&r.length>0&&Object(l.jsx)(de,{comments:r})]})},be=n(33),me=n.n(be),he=function(e){return Object(l.jsxs)("figure",{className:me.a.quote,children:[Object(l.jsx)("p",{children:e.text}),Object(l.jsx)("figcaption",{children:e.author})]})},xe=function(){var e=Object(s.j)(),t=Object(s.k)(),n=e.quoteId,c=E(I),r=c.status,o=c.error,i=c.data,j=c.sendRequest;return Object(a.useEffect)((function(){j(n)}),[j,n]),Object(l.jsxs)(a.Fragment,{children:[Object(l.jsx)(G,{status:r,error:o}),i&&Object(l.jsx)(he,{text:i.text,author:i.author}),Object(l.jsx)(s.c,{path:"/quotes/".concat(e.quoteId),exact:!0,children:Object(l.jsx)("div",{className:"centered",children:Object(l.jsx)(u.b,{className:"btn--flat",to:"".concat(t.url,"/comments"),children:"Show Comments"})})}),!i&&Object(l.jsx)(B,{}),Object(l.jsx)(s.c,{path:"".concat(t.path,"/comments"),children:Object(l.jsx)(le,{})})]})};var Oe=function(){return Object(l.jsx)("div",{children:Object(l.jsx)(m,{children:Object(l.jsxs)(s.e,{children:[Object(l.jsx)(s.c,{path:"/",exact:!0,children:Object(l.jsx)(s.b,{to:"/quotes"})}),Object(l.jsx)(s.c,{path:"/quotes",exact:!0,children:Object(l.jsx)($,{})}),Object(l.jsx)(s.c,{path:"/quotes/:quoteId",children:Object(l.jsx)(xe,{})}),Object(l.jsx)(s.c,{path:"/addquote",exact:!0,children:Object(l.jsx)(U,{})}),Object(l.jsx)(s.c,{path:"*",children:Object(l.jsx)(ee,{})})]})})})};r.a.createRoot(document.getElementById("root")).render(Object(l.jsx)(u.a,{basename:"/QuoteSite-React",children:Object(l.jsx)(Oe,{})}))}],[[50,1,2]]]);
//# sourceMappingURL=main.d9424cca.chunk.js.map