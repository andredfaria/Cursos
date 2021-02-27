export class AppError{
  public readonly massage: String;
  public readonly statusCode: Number;

  constructor(massage: string, statusCode: number = 400) {
    this.massage = massage;
    this.statusCode = statusCode;
  }
}