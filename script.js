$(document).ready(function(){
	$("button").click(function(){
		var parent = $(this).parent();
		var n = parent.find(".num").text();
		var result = parent.find(".result");
		/*switch (parent.attr("id")){
			case "problem1":*/
		if (parent.attr("id")==="problem1") {
				var sum = 0;
				for (var i = 0; i < n; i++) {
					if ((i % 3 == 0) || (i % 5 == 0)) {
						sum += i;
					};
				};
				result.html("The result is: " + sum);
				return;
		};
	});
	$("input").blur(function() {
		$(this.parent().find(".num").text($(this).val()))
	});
});





/*

$(document).ready(function(){
	$("#answer1").click(function(){
		$("#max1").val(function(i,final_answer){
			return final_answer + "Hello";
		});
	});
});






$(document).ready(function(){
	$("#dosomething").click(function(){
		$("#deftext").val("Cindy");
	});
});




var problem1 = function(max){
    var total = 0;
for(var i=1;i<max;i++){
    if(i%3===0){
        total+=i;
    } else if(i%5===0){
        total+=i;
    }
}
    return total;
};

var max = 1000;
var answer1 = problem1(max);
console.log('Answer 1' + answer1);









233168*/