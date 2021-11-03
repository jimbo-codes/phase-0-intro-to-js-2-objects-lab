// Write your solution in this file!
const employee = {
  name: "street",
  streetAddress: "street",
}
updateEmployeeWithKeyAndValue = (object,key,value) => {
  return object = {...employee,
    [key]: value,
  }
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value) {
 employee[key] = value;
 return employee;
}

function deleteFromEmployeeByKey(employee,key){
  const newobj = {...employee}
  delete newobj[key];
  return newobj;
}
function destructivelyDeleteFromEmployeeByKey(employee,key){
  delete employee[key];
  return employee;
}