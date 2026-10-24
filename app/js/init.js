buildTfs();applyTfOpts();applyTz();clk();setTheme();setSide();{const hv=EMB?"":(location.hash||"").slice(1);show(V.some(([k])=>k===hv)?hv:"chart")}loadM1();
setInterval(poll,250);setInterval(clk,1000);
requestAnimationFrame(()=>requestAnimationFrame(()=>document.body.classList.remove("nt")));
