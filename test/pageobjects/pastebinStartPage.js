const Page = require('./page');

class StartPage extends Page {
  get findTextArea() {
    return $('#postform-text');
  }

  get chooseHighlightningBtn() {
    return $('//div[@class="form-group field-postform-format"]//b[@role="presentation"]');
  }

  get selectBashBtn() {
    return $('//li[text()="Bash"]');
  }

  get toggleSyntaxHighlightning() {
    return $('//label[@for="paste-raw-on"]');
  }

  get choosePasteExpirationBtn() {
    return $(
      '//span[@aria-labelledby="select2-postform-expiration-container"]//b[@role="presentation"]'
    );
  }

  get select10MinutesExporationBtn() {
    return $('//li[text()="10 Minutes"]');
  }

  get findPasteNameArea() {
    return $('#postform-name');
  }

  async open() {
    await super.open('https://pastebin.com');
  }
}

module.exports = StartPage;
