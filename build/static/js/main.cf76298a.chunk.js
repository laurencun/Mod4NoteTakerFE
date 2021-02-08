(this["webpackJsonpnote-taker-fe"]=this["webpackJsonpnote-taker-fe"]||[]).push([[0],{78:function(t,e,n){},79:function(t,e,n){},87:function(t,e,n){},93:function(t,e,n){"use strict";n.r(e);var o=n(2),r=n(0),c=n.n(r),i=n(24),a=n.n(i),s=(n(78),n(13)),l=n(14),d=n(16),u=n(15),h=(n(79),n(33)),j=n(115),p=n(111),O=n(11),b="https://ntkr.herokuapp.com/",f=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(s.a)(this,n);for(var o=arguments.length,r=new Array(o),c=0;c<o;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={username:"",password:"",error:null},t.handleChange=function(e){t.setState(Object(h.a)({},e.target.name,e.target.value))},t.login=function(){var e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t.state)};fetch("".concat(b,"auth"),e).then((function(t){return t.json()})).then((function(e){e.error?t.setState({error:e.error}):(t.props.login_success(e),t.props.history.push("/"),localStorage.setItem("my_app_token",e.token))}))},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("div",{style:{margin:"10vh"},children:[this.state.error?Object(o.jsx)("h4",{style:{color:"red"},children:this.state.error}):null,Object(o.jsx)(j.a,{style:{backgroundColor:"#E0AB78",border:"1px solid black"},children:Object(o.jsxs)("div",{style:{padding:50,align:"center"},children:[Object(o.jsx)("h2",{children:"Welcome"}),Object(o.jsxs)("form",{children:[Object(o.jsx)("input",{style:{padding:5},onChange:this.handleChange,name:"username",type:"text",placeholder:"Username",value:this.state.username}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{style:{padding:5},onChange:this.handleChange,name:"password",type:"text",placeholder:"Password",value:this.state.password}),Object(o.jsx)("br",{}),Object(o.jsx)(p.a,{style:{margin:10},variant:"outlined",size:"small",onClick:this.login,children:"Login"})]})]})})]})}}]),n}(r.Component),m={login_success:function(t){return{type:"LOGIN_SUCCESS",user:t}}},x=Object(O.b)(null,m)(f),v="".concat(b,"/todos"),T="STAR_TODO",y=function(t){return function(e){fetch("".concat(b).concat(t),{method:"DELETE"}).then((function(t){return t.json()})).then((function(t){return e({type:"DELETE_TODO",todo:t})}))}},g=function(t){return function(e){fetch("".concat(b).concat(t.id),{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify({completed:!0})}).then((function(t){return t.json()})).then((function(t){return e({type:"COMPLETE_TODO",updatedTodo:t})}))}},C=n(58),E=n.n(C),S=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(s.a)(this,n);for(var o=arguments.length,r=new Array(o),c=0;c<o;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={title:"",content:""},t.handleChange=function(e){t.setState(Object(h.a)({},e.target.name,e.target.value))},t.handleSubmit=function(e){e.preventDefault();var n={title:t.state.title,content:t.state.content,completed:!1,user_id:null};t.setState({title:"",content:""}),t.props.createTodo(n),t.props.history.push("/")},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(o.jsx)("div",{style:{margin:"10vh"},children:Object(o.jsx)(j.a,{component:"form",style:{backgroundColor:"#E0AB78",border:"1px solid black"},children:Object(o.jsxs)("form",{style:{padding:50,align:"center"},children:[Object(o.jsx)("h2",{children:"Add Note"}),Object(o.jsx)("label",{children:"Title"}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{onChange:this.handleChange,type:"text",name:"title",value:this.state.title}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("label",{children:"Content"}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{onChange:this.handleChange,type:"textarea",name:"content",value:this.state.content}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("button",{onClick:this.handleSubmit,children:Object(o.jsx)(E.a,{})})]})})})}}]),n}(r.Component),k=Object(O.b)(null,{createTodo:function(t){return function(e){var n={title:t.title,content:t.content,completed:!1,starred:!1};fetch(v,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(n)}).then((function(t){return t.json()})).then((function(t){return e({type:"NEW_TODO",newTodo:n})}))}}})(S),w=n(43),_=n.n(w),D=n(44),N=n.n(D),A=n(35),z=n.n(A),P=function(t){return{type:"EDIT_TODO",todoToEdit:t}},U=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchTodoToShow(window.location.href.split("/")[4])}},{key:"render",value:function(){var t=this;return Object(o.jsxs)("div",{children:[null!=this.props.todoToShow?Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:this.props.todoToShow.title}),Object(o.jsx)("p",{style:{textDecoration:this.props.todoToShow.completed?"line-through":"none"},children:this.props.todoToShow.content}),this.props.todoToShow.title?Object(o.jsx)("div",{children:!1===this.props.todoToShow.completed?Object(o.jsxs)("div",{children:[Object(o.jsx)(p.a,{style:{margin:10},variant:"outlined",size:"smaller",onClick:function(){g(t.props.todoToShow)},children:Object(o.jsx)(_.a,{})}),Object(o.jsx)(p.a,{style:{margin:10},variant:"outlined",size:"smaller",onClick:function(){return e=t.props.todoToShow,t.props.history.push("/edit/".concat(t.props.todoToShow.id)),void P(e);var e},children:Object(o.jsx)(N.a,{})}),Object(o.jsx)(p.a,{style:{margin:10},variant:"outlined",size:"smaller",onClick:function(t){y(t)},children:Object(o.jsx)(z.a,{})})]}):Object(o.jsx)(p.a,{style:{margin:10},variant:"outlined",size:"smaller",onClick:function(){return y(t.props.todoToShow.id)},children:Object(o.jsx)(z.a,{})})}):null]}):Object(o.jsx)("h2",{children:"sorry, couldn't find todo"}),Object(o.jsx)(p.a,{style:{margin:10},variant:"outlined",size:"smaller",onClick:function(){t.props.history.push("/")},children:"Back To All Notes"})]})}}]),n}(r.Component),R=Object(O.b)((function(t){return{todoToShow:t.todoToShow}}),{deleteTodo:y,editTodo:P,fetchTodoToShow:function(t){return function(e){fetch("".concat(b).concat(t)).then((function(t){return t.json()})).then((function(t){return e({type:"GET_TODO",todoToShow:t})}))}},markComplete:g})(U),L=n(59),I=n.n(L),F=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(t){var o;return Object(s.a)(this,n),(o=e.call(this,t)).handleChange=function(t){o.setState(Object(h.a)({},t.target.name,t.target.value))},o.handleSubmit=function(t){t.preventDefault(),console.log(o.state),o.props.updateTodo(o.state),o.props.revertTodoToEdit(o.state),o.setState({title:"",content:""}),o.props.history.push("/")},o.state={id:"",title:"",content:""},o}return Object(l.a)(n,[{key:"componentDidUpdate",value:function(t,e){this.props.todoToEdit&&""===e.title&&this.setState({id:this.props.todoToEdit.id,title:this.props.todoToEdit.title,content:this.props.todoToEdit.content})}},{key:"render",value:function(){return Object(o.jsx)("div",{style:{margin:"10vh"},children:Object(o.jsx)(j.a,{component:"form",style:{backgroundColor:"#E0AB78",border:"1px solid black"},children:Object(o.jsxs)("form",{style:{padding:50,align:"center"},children:[Object(o.jsx)("h2",{children:"Edit Note"}),Object(o.jsx)("label",{children:"Title"}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{onChange:this.handleChange,type:"text",name:"title",value:this.state.title}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("label",{children:"Content"}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{onChange:this.handleChange,type:"text",name:"content",value:this.state.content}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)(p.a,{onClick:this.handleSubmit,style:{margin:10},variant:"outlined",size:"small",children:Object(o.jsx)(I.a,{})})]})})})}}]),n}(r.Component),H=Object(O.b)((function(t){return{todoToEdit:t.todoToEdit}}),{updateTodo:function(t){return function(e){fetch("".concat(b).concat(t.id),{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify({title:"".concat(t.title),content:"".concat(t.content)})}).then((function(t){return t.json()})).then((function(t){return e({type:"UPDATED_TODO",updatedTodo:t})}))}},revertTodoToEdit:function(t){return{type:"REVERT_TODO",todoToRevert:t}}})(F),J=(n(87),n.p+"static/media/nav-img3.b05ece9b.png"),B=n(4),M=n(96),G=n(117),V=n(112);function X(){var t=Object(B.e)();return Object(o.jsx)("div",{children:Object(o.jsx)("nav",{style:{width:"100%",height:"10vh",backgroundImage:"url(".concat(J,")")},children:Object(o.jsxs)(G.a,{"aria-label":"breadcrumb",children:[Object(o.jsx)(M.a,{variant:"h4",color:"textPrimary",children:Object(o.jsx)("h3",{onClick:function(){t.push("/")},children:"noteTaker"})}),Object(o.jsx)(V.a,{variant:"h5",color:"inherit",href:"/new",children:"New Note"}),Object(o.jsx)(V.a,{variant:"h5",color:"inherit",href:"/login",onClick:function(){return localStorage.removeItem("my_app_token")},children:"Sign Out"})]})})})}var W=n(113),q=n(114),K=n(61),Q=n.n(K),Y=n(60),Z=n.n(Y),$=Object(O.b)(null,{deleteTodo:y,editTodo:P,markComplete:g,markStarred:function(t){return function(e){fetch("".concat(b).concat(t.id),{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify({starred:!0})}).then((function(t){return t.json()})).then((function(t){e({type:T,updatedTodo:t})}))}},markUnstarred:function(t){return function(e){fetch("".concat(b).concat(t.id),{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify({starred:!1})}).then((function(t){return t.json()})).then((function(t){e({type:T,updatedTodo:t})}))}}})((function(t){var e=t.todo,n=t.deleteTodo,r=t.editTodo,c=t.markComplete,i=t.markStarred,a=t.markUnstarred,s=Object(B.e)(),l=function(){n(e.id)},d=function(){c(e)},u=function(){i(e)},h=function(){a(e)},j=Object(W.a)((function(t){return{root:{display:"flex","& > *":{margin:t.spacing(1),width:t.spacing(16),height:t.spacing(16)}}}}));function O(){var t=j();return Object(o.jsxs)(q.a,{classname:t.root,children:[Object(o.jsx)("h3",{onClick:function(){return t=e.id,void s.push("/todo/".concat(t));var t},children:e.title}),Object(o.jsx)("p",{style:{textDecoration:e.completed?"line-through":"none"},children:e.content}),e.title?Object(o.jsx)("div",{children:!1===e.completed?Object(o.jsxs)("div",{children:[!0===e.starred?Object(o.jsx)(p.a,{style:{margin:10},variant:"outlined",size:"smaller",onClick:h,children:Object(o.jsx)(Z.a,{})}):Object(o.jsx)(p.a,{style:{margin:10},variant:"outlined",size:"smaller",onClick:u,children:Object(o.jsx)(Q.a,{})}),Object(o.jsx)(p.a,{style:{margin:10},variant:"outlined",size:"smaller",onClick:d,children:Object(o.jsx)(_.a,{})}),Object(o.jsx)(p.a,{style:{margin:10},variant:"outlined",size:"smaller",onClick:function(){return function(t){s.push("/edit/".concat(t.id)),r(t)}(e)},children:Object(o.jsx)(N.a,{})}),Object(o.jsx)(p.a,{style:{margin:10},variant:"outlined",size:"smaller",onClick:l,children:Object(o.jsx)(z.a,{})})]}):Object(o.jsx)(p.a,{style:{margin:10},variant:"outlined",size:"smaller",onClick:l,children:Object(o.jsx)(z.a,{})})}):null]})}return Object(o.jsx)("div",{children:Object(o.jsx)(O,{})})})),tt=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this.props.todos.sort((function(t,e){return t.completed-e.completed})).sort((function(t,e){return e.starred-t.starred}));return Object(o.jsx)("div",{children:t.map((function(t){return Object(o.jsx)($,{todo:t},t.id)}))})}}]),n}(r.Component),et=Object(O.b)()(tt),nt=!0,ot=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(s.a)(this,n);for(var o=arguments.length,r=new Array(o),c=0;c<o;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).showCompleted=function(){!1===(nt=!nt)?t.props.fetchCompleted():t.props.fetchTodos()},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=this,e=localStorage.getItem("my_app_token");if(e){var n={method:"GET",headers:{Authorization:"Bearer ".concat(e)}};fetch("".concat(b,"current_user"),n).then((function(t){return t.json()})).then((function(e){t.props.currentUser(e.user)})),this.props.fetchTodos()}else this.props.history.push("/login")}},{key:"render",value:function(){return Object(o.jsxs)("div",{children:[!0===nt?Object(o.jsx)(p.a,{style:{margin:10},variant:"outlined",size:"smaller",onClick:this.showCompleted,children:"Show Completed"}):Object(o.jsx)(p.a,{style:{margin:10},variant:"outlined",size:"smaller",onClick:this.showCompleted,children:"Show All"}),Object(o.jsx)(et,{todos:this.props.todos,handleEdit:this.handleEdit})]})}}]),n}(r.Component),rt=Object(O.b)((function(t){return{todos:t.todos,auth:t.auth}}),{fetchTodos:function(){return function(t){fetch(v).then((function(t){return t.json()})).then((function(e){return t({type:"FETCH_TODOS",todos:e})}))}},fetchCompleted:function(){return function(t){fetch(v).then((function(t){return t.json()})).then((function(e){return t({type:"FETCH_COMPLETED",todos:e.filter((function(t){return!0===t.completed}))})}))}},currentUser:function(t){return{type:"CURRENT_USER",user:t}}})(ot),ct=n(27);var it=n(64);var at=Object(ct.c)({todos:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"FETCH_TODOS":case"FETCH_COMPLETED":return e.todos;case"NEW_TODO":return console.log(e.newTodo),[].concat(Object(it.a)(t),[e.newTodo]);case"DELETE_TODO":return t.filter((function(t){return t.id!==e.todo.id}));case"COMPLETE_TODO":case"STAR_TODO":case"UPDATED_TODO":return t.map((function(t){return t.id===e.updatedTodo.id?e.updatedTodo:t}));default:return t}},auth:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"LOGIN_SUCCESS":case"CURRENT_USER":return e.user;default:return t}},users:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;return e.type,t},todoToEdit:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"EDIT_TODO":return e.todoToEdit;case"REVERT_TODO":return null;default:return t}},todoToShow:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"GET_TODO":return e.todoToShow;default:return t}}}),st=n(62),lt=n(63),dt=[st.a],ut=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=Object(ct.e)(at,Object(ct.d)(ct.a.apply(void 0,dt),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));return Object(o.jsx)(O.a,{store:t,children:Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)(lt.a,{children:[Object(o.jsx)(X,{}),Object(o.jsx)(B.a,{exact:!0,path:"/login",component:x}),Object(o.jsx)(B.a,{exact:!0,path:"/new",component:k}),Object(o.jsx)(B.a,{path:"/edit/:id",component:H}),Object(o.jsx)(B.a,{path:"/todo/:id",component:R}),Object(o.jsx)(B.a,{exact:!0,path:"/",component:rt})]})})})}}]),n}(r.Component),ht=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,119)).then((function(e){var n=e.getCLS,o=e.getFID,r=e.getFCP,c=e.getLCP,i=e.getTTFB;n(t),o(t),r(t),c(t),i(t)}))};a.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(ut,{})}),document.getElementById("root")),ht()}},[[93,1,2]]]);
//# sourceMappingURL=main.cf76298a.chunk.js.map