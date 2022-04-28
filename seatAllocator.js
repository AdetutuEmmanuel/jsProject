

const allocator = [];
let pName;
let pSeatN;
let pRegChecker;

function allocatorfunc() {
pName = ninput.value;
ninput.value = "";
pSeatN = seatnum.value;
seatnum.value = "";
 allocator.push(pName, pSeatN)
}
console.log(allocator)

function displayInfo(){
      pRegChecker = input3.value;
      input3.value = ""; 
      
      if (pRegChecker === pSeatN)
      {
            alert("Seat is already booked by " + pName);
      }
      else
      {
            alert("Seat is available to book...")
      }
      pRegChecker = "";
}
