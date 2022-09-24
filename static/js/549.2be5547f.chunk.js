"use strict";(self.webpackChunkpaleosoil=self.webpackChunkpaleosoil||[]).push([[549],{6928:function(e,o,r){r.r(o),r.d(o,{default:function(){return S}});var l=r(2791),i=r(5705),a=r(6151),n=r(2078),t=n.Ry().shape({id:n.Rx().required(),settlement:n.Z_().required(),district:n.Z_().required(),region:n.Z_().oneOf(["\u0410\u0420 \u041a\u0440\u0438\u043c","\u0412\u0456\u043d\u043d\u0438\u0446\u044c\u043a\u0430","\u0412\u043e\u043b\u0438\u043d\u0441\u044c\u043a\u0430","\u0414\u043d\u0456\u043f\u0440\u043e\u043f\u0435\u0442\u0440\u043e\u0432\u0441\u044c\u043a\u0430","\u0414\u043e\u043d\u0435\u0446\u044c\u043a\u0430","\u0416\u0438\u0442\u043e\u043c\u0438\u0440\u0441\u044c\u043a\u0430","\u0417\u0430\u043a\u0430\u0440\u043f\u0430\u0442\u0441\u044c\u043a\u0430","\u0417\u0430\u043f\u043e\u0440\u0456\u0437\u044c\u043a\u0430","\u0406\u0432\u0430\u043d\u043e-\u0424\u0440\u0430\u043d\u043a\u0456\u0432\u0441\u044c\u043a\u0430","\u041a\u0438\u0457\u0432\u0441\u044c\u043a\u0430","\u041a\u0456\u0440\u043e\u0432\u043e\u0433\u0440\u0430\u0434\u0441\u044c\u043a\u0430","\u041b\u0443\u0433\u0430\u043d\u0441\u044c\u043a\u0430","\u041b\u044c\u0432\u0456\u0432\u0441\u044c\u043a\u0430","\u041c\u0438\u043a\u043e\u043b\u0430\u0457\u0432\u0441\u044c\u043a\u0430","\u041e\u0434\u0435\u0441\u044c\u043a\u0430","\u041f\u043e\u043b\u0442\u0430\u0432\u0441\u044c\u043a\u0430","\u0420\u0456\u0432\u043d\u0435\u043d\u0441\u044c\u043a\u0430","\u0421\u0443\u043c\u0441\u044c\u043a\u0430","\u0422\u0435\u0440\u043d\u043e\u043f\u0456\u043b\u044c\u0441\u044c\u043a\u0430","\u0425\u0430\u0440\u043a\u0456\u0432\u0441\u044c\u043a\u0430","\u0425\u0435\u0440\u0441\u043e\u043d\u0441\u044c\u043a\u0430","\u0425\u043c\u0435\u043b\u044c\u043d\u0438\u0446\u044c\u043a\u0430","\u0427\u0435\u0440\u043a\u0430\u0441\u044c\u043a\u0430","\u0427\u0435\u0440\u043d\u0456\u0432\u0435\u0446\u044c\u043a\u0430","\u0427\u0435\u0440\u043d\u0456\u0433\u0456\u0432\u0441\u044c\u043a\u0430","\u043c. \u041a\u0438\u0457\u0432","\u043c. \u0421\u0435\u0432\u0430\u0441\u0442\u043e\u043f\u043e\u043b\u044c"]).required(),x:n.Rx("").min(4).required(),y:n.Rx("").min(4).required(),natural_zones:n.Z_().oneOf(["\u041a\u0430\u0440\u043f\u0430\u0442\u0441\u044c\u043a\u0430 \u0433\u0456\u0440\u0441\u044c\u043a\u0430 \u043a\u0440\u0430\u0457\u043d\u0430","\u041c\u0456\u0448\u0430\u043d\u0456 \u043b\u0456\u0441\u0438","\u0428\u0438\u0440\u043e\u043a\u043e\u043b\u0438\u0441\u0442\u044f\u043d\u0456 \u043b\u0456\u0441\u0438","\u041b\u0456\u0441\u043e\u0441\u0442\u0435\u043f","\u0421\u0442\u0435\u043f","\u041a\u0430\u0432\u043a\u0430\u0437\u044c\u043a\u043e-\u041a\u0440\u0438\u043c\u0441\u044c\u043a\u0430 \u0433\u0456\u0440\u0441\u044c\u043a\u0430 \u043a\u0440\u0430\u0457\u043d\u0430"]).required(),physiographical_l:n.Z_().oneOf(["\u041f\u043e\u043b\u0456\u0441\u044c\u043a\u0438\u0439","\u0417\u0430\u0445\u0456\u0434\u043d\u043e\u0443\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0438\u0439","\u0421\u0445\u0456\u0434\u043d\u043e\u0443\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0438\u0439","\u041f\u043e\u0434\u0456\u043b\u044c\u0441\u044c\u043a\u043e-\u041f\u0440\u0438\u0434\u043d\u0456\u043f\u0440\u043e\u0432\u0441\u044c\u043a\u0438\u0439","\u041b\u0456\u0432\u043e\u0431\u0435\u0440\u0435\u0436\u043d\u043e\u0434\u043d\u0456\u043f\u0440\u043e\u0432\u0441\u044c\u043a\u0438\u0439","\u0414\u043d\u0456\u0441\u0442\u0440\u043e\u0432\u0441\u044c\u043a\u043e-\u0414\u043d\u0456\u043f\u0440\u043e\u0432\u0441\u044c\u043a\u0438\u0439","\u041b\u0456\u0432\u043e\u0431\u0435\u0440\u0435\u0436\u043d\u043e\u0434\u043d\u0456\u043f\u0440\u043e\u0432\u0441\u044c\u043a\u043e-\u041f\u0440\u0438\u0430\u0437\u043e\u0432\u0441\u044c\u043a\u0438\u0439","\u0414\u043e\u043d\u0435\u0446\u044c\u043a\u0438\u0439","\u041b\u0456\u0432\u043e\u0431\u0435\u0440\u0435\u0436\u043d\u043e\u0434\u043d\u0456\u043f\u0440\u043e\u0432\u0441\u044c\u043a\u0438\u0439","\u0417\u0430\u0434\u043e\u043d\u0435\u0446\u044c\u043a\u043e-\u0414\u043e\u043d\u0441\u044c\u043a\u0438\u0439","\u041f\u0440\u0438\u0447\u043e\u0440\u043d\u043e\u043c\u043e\u0440\u0441\u044c\u043a\u0438\u0439 \u0441\u0435\u0440\u0435\u0434\u043d\u044c\u043e\u0441\u0442\u0435\u043f\u043e\u0432\u0438\u0439","\u041f\u0440\u0438\u0447\u043e\u0440\u043d\u043e\u043c\u043e\u0440\u0441\u044c\u043a\u043e-\u041f\u0440\u0438\u0430\u0437\u043e\u0432\u0441\u044c\u043a\u0438\u0439","\u041a\u0440\u0438\u043c\u0441\u044c\u043a\u0438\u0439 \u0441\u0442\u0435\u043f\u043e\u0432\u0438\u0439","\u0413\u0456\u0440\u0441\u044c\u043a\u0438\u0439 \u043a\u0440\u0430\u0439 - \u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0456 \u041a\u0430\u0440\u043f\u0430\u0442\u0438","\u041a\u0440\u0438\u043c\u0441\u044c\u043a\u0438\u0439 \u0433\u0456\u0440\u0441\u044c\u043a\u0438\u0439 \u043a\u0440\u0430\u0439"]).required(),locality:n.Z_().required(),object:n.Z_().required(),researcher:n.Z_().required(),year:n.Rx("").min(4).required(),research_methods:n.Z_().required(),modern_soil:n.Z_().required(),soil_m:n.Rx(""),buried_soil:n.Z_().required(),paleosoil_m:n.Rx(""),period_holocene:n.Z_().oneOf(["AL - Allerod","AT - Atlantic","BL - Bolling","\u0412\u041e - Boreal","PB - Preboreal","SA - Subatlantic","SB - Subboreal"]).required(),arch_dating:n.Z_().required(),references:n.Z_().required(),pdf:n.Z_(),foto:n.Z_(),small_foto:n.Z_()}),s=r(8489),c=r(3430),h=r(3738),p=r(3329),d=["label"],u=function(e){var o=e.label,r=(0,h.Z)(e,d),l=(0,i.U$)(r),a=(0,c.Z)(l,2),n=a[0],t=a[1];return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("label",{children:o}),(0,p.jsx)("input",(0,s.Z)((0,s.Z)((0,s.Z)({},n),r),{},{className:t.touched&&t.error?"input-error":""})),t.touched&&t.error&&(0,p.jsx)("div",{className:"error",children:t.error})]})},x=["label"],j=function(e){var o=e.label,r=(0,h.Z)(e,x),l=(0,i.U$)(r),a=(0,c.Z)(l,2),n=a[0],t=a[1];return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("label",{children:o}),(0,p.jsx)("select",(0,s.Z)((0,s.Z)((0,s.Z)({},n),r),{},{className:t.touched&&t.error?"input-error":""})),t.touched&&t.error&&(0,p.jsx)("div",{className:"error",children:t.error})]})},m=r(9434),v=r(6797),g=function(){var e=(0,m.v9)(v.Yy),o=(0,m.I0)();(0,l.useEffect)((function(){o((0,v.jr)())}),[o]),console.log(e.length);var r=e.length+1;return(0,p.jsx)(i.J9,{initialValues:{id:r,settlement:"",district:"",region:"",x:"",y:"",natural_zones:"",physiographical_l:"",locality:"",object:"",researcher:"",year:"",research_methods:"",modern_soil:"",soil_m:"",buried_soil:"",paleosoil_m:"",period_holocene:"",arch_dating:"",references:"",pdf:"",foto:"",small_foto:""},validationSchema:t,onSubmit:function(e,r){setTimeout((function(){o((0,v.lT)(e)),r.setSubmitting(!1),r.resetForm()}),1e3)},children:function(e){var o=e.isSubmitting;return(0,p.jsxs)(i.l0,{children:[(0,p.jsx)(u,{label:"\u041f\u043e\u0441\u0435\u043b\u0435\u043d\u043d\u044f",name:"settlement",type:"string",placeholder:"Settlement near the research object. Example: Storozhove"}),(0,p.jsx)(u,{label:"\u0420\u0430\u0439\u043e\u043d",name:"district",type:"string",placeholder:"District the research object. Example: Buchanskyi"}),(0,p.jsxs)(j,{label:"\u041e\u0431\u043b\u0430\u0441\u0442\u044c",name:"region",placeholder:"",children:[(0,p.jsx)("option",{value:"",children:"- - - - "}),(0,p.jsx)("option",{value:"\u0410\u0420 \u041a\u0440\u0438\u043c",children:"\u0410\u0420 \u041a\u0440\u0438\u043c"}),(0,p.jsx)("option",{value:"\u0412\u0456\u043d\u043d\u0438\u0446\u044c\u043a\u0430",children:"\u0412\u0456\u043d\u043d\u0438\u0446\u044c\u043a\u0430"}),(0,p.jsx)("option",{value:"\u0412\u043e\u043b\u0438\u043d\u0441\u044c\u043a\u0430",children:"\u0412\u043e\u043b\u0438\u043d\u0441\u044c\u043a\u0430"}),(0,p.jsx)("option",{value:"\u0414\u043d\u0456\u043f\u0440\u043e\u043f\u0435\u0442\u0440\u043e\u0432\u0441\u044c\u043a\u0430",children:"\u0414\u043d\u0456\u043f\u0440\u043e\u043f\u0435\u0442\u0440\u043e\u0432\u0441\u044c\u043a\u0430"}),(0,p.jsx)("option",{value:"\u0414\u043e\u043d\u0435\u0446\u044c\u043a\u0430",children:"\u0414\u043e\u043d\u0435\u0446\u044c\u043a\u0430"}),(0,p.jsx)("option",{value:"\u0416\u0438\u0442\u043e\u043c\u0438\u0440\u0441\u044c\u043a\u0430",children:"\u0416\u0438\u0442\u043e\u043c\u0438\u0440\u0441\u044c\u043a\u0430"}),(0,p.jsx)("option",{value:"\u0417\u0430\u043a\u0430\u0440\u043f\u0430\u0442\u0441\u044c\u043a\u0430",children:"\u0417\u0430\u043a\u0430\u0440\u043f\u0430\u0442\u0441\u044c\u043a\u0430"}),(0,p.jsx)("option",{value:"\u0417\u0430\u043f\u043e\u0440\u0456\u0437\u044c\u043a\u0430",children:"\u0417\u0430\u043f\u043e\u0440\u0456\u0437\u044c\u043a\u0430"}),(0,p.jsx)("option",{value:"\u0406\u0432\u0430\u043d\u043e-\u0424\u0440\u0430\u043d\u043a\u0456\u0432\u0441\u044c\u043a\u0430",children:"\u0406\u0432\u0430\u043d\u043e-\u0424\u0440\u0430\u043d\u043a\u0456\u0432\u0441\u044c\u043a\u0430"}),(0,p.jsx)("option",{value:"\u041a\u0438\u0457\u0432\u0441\u044c\u043a\u0430",children:"\u041a\u0438\u0457\u0432\u0441\u044c\u043a\u0430"}),(0,p.jsx)("option",{value:"\u041a\u0456\u0440\u043e\u0432\u043e\u0433\u0440\u0430\u0434\u0441\u044c\u043a\u0430",children:"\u041a\u0456\u0440\u043e\u0432\u043e\u0433\u0440\u0430\u0434\u0441\u044c\u043a\u0430"}),(0,p.jsx)("option",{value:"\u041b\u0443\u0433\u0430\u043d\u0441\u044c\u043a\u0430",children:"\u041b\u0443\u0433\u0430\u043d\u0441\u044c\u043a\u0430"}),(0,p.jsx)("option",{value:"\u041b\u044c\u0432\u0456\u0432\u0441\u044c\u043a\u0430",children:"\u041b\u044c\u0432\u0456\u0432\u0441\u044c\u043a\u0430"}),(0,p.jsx)("option",{value:"\u041c\u0438\u043a\u043e\u043b\u0430\u0457\u0432\u0441\u044c\u043a\u0430",children:"\u041c\u0438\u043a\u043e\u043b\u0430\u0457\u0432\u0441\u044c\u043a\u0430"}),(0,p.jsx)("option",{value:"\u041e\u0434\u0435\u0441\u044c\u043a\u0430",children:"\u041e\u0434\u0435\u0441\u044c\u043a\u0430"}),(0,p.jsx)("option",{value:"\u041f\u043e\u043b\u0442\u0430\u0432\u0441\u044c\u043a\u0430",children:"\u041f\u043e\u043b\u0442\u0430\u0432\u0441\u044c\u043a\u0430"}),(0,p.jsx)("option",{value:"\u0420\u0456\u0432\u043d\u0435\u043d\u0441\u044c\u043a\u0430",children:"\u0420\u0456\u0432\u043d\u0435\u043d\u0441\u044c\u043a\u0430"}),(0,p.jsx)("option",{value:"\u0421\u0443\u043c\u0441\u044c\u043a\u0430",children:"\u0421\u0443\u043c\u0441\u044c\u043a\u0430"}),(0,p.jsx)("option",{value:"\u0422\u0435\u0440\u043d\u043e\u043f\u0456\u043b\u044c\u0441\u044c\u043a\u0430",children:"\u0422\u0435\u0440\u043d\u043e\u043f\u0456\u043b\u044c\u0441\u044c\u043a\u0430"}),(0,p.jsx)("option",{value:"\u0425\u0430\u0440\u043a\u0456\u0432\u0441\u044c\u043a\u0430",children:"\u0425\u0430\u0440\u043a\u0456\u0432\u0441\u044c\u043a\u0430"}),(0,p.jsx)("option",{value:"\u0425\u0435\u0440\u0441\u043e\u043d\u0441\u044c\u043a\u0430",children:"\u0425\u0435\u0440\u0441\u043e\u043d\u0441\u044c\u043a\u0430"}),(0,p.jsx)("option",{value:"\u0425\u043c\u0435\u043b\u044c\u043d\u0438\u0446\u044c\u043a\u0430",children:"\u0425\u043c\u0435\u043b\u044c\u043d\u0438\u0446\u044c\u043a\u0430"}),(0,p.jsx)("option",{value:"\u0427\u0435\u0440\u043a\u0430\u0441\u044c\u043a\u0430",children:"\u0427\u0435\u0440\u043a\u0430\u0441\u044c\u043a\u0430"}),(0,p.jsx)("option",{value:"\u0427\u0435\u0440\u043d\u0456\u0432\u0435\u0446\u044c\u043a\u0430",children:"\u0427\u0435\u0440\u043d\u0456\u0432\u0435\u0446\u044c\u043a\u0430"}),(0,p.jsx)("option",{value:"\u0427\u0435\u0440\u043d\u0456\u0433\u0456\u0432\u0441\u044c\u043a\u0430",children:"\u0427\u0435\u0440\u043d\u0456\u0433\u0456\u0432\u0441\u044c\u043a\u0430"}),(0,p.jsx)("option",{value:"\u043c. \u041a\u0438\u0457\u0432",children:"\u043c. \u041a\u0438\u0457\u0432"}),(0,p.jsx)("option",{value:"\u043c. \u0421\u0435\u0432\u0430\u0441\u0442\u043e\u043f\u043e\u043b\u044c",children:"\u043c. \u0421\u0435\u0432\u0430\u0441\u0442\u043e\u043f\u043e\u043b\u044c"})]}),(0,p.jsx)(u,{label:"Longitude",name:"x",type:"string",placeholder:"Longitude of object WGS-84. Example: 49.877565"}),(0,p.jsx)(u,{label:"Latitude",name:"y",type:"string",placeholder:"Latitude of object WGS-84. Example: 32.809059"}),(0,p.jsxs)(j,{label:"Natural zones",name:"natural_zones",placeholder:"",children:[(0,p.jsx)("option",{value:"",children:"- - - - "}),(0,p.jsx)("option",{value:"\u041c\u0456\u0448\u0430\u043d\u0456 \u043b\u0456\u0441\u0438",children:"\u0417\u043e\u043d\u0430 \u043c\u0456\u0448\u0430\u043d\u0438\u0445 \u043b\u0456\u0441\u0456\u0432"}),(0,p.jsx)("option",{value:"\u0428\u0438\u0440\u043e\u043a\u043e\u043b\u0438\u0441\u0442\u044f\u043d\u0456 \u043b\u0456\u0441\u0438",children:"\u0417\u043e\u043d\u0430 \u0448\u0438\u0440\u043e\u043a\u043e\u043b\u0438\u0441\u0442\u044f\u043d\u0438\u0445 \u043b\u0456\u0441\u0456\u0432"}),(0,p.jsx)("option",{value:"\u041b\u0456\u0441\u043e\u0441\u0442\u0435\u043f",children:"\u041b\u0456\u0441\u043e\u0441\u0442\u0435\u043f\u043e\u0432\u0430 \u0437\u043e\u043d\u0430"}),(0,p.jsx)("option",{value:"\u0421\u0442\u0435\u043f",children:"\u0421\u0442\u0435\u043f\u043e\u0432\u0430 \u0437\u043e\u043d\u0430"}),(0,p.jsx)("option",{value:"\u041a\u0430\u0440\u043f\u0430\u0442\u0441\u044c\u043a\u0430 \u0433\u0456\u0440\u0441\u044c\u043a\u0430 \u043a\u0440\u0430\u0457\u043d\u0430",children:"\u041a\u0430\u0440\u043f\u0430\u0442\u0441\u044c\u043a\u0430 \u0433\u0456\u0440\u0441\u044c\u043a\u0430 \u043a\u0440\u0430\u0457\u043d\u0430"}),(0,p.jsx)("option",{value:"\u041a\u0430\u0432\u043a\u0430\u0437\u044c\u043a\u043e-\u041a\u0440\u0438\u043c\u0441\u044c\u043a\u0430 \u0433\u0456\u0440\u0441\u044c\u043a\u0430 \u043a\u0440\u0430\u0457\u043d\u0430",children:"\u041a\u0430\u0432\u043a\u0430\u0437\u044c\u043a\u043e-\u041a\u0440\u0438\u043c\u0441\u044c\u043a\u0430 \u0433\u0456\u0440\u0441\u044c\u043a\u0430 \u043a\u0440\u0430\u0457\u043d\u0430"})]}),(0,p.jsxs)(j,{label:"Physiographical Lands",name:"physiographical_l",placeholder:"",children:[(0,p.jsx)("option",{value:"",children:"- - - - "}),(0,p.jsx)("option",{value:"\u041f\u043e\u043b\u0456\u0441\u044c\u043a\u0438\u0439",children:"\u041f\u043e\u043b\u0456\u0441\u044c\u043a\u0438\u0439 \u043a\u0440\u0430\u0439"}),(0,p.jsx)("option",{value:"\u0417\u0430\u0445\u0456\u0434\u043d\u043e\u0443\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0438\u0439",children:"\u0417\u0430\u0445\u0456\u0434\u043d\u043e\u0443\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0438\u0439 \u043a\u0440\u0430\u0439"}),(0,p.jsx)("option",{value:"\u041f\u043e\u0434\u0456\u043b\u044c\u0441\u044c\u043a\u043e-\u041f\u0440\u0438\u0434\u043d\u0456\u043f\u0440\u043e\u0432\u0441\u044c\u043a\u0438\u0439",children:"\u041f\u043e\u0434\u0456\u043b\u044c\u0441\u044c\u043a\u043e-\u041f\u0440\u0438\u0434\u043d\u0456\u043f\u0440\u043e\u0432\u0441\u044c\u043a\u0438\u0439 \u043a\u0440\u0430\u0439"}),(0,p.jsx)("option",{value:"\u0421\u0445\u0456\u0434\u043d\u043e\u0443\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0438\u0439",children:"\u0421\u0445\u0456\u0434\u043d\u043e\u0443\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0438\u0439 \u043a\u0440\u0430\u0439"}),(0,p.jsx)("option",{value:"\u041b\u0456\u0432\u043e\u0431\u0435\u0440\u0435\u0436\u043d\u043e\u0434\u043d\u0456\u043f\u0440\u043e\u0432\u0441\u044c\u043a\u0438\u0439",children:"\u041b\u0456\u0432\u043e\u0431\u0435\u0440\u0435\u0436\u043d\u043e\u0434\u043d\u0456\u043f\u0440\u043e\u0432\u0441\u044c\u043a\u0438\u0439 \u043a\u0440\u0430\u0439"}),(0,p.jsx)("option",{value:"\u0414\u043d\u0456\u0441\u0442\u0440\u043e\u0432\u0441\u044c\u043a\u043e-\u0414\u043d\u0456\u043f\u0440\u043e\u0432\u0441\u044c\u043a\u0438\u0439",children:"\u0414\u043d\u0456\u0441\u0442\u0440\u043e\u0432\u0441\u044c\u043a\u043e-\u0414\u043d\u0456\u043f\u0440\u043e\u0432\u0441\u044c\u043a\u0438\u0439 \u043a\u0440\u0430\u0439"}),(0,p.jsx)("option",{value:"\u041b\u0456\u0432\u043e\u0431\u0435\u0440\u0435\u0436\u043d\u043e\u0434\u043d\u0456\u043f\u0440\u043e\u0432\u0441\u044c\u043a\u043e-\u041f\u0440\u0438\u0430\u0437\u043e\u0432\u0441\u044c\u043a\u0438\u0439",children:"\u041b\u0456\u0432\u043e\u0431\u0435\u0440\u0435\u0436\u043d\u043e\u0434\u043d\u0456\u043f\u0440\u043e\u0432\u0441\u044c\u043a\u043e-\u041f\u0440\u0438\u0430\u0437\u043e\u0432\u0441\u044c\u043a\u0438\u0439 \u043a\u0440\u0430\u0439"}),(0,p.jsx)("option",{value:"\u0414\u043e\u043d\u0435\u0446\u044c\u043a\u0438\u0439",children:"\u0414\u043e\u043d\u0435\u0446\u044c\u043a\u0438\u0439 \u043a\u0440\u0430\u0439"}),(0,p.jsx)("option",{value:"\u0417\u0430\u0434\u043e\u043d\u0435\u0446\u044c\u043a\u043e-\u0414\u043e\u043d\u0441\u044c\u043a\u0438\u0439",children:"\u0417\u0430\u0434\u043e\u043d\u0435\u0446\u044c\u043a\u043e-\u0414\u043e\u043d\u0441\u044c\u043a\u0438\u0439 \u043a\u0440\u0430\u0439"}),(0,p.jsx)("option",{value:"\u041f\u0440\u0438\u0447\u043e\u0440\u043d\u043e\u043c\u043e\u0440\u0441\u044c\u043a\u0438\u0439 \u0441\u0435\u0440\u0435\u0434\u043d\u044c\u043e\u0441\u0442\u0435\u043f\u043e\u0432\u0438\u0439",children:"\u041f\u0440\u0438\u0447\u043e\u0440\u043d\u043e\u043c\u043e\u0440\u0441\u044c\u043a\u0438\u0439 \u0441\u0435\u0440\u0435\u0434\u043d\u044c\u043e\u0441\u0442\u0435\u043f\u043e\u0432\u0438\u0439 \u043a\u0440\u0430\u0439"}),(0,p.jsx)("option",{value:"\u041f\u0440\u0438\u0447\u043e\u0440\u043d\u043e\u043c\u043e\u0440\u0441\u044c\u043a\u043e-\u041f\u0440\u0438\u0430\u0437\u043e\u0432\u0441\u044c\u043a\u0438\u0439",children:"\u041f\u0440\u0438\u0447\u043e\u0440\u043d\u043e\u043c\u043e\u0440\u0441\u044c\u043a\u043e-\u041f\u0440\u0438\u0430\u0437\u043e\u0432\u0441\u044c\u043a\u0438\u0439 \u043a\u0440\u0430\u0439"}),(0,p.jsx)("option",{value:"\u041a\u0440\u0438\u043c\u0441\u044c\u043a\u0438\u0439 \u0441\u0442\u0435\u043f\u043e\u0432\u0438\u0439",children:"\u041a\u0440\u0438\u043c\u0441\u044c\u043a\u0438\u0439 \u0441\u0442\u0435\u043f\u043e\u0432\u0438\u0439 \u043a\u0440\u0430\u0439"}),(0,p.jsx)("option",{value:"\u0413\u0456\u0440\u0441\u044c\u043a\u0438\u0439 \u043a\u0440\u0430\u0439 - \u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0456 \u041a\u0430\u0440\u043f\u0430\u0442\u0438",children:"\u0413\u0456\u0440\u0441\u044c\u043a\u0438\u0439 \u043a\u0440\u0430\u0439 - \u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0456 \u041a\u0430\u0440\u043f\u0430\u0442\u0438"}),(0,p.jsx)("option",{value:"\u041a\u0440\u0438\u043c\u0441\u044c\u043a\u0438\u0439 \u0433\u0456\u0440\u0441\u044c\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",children:"\u041a\u0440\u0438\u043c\u0441\u044c\u043a\u0438\u0439 \u0433\u0456\u0440\u0441\u044c\u043a\u0438\u0439 \u043a\u0440\u0430\u0439"})]}),(0,p.jsx)(u,{label:"Locality (natural / historical)",name:"locality",type:"string",placeholder:"Locality (natural / historical) of object. Example: Storozhove  mound complex"}),(0,p.jsx)(u,{label:"Object (natural / historical)",name:"object",type:"string",placeholder:"Object (natural / historical) of the research object. Example: Rampart of the Eastern hillfort"}),(0,p.jsx)(u,{label:"Researcher",name:"researcher",type:"string",placeholder:"Researcher or researchers. Example: Doroshkevych Serhii, Kushnir Anatolii"}),(0,p.jsx)(u,{label:"Year of research",name:"year",type:"number",placeholder:"Year the research object. Example: 2022"}),(0,p.jsx)(u,{label:"Research methods used",name:"research_methods",type:"string",placeholder:"Methods that were used in the research. Example: Paleopedological (macromorphological and micromorphological  analyses), soil-geochemical analysis"}),(0,p.jsx)(u,{label:"Modern soil",name:"modern_soil",type:"string",placeholder:"Modern soil. Example: Chernozems typical"}),(0,p.jsx)(u,{label:"Thickness of soil profile (m.)",name:"soil_m",type:"string",placeholder:"Thickness of soil profile (m). Example: 1.2"}),(0,p.jsx)(u,{label:"Buried soil (soil material)",name:"buried_soil",type:"string",placeholder:"Buried soil (soil material). Example: Ordinary  chernozems"}),(0,p.jsx)(u,{label:"Thickness of paleosoil (m.)",name:"paleosoil_m",type:"string",placeholder:"Thickness of paleosoil (m.). Example: 0.5"}),(0,p.jsxs)(j,{label:"Period holocene",name:"period_holocene",placeholder:"",children:[(0,p.jsx)("option",{value:"",children:"- - - - "}),(0,p.jsx)("option",{value:"AL - Allerod",children:"AL - Allerod"}),(0,p.jsx)("option",{value:"AT - Atlantic",children:"AT - Atlantic"}),(0,p.jsx)("option",{value:"BL - Bolling",children:"BL - Bolling"}),(0,p.jsx)("option",{value:"\u0412\u041e - Boreal",children:"\u0412\u041e - Boreal"}),(0,p.jsx)("option",{value:"PB - Preboreal",children:"PB - Preboreal"}),(0,p.jsx)("option",{value:"SA - Subatlantic",children:"SA - Subatlantic"}),(0,p.jsx)("option",{value:"SB - Subboreal",children:"SB - Subboreal"})]}),(0,p.jsx)(u,{label:"Archaeological dating / dating",name:"arch_dating",type:"string",placeholder:"Archaeological dating / dating the research object. Example: Catacomb Grave culture (3800 \u0412\u0420)"}),(0,p.jsx)(u,{label:"References",name:"references",type:"string",placeholder:"Example: Matviishyna Zh, Kushnir A (2014). Geoarchaeological research of the burial mound on the left bank of the Dnieper River. Materials of the scientific conference on archaeological soil science, 138-141 (In russian)"}),(0,p.jsx)(u,{label:"PDF",name:"pdf",type:"string",placeholder:"URL to read the research"}),(0,p.jsx)(u,{label:"Foto",name:"foto",type:"string",placeholder:"Url to foto research in Google Disk. Example: https://drive.google.com/file/d/1j4iGHQCk-iS7tKrh274Gkc4BnqovJb3r/view?usp=sharing"}),(0,p.jsx)(u,{label:"Small foto",name:"small_foto",type:"string",placeholder:"Url to small-foto for the app from the Google Disk. Example: https://drive.google.com/file/d/1j4iGHQCk-iS7tKrh274Gkc4BnqovJb3r/view?usp=sharing"}),(0,p.jsx)(a.Z,{disabled:o,type:"submit",variant:"contained",color:"success",children:"\u0412\u0456\u0434\u043f\u0440\u0430\u0432\u0438\u0442\u0438"})]})}})},f=r(7166),b=r(3032),y=n.Ry().shape({settlement:n.Z_().required(),region:n.Z_().oneOf(["Cherkasy","Chernihiv","Chernivtsi","Dnipro","Donetsk","Ivano-Frankivsk","Kharkiv","Kherson","Khmelnytskyi","Kyiv","Kirovohrad","Luhansk","Lviv","Mykolaiv","Odesa","Poltava","Rivne","Sumy","Ternopil","Vinnytsia","Volyn","Zakarpattia","Zaporizhzhia","Zhytomyr","c. Kyiv","c. Sevastopol"]).required(),x:n.Rx("").min(4).required(),y:n.Rx("").min(4).required(),natural_zones:n.Z_().oneOf(["Mixed (coniferous-and-broad-leaved) woods","Broad-leaved forests","Forest-steppe","Steppe","Ukraine Carpathians","Crimean Mountains"]).required(),physiographical_l:n.Z_().oneOf(["Polessye region","West Ukraine region","Podolia\u2013Dnipro forest steppe region","Left bank of Dnipro forest steppe region","East Ukraine forest steppe region","Dnister\u2013Dnipro region","Left bank of Dnipro\u2013Sea of Azov coast region","Donets region","Trans-Donets\u2013Don region","Black Sea coast central steppe region","Black Sea\u2013Sea of Azov coastal region","Crimean steppe region","Carpathians mountain region","Crimean mountain region"]).required(),locality:n.Z_().required(),object:n.Z_().required(),researcher:n.Z_().required(),year:n.Rx("").min(4).required(),research_methods:n.Z_().required(),modern_soil:n.Z_().required(),soil_m:n.Rx(""),buried_soil:n.Z_().required(),paleosoil_m:n.Rx(""),period_holocene:n.Z_().oneOf(["AL - Allerod","AT - Atlantic","BL - Bolling","\u0412\u041e - Boreal","PB - Preboreal","SA - Subatlantic","SB - Subboreal"]).required(),arch_dating:n.Z_().required(),references:n.Z_().required(),pdf:n.Z_(),foto:n.Z_(),small_foto:n.Z_()}),_=function(){var e=(0,b.Z)((0,f.Z)().mark((function e(o,r){return(0,f.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(o),r.resetForm();case 2:case"end":return e.stop()}}),e)})));return function(o,r){return e.apply(this,arguments)}}(),k=function(){return(0,p.jsx)(i.J9,{initialValues:{settlement:"",region:"",x:"",y:"",natural_zones:"",physiographical_l:"",locality:"",object:"",researcher:"",year:"",research_methods:"",modern_soil:"",soil_m:"",buried_soil:"",paleosoil_m:"",period_holocene:"",arch_dating:"",references:"",pdf:"",foto:"",small_foto:""},validationSchema:y,onSubmit:_,children:function(e){var o=e.isSubmitting;return(0,p.jsxs)(i.l0,{children:[(0,p.jsx)(u,{label:"settlement",name:"settlement",placeholder:"Please select a job"}),(0,p.jsxs)(j,{label:"\u041e\u0431\u043b\u0430\u0441\u0442\u044c",name:"region",placeholder:"",children:[(0,p.jsx)("option",{value:"",children:"- - - - "}),(0,p.jsx)("option",{value:"Cherkasy",children:"Cherkasy"}),(0,p.jsx)("option",{value:"Chernihiv",children:"Chernihiv"}),(0,p.jsx)("option",{value:"Chernivtsi",children:"Chernivtsi"}),(0,p.jsx)("option",{value:"Dnipro",children:"Dnipro"}),(0,p.jsx)("option",{value:"Donetsk",children:"Donetsk"}),(0,p.jsx)("option",{value:"Ivano-Frankivsk",children:"Ivano-Frankivsk"}),(0,p.jsx)("option",{value:"Kharkiv",children:"Kharkiv"}),(0,p.jsx)("option",{value:"Kherson",children:"Kherson"}),(0,p.jsx)("option",{value:"Khmelnytskyi",children:"Khmelnytskyi"}),(0,p.jsx)("option",{value:"Kyiv",children:"Kyiv"}),(0,p.jsx)("option",{value:"Kirovohrad",children:"Kirovohrad"}),(0,p.jsx)("option",{value:"Luhansk",children:"Luhansk"}),(0,p.jsx)("option",{value:"Lviv",children:"Lviv"}),(0,p.jsx)("option",{value:"Mykolaiv",children:"Mykolaiv"}),(0,p.jsx)("option",{value:"Odesa",children:"Odesa"}),(0,p.jsx)("option",{value:"Poltava",children:"Poltava"}),(0,p.jsx)("option",{value:"Rivne",children:"Rivne"}),(0,p.jsx)("option",{value:"Sumy",children:"Sumy"}),(0,p.jsx)("option",{value:"Ternopil",children:"Ternopil"}),(0,p.jsx)("option",{value:"Vinnytsia",children:"Vinnytsia"}),(0,p.jsx)("option",{value:"Volyn",children:"Volyn"}),(0,p.jsx)("option",{value:"Zakarpattia",children:"Zakarpattia"}),(0,p.jsx)("option",{value:"Zaporizhzhia",children:"Zaporizhzhia"}),(0,p.jsx)("option",{value:"Zhytomyr",children:"Zhytomyr"}),(0,p.jsx)("option",{value:"c. Kyiv",children:"c. Kyiv"}),(0,p.jsx)("option",{value:"c. Sevastopol",children:"c. Sevastopol"})]}),(0,p.jsx)(u,{label:"Longitude",name:"x",type:"string",placeholder:"Longitude of object WGS-84. Example: 49.877565"}),(0,p.jsx)(u,{label:"Latitude",name:"y",type:"string",placeholder:"Latitude of object WGS-84. Example: 32.809059"}),(0,p.jsxs)(j,{label:"Natural zones",name:"natural_zones",placeholder:"",children:[(0,p.jsx)("option",{value:"",children:"- - - - "}),(0,p.jsx)("option",{value:"Mixed (coniferous-and-broad-leaved) woods",children:"Mixed (coniferous-and-broad-leaved) woods"}),(0,p.jsx)("option",{value:"Broad-leaved forests",children:"Broad-leaved forests"}),(0,p.jsx)("option",{value:"Forest-steppe",children:"Forest-steppe"}),(0,p.jsx)("option",{value:"Steppe",children:"Steppe"}),(0,p.jsx)("option",{value:"Ukraine Carpathians",children:"Ukraine Carpathians"}),(0,p.jsx)("option",{value:"Crimean Mountains",children:"Crimean Mountains"})]}),(0,p.jsxs)(j,{label:"Physiographical Lands",name:"physiographical_l",placeholder:"",children:[(0,p.jsx)("option",{value:"",children:"- - - - "}),(0,p.jsx)("option",{value:"Polessye region",children:"Polessye region"}),(0,p.jsx)("option",{value:"West Ukraine region",children:"West Ukraine region"}),(0,p.jsx)("option",{value:"Podolia\u2013Dnipro forest steppe region",children:"Podolia\u2013Dnipro forest steppe region"}),(0,p.jsx)("option",{value:"East Ukraine forest steppe region",children:"East Ukraine forest steppe region"}),(0,p.jsx)("option",{value:"Left bank of Dnipro forest steppe region",children:"Left bank of Dnipro forest steppe region"}),(0,p.jsx)("option",{value:"Dnister\u2013Dnipro region",children:"Dnister\u2013Dnipro region"}),(0,p.jsx)("option",{value:"Left bank of Dnipro\u2013Sea of Azov coast region",children:"Left bank of Dnipro\u2013Sea of Azov coast region"}),(0,p.jsx)("option",{value:"Donets region",children:"Donets region"}),(0,p.jsx)("option",{value:"Trans-Donets\u2013Don region",children:"Trans-Donets\u2013Don region"}),(0,p.jsx)("option",{value:"Black Sea coast central steppe region",children:"Black Sea coast central steppe region"}),(0,p.jsx)("option",{value:"Black Sea\u2013Sea of Azov coastal region",children:"Black Sea\u2013Sea of Azov coastal region"}),(0,p.jsx)("option",{value:"Crimean steppe region",children:"Crimean steppe region"}),(0,p.jsx)("option",{value:"Carpathians mountain region",children:"Carpathians mountain region"}),(0,p.jsx)("option",{value:"Crimean mountain region",children:"Crimean mountain region"})]}),(0,p.jsx)(u,{label:"locality",name:"locality",placeholder:"Locality (natural / historical) of object. Example: Storozhove  mound complex"}),(0,p.jsx)(u,{label:"object",name:"object",placeholder:"Object (natural / historical) of the research object. Example: Rampart of the Eastern hillfort"}),(0,p.jsx)(u,{label:"researcher",name:"researcher",placeholder:"Researcher or researchers. Example: Doroshkevych Serhii, Kushnir Anatolii"}),(0,p.jsx)(u,{label:"Year of research",name:"year",type:"number",placeholder:"Year the research object. Example: 2022"}),(0,p.jsx)(u,{label:"Research methods used",name:"research_methods",type:"string",placeholder:"Methods that were used in the research. Example: Paleopedological (macromorphological and micromorphological  analyses), soil-geochemical analysis"}),(0,p.jsx)(u,{label:"Modern soil",name:"modern_soil",type:"string",placeholder:"Modern soil. Example: Chernozems typical"}),(0,p.jsx)(u,{label:"Thickness of soil profile (m.)",name:"soil_m",type:"string",placeholder:"Thickness of soil profile (m). Example: 1.2"}),(0,p.jsx)(u,{label:"Buried soil (soil material)",name:"buried_soil",type:"string",placeholder:"Buried soil (soil material). Example: Ordinary  chernozems"}),(0,p.jsx)(u,{label:"Thickness of paleosoil (m.)",name:"paleosoil_m",type:"string",placeholder:"Thickness of paleosoil (m.). Example: 0.5"}),(0,p.jsxs)(j,{label:"Period holocene",name:"period_holocene",placeholder:"",children:[(0,p.jsx)("option",{value:"",children:"- - - - "}),(0,p.jsx)("option",{value:"AL - Allerod",children:"AL - Allerod"}),(0,p.jsx)("option",{value:"AT - Atlantic",children:"AT - Atlantic"}),(0,p.jsx)("option",{value:"BL - Bolling",children:"BL - Bolling"}),(0,p.jsx)("option",{value:"\u0412\u041e - Boreal",children:"\u0412\u041e - Boreal"}),(0,p.jsx)("option",{value:"PB - Preboreal",children:"PB - Preboreal"}),(0,p.jsx)("option",{value:"SA - Subatlantic",children:"SA - Subatlantic"}),(0,p.jsx)("option",{value:"SB - Subboreal",children:"SB - Subboreal"})]}),(0,p.jsx)(u,{label:"Archaeological dating / dating",name:"arch_dating",type:"string",placeholder:"Archaeological dating / dating the research object. Example: Catacomb Grave culture (3800 \u0412\u0420)"}),(0,p.jsx)(u,{label:"References",name:"references",type:"string",placeholder:"Example: Matviishyna Zh, Kushnir A (2014). Geoarchaeological research of the burial mound on the left bank of the Dnieper River. Materials of the scientific conference on archaeological soil science, 138-141 (In russian)"}),(0,p.jsx)(u,{label:"PDF",name:"pdf",type:"string",placeholder:"URL to read the research"}),(0,p.jsx)(u,{label:"Foto",name:"foto",type:"string",placeholder:"Url to foto research in Google Disk. Example: https://drive.google.com/file/d/1j4iGHQCk-iS7tKrh274Gkc4BnqovJb3r/view?usp=sharing"}),(0,p.jsx)(u,{label:"Small foto",name:"small_foto",type:"string",placeholder:"Url to small-foto for the app from the Google Disk. Example: https://drive.google.com/file/d/1j4iGHQCk-iS7tKrh274Gkc4BnqovJb3r/view?usp=sharing"}),(0,p.jsx)("button",{disabled:o,type:"submit",children:"Submit"})]})}})},S=function(){return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("div",{style:{width:"50%",margin:"15px"},children:[(0,p.jsx)("h2",{style:{padding:"15px 10px"},children:"\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430 \u0444\u043e\u0440\u043c\u0430 \u0437\u0430\u043f\u043e\u0432\u043d\u0435\u043d\u043d\u044f"}),(0,p.jsx)("span",{style:{margin:"10px 5px"},children:"\u0432\u0441\u044f \u0456\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u044f \u043f\u0440\u043e \u043e\u0431'\u0454\u043a\u0442 \u043f\u043e\u0434\u0430\u0454\u0442\u044c\u0441\u044f \u0443\u043a\u0440. \u043c\u043e\u0432\u043e\u044e. \u0410\u043b\u0435 \u0441\u043f\u043e\u0447\u0430\u0442\u043a\u0443 \u0441\u043b\u0456\u0434 \u0432\u0456\u0434\u0432\u0456\u0434\u0430\u0442\u0438 \u043a\u0430\u0440\u0442\u0443 \u0430\u0431\u043e \u0442\u0430\u0431\u043b\u0438\u0446\u044e."}),(0,p.jsx)(g,{})]}),(0,p.jsxs)("div",{style:{width:"50%",margin:"15px"},children:[(0,p.jsx)("h2",{style:{padding:"15px 10px"},children:"English form filling"}),(0,p.jsx)("span",{style:{margin:"10px 5px"},children:"all information about the object is provided in English language"}),(0,p.jsx)(k,{})]})]})})}},8489:function(e,o,r){r.d(o,{Z:function(){return a}});var l=r(6222);function i(e,o){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);o&&(l=l.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),r.push.apply(r,l)}return r}function a(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?i(Object(r),!0).forEach((function(o){(0,l.Z)(e,o,r[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))}))}return e}}}]);
//# sourceMappingURL=549.2be5547f.chunk.js.map