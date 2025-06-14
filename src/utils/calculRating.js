const calcRating = (rating, index) => {
  // 計算評分
  if (rating !== 0) {
    if (rating > index - 1) return '#FFCF75'
  }
  return '#CECECE'
}

export default calcRating
