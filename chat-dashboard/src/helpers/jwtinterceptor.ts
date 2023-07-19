import axios, {AxiosInstance} from "axios"
import { useNavigate } from "react-router-dom"
import { BASE_URL } from "../config"

const API_BASE_URL = BASE_URL

// it aloows us to intercept and modify response
const useAxiosWithBaseInterceptor = ():AxiosInstance =>{
  const jwtAxios = axios.create({baseURL: API_BASE_URL})
  const navigate = useNavigate()
  
  jwtAxios.interceptors.response.use(
    (reponse) => {
      return reponse
    },
    async (error)=>{
      const originalRequest = error.config

      if(error.reponse?.status === 403){
        const goRoot = () => navigate("/test")
        goRoot()
      }
      throw error
    }
  )

  return jwtAxios
}

export default useAxiosWithBaseInterceptor