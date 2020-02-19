const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(array,alert) {
        for (let element in array){
           alert(array[element])
        }
      return array  
    },

    map: function(array,func) {
      let arr = []
      for (let element in array){
        arr.push(func(array[element]))
      }
      return arr 
    },

    reduce: function(array,func,acc) {
        for(let element in array){
          if(acc===undefined)
          {acc=array[element]}
          else{
            acc=func(acc,array[element],array)}
        }
        return acc
    },
    find : function(collection, predicate){
      let result = []
      result = collection.filter(predicate)
      if(result.length !== 0 ) return result[0]   
      
      else  return undefined  
    },
    filter : function(collection, predicate){
      let arr = []
      for (let element in collection){
        if(predicate[element]) arr.push(element)
      }
      return arr 
    },
    size:function(collection){
      let ind = 0 
      for(let element in collection){
          ind += 1
      }
      return ind
    },
    first: function(array, n){
      let arr =[]
       if(n === undefined) return array[0]
       else {
          for (let i = 0 ; i< n ; i++){
              arr.push(array[i])
          }
          return arr 
       }
    },
    last : function(array , n){
       if(n === undefined) return array[array.length -1]
       else  return array.slice(-n) 
       
    },
    compact: function(array){
      let arr =[false, null, 0, "", undefined,NaN ]
      let result = []
      for(let element in array){
        if(!arr.includes(array[element])) result.push(array[element])
      }
      return result
    },
    sortBy: function(array, callback){
      let arr =[...array]
      return arr.sort(function(a, b){ return callback(a)-callback(b) })
    },
    flatten :function(array,bol){
      let result = []
     if(bol) return  [].concat(...array) 
     else    return array.flat(Infinity)
    },
    uniq : function(array, isSorted, callback){
      if(!isSorted && callback){
         let arr =[]
  let arr1 = []

for (let i=0;i< array.length;i++){
   if(!arr1.includes(callback(array[i]))) {
    arr.push(array[i])
    arr1.push(callback(array[i]))
       
  
}}
return arr  
      }
      else if(isSorted){
        let res = [] 
        for (let i = 0 ; i<array.length ; i++){
          if(array[i] !== array[i+1]) res.push(array[i])
        }
        return res 
      }
      else
      {
          let res =[]
            for(let element in array)
            {
               if(!res.includes(array[element]))
                {
                  res.push(array[element])
                }
            }
        return res 
 
      }
      
    },
    keys:function(object){
     Object.keys(object)
      
    },
    values:function(object){
      let res=[]
      for(let key in object){res.push(object[key])}
      return res
    },
    functions: function(obj) {
     let res=[]
      for(let ele in obj){
        if(typeof obj[ele]=='function'){
          res.push(ele)}
      }
      return res
    },


  }
})()

fi.libraryMethod()
