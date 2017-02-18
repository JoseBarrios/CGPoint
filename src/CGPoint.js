'use strict'

/**
 * A class that contains a point in a two-dimensional coordinate system,
 * where the origin is at the top-left.
 *
 * @author Jose Barrios
 * @version 1.0.0-
 *
 * @class
 */
class CGPoint {

  /**
   * A point that has infinite extent.
   * @returns {CGPoint} point with infinite extent
   */
  static get infinite() {
    return new CGPoint(Infinity, Infinity);
  }


  /**
   * The null point.Note that the null point is not the same as the zero
   * point. For example, the addition of a point with the null point is the
   * original point (that is, the null point contributes nothing).
   * @returns {CGPoint} a null point
   */
  static get null() {
    return new CGPoint(null, null);
  }


  /**
   * The zero point
   * @return {CGPoint} returns a zero rect, that is: CGPoint(0,0)
   */
  static get zero() {
    return new CGPoint(0, 0);
  }


  /** TODO: Turn into a global object, instead of a static method
   * Returns a Core Graphics point structure corresponding to the data in
   * a given string.
   *
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
      result = validInput ? new CGPoint(...dimentions) : CGPoint.zero;
    }
    return result;
  }


  /**
   * Creates an instance of CGPoint.
   *
   * @constructor
   * @this {CGPoint}
   * @param {number} x - The desired horizontal coordinate of the CGPoint.
   * @param {number} y - The desired vertical of the CGPoint.
   */
  constructor(x = null, y = null) {
    this.private = {};
    this.x = x;
    this.y = y;
  }


  /**
   * The horizontal coordinate getter
   *
   * @name x
   * @function
   * @public
   * @returns {number} horizontal coordinate
   */
  get x() {
    return this.private.x;
  }

  /**
   * The horizontal coordinte settter
   *
   * @name x
   * @function
   * @public
   * @param {number} value-horizontal coordinate
   */
  set x(value) {
    //value = new JSValue(value);
    //this.private.x = value.toNumber();
    this.private.x = this._cast(value);
  }

  /**
   * The vertical coordinate getter
   *
   * @name y
   * @function
   * @public
   * @returns {number} the vertical coordinate
   */
  get y() {
    return this.private.y;
  }

  /**
   * The vertical coordinate setter
   *
   * @name y
   * @function
   * @public
   * @param {number} value - the horizontal coordinate
   */
  set y(value) {
    this.private.y = this._cast(value);
  }


  /**
   * Converts all primitive types to numbers
   *
   * @name _cast
   * @function
   * @private
   * @param {*} value - a coordinate value
   * @returns {number} the casted value
   */
  _cast(value) {
    const rules = new Map();
    rules.set('number', (val) => {
      return val;
    });
    rules.set('object', (val) => {
      return null;
    });
    rules.set('boolean', (val) => {
      return null;
    });
    rules.set('undefined', (val) => {
      return 0;
    });
    rules.set('string', (val) => {
      return Number(val);
    });
    //  TODO: prefered way to check for null is x === null,
    //  or x == null (null or undefined)
    return rules.get(typeof value).apply(this, [value]);
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
      const xMatch = this.x === point2.x;
      const yMatch = this.y === point2.y;
      const isMatch = xMatch && yMatch;
      return isNull || isMatch;
    }
    else throw new TypeError('#equalTo(): Expects argument of type CGPoint');
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
    return `{${this.x},${this.y}}`;
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
    const intX = Math.floor(this.x);
    const intY = Math.floor(this.y);
    return this.isNull ? CGPoint.null : new CGPoint(intX, intY);
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
    const isEmpty = this.x === 0 && this.y === 0;
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
    const xInfinite = this.x === Infinity || this.x === -Infinity;
    const yInfinite = this.y === Infinity || this.y === -Infinity;
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
    return this.x === null && this.y === null;
  }


} // No semicolon!


////////////////
//
//  EXPORTS
//
////////////////
module.exports = CGPoint;

