function sleep(delay){
    return new Promise((res,rej)=>{
     if(typeof delay!="number"){
    rej("delay needs to be number")
     }
     if(delay<0){
     rej("delay needs to be greater than 0")
     }
     setTimeout(()=>{
     res("Succes!")
     },delay)
    })
}
sleep(4000).then(res=>{
    console.log(res)
}).catch(err=>{
    console.log(err)
})