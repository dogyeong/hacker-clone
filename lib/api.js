export async function fetchNews(page = 1) {
    if (isNaN(page)) {
        return []
    }
    
    const res = await fetch(`http://node-hnapi.herokuapp.com/news?page=${page}`)
    const data = await res.json()
    return data
}