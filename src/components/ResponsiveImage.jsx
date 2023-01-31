function ResponsiveImage({ folder = 'home', imgName = 'blog', alt = 'image' }) {
  return (
    <picture>
      <source
        srcSet={`${require(`./../assets/images/${folder}/${imgName}.webp`)} 1x,
            ${require(`./../assets/images/${folder}/${imgName}@2x.webp`)} 2x`}
        type="image/webp"
      />
      <source
        srcSet={`${require(`./../assets/images/${folder}/${imgName}.jpg`)} 1x,
            ${require(`./../assets/images/${folder}/${imgName}@2x.jpg`)} 2x`}
      />

      <img
        src={require(`./../assets/images/${folder}/${imgName}.jpg`)}
        alt={alt}
      />
    </picture>
  );
}

export default ResponsiveImage;
