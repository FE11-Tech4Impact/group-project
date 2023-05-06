export function register() {
    //Mengambil element dengan id xhr-5-result
    const result = document.querySelector("#xhr-6-result")

    //Memanggil function onClickGet dengan argumen dari variable result
    onClickGet(result)
    
    //Memanggil function onClickReset dengan argumen dari variable result
    onClickReset(result)
}

function onClickGet(result) {
    //Inisiasi event listener dengan target dari hasil query selector yang mengambil element demgan id xhr-3
    document.querySelector('#xhr-6').addEventListener('click', async () => {
        //Inisiasi pada variable result konten yang berupa text akan diberi nilai kosong
        let username = document.querySelector('#username')
        let email = document.querySelector('#email')
        let password = document.querySelector('#password')

        console.log(username,email, password)

        result.textContent = '';

        //Inisiasi try catch strategi untuk menghandle error
        try {
            //Inisiasi pemanggilan API
            let response = await fetch('https://6454643dc18adbbdfeb53cd7.mockapi.io/api/fe-11/accounts', 
            {
                method: "POST",
                body: JSON.stringify({
                  username: "han",
                  email: "hidayatulnh@gmail.com",
                  password : "12345678"
                }),
                headers: {
                  "Content-type": "aplication/json"
                }
            });
            
            //Handle apabila response tidak oke
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }

        //     //Handle apabila response oke
            result.innerHTML = parseResponse(await response.json(), username, email, password)
        } catch(error) {
            // Handle response error
            result.innerHTML = error
        }
    })
}


function parseResponse(responseJSON, username, email, password) {
    for (let i=0; i<responseJSON.length; i++) {
        if (responseJSON[i].email == email && responseJSON[i].password == password) {
            localStorage.setItem("LoginStatus", true)
            return "LOGIN SUCCESS"
        }
    }
    return "LOGIN FAILED"
}