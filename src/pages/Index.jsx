import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../components/cartas.jsx'
function Index(){
    const navigate = useNavigate()
    const productos = [
    { id: 1, nombre: 'Producto A', precio: 1000, imagen: '...', descripcion: 'Descripción A' },
    { id: 2, nombre: 'Producto B', precio: 2000, imagen: '...', descripcion: 'Descripción B' },
    { id: 3, nombre: 'Producto C', precio: 3000, imagen: '...', descripcion: 'Descripción C' },
  ]
    return(    <div className="container text-center">
      <Card productos={productos} />
    </div>
  )
}
export default Index