const bgStyled = (bgImage) => {
  const style = {
        "backgroundImage": `linear-gradient(rgba(0, 44, 115, 0.3), rgba(0, 44, 115, 0.3)), url(${bgImage})`,
        "backgroundRepeat": "no-repeat",
        "backgroundPosition": "center",
        "backgroundSize": "cover"
    }
    return style
}

export { bgStyled }