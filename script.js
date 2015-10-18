$(document).ready(function() {
      $('#hit').click(function(event) {
          var max = +$('#p1_max').val();
          var total = 0;
          for(var i=1;i<max;i++){
          	if(i%3===0 || i%5===0){
          		total+=i;
          	};
          };
          $('#result').text(total);
      });
      $('#hit2').click(function(event) {
			var evenTotal = 0;
			var maxFibonacci = +$('#p2_max').val();
			var current = 1;
			var previous = 1;
			var next = 1;
			while (current < maxFibonacci) {
				if(current%2===0){
					evenTotal+=current;
					next = current+previous;
					previous=current;
					current=next;
				} else {
					next = current+previous;
					previous=current;
					current=next;
				};
			};
			$('#result2').text(evenTotal);
          });
	    $('#hit3').click(function(event) {
			var input = +$('#p3_max').val();
			var output = "";
			function isPrime(value){
				for (var i = 2; i < value; i++){
					if (value % i === 0){
						output = "notPrime";
                        i = value;
					} else{
                        output = "Prime";
                    };
				};
			};
            for(i=1; i<input;i++){
                if(input % (input-i) === 0){
                    isPrime((input-i));
                    if(output==="Prime"){
                        prime_multiplier=(input-i);
                        i=input;
                    };
                };
            };            
			$('#result3').text(prime_multiplier);
      	});
  });