//  Instagram Like Automation
//  Photo Like Delay between 12-20s generated dynamically on each loop
//  Next Photo Delay between 2.3-4s generated dynamically on each loop

//Main Function Timeout (12 - 20s)
let randomTimeout = (Math.random() * (21000 - 12000) + 12000).toFixed();
console.log(
  `%c Script starting in ${randomTimeout / 1000} seconds`,
  "color:green; font-weight: bold;"
);
let count = 0;
//Next Photo Timeout (2.3 - 4s)
let random2 = (Math.random() * (5000 - 2300) + 2300).toFixed();
console.log(`Next Image Delay: ${random2 / 1000} seconds`);
//Skip Index randomly generates beween 2-5
let skipIndex = Math.floor(Math.random() * (6 - 2) + 2);
let skipCount = 0;

function loopWork() {
  let likeButton = document.querySelector("span.fr66n button.wpO6b");
  let svg = document.querySelector("span.fr66n svg");

  //Check if current image has already been liked
  if (svg.ariaLabel != "Unlike") {
    if (skipCount >= 2) {
      console.log("%c Skip Overrided", "color:green; font-weight: bold;");
    }
    if (count == 0 || count % skipIndex != 0 || skipCount >= 2) {
      skipCount = 0;
      likeButton.click();
      count++;
      console.log(
        `%c You've liked ${count} photos. Current Skip Index: ${skipIndex}`,
        "color: green; font-weight: bold;"
      );
      //Generate a new skip index of either 2 or 3
      skipIndex = Math.floor(Math.random() * (6 - 2) + 2);
    } else {
      console.log(
        `%c Photo skipped. Count Index: ${count} - Mod Value: ${skipIndex}`,
        "color:red; font-weight: bold;"
      );
      skipIndex = Math.floor(Math.random() * (6 - 2) + 2);
      skipCount++;
      console.log(`New Skip Index: ${skipIndex} - Skip Count: ${skipCount}`);
    }
  } else {
    console.log("%c Already liked this image", "color:red; font-weight: bold;");
  }

  random2 = (Math.random() * (5000 - 2300) + 2300).toFixed();
  setTimeout(() => {
    let nextPhotoButton = document.querySelector("div.l8mY4 button.wpO6b");
    nextPhotoButton.click();
  }, random2);
  randomTimeout = (Math.random() * (21000 - 12000) + 12000).toFixed();
  //Instagram Max Daily Likes 500
  if (count <= 500) {
    console.log(`Next loop starting in: ${randomTimeout / 1000} seconds`);
    console.log(`Next Image Timeout: ${random2 / 1000} seconds`);
    setTimeout(loopWork, randomTimeout);
  } else {
    console.log(
      `%c OPERATION COMPLETE. Photos liked: ${count}`,
      "color: green; font-weight: bold;"
    );
  }
}

setTimeout(loopWork, randomTimeout);
