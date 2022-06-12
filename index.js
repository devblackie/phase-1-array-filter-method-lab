// Code your solution here
const findMatching=(driver, string)=>{
    const matchingDriver=driver.filter((driver)=>{
        return driver.toUpperCase()===string.toUpperCase()
    })
    return matchingDriver;
}

const fuzzyMatch=(driver, string)=>{
    const matching=driver.filter((driver)=>{
        return driver.slice(0,2)===string.slice(0,2)
    })
    return matching;
}

const matchName=(driver, string)=> {
    const name= driver.filter((driver)=>{
        return driver.name===string
    })
    return name;
}
