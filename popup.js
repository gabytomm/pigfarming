
document.addEventListener("DOMContentLoaded", function () {
    const isPostPage = window.location.pathname.includes("post");
    const visitKey = "postVisits";

    if (isPostPage) {
        let visits = parseInt(localStorage.getItem(visitKey) || "0", 10);
        visits += 1;
        localStorage.setItem(visitKey, visits);

        if (visits >= 2) {
            showPopup();
        }
    }

    function showPopup() {
        const popup = document.createElement("div");
        popup.classList.add("popup");
        popup.id = "popup";
        popup.innerHTML = `
            <div class="popup-content">
                <span class="close-btn" onclick="document.getElementById('popup').remove()">&times;</span>
                <p><strong>Don't Miss Out!</strong></p>
                <p><a href="https://smrturl.co/a/s1a3bf4c209/872?s1=" target="_blank">Get a Free Gift Box Now</a></p>
            </div>
        `;
        document.body.appendChild(popup);

        const popupStyle = document.createElement("style");
        popupStyle.innerHTML = `
            .popup {
                display: block;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.7);
                z-index: 1000;
            }
            .popup-content {
                position: relative;
                background: white;
                margin: 10% auto;
                padding: 20px;
                width: 80%;
                max-width: 400px;
                border-radius: 10px;
                text-align: center;
            }
            .close-btn {
                position: absolute;
                top: 10px;
                right: 20px;
                cursor: pointer;
                font-size: 20px;
            }
        `;
        document.head.appendChild(popupStyle);
    }
});
