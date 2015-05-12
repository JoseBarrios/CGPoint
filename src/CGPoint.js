'use strict'

export default class CGPoint {

    constructor(x = 0, y = 0) {
        //Define x and y props with default setter
        Object.defineProperties(this, {
            'x': {
                get: function(){return parseInt(x) },
                set: function(newX){ x = parseInt(newX) }
            },
            'y':{
                get: function(){return parseInt(y)},
                set: function(newY){ y = parseInt(newY) }
            },
        });
    }

    get(){
        return {x:this.x, y:this.y}
    }

    // Returns true if equal
    equalToPoint(otherPoint = new CGPoint()) {
        var xMatch = Object.is(this.x, otherPoint.x);
        var yMatch = Object.is(this.y, otherPoint.y);
        return (xMatch && yMatch);
    }
};
