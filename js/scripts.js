function Pizza() {
  this.size = "";
  this.type = "";
  this.toppings = [];
  this.price = 0;
}

Pizza.prototype.setPizza = function(size, type, topping) {
  this.size = size;
  this.toppings.push(topping);
  this.type = type;
}


function Order(customer) {
  this.pizzas = [];
  this.customer = customer;
  this.orderTotal = 0;
}

Order.prototype.countTotal = function() {
  var pizzaTotal = 0;
  pizzas.forEach(function(pizza) {
    pizzaTotal += pizza.price;
    pizza.toppings.forEach(function(topping) {
      pizzaTotal++;
    });
  });
  return this.orderTotal = pizzaTotal;
}

Order.prototype.addPizza = function(pizza) {
  this.pizzas.push(addPizza);
}

function Customer(firstName, lastName, phone) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.address = "";
  this.phone = phone;
}

Customer.prototype.addAddress = function(address) {
  this.address = address;
}

// Customer.prototype.setDelivery = function() {
//   this.delivery = true;
// }

var pizza = new Pizza();
var address = "";

function attachListeners() {
  $("input#delivery").click(function() {
    $("#addressRow").fadeIn();
    var inputtedAddress = $("input#physical-address").val();
  });
};

$(function() {
  attachListeners()

  $("form#orderForm").submit(function(event) {
    event.preventDefault();
    attachListeners();
    debugger;

    var inputtedFirstName = $("input#first-name").val();
    var inputtedLastName = $("input#last-name").val();
    var inputtedPhoneNumber = $("input#phone-number").val();
    var deliveryType = $("input#delivery[type='checkbox']:checked").val();
    var customer = new Customer(inputtedFirstName, inputtedLastName, inputtedPhoneNumber);
    if (deliveryType) {
      var inputtedAddress = $("input#physical-address").val();
      customer.addAddress(address);
    }

    var size = $("#selection_row input:radio[name=size]:checked").val();
    pizza.size = size;

    // var check = $("input:checkbox[name='topping']:checked").val();
    $.each($("#select_topping input:checkbox[name='topping']:checked"), function() {
      var toppingsOrder = $(this).val();
      pizza.toppings.push(toppingsOrder);
    });

    // $("label input:checkbox[name='topping']:checked").each(function() {
    //   var toppingsOrder = $(this).val();
    //   pizza.toppings.push(toppingsOrder);
    // });
  });

});
