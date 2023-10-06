export const getDevLocation=(city,state)=>{
    return city +(!!city && ", ")+state
}
export const getStringSplit=(strings,no)=>{
   return strings.slice(0,no)+ (strings.length > no && " ...")
}