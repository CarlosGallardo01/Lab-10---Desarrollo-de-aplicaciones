import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ProductForm({ onAgregarProducto }) {
  const [formulario, setFormulario] = useState({ descripcion: "", precio: "", categoria: "" });
  const [errores, setErrores] = useState({});
  const [mensajeConfirmacion, setMensajeConfirmacion] = useState("");

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const limpiarFormulario = () => {
    setFormulario({ descripcion: "", precio: "", categoria: "" });
    setErrores({});
    setMensajeConfirmacion("");
  };

  const registrarProducto = (e) => {
    e.preventDefault();
    let nuevosErrores = {};

    if (!formulario.descripcion || formulario.descripcion.length < 3) {
      nuevosErrores.descripcion = "La descripción debe tener al menos 3 caracteres.";
    }
    if (!formulario.precio || parseFloat(formulario.precio) <= 0) {
      nuevosErrores.precio = "El precio debe ser un número mayor a 0.";
    }
    if (!formulario.categoria) {
      nuevosErrores.categoria = "La categoría es obligatoria.";
    }

    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores);
      setMensajeConfirmacion("");
      return;
    }

    onAgregarProducto({
      descripcion: formulario.descripcion,
      precio: parseFloat(formulario.precio),
      categoria: formulario.categoria,
    });

    limpiarFormulario();
    setMensajeConfirmacion("¡Producto registrado con éxito!");
    setTimeout(() => setMensajeConfirmacion(""), 3000);
  };

  return (
    <Card className="col-span-1 h-fit bg-[#1e1e2f] border-[#2d2d44] text-white shadow-2xl">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center pb-2">Registrar Producto</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={registrarProducto} className="space-y-5">
          <div>
            <Label htmlFor="descripcion" className="text-base text-gray-300">Descripción</Label>
            <Input 
              type="text" 
              id="descripcion" 
              name="descripcion" 
              value={formulario.descripcion} 
              onChange={manejarCambio} 
              className="mt-1 bg-[#27293d] border-[#3b3d56] text-white text-base py-5 placeholder:text-gray-500" 
              placeholder="Ej: Laptop Asus"
            />
            {errores.descripcion && <p className="text-red-400 text-sm mt-1">{errores.descripcion}</p>}
          </div>
          <div>
            <Label htmlFor="precio" className="text-base text-gray-300">Precio de venta (S/)</Label>
            <Input 
              type="number" 
              step="0.01" 
              id="precio" 
              name="precio" 
              value={formulario.precio} 
              onChange={manejarCambio} 
              className="mt-1 bg-[#27293d] border-[#3b3d56] text-white text-base py-5" 
            />
            {errores.precio && <p className="text-red-400 text-sm mt-1">{errores.precio}</p>}
          </div>
          <div>
            <Label htmlFor="categoria" className="text-base text-gray-300">Categoría</Label>
            <Input 
              type="text" 
              id="categoria" 
              name="categoria" 
              value={formulario.categoria} 
              onChange={manejarCambio} 
              className="mt-1 bg-[#27293d] border-[#3b3d56] text-white text-base py-5" 
            />
            {errores.categoria && <p className="text-red-400 text-sm mt-1">{errores.categoria}</p>}
          </div>
          
          {mensajeConfirmacion && <p className="text-green-400 text-sm font-medium">{mensajeConfirmacion}</p>}
          
          <div className="grid grid-cols-2 gap-3 pt-4">
            <Button type="submit" className="w-full bg-[#6c5ce7] hover:bg-[#5a4bcf] text-white text-base py-6">
              Registrar producto
            </Button>
            <Button 
              type="button" 
              onClick={limpiarFormulario}
              className="w-full bg-transparent border border-gray-500 text-gray-300 hover:bg-gray-800 hover:text-white text-base py-6" 
            >
              Limpiar
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}