// // // // // // //Hoisting
// // // // // //     //var
// // // // // //     console.log(x);
    
// // // // // //     var x = 20;
// // // // // //     // console.log(x);
// // // // // //     var x = 30;
// // // // // //     x=50
// // // // // //     // console.log(x);
    
    
// // // // // //     //assignment Opeartor =
// // // // // //     //x = variable name
// // // // // //     //var= delcalration
// // // // // //     //let 
// // // // // //     // console.log(a);
// // // // // //     let a = 50;
// // // // // //     // let a=60;
    
    
// // // // // //     //const
// // // // // //     const c = 20;
// // // // // //     c= 50
// // // // //     // console.log(c);
    
// // // // //     //scope variable
// // // // //     //global variable
// // // // //     {
// // // // //         let d= 70
// // // // //     }
// // // // //     // console.log(d);
// // // // //     {
// // // // //         var x = 80
// // // // //     }
// // // // //     console.log(x);
// // // // //     {
// // // // //         const value = 42;
// // // // //     }
// // // // //     console.log(value);
// // // // // Opeartors
// // // //     //arithmetic
// // // //         // +,-,*,/,%,++,--
// // // //         let a= 10
// // // //         let b=5
// // // //         console.log(a+b);
// // // //         console.log(a-b);
// // // //         console.log(a*b);
// // // //         console.log(a/b);
// // // //         console.log(a%6);
// // // //         // a= a+1
// // // //         // a++
// // // //         console.log(a++);
// // // //         console.log(a);
// // // //         console.log(++a);
// // // //         console.log(--b);
// // // //         b--
// // // //         console.log(b--)    
// // // //     //conditonal
// // // //         // <,>,<=,>=,==,===
// // // //         console.log(b>a);
// // // //         console.log(b<a);
// // // //         console.log(b<=3);
// // // //         console.log(a>=14);
// // // //         console.log(a=='12');//data type not compare
// // // //         console.log(a==="12");

// // // //         // console.log(a,b);
        
// // // //     //logical opeartor
// // // //         // && , || ,!
// // // //         if(b<a && a===12 && b==3){
// // // //             console.log("And is working");
            
// // // //         }
// // // //         // Or Operator
// // // //         if(b>a || a===14 || b==3){
// // // //             console.log("Or is working");
            
// // // //         }
// // // //         console.log(a!=b);
        

// // // //     //Ternary opeartor
// // // //         let age = 8
// // // //         // console.log(age>=18?"Adult":"Teenager");
        
// // // //     //Conditional Statements
// // // //         // if
// // // //             if(age>=18){
// // // //                 console.log("He is an Adult");                
// // // //             }
// // // //         // if else
// // // //             if(age>=18){
// // // //                 console.log("He is an Adult");                
// // // //             }
// // // //             else{
// // // //                 console.log("Tennager");
// // // //             }
// // // //         //esle if
// // // //             if(age>=18){
// // // //                 console.log("He is an Adult");                
// // // //             }
// // // //             else if(age<=10){
// // // //                 console.log("He is Child");
                
// // // //             }
// // // //             else{
// // // //                 console.log("Tennager");
// // // //             }
// // // //     //Switch
// // // //             let today = "Thursday";
// // // //             switch(today){
// // // //                 case "Monday":
// // // //                     console.log("Today is Monday");
// // // //                     break
// // // //                 case "Tuesday":
// // // //                     console.log("Today is Tuesday");
// // // //                     break
// // // //                 case "Wednesday":
// // // //                     console.log("Today is Wednesday");
// // // //                     break
// // // //                 case "Thursday":
// // // //                     console.log("Today is Thursday");
// // // //                     break
// // // //                 case "Friday":
// // // //                     console.log("Today is Friday");
// // // //                     break
// // // //                 case "Saturday":
// // // //                     console.log("Today is Saturday");
// // // //                     break
// // // //                 default :
// // // //                     console.log("Today is Sunday");
                    
// // // //             }
// // // //     //loops
// // // //         // while
// // // //         // let val1 = 10
// // // //         let val_2 = 20
// // //         // while(val1<val_2){
// // //         //     val1++
// // //         //     console.log("While is workong");
            
// // //         // }

// // //         // do while
// // //         // do{
// // //         //     console.log("Do while working");
            
// // //         // }while(val1>val_2)

// // //         // for loop
// // //             // for(let val1= 10;val1<val_2;val1++){
// // //             //     console.log("For is working");
                
// // //             // }
// // //     // Data Types
// // //             // premitives 

// // //             let x = 5; //Number
// // //             console.log(typeof(x))
// // //             let name = '';
// // //             console.log(typeof(name));
// // //             let present = true
// // //             console.log(typeof(present));
// // //             // undefined
// // //             let b = undefined;
// // //             console.log(typeof(b));
            
// // //             //Nan Not an Number
// // //             // Null
// // //             let c = null
// // //             console.log(typeof(c))
            
            
            
// // //             // non premitives
// // //                 //array
// // //                     let arr = [10,"hei",true]
// // //                     // console.log(arr);
// // //                     // arr[0] = 10
// // //                     console.log(arr[0]);
// // //                     console.log(arr[1]);
// // //                     console.log(arr[2]);
// // //                 for(let x=0;x<arr.length;x++){
// // //                     console.log(arr[x]);
                    
// // //                 }
                    
// // //                 //object
// // //                     let person = {
// // //                         name:"xyz",
// // //                         age:20,
// // //                         address:"CBE",
// // //                         DOB:"10/12/1994",
// // //                         isAvlive:true
// // //                     }
                

// // //                     console.log(person);
// // //                     console.log(person.name);
                    
// // //                     console.log(Object.entries(person));
                    
// // //                 let obj = Object.entries(person)
// // //                 console.log(obj);
// // //                 // obj.map((x)=>{
// // //                 //     console.log(x);
                    
// // //                 // })
                
// // //                 for(let i;i<5;i++){
// // //                     console.log(obj[i]);                    
// // //                 }

                
                    


// // // function add(num1,num2){
// // //     return num1+num2 
// // // }

// // // console.log(add(20,30))
// // // console.log(add(100,500))


// // // //arrow
// // // const arrow = ()=>console.log("Arrow is working")

// // // arrow()
// // // //IIFI
// // // const IFFI = (function(){
// // //     console.log("IFFI is working")    
// // // })
// // // //Ananoums
// // // const anan = function(){

// // // // }


// // // // // array methods & ES6
// // // // //for
// // //     let arr = [50,20,50,80,90]
// // // //     //for of
// // // //         // for(let a=0;a<arr.length;a++){
// // // //         //     console.log(arr[a]);
            
// // // //         // }
// // // //         for(let i of arr){
// // // //             console.log(i);
            
// // // //         }
// // // //     //for in
// // // //         for(let i in arr){
// // // //             console.log(arr[i]);
            
// // // //         }
// // // //     //foreach
// // // //     arr.forEach((item)=>console.log(item))
// // // //MRF
// // //     // map
// // //         arr.map((item)=>console.log(item))
// // //     //reduce
// // //        const total =  arr.reduce((acc,sum)=>acc+sum)
// // //     //    sum = 50 acc=0
// // //     //20 50 = 70
// // //     // acc= 70 sum = 50 = 120
// // //     // 120+80 = 200
// // //     // 200+90 = 290
// // //        console.log(total);
       
// // //     //filter
// // //     const fill = arr.filter((item)=>item%3===0)
// // //     console.log(fill);


// // //     // for
// // //         // A
// // //         // as
// // //         // Ash
// // //         // Asho
// // //         // Ashok

// // let name = "Ashok"
// // let output = ""
// // for(let i=0;i<name.length;i++){
// //     output = output+name[i]
// //         //a
// //        //a+s = as
// //        //as+h = ash
// //        //ash+o = asho
// //        //asho+k = ashok
// //        console.log(output);
// // }
 
// //         // prime number 50

    

// //     //     let a = [20,50,70,"abc"]
// //     // //     a[6] = 520
// //     // //     console.log(a);
        
// //     // // // pop
// //     // // a.pop()
// //     // // console.log(a);
    
// //     // // //push
// //     // // a.push(828)
    
// //     // //  console.log(a);

// //     // // //  shift
// //     // // a.shift()
// //     // // console.log(a);
    
// //     // // //unshift
// //     // // a.unshift(234)
// //     // // console.log(a);
    
// //     // // // find
// //     // let arr = [8,812,,40,10,20,80]
// //     // // let res = arr.find(x=>x===10)
// //     // // console.log(res);
// //     // // //find index
// //     // // let indexfind = arr.findIndex(x=>x>10)
// //     // // console.log(indexfind);

// //     // // // includes
// //     // // console.log(arr.includes(10));

// //     // // //some
// //     // // let somes = arr.some(x=>x>80)
// //     // // console.log(somes);

// //     // // //every
// //     // // console.log(arr.every(x=>x>10));

// //     // // //sort
// //     // // console.log(arr.sort());
// //     // // //reverse

// //     // // console.log(arr.reverse())

// //     // // //concat
// //     // let c = [10,11].concat([50,60])
// //     // // console.log(c);

// //     // // //slice
// //     // // console.log(c.slice(1,3));

// //     // // //splice
// //     // // console.log(arr.splice(1,3));

// //     // // //spread
// //     // let array2 = [...a,...c,...arr]
// //     // // console.log(array2);
    
// //     // //rest
// //     // let [e,b,...x] = array2
// //     // console.log(e);
// //     // console.log(b);
// //     // console.log(x);

// //     // const person = {
// //     //     personName:"arjun",
// //     //     age:20
// //     // }

// //     // console.log(person.personName);
// //     // console.log(person.age);

// //     // const {personName,age} = person
// //     // console.log(personName);
// //     // console.log(age);
    
// // //setTimeout
// //     setTimeout(()=>{
// //         console.log("Set Timeout is working");
        
// //     },2000)
// // //setInterval
// // setInterval(()=>{
// //         console.log("setInterval is working");
        
// //     },5000)
// //addeventListner
// let button = document.getElementById('btn')
// // button.addEventListener('click',()=>{
// //     button.innerHTML ==="Clicked"?button.innerHTML="click":button.innerHTML="Clicked"
// // })
// //events
//     //onchange
//     const getValue = (e)=>{
//         let userName = document.getElementById('userName')
//         console.log(userName.value);
        
//     }
//     //onclick
//     const valueChange= ()=>{
//         let button = document.getElementById('btn')
//         button.innerHTML ==="Clicked"?button.innerHTML="click":button.innerHTML="Clicked"
//     }
//     //onsubmit

//     //Async
//         // Promise
//         let bookTicket = new Promise((resolved,reject)=>{
//             let success = false
//             if(success){
//                 resolved("Ticket Booked Succesfully")
//             }
//             else{
//                 reject("Unable to book the ticket")
//             }
//         })
//         bookTicket.then((result)=>{
//             console.log(result);
            
//         }).catch((err)=>{
//             console.log(err);            
//         })
//         //race
//         let friend1 = new Promise((resolved,reject)=>{
//             let reached = false
//             if(reached){
//                 resolved("Friend1 Reached Home")
//             }else{
//                 reject("Friend1 Not yet reached")
//             }
//         })
//         let friend2 = new Promise((resolved,reject)=>{
//             let reached = true
//             if(reached){
//                 resolved("Friend2 Reached Home")
//             }else{
//                 reject("Friend2 Not yet reached")
//             }
//         })
//         let friend3 = new Promise((resolved,reject)=>{
//             let reached = false
//             if(reached){
//                 resolved("Friend3 Reached Home")
//             }else{
//                 reject("Friend3 Not yet reached")
//             }
//         })
//         let friend4 = new Promise((resolved,reject)=>{
//             let reached = true
//             setTimeout(()=>{
//                 if(reached){
//                 resolved("Friend4 Reached Home")
//             }else{
//                 reject("Friend4 Not yet reached")
//             }
//             },5000)
//         })
//         Promise.race([friend1,friend2,friend3,friend4]).then((res)=>{
//             console.log(res)          
//         }).catch((err)=>{
//             console.log(err)            
//         })
//         //any
//         Promise.any([friend1,friend2,friend3,friend4]).then((res)=>{
//             console.log(res)          
//         }).catch((err)=>{
//             console.log(err)            
//         })
//         //all
//         Promise.all([friend1,friend2,friend3,friend4]).then((res)=>{
//             console.log(res)          
//         }).catch((err)=>{
//             console.log(err)            
//         })
//         //allSettled
//         Promise.allSettled([friend1,friend2,friend3,friend4]).then((res)=>{
//             console.log(res)          
//         }).catch((err)=>{
//             console.log(err)            
//         })


//         //fetch Method
//         // let fetchData = new Promise((resolved,reject)=>{
//         //     fetch('https://jsonplaceholder.typicode.com/todos').then((res)=>{
//         //         console.log(res);
                
//         //         if(!res.ok){
//         //             reject("Unable to connect API")
//         //         }
//         //         else{
//         //             resolved(res.json())
//         //         }
//         //     })
//         // })
//         // fetchData.then((result)=>{
//         //     console.log(result)           
//         // }).catch((err)=>{
//         //     console.log(err);
            
//         // })
//         //async
//         let fetchData = async()=>{
//             try {
//                 let res = await fetch('https://jsonplaceholder.typicode.com/todos')
//                 if(!res.ok){
//                     throw Error("Unable to connect API");                
//                 }
//                 else{
//                     const data = await res.json()

// //                     console.log(data)                
// //                 }
// //             } catch (error) {
// //                 console.log(error);
                
// //             }
// //         }
// //         fetchData()
//     // DOM - Document Object Module
//     let form = document.getElementById('form')
//     let forms = document.getElementsByClassName('form')
//     let forms1 = document.getElementsByTagName('form')
//     let forms2 = document.querySelector('.form')
//     let forms3 = document.querySelector('#form')
//     let forms4 = document.querySelectorAll('#form')

//     let btn = document.createElement('button')
//     btn.textContent = "Submit"
//     // btn.innerHTML="Login"
//     // btn.innerText="Click"
//     document.body.append(btn)
//     let input= document.createElement('input')
//     input.setAttribute('type',"Number")
//     input.setAttribute('placeholder',"enter your number")
//     form.appendChild(input)

    // table
    //thead
    //th
    // tbody
    //tr
    //td


    array = [80,90,60,40,99]

    // array.map((item)=>{
    //     console.log(item);
        
    // // })
    // array.forEach((item)=>{
    //     console.log(item);
        
    // })
    odd = array.filter((x)=>x%2!=0)
// console.log(odd);
total = array.reduce((a,b)=>a+b)
console.log(total);
