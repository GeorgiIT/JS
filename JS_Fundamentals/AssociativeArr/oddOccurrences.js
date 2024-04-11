function solve(input){
    let allWords = {};
    input.split(' ').forEach(x => allWords[x] = 0);

    allWords.forEach(x => allWords[x].toLowerCase());

    
    allWords.forEach(x => allWords[x] % 2 != 0);
}
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')