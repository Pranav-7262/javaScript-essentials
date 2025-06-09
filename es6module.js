export const name = 'John Doe';

export const age = 30;
 const greet = () => {
    console.log('Hello, World!');
};
export default greet; // default export
//only one default export is allowed in a module


export const add = (a, b) => {
    return a + b;
};
export const subtract = (a, b) => {
    return a - b;
};
