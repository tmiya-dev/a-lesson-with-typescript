import Point from './Point'

class Rectangle {
    p1: Point
    p2: Point

    constructor(p1: Point, p2: Point) {
        this.p1 = p1
        this.p2 = p2
    }

    area(): number {
        const width = Math.abs(this.p1.x - this.p2.x)
        const height = Math.abs(this.p1.y - this.p2.y)
        return width * height
    }
}

export default Rectangle
