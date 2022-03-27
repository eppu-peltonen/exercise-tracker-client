import axios from 'axios'
const baseUrl = '/api/exercises'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getAll = () => {
  const req = axios.get(baseUrl)
  return req.then(res => res.data)
}

const getById = (user) => {
  console.log(user)
  const id = user.id
  const req = axios.get(`${baseUrl}/${id}`)
  return req.then(res => res.data)
}

const create = async (newObject) => {
  const config = {
    headers: {Authorization: token},
  }
  const res = await axios.post(baseUrl, newObject, config)
  return res.data
}

const exportObject = {
  setToken,
  getAll,
  getById,
  create,
}

export default exportObject