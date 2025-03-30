import{cx as ao,cS as no,F as e,e as so,j as u,l as x,k as I,c as z,f as to,p as D,h as y,a1 as io,r as ho,A as go,B as V,Q as bo,t as Co,D as vo,z as U,E as d,cF as uo,G as po,H as fo,i as ko}from"./index-qr2Js23o.js";function N(l){return l.replace(/#|\(|\)|,|\s|\./g,"_")}function mo(l){const{textColor2:h,primaryColorHover:r,primaryColorPressed:p,primaryColor:a,infoColor:i,successColor:s,warningColor:n,errorColor:t,baseColor:f,borderColor:k,opacityDisabled:g,tagColor:C,closeIconColor:o,closeIconColorHover:c,closeIconColorPressed:v,borderRadiusSmall:b,fontSizeMini:m,fontSizeTiny:S,fontSizeSmall:B,fontSizeMedium:H,heightMini:$,heightTiny:R,heightSmall:_,heightMedium:M,closeColorHover:E,closeColorPressed:T,buttonColor2Hover:j,buttonColor2Pressed:O,fontWeightStrong:W}=l;return Object.assign(Object.assign({},no),{closeBorderRadius:b,heightTiny:$,heightSmall:R,heightMedium:_,heightLarge:M,borderRadius:b,opacityDisabled:g,fontSizeTiny:m,fontSizeSmall:S,fontSizeMedium:B,fontSizeLarge:H,fontWeightStrong:W,textColorCheckable:h,textColorHoverCheckable:h,textColorPressedCheckable:h,textColorChecked:f,colorCheckable:"#0000",colorHoverCheckable:j,colorPressedCheckable:O,colorChecked:a,colorCheckedHover:r,colorCheckedPressed:p,border:`1px solid ${k}`,textColor:h,color:C,colorBordered:"rgb(250, 250, 252)",closeIconColor:o,closeIconColorHover:c,closeIconColorPressed:v,closeColorHover:E,closeColorPressed:T,borderPrimary:`1px solid ${e(a,{alpha:.3})}`,textColorPrimary:a,colorPrimary:e(a,{alpha:.12}),colorBorderedPrimary:e(a,{alpha:.1}),closeIconColorPrimary:a,closeIconColorHoverPrimary:a,closeIconColorPressedPrimary:a,closeColorHoverPrimary:e(a,{alpha:.12}),closeColorPressedPrimary:e(a,{alpha:.18}),borderInfo:`1px solid ${e(i,{alpha:.3})}`,textColorInfo:i,colorInfo:e(i,{alpha:.12}),colorBorderedInfo:e(i,{alpha:.1}),closeIconColorInfo:i,closeIconColorHoverInfo:i,closeIconColorPressedInfo:i,closeColorHoverInfo:e(i,{alpha:.12}),closeColorPressedInfo:e(i,{alpha:.18}),borderSuccess:`1px solid ${e(s,{alpha:.3})}`,textColorSuccess:s,colorSuccess:e(s,{alpha:.12}),colorBorderedSuccess:e(s,{alpha:.1}),closeIconColorSuccess:s,closeIconColorHoverSuccess:s,closeIconColorPressedSuccess:s,closeColorHoverSuccess:e(s,{alpha:.12}),closeColorPressedSuccess:e(s,{alpha:.18}),borderWarning:`1px solid ${e(n,{alpha:.35})}`,textColorWarning:n,colorWarning:e(n,{alpha:.15}),colorBorderedWarning:e(n,{alpha:.12}),closeIconColorWarning:n,closeIconColorHoverWarning:n,closeIconColorPressedWarning:n,closeColorHoverWarning:e(n,{alpha:.12}),closeColorPressedWarning:e(n,{alpha:.18}),borderError:`1px solid ${e(t,{alpha:.23})}`,textColorError:t,colorError:e(t,{alpha:.1}),colorBorderedError:e(t,{alpha:.08}),closeIconColorError:t,closeIconColorHoverError:t,closeIconColorPressedError:t,closeColorHoverError:e(t,{alpha:.12}),closeColorPressedError:e(t,{alpha:.18})})}const xo={common:ao,self:mo},yo={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},Po=so("tag",`
 --n-close-margin: var(--n-close-margin-top) var(--n-close-margin-right) var(--n-close-margin-bottom) var(--n-close-margin-left);
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[u("strong",`
 font-weight: var(--n-font-weight-strong);
 `),x("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),x("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),x("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),x("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),u("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[x("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),x("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),u("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),u("icon, avatar",[u("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),u("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),u("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[I("disabled",[z("&:hover","background-color: var(--n-color-hover-checkable);",[I("checked","color: var(--n-text-color-hover-checkable);")]),z("&:active","background-color: var(--n-color-pressed-checkable);",[I("checked","color: var(--n-text-color-pressed-checkable);")])]),u("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[I("disabled",[z("&:hover","background-color: var(--n-color-checked-hover);"),z("&:active","background-color: var(--n-color-checked-pressed);")])])])]),Io=Object.assign(Object.assign(Object.assign({},V.props),yo),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),zo=ko("n-tag"),Bo=to({name:"Tag",props:Io,slots:Object,setup(l){const h=ho(null),{mergedBorderedRef:r,mergedClsPrefixRef:p,inlineThemeDisabled:a,mergedRtlRef:i}=go(l),s=V("Tag","-tag",Po,xo,l,p);bo(zo,{roundRef:Co(l,"round")});function n(){if(!l.disabled&&l.checkable){const{checked:o,onCheckedChange:c,onUpdateChecked:v,"onUpdate:checked":b}=l;v&&v(!o),b&&b(!o),c&&c(!o)}}function t(o){if(l.triggerClickOnClose||o.stopPropagation(),!l.disabled){const{onClose:c}=l;c&&fo(c,o)}}const f={setTextContent(o){const{value:c}=h;c&&(c.textContent=o)}},k=vo("Tag",i,p),g=U(()=>{const{type:o,size:c,color:{color:v,textColor:b}={}}=l,{common:{cubicBezierEaseInOut:m},self:{padding:S,closeMargin:B,borderRadius:H,opacityDisabled:$,textColorCheckable:R,textColorHoverCheckable:_,textColorPressedCheckable:M,textColorChecked:E,colorCheckable:T,colorHoverCheckable:j,colorPressedCheckable:O,colorChecked:W,colorCheckedHover:K,colorCheckedPressed:L,closeBorderRadius:A,fontWeightStrong:G,[d("colorBordered",o)]:Q,[d("closeSize",c)]:q,[d("closeIconSize",c)]:J,[d("fontSize",c)]:X,[d("height",c)]:w,[d("color",o)]:Y,[d("textColor",o)]:Z,[d("border",o)]:oo,[d("closeIconColor",o)]:F,[d("closeIconColorHover",o)]:eo,[d("closeIconColorPressed",o)]:ro,[d("closeColorHover",o)]:lo,[d("closeColorPressed",o)]:co}}=s.value,P=uo(B);return{"--n-font-weight-strong":G,"--n-avatar-size-override":`calc(${w} - 8px)`,"--n-bezier":m,"--n-border-radius":H,"--n-border":oo,"--n-close-icon-size":J,"--n-close-color-pressed":co,"--n-close-color-hover":lo,"--n-close-border-radius":A,"--n-close-icon-color":F,"--n-close-icon-color-hover":eo,"--n-close-icon-color-pressed":ro,"--n-close-icon-color-disabled":F,"--n-close-margin-top":P.top,"--n-close-margin-right":P.right,"--n-close-margin-bottom":P.bottom,"--n-close-margin-left":P.left,"--n-close-size":q,"--n-color":v||(r.value?Q:Y),"--n-color-checkable":T,"--n-color-checked":W,"--n-color-checked-hover":K,"--n-color-checked-pressed":L,"--n-color-hover-checkable":j,"--n-color-pressed-checkable":O,"--n-font-size":X,"--n-height":w,"--n-opacity-disabled":$,"--n-padding":S,"--n-text-color":b||Z,"--n-text-color-checkable":R,"--n-text-color-checked":E,"--n-text-color-hover-checkable":_,"--n-text-color-pressed-checkable":M}}),C=a?po("tag",U(()=>{let o="";const{type:c,size:v,color:{color:b,textColor:m}={}}=l;return o+=c[0],o+=v[0],b&&(o+=`a${N(b)}`),m&&(o+=`b${N(m)}`),r.value&&(o+="c"),o}),g,l):void 0;return Object.assign(Object.assign({},f),{rtlEnabled:k,mergedClsPrefix:p,contentRef:h,mergedBordered:r,handleClick:n,handleCloseClick:t,cssVars:a?void 0:g,themeClass:C==null?void 0:C.themeClass,onRender:C==null?void 0:C.onRender})},render(){var l,h;const{mergedClsPrefix:r,rtlEnabled:p,closable:a,color:{borderColor:i}={},round:s,onRender:n,$slots:t}=this;n==null||n();const f=D(t.avatar,g=>g&&y("div",{class:`${r}-tag__avatar`},g)),k=D(t.icon,g=>g&&y("div",{class:`${r}-tag__icon`},g));return y("div",{class:[`${r}-tag`,this.themeClass,{[`${r}-tag--rtl`]:p,[`${r}-tag--strong`]:this.strong,[`${r}-tag--disabled`]:this.disabled,[`${r}-tag--checkable`]:this.checkable,[`${r}-tag--checked`]:this.checkable&&this.checked,[`${r}-tag--round`]:s,[`${r}-tag--avatar`]:f,[`${r}-tag--icon`]:k,[`${r}-tag--closable`]:a}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},k||f,y("span",{class:`${r}-tag__content`,ref:"contentRef"},(h=(l=this.$slots).default)===null||h===void 0?void 0:h.call(l)),!this.checkable&&a?y(io,{clsPrefix:r,class:`${r}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:s,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?y("div",{class:`${r}-tag__border`,style:{borderColor:i}}):null)}});export{Bo as _,N as c,zo as t};
