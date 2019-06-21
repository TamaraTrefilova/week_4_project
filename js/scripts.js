function Pizza() {
  this.size = "";
  this.type = "";
  this.toppings = [];
  this.price = 0;
}

Pizza.prototype.setPizza(size, type, topping){
  this.size = size;
  this.toppings.push(topping);
  this.type = type;
}


function Order(customer) {
  this.pizzas = [];
  this.customer = customer;
  this.orderTotal = 0;
}

Order.prototype.addPizza(pizza){
   this.pizzas.push(addPizza);
}

function Customer(name) {
  this.name = name;
  this.address = "";
  this.phone = "";
  this.delivery = false;
}


Customer.prototype.setDelivery(){
  this.delivery = true;
}
var pizza = new Pizza();
