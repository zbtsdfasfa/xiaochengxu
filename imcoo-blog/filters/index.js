// 将字符串转化为以千为单位的字符
export function hotNumber(val) {
    const num = parseInt(val);
    if (num < 1000) return val;
     

    // 将val转化为字符串
    val = val + '';
    // 获取以 千 为单位的值
    return val.substring(0, val.length - 3) + 'k';
}