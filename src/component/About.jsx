import React, {useEffect, useState } from 'react'
 import {Link} from 'react-router-dom'
import Sample from './Sample'
import Spinner from './Spinner'
import LoadingBar from "react-top-loading-bar";



function About({size,cate}) {
  
  





   /*
  const [Forms, setForms] = useState({
      page:1,
      us:[],
      loading:false,
      
    });

    const  next =  async()=>{
        try {
  
            let f= await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c140cdf3cda74f0dbf4a8ac9bf240e50&page=1&pageSize=6`)
        
          
          
          let a= await f.json()
 
          console.log(a.articles)
        
   setForms({
    page:1,
    us: a.articles,
    loading:true,
    totalResults:a.totalResults
   })
  
  
        } catch (error) {
          console.log(error)
        }
      }
 
       useEffect(() => {
       next()
      
  
       })


     const forward= async ()=> {

console.log("forward")
  
      //    let f= await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${props.categ}&apiKey=2aa56fea2dc94e049b7b69ccfeb7843e&page=${Forms.page + 1}&pageSize=${props.pagesize}`)
      let f= await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c140cdf3cda74f0dbf4a8ac9bf240e50&${Forms.page + 1}&pageSize=5`)
     
          let s= f
          
          let a= await f.json()
    
         console.log(a.articles)
          setForms({
            page:Forms.page +1 ,
            loading:true,
             us:a.articles,
          
          
          })
       
 
      }



const backward = async (params) =>{
   console.log("back")
 // let f= await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${props.categ}s&apiKey=2aa56fea2dc94e049b7b69ccfeb7843e&page=${Forms.page - 1}&pageSize=${props.pagesize}`)
 let f= await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c140cdf3cda74f0dbf4a8ac9bf240e50&${Forms.page - 1}&pageSize=5`)
     
  
  
  let a= await f.json()

 console.log(a.articles)
  setForms({
    page:Forms.page - 1 ,
    loading:true,
     us:a.articles,

  
  })
  
}

       
 
       console.log(Forms.totalResults)
   const hasMore= async ()=>{
         setForms({page:Form.page + 1})
         props.setprogres(10)
      let f= await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2aa56fea2dc94e049b7b69ccfeb7843e&page=${Forms.page + 1}`)
      props.setprogres(20)
      let s= f
      props.setprogres(50)
      let a= await s.json()

setForms({

  us: Forms.us.concat(a.articles),
  loading:false,
  totalResults:a.totalResults
 })
 
     }
       
console.log(Forms.page)
console.log(Math.ceil(Forms.totalResults/12))
console.log(props.pageSize)

*/  
  
  
  
const [progress, setProgress] = useState(0)
  

const [Fame, setFame] = useState({
page:1,
us:[],
loading:true,
total:0

})

const [articles, setArticles] = useState(0)


const next   = async () =>{
  setProgress(0)
const fet= await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${cate}&apiKey=c140cdf3cda74f0dbf4a8ac9bf240e50&page=1&pageSize=${size}`);


let conv= await fet.json()
setProgress(50)
let fin=  conv.articles
 console.log(conv.totalResults)
setFame({
  page:1,loading:false,
  us:conv.articles,
  
  total:conv.totalResults

})
setProgress(100)
}

useEffect(()=>{
next()
} ,[])


const Nex= async ()=>{
  
  console.log("forward")
  if (Fame.page < Math.ceil(Fame.total / 5)) {
  const fet= await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${cate}&apiKey=c140cdf3cda74f0dbf4a8ac9bf240e50&page=${Fame.page + 1}`);

let conv= await fet.json()


setFame({
  page:Fame.page + 1,
  us:conv.articles,
  loading:true,
  total:conv.totalResults

})
  }

  
}

const prev= async() => {
  console.log("backed")
    
     const fet= await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${cate}&apiKey=c140cdf3cda74f0dbf4a8ac9bf240e50&page=${Fame.page -1}`)

let conv= await fet.json()

setFame({
  page:Fame.page - 1,
  us:conv.articles,
 
  total:conv.totalResults

})
}  
  
  return (
    <><LoadingBar
        color="#f11946"
        progress={progress}
       
      />
      <div>  

        <h1>About</h1>    <div> 
 <ul>
       <li>
      <Link to={"/About/edu"}>EDuca</Link>
        </li>
        <li>
         <Link to={"/About/buss"}>bussi</Link>    
        </li>
      
    </ul>
</div>
<div className='main-api'>
  {Fame.loading && <Spinner/>}
{Fame.us.map((s)=>{

 return(
  
  <>   
<Sample time={s.publishedAt} sources={s.source.name}   url={s.url}  title={s.author}  img={s.urlToImage} des={s.description} />


  {/*<img src={s.urlToImage} width={"240px"} alt="" />
  <div className="data">
<h4>{s.author}</h4>
<p>{s.description}</p>
<a href={s.url} target="_blank" rel="noopener noreferrer">readmore</a>
  </div>
  */}


  </>
 
 
 
  )

})}
<button disabled={Fame.page >= Math.ceil(Fame.total/5)}  onClick={Nex}>NEXT</button>
<button disabled={Fame.page<=1} onClick={prev}>prev</button>
</div>









      </div>
    </>
  )
}

export default About
