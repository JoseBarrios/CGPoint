const assert = require("assert");
const Point = require(`../src/CGPoint.js`);

describe(`Point`, function(){

  //Points
  const DEFAULT = new Point();
  const ZERO = new Point(0,0);
  const POSITIVE = new Point(1, 3);
  const NEGATIVE = new Point(-1, -3);
  const MIXED = new Point(1, -3);
  const DOUBLE = new Point(1.2, -3.4 );
  const STRING = new Point("-1.2", "3.4" );
  const INFINITE = new Point(Infinity, Infinity);
  //Errors
  const EQUALTO_ERROR_MSG = '#equalTo(): Expects argument of type CGPoint';
  const EQUALTO_ERROR = new TypeError(EQUALTO_ERROR_MSG);

  describe(`Point.zero`, function(){
    it(`returns a new instance of Point(0,0)`, function(){
      assert.deepEqual( Point.zero, new Point(0,0));
      Point.zero.x = 1;
      assert.deepEqual( Point.zero, new Point(0,0));
    })
  });

  describe(`Point.null`, function(){
    it(`returns a new instance of Point where x, y are null`, function(){
      assert.deepEqual(Point.null, new Point());
      let nullPoint = new Point(0,0);
      nullPoint.x = null;
      nullPoint.y = null;
      assert.deepEqual( Point.null, nullPoint);
    })
  });

  describe(`Point.infinite`, function(){
    it(`returns a new instance of Point where x, y are Infinte`, function(){
      assert.deepEqual(Point.infinite, new Point(Infinity, Infinity));
    })
  });

  describe(`Point.integral(point)`, function(){
    it(`Point.integral(ZERO) should return {0,0}`, function(){
      assert.deepEqual( Point.integral(ZERO), new Point(0,0) );
    });
    it(`Point.integral(POSITIVE) should return {1,3}`, function(){
      assert.deepEqual( Point.integral(POSITIVE), new Point(1,3) );
    });
    it(`Point.integral(NEGATIVE) should return {-1,-3}`, function(){
      assert.deepEqual( Point.integral(NEGATIVE), new Point(-1,-3) );
    });
    it(`Point.integral(MIXED) should return {1,-3}`, function(){
      assert.deepEqual( Point.integral(MIXED), new Point(1,-3) );
    });
    it(`Point.integral(DOUBLE) should return {1,-4}`, function(){
      assert.deepEqual( Point.integral(DOUBLE), new Point(1,-4) );
    });
    it(`Point.integral(STRING) should return {-2,3}`, function(){
      assert.deepEqual( Point.integral(STRING), new Point(-2,3) );
    });
  });

  describe(`Point.fromString()`, function(){
    it(`CGPoint.fromString("{0,0}") should return ${ZERO}`, function(){
      assert.deepEqual( Point.fromString("{0,0}"), ZERO );
    });
    it(`CGPoint.fromString("{1,3}") should return ${POSITIVE}`, function(){
      assert.deepEqual( Point.fromString("{1,3}"), POSITIVE );
    });
    it(`CGPoint.fromString("{-1,-3}") should return ${NEGATIVE}`, function(){
      assert.deepEqual( Point.fromString("{-1,-3}"), NEGATIVE );
    });
    it(`CGPoint.fromString("{1,-3}") should return ${MIXED}`, function(){
      assert.deepEqual( Point.fromString("{1,-3}"), MIXED );
    });
    it(`CGPoint.fromString("{1.2,-3.4}") should return ${DOUBLE}`, function(){
      assert.deepEqual( Point.fromString("1.2,-3.4"), DOUBLE );
    });
    it(`CGPoint.fromString("@#$!@#$") should return ${ZERO}`, function(){
      assert.deepEqual( Point.fromString("@#!$%@#"), ZERO );
    });

  });

  describe(`Point.toString()`, function(){
    it(`Point.toString(ZERO) should return "{0,0}"`, function(){
      assert.equal( Point.toString(ZERO), `{0,0}` );
    });
    it(`Point.toString(POSITIVE) should return "{1,3}"`, function(){
      assert.equal( Point.toString(POSITIVE), `{1,3}` );
    });
    it(`Point.toString(NEGATIVE) should return "{-1,-3}"`, function(){
      assert.equal( Point.toString(NEGATIVE), `{-1,-3}` );
    });
    it(`Point.toString(MIXED) should return "{1,-3}"`, function(){
      assert.equal( Point.toString(MIXED), `{1,-3}` );
    });
    it(`Point.toString(DOUBLE) should return "{1.2,-3.4}"`, function(){
      assert.equal( Point.toString(DOUBLE), `{1.2,-3.4}` );
    });
    it(`Point.toString(STRING) should return "{-1.2,3.4}"`, function(){
      assert.equal( Point.toString(STRING), `{-1.2,3.4}` );
    });
  });

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
      let point = new Point();
      assert.throws( point.equalTo, TypeError );
    })
  });


});
