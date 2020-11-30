describe("First test suite", async () => {
  let page;

  before(async () => {
    page = await browser.newPage();
  });

  after(async function() {
    await page.close();
  });

  it("should go to wikipedia and click on Commons", async () => {
    await page.goto("https://www.wikipedia.org/");
    await page.setViewport({ width: 1920, height: 1040 });

    // the css selector
    const commonsPathInput =
      "#www-wikipedia-org > div.footer > div.other-projects > div:nth-child(1) > a > div.other-project-text > span.other-project-title.jsl10n";

    // generate the link
    linktoCommons = await page.$(commonsPathInput);

    await linktoCommons.click();
    await page.waitForNavigation();

    //assertion - check
    const title = await page.title();
    expect(title).to.equal("Wikimedia Commons");
  });

  it("should go to wikipedia and click on WikiVoyage", async () => {
    await page.goto("https://www.wikipedia.org/");
    await page.setViewport({ width: 1920, height: 1040 });

    // the css selector
    const wikiVoyagePathInput =
      "#www-wikipedia-org > div.footer > div.other-projects > div:nth-child(2) > a > div.other-project-text > span.other-project-title.jsl10n";

    // generate the link
    linktowikiVoyage = await page.$(wikiVoyagePathInput);

    //click the generated link
    await linktowikiVoyage.click();
    await page.waitForNavigation();

    //assertion - check
    const title = await page.title();
    expect(title).to.equal("Wikivoyage");
  });

  it("should go to wikipedia and click on Wiktionary", async () => {
    await page.goto("https://www.wikipedia.org/");
    await page.setViewport({ width: 1920, height: 1040 });

    // the css selector
    const wiktionaryPathInput =
      "#www-wikipedia-org > div.footer > div.other-projects > div:nth-child(3) > a > div.other-project-text > span.other-project-title.jsl10n";

    // generate the link
    linktowiktionary = await page.$(wiktionaryPathInput);

    //click the generated link
    await linktowiktionary.click();
    await page.waitForNavigation();

    //assertion - check
    const title = await page.title();
    expect(title).to.equal("Wiktionary");
  });

  it("should go to wikipedia and click on Wikibooks", async () => {
    await page.goto("https://www.wikipedia.org/");
    await page.setViewport({ width: 1920, height: 1040 });

    // the css selector
    const wikibooksPathInput =
      "#www-wikipedia-org > div.footer > div.other-projects > div:nth-child(4) > a > div.other-project-text > span.other-project-title.jsl10n";

    // generate the link
    linktowikibooks = await page.$(wikibooksPathInput);

    //click the generated link
    await linktowikibooks.click();
    await page.waitForNavigation();

    //assertion - check
    const title = await page.title();
    expect(title).to.equal("Wikibooks");
  });

  it("should go to wikipedia and click on Wikinews", async () => {
    await page.goto("https://www.wikipedia.org/");
    await page.setViewport({ width: 1920, height: 1040 });

    // the css selector
    const wikinewsPathInput =
      "#www-wikipedia-org > div.footer > div.other-projects > div:nth-child(5) > a > div.other-project-text > span.other-project-title.jsl10n";

    // generate the link
    linktowikinews = await page.$(wikinewsPathInput);

    //click the generated link
    await linktowikinews.click();
    await page.waitForNavigation();

    //assertion - check
    const title = await page.title();
    expect(title).to.equal("Wikinews");
  });
});
