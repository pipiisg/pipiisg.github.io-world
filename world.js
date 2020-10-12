const can = document.getElementById('canvas')
const c = can.getContext('2d')

can.height = window.innerHeight
can.width = window.innerWidth
console.log("hi")
can.focus()

var H = can.height
var W = can.width

var year = 0

var dis = true

const world = new Image()

const toCan = (l) => {
    return [(l[1]+180) / 360 * 650, 550 - 350 * Math.log(Math.tan(Math.PI / 4 + l[0] / 360 * Math.PI))]
}

class Country{
    constructor(points){
        this.points = points
    }
    display(){
        c.fillStyle = "#FFFFFF"
        c.fillRect(0, 0, W, H)
        c.fillStyle = "#FF0000"
        var yr = year - year % 10
        var pts = this.points[yr]
        c.beginPath()
        c.moveTo(toCan(pts[pts.length-1])[0], toCan(pts[pts.length-1])[1])
        for (var i = 0; i < pts.length; i++){
            c.lineTo(toCan(pts[i])[0], toCan(pts[i])[1])
        }
        c.fill()
    }
}

var mongol = new Country({
    0:[[56.9, 109.7], [56.3, 120.2], [48.6, 132], [39.8, 120], [46.5, 88.8]]
})

const loop = () => {
    mongol.display()
    if (dis){
        c.drawImage(world, 0, 0)
    }
}
setInterval(loop, 30)
world.src = "moutline.gif"

window.addEventListener("keypress", () => {
    if (event.key == "s"){
        if (dis){
            dis = false
        }
        else{
            dis = true
        }
    }
})
