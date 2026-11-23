import { input } from "@inquirer/prompts"

function validasiPositif(value: string): string | true {
    const angka = Number(value);
    if (value.trim() === "" || isNaN(angka) || angka <= 0) {
        return "Masukkan angka lebih dari 0.";
    }
    return true;
}

export async function bmiCalculator() {
    const berat = Number(
        await input({ message: "berat(kg):", validate: validasiPositif })
    );
    const tinggiCm = Number(
        await input({
            message: "Tinggi (cm):",validate: validasiPositif })
    );
    const tinggiM = tinggiCm / 100;
    const bmi = berat / (tinggiM * tinggiM);



    let  kategori: string;

    if (bmi < 18.5) {
        kategori = "Kurus";
    }
    else if (bmi < 25) {
        kategori = "Normal";
    } else if (bmi < 30) {
        kategori = "Gemuk";
    } else {
        kategori = "Obesitas";
    }
    console.log(`BMI: ${bmi.toFixed(1)}, Kategori: ${kategori}`);
}
