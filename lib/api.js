export async function fetchNews(page = 1) {
  if (isNaN(page)) {
    return []
  }
  const res = await fetch(`http://node-hnapi.herokuapp.com/news?page=${page}`)
  const data = await res.json()
  return data
}

export async function fetchItem(id) {
  if (isNaN(id)) {
    return {}
  }
  const res = await fetch(`http://node-hnapi.herokuapp.com/item/${id}`)
  const data = await res.json()
  return data
}
