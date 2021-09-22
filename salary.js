const arbetsdag = {
    start: 8,
    slut: 14,
    lön: 100,
    dag: "måndag"
}
let totaltid = arbetsdag.slut - arbetsdag.start;
let normallön = (totaltid * arbetsdag.lön)
let övertidlön = 0
let isWeekend = 1
if (arbetsdag.dag === "lördag" || arbetsdag.dag === "söndag") {
    isWeekend = 2
}
if (totaltid > 8) {
    let övertidlön = (totaltid - 8) * arbetsdag.lön * 0.5
}
if (totaltid > 12) {
    console.log("Får inte jobba över 12 timmar")
} else {
    console.log(`Du jobbade en ${arbetsdag.dag} i ${totaltid} timmar vilket ger dig ${normallön * isWeekend}kr plus ${övertidlön * isWeekend}kr i övertid, en total lön om: ${(normallön + övertidlön) * isWeekend}kr`)
}


