(this["webpackJsonpreact-chat"]=this["webpackJsonpreact-chat"]||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var s=n(1),r=n(0),a=n.n(r),o=n(6),c=n.n(o),i=(n(21),n(4)),u=n(7),l=n(10),h=n(9);n(22);var g=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).handleSubmit=function(e){e.preventDefault(),function(e){try{return fetch("http://localhost:3002/logIn",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()}))}catch(t){console.log("ERROR",t)}}({user:s.state.login}).then((function(e){e&&(0,s.props.saveCurrentUser)(s.state.login)})).catch((function(){return alert("This user is already exist")}))},s.handleInput=function(e){s.setState({login:e.target.value})},s.state={login:null},s}return Object(u.a)(n,[{key:"render",value:function(){var e=this.handleSubmit,t=this.handleInput;return Object(s.jsx)("div",{className:"root__auth-container",children:Object(s.jsxs)("form",{onSubmit:e,className:"auth-container__auth-form",children:[Object(s.jsx)("span",{className:"auth-form__form-name",children:"Authorization"}),Object(s.jsx)("input",{name:"login",onChange:t,placeholder:"Please Type userName",className:"auth-form__login-input"}),Object(s.jsx)("button",{className:"auth-form__submit-button",children:"Sign in"})]})})}}]),n}(a.a.PureComponent),d=Object.defineProperties({},{LOG_IN:{value:"log_in",writable:!1},LOG_OUT:{value:"log_out",writable:!1},SAVE_CURRENT_MESSAGE:{value:"save_current_message",writable:!1}}),O=function(e){return e.login.currentUser},b=function(e){return e.login.isLoged},f=n(2),m=Object(f.b)((function(e){return{currentUserName:O(e),isUserLoged:b(e)}}),(function(e){return{saveCurrentUser:function(t){return e(function(e){return{type:d.LOG_IN,payload:e}}(t))}}}))(g),j=n(8),p=(n(29),function(e){return console.log(e),Object(s.jsxs)("li",{className:"chat-window__message",children:[Object(s.jsx)("span",{className:"message__user-name",children:e.user}),Object(s.jsx)("span",{className:"message__user-text",children:e.message})]})}),_=a.a.memo(p),v=function e(){var t=this;Object(i.a)(this,e),this.onOpen=function(){console.log("----WEBSOCKET CONNECTED---------")},this.onClose=function(){console.log("----WEBSOCKET DISCONNECTED---------")},this.getOnMessage=function(e){t._ws.onmessage=function(t){var n=t.data;e(JSON.parse(n))}},this.sendMessage=function(e){t._ws.send(JSON.stringify(e))},this._host=window.location.origin.replace(/^http/,"ws"),this._ws=new WebSocket(this._host),this._ws.onopen=this.onOpen.bind(this),this._ws.onclose=this.onClose.bind(this)},S=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).getAllMessagesOnWS=function(e){console.log("MESSAGES",e),s.setState({allMessages:e})},s.handleSubmit=function(e){e.preventDefault();var t=s.props,n=t.saveCurrentMessage,r={user:t.currentUserName,message:s.state.curMessage};n(r),s.ws.sendMessage(r)},s.handleInput=function(e){s.setState({curMessage:e.target.value})},s.logOut=function(){var e=s.props,t=e.logOutUser;!function(e){try{fetch("http://localhost:3002/logOut",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}catch(t){console.log("ERROR",t)}}({user:e.currentUserName}),t()},s.state={curMessage:null,allMessages:[]},s.ws=new v,s.ws.getOnMessage(s.getAllMessagesOnWS.bind(Object(j.a)(s))),s}return Object(u.a)(n,[{key:"render",value:function(){var e=this.handleInput,t=this.logOut,n=this.handleSubmit,r=this.state.allMessages;return Object(s.jsxs)("div",{className:"root__main-container",children:[Object(s.jsx)("button",{onClick:t,className:"root__log-out-btn",children:"Log out"}),Object(s.jsxs)("div",{className:"main-container__chat-section",children:[Object(s.jsx)("ul",{className:"chat-section__chat-window",children:r.length?r.map((function(e,t){return Object(s.jsx)(_,{user:e.user,message:e.message},t)})):null}),Object(s.jsxs)("form",{onSubmit:n,className:"chat-window__chat-form",children:[Object(s.jsx)("input",{onChange:e,className:"chat-form__message-input"}),Object(s.jsx)("button",{className:"chat-form__submit-button",children:"Send"})]})]})]})}}]),n}(a.a.PureComponent),N=function(e){return e.login.currentUser},w=function(e){return e.login.isLoged},E=function(e){return e.messenger},y=Object(f.b)((function(e){return{currentUserName:N(e),isUserLoged:w(e),currentMessageData:E(e)}}),(function(e){return{logOutUser:function(){return e({type:d.LOG_OUT,payload:t});var t},saveCurrentMessage:function(t){return e(function(e){return{type:d.SAVE_CURRENT_MESSAGE,payload:{user:e.user,message:e.message}}}(t))}}}))(S),C=function(e){var t=e.isUserLoged;return Object(s.jsx)(s.Fragment,{children:t?Object(s.jsx)(y,{}):Object(s.jsx)(m,{})})},x=a.a.memo(C),U=function(e){return e.login.isLoged},L=Object(f.b)((function(e){return{isUserLoged:U(e)}}))(x);var M=function(){return Object(s.jsx)(L,{})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),s(e),r(e),a(e),o(e)}))},R=n(5),I=n(3),A={currentUser:null,isLoged:!1},G={user:null,message:null},D=Object(R.b)({login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d.LOG_IN:return Object(I.a)(Object(I.a)({},e),{},{currentUser:t.payload,isLoged:!0});case d.LOG_OUT:return Object(I.a)(Object(I.a)({},e),{},{currentUser:null,isLoged:!1});default:return e}},messenger:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d.SAVE_CURRENT_MESSAGE:return Object(I.a)(Object(I.a)({},e),{},{user:t.payload.user,message:t.payload.message});default:return e}}});!function(){var e=Object(R.c)(D);window.store=e,c.a.render(Object(s.jsx)(f.a,{store:e,children:Object(s.jsx)(M,{})}),document.getElementById("root"))}(),T()}},[[30,1,2]]]);
//# sourceMappingURL=main.f097793b.chunk.js.map