const responseBody = {
  message: '',
  timestamp: 0,
  result: null as unknown,
  code: 0,
}

export function builder(data: unknown, message = 'success', code = 0) {
  responseBody.result = data

  if (message !== undefined && message !== null)
    responseBody.message = message

  if (code !== undefined && code !== 0)
    responseBody.code = code

  responseBody.timestamp = new Date().getTime()
  return responseBody
}
