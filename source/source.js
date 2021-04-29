let run = async () => {
  let count = 0, btn = document.body.querySelectorAll(".nim-dialog--close"),
    timeout = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  
  for (let i = 0; i < btn.length; i++) {
    await timeout(50)
    btn.item(i).click()
  }
  
  let name = document.body.getElementsByClassName('_im_dialog_link'),
    list = document.body.getElementsByClassName('popup_box_container');
  
  for (let i = 0; i < list.length; i++) {
    if (list.item(i).getElementsByClassName('box_title')?.[0].textContent !== 'Leave chat') {
      list.item(i).getElementsByClassName('flat_button')?.[1].click()
      console.log('Removed', name.item(i)?.textContent)
      count++
    } else {
      list.item(i).getElementsByClassName('flat_button')?.[0].click()
    }
    await timeout(20)
  }
  
  console.log('Removed:', count, 'chats')
}

run()