function test(arr) {
    let line = '';
    for (let i = 0; i < arr.length; i++)
    {
        const n = arr[i];
        line += n + ' ';
    }
    console.log(arr.join(', '))
}

test(['1','2','3']);