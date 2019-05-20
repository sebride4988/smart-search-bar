
export function partialBold(keyword: string, indexes: number[]) {
  console.log('indexes', indexes)
  if (indexes[0] === 0 && indexes[1] === keyword.length) {
    return keyword.bold()
  } else if (indexes[0] === 0) {
    return keyword.substring(0, indexes[1] + 1).bold() + keyword.substring(indexes[1] + 1, keyword.length)
  } else if (indexes[1] === keyword.length) {
    return keyword.substring(0, indexes[0]) + keyword.substring(indexes[0], keyword.length).bold()
  } else {
    return keyword.substring(0, indexes[0]) + keyword.substring(indexes[0], indexes[1] + 1).bold() + keyword.substring(indexes[1] + 1, keyword.length)
  }
}