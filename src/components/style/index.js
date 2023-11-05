const bgStyled = (bgImage) => {
  const style = {
        "backgroundImage": `url(${bgImage})`,
        "backgroundRepeat": "no-repeat",
        "backgroundPosition": "center",
        "backgroundSize": "cover"
    }
    return style
}

export { bgStyled }