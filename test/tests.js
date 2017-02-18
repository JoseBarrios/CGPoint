const assert = require("assert");
const Point = require(`../src/CGPoint.js`);

describe(`Point`, function(){

  //Points
  const DEFAULT = new Point();
  const POSITIVE = new Point(1, 3);
  const NEGATIVE = new Point(-1, -3);
  const MIXED = new Point(1, -3);
  const DOUBLE = new Point(1.2, -3.4 );
  const STRING = new Point("-1.2", "3.4" );
  //Errors
  const EQUALTO_ERROR_MSG = '#equalTo(): Expects argument of type CGPoint';
  const EQUALTO_ERROR = new TypeError(EQUALTO_ERROR_MSG);


  describe(`#constructor()`, function(){
    it(`DEFAULT.x should return null`, function(){
      assert.equal( DEFAULT.x, null );
    });
    it(`DEFAULT.y should return null`, function(){
      assert.equal( DEFAULT.y, null );
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

  describe(`#toString()`, function(){
    it(`DEFAULT.toString() should return "{null,null}"`, function(){
      assert.equal( DEFAULT.toString(), `{null,null}` );
    });
    it(`POSITIVE.toString() should return "{1,3}"`, function(){
      assert.equal( POSITIVE.toString(), `{1,3}` );
    });
    it(`NEGATIVE.toString() should return "{-1,-3}"`, function(){
      assert.equal( NEGATIVE.toString(), `{-1,-3}` );
    });
    it(`MIXED.toString() should return "{1,-3}"`, function(){
      assert.equal( MIXED.toString(), `{1,-3}` );
    });
    it(`DOUBLE.toString() should return "{1.2,-3.4}"`, function(){
      assert.equal( DOUBLE.toString(), `{1.2,-3.4}` );
    });
    it(`STRING.toString() should return "{-1.2,3.4}"`, function(){
      assert.equal( STRING.toString(), `{-1.2,3.4}` );
    });
  });


  describe(`#equalTo()`, function(){

    // CASE 1:
    it(`DEFAULT should equal DEFAULT`, function(){
      assert.equal( DEFAULT.equalTo(DEFAULT), true);
    });
    it(`DEFAULT should not equal POSITIVE`, function(){
      assert.equal( DEFAULT.equalTo(POSITIVE), false );
    });
    // CASE 2:
    it(`DEFAULT should not equal NEGATIVE`, function(){
      assert.equal( DEFAULT.equalTo(NEGATIVE), false );
    });
    // CASE 2:
    it(`DEFAULT should not equal MIXED`, function(){
      assert.equal( DEFAULT.equalTo(MIXED), false );
    });
    // CASE 2:
    it(`DEFAULT should not equal DOUBLE`, function(){
      assert.equal( DEFAULT.equalTo(DOUBLE), false );
    });
    // CASE 2:
    it(`DEFAULT should not equal STRING`, function(){
      assert.equal( DEFAULT.equalTo(STRING), false );
    });


    // CASE 1:
    it(`POSITIVE should not equal DEFAULT`, function(){
      assert.equal( POSITIVE.equalTo(DEFAULT), false);
    });
    it(`POSITIVE should equal POSITIVE`, function(){
      assert.equal( POSITIVE.equalTo(POSITIVE), true );
    });
    // CASE 2:
    it(`POSITIVE should not equal NEGATIVE`, function(){
      assert.equal( POSITIVE.equalTo(NEGATIVE), false );
    });
    // CASE 2:
    it(`POSITIVE should not equal MIXED`, function(){
      assert.equal( POSITIVE.equalTo(MIXED), false );
    });
    // CASE 2:
    it(`POSITIVE should not equal DOUBLE`, function(){
      assert.equal( POSITIVE.equalTo(DOUBLE), false );
    });
    // CASE 2:
    it(`POSITIVE should not equal STRING`, function(){
      assert.equal( POSITIVE.equalTo(STRING), false );
    });


    it(`NEGATIVE should not equal DEFAULT`, function(){
      assert.equal( NEGATIVE.equalTo(DEFAULT), false);
    });
    it(`NEGATIVE should not equal POSITIVE`, function(){
      assert.equal( NEGATIVE.equalTo(POSITIVE), false);
    });
    // CASE 2:
    it(`NEGATIVE should equal NEGATIVE`, function(){
      assert.equal( NEGATIVE.equalTo(NEGATIVE), true );
    });
    // CASE 2:
    it(`NEGATIVE should not equal MIXED`, function(){
      assert.equal( NEGATIVE.equalTo(MIXED), false );
    });
    // CASE 2:
    it(`NEGATIVE should not equal DOUBLE`, function(){
      assert.equal( NEGATIVE.equalTo(DOUBLE), false );
    });
    // CASE 2:
    it(`NEGATIVE should not equal STRING`, function(){
      assert.equal( NEGATIVE.equalTo(STRING), false );
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
        // CASE 2:
    it(`MIXED should equal MIXED`, function(){
      assert.equal( MIXED.equalTo(MIXED), true );
    });
    // CASE 2:
    it(`MIXED should not equal DOUBLE`, function(){
      assert.equal( MIXED.equalTo(DOUBLE), false );
    });
    // CASE 2:
    it(`MIXED should not equal STRING`, function(){
      assert.equal( MIXED.equalTo(STRING), false );
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
    // CASE 2:
    it(`DOUBLE should equal DOUBLE`, function(){
      assert.equal( DOUBLE.equalTo(DOUBLE), true );
    });
    // CASE 2:
    it(`DOUBLE should not equal STRING`, function(){
      assert.equal( DOUBLE.equalTo(STRING), false );
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
    // CASE 2:
    it(`STRING should not equal DOUBLE`, function(){
      assert.equal( STRING.equalTo(DOUBLE), false );
    });
    // CASE 2:
    it(`STRING should equal STRING`, function(){
      assert.equal( STRING.equalTo(STRING), true );
    });







    // CASE 9:
    it(`#.equalTo() throws expected Errors`, function(){
      let point = new Point();
      assert.throws( point.equalTo, TypeError );
    })
  });


  describe(`#zero (static property)`, function(){
    it(`returns an instance of Point(0,0)`, function(){
      // CASE 1:
      let point = new Point(0,0);
      let errorMessage = `C1: Point.zero should equal ${ point.toString() }`;
      assert.deepEqual( Point.zero, point, errorMessage);
    })
  });

});
