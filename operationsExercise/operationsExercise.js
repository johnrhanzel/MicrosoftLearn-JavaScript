let services = [
    //list of services
    { name: "Graphic Design", type: "Design", price: 500 },
    { name: "UI/UX Design", type: "Design", price: 1000 },
    { name: "Python Programming", type: "Programming", price: 500 },
    { name: "Web Development", type: "Development", price: 1500 },
    { name: "C# Programming", type: "Programming", price: 500 },
    { name: "Technical Support", type: "Support", price: 1000 },
    { name: "Troubleshooting", type: "Support", price: 500 },
    { name: "Account Retrieval", type: "Support", price: 1700 },
];

//simulation of transactions
let transactions = [];

transactions.push({ avail: ["Graphic Design",], total: 3000})
transactions.push({ avail: ["Account Retrieval"], total: 13600})

//calculate earnings
const total = transactions.reduce((acc, curr) => acc + curr.total, 0);
console.log("Earning for today is:", total);