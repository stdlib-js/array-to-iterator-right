/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-nonenumerable-read-only-property' );
var isFunction = require( '@stdlib/assert-is-function' );
var isCollection = require( '@stdlib/assert-is-collection' );
var isAccessorArray = require( '@stdlib/array-base-assert-is-accessor-array' );
var iteratorSymbol = require( '@stdlib/symbol-iterator' );
var accessorGetter = require( '@stdlib/array-base-accessor-getter' );
var getter = require( '@stdlib/array-base-getter' );
var dtype = require( '@stdlib/array-dtype' );
var format = require( '@stdlib/string-format' );


// MAIN //

/**
* Returns an iterator which iterates from right to left over each element in an array-like object.
*
* ## Notes
*
* -   For dynamic array resizing, the only behavior made intentionally consistent with iterating from left to right is when elements are pushed onto the beginning (end) of an array. In other words, iterating from left to right combined with `[].push()` is consistent with iterating from right to left combined with `[].unshift()`.
*
* @param {Collection} src - input value
* @param {Function} [mapFcn] - function to invoke for each iterated value
* @param {*} [thisArg] - execution context
* @throws {TypeError} first argument must be an array-like object
* @throws {TypeError} second argument must be a function
* @returns {Iterator} iterator
*
* @example
* var iter = array2iteratorRight( [ 1, 2, 3, 4 ] );
*
* var v = iter.next().value;
* // returns 4
*
* v = iter.next().value;
* // returns 3
*
* v = iter.next().value;
* // returns 2
*
* // ...
*/
function array2iteratorRight( src ) {
	var thisArg;
	var iter;
	var FLG;
	var fcn;
	var len;
	var get;
	var dt;
	var i;
	if ( !isCollection( src ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an array-like object. Value: `%s`.', src ) );
	}
	if ( arguments.length > 1 ) {
		fcn = arguments[ 1 ];
		if ( !isFunction( fcn ) ) {
			throw new TypeError( format( 'invalid argument. Second argument must be a function. Value: `%s`.', fcn ) );
		}
		thisArg = arguments[ 2 ];
	}
	len = src.length;
	i = len;

	// Create an iterator protocol-compliant object:
	iter = {};
	if ( fcn ) {
		setReadOnly( iter, 'next', next1 );
	} else {
		setReadOnly( iter, 'next', next2 );
	}
	setReadOnly( iter, 'return', end );

	// If an environment supports `Symbol.iterator`, make the iterator iterable:
	if ( iteratorSymbol ) {
		setReadOnly( iter, iteratorSymbol, factory );
	}
	// Resolve an accessor for retrieving array elements (e.g., to accommodate `Complex64Array`, etc):
	dt = dtype( src );
	if ( isAccessorArray( src ) ) {
		get = accessorGetter( dt );
	} else {
		get = getter( dt );
	}
	return iter;

	/**
	* Returns an iterator protocol-compliant object containing the next iterated value.
	*
	* @private
	* @returns {Object} iterator protocol-compliant object
	*/
	function next1() {
		i += src.length - len - 1; // accounts for a dynamic array
		len = src.length;
		if ( FLG || i < 0 ) {
			FLG = true;
			return {
				'done': true
			};
		}
		return {
			'value': fcn.call( thisArg, get( src, i ), i, src ),
			'done': false
		};
	}

	/**
	* Returns an iterator protocol-compliant object containing the next iterated value.
	*
	* @private
	* @returns {Object} iterator protocol-compliant object
	*/
	function next2() {
		i += src.length - len - 1; // accounts for a dynamic array
		len = src.length;
		if ( FLG || i < 0 ) {
			FLG = true;
			return {
				'done': true
			};
		}
		return {
			'value': get( src, i ),
			'done': false
		};
	}

	/**
	* Finishes an iterator.
	*
	* @private
	* @param {*} [value] - value to return
	* @returns {Object} iterator protocol-compliant object
	*/
	function end( value ) {
		FLG = true;
		if ( arguments.length ) {
			return {
				'value': value,
				'done': true
			};
		}
		return {
			'done': true
		};
	}

	/**
	* Returns a new iterator.
	*
	* @private
	* @returns {Iterator} iterator
	*/
	function factory() {
		if ( fcn ) {
			return array2iteratorRight( src, fcn, thisArg );
		}
		return array2iteratorRight( src );
	}
}


// EXPORTS //

module.exports = array2iteratorRight;
