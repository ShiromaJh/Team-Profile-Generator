const Manager = require("../lib/manager");

test("generates manager object", () => {
  const manager = new Manager("Joe", "000", "joe@gmail.com");

  expect(manager.name).toBe("Joe");
  expect(manager.id).toBe("000");
  expect(manager.email).toBe("joe@gmail.com");
});
