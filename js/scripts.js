function PhonesFactory() {
  this.phonesList = {};
}

PhonesFactory.prototype.createInstance = function(phone) {
  function Phone(model, brand, price, color) {
    this.model = model;
    this.brand = brand;
    this.price = price;
    this.color = color;
  }

  var instance = new Phone(phone[0], phone[1], phone[2], phone[3]);
  this.addToList(instance);
};

PhonesFactory.prototype.addToList = function(phone){
  this.phonesList[phone.model] = phone;

  console.log(this.phonesList);
  return this.phonesList;
};

PhonesFactory.prototype.printPhone = function(model){
	console.log(this.phonesList[model]);
}


var phone1 = ["IPhone8Plus", "Apple", 3979, "gold"];
var phone2 = ["GalaxyS8", "Samsung", 2742.99, "orchid grey"];
var phone3 = ["XperiaYZ1", "Sony", 2999, "księżycowy błekit"];

var factory1 = new PhonesFactory(phone1);

factory1.createInstance(phone1);
factory1.createInstance(phone2);
factory1.createInstance(phone3);

/*var phone = 'GalaxyS8';*/
factory1.printPhone('GalaxyS8'); 




