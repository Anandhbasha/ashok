// // //Hoisting
// //     //var
// //     console.log(x);
    
// //     var x = 20;
// //     // console.log(x);
// //     var x = 30;
// //     x=50
// //     // console.log(x);
    
    
// //     //assignment Opeartor =
// //     //x = variable name
// //     //var= delcalration
// //     //let 
// //     // console.log(a);
// //     let a = 50;
// //     // let a=60;
    
    
// //     //const
// //     const c = 20;
// //     c= 50
//     // console.log(c);
    
//     //scope variable
//     //global variable
//     {
//         let d= 70
//     }
//     // console.log(d);
//     {
//         var x = 80
//     }
//     console.log(x);
//     {
//         const value = 42;
//     }
//     console.log(value);
// Opeartors
    //arithmetic
        // +,-,*,/,%,++,--
        let a= 10
        let b=5
        console.log(a+b);
        console.log(a-b);
        console.log(a*b);
        console.log(a/b);
        console.log(a%6);
        // a= a+1
        // a++
        console.log(a++);
        console.log(a);
        console.log(++a);
        console.log(--b);
        b--
        console.log(b--)    
    //conditonal
        // <,>,<=,>=,==,===
        console.log(b>a);
        console.log(b<a);
        console.log(b<=3);
        console.log(a>=14);
        console.log(a=='12');//data type not compare
        console.log(a==="12");

        // console.log(a,b);
        
    //logical opeartor
        // && , || ,!
        if(b<a && a===12 && b==3){
            console.log("And is working");
            
        }
        // Or Operator
        if(b>a || a===14 || b==3){
            console.log("Or is working");
            
        }
        console.log(a!=b);
        

    //Ternary opeartor
        let age = 8
        // console.log(age>=18?"Adult":"Teenager");
        
    //Conditional Statements
        // if
            if(age>=18){
                console.log("He is an Adult");                
            }
        // if else
            if(age>=18){
                console.log("He is an Adult");                
            }
            else{
                console.log("Tennager");
            }
        //esle if
            if(age>=18){
                console.log("He is an Adult");                
            }
            else if(age<=10){
                console.log("He is Child");
                
            }
            else{
                console.log("Tennager");
            }
    //Switch
            let today = "Thursday";
            switch(today){
                case "Monday":
                    console.log("Today is Monday");
                    break
                case "Tuesday":
                    console.log("Today is Tuesday");
                    break
                case "Wednesday":
                    console.log("Today is Wednesday");
                    break
                case "Thursday":
                    console.log("Today is Thursday");
                    break
                case "Friday":
                    console.log("Today is Friday");
                    break
                case "Saturday":
                    console.log("Today is Saturday");
                    break
                default :
                    console.log("Today is Sunday");
                    
            }
    //loops
        // while
        // let val1 = 10
        let val_2 = 20
        // while(val1<val_2){
        //     val1++
        //     console.log("While is workong");
            
        // }

        // do while
        // do{
        //     console.log("Do while working");
            
        // }while(val1>val_2)

        // for loop
            for(let val1= 10;val1<val_2;val1++){
                console.log("For is working");
                
            }
        
        


    