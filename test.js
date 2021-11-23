var momsPromise = new Promise(function(resolve, reject) {
  momsSavings = 80000;
  priceOfPhone = 60000;
  if (momsSavings > priceOfPhone) {
    resolve({
      brand: "iphone",
      model: "6s"
    });
  } else {
    reject("我们没有足够的储蓄，让我们多存点钱吧。");
  }
});
momsPromise.then(function(value) {
  console.log("哇，我得到这个电话作为礼物 ", JSON.stringify(value));
});
momsPromise.catch(function(reason) {
  console.log("妈妈不能给我买电话，因为 ", reason);
});
momsPromise.finally(function() {
  console.log(
    "不管妈妈能不能给我买个电话，我仍然爱她"
  );
});

