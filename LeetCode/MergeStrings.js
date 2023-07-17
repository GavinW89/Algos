/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    mergedString = '';
    if(word1.length == word2.length){
        for (i=0; i < word1.length; i++){
            mergedString += word1[i];
            mergedString += word2[i];
        }
    }else{
        if(word1.length > word2.length){
            for(i=0; i < word1.length; i++){
                mergedString += word1[i]
                if(word2[i]){
                    mergedString += word2[i]
                }
            }
        }else{
            for(i=0; i < word2.length; i++){
                if(word1[i]){
                    mergedString += word1[i]
                }
                mergedString += word2[i]
            }
        }
    }
        return mergedString
};


console.log(mergeAlternately("bark", "to"));