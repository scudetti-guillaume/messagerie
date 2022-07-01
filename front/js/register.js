    registerBtn.addEventListener('click', (e) => {
        e.preventDefault()
        const promise01 = fetch("http://90.49.45.190:3000/api/auth/signup",{
        method: "POST",
        body: JSON.stringify({
            username : username.value,
            email : email.value,
            password : password.value
        }), 
        headers: {"Content-Type": "application/json"}
             }).then(response => response.json())
             .then(data => {
                alert('register success !')
    })
    })