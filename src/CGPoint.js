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

    // Returns true if equal
    equalToPoint(otherPoint) {
        var thisPoint = this;
        var otherPoint = otherPoint || {};
        var xMatch = Object.is(thisPoint.x, otherPoint.x);
        var yMatch = Object.is(thisPoint.y, otherPoint.y);
        return (xMatch && yMatch);
    }
};
