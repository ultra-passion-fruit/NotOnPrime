// "Apple" card
// class = "TQc1id rhstc4"

// Show/Movie card
// class = "TQc1id IVvPP Jb0Zif rhstc4"

// "Premium Subscription" div under the "Watch Now" and Logo
// class = "ZYHQ7e hWgrdb ApHyTb"

// class = "fOYFme"
//  - <a jscontroller="JredFd" href="apple.com/primevidoe.. etc" ... >
//  - class "Fjeoze"
//      - Logo
//      - Watch Now
//      - Price, or "Premim Subscription"

// Cow card
// class = "TQc1id IVvPP Jb0Zif rhstc4"


const streamingInfo = Array.from(document.getElementsByClassName('fOYFme'))[0];

const linkToStreamingService = streamingInfo.firstElementChild.href;

console.log(streamingInfo);

console.log(linkToStreamingService);

if (linkToStreamingService.includes("primevideo.com")) {
    
    let streamText = streamingInfo.firstElementChild.firstChild.childNodes[5];
    
    if (streamText.textContent.includes("Premium subscription")) {
        streamText.textContent = "Not included with Prime"
    }

    console.log(streamText);
    
}

