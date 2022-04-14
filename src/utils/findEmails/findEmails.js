function findEmails(string) {
  return string.match(/\w+([.'-]?\w+)*@\w+([.-]?\w+)*(\.\w+)/g) || [];
}

function removeEmails(string) {
  return string.replace(/\w+([.'-]?\w+)*@\w+([.-]?\w+)*(\.\w+)/g, "");
}

export { findEmails, removeEmails };

module.exports = { findEmails, removeEmails };
