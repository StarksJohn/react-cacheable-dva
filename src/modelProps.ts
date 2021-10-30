export interface modelProps {
    namespace:string,
    state:object,
    attributesToBeCached?:string[]|undefined, // Array of string type
    [propName: string]: any;// Arbitrary attribute
}
