import{r as u,j as a,T as h,a as e,b as R,c as l,d as v,e as f,C as p,H as m,f as r,I as g,L as x,u as N,B as C,g as S,R as T,h as b,i as _,k as B,l as j}from"./vendor.18203d1e.js";const D=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function c(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=c(t);fetch(t.href,o)}};D();function y({apiUrl:n}){const[s,c]=u.exports.useState([]),i=async t=>{const o=await fetch(t);try{const d=await o.json();c(d)}catch(d){console.log(d)}};return u.exports.useEffect(()=>{i(n)},[n]),s}function U({tableHeader:n,children:s}){return a(h,{variant:"simple",children:[e(R,{children:e(l,{children:n.map((c,i)=>e(v,{isNumeric:c.isNumeric,textAlign:c.center?"center":null,children:c.text},i))})}),e(f,{children:s})]})}const L="https://api.github.com",A=[{text:"#"},{text:"avatar",center:!0},{text:"login"},{text:"site_admin",center:!0}];function E(){const[n,s]=u.exports.useState([]),c=y({apiUrl:`${L}/users?per_page=100`});return u.exports.useEffect(()=>{s(c)},[c]),a(p,{py:10,centerContent:!0,children:[e(m,{as:"h1",size:"md",mb:10,children:"Github User List"}),e(U,{tableHeader:A,children:n.length>0?n.map((i,t)=>a(l,{children:[e(r,{children:t+1}),e(r,{children:e("a",{href:i.avatar_url,children:e(g,{src:i.avatar_url,borderRadius:"full",boxSize:"40px",mx:"auto"})})}),e(r,{children:e(x,{to:`detail/${i.login}`,children:i.login})}),e(r,{textAlign:"center",children:i.site_admin?"Y":"N"})]},i.id)):e(l,{children:e(r,{children:"\u7121\u8CC7\u6599"})})})]})}function O(){const[n,s]=u.exports.useState({}),{userName:c}=N(),i=y({apiUrl:`${L}/users/${c}`});return u.exports.useEffect(()=>{s(i)},[i]),a(p,{py:10,centerContent:!0,children:[e(m,{as:"h1",size:"md",mb:10,children:"Github User"}),e(h,{children:a(f,{children:[a(l,{children:[e(r,{children:"Avatar"}),e(r,{children:e("a",{href:n.avatar_url,children:e(g,{src:n.avatar_url,borderRadius:"full",boxSize:"80px"})})})]}),a(l,{children:[e(r,{children:"Name"}),e(r,{children:n.name})]}),a(l,{children:[e(r,{children:"Bio"}),e(r,{children:n.bio})]}),a(l,{children:[e(r,{children:"Login"}),e(r,{children:n.login})]}),a(l,{children:[e(r,{children:"Site admin"}),e(r,{children:n.site_admin?"true":"false"})]}),a(l,{children:[e(r,{children:"Location"}),e(r,{children:n.location})]}),a(l,{children:[e(r,{children:"Blog"}),e(r,{children:e("a",{href:n.blog,children:n.blog})})]})]})}),e(C,{mt:5,color:"gray.600",mr:"auto",children:e(x,{to:"/",children:"\u2190 Back to list"})})]})}function $(){return e(S,{children:a(T,{children:[e(b,{path:"/",element:e(E,{})}),e(b,{path:"detail/:userName",element:e(O,{})})]})})}function k(){return e(_,{children:e($,{})})}B.render(e(j.StrictMode,{children:e(k,{})}),document.getElementById("root"));