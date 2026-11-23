import { input, select } from "@inquirer/prompts"



export async function unitConverter() {
    const konversi = await select({
        message: "Pilih konversi:",
        choices: [{
            name: "Celsius ke Fahrenheit", value: "c-f"
        },
        { name: "Fahrenheit ke Celsius", value: "f-c" }]

    });

    const nilaiTeks = await input({
        message: "Masukkan suhu:",
        validate: (value) => {
            const angka = Number(value);
            if (value.trim() === "" || isNaN(angka)) {
                return "Masukkan angka yang valid.";
            }
            return true
        },
    });

    const nilai = Number(nilaiTeks)

    if (konversi === "c-f") {
        const hasil = nilai * 9 / 5 + 32;
        console.log("Hasil:", hasil);
    } else {
        const hasil = (nilai - 32) * 5 / 9;
        console.log("Hasil:", hasil);
    }
    };
