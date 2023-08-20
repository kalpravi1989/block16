const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}
timmy.total=discount(timmy);
sarah.total=discount(sarah);
rocky.total=discount(rocky);
console.log()




//If a customer has a subscription, the customer will receive a 25% discount after the refill total has been calculated.
//If the customer has a coupon, the customer will receive a $10 discount after the subscription discount has been calculated.
function discount(obj){
    let total=obj.refills*obj.pricePerRefill;
if(obj.subscription==true){
    let discount=.25*total;
    total=total-discount;
}if(obj.coupon==true){
    total=total-10;
}
  return total;
}