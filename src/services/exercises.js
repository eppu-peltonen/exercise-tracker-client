import axios from 'axios'

const baseUrl = '/api/exercises'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getById = (id) => {
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
  getById,
  create,
}

export default exportObject