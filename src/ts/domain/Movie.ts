import Buyable from "./Buyable";

export default class Movie implements Buyable {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly originalName: string,
    readonly price: number,
    readonly poster: string,
    readonly resolution: string,
    readonly year: number,
    readonly country: string,
    readonly slogan: string,
    readonly genre: string[],
    readonly time: number
  ) {}
}