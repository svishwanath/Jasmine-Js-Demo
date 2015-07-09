describe("Email validation", function() {

  it("should validate someone@somewhere.com",function(){
    var result = is_valid("someone@somewhere.com");
    expect(result).toBe(true);
  });

  it("should not validate someone@somewhere",function(){
    var result = is_valid("someone@somewhere");
    expect(result).not.toBe(true);
  });
 it("validating multiplication",function(){
    var result = multiply(3,0);
    expect(result).toBe(0);
  });
});