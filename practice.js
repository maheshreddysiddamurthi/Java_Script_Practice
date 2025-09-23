// const knightIsAwake = true;
// function canExecuteFastAttack(knightIsAwake) {
//     if (knightIsAwake) {
//         return false;
//     }
//     else {
//         return true;
//     }
// }
// 
// console.log(canExecuteFastAttack(knightIsAwake));

const knightIsAwake = false;
const archerIsAwake = true;
const prisonerIsAwake = false;
function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
    if (knightIsAwake || archerIsAwake || prisonerIsAwake) {
        return true;
    }
    else {
        return false;
    }
}
console.log(canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake));