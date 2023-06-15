var arr = [];
function add(){
  var name = document.getElementById("name").value;
  var insti =   document.getElementById("inst").value;
  var batch =   document.getElementById("batch").value;
  var r1 =   document.getElementById("r1").value;
  var r2 =  document.getElementById("r2").value;
  var modu =  document.getElementById("modu").value;
  var sem =  document.getElementById("sem").value;
  var total = 300;
 
  var obtain = eval(parseFloat(r1) + parseFloat(r2) + parseFloat(modu) + parseFloat(sem) );
  var percentage = (obtain / total) * 100;
 switch (true) {
  case percentage >= 80:
    var grade = "A+"
    break;
    case percentage >= 70:
      var grade = "A"
      break;
      case percentage >= 60:
    var grade = "B"
    break;
    case percentage >=50:
      var grade = "C"
      break;
  default:
    var grade = "Fail";
    grade.fontcolor = "red"
   
    break;
 }
 
var obj = {
    name : name,
    institude : insti,
    batch : batch,
    r1 : r1,
    r2 : r2,
    modular : modu,
    semister : sem,
    obtain : obtain,
    total : total,
    percentage : percentage,
    grade : grade,
    
}
arr.push(obj);    // It push all obj in array//
localStorage.setItem("marksheet" , JSON.stringify(arr))   //to conver arry in string = stringify//
var get = JSON.parse(localStorage.getItem("marksheet"));

var table = "<tr><th>Name</th><th>Institude Name</th><th>Batch</th><th>R1</th><th>R2</th><th>Modulat Marks</th><th>Semister End Marks</th><th>Obtain Marks</th><th>Total Marks</th><th>Percentage</th><th>Grade</th><th>Remove</th></tr>";
for(let i = 0 ; i < get.length ; i++){  // += show that 3 += 6 or 3 + 3 = 6
 table += "<tr id='rem'>" + "<th>" + get[i].name + "</th>" 
 + "<th>" + get[i].institude + "</th>" 
 + "<th>" + get[i].batch + "</th>" 
 + "<th>" + get[i].r1 + "</th>" 
 + "<th>" + get[i].r2 + "</th>" 
 + "<th>" + get[i].modular + "</th>" 
 + "<th>" + get[i].semister + "</th>"
 + "<th>" + get[i].obtain + "</th>" 
 + "<th>" + get[i].total + "</th>"
 + "<th>" + get[i].percentage + "</th>"
 + "<th>" + get[i].grade + "</th>"
 + "<th>" + "<button onclick='remove()'>" + "Remove" + "</button>" + "</th>"

 + "</tr>"
}

document.getElementById("result").innerHTML = table;
}

function remove(){
document.getElementById("rem").remove();

}