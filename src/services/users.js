import axios from 'axios'
const baseUrl = '/api/users'

const addUser = async (credentials) => {
  try {
    const res = await axios.post(baseUrl, credentials)
    return res.data
  } catch (error) {
    return error.response.data.error
  }
}

const exports = {
  addUser,
}

export default exports
