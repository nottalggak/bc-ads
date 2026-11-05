// 데스커 베이스캠프 모집 페이지 집계 코드 (기록은 구글 Apps Script로)
(function(){try{
var E="https://script.google.com/macros/s/AKfycbxNUboxe5lyMrfowx3sSbUOy7lDbjDE4zSueeX8JMSBRVJ5G-XUwAXcGW1OliJG6qfQ/exec",q=new URLSearchParams(location.search);
function id(k,ss){try{var st=ss?sessionStorage:localStorage,v=st.getItem(k);if(!v){v=Math.random().toString(36).slice(2,12);st.setItem(k,v)}return v}catch(e){return''}}
var vid=id('bc_v'),sid=id('bc_s',1),src={ad:q.get('utm_content')||'',pos:q.get('utm_term')||'',src:q.get('utm_source')||'',fb:q.has('fbclid')?1:0};
try{if(src.ad||src.src||src.fb)sessionStorage.setItem('bc_src',JSON.stringify(src));else{var o=sessionStorage.getItem('bc_src');if(o)src=JSON.parse(o)}}catch(e){}
var ua=navigator.userAgent,ref='';try{ref=document.referrer?new URL(document.referrer).hostname:''}catch(e){}
function send(t){var d=JSON.stringify({type:t,vid:vid,sid:sid,ad:src.ad,pos:src.pos,src:src.src,fb:src.fb,ig:/Instagram/i.test(ua)?1:0,m:/Mobi|Android|iPhone/i.test(ua)?1:0,ref:ref});
try{if(navigator.sendBeacon&&navigator.sendBeacon(E,new Blob([d],{type:'text/plain'})))return}catch(e){}
try{fetch(E,{method:'POST',body:d,keepalive:true,mode:'no-cors',headers:{'Content-Type':'text/plain'}})}catch(e){}}
if(location.pathname.indexOf('/apply')===0){send('form');
var ok=document.getElementById('ok'),sent=0;if(ok&&window.MutationObserver)new MutationObserver(function(){if(!sent&&!ok.hidden){sent=1;send('submit')}}).observe(ok,{attributes:true,attributeFilter:['hidden']});
}else{send('view');
document.addEventListener('click',function(e){var a=e.target&&e.target.closest&&e.target.closest('a[href*="/apply"],a[href*="docs.google.com/forms"],a[href*="forms.gle"]');if(a)send('apply')},true);
var s5=0,s9=0;addEventListener('scroll',function(){var h=document.documentElement.scrollHeight,p=(scrollY+innerHeight)/h;if(!s5&&p>.5){s5=1;send('scroll50')}if(!s9&&p>.92){s9=1;send('scroll90')}},{passive:true});}
}catch(e){}})();
