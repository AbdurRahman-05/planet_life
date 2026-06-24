"use strict";

async function main() {
    try {
        console.log("Fetching live api...");
        const res = await fetch("https://planetlifeholidays.com/api/content/about");
        if (!res.ok) {
            console.log("Failed to fetch. Status:", res.status);
            return;
        }
        const data = await res.json();
        console.log("API response:");
        console.log(JSON.stringify(data, null, 2));
    } catch (e) {
        console.error("Error:", e);
    }
}

main();
