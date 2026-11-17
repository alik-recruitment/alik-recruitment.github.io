(function(){
 const d=window.SITE_DATA||{};
 const set=(id,value)=>{const el=document.getElementById(id);if(el&&value)el.textContent=value;};
 set("contactName",d.contactName);set("paymentsText",d.paymentsText);set("requirementsText",d.requirementsText);set("processText",d.processText);
 document.getElementById("year").textContent=new Date().getFullYear();
 const links=["headerTelegram","heroTelegram","panelTelegram","bottomTelegram"];
 links.forEach(id=>{const el=document.getElementById(id);if(d.telegram){el.href=d.telegram;}else{el.href="#contact";el.addEventListener("click",e=>{e.preventDefault();alert("Контакт Telegram ещё не добавлен.");});}});
 function render(items,id,empty){const root=document.getElementById(id);if(!items||!items.length){root.innerHTML='<div class="empty-state">'+empty+'</div>';return;}root.innerHTML=items.map(item=>'<article class="tile"><strong>'+escapeHtml(item.name||"")+'</strong><span>'+escapeHtml(item.note||"")+'</span></article>').join("");}
 function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
 render(d.regions,"regionsList","Список регионов будет добавлен после подтверждения.");
 render(d.positions,"positionsList","Список должностей будет добавлен после подтверждения.");
})();