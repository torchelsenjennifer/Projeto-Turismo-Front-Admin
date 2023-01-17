import axios from 'axios'

//variavel com url do servidor
export const webServiceURL = 'http://localhost:3001/'

//cria uma instancia Axios com a URL base do web Service
//a ser acessado pelo app
export const inAxios = axios.create({baseURL: webServiceURL})