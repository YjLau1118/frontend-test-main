const duplicateValue = (a) => {
  const uniqueValue = a.filter((value, index) => a.indexOf(value) === index) 
  return uniqueValue
}


console.log(duplicateValue([1,2,3,4,5,1,1,1]))