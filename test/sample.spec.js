describe("Second test suite", async () => {
  let page;

  before(async () => {
    page = await browser.newPage();
  });

  after(async function() {
    await page.close();
  });

  it("should navigate to wikipedia", async () => {
    await page.goto("https://www.wikipedia.org/");
    await page.setViewport({ width: 1920, height: 1040 });

    //assertion - check
    const title = await page.title();
    expect(title).to.equal("Wikipedia");

    // const emailInput = "#login-email";
    // const passwordInput = "#login-password";
    // const submitSelector = "#login-submit";
    // linkEmail = await page.$(emailInput);
    // linkPassword = await page.$(passwordInput);
    // linkSubmit = await page.$(submitSelector);
    // await linkEmail.click({ clickCount: 3 });
    // await linkEmail.type("tariqul.islam.rony@gmail.com"); // add the email address for linkedin //
    // await linkPassword.click({ clickCount: 3 });
    // await linkPassword.type("programmerrony01"); // add password for linkedin account
    // await linkSubmit.click();
    // await page.waitForNavigation();
    // await page.waitFor(3000);
  });

  it("should go to wikipedia, search for Estonia in the search bar, assert correct title and content", async () => {
    await page.goto("https://www.wikipedia.org/");
    await page.setViewport({ width: 1920, height: 1040 });

    // the css selector for the search bar, search button
    const searchBarPathInput = "#searchInput";
    const searchBarButton = "#search-form > fieldset > button";

    // generate the links
    linktoSearchBar = await page.$(searchBarPathInput);
    linkToSearchButton = await page.$(searchBarButton);

    // type the search query
    await linktoSearchBar.type("Estonia");
    await linkToSearchButton.click();
    await page.waitForNavigation();

    // assertion - check
    const title = await page.title();
    expect(title).to.equal("Estonia - Wikipedia");

    const expectedFirstParagraph =
      "Estonia (Estonian: Eesti [ˈeːsʲti] (About this soundlisten)), officially the Republic of Estonia (Estonian: Eesti Vabariik), is a country on the eastern coast of the Baltic Sea in Northern Europe. It is bordered to the north by the Gulf of Finland across from Finland, to the west by the Baltic Sea across from Sweden, to the south by Latvia, and to the east by Lake Peipus and Russia. The territory of Estonia consists of the mainland and of 2,222 islands in the Baltic Sea,[15] covering a total area of 45,227 km2 (17,462 sq mi), and is influenced by a humid continental climate. Tallinn, the capital of Estonia, and Tartu are the largest cities and urban areas in the country. Other notable cities include Narva, Pärnu, Kohtla-Järve and Viljandi. The official language of the country, Estonian, is the second-most-spoken Finnic language.";

    const realFirstParagraph = await page.evaluate(
      () =>
        document.querySelector(
          "#mw-content-text > div.mw-parser-output > p:nth-child(6)"
        ).textContent
    );
    console.log(realFirstParagraph);

    expect(expectedFirstParagraph).to.equal(realFirstParagraph);
  });

  it("should navigate to wikipedia, search for Estonia in the search bar, then show wiki page on Narva", async () => {
    await page.goto("https://www.wikipedia.org/");
    await page.setViewport({ width: 1920, height: 1040 });

    // the css selector for the search bar, search button
    const searchBarPathInput = "#searchInput";
    const searchBarButton = "#search-form > fieldset > button";

    // generate the links
    linktoSearchBar = await page.$(searchBarPathInput);
    linkToSearchButton = await page.$(searchBarButton);

    // type the search query
    await linktoSearchBar.type("Estonia");
    await linkToSearchButton.click();

    await page.waitForNavigation();

    // Narva
    const narvaPathInput =
      "#mw-content-text > div.mw-parser-output > p:nth-child(6) > a:nth-child(25)";

    linkToNarva = await page.$(narvaPathInput);

    await linkToNarva.click();
    await page.waitForNavigation();

    // assertion - check
    const title = await page.title();
    expect(title).to.equal("Narva - Wikipedia");

    const narvaBriefExpected =
      "Narva (Estonian pronunciation: [ˈnɑrʋɑ]; Russian: Нарва, Russian pronunciation: [ˈnarvə]) is a municipality and city in Estonia. It is located in Ida-Viru County, at the eastern extreme point of Estonia, at the Russian border, on the Narva River which drains Lake Peipus. The city of Narva is the country's third largest after Tallinn and Tartu.";

    const narvaBriefReal = await page.evaluate(
      () =>
        document.querySelector(
          "#mw-content-text > div.mw-parser-output > p:nth-child(5)"
        ).textContent
    );

    expect(narvaBriefExpected).to.equal(narvaBriefReal);
  });
});
