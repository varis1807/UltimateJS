// objects -> group of key value pair
//key : value-> property
//ley : fxn-> method
let cap = {
  name: "varis",
  lastName: "rana",
  address: {
    pincode: 440016,
    area: "amarnagar hingna road nagpur",
  },
  age: 65,
  passion: "developer",
  chad:["crikcket, listen music, playing football"],
  isGF: true,
  //fxn
  engg: function () {
    console.log("now we are learning node js for future contamination");
  },
};
//get
console.log(cap.name);
console.log(cap.lastName);
cap.engg;
console.log(cap.address);
//set
