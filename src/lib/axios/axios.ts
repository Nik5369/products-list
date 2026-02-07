import Axios from 'axios'

export const api = Axios.create({
  baseURL: import.meta.env.VITE_BASE_DUMMY_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})
