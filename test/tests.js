const assert = require("assert");
const CGPoint = require(`../src/CGPoint.js`);

//Points
const DEFAULT = new CGPoint();
const ZERO = new CGPoint(0,0);
const POSITIVE = new CGPoint(1, 3);
const NEGATIVE = new CGPoint(-1, -3);
const MIXED = new CGPoint(1, -3);
const DOUBLE = new CGPoint(1.2, -3.4 );
const STRING = new CGPoint("-1.2", "3.4" );
const INFINITE = new CGPoint(Infinity, Infinity);
//Errors
const EQUALTO_ERROR_MSG = '#equalTo(): Expects argument of type CGPoint';
const EQUALTO_ERROR = new TypeError(EQUALTO_ERROR_MSG);


describe(`CGPoint Static Methods`, function(){

  describe(`CGPoint.zero`, function(){
    it(`returns a new instance of CGPoint(0,0)`, function(){
      assert.deepEqual( CGPoint.zero, new CGPoint(0,0));
      CGPoint.zero.x = 1;
      assert.deepEqual( CGPoint.zero, new CGPoint(0,0));
    })
  });

  describe(`CGPoint.null`, function(){
    it(`returns a new instance of CGPoint where x, y are null`, function(){
      assert.deepEqual(CGPoint.null, new CGPoint());
      let nullPoint = new CGPoint(0,0);
      nullPoint.x = null;
      nullPoint.y = null;
      assert.deepEqual( CGPoint.null, nullPoint);
    })
  });

  describe(`CGPoint.infinite`, function(){
    it(`returns a new instance of CGPoint where x, y are Infinte`, function(){
      assert.deepEqual(CGPoint.infinite, new CGPoint(Infinity, Infinity));
    })
  });

  describe(`CGPoint.integral(point)`, function(){
    it(`CGPoint.integral(ZERO) should return {0,0}`, function(){
      assert.deepEqual( CGPoint.integral(ZERO), new CGPoint(0,0) );
    });
    it(`CGPoint.integral(POSITIVE) should return {1,3}`, function(){
      assert.deepEqual( CGPoint.integral(POSITIVE), new CGPoint(1,3) );
    });
    it(`CGPoint.integral(NEGATIVE) should return {-1,-3}`, function(){
      assert.deepEqual( CGPoint.integral(NEGATIVE), new CGPoint(-1,-3) );
    });
    it(`CGPoint.integral(MIXED) should return {1,-3}`, function(){
      assert.deepEqual( CGPoint.integral(MIXED), new CGPoint(1,-3) );
    });
    it(`CGPoint.integral(DOUBLE) should return {1,-4}`, function(){
      assert.deepEqual( CGPoint.integral(DOUBLE), new CGPoint(1,-4) );
    });
    it(`CGPoint.integral(STRING) should return {-2,3}`, function(){
      assert.deepEqual( CGPoint.integral(STRING), new CGPoint(-2,3) );
    });
  });

  describe(`CGPoint.fromString()`, function(){
    it(`CGPoint.fromString("{0,0}") should return ${ZERO}`, function(){
      assert.deepEqual( CGPoint.fromString("{0,0}"), ZERO );
    });
    it(`CGPoint.fromString("{1,3}") should return ${POSITIVE}`, function(){
      assert.deepEqual( CGPoint.fromString("{1,3}"), POSITIVE );
    });
    it(`CGPoint.fromString("{-1,-3}") should return ${NEGATIVE}`, function(){
      assert.deepEqual( CGPoint.fromString("{-1,-3}"), NEGATIVE );
    });
    it(`CGPoint.fromString("{1,-3}") should return ${MIXED}`, function(){
      assert.deepEqual( CGPoint.fromString("{1,-3}"), MIXED );
    });
    it(`CGPoint.fromString("{1.2,-3.4}") should return ${DOUBLE}`, function(){
      assert.deepEqual( CGPoint.fromString("1.2,-3.4"), DOUBLE );
    });
    it(`CGPoint.fromString("@#$!@#$") should return ${ZERO}`, function(){
      assert.deepEqual( CGPoint.fromString("@#!$%@#"), ZERO );
    });
  });

  describe(`CGPoint.toString()`, function(){
    it(`CGPoint.toString(ZERO) should return "{0,0}"`, function(){
      assert.equal( CGPoint.toString(ZERO), `{0,0}` );
    });
    it(`CGPoint.toString(POSITIVE) should return "{1,3}"`, function(){
      assert.equal( CGPoint.toString(POSITIVE), `{1,3}` );
    });
    it(`CGPoint.toString(NEGATIVE) should return "{-1,-3}"`, function(){
      assert.equal( CGPoint.toString(NEGATIVE), `{-1,-3}` );
    });
    it(`CGPoint.toString(MIXED) should return "{1,-3}"`, function(){
      assert.equal( CGPoint.toString(MIXED), `{1,-3}` );
    });
    it(`CGPoint.toString(DOUBLE) should return "{1.2,-3.4}"`, function(){
      assert.equal( CGPoint.toString(DOUBLE), `{1.2,-3.4}` );
    });
    it(`CGPoint.toString(STRING) should return "{-1.2,3.4}"`, function(){
      assert.equal( CGPoint.toString(STRING), `{-1.2,3.4}` );
    });
  });

});

describe(`CGPoint Instance Methods`, function(){

  describe(`#constructor()`, function(){
    it(`DEFAULT.x should return null`, function(){
      assert.equal( DEFAULT.x, null );
    });
    it(`DEFAULT.y should return null`, function(){
      assert.equal( DEFAULT.y, null );
    });
    it(`ZERO.x should return null`, function(){
      assert.equal( ZERO.x, 0 );
    });
    it(`ZERO.y should return null`, function(){
      assert.equal( ZERO.y, 0 );
    });
    it(`POSITIVE.x should return 1`, function(){
      assert.equal( POSITIVE.x, 1 );
    });
    it(`POSITIVE.y should return 3`, function(){
      assert.equal( POSITIVE.y, 3 );
    });
    it(`NEGATIVE.x should return -1`, function(){
      assert.equal( NEGATIVE.x, -1 );
    });
    it(`NEGATIVE.y should return -3`, function(){
      assert.equal( NEGATIVE.y, -3 );
    });
    it(`MIXED.x should return 1`, function(){
      assert.equal( MIXED.x, 1 );
    });
    it(`MIXED.y should return -3`, function(){
      assert.equal( MIXED.y, -3 );
    });
    it(`DOUBLE.x should return 1.2`, function(){
      assert.equal( DOUBLE.x, 1.2 );
    });
    it(`DOUBLE.y should return -3.4`, function(){
      assert.equal( DOUBLE.y, -3.4 );
    });
    it(`STRING.x should return "-1.2"`, function(){
      assert.equal( STRING.x, "-1.2" );
    });
    it(`STRING.y should return "3.4"`, function(){
      assert.equal( STRING.y, "3.4" );
    });
  });

  describe(`#isEmpty`, function(){
    it(`DEFAULT.isEmpty should be true`, function(){
      assert.equal( DEFAULT.isEmpty, true);
    });
  });

  describe(`#isInfinite`, function(){
    it(`INFINITE.isInfinite should be true`, function(){
      assert.equal( INFINITE.isInfinite, true);
    });
  });

  describe(`#isNull`, function(){
    it(`DEFAULT.isNull should be true`, function(){
      assert.equal( DEFAULT.isNull, true);
    });
  });

  describe(`#equalTo()`, function(){

    it(`ZERO should equal ZERO`, function(){
      assert.equal( ZERO.equalTo(ZERO), true);
    });
    it(`ZERO should not equal DEFAULT`, function(){
      assert.equal( ZERO.equalTo(DEFAULT), false );
    });
    it(`ZERO should not equal POSITIVE`, function(){
      assert.equal( ZERO.equalTo(POSITIVE), false );
    });
    it(`ZERO should not equal NEGATIVE`, function(){
      assert.equal( ZERO.equalTo(NEGATIVE), false );
    });
    it(`ZERO should not equal MIXED`, function(){
      assert.equal( ZERO.equalTo(MIXED), false );
    });
    it(`ZERO should not equal DOUBLE`, function(){
      assert.equal( ZERO.equalTo(DOUBLE), false );
    });
    it(`ZERO should not equal STRING`, function(){
      assert.equal( ZERO.equalTo(STRING), false );
    });


    it(`DEFAULT should not equal ZERO`, function(){
      assert.equal( DEFAULT.equalTo(ZERO), false);
    });
    it(`DEFAULT should equal DEFAULT`, function(){
      assert.equal( DEFAULT.equalTo(DEFAULT), true);
    });
    it(`DEFAULT should not equal POSITIVE`, function(){
      assert.equal( DEFAULT.equalTo(POSITIVE), false );
    });
    it(`DEFAULT should not equal NEGATIVE`, function(){
      assert.equal( DEFAULT.equalTo(NEGATIVE), false );
    });
    it(`DEFAULT should not equal MIXED`, function(){
      assert.equal( DEFAULT.equalTo(MIXED), false );
    });
    it(`DEFAULT should not equal DOUBLE`, function(){
      assert.equal( DEFAULT.equalTo(DOUBLE), false );
    });
    it(`DEFAULT should not equal STRING`, function(){
      assert.equal( DEFAULT.equalTo(STRING), false );
    });


    it(`POSITIVE should not equal ZERO`, function(){
      assert.equal( POSITIVE.equalTo(ZERO), false);
    });
    it(`POSITIVE should not equal DEFAULT`, function(){
      assert.equal( POSITIVE.equalTo(DEFAULT), false);
    });
    it(`POSITIVE should equal POSITIVE`, function(){
      assert.equal( POSITIVE.equalTo(POSITIVE), true );
    });
    it(`POSITIVE should not equal NEGATIVE`, function(){
      assert.equal( POSITIVE.equalTo(NEGATIVE), false );
    });
    it(`POSITIVE should not equal MIXED`, function(){
      assert.equal( POSITIVE.equalTo(MIXED), false );
    });
    it(`POSITIVE should not equal DOUBLE`, function(){
      assert.equal( POSITIVE.equalTo(DOUBLE), false );
    });
    it(`POSITIVE should not equal STRING`, function(){
      assert.equal( POSITIVE.equalTo(STRING), false );
    });


    it(`NEGATIVE should not equal ZERO`, function(){
      assert.equal( NEGATIVE.equalTo(ZERO), false);
    });
    it(`NEGATIVE should not equal DEFAULT`, function(){
      assert.equal( NEGATIVE.equalTo(DEFAULT), false);
    });
    it(`NEGATIVE should not equal POSITIVE`, function(){
      assert.equal( NEGATIVE.equalTo(POSITIVE), false);
    });
    it(`NEGATIVE should equal NEGATIVE`, function(){
      assert.equal( NEGATIVE.equalTo(NEGATIVE), true );
    });
    it(`NEGATIVE should not equal MIXED`, function(){
      assert.equal( NEGATIVE.equalTo(MIXED), false );
    });
    it(`NEGATIVE should not equal DOUBLE`, function(){
      assert.equal( NEGATIVE.equalTo(DOUBLE), false );
    });
    it(`NEGATIVE should not equal STRING`, function(){
      assert.equal( NEGATIVE.equalTo(STRING), false );
    });


    it(`MIXED should not equal ZERO`, function(){
      assert.equal( MIXED.equalTo(ZERO), false);
    });
    it(`MIXED should not equal DEFAULT`, function(){
      assert.equal( MIXED.equalTo(DEFAULT), false);
    });
    it(`MIXED should not equal POSITIVE`, function(){
      assert.equal( MIXED.equalTo(POSITIVE), false);
    });
    it(`MIXED should not equal NEGATIVE`, function(){
      assert.equal( MIXED.equalTo(NEGATIVE), false );
    });
    it(`MIXED should equal MIXED`, function(){
      assert.equal( MIXED.equalTo(MIXED), true );
    });
    it(`MIXED should not equal DOUBLE`, function(){
      assert.equal( MIXED.equalTo(DOUBLE), false );
    });
    it(`MIXED should not equal STRING`, function(){
      assert.equal( MIXED.equalTo(STRING), false );
    });


    it(`DOUBLE should not equal ZERO`, function(){
      assert.equal( DOUBLE.equalTo(ZERO), false);
    });
    it(`DOUBLE should not equal DEFAULT`, function(){
      assert.equal( DOUBLE.equalTo(DEFAULT), false);
    });
    it(`DOUBLE should not equal POSITIVE`, function(){
      assert.equal( DOUBLE.equalTo(POSITIVE), false);
    });
    it(`DOUBLE should not equal NEGATIVE`, function(){
      assert.equal( DOUBLE.equalTo(NEGATIVE), false);
    });
    it(`DOUBLE should equal DOUBLE`, function(){
      assert.equal( DOUBLE.equalTo(DOUBLE), true );
    });
    it(`DOUBLE should not equal STRING`, function(){
      assert.equal( DOUBLE.equalTo(STRING), false );
    });


    it(`STRING should not equal ZERO`, function(){
      assert.equal( STRING.equalTo(ZERO), false);
    });
    it(`STRING should not equal DEFAULT`, function(){
      assert.equal( STRING.equalTo(DEFAULT), false);
    });
    it(`STRING should not equal POSITIVE`, function(){
      assert.equal( STRING.equalTo(POSITIVE), false);
    });
    it(`STRING should not equal NEGATIVE`, function(){
      assert.equal( STRING.equalTo(NEGATIVE), false);
    });
    it(`STRING should not equal DOUBLE`, function(){
      assert.equal( STRING.equalTo(DOUBLE), false );
    });
    it(`STRING should equal STRING`, function(){
      assert.equal( STRING.equalTo(STRING), true );
    });


    it(`#.equalTo() throws expected Errors`, function(){
      let point = new CGPoint();
      assert.throws( point.equalTo, TypeError );
    })
  });

})
