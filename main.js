const start=async(id)=>{
    const url = 'https://ytstream-download-youtube-videos.p.rapidapi.com/dl?id='+id;
    const options = {
    method: 'GET',
    headers: {
    'X-RapidAPI-Key': '31b8c38e94msh5e4056f5e2a300dp12eb5djsn0004508ffb52',
    'X-RapidAPI-Host': 'ytstream-download-youtube-videos.p.rapidapi.com'
    }
    };
    
    try {
    const response = await fetch(url, options);
    const result = await response.json();
    for(item of result.adaptiveFormats){
      if(item.quality=='hd720'){
btn.style.display='block'
download.href=item.url
      }
    else if (item.quality == 'medium') {
              btn2.style.display = 'block'
              download2.href=item.url
            }
            else if (item.quality == 'small') {
              btn3.style.display = 'block'
              download3.href = item.url
            }
    }
    card.style.display='block'

    
    title.innerHTML=result.title
    thumbnail.src=result.thumbnail[1].url
    
    
    
    console.log(result);
    } catch (error) {
      card.style.display = 'none'
      btn.style.display = 'none'
      btn2.style.display = 'none'
      alert('Sorry we failed to fetch links. Please check link and other things...')
    console.error(error);
    }
    
    }
    function idget(){
    
    let idtext=url.value.replace("https://youtu.be/","")
    
    start(idtext)
    
    }
    function cardrun(){
      window.open(url.value)
    }
    function inforun(){
      let infom = document.getElementById('infom')
      infom.innerHTML='Made by Gourav Saini'
      setTimeout(()=>{
infom.innerHTML='YouTube Video Downloader'
      },3000)
      
    }
  