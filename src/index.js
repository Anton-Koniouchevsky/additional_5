module.exports = function check(str, bracketsConfig) {
    let bracketsStack = [];
    let strArray = str.split('');
    for (let i = 0; i < strArray.length; i++) {
        let configIndex;
        bracketsConfig.forEach((config, index) => {
            if (~config.indexOf(strArray[i])) configIndex = index;
        });
        if (bracketsStack[bracketsStack.length - 1] == bracketsConfig[configIndex][0]) {
            if (strArray[i] == bracketsConfig[configIndex][1]) bracketsStack.pop();
            else bracketsStack.push(strArray[i]);
        } else {
            if (strArray[i] == bracketsConfig[configIndex][0]) bracketsStack.push(strArray[i]);
            else return false;
        };
    }
    return !bracketsStack.length;
}