import Point from '../src/ts/Point'
import Rectangle from '../src/ts/Rectangle'

describe('Rectangle', () => {
    it('area', () => {
        const p1 = new Point(0, 0)
        const p2 = new Point(5, 3)
        const rectangle = new Rectangle(p1, p2)
        expect(rectangle.area()).toBe(15)
    })
})
