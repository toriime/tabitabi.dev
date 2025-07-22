import sharp from 'sharp'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { buildConfig } from 'payload'
import { Posts } from '@/collections/posts'
import { Users } from '@/collections/users'
import { Media } from '@/collections/media'
import { Tags } from '@/collections/tags'
import { s3Storage } from '@payloadcms/storage-s3'

export default buildConfig({
  // If you'd like to use Rich Text, pass your editor here
  editor: lexicalEditor({

  }),
  
  plugins: [
    s3Storage({
      collections: {
        media: true
      },
      bucket: process.env.PAYLOAD_S3_BUCKET || '',
      config: {
        credentials: {
          accessKeyId: process.env.PAYLOAD_S3_ACCESS_KEY_ID || '',
          secretAccessKey: process.env.PAYLOAD_S3_SECRET_ACCESS_KEY || '',
        },
        region: process.env.PAYLOAD_S3_REGION || '',
        endpoint: process.env.PAYLOAD_S3_ENDPOINT || '',
        forcePathStyle: true,
      }
    })
  ],

  // Define and configure your collections in this array
  collections: [
    Users,
    Media,
    Posts,
    Tags
  ],

  // Your Payload secret - should be a complex and secure string, unguessable
  secret: process.env.PAYLOAD_SECRET || '',
  // Whichever Database Adapter you're using should go here
  // Mongoose is shown as an example, but you can also use Postgres
  db: postgresAdapter({
    pool: {
        connectionString: process.env.PAYLOAD_DATABASE_URL || '',
    },
    push: true,
  }),
  // If you want to resize images, crop, set focal point, etc.
  // make sure to install it and pass it to the config.
  // This is optional - if you don't need to do these things,
  // you don't need it!
  sharp,
})