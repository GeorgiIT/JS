function solve(input) {
    let words = input.shift().split(' ');

    let wordsObj = {}
    for(const word of words){
        wordsObj[word] = 0;
    }

    for(const word of input){
        if(wordsObj.hasOwnProperty(word)){
            wordsObj[word]++;
        }
    }
    Object.keys(wordsObj)
    .sort((a,b) => wordsObj[b] - wordsObj[a])
    .forEach(el => {
        console.log(`${el} - ${wordsObj[el]}`)
    })
    
}

solve([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]
    )