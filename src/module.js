console.log('Module.js')
console.log('Ololi')

async function start() {
		await Promise.resolve('async working')
}

start().then(console.log)