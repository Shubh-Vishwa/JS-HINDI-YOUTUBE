console.log(2>0)
console.log(2<0)
console.log(2>=0)
console.log(2<=0)
console.log(2==0)
console.log(2!=0)
console.log(2===0)



console.log("comparision with null value")
console.log(null > 0);
console.log(null <= 0);
console.log(null >= 0);
console.log("comparision of null with equal to 0")
console.log(null === 0) // it also check the datatype in case of ===  .
console.log(null == 0)


/**
 * Type Coercion and Comparison:
 * JavaScript uses the abstract relational comparison algorithm for >=.
 * When comparing null with a number, null is implicit converted  to a number. null is converted to 0.
 */

/**
 * So in case of the null the value get converted  to 0
 * now null =0   So , 0>=0 => true 
 *                    0 > 0 => false
 */


console.log(undefined > 0)
console.log(undefined < 0)
console.log(undefined >= 0)
console.log(undefined <= 0)
console.log(undefined ==0)
/**
 * However in case  of undefined it always gives false 
 */


/***
 * Comparision with == and ===
 * 1:> SO IN CASE OF THE == (Equality Operator) :
 *                          Type Coercion (ieCOERCION MEANS IMPLICIT CONVERSION): The == operator compares two values for equality, but it allows type coercion.
 *                          This means that if the values are of different types, JavaScript will attempt to convert 
 *                          one or both values to a common type before making the comparison.
 * 
 * 2:> SO IN CASE OF THE === (Strict Equality Operator):
 *                          No Type Coercion: The === operator compares both the value and the type of the operands(ie Datatype) without any type conversion. 
 *                          This means the values must be of the same type and value to be considered equal.
 */

// EXAMPLE:
console.log("COMPARISION WITH THE EQUALITY OPERATOR IE '==' OR '==='")
console.log("2" == 2) //true
console.log("2" === 2) // false // HERE THE "2" ITS DATATYPE IS STRING AND 2 IS NUMBER TYPE SO IT RETURNS false 



