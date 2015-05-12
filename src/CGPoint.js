'use strict'

export default class CGPoint {

    constructor(x = null, y = null) {
        var xCoordinate = Object.is(parseInt(x), NaN)? null : parseInt(x);
        var yCoordinate = Object.is(parseInt(y), NaN)? null : parseInt(y);

        //Define x and y props with default setter
        Object.defineProperties(this, {
            'x': {
                get: function(){return xCoordinate },
                set: function(x){ xCoordinate = parseInt(x) }
            },
            'y':{
                get: function(){return yCoordinate},
                set: function(y){ yCoordinate = parseInt(y) }
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
