/*Top K Frequent Elements
Given an integer array nums and an integer k, return the k most frequent elements within the array.

The test cases are generated such that the answer is always unique.

You may return the output in any order.

Example 1:

Input: nums = [1,2,2,3,3,3], k = 2

Output: [2,3]
Example 2:

Input: nums = [7,7], k = 1

Output: [7]
Constraints:

1 <= nums.length <= 10^4.
-1000 <= nums[i] <= 1000
1 <= k <= number of distinct elements in nums.


Recommended Time & Space Complexity
You should aim for a solution with O(n) time and O(n) space, where n is the size of the input array. */

topKFrequent(nums, k) {
    let frequncy = {}
    let result = []
    for(let num of nums){
        if(!frequncy[num]){
            frequncy[num]=1
        }else{
            frequncy[num]++
        }
        
    }
    for(let key in frequncy){
        if(result.length<2){
            result.push(key)
        }else if(result[0]<key ){

        }
    }

}