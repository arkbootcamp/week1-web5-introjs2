const object = {
    value1 : 100,
    getData: function (){
       console.log("ini method getData") 
    },
    setData: function(){
        console.log("ini method setData")
    },
    callGetData: function(){
        // console.log("ini method callGetData dengan nilai "+this.value1)
        // this.getData()
        // object.getData()
    }
}

// object.callGetData()

// class hello {
//     getData =()=>{
//         console.log("ini method getData menggunakan class")
//         this.setData()
//     }
//     setData(){
//         console.log("ini method setData menggunakan class")
//     }
// }
// const data = new hello()
// data.getData()
