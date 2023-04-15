import {lengthOfLongestSubstring} from './index';


describe('Test "lengthOfLongestSubstring" function', () => {
	it('Should find the longest substring "abc" which length is equal to 3', () => {
		const string = 'abcabcab';
		expect(lengthOfLongestSubstring(string)).toBe(3);
	});

	it('Should test a case when the longest substring is in the middle of a string', () => {
		const string = 'aaaabcaaa';
		expect(lengthOfLongestSubstring(string)).toBe(3);
	});

	it('Should test a case when the longest substring is at the end of a string', () => {
		const string = 'aaabc';
		expect(lengthOfLongestSubstring(string)).toBe(3);
	});

	it('Should test a case when a string is made up of the same character', () => {
		const string = 'aaaaa';
		expect(lengthOfLongestSubstring(string)).toBe(1);
	});

	it('Should test a case when a string is empty', () => {
		const string = '';
		expect(lengthOfLongestSubstring(string)).toBe(0);
	});

	it('Should test a case when a string is made up of only two characters', () => {
		const string = 'ab';
		expect(lengthOfLongestSubstring(string)).toBe(2);
	});

	it('Should test a case when a string is made up of different cases characters', () => {
		const string = 'ABcaBcAb';
		expect(lengthOfLongestSubstring(string)).toBe(3);
	});

	it('Should test a case when a string contains a whitespace', () => {
		const string = 'ab c a';
		expect(lengthOfLongestSubstring(string)).toBe(3);
	});

	it('Should test a case when a string contains multiple whitespaces', () => {
		const string = '  ab  cd a ';
		expect(lengthOfLongestSubstring(string)).toBe(4);
	});
});