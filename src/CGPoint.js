'use strict'

// Stores the object's private vars
let _private = new WeakMap();

/**
 * A class that contains a point in a two-dimensional coordinate system,
 * where the origin is at the top-left.
 *
 * @author Jose Barrios
 * @version 1.0.0-beta
 *
 * @class
 */
class CGPoint {

  /**
   * Creates an instance of CGPoint.
   *
   * @constructor
   * @this {CGPoint}
   * @param {number} x - The desired horizontal coordinate of the CGPoint.
   * @param {number} y - The desired vertical of the CGPoint.
   */
  constructor(x = null, y = null) {
    this.x = x;
    this.y = y;
    //Private variables map
    _private.set(this, { x, y })
  }

  /**
   * The null point
   * @return {CGPoint} returns a null point)
   */
  static get null() {
    let nullPoint = new CGPoint();
    nullPoint.x = null;
    nullPoint.y = null;
    return nullPoint;
  }

  /**
   * The zero point
   * @return {CGPoint} returns a zero rect, that is: CGPoint(0,0)
   */
  static get zero() {
    return new CGPoint(0, 0);
  }

  /**
   * The infinite point
   * @return {CGPoint} returns a infinite point CGPoint(Infinite, Infinite)
   */
  static get infinite() {
    return new CGPoint(Infinity, Infinity);
  }

  /**
   * Turns a formatted string into a CGPoint instance
   * @param {string}  A string whose contents are of the form “{x,y}”, where
   * x is the x coordinate, y is the y coordinate. These components can
   * represent integer or float values. An example of a valid string is
   * ”{3,2}”.  The string is not localized, so items are always separated
   * with a comma.
   *
   * @returns {CGPoint} a point. If the string is not well-formed, the
   * function returns CGRectZero.
   */
  static fromString(string = '') {
    const numbers = new RegExp('[-]?\\d+(\\.\\d+)?', 'g');
    const dimentions = string.match(numbers);
    let result = CGPoint.zero;
    if (dimentions) {
      const validInput = dimentions.length === 2;
      result = validInput ? new CGPoint(...dimentions) : CGPoint.null;
    }
    return result;
  }

  /**
   * The horizontal coordinate getter
   *
   * @name x
   * @function
   * @public
   * @returns {number} horizontal coordinate
   */
  get _x() {
    return _private.get(this).x;
  }

  /**
   * The horizontal coordinte settter
   *
   * @name x
   * @function
   * @public
   * @param {number} value-horizontal coordinate
   */
  set _x(value) {
    _private.set(this).x = this._cast(value);
    this.x = this._cast(value);
  }

  /**
   * The vertical coordinate getter
   *
   * @name y
   * @function
   * @public
   * @returns {number} the vertical coordinate
   */
  get _y() {
    return _private.get(this).y;
  }

  /**
   * The vertical coordinate setter
   *
   * @name y
   * @function
   * @public
   * @param {number} value - the horizontal coordinate
   */
  set _y(value) {
    _private.set(this).y = this._cast(value);
    this.y = this._cast(value);
  }

  /**
   * Returns whether a point's x and y are zero, or is a null point.
   *
   * An empty point is either a null point or a valid point with zero x or y.
   *
   * @returns {boolean} true if the specified point is empty;
   * otherwise, false.
   */
  get isEmpty() {
    const isEmpty = this._x === 0 && this._y === 0;
    return this.isNull || isEmpty;
  }

  /**
   * Returns whether a point is infinite for either -/+ infinities.
   *
   * An infinite point is one that has no defined bounds.
   *
   * @returns {boolean} Returns true if the specified point is infinite;
   * otherwise, false.
   */
  get isInfinite() {
    const xInfinite = this._x === Infinity || this._x === -Infinity;
    const yInfinite = this._y === Infinity || this._y === -Infinity;
    return xInfinite && yInfinite;
  }

  /**
   * Returns whether the point is equal to the null point.
   *
   * Unlike CGPoint.zero, CGPoint.null has no assigned position
   *
   * @returns {boolean} true if the specified point is null;
   * otherwise, false.
   */
  get isNull() {
    return this._x === null && this._y === null;
  }

  /**
   * Returns the smallest point that results from converting the source
   * point values to integers.
   *
   * A point with the smallest integer values for its x and y coorindates.
   * That is, given a point with fractional x or y values, integral rounds
   * down the points x or y coordinates to the nearest whole integer. Returns
   * a null point if rect is a null point.
   *
   * @returns {CGPoint} The smallest point that results from converting the
   * source point values to integers.
   */
  get integral() {
    const intX = Math.floor(this._x);
    const intY = Math.floor(this._y);
    return this.isNull ? CGPoint.null : new CGPoint(intX, intY);
  }

  /**
   * Converts point to string representation '{x,y}'
   *
   * @name toString
   * @function
   * @public
   * @returns {string} representing the point
   */
  toString() {
    return `{${this._x},${this._y}}`;
  }

  /**
   * Returns whether two points are equal in coordinate values.
   *
   * @name equalTo
   * @function
   * @throws {Error} If no argument is provided
   * @throws {Error} If argument is not of type CGPoint
   *
   * @param {CGPoint} point2 - point
   * @returns {boolean} true if the two specified points have equal
   * coordinate values, or if both points are null points. Otherwise, false.
   */
  equalTo(point2, str) {
    if (point2 instanceof CGPoint) {
      const isNull = this.isNull && point2.isNull;
      const xMatch = this._x === point2._x;
      const yMatch = this._y === point2._y;
      const isMatch = xMatch && yMatch;
      return isNull || isMatch;
    }
    else throw new TypeError('#equalTo(): Expects argument of type CGPoint');
  }

  //TODO
  //#distanceTo()

} // No semicolon!


//EXPORTS
module.exports = CGPoint;
