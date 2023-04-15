/**
 * Finds the length of the longest substring without repeating characters in the given string.
 * @param string - string to search through
 * @returns length of longest substring
 */
export function lengthOfLongestSubstring(string: string): number {
	string = string.replace(/\s+/g, '').toLowerCase();

	const lastIndex = new Array(string.length).fill(-1);

	let substrLength = 0;
	let windowStartIndex = 0;

	for (let i = 0; i < string.length; i++) {
		windowStartIndex = Math.max(windowStartIndex, lastIndex[string.lastIndexOf(string[i])] + 1);
		substrLength = Math.max(substrLength, i - windowStartIndex + 1);
		lastIndex[string.lastIndexOf(string[i])] = i;
	}
	return substrLength;
}