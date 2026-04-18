import NextImage, { type ImageProps as NextImageProps } from 'next/image'

type ImageProps = Omit<NextImageProps, 'width' | 'height'> & {
  width?: number | `${number}`
  height?: number | `${number}`
  containerClassName?: string
}

export default function Image({
  width,
  height,
  fill,
  className,
  style,
  containerClassName,
  ...props
}: ImageProps) {
  if (fill || (!width && !height)) {
    return (
      <span
        className={containerClassName}
        style={{ position: 'relative', display: 'block', width: '100%', height: '100%' }}
      >
        <NextImage
          fill
          className={className}
          style={{ objectFit: 'cover', ...style }}
          {...props}
        />
      </span>
    )
  }

  return (
    <NextImage
      width={width as number}
      height={height as number}
      className={className}
      style={style}
      {...props}
    />
  )
}
