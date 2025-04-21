interface Dictionary {
    [key: string]: number;
}

const scoreBoard: Dictionary = {
    "Alice": 100,
    "Bob": 85,
    "Charlie": 95
};

console.log(scoreBoard["Alice"]);
console.log(scoreBoard["Bob"]); 

scoreBoard["Diana"] = 90;
console.log(scoreBoard["Diana"]);