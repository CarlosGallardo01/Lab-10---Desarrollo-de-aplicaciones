import { useState } from "react";
import { ProductForm } from "./components/ui/ProductForm";
import { ProductList } from "./components/ui/ProductList";

const productosIniciales = [
  { codigo: 101, descripcion: "Pc gamer", precio: 2800.0, categoria: "Computación" },
  { codigo: 102, descripcion: "Iphone 17 Pro", precio: 6000.0, categoria: "Telefonía" },
  { codigo: 103, descripcion: "Pelota de futbol", precio: 150.0, categoria: "Deportes" },
  { codigo: 104, descripcion: "Ropa deportiva", precio: 145.0, categoria: "Deportes" },
  { codigo: 105, descripcion: "Silla gamer", precio: 880.0, categoria: "Computación" },
];

function App() {
  const [productos, setProductos] = useState(productosIniciales);

  const agregarProducto = (nuevoProductoData) => {
    // Generar código único sumando 1 al máximo actual
    const nuevoCodigo = productos.length > 0 ? Math.max(...productos.map(p => p.codigo)) + 1 : 1;
    const nuevoProducto = { codigo: nuevoCodigo, ...nuevoProductoData };
    setProductos([...productos, nuevoProducto]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#5b326b] p-8 text-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
          Gestor de productos
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <ProductForm onAgregarProducto={agregarProducto} />
          <ProductList productos={productos} />
        </div>
      </div>
    </div>
  );
}

export default App;