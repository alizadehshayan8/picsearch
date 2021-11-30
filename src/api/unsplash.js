import axios from "axios";



export default axios.create({
    baseURL:'https://api.unsplash.com' , 
    headers: {
        Authorization:
        'Client-ID D5g_fhg9ZJ0591wh1rgjMMtJMYV0jyorUembQAt0ZFs'
    }
})