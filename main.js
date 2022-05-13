var contextMenuItem = {
    "id": "Decode",
    "title": "Decode",
    "contexts": ["selection"]
};

chrome.contextMenus.create(contextMenuItem);


chrome.contextMenus.create({
    title: "Decode B64",
    parentId: "Decode",
    id: "Decodex1",
    contexts:["selection"]
});


chrome.contextMenus.create({
    title: "Decode B64x2",
    parentId: "Decode",
    id: "Decodex2",
    contexts:["selection"]
});

chrome.contextMenus.onClicked.addListener(function (clickData) {
        if (clickData.menuItemId == "Decodex1") {
            var query = clickData.selectionText;
            chrome.tabs.create({url: atob(query)});
            console.log("Opening " + atob(query) + " in a new Tab!"); 
        }
        else if (clickData.menuItemId == "Decodex2") {
            var query = clickData.selectionText;
            chrome.tabs.create({url: atob(atob(query))});
            console.log("Opening " + atob(atob(query)) + " in a new Tab!");
        }
	}
);

