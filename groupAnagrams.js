function groupAnagrams(arr){
    let anagrams = {}
    for(let word of arr){
        let sortedWord = word.split('').sort().join('')
        if (anagrams[sortedWord]) {
            anagrams[sortedWord].push(word)
            
        }else{
            anagrams[sortedWord]=[word]
        }
    }
    return Object.values(anagrams)
}

const strs1 = ["act", "pots", "tops", "cat", "stop", "hat"];
console.log(groupAnagrams(strs1));