/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
    //Write your code here , just console.log
    let highMarksStudent=arr.map(function(element,index,list){
        if(arr[index].marks>50){
            console.log(arr[index]);
        }
    });
  }
  
  function PrintStudentsbyForEach() {
    //Write your code here , just console.log
       arr.forEach(function(element,index){
        if(element.marks>50){
            console.log(arr[index]);
        }
       });
  }
  
  function addData() {
    //Write your code here, just console.log
        let newStudent = {id:4,name:"susan",age:"20",marks:45};
        arr.push(newStudent);
        console.log(arr);
  }
  
  function removeFailedStudent() {
    //Write your code here, just console.log
    arr=arr.filter(function(element,index){
        if(element.marks>50){
          return arr[index];
        }
    });
    console.log(arr);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let newStudents = [
        {id:5,name:"Anne",age:"18",marks:75},
        {id:6,name:"David",age:"19",marks:32},
        {id:7,name:"Emily",age:"20",marks:92}
      ];
      arr=arr.concat(newStudents);
      console.log(arr);
  }