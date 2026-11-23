import { input } from "@inquirer/prompts"


export async function discountCalculator() {
    const harga = Number(
        await input({
            message: "Harga barang",
            validate: (value) => {
                const angka = Number(value);
                if (value.trim() === "" || isNaN(angka) || angka <= 0) {
                    return "Harga harus angka lebih dari 0.";
                } return true;
            },
        })
    );
    const diskonPersen = Number(
        await input({
            message: "Diskon(%):",
            validate: (value) => {
                const angka = Number(value);
                if (value.trim() === "" || isNaN(angka) || angka < 0 || angka > 100) {
                    return "diskon harus antara 0 dan 100.";
                } return true;
            },
        })
    );

    const potongan = harga * diskonPersen / 100;
    const hargaAkhir = harga - potongan;

    console.log(`Harga awal: Rp${harga}`);
    console.log(`Potongan: Rp${potongan}`);
    console.log(`Harga akhir: Rp${hargaAkhir}`)
}
    
