export class Book {
  constructor(public id: number,
              public title: string,
              public borrower: string,
              public status: number) {}
}

export class BookDetail {
  constructor(public id: number,
              public title: string,
              public author: string,
              public description: string,
              public borrower: string) {}
}