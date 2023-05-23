const index = require('../challenges-1.js')
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

describe('Challenge 1 Titanic', () => {

	test('Challenge 1: Test getTotalpassengers', () => {
		expect(index.getTotalPassengers(data)).toBe(891)
	})

	test('Challenge 2: Test getSurvivorCount', () => {
		expect(index.getSurvivorCount(data)).toBe(342)
	})

	test('Challenge 3: Test getCasualityCount', () => {
		expect(index.getCasualityCount(data)).toBe(549)
	})

	test('Challenge 4: Test countPassengersInClass', () => {
		expect(index.countPassengersInClass(data, 1)).toBe(216)
		expect(index.countPassengersInClass(data, 2)).toBe(184)
		expect(index.countPassengersInClass(data, 3)).toBe(491)
	})

	test('Challenge 5: Test getSurvivorCountForClass', () => {
		expect(index.getSurvivorCountForClass(data, 1)).toBe(136)
		expect(index.getSurvivorCountForClass(data, 2)).toBe(87)
		expect(index.getSurvivorCountForClass(data, 3)).toBe(119)
	})

	test('Challenge 6: Test getCasualityCountForClass', () => {
		expect(index.getCasualityCountForClass(data, 1)).toBe(80)
		expect(index.getCasualityCountForClass(data, 2)).toBe(97)
		expect(index.getCasualityCountForClass(data, 3)).toBe(372)
	})

	test('Challenge 7: Test getMinAge', () => {
		expect(index.getMinAge(data)).toBe(0.42)
	})

	test('Challenge 8: Test getMaxAge', () => {
		expect(index.getMaxAge(data)).toBe(80)
	})

	test('Challenge 9: Test getEmbarkedCount', () => {
		expect(index.getEmbarkedCount(data, 'S')).toBe(644)
		expect(index.getEmbarkedCount(data, 'C')).toBe(168)
		expect(index.getEmbarkedCount(data, 'Q')).toBe(77)
	})

	test('Challenge 10: Test getMinFare', () => {
		expect(index.getMinFare(data)).toBe(0)
	})

	test('Challenge 11: Test getMaxFare', () => {
		expect(index.getMaxFare(data)).toBe(512.3292)
	})

	test('Challenge 12: Test getPassengersByGender', () => {
		expect(index.getPassengersByGender(data, 'male')).toBe(577)
		expect(index.getPassengersByGender(data, 'female')).toBe(314)
	})

	test('Challenge 13: Test getSurvivorsByGender', () => {
		expect(index.getSurvivorsByGender(data, 'male')).toBe(109)
		expect(index.getSurvivorsByGender(data, 'female')).toBe(233)
	})

	test('Challenge 14: Test getCasualitiesByGender', () => {
		expect(index.getCasualitiesByGender(data, 'male')).toBe(468)
		expect(index.getCasualitiesByGender(data, 'female')).toBe(81)
	})

	test('Challenge 15: Test getTotalFare', () => {
		expect(index.getTotalFare(data)).toBe(28693.94929999997)
	})

	test('Challenge 16: Test getAverageFare', () => {
		expect(index.getAverageFare(data)).toBe(32.2042079685746)
	})

	test('Challenge 17: Test getMedianFare', () => {
		expect(index.getMedianFare(data)).toBe(14.4542)
	})

	test('Challenge 18: Test getAverageAge', () => {
		expect(index.getAverageAge(data)).toBe(29.69911764705882)
	})

	test('Challenge 19: Test getMedianAge', () => {
		expect(index.getMedianAge(data)).toBe(28)
	})

	test('Challenge 20: Test getAverageAgeByGender', () => {
		expect(index.getAverageAgeByGender(data, 'male')).toBe(30.72664459161148)
		expect(index.getAverageAgeByGender(data, 'female')).toBe(27.915708812260537)
	})
})




