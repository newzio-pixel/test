(function () {
    // Function to set a cookie
    function setCookie(name, value, days) {
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/; SameSite=Lax;";
    }

    // Function to check for specific query parameters
    function hasParams() {
        const urlParams = new URLSearchParams(window.location.search);
        const paramsToCheck = ['2pau', '2ptt', '2ptu', '2prp', '2pdlst'];
        
        return paramsToCheck.some(param => urlParams.has(param));
    }

    // Automatically run the logic on page load
    if (hasParams()) {
        const currentTime = new Date().toISOString(); // Get current time in ISO format
        const randomValue = Math.random().toString(36).substring(2, 15); // Generate a random value
        const cookieValue = JSON.stringify({ time: currentTime, random: randomValue }); // Create a cookie value

        setCookie('_twoAttr', cookieValue, 7); // Set the cookie to expire in 7 days
        console.log(`Cookie '_twoAttr' created with value: ${cookieValue}`); // Log the created cookie for debugging
    }
})();
