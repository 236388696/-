var users={
	"liwei":"123"
}
process.stdout.write("请输入用户名");
process.stdin.on("data",function(input){
	input=input.toString().trim();
})
