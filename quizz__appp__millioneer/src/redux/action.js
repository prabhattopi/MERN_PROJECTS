import { CHANGE_AMOUNT, CHANGE_CATEGORY, CHANGE_DIFFICULTY, CHANGE_SCORE, CHANGE_TYPE } from "./actionType";


export const handleCategoryChange=payload=>({
    type:CHANGE_CATEGORY,
    payload,

})
export const handleDifficultyChange=payload=>({
    type:CHANGE_DIFFICULTY,
    payload,

})
export const handleTypeChange=payload=>({
    type:CHANGE_TYPE,
    payload,

})
export const handleScoreChange=payload=>({
    type:CHANGE_SCORE,
    payload,

})
export const handleAmountChange=payload=>({
    type:CHANGE_AMOUNT,
    payload,

})