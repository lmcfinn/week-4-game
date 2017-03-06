
       
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

            // Add values to Score and also print Score

        
            $("#crystal1").on("click", function() {

                score += crys1;
                // console.log("crys1: " + score);
                $(".yourscore").html(score);

                if(score == target) {

                    win++;
                    $("#youWin").html(win);
                    score = 0;
                    $(".yourscore").html(score);
                    createCrystalValues();

                    target = targetNum();
                    $(".target").html(target);
                    
                };

                if(score > target) {

                    loss++;
                    $("#youLose").html(loss)
                    score = 0;
                    $(".yourscore").html(score);
                    createCrystalValues();

                    target = targetNum();
                    $(".target").html(target);
                };
                

            });
            
            
            $("#crystal2").on("click", function() {

                score += crys2;
                // console.log("crys2: " + score);
                $(".yourscore").html(score);

                if(score == target) {

                    win++;
                    $("#youWin").html(win);
                    score = 0;
                    $(".yourscore").html(score);
                    createCrystalValues();

                    target = targetNum();
                    $(".target").html(target);
                    

                };

                if(score > target) {

                    loss++;
                    $("#youLose").html(loss)
                    score = 0;
                    $(".yourscore").html(score);
                    createCrystalValues();

                    target = targetNum();
                    $(".target").html(target);
                };
               
            });


            $("#crystal3").on("click", function() {

                score += crys3;
                // console.log("crys3: " + score);
                $(".yourscore").html(score);


                if(score == target) {

                    win++;
                    $("#youWin").html(win);
                    score = 0;
                    $(".yourscore").html(score);

                    createCrystalValues();

                    target = targetNum();
                    $(".target").html(target);

                };

                if(score > target) {

                    loss++;
                    $("#youLose").html(loss)
                    score = 0;
                    $(".yourscore").html(score);

                    createCrystalValues();

                    target = targetNum();
                    $(".target").html(target);
                };

            });


            $("#crystal4").on("click", function() {

                score += crys4;
                // console.log("crys4: " + score);
                $(".yourscore").html(score);

                if(score == target) {

                    win++;
                    $("#youWin").html(win);
                    score = 0;
                    $(".yourscore").html(score);

                    createCrystalValues();

                    target = targetNum();
                    $(".target").html(target); 

                };

                if(score > target) {

                    loss++;
                    $("#youLose").html(loss)
                    score = 0;
                    $(".yourscore").html(score);

                    createCrystalValues();

                    target = targetNum();
                    $(".target").html(target);
                    
                };
       
            });  

            
        });
