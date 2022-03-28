import axios from "axios"
const baseUrl = "/api/users"

const addUser = async (credentials) => {
  const res = await axios.post(baseUrl, credentials)
  return res.data
}

const exports = {
  addUser,
}

export default exports