const a = function(){
    console.log(this)//window
    const b =function(){
        console.log(this) 
        const c ={
            hi: function(){
                console.log(this) //c
            }
        }
        c.hi()
    }
    b()
}
a()
//谁调用了b？？？window

const obj ={
    name:"billy",
    sing(){

        console.log(this)//obj
        var func=function(){
            console.log(this)//window!!,虽然func在obj内部，但是obj不是最后调用它的对象
        }
        func()
    }
}
obj.sing()

