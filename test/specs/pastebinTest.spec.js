const { expect } = require('chai');
const StartPage = require('../pageobjects/pastebinStartPage');
const ResultPage = require('../pageobjects/pastebinResultPage');
describe('Testing functionality of web application', async function () {
  const startPage = new StartPage();
  const resultPage = new ResultPage();
  const newPasteText = `git config --global user.name  "New Sheriff in Town"
    git reset $(git commit-tree HEAD^{tree} -m "Legacy code")
    git push origin master --force`;
  const pasteNameText = 'how to gain dominance among developers';

  before(async function () {
    await startPage.open();
    await startPage.enterText(startPage.findTextArea, newPasteText);
    await startPage.selectDropdownList(startPage.chooseHighlightningBtn, startPage.selectBashBtn);
    await startPage.click(startPage.toggleSyntaxHighlightning);
    await startPage.selectDropdownList(
      startPage.choosePasteExpirationBtn,
      startPage.select10MinutesExporationBtn
    );
    await startPage.enterTextAndSend(startPage.findPasteNameArea, pasteNameText);
  });

  it('should browser`s page name matches Paste`s name', async function () {
    const title = await resultPage.findDataToCompare(resultPage.showPageTitle);
    expect(title).to.be.equal('how to gain dominance among developers');
  });

  it('should the syntax be highlighted for Bash', async function () {
    const highlightedSyntax = await resultPage.findDataToCompare(resultPage.showTextHighlightning);
    expect(highlightedSyntax).to.be.equal('Bash');
  });

  it('should final code conform initial code', async function () {
    const finalText = await resultPage.findDataToCompare(resultPage.findCompleteTextArea);
    expect(newPasteText).to.be.include(finalText);
  });
});
