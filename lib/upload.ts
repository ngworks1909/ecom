import { writeFile } from 'fs/promises'
import { join } from 'path'
import { mkdir } from 'fs/promises'
import crypto from 'crypto'

export async function saveFile(file: File): Promise<string> {
  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)

  // Create unique filename
  const hash = crypto.createHash('sha256')
  hash.update(buffer)
  const fileHash = hash.digest('hex')
  const ext = file.name.split('.').pop()
  const filename = `${fileHash}.${ext}`

  // Ensure upload directory exists
  const uploadDir = process.env.UPLOAD_DIR || './public/uploads'
  await mkdir(uploadDir, { recursive: true })

  // Save file
  const path = join(uploadDir, filename)
  await writeFile(path, buffer)

  // Return public URL
  const baseUrl = process.env.NEXT_PUBLIC_UPLOAD_URL || '/uploads'
  return `${baseUrl}/${filename}`
}

