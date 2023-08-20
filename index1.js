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
timmy.totalAfterSubscriptionDiscount=subscriptionDiscount(timmy); //create property totalAfterSubscriptionDiscount of object timmy and store return value of subscriptionDiscount 
timmy.finalTotal=couponDiscount(timmy);        
print(timmy);
sarah.totalAfterSubscriptionDiscount=subscriptionDiscount(sarah);
sarah.finalTotal=couponDiscount(sarah);
print(sarah.finalTotal);
rocky.totalAfterSubscriptionDiscount=subscriptionDiscount(rocky);
rocky.finalTotal=couponDiscount(rocky);
print(rocky.finalTotal);



//If a customer has a subscription, the customer will receive a 25% discount after the refill total has been calculated.

function subscriptionDiscount(obj){
    let refilltotal=obj.refills*obj.pricePerRefill; //find refill cost 
    let total;
if(obj.subscription==true){   //check if the person has subscription 
    let discount=.25*total;   //if he has subscription then apply 25% discount
    total=refilltotal-discount;
}else{
    total=refilltotal;     //if he hasn't then total is equal to refilltotal
}
return total;               //return total
}
//If the customer has a coupon, the customer will receive a $10 discount after the subscription discount has been calculated.
function couponDiscount(obj){
    let aftercouponDiscount=obj.totalAfterSubscriptionDiscount;
    if(obj.coupon==true){
        aftercouponDiscount=aftercouponDiscount-10;
}
  return aftercouponDiscount;
}
function print(obj){
    console.log("your grand total is ",obj.finalTotal);   
}