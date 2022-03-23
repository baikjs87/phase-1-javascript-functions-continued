function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(work = "go to the office") {
    return `This Monday, I will ${work}.`
}

function wrapAdjective(wrap = "*") {
    const innerFunction = function (adj = "special") {
        return `You are ${wrap}${adj}${wrap}!`
    }
    return innerFunction
}
