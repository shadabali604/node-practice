const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}


const doWork = async () => {
  const sum = await add(5, 15);
  const sum2 = await add(sum, 5)
}


 doWork().then((result) => {
   console.log(result)
 }).catch((e) => {
     console.log(e)
 })
