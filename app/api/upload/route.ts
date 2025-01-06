import { NextResponse } from 'next/server'
import { saveFile } from '@/lib/upload'
import { getSession } from '@/lib/auth'
import { ApiError, handleApiError } from '@/lib/api-error'

export async function POST(request: Request) {
  try {
    const session = await getSession()
    if (!session) {
      throw new ApiError('Unauthorized', 401)
    }

    const formData = await request.formData()
    const file = formData.get('file') as File
    
    if (!file) {
      throw new ApiError('No file provided', 400)
    }

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp']
    if (!allowedTypes.includes(file.type)) {
      throw new ApiError('Invalid file type', 400)
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      throw new ApiError('File too large', 400)
    }

    const url = await saveFile(file)

    return NextResponse.json({ url })
  } catch (error) {
    return handleApiError(error)
  }
}

