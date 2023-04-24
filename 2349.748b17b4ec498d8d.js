"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2349],{2349:(ge,Z,u)=>{u.r(Z),u.d(Z,{ion_modal:()=>me});var A=u(5861),f=u(9816),Y=u(6406),P=u(8986),U=u(5375),m=u(9397),V=u(5234),b=u(1178),l=u(3457),p=u(6280),J=u(2854),Q=u(9459),h=u(2200),ie=u(2225),se=u(1898),K=(u(4349),(()=>{return(e=K||(K={})).Dark="DARK",e.Light="LIGHT",e.Default="DEFAULT",K;var e})());const $={getEngine(){var e;return(null===(e=null==l.w?void 0:l.w.Capacitor)||void 0===e?void 0:e.isPluginAvailable("StatusBar"))&&(null==l.w?void 0:l.w.Capacitor.Plugins.StatusBar)},supportsDefaultStatusBarStyle(){var e;return!(null===(e=null==l.w?void 0:l.w.Capacitor)||void 0===e||!e.PluginHeaders)},setStyle(e){const t=this.getEngine();t&&t.setStyle(e)},getStyle:(e=(0,A.Z)(function*(){const t=this.getEngine();if(!t)return K.Default;const{style:n}=yield t.getInfo();return n}),function(){return e.apply(this,arguments)})},te=(e,t)=>{if(1===t)return 0;const n=1/(1-t);return e*n+-t*n},ae=()=>{!l.w||l.w.innerWidth>=768||!$.supportsDefaultStatusBarStyle()||$.setStyle({style:K.Dark})},de=(e=K.Default)=>{!l.w||l.w.innerWidth>=768||!$.supportsDefaultStatusBarStyle()||$.setStyle({style:e})},le=function(){var e=(0,A.Z)(function*(t,n){"function"!=typeof t.canDismiss||!(yield t.canDismiss(void 0,p.G))||(n.isRunning()?n.onFinish(()=>{t.dismiss(void 0,"handler")},{oneTimeCallback:!0}):t.dismiss(void 0,"handler"))});return function(n,o){return e.apply(this,arguments)}}(),ne=e=>.00255275*2.71828**(-14.9619*e)-1.00255*2.71828**(-.0380968*e)+1,ce=(e,t)=>(0,m.l)(400,e/Math.abs(1.1*t),500),pe=e=>{const{currentBreakpoint:t,backdropBreakpoint:n}=e,o=void 0===n||n<t,i=o?`calc(var(--backdrop-opacity) * ${t})`:"0",r=(0,h.c)("backdropAnimation").fromTo("opacity",0,i);return o&&r.beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),{wrapperAnimation:(0,h.c)("wrapperAnimation").keyframes([{offset:0,opacity:1,transform:"translateY(100%)"},{offset:1,opacity:1,transform:`translateY(${100-100*t}%)`}]),backdropAnimation:r}},he=e=>{const{currentBreakpoint:t,backdropBreakpoint:n}=e,o=`calc(var(--backdrop-opacity) * ${te(t,n)})`,i=[{offset:0,opacity:o},{offset:1,opacity:0}],r=[{offset:0,opacity:o},{offset:n,opacity:0},{offset:1,opacity:0}],a=(0,h.c)("backdropAnimation").keyframes(0!==n?r:i);return{wrapperAnimation:(0,h.c)("wrapperAnimation").keyframes([{offset:0,opacity:1,transform:`translateY(${100-100*t}%)`},{offset:1,opacity:1,transform:"translateY(100%)"}]),backdropAnimation:a}},fe=(e,t)=>{const{presentingEl:n,currentBreakpoint:o}=t,i=(0,m.g)(e),{wrapperAnimation:r,backdropAnimation:a}=void 0!==o?pe(t):{backdropAnimation:(0,h.c)().fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),wrapperAnimation:(0,h.c)().fromTo("transform","translateY(100vh)","translateY(0vh)")};a.addElement(i.querySelector("ion-backdrop")),r.addElement(i.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1});const s=(0,h.c)("entering-base").addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(500).addAnimation(r);if(n){const d=window.innerWidth<768,k="ION-MODAL"===n.tagName&&void 0!==n.presentingElement,S=(0,m.g)(n),x=(0,h.c)().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"}),v=document.body;if(d){const E=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",_=`translateY(${k?"-10px":E}) scale(0.93)`;x.afterStyles({transform:_}).beforeAddWrite(()=>v.style.setProperty("background-color","black")).addElement(n).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"},{offset:1,filter:"contrast(0.85)",transform:_,borderRadius:"10px 10px 0 0"}]),s.addAnimation(x)}else if(s.addAnimation(a),k){const w=`translateY(-10px) scale(${k?.93:1})`;x.afterStyles({transform:w}).addElement(S.querySelector(".modal-wrapper")).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0) scale(1)"},{offset:1,filter:"contrast(0.85)",transform:w}]);const c=(0,h.c)().afterStyles({transform:w}).addElement(S.querySelector(".modal-shadow")).keyframes([{offset:0,opacity:"1",transform:"translateY(0) scale(1)"},{offset:1,opacity:"0",transform:w}]);s.addAnimation([x,c])}else r.fromTo("opacity","0","1")}else s.addAnimation(a);return s},ue=(e,t,n=500)=>{const{presentingEl:o,currentBreakpoint:i}=t,r=(0,m.g)(e),{wrapperAnimation:a,backdropAnimation:s}=void 0!==i?he(t):{backdropAnimation:(0,h.c)().fromTo("opacity","var(--backdrop-opacity)",0),wrapperAnimation:(0,h.c)().fromTo("transform","translateY(0vh)","translateY(100vh)")};s.addElement(r.querySelector("ion-backdrop")),a.addElement(r.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1});const d=(0,h.c)("leaving-base").addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(n).addAnimation(a);if(o){const k=window.innerWidth<768,S="ION-MODAL"===o.tagName&&void 0!==o.presentingElement,x=(0,m.g)(o),v=(0,h.c)().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish(w=>{1===w&&(o.style.setProperty("overflow",""),Array.from(E.querySelectorAll("ion-modal")).filter(_=>void 0!==_.presentingElement).length<=1&&E.style.setProperty("background-color",""))}),E=document.body;if(k){const w=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",j=`translateY(${S?"-10px":w}) scale(0.93)`;v.addElement(o).keyframes([{offset:0,filter:"contrast(0.85)",transform:j,borderRadius:"10px 10px 0 0"},{offset:1,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"}]),d.addAnimation(v)}else if(d.addAnimation(s),S){const c=`translateY(-10px) scale(${S?.93:1})`;v.addElement(x.querySelector(".modal-wrapper")).afterStyles({transform:"translate3d(0, 0, 0)"}).keyframes([{offset:0,filter:"contrast(0.85)",transform:c},{offset:1,filter:"contrast(1)",transform:"translateY(0) scale(1)"}]);const _=(0,h.c)().addElement(x.querySelector(".modal-shadow")).afterStyles({transform:"translateY(0) scale(1)"}).keyframes([{offset:0,opacity:"0",transform:c},{offset:1,opacity:"1",transform:"translateY(0) scale(1)"}]);d.addAnimation([v,_])}else a.fromTo("opacity","1","0")}else d.addAnimation(s);return d},we=(e,t)=>{const{currentBreakpoint:n}=t,o=(0,m.g)(e),{wrapperAnimation:i,backdropAnimation:r}=void 0!==n?pe(t):{backdropAnimation:(0,h.c)().fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),wrapperAnimation:(0,h.c)().keyframes([{offset:0,opacity:.01,transform:"translateY(40px)"},{offset:1,opacity:1,transform:"translateY(0px)"}])};return r.addElement(o.querySelector("ion-backdrop")),i.addElement(o.querySelector(".modal-wrapper")),(0,h.c)().addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).addAnimation([r,i])},Se=(e,t)=>{const{currentBreakpoint:n}=t,o=(0,m.g)(e),{wrapperAnimation:i,backdropAnimation:r}=void 0!==n?he(t):{backdropAnimation:(0,h.c)().fromTo("opacity","var(--backdrop-opacity)",0),wrapperAnimation:(0,h.c)().keyframes([{offset:0,opacity:.99,transform:"translateY(0px)"},{offset:1,opacity:0,transform:"translateY(40px)"}])};return r.addElement(o.querySelector("ion-backdrop")),i.addElement(o.querySelector(".modal-wrapper")),(0,h.c)().easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).addAnimation([r,i])},me=class{constructor(e){(0,f.r)(this,e),this.didPresent=(0,f.d)(this,"ionModalDidPresent",7),this.willPresent=(0,f.d)(this,"ionModalWillPresent",7),this.willDismiss=(0,f.d)(this,"ionModalWillDismiss",7),this.didDismiss=(0,f.d)(this,"ionModalDidDismiss",7),this.ionBreakpointDidChange=(0,f.d)(this,"ionBreakpointDidChange",7),this.didPresentShorthand=(0,f.d)(this,"didPresent",7),this.willPresentShorthand=(0,f.d)(this,"willPresent",7),this.willDismissShorthand=(0,f.d)(this,"willDismiss",7),this.didDismissShorthand=(0,f.d)(this,"didDismiss",7),this.triggerController=(0,p.e)(),this.modalIndex=Be++,this.coreDelegate=(0,U.C)(),this.isSheetModal=!1,this.inheritedAttributes={},this.inline=!1,this.gestureAnimationDismissing=!1,this.onHandleClick=()=>{const{sheetTransition:t,handleBehavior:n}=this;"cycle"!==n||void 0!==t||this.moveToNextBreakpoint()},this.onBackdropTap=()=>{const{sheetTransition:t}=this;void 0===t&&this.dismiss(void 0,p.B)},this.onLifecycle=t=>{const n=this.usersElement,o=Ae[t.type];if(n&&o){const i=new CustomEvent(o,{bubbles:!1,cancelable:!1,detail:t.detail});n.dispatchEvent(i)}},this.presented=!1,this.hasController=!1,this.overlayIndex=void 0,this.delegate=void 0,this.keyboardClose=!0,this.enterAnimation=void 0,this.leaveAnimation=void 0,this.breakpoints=void 0,this.initialBreakpoint=void 0,this.backdropBreakpoint=0,this.handle=void 0,this.handleBehavior="none",this.component=void 0,this.componentProps=void 0,this.cssClass=void 0,this.backdropDismiss=!0,this.showBackdrop=!0,this.animated=!0,this.presentingElement=void 0,this.htmlAttributes=void 0,this.isOpen=!1,this.trigger=void 0,this.keepContentsMounted=!1,this.canDismiss=!0}onIsOpenChange(e,t){!0===e&&!1===t?this.present():!1===e&&!0===t&&this.dismiss()}triggerChanged(){const{trigger:e,el:t,triggerController:n}=this;e&&n.addClickListener(t,e)}breakpointsChanged(e){void 0!==e&&(this.sortedBreakpoints=e.sort((t,n)=>t-n))}connectedCallback(){const{el:e}=this;(0,p.j)(e),this.triggerChanged()}disconnectedCallback(){this.triggerController.removeClickListener()}componentWillLoad(){const{breakpoints:e,initialBreakpoint:t,el:n}=this;this.inheritedAttributes=(0,m.j)(n,["aria-label","role"]),this.modalId=this.el.hasAttribute("id")?this.el.getAttribute("id"):`ion-modal-${this.modalIndex}`,(this.isSheetModal=void 0!==e&&void 0!==t)&&(this.currentBreakpoint=this.initialBreakpoint),void 0!==e&&void 0!==t&&!e.includes(t)&&(0,b.p)("Your breakpoints array must include the initialBreakpoint value.")}componentDidLoad(){!0===this.isOpen&&(0,m.r)(()=>this.present()),this.breakpointsChanged(this.breakpoints)}getDelegate(e=!1){if(this.workingDelegate&&!e)return{delegate:this.workingDelegate,inline:this.inline};const n=this.inline=null!==this.el.parentNode&&!this.hasController;return{inline:n,delegate:this.workingDelegate=n?this.delegate||this.coreDelegate:this.delegate}}checkCanDismiss(e,t){var n=this;return(0,A.Z)(function*(){const{canDismiss:o}=n;return"function"==typeof o?o(e,t):o})()}present(){var e=this;return(0,A.Z)(function*(){if(e.presented)return;const{presentingElement:t,el:n}=e;void 0!==e.currentTransition&&(yield e.currentTransition),e.currentBreakpoint=e.initialBreakpoint;const{inline:o,delegate:i}=e.getDelegate(!0);e.usersElement=yield(0,U.a)(i,n,e.component,["ion-page"],e.componentProps,o),(0,m.m)(n)&&(yield(0,Q.e)(e.usersElement)),(0,f.w)(()=>e.el.classList.add("show-modal")),e.currentTransition=(0,p.f)(e,"modalEnter",fe,we,{presentingEl:t,currentBreakpoint:e.initialBreakpoint,backdropBreakpoint:e.backdropBreakpoint}),typeof window<"u"&&(e.keyboardOpenCallback=()=>{e.gesture&&(e.gesture.enable(!1),(0,m.r)(()=>{e.gesture&&e.gesture.enable(!0)}))},window.addEventListener(V.KEYBOARD_DID_OPEN,e.keyboardOpenCallback));const r=void 0!==t;r&&"ios"===(0,Y.b)(e)&&(e.statusBarStyle=yield $.getStyle(),ae()),yield e.currentTransition,e.isSheetModal?e.initSheetGesture():r&&e.initSwipeToClose(),e.currentTransition=void 0})()}initSwipeToClose(){var t,e=this;if("ios"!==(0,Y.b)(this))return;const{el:n}=this,o=this.leaveAnimation||Y.c.get("modalLeave",ue),i=this.animation=o(n,{presentingEl:this.presentingElement});if(!(0,P.a)(n))return void(0,P.p)(n);const a=null!==(t=this.statusBarStyle)&&void 0!==t?t:K.Default;this.gesture=((e,t,n,o)=>{const r=e.offsetHeight;let a=!1,s=!1,d=null,k=null,x=!0,v=0;const z=(0,se.createGesture)({el:e,gestureName:"modalSwipeToClose",gesturePriority:39,direction:"y",threshold:10,canStart:y=>{const g=y.event.target;return null===g||!g.closest||(d=(0,P.f)(g),d?(k=(0,P.i)(d)?(0,m.g)(d).querySelector(".inner-scroll"):d,!d.querySelector("ion-refresher")&&0===k.scrollTop):null===g.closest("ion-footer"))},onStart:y=>{const{deltaY:g}=y;x=!d||!(0,P.i)(d)||d.scrollY,s=void 0!==e.canDismiss&&!0!==e.canDismiss,g>0&&d&&(0,P.d)(d),t.progressStart(!0,a?1:0)},onMove:y=>{const{deltaY:g}=y;g>0&&d&&(0,P.d)(d);const B=y.deltaY/r,T=B>=0&&s,O=T?.2:.9999,G=T?ne(B/O):B,C=(0,m.l)(1e-4,G,O);t.progressStep(C),C>=.5&&v<.5?de(n):C<.5&&v>=.5&&ae(),v=C},onEnd:y=>{const g=y.velocityY,B=y.deltaY/r,T=B>=0&&s,O=T?.2:.9999,G=T?ne(B/O):B,C=(0,m.l)(1e-4,G,O),L=!T&&(y.deltaY+1e3*g)/r>=.5;let F=L?-.001:.001;L?(t.easing("cubic-bezier(0.32, 0.72, 0, 1)"),F+=(0,ie.g)([0,0],[.32,.72],[0,1],[1,1],C)[0]):(t.easing("cubic-bezier(1, 0, 0.68, 0.28)"),F+=(0,ie.g)([0,0],[1,0],[.68,.28],[1,1],C)[0]);const q=ce(L?B*r:(1-C)*r,g);a=L,z.enable(!1),d&&(0,P.r)(d,x),t.onFinish(()=>{L||z.enable(!0)}).progressEnd(L?1:0,F,q),T&&C>O/4?le(e,t):L&&o()}});return z})(n,i,a,()=>{this.gestureAnimationDismissing=!0,this.animation.onFinish((0,A.Z)(function*(){yield e.dismiss(void 0,p.G),e.gestureAnimationDismissing=!1}))}),this.gesture.enable(!0)}initSheetGesture(){const{wrapperEl:e,initialBreakpoint:t,backdropBreakpoint:n}=this;if(!e||void 0===t)return;const o=this.enterAnimation||Y.c.get("modalEnter",fe),i=this.animation=o(this.el,{presentingEl:this.presentingElement,currentBreakpoint:t,backdropBreakpoint:n});i.progressStart(!0,1);const{gesture:r,moveSheetToBreakpoint:a}=((e,t,n,o,i,r,a=[],s,d,k)=>{const v={WRAPPER_KEYFRAMES:[{offset:0,transform:"translateY(0%)"},{offset:1,transform:"translateY(100%)"}],BACKDROP_KEYFRAMES:0!==i?[{offset:0,opacity:"var(--backdrop-opacity)"},{offset:1-i,opacity:0},{offset:1,opacity:0}]:[{offset:0,opacity:"var(--backdrop-opacity)"},{offset:1,opacity:.01}]},E=e.querySelector("ion-content"),w=n.clientHeight;let c=o,_=0,j=!1;const y=r.childAnimations.find(D=>"wrapperAnimation"===D.id),g=r.childAnimations.find(D=>"backdropAnimation"===D.id),B=a[a.length-1],T=a[0],O=()=>{e.style.setProperty("pointer-events","auto"),t.style.setProperty("pointer-events","auto"),e.classList.remove("ion-disable-focus-trap")},G=()=>{e.style.setProperty("pointer-events","none"),t.style.setProperty("pointer-events","none"),e.classList.add("ion-disable-focus-trap")};y&&g&&(y.keyframes([...v.WRAPPER_KEYFRAMES]),g.keyframes([...v.BACKDROP_KEYFRAMES]),r.progressStart(!0,1-c),c>i?O():G()),E&&c!==B&&(E.scrollY=!1);const q=D=>{const{breakpoint:W,canDismiss:I,breakpointOffset:R}=D,H=I&&0===W,M=H?c:W,N=0!==M;return c=0,y&&g&&(y.keyframes([{offset:0,transform:`translateY(${100*R}%)`},{offset:1,transform:`translateY(${100*(1-M)}%)`}]),g.keyframes([{offset:0,opacity:`calc(var(--backdrop-opacity) * ${te(1-R,i)})`},{offset:1,opacity:`calc(var(--backdrop-opacity) * ${te(M,i)})`}]),r.progressStep(0)),ee.enable(!1),H?le(e,r):N||d(),new Promise(re=>{r.onFinish(()=>{N?y&&g?(0,m.r)(()=>{y.keyframes([...v.WRAPPER_KEYFRAMES]),g.keyframes([...v.BACKDROP_KEYFRAMES]),r.progressStart(!0,1-M),c=M,k(c),E&&c===a[a.length-1]&&(E.scrollY=!0),c>i?O():G(),ee.enable(!0),re()}):(ee.enable(!0),re()):re()},{oneTimeCallback:!0}).progressEnd(1,0,500)})},ee=(0,se.createGesture)({el:n,gestureName:"modalSheet",gesturePriority:40,direction:"y",threshold:10,canStart:D=>{const W=D.event.target.closest("ion-content");return c=s(),!(1===c&&W)},onStart:()=>{j=void 0!==e.canDismiss&&!0!==e.canDismiss&&0===T,E&&(E.scrollY=!1),(0,m.r)(()=>{e.focus()}),r.progressStart(!0,1-c)},onMove:D=>{const I=a.length>1?1-a[1]:void 0,R=1-c+D.deltaY/w,H=void 0!==I&&R>=I&&j,M=H?.95:.9999,N=H&&void 0!==I?I+ne((R-I)/(M-I)):R;_=(0,m.l)(1e-4,N,M),r.progressStep(_)},onEnd:D=>{const R=c-(D.deltaY+350*D.velocityY)/w,H=a.reduce((M,N)=>Math.abs(N-R)<Math.abs(M-R)?N:M);q({breakpoint:H,breakpointOffset:_,canDismiss:j})}});return{gesture:ee,moveSheetToBreakpoint:q}})(this.el,this.backdropEl,e,t,n,i,this.sortedBreakpoints,()=>{var s;return null!==(s=this.currentBreakpoint)&&void 0!==s?s:0},()=>this.sheetOnDismiss(),s=>{this.currentBreakpoint!==s&&(this.currentBreakpoint=s,this.ionBreakpointDidChange.emit({breakpoint:s}))});this.gesture=r,this.moveSheetToBreakpoint=a,this.gesture.enable(!0)}sheetOnDismiss(){var e=this;this.gestureAnimationDismissing=!0,this.animation.onFinish((0,A.Z)(function*(){e.currentBreakpoint=0,e.ionBreakpointDidChange.emit({breakpoint:e.currentBreakpoint}),yield e.dismiss(void 0,p.G),e.gestureAnimationDismissing=!1}))}dismiss(e,t){var n=this;return(0,A.Z)(function*(){var o;if(n.gestureAnimationDismissing&&t!==p.G||"handler"!==t&&!(yield n.checkCanDismiss(e,t)))return!1;const{presentingElement:i}=n;void 0!==i&&"ios"===(0,Y.b)(n)&&de(n.statusBarStyle),typeof window<"u"&&n.keyboardOpenCallback&&(window.removeEventListener(V.KEYBOARD_DID_OPEN,n.keyboardOpenCallback),n.keyboardOpenCallback=void 0),void 0!==n.currentTransition&&(yield n.currentTransition);const a=p.k.get(n)||[];n.currentTransition=(0,p.g)(n,e,t,"modalLeave",ue,Se,{presentingEl:i,currentBreakpoint:null!==(o=n.currentBreakpoint)&&void 0!==o?o:n.initialBreakpoint,backdropBreakpoint:n.backdropBreakpoint});const s=yield n.currentTransition;if(s){const{delegate:d}=n.getDelegate();yield(0,U.d)(d,n.usersElement),(0,f.w)(()=>n.el.classList.remove("show-modal")),n.animation&&n.animation.destroy(),n.gesture&&n.gesture.destroy(),a.forEach(k=>k.destroy())}return n.currentBreakpoint=void 0,n.currentTransition=void 0,n.animation=void 0,s})()}onDidDismiss(){return(0,p.h)(this.el,"ionModalDidDismiss")}onWillDismiss(){return(0,p.h)(this.el,"ionModalWillDismiss")}setCurrentBreakpoint(e){var t=this;return(0,A.Z)(function*(){if(!t.isSheetModal)return void(0,b.p)("setCurrentBreakpoint is only supported on sheet modals.");if(!t.breakpoints.includes(e))return void(0,b.p)(`Attempted to set invalid breakpoint value ${e}. Please double check that the breakpoint value is part of your defined breakpoints.`);const{currentBreakpoint:n,moveSheetToBreakpoint:o,canDismiss:i,breakpoints:r}=t;n!==e&&o&&(t.sheetTransition=o({breakpoint:e,breakpointOffset:1-n,canDismiss:void 0!==i&&!0!==i&&0===r[0]}),yield t.sheetTransition,t.sheetTransition=void 0)})()}getCurrentBreakpoint(){var e=this;return(0,A.Z)(function*(){return e.currentBreakpoint})()}moveToNextBreakpoint(){var e=this;return(0,A.Z)(function*(){const{breakpoints:t,currentBreakpoint:n}=e;if(!t||null==n)return!1;const o=t.filter(s=>0!==s),r=(o.indexOf(n)+1)%o.length,a=o[r];return yield e.setCurrentBreakpoint(a),!0})()}render(){const{handle:e,isSheetModal:t,presentingElement:n,htmlAttributes:o,handleBehavior:i,inheritedAttributes:r}=this,a=!1!==e&&t,s=(0,Y.b)(this),{modalId:d}=this,k=void 0!==n&&"ios"===s,S="cycle"===i;return(0,f.h)(f.H,Object.assign({"no-router":!0,tabindex:"-1"},o,{style:{zIndex:`${2e4+this.overlayIndex}`},class:Object.assign({[s]:!0,"modal-default":!k&&!t,"modal-card":k,"modal-sheet":t,"overlay-hidden":!0},(0,J.g)(this.cssClass)),id:d,onIonBackdropTap:this.onBackdropTap,onIonModalDidPresent:this.onLifecycle,onIonModalWillPresent:this.onLifecycle,onIonModalWillDismiss:this.onLifecycle,onIonModalDidDismiss:this.onLifecycle}),(0,f.h)("ion-backdrop",{ref:x=>this.backdropEl=x,visible:this.showBackdrop,tappable:this.backdropDismiss,part:"backdrop"}),"ios"===s&&(0,f.h)("div",{class:"modal-shadow"}),(0,f.h)("div",Object.assign({role:"dialog"},r,{"aria-modal":"true",class:"modal-wrapper ion-overlay-wrapper",part:"content",ref:x=>this.wrapperEl=x}),a&&(0,f.h)("button",{class:"modal-handle",tabIndex:S?0:-1,"aria-label":"Activate to adjust the size of the dialog overlaying the screen",onClick:S?this.onHandleClick:void 0,part:"handle"}),(0,f.h)("slot",null)))}get el(){return(0,f.f)(this)}static get watchers(){return{isOpen:["onIsOpenChange"],trigger:["triggerChanged"]}}},Ae={ionModalDidPresent:"ionViewDidEnter",ionModalWillPresent:"ionViewWillEnter",ionModalWillDismiss:"ionViewWillLeave",ionModalDidDismiss:"ionViewDidLeave"};var e;let Be=0;me.style={ios:':host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);border:0;background:var(--ion-color-step-350, #c0c0be);cursor:pointer;z-index:11}.modal-handle::before{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:4px;padding-bottom:4px;position:absolute;width:36px;height:5px;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);content:""}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.4)}:host(.modal-card),:host(.modal-sheet){--border-radius:10px}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:10px}}.modal-wrapper{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0)}@media screen and (max-width: 767px){@supports (width: max(0px, 1px)){:host(.modal-card){--height:calc(100% - max(30px, var(--ion-safe-area-top)) - 10px)}}@supports not (width: max(0px, 1px)){:host(.modal-card){--height:calc(100% - 40px)}}:host(.modal-card) .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl]):host(.modal-card) .modal-wrapper,:host-context([dir=rtl]).modal-card .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host(.modal-card){--backdrop-opacity:0;--width:100%;-ms-flex-align:end;align-items:flex-end}:host(.modal-card) .modal-shadow{display:none}:host(.modal-card) ion-backdrop{pointer-events:none}}@media screen and (min-width: 768px){:host(.modal-card){--width:calc(100% - 120px);--height:calc(100% - (120px + var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));--max-width:720px;--max-height:1000px;--backdrop-opacity:0;--box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1);-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out}:host(.modal-card) .modal-wrapper{-webkit-box-shadow:none;box-shadow:none}:host(.modal-card) .modal-shadow{-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}}:host(.modal-sheet) .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl]):host(.modal-sheet) .modal-wrapper,:host-context([dir=rtl]).modal-sheet .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}',md:':host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);border:0;background:var(--ion-color-step-350, #c0c0be);cursor:pointer;z-index:11}.modal-handle::before{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:4px;padding-bottom:4px;position:absolute;width:36px;height:5px;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);content:""}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:2px;--box-shadow:0 28px 48px rgba(0, 0, 0, 0.4)}}.modal-wrapper{-webkit-transform:translate3d(0,  40px,  0);transform:translate3d(0,  40px,  0);opacity:0.01}'}},2854:(ge,Z,u)=>{u.d(Z,{c:()=>Y,g:()=>U,h:()=>f,o:()=>V});var A=u(5861);const f=(b,l)=>null!==l.closest(b),Y=(b,l)=>"string"==typeof b&&b.length>0?Object.assign({"ion-color":!0,[`ion-color-${b}`]:!0},l):l,U=b=>{const l={};return(b=>void 0!==b?(Array.isArray(b)?b:b.split(" ")).filter(p=>null!=p).map(p=>p.trim()).filter(p=>""!==p):[])(b).forEach(p=>l[p]=!0),l},m=/^[a-z][a-z0-9+\-.]*:/,V=function(){var b=(0,A.Z)(function*(l,p,J,Q){if(null!=l&&"#"!==l[0]&&!m.test(l)){const h=document.querySelector("ion-router");if(h)return null!=p&&p.preventDefault(),h.push(l,J,Q)}return!1});return function(p,J,Q,h){return b.apply(this,arguments)}}()}}]);