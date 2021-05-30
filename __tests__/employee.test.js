const Employee = require("../lib/employee");

test("generates employee object", () => {
  const employee = new Employee("Joe", "000", "joe@gmail.com");

  expect(employee.name).toBe("Joe");
  expect(employee.id).toBe("000");
  expect(employee.email).toBe("joe@gmail.com");
});
