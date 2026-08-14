function VisualSequence({ items }) {
  return (
    <div className="visual-sequence">
      {items.map((item) => {
        const image = (
          <img
            src={item.src}
            width={item.width}
            height={item.height}
            loading="lazy"
            alt={item.alt}
          />
        )

        return (
          <figure className="visual-sequence__item" key={item.label}>
            <p className="visual-sequence__label">{item.label}</p>
            {item.crop === 'browser' ? (
              <div className="visual-sequence__browser-crop">{image}</div>
            ) : (
              image
            )}
            <figcaption>{item.caption}</figcaption>
          </figure>
        )
      })}
    </div>
  )
}

export default VisualSequence
