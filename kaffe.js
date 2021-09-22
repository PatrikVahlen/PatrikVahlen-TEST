// Det finns ett kafé som ger 10% rabatt om man spenderar minst 1000kr på kaffe per månad.

// Kostnaden per kaffekopp är i genomsnitt 12kr.

// Programmet ska via console.log() visa om personen har rätt till rabatten.

// Programmet ska visa via console.log() hur många fler kaffekoppar personen måste köpa för 
// att få 10% rabatt (i fall denne har spenderat för lite pengar).

const costPerCup = 12
const amountBeforeDiscount = 1000
const numberOfCups = 100
let hasDiscount = false
const amountSpent = numberOfCups * costPerCup

hasDiscount = amountSpent >= amountBeforeDiscount
console.log(hasDiscount)

if (hasDiscount) {
    console.log(`You are eligble for a discount because you have bought ${numberOfCups} cups`)
} else {
    let cupsUntilDiscount = Math.ceil((amountBeforeDiscount - amountSpent) / costPerCup)
    console.log(`You are not eligble for need to buy ${cupsUntilDiscount}`)
}