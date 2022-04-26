const fout = function fname () {};

const f1 = (function() {
  function configurationManager() {};
  configurationManager.getConfig = function innerFunction() {};
  return configurationManager;
}());

const f2 = (function() {
  return (new Function("configurationManager")).getConfig = function innerFunction() {};
  return (new Function().setName = "name").getConfig = function innerFunction() {};
})();

console.log(fout.name);
console.log(f1.name);
console.log(f2.name);
console.log(new Function(function hello() {}));
