const assert = require("assert");
const Point = require(`../src/CGPoint.js`);

describe(`Point`, function(){

    const DEFAULT_VALUES = new Point();
    const POSITIVE_POINTS = new Point(1, 3);
    const NEGATIVE_VALUES = new Point(-1, -3);
    const MIXED_VALUES = new Point(1, -3);
    const REFERENCE_ERROR = new ReferenceError('equalTo(): Expects at least 1 argument of type CGPoint');
    const TYPE_ERROR = new TypeError('equalTo(): Expects at least 1 argument of type CGPoint');

    //TODO
    const DOUBLE_VALUES = new Point(1.1, -3.3 );
    const STRING_VALUES = new Point("-1.1", "3.3" );


    describe(`#constructor()`, function(){
        it(`default coordinate properties equal 0`, function(){
            assert.equal( DEFAULT_VALUES.x, 0, `Default value for point.x should equal 0, instead of ${DEFAULT_VALUES.x}`);
            assert.equal( DEFAULT_VALUES.y, 0, `Default value for point.x should equal 0, instead of ${DEFAULT_VALUES.y}`);
        })
    });

    describe(`#toString()`, function(){
        it(`returns a string representing the Point`, function(){
            assert.equal( DEFAULT_VALUES.toString(), new Point(0, 0).toString(), `${DEFAULT_VALUES.toString()} should equal ${ new Point().toString()}`);
            assert.equal( DEFAULT_VALUES.toString(), `{0, 0}`, `${DEFAULT_VALUES.toString()} should equal ${ new Point().toString()}`);
            assert.equal( POSITIVE_POINTS.toString(), `{1, 3}`, `${POSITIVE_POINTS.toString()} should equal ${ new Point(1, 3).toString()}`);
            assert.equal( NEGATIVE_VALUES.toString(), `{-1, -3}`, `${NEGATIVE_VALUES.toString()} should equal ${ new Point(-1, -3).toString()}`);
            assert.equal( MIXED_VALUES.toString(), `{1, -3}`, `${NEGATIVE_VALUES.toString()} should equal ${ new Point(1, -3).toString()}`);
        })
    });


    describe(`#equalTo()`, function(){
        it(`returns correct value for point comparasion`, function(){
            assert.equal( POSITIVE_POINTS.equalTo(DEFAULT_VALUES), false, `${POSITIVE_POINTS.toString()} should not match ${DEFAULT_VALUES.toString()}` );
            assert.equal( POSITIVE_POINTS.equalTo(POSITIVE_POINTS), true, `${POSITIVE_POINTS.toString()} should equal ${POSITIVE_POINTS.toString()}` );
            assert.equal( POSITIVE_POINTS.equalTo(new Point(1, 3)), true, `${POSITIVE_POINTS.toString()} should match ${new Point(1,3).toString()}` );
            assert.equal( POSITIVE_POINTS.equalTo(new Point()), false, `${POSITIVE_POINTS.toString()} should not match ${new Point().toString()}` );
            assert.equal( MIXED_VALUES.equalTo(new Point(1, -3)), true, `${MIXED_VALUES.toString()} should equal ${new Point(1, -3).toString()}` );
            assert.equal( NEGATIVE_VALUES.equalTo(new Point(-1, -3)), true, `${NEGATIVE_VALUES.toString()} should equal ${new Point(-1, -3)}` );
        })
        it(`throws expected Errors`, function(){
            assert.throws( DEFAULT_VALUES.equalTo, ReferenceError, 'equalTo(): Expects at least 1 argument of type CGPoint');
        })
    });


    describe(`#ZERO (static property)`, function(){
        it(`returns an instance of Point(0,0)`, function(){
            assert.deepEqual( Point.ZERO, new Point(0, 0), `static property ZERO should equal ${ new Point(0,0).toString() }`);
            assert.deepEqual( Point.ZERO, new Point(), `static property ZERO should equal ${ new Point().toString() }`);
        })
    });

});
