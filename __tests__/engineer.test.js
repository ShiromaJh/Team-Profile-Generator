const Engineer = require("../lib/engineer");

test("generates engineer object", () => {
  const engineer = new Engineer("Joe", "000", "joe@gmail.com");

  expect(engineer.name).toBe("Joe");
  expect(engineer.id).toBe("000");
  expect(engineer.email).toBe("joe@gmail.com");
});
