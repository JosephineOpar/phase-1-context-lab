// TASK ONE
// let testEmployee;
// testEmployee = ["Gray", "Worm", "Security", 1];
// let result;
// result = createEmployeeRecord(testEmployee);
// console.log(result);

function createEmployeeRecord(fourElementArray) {
    let [firstName, familyName, title, payPerHour] = fourElementArray;
    let objectBuilt = {
      firstName,
      familyName,
      title,
      payPerHour,
      timeInEvents: [],
      timeOutEvents: [],
    };
    return objectBuilt;
  }
  
  // TASK TWO
  // let employeeRecords;
  // let twoRows = [
  //   ["moe", "sizlak", "barkeep", 2],
  //   ["bartholomew", "simpson", "scamp", 3],
  // ];
  // let answer;
  // answer = createEmployeeRecords(twoRows);
  // console.log(answer);
  
  function createEmployeeRecords(arrayOfArrays) {
    return arrayOfArrays.map((member) => {
      return createEmployeeRecord(member);
    });
  }
  
  // TASK THREE
  // let answer;
  // answer = createTimeInEvent(
  //   {
  //     firstName: "Gray",
  //     familyName: "Worm",
  //     title: "Security",
  //     payPerHour: 1,
  //     timeInEvents: [],
  //     timeOutEvents: [],
  //   },
  //   "2014-02-28 1400"
  // );
  // console.log(answer);
  
  function createTimeInEvent(dateStamp) {
    let [date, hour] = dateStamp.split(" ");
    this.timeInEvents.push({
      type: "TimeIn",
      hour: parseInt(hour, 10),
      date,
    });
    return this;
  }
  
  // TASK FOUR
  // copy and tweak the code for createTimeInEvent() function
  
  function createTimeOutEvent(dateStamp) {
    let [date, hour] = dateStamp.split(" ");
    this.timeOutEvents.push({
      type: "TimeOut",
      hour: parseInt(hour, 10),
      date,
    });
    return this;
  }
  
  // TASK FIVE
  // let cRecord = createEmployeeRecord(["Julius", "Caesar", "General", 1000]);
  // let timeIn = createTimeInEvent(cRecord, "0044-03-15 0900");
  // let timeOut = createTimeOutEvent(cRecord, "0044-03-15 1100");
  // hoursWorkedOnDate(cRecord, "0044-03-15");
  
  function hoursWorkedOnDate(dateArg) {
    let inEvents = this.timeInEvents.find((e) => e.date === dateArg);
    let outEvents = this.timeOutEvents.find((e) => e.date === dateArg);
    return (outEvents.hour - inEvents.hour) / 100;
  }
  
  // TASK SIX
  // draw inspiration from TASK FIVE
  
  function wagesEarnedOnDate(dateArg) {
    let raw = hoursWorkedOnDate.call(this, dateArg) * this.payPerHour;
    return parseFloat(raw.toString());
  }
  
  // TASK SEVEN
  
  const allWagesFor = function () {
    let avaiableDates = this.timeInEvents.map((obj) => obj.date);
    let payable = avaiableDates.reduce(
      function (accumulator, value) {
        return accumulator + wagesEarnedOnDate.call(this, value);
      }.bind(this),
      0
    );
    return payable;
  };
  
  // TASK EIGHT
  
  function findEmployeeByFirstName(collection, firstNameString) {
    return collection.find((obj) => obj.firstName === firstNameString);
  }
  
  // TASK NINE
  
  function calculatePayroll(employeeRecords) {
    return employeeRecords.reduce((accumulator, value) => {
      return accumulator + allWagesFor.call(value);
    }, 0);
  }