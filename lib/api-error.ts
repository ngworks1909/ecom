export class ApiError extends Error {
  constructor(
    message: string,
    public statusCode: number = 500,
    public code?: string
  ) {
    super(message)
    this.name = 'ApiError'
  }
}

export function handleApiError(error: unknown) {
  console.error('API Error:', error)

  if (error instanceof ApiError) {
    return Response.json(
      { error: error.message, code: error.code },
      { status: error.statusCode }
    )
  }

  if (error instanceof Error) {
    return Response.json(
      { error: 'Internal server error', message: error.message },
      { status: 500 }
    )
  }

  return Response.json(
    { error: 'Internal server error' },
    { status: 500 }
  )
}

