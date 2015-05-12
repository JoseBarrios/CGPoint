A structure that contains a point in a two-dimensional ( x , y ) coordinate system.
<h2>Usage</h2><hr>
```js
var CGPoint = require('cg-point');

// Create point in 2D space where x = 5 and y = 10
var point = new CGPoint(5, 10);
console.log(point.x); // 5
console.log(point.y); // 10
```

<h2>Methods</h2><hr><b>equalToPoint ( point: CGPoint )</b>&nbsp;<div>Checks if a point has the same x, y coordinates of another.&nbsp;</div><div>Returns boolean</div>
```js
var otherPoint = new CGPoint(10, 20);
point.equalToPoint(otherPoint); //false

otherPoint.x = 5;
otherPoint.y = 10;
point.equalToPoint(otherPoint); //true

```


