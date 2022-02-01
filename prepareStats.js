const fs = require("fs");
const path = require('path');
const modulesDirectory = path.join(__dirname, 'node_modules', '.cache', 'bundle-stats');
const statsDirectory = path.join(__dirname, 'stats');
const baselineFileName = 'baseline.json';
const statsFilePath = path.join(statsDirectory,'bundle-stats.json');
const analyzerFilePath = path.join(statsDirectory,'bundle-analyzer.html');
const limitsReportFilePath = path.join(statsDirectory,'limits-report.txt');
const type = process.argv[2];
function getPath(src) {
    return path.join(src, baselineFileName);
}
function removeFile(filePath) {
    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
    }
}
function copyFileFromModules() {
    fs.copyFileSync(getPath(modulesDirectory), getPath(statsDirectory));
}
function copyFileToModules() {
    // Copy baseline.json to node-modules/.cache/bundle-stats for the plugin
    fs.copyFileSync(getPath(statsDirectory), getPath(modulesDirectory));
    // Remove bundle-analyzer.html
    removeFile(analyzerFilePath);
    // Remove limits-report.txt
    removeFile(limitsReportFilePath)
}
function processStats(output) {
    let color = "\x1b[32m";
    // Template for generating the bundle-size limits for successive builds
    let fileContent = '\nSize Difference Report:\n(Outputs the difference in total size of the different assets types by comparing the current and the previous production build)\n\n';
    if (!output.length) return;
    output.forEach((stat) => {
        // Checking the size restrictions
        let isLimitExceeded = 'No';
        if (stat.diffVal === 0) {
            color = "\x1b[33m";
        } else if (stat.diffVal >= stat.limit) {
            color = "\x1b[31m";
            isLimitExceeded = 'Yes';
            // Here we can further add process.exit command to stop/fail our build process
        }
        // Template for each asset type
        let outString = 'Total ' + stat.label + ': ' + stat.sizeLabel + '\nChange in ' + stat.label + ':\nValue: ' + stat.diffVal + ' bytes (' + stat.diffValLabel + ')' + ' \nPercentage: ' + stat.diffPercentLabel + '\nLimit: ' + stat.limit + ' bytes\nLimit Exceeded: '+isLimitExceeded+'\n';
        fileContent += outString + '\n';
        console.log(color + '%s\x1b[0m', outString);
    });
    // Create/Append output to limits-report file for later reference
    if(fs.existsSync(limitsReportFilePath)){
        fs.appendFileSync(limitsReportFilePath, fileContent);
    }else{
        fs.writeFileSync(limitsReportFilePath, fileContent);
    }
}
function validateBundleSize() {
    const rawdata = fs.readFileSync(statsFilePath);
    const stats = JSON.parse(rawdata).sizes;
    let output = [];
    const assetTypes = {
        'webpack.sizes.totalSizeByTypeJS': {
            label: 'JS Size',
            limit: 250,
        },
        'webpack.sizes.totalSizeByTypeCSS': {
            label: 'CSS Size',
            limit: 100
        },
        'webpack.sizes.totalSizeByTypeIMG': {
            label: 'Images Size',
            limit: 10000
        },
        'webpack.sizes.totalSizeByTypeFONT':{
            label: 'WebFonts Size',
            limit: 100
        }
    };
    stats.forEach((stat) => {
        const assetObj = assetTypes[stat.key];
        if (assetObj) {
            const currentRun = stat.runs[0];
            output.push({
                key: stat.key,
                label: assetObj.label,
                limit: assetObj.limit,
                size: currentRun.value,
                sizeLabel: currentRun.displayValue,
                diffVal: currentRun.delta,
                diffValLabel: currentRun.displayDelta,
                diffPercent: currentRun.percentage,
                diffPercentLabel: currentRun.displayDeltaPercentage
            });
        }
    });
    processStats(output);
}
function mkDirByPathSync(targetDir, { isRelativeToScript = false } = {}) {
    const sep = path.sep;
    const initDir = path.isAbsolute(targetDir) ? sep : '';
    const baseDir = isRelativeToScript ? __dirname : '.';
  
    return targetDir.split(sep).reduce((parentDir, childDir) => {
      const curDir = path.resolve(baseDir, parentDir, childDir);
      try {
        fs.mkdirSync(curDir);
      } catch (err) {
        if (err.code === 'EEXIST') {
          return curDir;
        }
        if (err.code === 'ENOENT') {
          throw new Error(`Permission denied, mkdir '${parentDir}'`);
        }
  
        const caughtErr = ['EACCES', 'EPERM', 'EISDIR'].indexOf(err.code) > -1;
        if (!caughtErr || caughtErr && curDir === path.resolve(targetDir)) {
          throw err;
        }
      }
  
      return curDir;
    }, initDir);
  }
function prepareForComparison() {
    
    if (!fs.existsSync(modulesDirectory)) {
        mkDirByPathSync(modulesDirectory);
        copyFileToModules();
    } else {
        copyFileToModules();
    }
}
if (type === 'comparison') {
    prepareForComparison();
} else if (type === 'save') {
    copyFileFromModules();
    // Additionally generate limits-report
    validateBundleSize();
} else if (type === 'validateSize') {
    validateBundleSize();
}
