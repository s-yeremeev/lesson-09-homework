/**
 * function Content for add new post
 * @param {String} tema
 * @param {String} text
 * @param {String} author
 */
function Content (tema, text, author) {
    const htmlElement = document.createElement("div")

    titleElement = document.createElement("h1")
    titleElement.classList.add("title")
    titleElement.style.color = "red"
    titleElement.innerText = `${tema}\n`
    htmlElement.appendChild(titleElement)

    subtitleElement = document.createElement("h2")
    subtitleElement.classList.add("subtitle")
    subtitleElement.innerText = `${text}\n`
    htmlElement.appendChild(subtitleElement)

    authorElement = document.createElement("h3")
    authorElement.classList.add("author")
    authorElement.style.color = "green"
    authorElement.innerText = `${author}\n`
    htmlElement.appendChild(authorElement)

    likeElement = document.createElement("like")
    likeElement.classList.add("like-class")
    likeElement.style.color = "blue"
    likeElement.innerText = "Like: 0"
    htmlElement.appendChild(likeElement)

    this.htmlElement = htmlElement
}

/**
 * function for add new element in HTML
 */
Content.prototype.add = function (element) {
    element.prepend(this.htmlElement)
}


const content_one = new Content(
        "Warning!!!", 
        "Before running the build, run warning: add key='new' in application.xml", 
        "s.yeremeev"
        )
content_one.add(document.getElementsByTagName("content")[0])
const content_two = new Content(
        "Commit", 
        "The commit must contain voluminous information.",
        "p.dubkin"
    )
content_two.add(document.getElementsByTagName("content")[0])
const content_three = new Content(
        "Merge", 
        "Before merge check the intersection", 
        "l.vasuk"
    )
content_three.add(document.getElementsByTagName("content")[0])
const content_four = new Content(
        "Attention", 
        "In the company changes, new employees are accepted", 
        "Director"
    )
content_four.add(document.getElementsByTagName("content")[0])
const content_five = new Content(
        "Holiday", 
        "Have a nice weekend, see you in 2 days", 
        "Admin"
    )
content_five.add(document.getElementsByTagName("content")[0])