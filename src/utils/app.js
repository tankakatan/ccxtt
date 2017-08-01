import * as _ from 'lodash'

Array.prototype.uniq = function () {
	const arr = this
	return _.uniq (arr)
}

Array.prototype.uniqBy = function (iteratee) {
	const arr = this
	return _.uniqBy (arr, iteratee)
}

Array.prototype.compact = function () {
	const arr = this
	return _.compact (arr)
}

Array.prototype.fromPairs = function () {
	const arr = this
	return _.fromPairs (arr)
}

Object.defineProperty (Object.prototype, 'keysOf', { enumerable: false, value: function () {		
	const obj = this
	return _.keys (obj)
}})

Object.defineProperty (Object.prototype, 'omitBy', { enumerable: false, value: function (predicate) {		
	const obj = this
	return _.omitBy (obj, predicate)
}})

Object.defineProperty (Object.prototype, 'pickBy', { enumerable: false, value: function (predicate) {		
	const obj = this
	return _.pickBy (obj, predicate)
}})
