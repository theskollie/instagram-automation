//  Instagram Like Automation
//  Photo Like Delay between 12-20s generated dynamically on each loop
//  Next Photo Delay between 2.3-4s generated dynamically on each loop

//Main Function Timeout (12 - 20s)
let randomTimeout = (Math.random() * (21000 - 12000) + 12000).toFixed();
console.log(`Initial Main Function Timeout: ${randomTimeout}`);
let count = 0;
//Next Photo Timeout (2.3 - 4s)
let random2 = (Math.random() * (5000 - 2300) + 2300).toFixed();
console.log(`Initial Next Image Timeout: ${random2}`);

function loopWork() {
  let likeButton = document.querySelector("span.fr66n button.wpO6b");
  likeButton.click();
  count++;
  console.log(`You've liked ${count} photos`);
  random2 = (Math.random() * (5000 - 2300) + 2300).toFixed();
  console.log(`Next Image Timeout: ${random2}`);
  setTimeout(() => {
    let nextPhotoButton = document.querySelector("div.l8mY4 button.wpO6b");
    nextPhotoButton.click();
  }, random2);
  randomTimeout = (Math.random() * (21000 - 12000) + 12000).toFixed();
  if (count <= 100) {
    console.log(`Next loop starting in: ${randomTimeout} seconds`);
    setTimeout(loopWork, randomTimeout);
  } else {
    console.log(`OPERATION COMPLETE. Photos liked: ${count}`);
  }
}

setTimeout(loopWork, randomTimeout);
