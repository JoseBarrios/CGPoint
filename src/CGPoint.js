'use strict'

/* A class that contains a point in a two-dimensional coordinate system,
 * where the origin is at the top-left.
 *
 * @author Jose Barrios
 * @version 1.2.0
 *
 * @class
 */

class CGPoint{ //Node module exports


    //static get ZERO(){
        //return new CGPoint(0,0);
    //}

    /* Creates an instance of CGPoint.
     *
     * @constructor
     * @this {CGPoint}
     * @param {number} x - The desired horizontal coordinate of the CGPoint.
     * @param {number} y - The desired vertical of the CGPoint.
     */
    constructor(x = 0, y = 0) {
        //Define x and y props with default setter
        this.x = x;
        this.y = y;

    }


    /* Sets the horizontal coordinate of the CGPoint.
     *
     * @public
     * @property {number} x
     */
    get x(){ return this._x}
    set x(value){
        if(value === this._x){ return };
        this._x = Number(value);
    }


    /* The vertical coordinate of the CGPoint.
     *
     * @public
     * @property {number} y
     */
    get y(){ return this._y}
    set y(value){
        if(value === this._y){ return };
        this._y = Number(value);
    }


    /* Checks if CGPoint coordinates match another CGPoint's coordinates (inclusive OR).
     * TODO:
     *  1) Allow arguments of Object type equalTo({x:0, y:0})
     *  2) Allow arguments of Number equalTo(0,0)
     *
     * @this {CGPoint}
     * @throws {ReferenceError} If no argument is provided
     * @throws {TypeError} If argument is not a CGPoint
     * @return {boolean} True if both CGPoint' coodinates match. False otherwise.
     */
    equalTo(otherCGPoint) {
        const hasArguments = Boolean(arguments.length);
        const correctArgumentType = otherCGPoint instanceof CGPoint;
        const validInput = hasArguments && correctArgumentType;

        if(validInput){
            let xMatch = Object.is(this.x, otherCGPoint.x);
            let yMatch = Object.is(this.y, otherCGPoint.y);
            return (xMatch && yMatch);
        }

        let msg = `equalTo(): Expects at least 1 argument of type CGPoint`;
        let error = hasArguments? new TypeError(msg) : new ReferenceError(msg);
        throw error;
    }

    //TODO:
    //Negate the point's coordinates
    //negate() {}
    //static addition(){}
    //static substraction(){}
    //static equality(){}
    //static inequality(){}
    toString() { return `{${this.x}, ${this.y}}` }




    //////////////////////////////////////////////
    //
    //  DEPRECATION NOTICE:
    //
    //  1)  equalToPoint():
    //      The above method is deprecated as of v1.2.0.
    //      and it will be removed in v2. Please use equalTo()
    //
    //  2)  get():
    //      The above method is deprecated as of v1.2.0.
    //      and it will be removed in v2. Please use toString()
    //      or toObject() instead
    //
    //
    /////////////////////////////////////////////


    equalToPoint(otherCGPoint = new CGPoint()) {
        console.warn('equalToPoint(): Deprecated. Please use equalTo()');
        var xMatch = Object.is(this.x, otherCGPoint.x);
        var yMatch = Object.is(this.y, otherCGPoint.y);
        return (xMatch && yMatch);
    }
    get() {
        console.warn('get(): Deprecated. Use toString() or toObject() instead');
        return {x:this.x, y:this.y}
    }

} // No semicolon!




/*
 * Static read-only property
 *
 * Why not use ES6's static get ZERO() instead?
 * TL;DR: Better for memory, has clearer syntax and
 * enables ZERO to be a read-only property.
 *
 * - ES6's static getters are read/write.
 * - Object.defineProperty allows read-only props
 * - ES6 static get returns new instance of CGPoint(0,0) everytime it is called
 * - Object.defineProperty  returns same instance every time it is called
 *
 * - ES6 static getter makes syntax Point.ZERO()
 * - Object.defineProperty makes syntax: Point.ZERO
 * - More info: https://goo.gl/00iVP7
 */
const ZERO = {};
ZERO.value = new CGPoint(0,0);
ZERO.configurable= false;
ZERO.enumerable= false;
ZERO.writable= false;
Object.defineProperty(CGPoint, 'ZERO', ZERO);



////////////////////////////////////////////////////
//
//  EXPORTS
//
/////////////////////////////////////////////////////
module.exports = CGPoint; //Node module exports
//export default CGPoint;  //ES6 module exports syntax
