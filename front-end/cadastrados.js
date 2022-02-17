const LOCAL_API_URL = 'http://localhost:3000/api'
const HOST = window.location.host
const API_URL = HOST.includes('netlify.app') ? REMOTE_API_URL : LOCAL_API_URL