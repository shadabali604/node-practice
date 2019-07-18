const Work = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([8, 5, 6])
    }, 2000)
})
Work.then((result) => {
    console.log('success', result)
})