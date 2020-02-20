let out = document.querySelector('.out')

for (let i = 0; i < 5; i++) {
  // console.log('*')
  for (let j = 0; j < 10; j++) {
    out.innerHTML += '*'
  }
  out.innerHTML += '#'
}