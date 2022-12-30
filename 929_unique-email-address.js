/*
    Given an array of strings emails where we send one email to each emails[i], 
    return the number of different addresses that actually receive mails.
*/

var numUniqueEmails = function (emails) {
  const validEmails = new Set();

  for (let email of emails) {
    const validEmail = normalizeEmail(email);
    validEmails.add(validEmail);
  }

  return validEmails.size;
};

function normalizeEmail(email) {
  let [localName, domainName] = email.split("@");
  localName = localName.replace(/(\.)|(\+.*)/g, "");
  return localName + "@" + domainName;
}

console.log(
  numUniqueEmails([
    "test.email+alex@leetcode.com",
    "test.e.mail+bob.cathy@leetcode.com",
    "testemail+david@lee.tcode.com",
  ])
);

// Expected : 2
