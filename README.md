A structure that contains a point in a two-dimensional ( x , y ) coordinate system.

## Usage

```js
const CGPoint = require('cg-point');

// Create point representing two coordinates in 2D space
let point = new CGPoint(5, 10);
console.log( point.x, point.y ); // 5, 10

//Default values
let defaultPoint = new CGPoint(); // null, null

```


## Static Methods and Properties

CGPoint **. zero**

Returns a point constant with location (0,0). The zero point is equivalent to CGPoint(0,0).
```js

let point = new CGPoint(0, 0);
point.equalTo(CGPoint.zero); //true

let other = new CGPoint(1, 1);
other.equalTo(CGPoint.zero); //false

```

CGPoint **. null**

Unlike CGPoint.zero, CGPoint.null has no assigned position. Both coordinates are null 
```js

let point = new CGPoint(null, null);
point.equalTo(CGPoint.null); //true

let defaultPoint = new CGPoint();
defaultPoint.equalTo(CGPoint.null); //true

let other = new CGPoint(1, 1);
other.equalTo(CGPoint.null); //false

```

CGPoint **. infinite**

Returns a point constant with location (Infinity, Infinity). An infinite point is one that has no defined bounds. .
```js

let point = new CGPoint(Infinity, Infinity);
point.equalTo(CGPoint.infinite); //true

let other = new CGPoint(1, 1);
other.equalTo(CGPoint.infinite); //false

```

CGPoint **. fromString( str )**

Returns a CGPoint instance from the string. If string is malformed, it returns a CGPoint.zero
```js

let point = new CGPoint.fromString("{1,2}");
console.log(point.x, point.y); //1,2

let other = new CGPoint.fromString("%##@$#@");
console.log(point.x, point.y); //0,0

```



## Instance Methods and Properties

**#isEmpty**

Returns true if point is empty. An empty point is either a null point or a valid point with zero x or y.

```js
let one = new CGPoint(0, 0);
console.log(one.isEmpty); // true

let two = new CGPoint(null, null);
console.log(two.isEmpty); // true

let three = new CGPoint(Infinity, Infinity);
console.log(three.isEmpty); // false
```
**#isNull**

Returns true if both point coordinates are null. 
```js
let one = new CGPoint(0, 0);
console.log(one.isNull); // false

let two = new CGPoint(null, null);
console.log(two.isNull); // true

let three = new CGPoint(Infinity, Infinity);
console.log(three.isNull); // false
```

**#isInfinite**

Returns true if point is infinite. An infinite point is one that has no defined bounds

```js
let one = new CGPoint(0, 0);
console.log(one.isInfinite); // false

let two = new CGPoint(null, null);
console.log(two.isInfinite); // false

let three = new CGPoint(Infinity, Infinity);
console.log(three.isInfinite); // true
```



**#integral**

A point with the smallest integer values for its x and y coorindates. That is, given a point with fractional x or y values, integral rounds down the points x or y coordinates to the nearest whole integer. Returns a null point if rect is a null point.

```js
let double = new CGPoint(1.5, -1.5);
console.log( double.integral.toString() ); // {1,-2}
```
#**equalTo** ( point: CGPoint )

Checks if a point has the same x, y coordinates as another (inclusive)
```js

let point = new CGPoint(1, 1);
let other = new CGPoint(-2, -2);

point.equalTo(other); //false

let match = new CGPoint(1, 1);
point.equalTo(match); //true

```


#**toString** ( point )

Produces a string representation of the point
```js

let point = new CGPoint(1, 1);
console.log(point.toString()) // {1,1}

```