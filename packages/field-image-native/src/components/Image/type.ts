export interface SerializedFirestoreTimestamp {
  nanoseconds?: number
  seconds?: number
  _nanoseconds?: number
  _seconds?: number
}

export interface Identified {
  id: string
}

export type WithId<T> = T & Identified

export interface ImageAccount {
  type: 'imgix'
  storageBucket?: string
  imgixDomain: string
  imgixToken?: string
}

export interface FieldImageImgixTransformConfig {
  params?: any
  widths?: readonly number[]
}

export interface FieldImageImgixConfig {
  service: 'imgix'

  // FILE LOCATION
  // The path to the image file in the storage bucket.
  storagePath: string
  // The path to the image on imgix (without the pathPrefix).
  imgixPath: string
  // The temp path to the image on the field storage bucket.
  // This is for legacy support with the Field Imgix source.
  uploadPath: string

  appId: string
  organizationId: string

  version: 1
  dimensions: {
    height: number
    width: number
    aspectRatio: number
  }
  transforms: {
    [name: string]: FieldImageImgixTransformConfig
  }
}

export type FieldImageConfig = FieldImageImgixConfig

export const DEFAULT_FIELD_IMAGE_SIZES = [
  16, 32, 48, 64, 96, 128, 256, 384, 640, 750, 828, 1080, 1200, 1920, 2048,
  3840,
] as const

export interface FieldImageDraft {
  /**
   * A url pointing to the raw image file.
   */
  src: string
  /**
   * A text description of the image contents.
   */
  alt?: string

  config?: FieldImageConfig

  meta: {
    createdBy: string
    dateCreated: SerializedFirestoreTimestamp
  }

  transforms: {
    /**
     * A map of image widths and their corresponding urls.
     */
    native: Record<string, string>
    /**
     * A map of square image thumbnail sizes and their corresponding urls.
     */
    square: Record<string, string>

    [name: string]: Record<string, string>
  }
}
export type FieldImage = WithId<FieldImageDraft>
