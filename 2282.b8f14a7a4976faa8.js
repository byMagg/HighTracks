"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2282],{2282:(p,s,t)=>{t.r(s),t.d(s,{routes:()=>h});var u=t(6895),i=t(433),c=t(1194),e=t(4709),n=t(4650);const d=function(){return["/login"]},h=[{path:"",component:(()=>{class a{constructor(o,r){this.navCtrl=o,this.route=r,this.searchTerm="",this.checked=!1}ngOnInit(){}search(){this.navCtrl.navigateForward(["tracks"],{relativeTo:this.route,queryParams:{s:this.searchTerm}})}}return a.\u0275fac=function(o){return new(o||a)(n.Y36(e.SH),n.Y36(c.gz))},a.\u0275cmp=n.Xpm({type:a,selectors:[["app-home"]],standalone:!0,features:[n.jDz],decls:15,vars:4,consts:[[3,"fullscreen"],["collapse","condense"],["size","large"],[2,"position","absolute","top","0","right","0",3,"routerLink"],["id","container"],["id","searchBar"],["mode","ios","placeholder","Introduce el nombre de la pel\xedcula",3,"ngModel","keyup.enter","ngModelChange"],[3,"click"],["slot","end","name","search"]],template:function(o,r){1&o&&(n.TgZ(0,"ion-content",0)(1,"ion-header",1)(2,"ion-toolbar")(3,"ion-title",2),n._uU(4,"B\xfasqueda"),n.qZA()()(),n.TgZ(5,"ion-button",3),n._uU(6,"Login"),n.qZA(),n.TgZ(7,"div",4)(8,"h1"),n._uU(9,"HIGH TRACKS"),n.qZA(),n.TgZ(10,"div",5)(11,"ion-searchbar",6),n.NdJ("keyup.enter",function(){return r.search()})("ngModelChange",function(m){return r.searchTerm=m}),n.qZA(),n.TgZ(12,"ion-button",7),n.NdJ("click",function(){return r.search()}),n._UZ(13,"ion-icon",8),n._uU(14," Buscar "),n.qZA()()()()),2&o&&(n.Q6J("fullscreen",!0),n.xp6(5),n.Q6J("routerLink",n.DdM(3,d)),n.xp6(6),n.Q6J("ngModel",r.searchTerm))},dependencies:[u.ez,i.u5,i.JJ,i.On,e.Pc,e.YG,e.W2,e.Gu,e.gu,e.VI,e.wd,e.sr,e.j9,e.YI,c.Bz,c.rH],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:100px 0;position:relative;left:10%;width:80%;font-size:60px;font-weight:600;color:transparent;-webkit-background-clip:text;background-clip:text;background-image:repeating-radial-gradient(circle closest-corner at 100px 100px,#553c9a,#b393d3 10%,#553c9a 20%)}ion-content[_ngcontent-%COMP%]{display:flex;align-content:center}ion-button[_ngcontent-%COMP%]{--background: #553c9a}#searchBar[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:500px;margin:0 auto}#terms-container[_ngcontent-%COMP%]{width:min-content;margin:20px auto}#terms-container[_ngcontent-%COMP%] > ion-label[_ngcontent-%COMP%]{margin:20px}"]}),a})()},{path:"tracks",loadChildren:()=>t.e(487).then(t.bind(t,487)).then(a=>a.routes)}]}}]);