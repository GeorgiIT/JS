function solve(input){
    let students = new Map();

    for(let line of input){
        let tokens = line.split(' ');
        let name = tokens.shift();
        let grades = tokens.map(Number);

        if (students.has(name)){
            let existing = students.get(name);
            for (let grade of grades){
                existing.push(grade);
            }
        }
        else {
            students.set(name, grades);
        }  
    }

    let sorted = Array.from(students);
    sorted.sort(compareAverage);

    for (let [name, grades] of sorted){
        console.log(`${name}: ${grades.join(', ')}`);
    }

    function compareAverage([nameA, gradesA],[nameB,gradesB]) {
        // a => ['Georgi', "1 2 3 4"]
        let avgA = 0;
        gradesA.forEach(x => avgA += x);
        avgA /= gradesA.length;

        let avgB = 0;
        gradesB.forEach(x => avgB += x);
        avgB /= gradesB.length;

        return avgA - avgB;

    }
}
solve(['Georgi 2 4 5 6',
'Kiro 4 5 6 7', 'Mira 2 3 4 2'
]);