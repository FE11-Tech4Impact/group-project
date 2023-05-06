export function login() {
    //Mengambil element dengan id xhr-5-result
    const result = document.querySelector("#xhr-5-result")

    //Memanggil function onClickGet dengan argumen dari variable result
    onClickGet(result)
    
    //Memanggil function onClickReset dengan argumen dari variable result
    onClickReset(result)
}

function onClickGet(result) {
    //Inisiasi event listener dengan target dari hasil query selector yang mengambil element demgan id xhr-3
    document.querySelector('#xhr-5').addEventListener('click', async () => {
        //Inisiasi pada variable result konten yang berupa text akan diberi nilai kosong
        let email = document.querySelector('#email').value
        let password = document.querySelector('#password').value

        console.log(email, password)

        result.textContent = '';

        //Inisiasi try catch strategi untuk menghandle error
        try {
            //Inisiasi pemanggilan API
            let response = await fetch('https://6454643dc18adbbdfeb53cd7.mockapi.io/api/fe-11/accounts')
            
            //Handle apabila response tidak oke
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }

        //     //Handle apabila response oke
            result.innerHTML = parseResponse(await response.json(), email, password)
        } catch(error) {
            // Handle response error
            result.innerHTML = error
        }
    })
}


function parseResponse(responseJSON, email, password) {
    for (let i=0; i<responseJSON.length; i++) {
        if (responseJSON[i].email == email && responseJSON[i].password == password) {
            window.location.replace('index.html');
        }
    }
   

}