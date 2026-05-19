class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let isDuplicate = true || false
        const newSet = new Set(nums).size
       
        if(newSet === nums.length){
            isDuplicate = false
        }else{
            isDuplicate = true
        }
        return isDuplicate
    }
}
