const {By, Key, Builder} = require("selenium-webdriver");
require("chromedriver");

async function test_case () { 

let driver = await new Builder().forBrowser("chrome").build();

await driver.get("http://localhost:5500/index.html");

await driver.findElement(By.id("login")).click();

}

test_case();