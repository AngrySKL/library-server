export class Book {
  constructor(
    public id: number,
    public title: string,
    public borrower: string,
    public status: number
  ) {

  }
}