is_valid = function(email){
  var reg_expr = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  return reg_expr.test(email);
};

multiply = function(p, q){
return p*q;
};
