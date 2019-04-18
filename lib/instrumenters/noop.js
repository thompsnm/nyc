const { FileCoverage } = require('istanbul-lib-coverage').classes
const { readInitialCoverage } = require('istanbul-lib-instrument')

function NOOP () {
  return {
    instrumentSync (code, filename) {
      const extracted = readInitialCoverage(code)
      if (extracted) {
        this.fileCoverage = new FileCoverage(extracted.coverageData)
      } else {
        this.fileCoverage = new FileCoverage(filename);
      }
      return code
    },
    lastFileCoverage () {
      return this.fileCoverage
    }
  }
}

module.exports = NOOP
