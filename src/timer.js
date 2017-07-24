/**
 * function for add new element in HTML
 */
function Timer(ms) {
    this.ms = ms
    this.interval = null
}

/**
 * function for start count in ms
 */
Timer.prototype.start = function (callback) {
    this.interval = setInterval(callback, this.ms)
    return this
}

/**
 * function for clear interval
 */
Timer.prototype.stop = function () {
    clearInterval(this.interval)
    return this
}

/**
 * function for stop count in ms
 */
Timer.prototype.stopAfter = function (ms, callback) {
    setTimeout(callback, ms)
    return this
}

const timer = new Timer(1000)
timer.start(function () {
     let like = document.getElementsByTagName('like')
     let post = Math.floor(Math.random() * like.length) //Take random element of the array of posts
     let likeNumber = +(like[post].innerText.replace(/\D+/,"")) //We take from received string only Number
     let likeRand = Math.floor(Math.random() * (10 + 1))
     like[post].innerText = "Like: " + (likeRand + likeNumber) //Add to already existing likes, random number 0-10
          })
  .stopAfter(15000, timer.stop.bind(timer))