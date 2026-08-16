import { useState, type ImgHTMLAttributes } from 'react'

/** Image with graceful dark fallback so layout holds if the photo is slow. */
export function Photo({ className = '', alt = '', ...rest }: ImgHTMLAttributes<HTMLImageElement>) {
  const [failed, setFailed] = useState(false)
  return (
    <div className={`bg-elevated overflow-hidden ${className}`}>
      {!failed && (
        <img
          {...rest}
          alt={alt}
          onError={() => setFailed(true)}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      )}
    </div>
  )
}
