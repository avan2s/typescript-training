// enums are not good practice anymore to use
// this is the way how they should work
const myColor = {
    BLUE: "BLUE",
    YELLOW: "YELLOW",
    GREEN: "GREEN",
} as const

// as const make sure, that we hava an untouchable nested type, therefore we can do
// hover over them to understand
type TypeOfColor = typeof myColor;
type ColorKey = keyof TypeOfColor;
type FinalType = TypeOfColor[ColorKey];


// in short you can do a oneliner
type MyColor = (typeof myColor)[keyof typeof myColor];


// an according type, you can also name it syntactically the same if you like
// here i prefere like matt pocock to naming a const variable in lowercase letter an the 
// type beginning with a uppercase letter

// With this way you have now full flexibility and can use it like this

// use it as a type
const blue: MyColor = 'BLUE';
// get a value by using the constant
const green = myColor.GREEN;

// With that you can do, what you could not with enums
// iterate over each color
Object.keys(myColor).forEach(c => {
    console.log(c);
})

// passing a color into a function
const isGreenOrYellow = (c: MyColor) => {
    // auto completion or comparision using the const
    return c === 'GREEN' || c === myColor.YELLOW;
}

// you can also now compare strings with this const
const isStringAColor = (s: string) => {
    return Object.values(myColor).some(c => c === s);
}







export { }