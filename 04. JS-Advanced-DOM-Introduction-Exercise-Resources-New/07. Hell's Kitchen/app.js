function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   let input = document.querySelector('#inputs>textarea');
   const bestResturantParagh = document.querySelector('#bestRestaurant>p')
   const bestWorkersParagh = document.querySelector('#workers>p')
   
   function onClick () {
      const arr = JSON.parse(input.value);
      let resturants = {}

      arr.forEach((line) => {
         const tokens = line.split(' - ');
         const name = tokens[0];
         const workersArr = tokens[1].split(', ');
         let workers = []
         let avgSalary = 0;
         let bestSalary = 0;

         for(let worker of workersArr){
            let workerToken = worker.split(' ');
            const salary = Number(workerToken[1])
            workers.push({ name: workerToken[0], salary });
         }

         if(resturants[name]){
               workers = workers.concat(resturants[name].workers);
         }
         workers.sort((worker1, worker2) => worker2.salary - worker1.salary)

         bestSalary = workers[0].salary;
         avgSalary = workers.reduce((sum, worker) => sum + worker.salary, 0) / workers.length;

         resturants[name] = {
            workers,
            avgSalary,
            bestSalary
         }
      });

      let bestResturantSalary = 0;
      let bestResturant = undefined;

      for (const name in resturants) {
         if(resturants[name].avgSalary > bestResturantSalary){
            bestResturant = {
               name, 
               ...resturants[name]
            }
            bestResturantSalary = resturants[name].avgSalary
         }
        
      }
      bestResturantParagh.textContent = `Name: ${bestResturant.name} Average Salary: ${bestResturant.avgSalary.toFixed(2)} Best Salary: ${bestResturant.bestSalary.toFixed(2)}`

      let workersResult = [];
      bestResturant.workers.forEach( worker => {
         workersResult.push(`Name: ${worker.name} With Salary: ${worker.salary}`)
      })
      bestWorkersParagh.textContent = workersResult.join(' ');
   }
}