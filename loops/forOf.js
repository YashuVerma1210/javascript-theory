const numbers = [1, 2, 3, 4, 5, 6]
// for of loop works on arrays and maps
for (const number of numbers) {
    console.log(number);
}

// no duplicate values
const countries = new Map()
countries.set('IN', 'India')
countries.set('USA', 'United States of America')

for (const [key, country] of countries) {
    console.log(key, country);
}

// reduce method 
const str = "happy"

const count = Array.from(str).reduce((acc, curr) => {
    acc[curr] = acc[curr] ? acc[curr] + 1 : 1;
    return acc
}, {})

console.log(count);