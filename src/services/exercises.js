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

const deleteExercise = async (id) => {
  const config = {
    headers: {Authorization: token},
  }
  const res = await axios.delete(`${baseUrl}/${id}`, config)
  return res.data
}

const exportObject = {
  setToken,
  getAll,
  getById,
  create,
  deleteExercise,
}

export default exportObject