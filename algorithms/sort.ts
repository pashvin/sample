let target = [5, 2, 4, 3, 1, 15, 12, 9, 9];



class Sort {

  private static merge(left, right) {
    let sortedArr = [];
    
    while(left.length > 0  && right.length > 0) {
        if(left[0] - right[0] < 0) {
            sortedArr.push(left[0]);
            left.shift();
        } else {
            sortedArr.push(right[0]);
            right.shift();
        }
    }
    while(left.length > 0) sortedArr.push(left.shift());
    while(right.length > 0) sortedArr.push(right.shift());
    return sortedArr;
  }

  public static mergeSort(target) {
    let mid = Math.floor(target.length / 2);

    if (mid === 0) {
      if (target.length === 1) {
        return [target];
      }
    }

    let left = target.splice(0, mid);
    let right = target;

    let l = this.mergeSort(left);
    let r = this.mergeSort(right);
    return this.merge(l, r);
  }

  public static bubbleSort(target) {
    for(let i = 0; i < target.length; i++) {
        for(let j = 0; j < target.length ; j++) {
            if(target[i] < target[j]) {
                let temp = target[i];
                target[i] = target[j];
                target[j] = temp;
            }
        }
    }
    return target;
  }

}


console.log("target:" + target.join(','));

let ret = Sort.mergeSort(JSON.parse(JSON.stringify(target)));
console.log("merge sorted:" + ret.join(','));

ret = Sort.bubbleSort(JSON.parse(JSON.stringify(target)));
console.log("bubble sorted:" + ret.join(','));
