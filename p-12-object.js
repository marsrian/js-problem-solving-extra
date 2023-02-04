/**-------Topics: Object details----------*/

const componentsPC = {
    processor: "AMD Ryzen 5 5600G Processor with Radeon Graphics",
    motherboard: "Asus TUF GAMING B550M-E AMD AM4 mATX Motherboard",
    ram: "Corsair Vengeance LPX 8GB 3200MHz DDR4 Desktop RAM"
}
console.log(componentsPC);

// change 1 property value:
componentsPC.ram = "G.SKILL Aegis 8GB DDR4 3200Mhz Desktop RAM";
// other way:
componentsPC["motherboard"] = "Asrock B450 Steel Legend AMD Motherboard";
console.log(componentsPC)