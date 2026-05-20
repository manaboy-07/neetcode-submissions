class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let newstring = s.toLowerCase().replace(/[^a-z0-9]/g, "");
        const stringFlat = newstring.replaceAll(' ', '')
        const reversed = stringFlat.split('').reverse().join().replaceAll(',', '')
        return stringFlat === reversed

    }
}
