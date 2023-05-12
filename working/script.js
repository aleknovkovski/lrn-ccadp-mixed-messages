const part1 = ["Why did the chicken cross the road?", "Why did it rain today?", "Why is life unfair?"]
const part2 = ["Well...", "Because...", "The answer is simply that..."]
const part3 = ["Some things don't make sense.", "Not everything is fair.", "Randomness is a part of the universe."]

let message = ""
function randomItem() {
    return Math.floor(Math.random() * 3)
}

message += part1[randomItem()]
message += " " + part2[randomItem()]
message += " " + part3[randomItem()]

console.log(message)