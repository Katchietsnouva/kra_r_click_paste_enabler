// ==UserScript==
// @name         Enable Paste for Password Field
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Enable the paste functionality on the password field
// @author       You
// @match        *://*/*  // Adjust this if you know the specific site URL
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Wait until the page has fully loaded
    window.addEventListener('load', function() {
        // Select the input field by its ID (logid in your case)
        var inputElement = document.getElementById('logid');

        if (inputElement) {
            // Remove the event listener that blocks pasting
            inputElement.removeEventListener('keydown', passkey_downHandler);
            
            // You can also explicitly allow paste (by disabling the blocking script entirely)
            inputElement.onpaste = null;
        }
    });
})();
