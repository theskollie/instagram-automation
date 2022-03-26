//  Instagram Like Automation
//  Photo Like Delay between 12-20s generated dynamically on each loop
//  Next Photo Delay between 2.3-4s generated dynamically on each loop

//Main Function Timeout (12 - 20s)

let baseUrl = `https://instagram.com/explore/tags/`;
//Array of Hashtags to loop over
const devHashtags = [
  "javascript",
  "webdeveloper",
  "devcommunity",
  "webdevelopment",
  "coding",
];
let currentIndex = 0;

//Script cannot continue running after changing page
//Use Selenium to automate this process
function navigateHashtag() {
  let destinationUrl = `${baseUrl}${devHashtags[currentIndex]}`;
  window.location.href = destinationUrl;

  setTimeout(() => {
    console.log("Inside Timeout");
    let firstImage = document.querySelector("div.kIKUG a").href;
    window.location.href = firstImage;
  }, 8000);
}

//Start Liking
//Main Function Timeout (12 - 20s)
navigateHashtag();
let randomTimeout = (Math.random() * (21000 - 12000) + 12000).toFixed();
console.log(`Initial Main Function Timeout: ${randomTimeout}`);
let currentLoopCount = 0;
//Next Photo Timeout (2.3 - 4s)
let random2 = (Math.random() * (5000 - 2300) + 2300).toFixed();
console.log(`Initial Next Image Timeout: ${random2}`);

function loopWork() {
  let likeButton = document.querySelector("span.fr66n button.wpO6b");
  likeButton.click();
  console.log(`You've liked ${count} photos on #${devHashtags[currentIndex]} `);
  currentLoopCount++;
  random2 = (Math.random() * (5000 - 2300) + 2300).toFixed();
  console.log(`Next Image Timeout: ${random2}`);
  setTimeout(() => {
    let nextPhotoButton = document.querySelector("div.l8mY4 button.wpO6b");
    nextPhotoButton.click();
  }, random2);
  randomTimeout = (Math.random() * (21000 - 12000) + 12000).toFixed();

  if (currentLoopCount <= 2) {
    console.log(`Next loop starting in: ${randomTimeout} seconds`);
    console.log(`Next Image Timeout: ${random2}`);
    setTimeout(loopWork, randomTimeout);
  } else {
    if (devHashtags.length < currentIndex) {
      currentIndex++;
      console.log(`Switching to #${devHashtags[currentIndex]}`);
      navigateHashtag();
      setTimeout(loopwork, randomTimeout);
    } else {
      console.log("OPERATION COMPLETE: All hashtags have been liked.");
    }
  }
}
