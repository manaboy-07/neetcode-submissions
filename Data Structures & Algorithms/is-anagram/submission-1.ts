class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
    const string2Array = t.split('').sort().join()
    const string1Array =  s.split('').sort().join()
    return string2Array === string1Array
   
    }
}
