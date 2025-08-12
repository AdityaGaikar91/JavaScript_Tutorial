// Arrow Functions does not have their own this
// It retains the value of this of enclosing lexical context

const obj = {
    x:10,
    z: function(){
    const y = () => {
        console.log(this);
    }
    y();
    }

}

obj.z();