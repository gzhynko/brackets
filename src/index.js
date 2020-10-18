module.exports = function check(str, bracketsConfig) {
  let newArray = [];

	for(let i = 0; i < str.length; i++)
    for(let k = 0; k < bracketsConfig.length; k++)
      if (str[i] == bracketsConfig[k][0] && str[i] == bracketsConfig[k][1])
        if (newArray[newArray.length-1] == str[i])
          newArray.pop();
        else
          newArray.push(str[i]);
      else if (str[i] == bracketsConfig[k][0])
        newArray.push(k+1);
      else if (str[i] == bracketsConfig[k][1])
        if ((newArray[newArray.length-1] - (k+1)) == 0)
          newArray.pop();
        else
          return false;
  
	return newArray.length == 0 ? true : false;
}
