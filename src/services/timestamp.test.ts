import  TimestampService  from "./timestamp";
import { expect } from "chai";


describe("TimestampService tests", ()=>{
  const service = new TimestampService();
  it("TimestamService should return current utc and unix times when no input or empty string was provided", ()=>{
    const expected = {
      unix: Date.now(),
      utc: new Date().toUTCString()
  };
    const result = service.parseRequest("");      
    expect(result.utc).to.equal(expected.utc)    
    expect(result.unix).to.equal(expected.unix)    
  })
  it("TimestamService should return correct utc and unix times when valid unix time was provided", ()=>{
    const expected = {
      unix: 1451001600000,
      utc: "Fri, 25 Dec 2015 00:00:00 GMT"
  };
  const expected2 = {
    unix: 2015,
    utc: "Thu, 01 Jan 1970 00:00:02 GMT"
};
    const result = service.parseRequest("1451001600000");      
    const result2 = service.parseRequest("2015");      
    expect(result.utc).to.equal(expected.utc)    
    expect(result.unix).to.equal(expected.unix)    
    expect(result2.utc).to.equal(expected2.utc)    
    expect(result2.unix).to.equal(expected2.unix)    
  })
  it("TimestamService should return correct utc and unix times when valid date string was provided", ()=>{
    const expected1 = {
      unix: 1451001600000,
      utc: "Fri, 25 Dec 2015 00:00:00 GMT"
  };
  const expected2 = {
    unix: 1448928000000,
    utc: "Tue, 01 Dec 2015 00:00:00 GMT"
};
const expected3 = {
  unix: 1420070400000,
  utc: "Thu, 01 Jan 2015 00:00:00 GMT"
};
    const result1 = service.parseRequest("2015-12-25");      
    const result2 = service.parseRequest("2015-12");      
    const result3 = service.parseRequest("2015-12-");      
    const result4 = service.parseRequest("2015-");      
          
    expect(result1.utc).to.equal(expected1.utc);    
    expect(result1.unix).to.equal(expected1.unix);    
    expect(result2.utc).to.equal(expected2.utc);    
    expect(result2.unix).to.equal(expected2.unix);    
    expect(result3.utc).to.equal(expected2.utc);    
    expect(result3.unix).to.equal(expected2.unix);
    expect(result4.utc).to.equal(expected3.utc);    
    expect(result4.unix).to.equal(expected3.unix);

  });
  it("should return error message when input date was invalid", ()=>{
    const invalidRequest = service.parseRequest("abcd");
    expect(invalidRequest).to.haveOwnProperty("error");
    expect(invalidRequest.error).to.equal("Invalid date");
    })
})