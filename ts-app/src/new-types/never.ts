// Ejemplo de uso del tipo never
type Dog = {barks : true};
type Cat = {miau: true};
type Wolf = {canijo: true};
// queremos evaluar un generico que probablemente use union
// de tipos donde se incluya otros animales
type Animals = Dog | Cat | Wolf;
// Creamos un tipo condicional porque algunos casos
// necesitamos exclusivamente el tipo Dog
type ExtractDogish<A> = A extends { barks: true } ? A : never;

const dog: ExtractDogish<Animals> // Dog
const cat: ExtractDogish<Animals> // never
