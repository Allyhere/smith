(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}})();const d=["Juliana?","achei","Adriano?","seu cu","faz isso comigo n\xE3o v\xE9i","Romero Britto?","se eu to chamando?","Katrina?","\xE9 obvio velho","vai doer pra caralho meu bra\xE7o velho","Guarapari - Buzios \xE9 minha arte","obrigado","eu tenho quantos anos gente?","rave, RAVE?!","Felipe","Smith","seu cu","mata o papai","16","18","quebro v\xE9i","quebro meu bra\xE7o","QUEBRO O MEU BRA\xC7O V\xC9I","Marcelo, n\xE3o","14","Romero Britto?","minha vida","acabou","Red Bull?\xAE","eu n\xE3o sei nem onde eu t\xF4 v\xE9i","5 Km?","minha vida","samu? Seu cu","jamais ser\xE1","pega um incenso pra mim pelo amor de deus","Antonella Caroline","meu gol","Cristiano Ronaldo","seu cu lugo Marcelo","MARCELO","meu bra\xE7o vai doer, por favor!!","n\xE3o faz isso comigo","Guarapari minha arte","que foi cabeleira?","n\xE3o faz isso comigo n\xE3o","Milton Nascimento","minha arte","PC Gusm\xE3o","vo fica pelado aqui","da o cu","sai cagando","eu juro vo sair cagando","arquitetura?","seu cu","Katrina","Luca","Jarbas","Jarbas... meu pai?","O MEU PAI??","grafite","Lais, minha vida","Renata Clara Pimenta","miseric\xF3rdia","Bruno?","debaixo da ponte?","BRUNO??","sai da\xEA doido","ce \xE9 m\xF3 playboy","minha vida?","s\xF3 agora?","Red Bull?\xAE","Antonella Caroline","seu cu","seu cu velho","QUEBRO MEU BRA\xC7O TA BRANCO V\xC9I","ta branco tiro na cabe\xE7a Marcelo","no meu cu?","co\xE9 PC?","CO\xC9 PC???","Juliana?","seu cu","na panela?","achei a mina","arquitetura","piscina?"],f=document.querySelector(".container"),p=document.querySelector("[data-id=generator]"),c=document.querySelector("[data-id=sound]");let u=[];const h=e=>e.toString().charAt(0).toUpperCase()+e.toString().slice(1);function g(e,o=300){let t;return(...a)=>{t||e.apply(this,a),clearTimeout(t),t=setTimeout(()=>{t=void 0},o)}}const v=()=>{const{floor:e,random:o}=Math,t=d.length,a=0;return e(o()*(t-a+1)+a)},C=(e,o=void 0,t="")=>{let a=document.createElement(e);return o&&a.classList.add(o),a.innerText=t,a},y=()=>{const e=document.createDocumentFragment();for(i=0;i<4;i++){const o=h(d[v()]),t=C("p","text",o);u.push(o),e.appendChild(t)}return e},b=()=>{const e=window.speechSynthesis,o=u.join(" ");e.cancel();let t=new SpeechSynthesisUtterance(o);e.speak(t)},l=()=>localStorage.getItem("sound_profile"),L=()=>{const e=l();if(e){const o=e==="on"?"off":"on";localStorage.setItem("sound_profile",o),c.innerHTML=o==="on"?"Desligar som":"Ligar som";return}localStorage.setItem("sound_profile","on"),c.innerHTML="Desligar som"},m=g(()=>{const e=y();l()==="on"&&b(),u=[],f.replaceChildren(e)});p.addEventListener("click",m);c.addEventListener("click",L);document.addEventListener("keyup",e=>{e.code==="Space"&&m()});window.addEventListener("DOMContentLoaded",()=>{const e=l();c.innerHTML=e==="on"?"Desligar som":"Ligar som"});
