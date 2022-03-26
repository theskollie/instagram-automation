let skipIndex = (Math.random() * (3 - 2) + 2).toFixed();

for (let i = 0; i < 100; i++) {
  if (i % skipIndex == 0) {
    continue;
  }

  skipIndex = (Math.random() * (3 - 2) + 2).toFixed();
  console.log(`New Skip Value: ${skipIndex}`);
}
