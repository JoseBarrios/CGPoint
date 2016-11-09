A structure that contains a point in a two-dimensional ( x , y ) coordinate system.

## Usage

```js
const CGPoint = require('cg-point');

// Create point representing two coordinates in 2D space
let point = new CGPoint(5, 10);
console.log( point.x, point.y ); // 5, 10

//Default values
let defaultPoint = new CGPoint(); // 0, 0

```


## Properties (Constants)

**Point.ZERO**

Returns a point constant with location (0,0). The zero point is equivalent to CGPoint(0,0).
```js

let point = new CGPoint(0, 0);
point.equalTo(Point.ZERO); //true

let other = new CGPoint(1, 1);
other.equalTo(Point.ZERO); //false

```


## Methods

#**equalTo** ( point: CGPoint )

Checks if a point has the same x, y coordinates as another (inclusive)
```js

let point = new CGPoint(1, 1);
let other = new CGPoint(-2, -2);

point.equalTo(other); //false

let match = new CGPoint(1, 1);
point.equalTo(match); //true

```

#**toString** ( )

Produces a string representation of the point
```js

let point = new CGPoint(1, 1);

let str = point.toString();
console.log(str) // {1, 1}

```


## TODO

#**distanceTo** ( point: CGPoint )

Calculates the shortest distance from one point to another
