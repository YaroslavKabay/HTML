const salaries2 = {
    TeamLead: { salary: 1000, tax: "99%" },
    Architect: { salary: 9000, tax: "34%" },}
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
    let result = {totalBudgetTeam: totalBudgetTeam, totalBudgetTeamLead: totalBudgetTeamLead, totalBudgetArchitect: totalBudgetArchitect}




    return result
}







const financeReport2 = calculateTeamFinanceReport(salaries2, team2)
console.log(JSON.stringify(financeReport2))

/* see in console
{"totalBudgetTeam":140909,"totalBudgetTeamLead":100000,"totalBudgetArchitect":40909}
*/

