document.addEventListener("DOMContentLoaded",(()=>{const e=document.getElementById("datetime-picker"),t=document.querySelector("[data-start]"),n=document.querySelector("[data-days]"),a=document.querySelector("[data-hours]"),o=document.querySelector("[data-minutes]"),d=document.querySelector("[data-seconds]");let r=null;function l(e){return e.toString().padStart(2,"0")}function s(e){function t(){const t=new Date,s=e-t;if(s<=0)return clearInterval(r),void(r=null);const{days:u,hours:c,minutes:i,seconds:m}=function(e){const t=6e4,n=36e5,a=24*n;return{days:Math.floor(e/a),hours:Math.floor(e%a/n),minutes:Math.floor(e%a%n/t),seconds:Math.floor(e%a%n%t/1e3)}}(s);n.textContent=l(u),a.textContent=l(c),o.textContent=l(i),d.textContent=l(m)}t(),r=setInterval(t,1e3)}flatpickr(e,{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){e[0]<new Date?(alert("Please choose a date in the future"),t.disabled=!0):t.disabled=!1}}),t.addEventListener("click",(()=>{const n=new Date(e.value);isNaN(n)?alert("Please select a valid date and time"):n<=new Date?alert("Please choose a date and time in the future"):(s(n),t.disabled=!0)}))}));
//# sourceMappingURL=02-timer.739589fc.js.map
