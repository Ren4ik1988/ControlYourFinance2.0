import{_ as o,c as l,w as t,o as r,e,a as c,W as p,X as u}from"./index-7x_P8KF4.js";import{J as d,D as _,G as m,E as f,F as n,V as s,H as V,I as g}from"./VMain-Dk4xUsRy.js";const k={name:"TelegramStartup",data(){return{isMenuOpen:!0,menuLocation:"up",tgInitData:this.Telegram.initData}},methods:{onSelectLink:function(){this.Telegram.expand()}}};function h(x,D,I,S,a,i){return r(),l(d,{class:"border rounded"},{default:t(()=>[e(g,null,{default:t(()=>[e(_,{class:"px-6"},{default:t(()=>[c(" ControlYourFinance - Выберите раздел: ")]),_:1}),e(m,null,{default:t(()=>[e(f,{"onClick:select":i.onSelectLink},{default:t(()=>[e(n,{title:"Главная страница",link:"",to:"/"},{prepend:t(()=>[e(s,{icon:"mdi-store"})]),_:1}),e(n,{title:"Расходы",link:"",to:"expenses"},{prepend:t(()=>[e(s,{icon:"mdi-cart"})]),_:1}),e(n,{title:"Баланс",link:"",to:"balance"},{prepend:t(()=>[e(s,{icon:"mdi-cash"})]),_:1})]),_:1},8,["onClick:select"]),e(V,null,{default:t(()=>[p("h1",null,u(a.tgInitData&&a.tgInitData.length>0?a.tgInitData:"Init Data Not Specified."),1)]),_:1})]),_:1})]),_:1})]),_:1})}const T=o(k,[["render",h]]);export{T as default};
