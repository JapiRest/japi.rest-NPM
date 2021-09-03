const JAPIRest = require('../src/index');
const japiRest = new JAPIRest('JAPI.MjM0NDczMDk0OTUxNTIwMDQ5OA==.oc8.tkaoG3ZD1aY1pgeWjDS3R');

const endpointLinks = {
  'deviantart': '[DeviantArt](https://www.deviantart.com/)',
  'discord': '[Discord](https://discord.com/)',
  'meta': 'JAPI - Meta Fetcher',
  'mywaifulist': '[MyWaifuList](https://mywaifulist.moe/)',
  'pcpartpicker': '[PCPartPicker](https://pcpartpicker.com/)',
  'presence': '[JAPI Presence](https://docs.japi.rest/#japi-presence)',
  'wikihow': '[WikiHow](https://wikihow.com/)',
  // 'reddit': '[Reddit](https://www.reddit.com/)',
  // 'twitter': '[Twitter](https://twitter.com/)',
  // 'youtube': '[YouTube](https://www.youtube.com/)',
}

console.log('\n\n\n')
console.log('| Endpoint      | Service                      | Routes                       |')
console.log('|:-------------:|------------------------------|------------------------------|')
console.log(Object.keys(japiRest).filter(key => !['key','baseUrl'].includes(key)).map(key => `| \`${key}\` | ${endpointLinks[key] || key} | ${Object.keys(japiRest[key]).filter(m=>!['main','route'].includes(m)).join(', ')} |`).join('\n'))