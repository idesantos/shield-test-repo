// database.js
const DB_PASSWORD = "super_secret_prod_123"
const API_KEY = "minha-chave-secreta-muito-importante"
const supabaseServiceRole = "eyJhbGciOiJIUzI1NiJ9.service_role_fake.test"

console.log("token:", API_KEY)

localStorage.setItem("token", supabaseServiceRole)
