const index = require('../challenges-2.js')
const fs = require('fs');

const json_data = './titanic-passengers.json'

function loadData(cb) {
	fs.readFile(json_data, 'utf8', function (err, data) {
		try {
			data = JSON.parse(data)
			cb(data)
		} catch (err) {
			cb(err)
		}
	});
}

let data = null

beforeAll((done) => {
	loadData((json) => {
		data = json
		done()
	})
})

// ----------------------------------------------------------------------

// When you are ready to start on challenge 2 remove the word skip from 
// the line below: describe.skip() -> describe()

describe('Challenge 2 Titanic', () => {

	// Beucause these tests return long arrays of data it was 
	// impractical to hard code all these arrays here so the 
	// below generates the lists from the data! The code below 
	// are the answers to the questions. Don't peak unless you 
	// are really stuck on a problem. 































	test.skip('Test getAll', () => {
		const allFares = data.map(p => p.fields.fare)
		const allPclass = data.map(p => p.fields.pclass)
		const allEmbarked = data.map(p => p.fields.embarked)

		expect(index.getAllValuesForProperty(data, 'fare')).toEqual(allFares)
		expect(index.getAllValuesForProperty(data, 'pclass')).toEqual(allPclass)
		expect(index.getAllValuesForProperty(data, 'embarked')).toEqual(allEmbarked)
	})

	test.skip('Test filterByProperty', () => {
		const allMale = data.filter(p => p.fields.sex === 'male')
		const allFemale = data.filter(p => p.fields.sex === 'female')

		expect(index.filterByProperty(data, 'sex', 'male')).toEqual(allMale)
		expect(index.filterByProperty(data, 'sex', 'female')).toEqual(allFemale)
	})

	test.skip('Test filterNullForProperty', () => {
		const faresNotNull = data.filter(p => p.fields.fare !== undefined)
		const agesNotNull = data.filter(p => p.fields.age !== undefined)
		const pclassNotNull = data.filter(p => p.fields.pclass !== undefined)

		expect(index.filterNullForProperty(data, 'fare')).toEqual(faresNotNull)
		expect(index.filterNullForProperty(data, 'age')).toEqual(agesNotNull)
		expect(index.filterNullForProperty(data, 'pclass')).toEqual(pclassNotNull)
	})

	test.skip('Test sumAllProperty', () => {
		const sumAges = data.reduce((acc, p) => p.fields.age !== undefined ? acc + p.fields.age : acc, 0)
		const sumFares = data.reduce((acc, p) => p.fields.fare !== undefined ? acc + p.fields.fare : acc, 0)

		expect(index.sumAllProperty(data, 'age')).toBe(sumAges)
		expect(index.sumAllProperty(data, 'fare')).toBe(sumFares)
	})

	test.skip('Test countAllProperty', () => {
		const embarkedCounts = data.reduce((acc, p) => {
			if (acc[p.fields.embarked] === undefined) {
				acc[p.fields.embarked] = 1
			} else {
				acc[p.fields.embarked] += 1
			}
			return acc
		}, {})

		const genderCounts = data.reduce((acc, p) => {
			if (acc[p.fields.sex] === undefined) {
				acc[p.fields.sex] = 1
			} else {
				acc[p.fields.sex] += 1
			}
			return acc
		}, {})

		const pclassCounts = data.reduce((acc, p) => {
			if (acc[p.fields.pclass] === undefined) {
				acc[p.fields.pclass] = 1
			} else {
				acc[p.fields.pclass] += 1
			}
			return acc
		}, {})

		expect(index.countAllProperty(data, 'embarked')).toEqual(embarkedCounts)
		expect(index.countAllProperty(data, 'sex')).toEqual(genderCounts)
		expect(index.countAllProperty(data, 'pclass')).toEqual(pclassCounts)
	})

	test('Test makeHistogram', () => {
		const ages10 = data.filter(p => p.fields.age !== undefined).reduce((acc, p) => {
			if (acc[Math.floor(p.fields.age / 10)] === undefined) {
				acc[Math.floor(p.fields.age / 10)] = 1
			} else {
				acc[Math.floor(p.fields.age / 10)] += 1
			}
			return acc 
		}, [])

		const ages5 = data.filter(p => p.fields.age !== undefined).reduce((acc, p) => {
			if (acc[Math.floor(p.fields.age / 5)] === undefined) {
				acc[Math.floor(p.fields.age / 5)] = 1
			} else {
				acc[Math.floor(p.fields.age / 5)] += 1
			}
			return acc 
		}, [])

		const fares = data.filter(p => p.fields.fare !== undefined).reduce((acc, p) => {
			if (acc[Math.floor(p.fields.fare / 10)] === undefined) {
				acc[Math.floor(p.fields.fare / 10)] = 1
			} else {
				acc[Math.floor(p.fields.fare / 10)] += 1
			}
			return acc 
		}, [])

		console.log('Ages 5 ---------------')
		console.log(ages10)
		console.log('Ages 10 ---------------')
		console.log(ages5)
		console.log('Fares ---------------')
		console.log(fares)

		expect(index.makeHistogram(data, 'age', 10)).toEqual(Array.from(ages10, v => v || 0))
		expect(index.makeHistogram(data, 'age', 5)).toEqual(Array.from(ages5, v => v || 0))
		expect(index.makeHistogram(data, 'fare', 10)).toEqual(Array.from(fares, v => v || 0))
	})

	test.skip('Test normalizeProperty', () => {
		const ages = data.filter(p => p.fields.age !== undefined).map(p => p.fields.age)
		const maxAge = Math.max(...ages)
		const normalizedAges = ages.map(v => v / maxAge)

		const fares = data.map(p => p.fields.fare)
		const maxFare = Math.max(...fares)
		const normalizedFares = fares.map(v => v / maxFare)
		
		expect(index.normalizeProperty(data, 'age')).toEqual(normalizedAges)
		expect(index.normalizeProperty(data, 'fare')).toEqual(normalizedFares)
	})

	test.skip('Test getUniqueValues', () => {
		expect(index.getUniqueValues(data, 'pclass').sort()).toEqual([3, 2, 1].sort())
		expect(index.getUniqueValues(data, 'embarked').sort()).toEqual(['C', 'S', 'Q', undefined].sort())
		expect(index.getUniqueValues(data, 'sex').sort()).toEqual(['male', 'female'].sort())
		expect(index.getUniqueValues(data, 'survived').sort()).toEqual(['Yes', 'No'].sort())
	})

})
