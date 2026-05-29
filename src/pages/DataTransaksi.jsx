import { useState } from "react";

import transaksiData from "../Data/DataTransaksi.json";

import { FaEye, FaTrash, FaSearch, FaMoneyBill } from "react-icons/fa";

// ================= SHADCN =================

import { Button } from "@/components/ui/button";

import { Badge } from "@/components/ui/badge";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

import { Input } from "@/components/ui/input";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";

// =====================================

export default function DataTransaksi() {
  const [data, setData] = useState(transaksiData);

  const [search, setSearch] = useState("");

  const [detail, setDetail] = useState(null);

  const [deleteData, setDeleteData] = useState(null);

  // DELETE

  const hapusData = () => {
    setData(
      data.filter((item) => item.id_transaksi !== deleteData.id_transaksi),
    );

    setDeleteData(null);
  };

  // SEARCH

  const filterData = data.filter(
    (item) =>
      item.id_customer?.toLowerCase().includes(search.toLowerCase()) ||
      item.id_transaksi?.toLowerCase().includes(search.toLowerCase()) ||
      item.produk_dibeli?.toLowerCase().includes(search.toLowerCase()),
  );

  // FORMAT

  const formatRupiah = (angka) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(angka);
  };

  return (
    <div className="min-h-screen bg-[#EAF2FF] p-6 space-y-6">
      {/* ALERT */}

      <Alert className="bg-white">
        <FaMoneyBill />

        <AlertTitle>Data Transaksi CRM</AlertTitle>

        <AlertDescription>
          Total transaksi tersimpan : <b>{data.length}</b> data
        </AlertDescription>
      </Alert>

      {/* SEARCH */}

      <Card>
        <CardHeader>
          <CardTitle>Riwayat Transaksi Customer</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="relative max-w-md">
            <FaSearch
              className="
absolute
top-3
left-3
text-gray-400
"
            />

            <Input
              placeholder="Cari transaksi..."
              className="pl-10"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="semua">
        <TabsList>
          <TabsTrigger value="semua">Semua Transaksi</TabsTrigger>

          <TabsTrigger value="report">Report</TabsTrigger>
        </TabsList>

        <TabsContent value="semua">
          <Card>
            <CardContent className="p-5">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID Customer</TableHead>

                    <TableHead>ID Transaksi</TableHead>

                    <TableHead>Total</TableHead>

                    <TableHead>Pembayaran</TableHead>

                    <TableHead>Produk</TableHead>

                    <TableHead>Tanggal</TableHead>

                    <TableHead className="text-center">Aksi</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {filterData.map((item) => (
                    <TableRow key={item.id_transaksi}>
                      <TableCell>{item.id_customer}</TableCell>

                      <TableCell>{item.id_transaksi}</TableCell>

                      <TableCell>
                        <Badge
                          className="
bg-green-100
text-green-700
"
                        >
                          {formatRupiah(item.total_transaksi)}
                        </Badge>
                      </TableCell>

                      <TableCell>
                        <Badge
                          className="
bg-blue-100
text-blue-700
"
                        >
                          {item.metode_pembayaran}
                        </Badge>
                      </TableCell>

                      <TableCell>{item.produk_dibeli}</TableCell>

                      <TableCell>{item.tanggal_transaksi}</TableCell>

                      {/* ACTION */}

                      <TableCell>
                        <div className="flex justify-center gap-3">
                          <Button
                            onClick={() => setDetail(item)}
                            className="
bg-blue-600
text-white
"
                          >
                            <FaEye />
                            Detail
                          </Button>

                          <Button
                            onClick={() => setDeleteData(item)}
                            className="
bg-red-600
text-white
"
                          >
                            <FaTrash />
                            Hapus
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="report">
          <Card>
            <CardContent className="p-5">
              Total transaksi: {data.length}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* DETAIL DIALOG */}

      <Dialog open={!!detail} onOpenChange={() => setDetail(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Detail Transaksi</DialogTitle>
          </DialogHeader>

          {detail && (
            <div className="space-y-3">
              <p>ID Customer : {detail.id_customer}</p>

              <p>ID Transaksi : {detail.id_transaksi}</p>

              <p>Total :{formatRupiah(detail.total_transaksi)}</p>

              <p>Produk :{detail.produk_dibeli}</p>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* ALERT DELETE */}

      <AlertDialog open={!!deleteData} onOpenChange={() => setDeleteData(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Hapus transaksi?</AlertDialogTitle>

            <AlertDialogDescription>
              Transaksi <b>{deleteData?.id_transaksi}</b> akan dihapus permanen.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel>Batal</AlertDialogCancel>

            <AlertDialogAction
              onClick={hapusData}
              className="
bg-red-600
"
            >
              Hapus
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
