const salaries2 = {
    TeamLead: { salary: 1000, tax: "99%" },
    Architect: { salary: 9000, tax: "34%" },}

const team2 = [
    { name: "Alexander", specialization: "TeamLead" },
    { name: "Gaudi", specialization: "Architect" },
    { name: "Koolhas", specialization: "Architect" },
    { name: "Foster", specialization: "Architect" },
    { name: "Napoleon", specialization: "General" },]

// console.log(Object.entries(salaries2));
// // Object.keys(salaries2).map(value => {
// //     if(!totalSalary[value ]){
// //         totalSalary[value ] = 0
// //     }
// //     totalSalary[value] += salaries[value].salary
// // });

const calculateTeamFinanceReport = (salaries, team) => {
    let totalBudgetTeam = 0;
    let totalBudgetTeamLead = 0;
    let totalBudgetArchitect = 0;
    let totalSalary = {};
    let result = {
        totalBudgetTeam: 0
    }

    team.map(value => {
        const itemSpecializtion = value.specialization;
        console.log(itemSpecializtion);
        if(!totalSalary[itemSpecializtion]){
            totalSalary[itemSpecializtion] = 0
        }
        console.log(salaries[itemSpecializtion], 'lol');
        totalSalary[itemSpecializtion] += salaries[itemSpecializtion]?.salary || 0

    })
    for (const item in totalSalary) {
        // console.log(item);
        result[`totalBudget${item}`] = totalSalary[item]
        result.totalBudgetTeam += totalSalary[item]
    }
    console.log(result);

    // team.reduce((accumulator, value) => {
    //     const itemSpecializtion = value.specialization;
    //     console.log(itemSpecializtion);
    //
    //     if (user.status) {
    //             accumulator.statT.push(user);
    //         } else {
    //             accumulator.statF.push(user);
    //         }
    //         return accumulator;
    //     }, {statT: [], statF: []})



    // for (const item of team) {
    //     const itemSpecializtion = item.specialization;
    //     // console.log(salaries[itemSpecializtion]);
    //     // console.log(itemSpecializtion);
    //     if(!totalSalary[itemSpecializtion]){
    //         totalSalary[itemSpecializtion] = 0
    //     }
    //     totalSalary[itemSpecializtion] += salaries[itemSpecializtion]?.salary || 0
    //
    // }

    console.log(totalSalary);

    return result
}







const financeReport2 = calculateTeamFinanceReport(salaries2, team2)
// console.log(JSON.stringify(financeReport2))

/* see in console
{"totalBudgetTeam":140909,"totalBudgetTeamLead":100000,"totalBudgetArchitect":40909}
*/

