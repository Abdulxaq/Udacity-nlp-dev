

const handleSubmit = async (event) => {
    event.preventDefault()
    const webUrl = document.getElementById('name').value;
    const results = document.getElementById('results');
    results.innerHTML = '';
    if (webUrl == '') {
        return alert('Please, enter a LINK to check!')
    }
    const formdata = new FormData();
    formdata.append("key", process.env.API_KEY);
    formdata.append("url", webUrl);
    formdata.append("model", "SocialMedia");

    const requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };
    
    const response = fetch("https://api.meaningcloud.com/class-2.0", requestOptions)
      .then(response => ({
        status: response.status, 
        body:  response.json()
      }))
      .then(({ status, body}) => {
        return status, body
    })
    .then((status, body)=>{
        console.log(status.category_list)
        console.log(status.category_list[0].label)
        console.log(status, body);
        console.log(status.category_list.length);

        results.innerHTML = `
                    <h1>${webUrl}</h1>
                    <div class="tab" >
                        <p>Catygory of website</p>
                        <p>Website catygory in %</p>
                    </div>`
        for (let i = 0; i < status.category_list.length; i++) {
            let div = document.createElement('div')
            let p1 = document.createElement('p')
            let p2 = document.createElement('p')
            p1.textContent = status.category_list[i].label
            p2.textContent = status.category_list[i].relevance
            div.append(p1)
            div.append(p2)
            results.append(div);
            
        }
        // document.getElementById('results').innerHTML = 
        // document.getElementById('results').innerHTML = `
        //                 <div>
        //                     <p>Catygory of website</p>
        //                     <p>Website catygory in %</p>
        //                     <p>Language of website</p>
        //                 </div>
        //                 <div>
        //                     <p>Catygory of website</p>
        //                     <p>Website catygory in %</p>
        //                     <p>Language of website</p>
        //                 </div>
        //                 <div>
        //                     <p>Catygory of website</p>
        //                     <p>Website catygory in %</p>
        //                     <p>Language of website</p>
        //                 </div>`
    })

      .catch(error => console.log('error', error));



}

export { handleSubmit }

