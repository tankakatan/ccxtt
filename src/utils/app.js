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