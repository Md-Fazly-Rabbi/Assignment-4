 // Problem 1: Let’s play a mind game
 function mindGame(number) {
    return (3 * number + 10) / 2 - 5;
    }
    // Description: In this function, number is the input parameter, which is multiplied by 3, then 10 is added, then the result is divided by 2, and finally 5 is subtracted. The final result is returned

    
    // Problem 2: Finding even or odd
    function evenOdd(str) {
        let length = str.length;
        return length % 2 === 0 
    }
    // Description: In this function, string is the input parameter,when index number is even then is called output in even otherwise its call output in Odd.


    //   Problem 3: Is Less or Greater than seven
    function isLGSeven(num) {
        if (num < 7) {
            return 7 - num;
        }
        else {
            return num * 2;
        }
    }
    //   Description: First I take an input, compare it with 7 and return the minus result as the value is small.
    //   Otherwise returning double of the input

    
    // Problem 4: Finding Bad data
    function findingBadData(numbers) {
        let count = 0;
        for (let i = 0; i < numbers.length; i++) {
          if (numbers[i] < 0) {
            count++;
          }
        }
        return count;
      }
      // Description:First I take an array and using loop element in the array.If a number is less than 0, it increments the count. Finally, it returns the count of Bad Data .

      
    //   Problem 5: Convert your gems into diamond
        function gemsToDiamond(a1, a2, a3) {
        let totalGems = a1 + a2 + a3;
        let totalDiamonds = 21 * a1 + 32 * a2 + 43 * a3;
        if (totalDiamonds > 2000) {
            totalDiamonds = 2000 + (totalDiamonds - 2000) % 1000;
        }
        return totalDiamonds - totalGems;
    }
       // Description:First I called  an array and take three input .then convert their diamonds and continued necessary operation