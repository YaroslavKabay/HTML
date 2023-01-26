const salaries2 = {
    TeamLead: { salary: 1000.1222, tax: "99%" },
    Architect: { salary: 9000.22222, tax: "34%" },}

const team2 = [
    { name: "Alexander", specialization: "TeamLead" },
    { name: "Gaudi", specialization: "Architect" },
    { name: "Koolhas", specialization: "Architect" },
    { name: "Foster", specialization: "Architect" },
    { name: "Napoleon", specialization: "General" },]

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
        if(!totalSalary[itemSpecializtion]){
            totalSalary[itemSpecializtion] = 0
        }
        totalSalary[itemSpecializtion] += salaries[itemSpecializtion]?.salary || 0

    })
    //****OR*****
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

    for (const item in totalSalary) {
        result[`totalBudget${item}`] = parseInt(totalSalary[item])
        result.totalBudgetTeam += parseInt(totalSalary[item])
    }


    return result
}


const financeReport2 = calculateTeamFinanceReport(salaries2, team2)
console.log(JSON.stringify(financeReport2))


