function typeTitle(title, animation, speed) {
  const isString = typeof(title) === "string";
  let i = 0, j = 0;
  speed === undefined && (
    speed = 500
  ),

  function txtnum() {
    j == textArray.length - 1
    ? j = 0
    : j++
  }

  function type() {
    const max = isString ? title.length : title[j].length;
    i <= max
    ? (
      document.title = `\u200E${(isString ? title : title[j]).slice(0, i)}`,
      i++,
      setTimeout(type, speed)
    )
    : (
      isString && (
        animation.indexOf("type-") === -1
        ? remove()
        : (
          animation === "type-once" || (
            setTimeout(() => {
              document.title = "\u200E",
              i = 0,
              type()
            }, +animation.replace("type-", ""))
          )
        )
      )
    )
  }

  function remove() {
    0 < i
    ? (
      document.title = document.title.slice(0, i),
      i--,
      0 == i && (document.title = "\u200E"),
      setTimeout(remove, speed)
    )
    : (
      isString || txtnum(),
      type()
    )
  }

  document.title = "\u200E",
  type();
}
