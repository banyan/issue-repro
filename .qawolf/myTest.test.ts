import { Browser, Page } from "playwright";
import qawolf from "qawolf";

let browser: Browser;
let page: Page;

beforeAll(async () => {
  browser = await qawolf.launch();
  const context = await browser.newContext();
  await qawolf.register(context);
  page = await context.newPage();
});

afterAll(async () => {
  await qawolf.stopVideos();
  await browser.close();
});

// import "expect-playwright"

test("myTest", async () => {
  await page.goto("http://localhost:3000/");
  await expect(page).toHaveText("Edit src/App.tsx and save to reload.");
  await page.click("text=Learn React");
});