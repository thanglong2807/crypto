$(document).ready(function () {

    $('#check-navbar').on('click', function () {
        
        $('.header-list').toggleClass("active_header");
    });

    
    ////////////////////////////////
    function updateClock() {
        var now = new Date(); // Lấy giờ hiện tại
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();
        // Định dạng giờ
        if (hours < 10) {
            hours = '0' + hours;
        }
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        // Cập nhật giờ trên trang web
        $('#hours').html(hours);
        $('#minutes').html(minutes);
        $('#seconds').html(seconds);
    }
    setInterval(updateClock, 1000)

    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Get the input field values
        const userName = $('#userName').val();
        const userEmail = $('#userEmail').val();
        const userPassword = $('#userPassword').val();
        const checkPassword = $('#checkPassword').val();
        if(!userName || !userEmail || !userPassword || !checkPassword){
            alert('Enter enough information')
            return
        }
        // Validate the form
        if (userPassword !== checkPassword) {
            alert("Passwords must match");
            return;
        }
    
        // Retrieve existing users from localStorage or initialize an empty array
        const existingUsersJSON = localStorage.getItem('users');
        let existingUsers = existingUsersJSON ? JSON.parse(existingUsersJSON) : [];
    
        // Add the new user to the array
        const newUser = {
            name: userName,
            email: userEmail,
            password: userPassword
        };
        existingUsers.push(newUser);
    
        // Save the updated array to localStorage
        localStorage.setItem('users', JSON.stringify(existingUsers));
    
        // Notify the user that their registration was successful
        alert('Registration successful!');
        $('#userName').val('')
        $('#userEmail').val('')
        $('#userPassword').val('')
        $('#checkPassword').val('')
    };
   
    const usersJSON = localStorage.getItem('users');
    if (usersJSON) {
        const users = JSON.parse(usersJSON);
        console.log(users);
    }
    
    $('#handleSubmit').on('submit', handleSubmit);
 
    // 
    $('.creacted-handle-btn').on('click', function (e) {
        $('.creacted-handle-btn').removeClass('creacted-handle-btn-active');
        $(this).addClass('creacted-handle-btn-active');

        $('.creacted-handle-number').removeClass('handle-number-active');
        $(this).find('.creacted-handle-number').addClass('handle-number-active');
    });


})
