// Generate and display a JWT token
function generateToken() {
    // Encode a JWT token
    function encodeToken(payload, secret) {
        const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
        const encodedPayload = btoa(JSON.stringify(payload));
        const signature = btoa(header + '.' + encodedPayload + '.' + secret);
        return header + '.' + encodedPayload + '.' + signature;
    }

    // Decode a JWT token
    function decodeToken(token, secret) {
        const parts = token.split('.');
        const encodedPayload = parts[1];
        const decodedPayload = atob(encodedPayload);
        return JSON.parse(decodedPayload);
    }

    const secret = 'your_secret_key';
    const payload = { userId: 123, username: 'john.doe' };
    const token = encodeToken(payload, secret);

    const tokenElement = document.createElement('p');
    tokenElement.style.width = "50%";
    tokenElement.textContent = 'JWT Token: ' + token;
    const element = document.querySelector("#token");
    element.innerHTML = '';
    element.appendChild(tokenElement);

    try {
        const decoded = decodeToken(token, secret);
        console.log('Decoded Token:', decoded);
    } catch (error) {
        console.error('Token verification failed:', error.message);
    }
}
