# Vk Automation
Made by @ifrosta [GitHub](https://github.com/iFrosta) [Website](https://ifrosta.com)

## Instruction:
1. Open your vk.com/im
2. Scroll down to load more chats
2. Open browser console
3. Paste the code below
4. Wait for the code to execute
5. All done 😉

## Delete ONLY chats
```javascript
let run=async()=>{let a=0,b=document.body.querySelectorAll(".nim-dialog--close"),c=a=>new Promise(b=>setTimeout(b,a));for(let a=0;a<b.length;a++)await c(50),b.item(a).click();let d=document.body.getElementsByClassName("_im_dialog_link"),e=document.body.getElementsByClassName("popup_box_container");for(let b=0;b<e.length;b++)"Leave chat"===e.item(b).getElementsByClassName("box_title")?.[0].textContent?e.item(b).getElementsByClassName("flat_button")?.[0].click():(e.item(b).getElementsByClassName("flat_button")?.[1].click(),console.log("Removed",d.item(b)?.textContent),a++),await c(20);console.log("Removed:",a,"chats")};run();
```

## Delete chats and groups (without checkmark)
```javascript
let run=async()=>{let a=0,b=document.body.querySelectorAll(".nim-dialog--close"),c=a=>new Promise(b=>setTimeout(b,a));for(let a=0;a<b.length;a++)await c(50),b.item(a).click();let d=document.body.getElementsByClassName("_im_dialog_link"),e=document.body.getElementsByClassName("popup_box_container");for(let b=0;b<e.length;b++)"Leave chat"===e.item(b).getElementsByClassName("box_title")?.[0].textContent?e.item(b).getElementsByClassName("flat_button")?.[1].click():(e.item(b).getElementsByClassName("flat_button")?.[1].click(),console.log("Removed",d.item(b)?.textContent),a++),await c(20);console.log("Removed:",a,"chats")};run();
```

2021