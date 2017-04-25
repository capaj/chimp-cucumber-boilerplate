module.exports = function () {
  this.When(/^When I load up "([^"]*)"$/, function (url) {
    browser.url(url)
  })
  this.Then(/^I should be able to select "([^"]*)"$/, function (optionText) {
    browser.selectByVisibleText('#month', optionText)
  })

}