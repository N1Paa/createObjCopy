function createObjCopy(obj) {
  if (!Array.isArray(obj)) {
    let clone = {
    };
    for (key in obj) {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        let objType = obj[key].constructor
        switch(objType.name) {

          case 'Array':
          case 'Object':
            clone[key] = createObjCopy(obj[key]);
            break;

          case 'Date':
          case 'String':
          case 'Number':
          case 'RegExp':
            clone[key] = new objType(obj[key]);
            break;
  
          case 'Error':
          case 'EvalError':
          case 'RangeError':
          case 'ReferenceError':
          case 'SyntaxError':
          case 'TypeError':
          case 'URIError':  
            clone[key] = new objType(obj[key].toString().replace(/.*\Error: /, ''));
            break;    

          case 'Boolean':
            clone[key] = new objType(obj[key].toString().replace('false', ''));
            break;
  
          default: 
            clone[key] = obj[key];  
        } 
      } else {
        clone[key] = obj[key]
      } 
    };
    return clone;
  }
   
  if(Array.isArray(obj)) {
      let clone = [];
      obj.forEach(arrEl => {
        if (typeof arrEl === 'object' && arrEl !== null) {
          let objType = arrEl.constructor
          switch(objType.name) {

            case 'Array':
            case 'Object':
              clone.push(createObjCopy(arrEl));
              break;

            case 'Date':
            case 'String':
            case 'Number':
            case 'RegExp':
              clone.push(new objType(arrEl));
              break;
  
            case 'Error':
            case 'EvalError':
            case 'RangeError':
            case 'ReferenceError':
            case 'SyntaxError':
            case 'TypeError':
            case 'URIError':  
              clone.push(new objType(arrEl.toString().replace(/.*\Error: /, '')));
              break;    

            case 'Boolean':
              clone.push(new objType(arrEl.toString().replace('false', '')));
              break;
  
            default: 
              clone.push(arrEl);  
          }  
        } else {
          clone.push(arrEl);
        }
      }); 
    return clone;
  } 
};