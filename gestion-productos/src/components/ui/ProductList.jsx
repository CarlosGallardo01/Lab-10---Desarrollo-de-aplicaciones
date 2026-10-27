import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function ProductList({ productos }) {
  return (
    <Card className="col-span-1 md:col-span-2 h-fit bg-[#1e1e2f] border-[#2d2d44] text-white shadow-2xl">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center pb-2">
          Catálogo de Productos
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table className="w-full text-sm text-left">
            <TableHeader className="text-gray-300 border-b border-[#3b3d56]">
              <TableRow className="border-[#3b3d56] hover:bg-transparent">
                <TableHead className="py-4 px-4 font-semibold text-gray-300">
                  Código
                </TableHead>
                <TableHead className="py-4 px-4 font-semibold text-gray-300">
                  Descripción
                </TableHead>
                <TableHead className="py-4 px-4 font-semibold text-gray-300">
                  Categoría
                </TableHead>
                <TableHead className="py-4 px-4 font-semibold text-right text-gray-300">
                  Precio (S/)
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y divide-[#3b3d56]">
              {productos.map((producto) => (
                <TableRow
                  key={producto.codigo}
                  className="border-[#3b3d56] hover:bg-[#27293d] transition-colors"
                >
                  <TableCell className="py-4 px-4 font-medium text-[#8c7ae6]">
                    {producto.codigo}
                  </TableCell>
                  <TableCell className="py-4 px-4">
                    {producto.descripcion}
                  </TableCell>
                  <TableCell className="py-4 px-4 text-gray-300">
                    {producto.categoria}
                  </TableCell>
                  <TableCell className="py-4 px-4 text-right font-medium">
                    {producto.precio.toFixed(2)}
                  </TableCell>
                </TableRow>
              ))}
              {productos.length === 0 && (
                <TableRow className="border-[#3b3d56]">
                  <TableCell
                    colSpan={4}
                    className="py-8 text-center text-gray-500"
                  >
                    No hay productos registrados.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}