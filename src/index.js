module.exports = function check(str, bracketsConfig) {
    let stack = [];
    let open = [];
    let obj = {};
    for (let i = 0; i < bracketsConfig.length; i++) {
        open.push(bracketsConfig[i][0]);
        obj[bracketsConfig[i][1]] = bracketsConfig[i][0];
    }

    for (let i = 0; i < str.length; i++) {
        let lastEl = stack[stack.length - 1];
        if (open.includes(str[i])) {

            if (stack.length !== 0) {
                let top = stack[stack.length - 1]
                if (obj[str[i]] == top) {
                    stack.pop()
                } else {
                    stack.push(str[i])
                }
            } else {
                stack.push(str[i])
            }
        } else { //закрывает
            if (stack.length === 0) {
                return false
            }

            let top = stack[stack.length - 1]
            if (obj[str[i]] == top) {
                stack.pop()
            }
        }
    }

    return stack.length === 0;
}