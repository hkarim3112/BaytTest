function contains(obj, targetValue) {
  for (const key in obj) {
    if (obj[key] === targetValue) {
      return true;
    } else if (typeof obj[key] === "object" && obj[key] !== null) {
      if (contains(obj[key], targetValue)) {
        return true;
      }
    }
  }
  return false;
}

// Sample usage:
var nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: "foo2",
          },
        },
      },
    },
  },
};

console.log(contains(nestedObject, 44)); // Output: true
console.log(contains(nestedObject, "foo2")); // Output: true
console.log(contains(nestedObject, "bar")); // Output: false
