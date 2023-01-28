function ResponsiveImage({ folder = 'home', imgName = 'blog', alt = 'image' }) {
  return (
    <picture>
      <source
        srcSet={`${require(`./../assets/images/${folder}/${imgName}.webp`)} 1x,
            ${require(`./../assets/images/${folder}/${imgName}@2x.webp`)} 2x`}
        media="(max-width: 767px)"
      />
      <source
        srcSet={`${require(`./../assets/images/${folder}/${imgName}.jpg`)} 1x,
            ${require(`./../assets/images/${folder}/${imgName}@2x.jpg`)} 2x`}
        media="(min-width: 768px)"
      />
      <img
        src={require(`./../assets/images/${folder}/${imgName}.jpg`)}
        alt={alt}
      />
    </picture>
  );
}

export default ResponsiveImage;
