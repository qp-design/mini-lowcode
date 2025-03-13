


async function sy() {
  console.log(1);
  await sy2()
  console.log(8)
}


async function sy2() {
  return Promise.resolve().then(() => {
    console.log(11)
  })
}

async function sy3() {
  return Promise.resolve().then(() => {
    console.log(13)
  })
}

sy()
sy3()
console.log(19)
