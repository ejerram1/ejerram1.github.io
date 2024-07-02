fetch('https://api.github.com/repos/nsherm01/audioSideChannelAttack/readme')
    .then(response => response.json())
    .then(data => {
        // Decode the base64 data to a string
        var readme = atob(data.content);

        // Display the README on your site
        var readmeElement = document.getElementById('audiosidechannel');
        readmeElement.innerHTML = readme;
    })
    .catch(error => console.error('Error:', error));