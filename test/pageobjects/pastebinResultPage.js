const Page = require('./page');

class ResultPage extends Page {
  get showPageTitle() {
    return $('//div[@class="info-top"]');
  }
  get showTextHighlightning() {
    return $('//a[text()="Bash"]');
  }
  get findRowTextArea() {
    return $('//textarea[@class="textarea"]');
  }
  get findCompleteTextArea() {
    return $('//div[@class="de1"]/child::*');
  }
}
module.exports = ResultPage;