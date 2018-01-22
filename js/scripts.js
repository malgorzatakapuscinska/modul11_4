function Phone(model, brand, price, color, screen, procesor, operating_system) {
	this.model = model;
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.screen = screen;
	this.procesor = procesor;
	this.operating_system = operating_system;
}

var phoneList = {};
function addPhonename(){
	
}

Phone.prototype.printInfo = function(){
	var screenResolution = this.screen.resolution;
	var diagonal = this.screen.diagonal;
	var contrast = this.screen.displayContrast;
	console.log("The phone brand is " + this.brand + " ,color is: " + this.color + ", price is " + this.price + " zł." + screenResolution + " " + contrast);
};


var iPhone8Plus = new Phone("IPhone8Plus", "Apple", 3979, "gold", {resolution: '1920 x 1080', diagonal: 5.5, displayContrast: 1300},  'A11 Bionic', 'iOS 11');
var galaxyS8 = new Phone("GalaxyS8", "Samsung", 2742.99, "orchid grey", {resolution: '2220 x 1080', diagonal: 5.6, displayContrast: 'brak danych'}, 'ośmiordzeniowy, taktowanie 2,2 GHz', 'Android');
var xperiaXZ1 = new Phone("XperiaYZ1", "Sony", 2999, "księżycowy błekit", {resolution: 'brak danych', diagonal: 5.2, displayContrast: 'Dynamiczne poprawianie kontrastu'}, ' Qualcomm® Snapdragon™ 835 Mobile Platform', 'Google Android™ O');

iPhone8Plus.printInfo();
galaxyS8.printInfo();
xperiaXZ1.printInfo();