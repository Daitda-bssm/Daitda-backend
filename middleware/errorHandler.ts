import { ErrorRequestHandler } from "express";

const DEFAULT_HTTP_STATUS_MESSAGES = {
  400: "Bad Requests",
  401: "Unauthorized",
  403: "Foribdden",
  404: "Not Found",
  409: "duplicate",
  500: "Internal Server Error",
  503: "Temporary Unavailable",
};

export type StatusType = keyof typeof DEFAULT_HTTP_STATUS_MESSAGES;

export interface ErrorWithStatus extends Error {
  status?: StatusType;
}

export const generateError = ({
  message = "서버에 알 수 없는 오류가 발생하였습니다.",
  status = 500,
}: {
  message?: string;
  status?: StatusType;
}) => {
  const error: ErrorWithStatus = new Error(
    message || DEFAULT_HTTP_STATUS_MESSAGES[status]
  );
  error.status = status;
  throw error;
};

export const errorLogger: ErrorRequestHandler = (err, req, res, next) => {
  if (err.status >= 500) console.error("\n", err.stack, "\n");
  next(err);
};

export const errorResponser: ErrorRequestHandler = (err, req, res, next) => {
  const { message, status } = err;
  res.status(status || 500).send({ status, message });
};
