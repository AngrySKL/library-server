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
              public publisher: string,
              public ISBN: string,
              public coverName: string,
              public coverSize: number,
              public coverUrl: string,
              public borrowerId: string) {}
}