// Your code here
class Polygon {
    constructor (arry) {
        this.arry = arry
    }
    get countSides() {
        return this.arry.length
    }
    get perimeter() {
        return this.arry.reduce((a,b) => a+b,0)
    }
}

class Triangle extends Polygon {
    get isValid () {
        this.arry.sort((a,b) => a-b)
        let k = 2
        let count = 0
        for (let i=0; i<this.arry.length -2; i++){
            for (let j=(i+1); j<this.arry.length -1; j++) {
                k=j+1
                if(this.arry[k]<this.arry[i] + this.arry[j]) {
                    return true
                }
            }
        }
        return false
    }
}


class Square extends Polygon {
    get isValid () {
        for (let i= 1; i<this.arry.length; i++){
            if (this.arry[i]===this.arry[0]) {
                return true
            }
        }
        return false
    }
    get area () {
        return this.arry[0]*this.arry[1]
    }
}


// It will automatically have access to count and perimeter inherited from Polygon.
// Use the get keyword to make a getter method isValid that checks if the given 4 sides for a square is valid. A square is valid when the lengths of all sides are equal.
// Use the get keyword to make a getter method area that calculates the area of the square.