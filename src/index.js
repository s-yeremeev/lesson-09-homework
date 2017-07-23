function Content (author, tema, text) {
    const htmlElement = document.createElement("div")
    htmlElement.classList.add("new-content")
    htmlElement.innerText = `
        ${author}\n
        ${tema}\n
        ${text}
    `

    likeElement = document.createElement("like")
    likeElement.classList.add("like-class")
    likeElement.innerText = "Like "

    htmlElement.appendChild(likeElement)

    this.htmlElement = htmlElement
}

Content.prototype.add = function (element) {
    element.prepend(this.htmlElement)
}

Content.prototype.start = function (callback) {
    this.interval = setInterval(callback, this.ms)
    return this
}

function Timer(ms) {
    this.ms = ms
    this.interval = null
}

Timer.prototype.start = function (callback) {
    this.interval = setInterval(callback, this.ms)
    return this
}
Timer.prototype.stop = function () {
    clearInterval(this.interval)
    return this
}
Timer.prototype.stopAfter = function (ms, callback) {
    setTimeout(callback, ms)
    return this
}

const timer = new Timer(1000)
timer.start(function () {
const content = new Content(
            "Author", 
            "Thema", 
            "Content 1"
        )
    content.add(document.getElementsByTagName("content")[0])
         })
 .stopAfter(5000, timer.stop.bind(timer))