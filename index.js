console.log('If it ends with Test Successful it worked.')
// Normally it is require("discord.bio")
const { Bio } = require('discord.bio')
const { profile } = require('console')
const bio = new Bio({ rest:{
  base_url:'https://api.discord.bio'
}})
console.log(bio.options)
console.log(`Library version:${require('./package.json').version}`)
Promise.all([
bio.users.details('nickchan'),
]).then(result => { 
    console.log(result[0])
    result[0].connect()
    const githubURL = result[0].user.discordConnections.find(x => x.type === 'github').url
    console.log(`GitHub URL: ` + githubURL)
    result[0].on('raw',console.log)
    result[0].once('viewCountUpdate',(oldCount,newCount) => {
      console.log(`Old view counr: ${oldCount}`)
      console.log(`New view count: ${newCount}`)
    })
    result[0].once('subscribe',() => {
      console.log('Test successful ')
      process.exit()
    })
    console.log(`Avatar URL of Nick Chan#0001: ${result[0].discord.avatarURL({ size:1024,dynamic:true })}`)
    console.log(`Display Avatar URL of Nick Chan#0001: ${result[0].discord.displayAvatarURL({ size:1024,dynamic:true })}`)
    console.log(`Default URL of Nick Chan#0001: ${result[0].discord.defaultAvatarURL}`)
 })
.catch(error => {
    console.error("Test failed,reason:")
    console.error(error.stack)
    process.exit(1)
})