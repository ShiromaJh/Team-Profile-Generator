const Intern = require("../lib/intern");

test("generates intern object", () => {
  const intern = new Intern("Joe", "000", "joe@gmail.com");

  expect(intern.name).toBe("Joe");
  expect(intern.id).toBe("000");
  expect(intern.email).toBe("joe@gmail.com");
});
