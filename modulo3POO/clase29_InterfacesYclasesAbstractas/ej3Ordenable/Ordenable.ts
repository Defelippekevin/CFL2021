import Persona from "./Persona";

export default interface Ordenable {
    comparador(persona1: Persona, persona2: Persona): number;
    ordenar(personas: Persona[]): void;
}