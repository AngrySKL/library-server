export class BorrowFail implements IResponse {
  readonly code: number = 300;
  readonly message: string = 'Borrow fail';
  data: any;

  constructor(data?: any) {
    this.data = data;
  }
}

export class BorrowSuccess implements IResponse {
  readonly code: number = 200;
  readonly message: string = 'Borrow success';
  data: any;

  constructor(data?: any) {
    this.data = data;
  }
}

export class LoginFail implements IResponse {
  readonly code: number = 401;
  readonly message: string = 'Login failed';
  data: any;

  constructor(data?: any) {
    this.data = data;
  }
}

export class LoginSuccess implements IResponse {
  readonly code: number = 200;
  readonly message: string = 'Login success';
  data: any;

  constructor(data?: any) {
    this.data = data;
  }
}

export interface IResponse {
  code: number;
  message: string;
  data: any;
}