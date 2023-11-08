const {Given, When, Then} = require("cucumber"); 
const {Builder, By} = require("selenium-webdriver"); 
const chrome = require("selenium-webdriver/chrome");
const assert = require("assert");  

let driver; // se crea un objeto de tipo driver que se utilizará más adelante

Before (async function() { 

    driver = await new Builder().forBrowser("chrome").build(); 
});

After(async function() { 
    if (driver) { 
    await driver.quit();
    }
});

Given("I am on the home page", async function() {
    await driver.get("http://localhost:5500/index.html");
});

When("I click on the login button", async function() { 
    await driver.findElement(By.id("login")).click();
});

Then ("Now I am on the login page", async function () { 
    const actualURL = await driver.getCurrentUrl();
    const urlEsperada = "http://localhost:5500/login.html"

    assert.equal(actualURL, urlEsperada, 'La URL no coincide con la página esperada');
});

