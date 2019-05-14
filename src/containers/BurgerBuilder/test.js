

const callback1 = (cb) => {
    setTimeout(() => {
        cb()
    }, 2000)
    console.log(1)
}

const callback2 = (cb) => {
    setTimeout(() => {
        cb()
    }, 1000)
    console.log(2)
}

const callback3 = (cb) => {
    setTimeout(() => {
        cb()
    }, 500) 
    console.log(3)
}  

callback1(() => {
    callback2(() => {
        callback3(() => {
            console.log(fuck)
        })
    })
})
