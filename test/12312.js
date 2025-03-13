





console.log(
  Function.prototype.call.apply(a => a, [1,2])
  // (a => a).apply(1, 2)
  // (a => a).call(1, 2)
  // (a=>a).apply(null, [1, 2])
  // console.log.call.call.call.call.call.apply(a => a, [1,2])
)

// console.log.apply.apply.apply.apply.apply.call(a => a, 1, [2])
// Function.prototype.call.apply(a => a, [1,2])
// Function.prototype.apply.call(a => a, 1, [2])

// (a => a).call(1, 2)

  // (a => a).apply(1, [2])

