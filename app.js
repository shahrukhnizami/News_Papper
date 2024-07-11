

const newsPaper = async()=>{
    try{
        const paper = await fetch("https://newsapi.org/v2/everything?q=tesla&from=2024-06-11&sortBy=publishedAt&apiKey=c818dcc168014f0d9993b1d7325bb77e")
        const data = await paper.json();
        
        // console.log(data.articles[0].title);
        // console.log(data.articles[0].publishedAt )
        let newsdiv = document.getElementById("news")
        
        var news = data.articles
        console.log(news);
      

        for (let i = 0; i< news.length; i++) {
            
            
        //   console.log (news[i].description)
        //   console.log (news[i].urlToImage)
          
          var newsBlock = `
           <div  class="col-12 col-lg-4 col-md-4 col-sm-6 py-2">  
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <a  target="_blank" href="${news[i].url}"><img class="w-full" src="${news[i].urlToImage}"></a>
          <div class="px-3 py-4">
            <div class="font-bold text-xl mb-2"><a herf="${news[i].url}"><h1>"${news[i].title.slice(0,30)}"</h1></a></div>
            <p class="text-gray-700 text-base">
              ${news[i].description.slice(0, 250)}
            </p>
           
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Source => ${news[i].author}</span><br>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Date Post => ${news[i].publishedAt.slice(0, 10)}</span>
          </div>
          </div>
        
      </div>`
      newsdiv.innerHTML+= newsBlock;

           
        }



        }
        
    
    catch(err){
        console.log(err)
    }
}

newsPaper()
