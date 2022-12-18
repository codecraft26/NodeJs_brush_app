const ProgressBar=require("progress")
const chalk=require("chalk")
const bar=new ProgressBar("downloading [:bar]:rate/bps :percent :etas ",{

    total:2000,
},)

const timer=setInterval(()=>{
    bar.tick();
    if(bar.complete){
        clearInterval(timer)
    }
})
console.log(chalk.red("this is a node js "))