chrome.commands.onCommand.addListener(command => {
    if (command !== 'switch-tab-and-toggle-mic') {
        return false;
    }

    chrome.tabs.query({ url: 'https://meet.google.com/*' }, tabs => {
        if (tabs.length > 0) {
            const [tab] = tabs;

            chrome.windows.update(tab.windowId, { focused: true });
            chrome.tabs.update(tab.id, { active: true });
            chrome.tabs.executeScript(tab.id, {
                file: './toggleMute.js',
            });
        }
    });
});
