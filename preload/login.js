module.exports={onLogin:()=>{document.querySelectorAll(".header, .redflagbox, .footer").forEach(e=>{e.style.display="none"})},isLoggedIn:()=>document.cookie.includes("token=")};