class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
       while(stones.length > 1){
        stones.sort((a,b) => b - a)
        let length = stones.length
        let firststone = stones.sort((a,b) => a - b)[length -1]
        let secondstone = stones.sort((a,b) => a -b)[length -2]
        console.log(firststone, secondstone)
        if(firststone == secondstone){
           stones.pop()
           stones.pop()
        }
        if(secondstone < firststone){
            secondstone = firststone - secondstone
            stones.pop()
            stones.pop()
            stones.push(secondstone)
        }
         console.log(stones)
        }
     return stones.length ? stones[0]:0
        

    }
}
