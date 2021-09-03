const JAPIRest = require('../src/index');
const japiRest = new JAPIRest('JAPI.MjM0NDczMDk0OTUxNTIwMDQ5OA==.oc8.tkaoG3ZD1aY1pgeWjDS3R');

(async () => {
  const data = japiRest.deviantart.getTopics();
  console.log(data);
})();
