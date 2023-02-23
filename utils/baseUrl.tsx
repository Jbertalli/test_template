const baseUrl = 
    process.env.NODE_ENV === 'production'
    ? ""
    : "http://localhost:3099";

export default baseUrl;
