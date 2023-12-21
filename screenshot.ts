import puppeteer from "puppeteer";

async function takeScreenshot() {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  // Set custom width and height for the viewport
  const customWidth = 1280 * 1;
  const customHeight = 769 * 1;

  // Set viewport size
  await page.setViewport({ width: customWidth, height: customHeight });

  // URL of the website you want to capture
  const website = "https://example.com/";
  const url = new URL(website);

  await page.goto(url.toString(), { waitUntil: "networkidle0" });

  // Take a screenshot
  const screenshotPath = `./screenshots/${url.hostname}_screenshot.png`;
  await page.screenshot({ path: screenshotPath });

  console.log(`Screenshot saved at: ${screenshotPath}`);

  // Close the browser
  await browser.close();
}

takeScreenshot();
