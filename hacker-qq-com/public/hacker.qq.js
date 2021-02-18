const request = new XMLHttpRequest()
request.open('GET', 'localhost:8889/friends.json')
request.onreadystatechange = () => {
    let object
    if (request.readyState === 4) {
        if (request.status >= 200 && request.status < 300) {
            try {
                object = request.response
                console.log(object)
            } catch (error) {
                console.log('出错了，原因是：')
                console.log(error)
            }
        }
    }
}
request.send()