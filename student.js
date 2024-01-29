// const age = 20;
// const college = "itm";

// module.exports.a = age;
// module.exports.b = college;

const emp = {
  Name: "Ram",
  city: "gwalior",
  Post: "manager",

  team: function(){
    console.log("Hello Team")
  },

  abcd : function(){
    console.log("heelooo abcd here")
  },

  user : ["lakshman",123,true,"analyst"],
  
  add : function(a,b){
    console.log("its a addition function",a+b);

  }
}
module.exports=emp