function doSomething() {
    console.log('i did something');
    return Promise.resolve();
  }

  async function main() {
    await doSomething();
    console.log('i did something AFTER!');
  }
  
  main();
  