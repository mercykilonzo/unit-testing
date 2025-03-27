const isValidEmail = require("./emailValidator")

 
 
 test("test for a valid email", () => {
   expect(isValidEmail("mercymwikali@gmail.com")).toBe(true); 
 }

 )