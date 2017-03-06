
       
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
                crys2 = crystalNum();
                crys3 = crystalNum();
                crys4 = crystalNum();

            };


            // Call the function to actually create value

            createCrystalValues();


            var score1 = $(".crystal1");
                score1.data("c1", crys1);
            console.log(score1);


        
            $(".crysicon").on("click", function() {

                
                score += crys1


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
