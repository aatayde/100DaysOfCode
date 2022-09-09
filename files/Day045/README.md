# Day 45

## :cookie: What is an [HTTP Cookie](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)?

## TLDR

Cookies are self destructing peices of data saved in client storage to be used by the server at a later request.


    A peice of data that a server sends to a user's web browser.

    The browser may store the cookie & send back to the same server with later requests.

    Typically an HTTP cookie is used to tell if two request came from the same browser. 

    Cookies are sent with every request, so this can worsen performance.

    Modern storage APIs are recommended.
    

### Recomended storage
- [indexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)
- [Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API) (localStorage, sessionStorage)
    
### Cookies are used mainly for 3 things.
1. session management
    - logins
    - shopping carts
    - game scores
    - anything else the server should remember

2. personalization
    - user preferences
    - themes
    - other user settings

3. tracking 
    - recording & analyzing behavior



## How to use an HTTP Cookie???
create a cookie by using the `Set-Cookie` response header


## Thoughts / Planning
use cookies to greet new & returning users with a unique message. Welcome! & Welcome Back!

use last visited date to update the user on whats new 

