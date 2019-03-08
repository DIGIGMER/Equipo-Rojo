const matrimonio = new Promise((resolve, reject) => {
	try{
		resolve({ status: "OK" })
	}catch(e){
		reject({ error: "Fail" });
	}
});

(async () => {
	const result = await matrimonio;
	console.log(result.status);
})()
