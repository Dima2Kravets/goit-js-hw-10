import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as v,i as m}from"./assets/vendor-BbbuE1sJ.js";const l=document.querySelector("#datetime-picker"),e=document.querySelector(".timer-btn"),d=document.querySelector(".timer");let i=null;const b={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(s){if(s[0].getTime()<=Date.now()){m.error({message:"Please choose a date in the future",position:"topRight"}),e.setAttribute("disabled",!0);return}e.removeAttribute("disabled"),i=s[0],console.log(i)}};v(l,b);function f(s){const t=String(Math.floor(s/864e5)).padStart(2,"0"),n=String(Math.floor(s%864e5/36e5)).padStart(2,"0"),u=String(Math.floor(s%864e5%36e5/6e4)).padStart(2,"0"),p=String(Math.floor(s%864e5%36e5%6e4/1e3)).padStart(2,"0");return{days:t,hours:n,minutes:u,seconds:p}}e.addEventListener("click",()=>{e.setAttribute("disabled",!0),l.setAttribute("disabled",!0);const s=setInterval(()=>{const o=Date.now(),a=i-o;if(a<=0){clearInterval(s),d.innerHTML=`
        <div class="field"><span class="value">00</span><span class="label">Days</span></div>
        <div class="field"><span class="value">00</span><span class="label">Hours</span></div>
        <div class="field"><span class="value">00</span><span class="label">Minutes</span></div>
        <div class="field"><span class="value">00</span><span class="label">Seconds</span></div>`,l.removeAttribute("disabled");return}const{days:r,hours:c,minutes:t,seconds:n}=f(a);d.innerHTML=`
      <div class="field"><span class="value">${r}</span><span class="label">Days</span></div>
      <div class="field"><span class="value">${c}</span><span class="label">Hours</span></div>
      <div class="field"><span class="value">${t}</span><span class="label">Minutes</span></div>
      <div class="field"><span class="value">${n}</span><span class="label">Seconds</span></div>`},1e3)});
//# sourceMappingURL=1-timer.js.map
