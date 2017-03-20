
       
        var crys1 = 0;
        var crys2 = 0;
        var crys3 = 0;
        var crys4 = 0;

        $(document).ready(function(){

            
            var score = 0;
            var win = 0;
            var loss = 0;

            // Creating a Target Number

            function targetNum() {
                return  Math.round(Math.random() * (120 - 19) + 19);
            };

            var target = targetNum();
            console.log("target: " + target);

            //Print target 

            $(".target").html(target);

            // Assign value to each Crystal

             function crystalNum() {
                return Math.round(Math.random() * (12 - 1) + 1);
            };

            function createCrystalValues() {

                crys1 = crystalNum();
                console.log(crys1);
                
                crys2 = crystalNum();
                console.log(crys2);

                crys3 = crystalNum();
                console.log(crys3);

                crys4 = crystalNum();
                console.log(crys4);

            };


            // Call the function to actually create value

            createCrystalValues();


            $("#crystal1").data("c", crys1);
            $("#crystal2").data("c", crys2);
            $("#crystal3").data("c", crys3);
            $("#crystal4").data("c", crys4);


            $(".crysicon").on("click", function() {

                
                score += $(this).data("c");


                $(".yourscore").html(score);

             

                if(score == target) {

                    win++;
                    score = 0;
                    createCrystalValues();
                    target = targetNum();

                    $(".yourscore").html(score);
                    $("#youWin").html(win);
                    $(".target").html(target);
                    
                };

                if(score > target) {

                    loss++;
                    score = 0;
                    target = targetNum();
                    createCrystalValues();

                    $("#youLose").html(loss)
                    $(".yourscore").html(score);
                    $(".target").html(target);
                };
                

            });
            
      

            
        });
