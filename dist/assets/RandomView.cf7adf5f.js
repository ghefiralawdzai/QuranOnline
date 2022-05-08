import{_ as u,o,c as i,a as n,t as c,e as h,F as l,f as d}from"./index.1c5f14ab.js";const _={data(){return{isLoading:!1,verse:null,quran:null,chapter:null,translation:null,tafsir:"",audio:null}},methods:{async getRandomAyat(){const t=Math.floor(Math.random()*100);this.fetchQuran("verses/random?language=id&words=false&translations=id&audio=3&fields="+t).then(a=>{const s=a.verse;this.verse=s,this.audio=this.getAudioPath(s.audio.url);const r=s.verse_key;this.getQuran(r);const e=r.split(":")[0];this.getChapter(e),this.getTranslate(r)})},async getQuran(t){this.fetchQuran("quran/verses/uthmani?verse_key="+t).then(a=>{this.quran=a.verses[0]})},getAudioPath(t){return"https://verses.quran.com/"+t},async getChapter(t){this.fetchQuran("chapters/"+t+"?language=id").then(a=>{this.chapter=a.chapter})},async getTranslate(t){this.fetchQuran("quran/translations/33?verse_key="+t).then(a=>{this.translation=a.translations[0]})},async getTafsir(){},async fetchQuran(t){this.isLoading=!0;const a="https://api.quran.com/api/v4/"+t;return fetch(a,{method:"GET",headers:{"Content-Type":"application/json"}}).then(s=>{if(!s.ok){const r=new Error(s.statusText);throw r.json=s.json(),r}return s.json()}).catch(s=>{alert(s.toString())}).finally(()=>{this.isLoading=!1})}},mounted(){this.getRandomAyat(),this.getQuran(),this.getTafsir(),this.getAudioPath(),this.getTranslate()}},p=n("section",{class:"hero is-small"},[n("div",{class:"hero-body"},[n("p",{class:"title"},"Random Ayat"),n("p",{class:"subtitle"},"Random Ayat from https://api.quran.com/")])],-1),g={class:"content"},m={key:0,class:"has-text-right"},f={key:1,class:"has-text-right"},y={controls:""},v=["src"],k=d(" Your browser does not support the audio element. "),x={key:2,class:"has-text-right quran"},q={key:3},T={key:0,class:"has-text-centered"},Q=n("i",{class:"fa-solid fa-spinner fa-pulse"},null,-1),A=[Q];function b(t,a,s,r,e,w){return o(),i(l,null,[p,n("section",g,[n("div",null,[e.chapter?(o(),i("h2",m,c(e.chapter.name_arabic)+" "+c(e.verse.verse_number),1)):h("",!0),e.audio?(o(),i("p",f,[n("audio",y,[n("source",{src:e.audio,type:"audio/mpeg"},null,8,v),k])])):h("",!0),e.quran?(o(),i("h3",x,c(e.quran.text_uthmani),1)):h("",!0),e.translation?(o(),i("p",q,c(e.translation.text),1)):h("",!0)]),e.isLoading?(o(),i("div",T,A)):h("",!0)])],64)}var j=u(_,[["render",b]]);export{j as default};
