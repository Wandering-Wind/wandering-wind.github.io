function VisualSequence({ items }) {
  return (
    <div className="visual-sequence">
      {items.map((item) => (
        <figure className="visual-sequence__item" key={item.label}>
          <p className="visual-sequence__label">{item.label}</p>
          <img
            src={item.src}
            width={item.width}
            height={item.height}
            loading="lazy"
            alt={item.alt}
          />
          <figcaption>{item.caption}</figcaption>
        </figure>
      ))}
    </div>
  )
}

export default VisualSequence
