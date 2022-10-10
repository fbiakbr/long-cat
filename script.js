const app = document.getElementById("app")

const add = (src, alt, className) => {
    const img = document.createElement("img")
    img.src = src
    img.alt = alt
    // img.style.display = "none"

    if (className) {
        img.className = className
    }

    // img.onload = () => {
    //     img.style.display = "block"
    // }

    app.appendChild(img)
}

// use base64 for instant load
const addHead = () => add("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAAlCAYAAAAa0FocAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG/SURBVHgB7ZkxS8QwFMdz4kfw4AQHRz/VOVhRVHQ+cBQ6KzqIXfxWjg6CB+fg5uBQ/RdeCCFJm+a9XiH9QblC0pDfey9pw83qf1SG7KhMmcRzYxIfG5fFsRKlHiEXJ8v69+e7+ZVidOIkTZeUvEipo0y5SvX+8UGk7MXW+Op2FR0A9IXoEOwqQSC/WOxr+afqVbfFBISybj6fiqg4WK8/dRZNWQTF1x8gYJKIixMQ8sn6+gOpAAzyHieJFLg3OXZxTC4mszblXdlcBEfQXLCK29K2RBvoe14tm0taXqzUfRIpcJb7YJtbF1AtZVHqe0nExPtKSAsT4h8wHEi80qLEU9cX1rodjND6l8x+J3EStidycHjk7OuasE86JEdBoS+/m6trxUWreOi9/PH+pvpAQm0ZpXZOYWKGs6mvse/HiC+TpnBbtkNjcxxWWDa3r81G3+/N51oMmHK2qPmcD4wX078rvcRdG9LpWdH80uQgifvQ5vXyXHnb7PEQADMIqQTFUVKundxVaq5+mDwJxGIGBWMgAJziwTWeCoLRV9wHAsKxxkWPpZhgqJy3ifh5fKzy0z8puTGJ58YknhvZiv8Bj/25xG+CgUgAAAAASUVORK5CYII=", "Long Cat Head", "head")
const addBody = () => add("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAAoCAYAAACmTknCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABdSURBVHgB7c+xEYAgAATB10ZNcAysx8CRxEqVHoDobjvY5Wsy2Vm27EfJCM9dc9U3vdZAGacxTmOcxjiNcRrjNMZpjNMYpzFOY5zGOI1xGuM0xmmM0xinMU5jnOYHOFsKTFCgNrkAAAAASUVORK5CYII=", "Long Cat Body")

const addBodies = (initial = 100) => {
    for (let i = 0; i < initial; i++) {
        addBody()
    }
}

const onScroll = () => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight > scrollHeight - 5) {
        addBodies()
    }
}

addHead()
addBodies(50)
window.addEventListener("scroll", onScroll)
window.addEventListener("resize", onScroll)