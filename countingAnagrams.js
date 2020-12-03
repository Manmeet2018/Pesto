/**
 * Create a hashArray.
 * @function getHash.
 * @arg {string} - word whose has to be calculated.
 * @return {arr} - hashArray with having index as charCode of each character in word.
 */

getHash = (word) => {
    let hashArr = new Array();
    for(let iterator = 0; iterator < word.length; ++iterator) {
        let index = word.charCodeAt(iterator);
        if(hashArr[index])
            hashArr[index] += 1;
        else
            hashArr[index] = 1;
    }
    return hashArr;
}

/**
 * Calculate no of different anagrams.
 * @function countingAnagrams.
 * @arg {string} - input which has n(size of string) number of words to it.
 * @return {number} - no of different anagrams.
 */

countingAnagrams = (str) => {
    if(str === undefined) {
        throw 'invalid args';
        return;
    }
    let hashMap = new Map();
    let previousOccurence = new Map();
    
    let anagramCount = 0;
    str.split(" ").forEach(element => {
        let hashValue = getHash(element);
        let hashString = hashValue.toString();
        if(element.length > 1) {
            if(hashMap.has(hashString) && !previousOccurence.has(hashString)) {
                anagramCount++;
                previousOccurence.set(hashString, 1);
            }
            hashMap.set(hashString, 1);
        }
    });
    return anagramCount;
}

/* test Case */
try {
    console.log(countingAnagrams('aa aa odg dog gdo'));
    console.log(countingAnagrams('a c b c run urn urn'));
    console.log(countingAnagrams('k k k k bar foo'));
    console.log(countingAnagrams());
  } catch (err) {
    console.error(err);
  }


