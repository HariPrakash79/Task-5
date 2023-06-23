//odd numbers
const array=()=>{
for (var i=0; i<array.length; i++){
    if(array[i]%2 !=0){
        console.log(array[i])
    }
}
}
array()


(()=>{
    for (var i=0; i<array.length; i++){
        if(array[i]%2 !=0){
            console.log(array[i])
        }
    }
})


//Title caps

const title=()=>{
    title= title.toLowerCase().split('');
    for(var i=0;i<title.length;i++){
        title[i]=title[i].charAt(0).toUpperCase()+title[i].slice(1);
        }
        return title.join('')
}
title()


(()=>{
    title= title.toLowerCase().split('');
    for(var i=0;i<title.length;i++){
        title[i]=title[i].charAt(0).toUpperCase()+title[i].slice(1);
        }
        return title.join('')
})


//Sum of all numbers in an array

const summ=()=>{
    var sum=0;
    for(var i=o;i<array.length;i++){
        sum=sum+array[i];
    }
    return sum;
}
summ()

(()=>{
    var sum=0;
    for(var i=o;i<array.length;i++){
        sum=sum+array[i];

    }
    return sum;
})

const prime=()=>{
    primeArray=primeArray.filter((number)=>{
        for(var i=2;i<=Math.sqrt(number);i++){
            if(number%i===0)return false;
        }
        return true;
    });
    console.log(primeArray);
}

prime()

(()=>{
    numArray = numArray.filter((number) => {
        for (var i = 2; i <= Math.sqrt(number); i++) {
          if (number % i === 0) return false;
        }
        return true;
      });
      console.log(numArray);
})

//Pallindromes

const pallindromes=()=>{
    let str = "" + N;
    let len = str.length;
    for (let i = 0; i < parseInt(len / 2, 10); i++)
    {
        if (str[i] != str[len - 1 - i ])
            return false;
    }
    return true;
}
    pallindromes()

    (()=>{
        for (let i = 0; i < n; i++)
        {
            let ans = pallindromes(arr[i]);
            if (ans == false)
                return false;
        }
        return true;
    })

