function solve(input) {
    const [targetWords, ...wordsToSearch] = input;
    const wordsMap = {};

    // Split the target words and initialize counts to 0
    targetWords.split(' ').forEach(word => wordsMap[word] = 0);

    // Count occurrences of target words in the rest of the strings
    for (const words of wordsToSearch) {
        words.split(' ').forEach(word => {
            if (wordsMap.hasOwnProperty(word)) {
                wordsMap[word]++;
            }
        });
    }

    // Convert the wordsMap to an array of objects and sort by count in descending order
    const sortedWords = Object.entries(wordsMap)
        .map(([word, count]) => ({ word, count }))
        .sort((a, b) => b.count - a.count);

    // Print the sorted words and their counts
    sortedWords.forEach(({ word, count }) => {
        console.log(`${word} - ${count}`);
    });
}

solve([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]
    )