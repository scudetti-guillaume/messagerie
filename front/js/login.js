loginBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const promise01 = fetch("http://90.49.45.190:3000/api/auth/login",{
                    method: "POST",
                    body: JSON.stringify({
                        email : email.value,
                        password : password.value
                    }), 
                    headers: {"Content-Type": "application/json"}
                        }).then(response => response.json())
                        .then(data => {
                            if(data.userId != undefined){
                                window.location.href= `./talk?user_id=${data.userId}`
                            }
            })
    })
