const button = document.getElementById("test")



button.addEventListener("click", async function(){
    const suppresionSection = document.querySelector("section")
    if(suppresionSection){

        suppresionSection.remove()
    }



    try {
        const reponse = await fetch("https://thatsthespir.it/api")
        console.log("test", reponse)

        
        const data = await reponse.json()
        console.log("donne JSon", data)



            const section = document.createElement("section")
            const figure = document.createElement("figure")
            const blockquote = document.createElement("blockquote")
            const h1 = document.createElement("h1")
            h1.textContent = data.quote

            const figcaption = document.createElement("figcaption")
            const div = document.createElement("div")
            div.classList.add("photo-citation")
            div.style.backgroundImage = `url('${data.photo}')`
            const address = document.createElement("address")
            address.textContent = "-"
            const a = document.createElement("a")
            a.textContent = data.author







            document.body.appendChild(section)
            section.appendChild(figure)
            figure.appendChild(blockquote)
            blockquote.appendChild(h1)
            section.appendChild(figcaption)
            figcaption.appendChild(div)
            blockquote.appendChild(address)
            blockquote.appendChild(div)
            address.appendChild(a)

            
        



    }catch (error) {

    
    }



})







