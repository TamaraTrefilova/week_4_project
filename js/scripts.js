function Pizza() {
  this.size = "";
  this.type = "";
  this.toppings = [];
  this.price = 0;
}

Pizza.prototype.countPrice = function() {
  var price = checkSize(this.size);
  var checkTop = checkTopping(this.toppings);
  this.price = price + checkTop;
  return this.price;
}


var checkTopping = function(toppings) {
  var count = 0;
  toppings.forEach(function(topping) {
    if (topping) {
      count++;
    }
  });
  return count * 2;
}

var checkSize = function(size) {
  var value = 0;
  switch (size) {
    case "small":
      value = 4;
      break;
    case "medium":
      value = 6;
      break;
    case "large":
      value = 8;
      break;
    case "x-large":
      value = 10;
      break;
    default:
      return value;
  }
  return value;
}


function Order(customer) {
  this.pizzas = [];
  this.customer = customer;
  this.orderTotal = 0;
}

Order.prototype.countTotal = function() {
  var pizzaTotal = 0;
  this.pizzas.forEach(function(pizza) {
    pizzaTotal += pizza.countPrice();
  });
  return this.orderTotal = pizzaTotal;
}

Order.prototype.addPizza = function(pizza) {
  this.pizzas.push(pizza);
}

Order.prototype.printOrder = function() {
  var stringOrder = "";
  stringOrder = " Customer name: " +
    this.customer.firstName + " " + this.customer.lastName + "<br>";
  if (this.customer.address) {
    stringOrder += " Customer address: " +
      this.customer.address + "<br>";
  }
  stringOrder += " Customer phone: " +
    this.customer.phone + "<br>";
  stringOrder += " Order total: $" +
    this.orderTotal + ".00" + "<br>";
  return stringOrder;
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


var pizza = new Pizza();
var address = "";

function attachListeners() {
  $("#confirmButton").click(function() {
    $("#order_details").remove();
    $("#submit_btn").hide("hide");
    $("#buttons").remove();
    $("#success_message").fadeIn();
    $("form#orderForm")[0].reset();
  });
  $("#removeButton").click(function() {
    $("#order_details").remove();
    $("#submit_btn").hide("hide");
    $("#buttons").remove();
    $("#remove_order_message").fadeIn();
      $("#remove_order_message").fadeOut(1000);
    $("#resetButton").fadeIn(2000);
    // $("form#orderForm")[0].reset();
  });
  $("#resetButton").click(function() {
    $("#resetButton").hide("hide");
    $("#submit_btn").show();
    // $("#selection_row").show();    
  });
};

$(function() {
  attachListeners()

  $("form#orderForm").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#first-name").val();
    var inputtedLastName = $("input#last-name").val();
    var inputtedPhoneNumber = $("input#phone-number").val();
    var deliveryType = $("input#delivery[type='checkbox']:checked").val();
    var customer = new Customer(inputtedFirstName, inputtedLastName, inputtedPhoneNumber);
    if (deliveryType) {
      var inputtedAddress = $("input#physical-address").val();
      customer.addAddress(inputtedAddress);
    }

    var size = $("input:radio[name=size]:checked").val();
    pizza.size = size;

    pizza.toppings.push($("input[value='Cheese']:checked").val());
    pizza.toppings.push($("input[value='Pepperoni']:checked").val());
    pizza.toppings.push($("input[value='Artichoke']:checked").val());
    pizza.toppings.push($("input[value='Anchovy']:checked").val());
    pizza.toppings.push($("input[value='Mushrooms']:checked").val());
    pizza.toppings.push($("input[value='Bacon']:checked").val());
    pizza.toppings.push($("input[value='Onions']:checked").val());


    var order = new Order(customer);
    order.addPizza(pizza);
    var total = order.countTotal();
    $("#selection_row").fadeOut();
    $("#submit_btn").remove();
    $("#order_details").html(" Your order: <br>" + order.printOrder());
    $("#order_details").fadeIn();
    $("#buttons").fadeIn();
  });

});
