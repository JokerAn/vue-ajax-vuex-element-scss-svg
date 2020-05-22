<template>
  <div>文章管理</div>
</template>

<script>
export default {
  data(){
    return{
      msg: '我是msg'
    }
  },
  created(){
    let a = [1,2,3,4]

    console.log(a.includes(4))
    let b = {
      a: 1,b: 2,c: 3
    }

    console.log(Object.keys(b))
    console.log('asdf'.startsWith('c'))
    this.test(2).then(result=>{
      console.log(result)
    })
  },
  methods: {
    test(res){
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          if(res){
            resolve(res)
          }else{
            reject('啥都没传')
          }
        },4000)
        
      })
    }
  }
}
</script>

<style>

</style>