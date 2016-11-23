var users={
	"liu":"123",
	"zhang":"456"
}

process.stdout.write("请输入用户名");
process.stdin.on("data",function(input){
	// console.log({input.toString()});
	input=input.toString().trim();
});
