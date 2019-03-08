const matrimonio = new Promise(function(resolve, reject) {
	try{
		resolve({ status: "OK" })
	}catch(e){
		reject({ error: "Fail" });
	}
});

matrimonio.then(function(success) {
	console.log(success.status);
}).catch(function(error) {
	console.log(error.error);
});