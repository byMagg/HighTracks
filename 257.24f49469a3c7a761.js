"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[257],{257:(N,_,l)=>{l.r(_),l.d(_,{routes:()=>A});var g=l(6895),c=l(433),m=l(1194),r=l(650),u=l(5861),p=l(259),n=l(4650),d=l(7556);function f(t,a){if(1&t&&(n.TgZ(0,"h2"),n._uU(1),n.qZA()),2&t){const o=n.oxw(2);n.xp6(1),n.hij("Bienvenido ",o.userData,"")}}function h(t,a){if(1&t){const o=n.EpF();n.TgZ(0,"section")(1,"article"),n.YNc(2,f,2,1,"h2",0),n.TgZ(3,"ion-button",1),n.NdJ("click",function(){n.CHM(o);const e=n.oxw();return n.KtG(e.logout())}),n._uU(4," Cerrar sesi\xf3n "),n._UZ(5,"ion-icon",2),n.qZA()()()}if(2&t){const o=n.oxw();n.xp6(2),n.Q6J("ngIf",o.userData)}}function x(t,a){1&t&&(n.TgZ(0,"h2"),n._uU(1,"Inicio de sesi\xf3n"),n.qZA())}function v(t,a){1&t&&(n.TgZ(0,"h2"),n._uU(1,"Registro"),n.qZA())}function C(t,a){if(1&t&&(n.TgZ(0,"div",12),n._uU(1),n.qZA()),2&t){const o=n.oxw().$implicit;n.xp6(1),n.hij(" ",o.message," ")}}function Z(t,a){if(1&t&&(n.ynx(0),n.YNc(1,C,2,1,"div",13),n.BQk()),2&t){const o=a.$implicit,i=n.oxw(3);let e;n.xp6(1),n.Q6J("ngIf",(null==i.formValidationLogin||null==(e=i.formValidationLogin.get("email"))?null:e.hasError(o.type))&&((null==(e=i.formValidationLogin.get("email"))?null:e.dirty)||(null==(e=i.formValidationLogin.get("email"))?null:e.touched)))}}function L(t,a){if(1&t&&(n.TgZ(0,"div",12),n._uU(1),n.qZA()),2&t){const o=n.oxw().$implicit;n.xp6(1),n.hij(" ",o.message," ")}}function T(t,a){if(1&t&&(n.ynx(0),n.YNc(1,L,2,1,"div",13),n.BQk()),2&t){const o=a.$implicit,i=n.oxw(3);let e;n.xp6(1),n.Q6J("ngIf",(null==(e=i.formValidationLogin.get("password"))?null:e.hasError(o.type))&&((null==(e=i.formValidationLogin.get("password"))?null:e.dirty)||(null==(e=i.formValidationLogin.get("password"))?null:e.touched)))}}function y(t,a){if(1&t&&(n.TgZ(0,"ion-button",14),n._uU(1,"Iniciar sesi\xf3n"),n.qZA()),2&t){const o=n.oxw(3);n.Q6J("disabled",!o.formValidationLogin.valid)}}function w(t,a){if(1&t&&(n.TgZ(0,"ion-button",14),n._uU(1,"Crear cuenta"),n.qZA()),2&t){const o=n.oxw(3);n.Q6J("disabled",!o.formValidationLogin.valid)}}function b(t,a){if(1&t){const o=n.EpF();n.TgZ(0,"div"),n._uU(1," \xbfNo tienes cuenta? "),n.TgZ(2,"a",15),n.NdJ("click",function(){n.CHM(o);const e=n.oxw(3);return n.KtG(e.toggleLogin())}),n._uU(3,"Crear Cuenta"),n.qZA()()}}function M(t,a){if(1&t){const o=n.EpF();n.TgZ(0,"div"),n._uU(1," \xbfYa tienes cuenta? "),n.TgZ(2,"a",15),n.NdJ("click",function(){n.CHM(o);const e=n.oxw(3);return n.KtG(e.toggleLogin())}),n._uU(3,"Inicia sesi\xf3n"),n.qZA()()}}function J(t,a){if(1&t){const o=n.EpF();n.TgZ(0,"article")(1,"form",3),n.NdJ("ngSubmit",function(){n.CHM(o);const e=n.oxw(2);return n.KtG(e.showLogin?e.tryLogin(e.formValidationLogin.value):e.trySignup(e.formValidationLogin.value))}),n.YNc(2,x,2,0,"h2",0),n.YNc(3,v,2,0,"h2",0),n.TgZ(4,"div",4)(5,"ion-item")(6,"ion-label",5),n._uU(7,"Email: "),n.qZA(),n.TgZ(8,"ion-input",6),n.NdJ("keyup.enter",function(){n.CHM(o);const e=n.oxw(2);return n.KtG(e.tryLogin(e.formValidationLogin.value))}),n.qZA()(),n.TgZ(9,"div"),n.YNc(10,Z,2,1,"ng-container",7),n.qZA()(),n.TgZ(11,"div",4)(12,"ion-item")(13,"ion-label",5),n._uU(14,"Contrase\xf1a: "),n.qZA(),n.TgZ(15,"ion-input",8),n.NdJ("keyup.enter",function(){n.CHM(o);const e=n.oxw(2);return n.KtG(e.tryLogin(e.formValidationLogin.value))}),n.qZA()(),n.TgZ(16,"div"),n.YNc(17,T,2,1,"ng-container",7),n.qZA()(),n.TgZ(18,"div",9),n.YNc(19,y,2,1,"ion-button",10),n.YNc(20,w,2,1,"ion-button",10),n.qZA(),n.TgZ(21,"div",11)(22,"ion-label",12),n._uU(23),n.qZA()()(),n.TgZ(24,"footer"),n.YNc(25,b,4,0,"div",0),n.YNc(26,M,4,0,"div",0),n.qZA()()}if(2&t){const o=n.oxw(2);n.xp6(1),n.Q6J("formGroup",o.formValidationLogin),n.xp6(1),n.Q6J("ngIf",o.showLogin),n.xp6(1),n.Q6J("ngIf",!o.showLogin),n.xp6(7),n.Q6J("ngForOf",o.formValidationMessages.email),n.xp6(7),n.Q6J("ngForOf",o.formValidationMessages.password),n.xp6(2),n.Q6J("ngIf",o.showLogin),n.xp6(1),n.Q6J("ngIf",!o.showLogin),n.xp6(3),n.Oqu(o.errorMessage),n.xp6(2),n.Q6J("ngIf",o.showLogin),n.xp6(1),n.Q6J("ngIf",!o.showLogin)}}function P(t,a){if(1&t&&(n.TgZ(0,"section"),n.YNc(1,J,27,10,"article",0),n.qZA()),2&t){const o=n.oxw();n.xp6(1),n.Q6J("ngIf",o.formValidationLogin)}}let k=(()=>{class t{constructor(o,i,e){this.authService=o,this.formBuilder=i,this.router=e,this.errorMessage="",this.logged=this.authService.checkLogged(),this.showLogin=!0,this.formValidationMessages={email:[{type:"required",message:"El email es un campo obligatorio."},{type:"pattern",message:"El formato del email no es correcto."}],password:[{type:"required",message:"La contrase\xf1a es un campo obligatorio."},{type:"minlength",message:"La l\xf3ngitud m\xednima de una contrase\xf1a es 6 caracteres."}]}}ngOnInit(){this.getUserData(),this.formValidationLogin=this.formBuilder.group({email:new c.NI("",c.kI.compose([c.kI.required,c.kI.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")])),password:new c.NI("",c.kI.compose([c.kI.minLength(6),c.kI.required]))})}trySignup(o){this.authService.doSignup(o).then(i=>{console.log(i),this.errorMessage="",this.router.navigate(["/"])},i=>{console.log(i),this.errorMessage=i.message})}tryLogin(o){var i=this;return(0,u.Z)(function*(){try{var e;yield i.authService.doLogin(o),null===(e=i.modal)||void 0===e||e.dismiss(null,"confirm")}catch(s){s instanceof p.ZR&&("auth/wrong-password"==s.code&&(i.errorMessage="Contrase\xf1a incorrecta"),"auth/user-not-found"==s.code&&(i.errorMessage="Usuario no encontrado"))}})()}logout(){var o=this;return(0,u.Z)(function*(){try{var i;yield o.authService.doLogout(),null===(i=o.modal)||void 0===i||i.dismiss(null,"confirm")}catch(e){console.log(e)}})()}getUserData(){var o=this;return(0,u.Z)(function*(){o.userData=yield o.authService.getUser().email,console.log(o.userData)})()}toggleLogin(){this.showLogin=!this.showLogin}}return t.\u0275fac=function(o){return new(o||t)(n.Y36(d.e),n.Y36(c.qu),n.Y36(m.F0))},t.\u0275cmp=n.Xpm({type:t,selectors:[["login-form"]],inputs:{modal:"modal"},standalone:!0,features:[n.jDz],decls:2,vars:2,consts:[[4,"ngIf"],[3,"click"],["name","log-out"],[1,"form",3,"formGroup","ngSubmit"],[1,"form-input"],["position","floating","color","primary"],["type","text","aria-label","Email: ","formControlName","email",3,"keyup.enter"],[4,"ngFor","ngForOf"],["type","password","aria-label","Contrase\xf1a: ","formControlName","password",3,"keyup.enter"],[1,"div-button-login"],["type","submit",3,"disabled",4,"ngIf"],[1,"div-label-error"],[1,"error-message"],["class","error-message",4,"ngIf"],["type","submit",3,"disabled"],["href","#",3,"click"]],template:function(o,i){1&o&&(n.YNc(0,h,6,1,"section",0),n.YNc(1,P,2,1,"section",0)),2&o&&(n.Q6J("ngIf",i.logged),n.xp6(1),n.Q6J("ngIf",!i.logged))},dependencies:[g.ez,g.sg,g.O5,c.u5,c._Y,c.JJ,c.JL,r.Pc,r.YG,r.gu,r.pK,r.Ie,r.Q$,r.j9,c.UX,c.sg,c.u],styles:[".form[_ngcontent-%COMP%]{margin-top:50px}.label-title[_ngcontent-%COMP%]{font-weight:500;margin-bottom:20px}.div-button-login[_ngcontent-%COMP%]{text-align:center;margin-top:20px}.div-label-error[_ngcontent-%COMP%]{text-align:center;margin-top:10px}.error-message[_ngcontent-%COMP%]{color:var(--ion-color-danger);font-size:smaller;padding:10px}section[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly;align-items:center;height:100%;transform:translateY(-56px)}article[_ngcontent-%COMP%]{min-width:300px;height:300px;display:flex;flex-direction:column;justify-content:space-evenly}footer[_ngcontent-%COMP%]{margin:0 auto}.form-input[_ngcontent-%COMP%]{height:100px}"]}),t})();function I(t,a){if(1&t){const o=n.EpF();n.TgZ(0,"ion-header",9)(1,"ion-toolbar")(2,"ion-buttons",10)(3,"ion-button",11),n.NdJ("click",function(){n.CHM(o);const e=n.oxw();return n.KtG(e.cancel())}),n._UZ(4,"ion-icon",12),n.qZA()()()(),n.TgZ(5,"ion-content"),n._UZ(6,"login-form",13),n.qZA()}if(2&t){const o=n.oxw();n.xp6(6),n.Q6J("modal",o.modal)}}const A=[{path:"",component:(()=>{class t{constructor(o){this.navCtrl=o}ngOnInit(){}search(){this.navCtrl.navigateForward(["tracks"],{queryParams:{s:this.query}})}cancel(){var o;null===(o=this.modal)||void 0===o||o.dismiss(null,"cancel")}confirm(){var o;null===(o=this.modal)||void 0===o||o.dismiss(null,"confirm")}onWillDismiss(o){"confirm"===o.detail.role&&console.log("Confirm")}}return t.\u0275fac=function(o){return new(o||t)(n.Y36(r.SH))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-home"]],viewQuery:function(o,i){if(1&o&&n.Gf(r.ki,5),2&o){let e;n.iGM(e=n.CRH())&&(i.modal=e.first)}},standalone:!0,features:[n.jDz],decls:13,vars:2,consts:[[3,"fullscreen"],["id","open-login","fill","clear"],["name","person"],["id","container"],["id","searchBar"],["mode","ios","placeholder","Introduce el nombre de la canci\xf3n",3,"ngModel","keyup.enter","ngModelChange"],["size","small",3,"click"],["name","search"],["trigger","open-login",3,"willDismiss"],[1,"ion-no-border"],["slot","end"],[3,"click"],["slot","icon-only","name","close"],[3,"modal"]],template:function(o,i){1&o&&(n.TgZ(0,"ion-content",0)(1,"ion-button",1),n._UZ(2,"ion-icon",2),n.qZA(),n.TgZ(3,"div",3)(4,"h1"),n._uU(5,"HIGH TRACKS"),n.qZA(),n.TgZ(6,"div",4)(7,"ion-searchbar",5),n.NdJ("keyup.enter",function(){return i.search()})("ngModelChange",function(s){return i.query=s}),n.qZA(),n.TgZ(8,"ion-buttons")(9,"ion-fab-button",6),n.NdJ("click",function(){return i.search()}),n._UZ(10,"ion-icon",7),n.qZA()()()(),n.TgZ(11,"ion-modal",8),n.NdJ("willDismiss",function(s){return i.onWillDismiss(s)}),n.YNc(12,I,7,1,"ng-template"),n.qZA()()),2&o&&(n.Q6J("fullscreen",!0),n.xp6(7),n.Q6J("ngModel",i.query))},dependencies:[g.ez,c.u5,c.JJ,c.On,r.Pc,r.YG,r.Sm,r.W2,r.W4,r.Gu,r.gu,r.VI,r.sr,r.ki,r.j9,m.Bz,k],styles:["#container[_ngcontent-%COMP%]{position:absolute;height:100%;width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:50px}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{text-align:center;position:relative;width:80%;font-size:60px;font-weight:600;color:transparent;-webkit-background-clip:text;background-clip:text;background-image:repeating-radial-gradient(circle closest-corner at 100px 100px,#553c9a,#b393d3 10%,#553c9a 20%)}#searchBar[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}#searchBar[_ngcontent-%COMP%]   ion-searchbar[_ngcontent-%COMP%]{max-width:350px}#searchBar[_ngcontent-%COMP%]{width:100%}#open-login[_ngcontent-%COMP%]{position:absolute;top:0;right:0;z-index:1}"]}),t})()},{path:"tracks",loadChildren:()=>l.e(721).then(l.bind(l,721)).then(t=>t.routes)}]}}]);