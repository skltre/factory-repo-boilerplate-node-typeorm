import { Response } from "express";

export enum ErrorCodeEnum {
  INTERNAL_SERVER_ERROR = "INTERNAL_SERVER_ERROR",
  BAD_REQUEST = "BAD_REQUEST",
  UNAUTHORIZED = "UNAUTHORIZED",
  DATA_NOT_FOUND = "DATA_NOT_FOUND",
  UNKNOWN_ERROR = "UNKNOWN_ERROR",
}

export const ErrorCodeStatusMap: Record<ErrorCodeEnum, number> = {
  BAD_REQUEST: 400,
  DATA_NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  UNAUTHORIZED: 401,
  UNKNOWN_ERROR: 500,
};

export class CustomError extends Error {
  constructor(
    private readonly errorcode: ErrorCodeEnum,
    private readonly errormessage: string
  ) {
    super(JSON.stringify({ errorcode, errormessage }));
  }

  getErrorCode(): ErrorCodeEnum {
    return this.errorcode;
  }

  getErrorMessage(): string {
    return this.errormessage;
  }
}

export class CustomErrorResponseHandler {
  static addErrorResponse = (
    response: Response,
    err: CustomError
  ): Response => {
    response
      .status(ErrorCodeStatusMap[err.getErrorCode()])
      .send(err.getErrorMessage());
    return response;
  };
}
