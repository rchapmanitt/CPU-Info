const os = require( 'os' );
const { arch } = require('node:process');
const cpus = os.cpus();

console.log("\n");
console.log("---------------------------------------------------")
console.log("Total CPU Cores:", cpus.length);


cpus.forEach((cpu, index) => {
    console.log("---------------------------------------------------")
    console.log(`CPU ${index + 1}`);
    console.log("---------------------------------------------------")
    console.log('  Model:', cpu.model);
    console.log('  Speed:', cpu.speed);
    console.log(`  Arch:  ${arch}`);
});
console.log("---------------------------------------------------")
console.log("\n");