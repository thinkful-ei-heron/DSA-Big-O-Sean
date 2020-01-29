/*

    1.a) O(1)
            Constant time. Size of room doesn't matter. An announcement was made, and a response came.

      b) O(n)
            Linear time. Asking person after person, indicates time is dependent on how many people are in
            the room.

    2. O(1)
            Constant time. Parameter 'value' has modulo performed, and a true or false is returned
    
    3. O(n^2)
            Quadratic time. An outer loop picks value out of index of first array, and iterates through
            a 2nd array to find the value. The outer loop then moves on to subsequent indices until a 
            match is found
    
    4. O(n)
            Linear time. An array of length 'n' has its values doubled. Overall time is based on the length
            of the array.

    5. O(n)
            Linear time. An array is searched iteratively until an item is found and returns the index
            if found.

    6. O(n^2)
            Quadratic time. You have two arrays, one nested within the other. As the outer array is being 
            iterated through, you are console logging the contents of each array index, paired with the 
            contents of each index of the inner array.

    7. O(n)
            Linear time. This function creates an array based on an integer input, and starting with the
            values of 0 and 1 for the first and second array indices respectively, the contents of each new
            array index is the sum of the previous two array indices. The size of the array is determined by 
            whatever argument gets passed into the compute function.

    8. O(log n)
            Logarithmic time. As the array is sorted, The position within the array of the item being 
            searched can easily be narrowed down given the knowledge of the other values within the array.
            During every pass of the array, your search area is halved until your value is found
    
    9. O(1)
            Constant time. The array length doesn't matter, as the value of a single random index is
            returned.

    10. 0(n)
            Linear time. An integer argument is passed into the isWhat function, and the function 
            determines whether the integer is prime or not by dividing the integer by all previous
            integers before it down to 2.

*/

let counter = 0;
function printPath (source, dest){
    return (source +  ' --> ' +  dest)
}

function TOH (num, source, temp, dest){
    if(num >= 1){
        TOH(num-1, source, temp, dest)
        console.log(source, ' --> ' ,dest, ' move number: ', ++counter)
        TOH(num-1, temp, dest, source)
    }
}

//TOH(10, 'A', 'B', 'C')

/*

        12 - Iterative Version

*/

function countingSheep(number){
        while(number>0){
                console.log(number + ': Another sheep jumps over the fence')
                --number
        }
        console.log('All sheep have jumped over the fence')
}

//countingSheep(5)

function powerCalculator(base, exponent){       
        let tempArray = []
        if(exponent===0){
                return 1
        }
        if(exponent<0){
                return ('Please use positive exponents')
        } else {
                for(let i =0; i<exponent; i++){
                        tempArray.push(base)
                }
                let productCallback = (acc, curr) => acc * curr
                let product = tempArray.reduce(productCallback)
                return product
        }
}

//console.log(powerCalculator(10,3))


function reverseString(string){
        let temp = string.split('')
        let length = string.length-1
        let newArray = []
        for(let i=0; i<temp.length; i++){
                newArray[length]= temp[i]
                --length
        }
        let reversedString = newArray.join('')
        return reversedString
}

//console.log(reverseString('Hello'))

function nthTriangular(number){

        let tempArray = []
        for(let i=1; i<= number; i++){
                tempArray.push(i)
        }

        let sumCallback = (acc, cur) => acc + cur
        let nth = tempArray.reduce(sumCallback)

        console.log(nth)

}

//nthTriangular(9)

function stringSplitter(string, seperator){

        let newArray = []
        let splitArray = []
        let length = string.length
        let temp  
        for(let i=0; i< length; i++){
                if(string[i]!==seperator){
                        newArray.push(string[i])
                } else {
                        temp = newArray.join('')
                        splitArray.push(temp)
                        newArray = []
                }
        }
        temp = newArray.join('')
        splitArray.push(temp)

     return splitArray   
}

//console.log(stringSplitter('2/20/2020', '/'))

function fibonacci(number){

        let fibonacciArray = [1 , 1]
        for(let i = 2; i<number; i++){
                let sum = fibonacciArray[i-1]+fibonacciArray[i-2]
                fibonacciArray.push(sum)
        }

        return fibonacciArray
}

//console.log(fibonacci(7))

function factorial(number){

        let factorialArray = []

        for(let i=1; i<=number; i++){
                factorialArray.push(i)
        }

        let factorialCallback = (acc, cur) => acc * cur
        let factorial = factorialArray.reduce(factorialCallback)

        return factorial
}

console.log(factorial(10))