import axios from 'axios'

const apiUrl = 'http://localhost:3001';
export const getTomes = async(param)=> {
    const res = await axios.get(`${apiUrl}/collection/order/${param}`);
    return res.data
}
export const getTome = async(id)=> {
    const res = await axios.get(`${apiUrl}/collection/${id}`);
    return res.data
}
export const updateTome = async(tome,id)=>{
    await axios.put(`${apiUrl}/collection/${id}`,{
        name:tome.name,
        number:tome.number,
        img:tome.img,
        resume:tome.resume,
        price:tome.price
    })
}
export const addTome = async(tome)=>{
    const res = await axios.post(`${apiUrl}/collection/`,{
        tome
    })
    return res.data
}
export const deleteTome = async(id)=>{
    await axios.delete(`${apiUrl}/collection/${id}`);
}