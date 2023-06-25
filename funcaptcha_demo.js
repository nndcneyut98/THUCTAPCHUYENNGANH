(async()=>{const u={linkedin:["3117BF26-4762-4F5A-8ED9-A85E69209A46",!1],rockstar:["A5A70501-FCDE-4065-AF18-D9FAF06EF479",!1],github:["20782B4C-05D0-45D7-97A0-41641055B6F6",!1],paypal:["9409E63B-D2A5-9CBD-DBC0-5095707D0090",!1],twitch:["E5554D43-23CC-1982-971D-6A2262A2CA24",!1],demo2:["D39B0EE3-2973-4147-98EF-C92F93451E2D",!1],"ea signup":["73BEC076-3E53-30F5-B1EB-84F494D43DBA",!1],"ea signin":["0F5FE186-B3CA-4EDB-A39B-9B9A3397D01D",!1],minecraft:["D39B0EE3-2973-4147-98EF-C92F93451E2D",!1],imvu:["0C2B415C-D772-47D4-A183-34934F786C7E",!1],blizzard:["E8A75615-1CBA-5DFF-8032-D16BCF234E10",!1],demo1:["804380F4-6844-FFA1-ED4E-5877CA1F1EA4",!1],octocaptcha:["69A21A01-CC7B-B9C6-0F9A-E7FA06677FFC",!1],outlook:["B7D8911C-5CC8-A9A3-35B0-554ACEE604DA",!1],roblox:["476068BF-9607-4799-B53D-966BE98E2B81",!1],myprepaidcenter:["0F941BF0-7303-D94B-B76A-EAA2E2048124",!1],discoveryplus:["FE296399-FDEA-2EA2-8CD5-50F6E3157ECA",!1],twitter_lo_web_notification_dev:["BF5FA6C8-9668-4AF9-AFA2-E362F56E5B71",!0],twitter_lo_web_notification_mobile_prod:["6A2FD110-7C1A-47CD-82EE-D01FFB4810D7",!0],twitter_lo_web_notification_prod:["50706BFE-942C-4EEC-B9AD-03F7CD268FB1",!0],twitter_login_web_devel:["DF58DD3B-DFCC-4502-91FA-EDC0DC385CFF",!0],twitter_login_web_prod:["2F4F0B28-BC94-4271-8AD7-A51662E3C91C",!0],twitter_open_app_dev:["560C66A3-C8EB-4D11-BE53-A8232734AA62",!0],twitter_open_app_prod:["6E8D3D6E-30D4-45F1-9838-BA3D9651AAA1",!0],twitter_signup_mobile_dev:["006B5E87-7497-403E-9E0C-8FFBAAC6FA67",!0],twitter_signup_web_dev:["DF58DD3B-DFCC-4502-91FA-EDC0DC385CFF",!0],twitter_transparent_signup_dev:["6627C16B-DA60-47A5-85F7-CFF23BD2BE69",!0],twitter_transparent_signup_prod:["4CB8C8B0-40FF-439C-9D0D-9A389ADA18CB",!0]},w={twitter_mobile:["https://iframe.arkoselabs.com/867D55F2-24FD-4C56-AB6D-589EDAF5E7C5/index.html?mkt=en",!1],twitter_web:["https://iframe.arkoselabs.com/2CB16598-CB82-4CF7-B332-5990DB66F3AB/index.html?mkt=en",!1],outlook:["https://iframe.arkoselabs.com/B7D8911C-5CC8-A9A3-35B0-554ACEE604DA/index.html?mkt=en",!1],"outlook auth":["https://iframe-auth.arkoselabs.com/B7D8911C-5CC8-A9A3-35B0-554ACEE604DA/index.html?mkt=en",!1]};let f=4;function A(){C("linkedin",0,1),C("rockstar",0,1),C("paypal",0,1),C("github",0,1),C("demo2",0,1),C("ea signup",0,1),C("ea signin",0,1),C("minecraft",0,1),C("imvu",0,1),F("outlook auth",0,1),F("outlook",0,1),F("twitter_mobile",0,1),F("twitter_web",0,1),C("demo1",0,1),C("blizzard",0,1),C("twitch",0,1),C("octocaptcha",0,1),C("myprepaidcenter",0,1),C("discoveryplus",0,1),C("twitter_lo_web_notification_dev",0,1),C("twitter_lo_web_notification_mobile_prod",0,1),C("twitter_lo_web_notification_prod",0,1),C("twitter_login_web_devel",0,1),C("twitter_login_web_prod",0,1),C("twitter_open_app_dev",0,1),C("twitter_open_app_prod",0,1),C("twitter_signup_mobile_dev",0,1),C("twitter_signup_web_dev",0,1),C("twitter_transparent_signup_dev",0,1),C("twitter_transparent_signup_prod",0,1)}function C(t,o,n){n=n||f;for(let e=0;e<n;e++)!async function(e,t){var o=u[e][0],n="https://api.funcaptcha.com/fc/gt2/public_key/"+o,n=await Net.fetch(n,{headers:{accept:"*/*","accept-language":"en-US,en;q=0.9","cache-control":"no-cache","content-type":"application/x-www-form-urlencoded; charset=UTF-8",pragma:"no-cache","sec-ch-ua":'"Google Chrome";v="105", "Not)A;Brand";v="8", "Chromium";v="105"',"sec-ch-ua-mobile":"?0","sec-ch-ua-platform":'"Linux"',"sec-fetch-dest":"empty","sec-fetch-mode":"cors","sec-fetch-site":"cross-site"},referrer:"",referrerPolicy:"strict-origin-when-cross-origin",body:`bda=&public_key=${o}&site=${encodeURIComponent("")}&language=en&userbrowser=Mozilla%2F5.0%20(X11%3B%20Linux%20x86_64)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F105.0.0.0%20Safari%2F537.36&rnd=`+Math.random(),method:"POST",mode:"cors",credentials:"omit"}),o=JSON.parse(n),r={};for(const a of o.token.split("|")){var i=a.split("=");let e=i[0],t=i[1];i[1]||(e="token",t=i[0]),e.endsWith("url")&&(t=decodeURIComponent(t)),r[e]=t}n=new URLSearchParams(r).toString(),o="https://api.funcaptcha.com/fc/gc/?"+n;c(e,t,o,u[e][1])}(t,o)}function F(t,o,n){n=n||f;for(let e=0;e<n;e++)c(t,o,w[t][0],w[t][1])}function c(e,t,o,n=!1){var r=document.createElement("div"),i=(r.classList.add("iframe_wrap"),document.createElement("iframe"));n&&i.classList.add("small"),r.append(i),i.frameborder=0,i.scrolling="no",i.src=o;let a=document.querySelector("#iframe_row_"+t);a||((a=document.createElement("div")).classList.add("iframe_row"),a.id="iframe_row_"+t,document.body.append(a));n=document.createElement("div"),n.classList.add("name"),n.innerHTML=e,i=document.createElement("div");i.append(n),i.append(r),a.append(i)}!function e(){document.body.innerHTML="";const t=[`body, html {
                background-color: #212121;
            }`,`.input_row {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: center;
            }`,`.input_row > * {
                height: 20px;
                line-height: 20px;
                padding: 0;
                border: 0;
                font-size: 12px;
            }`,`.input_row > input[type="button"] {
                width: 100px;
                cursor: pointer;
                transition: 200ms all;
            }`,`.input_row > input[type="button"]:hover {
                opacity: 0.8;
            }`,`#nframes_label {
                background-color: #fff;
                color: #222;
                width: 70px;
                text-align: center;
            }`,`#nframes, #nframes:active {
                width: 30px;
                border: none;
                outline: none;
            }`,`.name {
                color: #fff;
            }`,`.iframe_row {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: center;
            }`,`.iframe_wrap {
                background-color: #eee;
                padding: 0;
                overflow: hidden;
            }`,`.iframe_wrap, iframe {
                width: 350px;
                height: 400px;
            }`];const o=document.body.appendChild(document.createElement("style")).sheet;for(const n in t)o.insertRule(t[n],n);let n=0;let r=1;const i={};i[0]=document.createElement("div");i[0].classList.add("input_row");document.body.append(i[0]);const a=document.createElement("div");a.id="nframes_label";a.innerText="# iframes";i[0].append(a);const c=document.createElement("input");c.id="nframes";c.placeholder="Number of iframes";c.value=f;c.addEventListener("input",()=>{f=parseInt(c.value)});i[0].append(c);const d={reset:{row:0,fn:e,args:[]},all:{row:0,fn:A,args:[]}};for(const p in u)n++%11==0&&r++,d[p]={row:r,fn:C,args:[p,0]};for(const s in w)n++%11==0&&r++,d[s]={row:r,fn:F,args:[s,0]};for(const[l,m]of Object.entries(d)){const r=m.row,_=(m.row in i||(i[m.row]=document.createElement("div"),i[m.row].classList.add("input_row"),document.body.append(i[m.row])),document.createElement("input"));_.type="button",_.value=l,_.addEventListener("click",()=>{e(),m.fn(...m.args)}),i[m.row].append(_)}}(),A()})();
