// data structure to store website information
let hashMap = [
    {logo: 'A', link: 'https://www.acfun.cn'},
    {logo: 'B', link: 'https://www.bilibili.com'},
    {logo: 'C', link: 'https://www.cnn.com'}
]

function createEl(logo, link) {
  let $html = $(`
  <li>
    <div class="site">
      <div class="logo">${logo}</div>
      <div class="link">${link}</div>
      <div class="close">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-close"></use>
      </svg>
      </div>
    <div>
  </li>
  `)
  //hashMap.append({logo: logo, link: link});
  return $html
}

function render(hashMap) {
  $('.globalMain .siteList .site').remove();
  hashMap.forEach((el, index) => {
    const $html = createEl(el.logo, el.link);
    $('.globalMain .siteList').prepend($html);
    //console.log($html)

    $html.click(()=>{
      window.open(el.link);
    })

    $html.on('click', '.close',(e)=>{
      e.stopPropagation();
      hashMap.splice(index, 1);
      console.log(hashMap);
      render(hashMap);
    })
  })
}

render(hashMap);

$('.globalMain .addButton').click((e)=>{
  let link = window.prompt("请输入网址");
  logo = link[0];
  //, link);
  hashMap.push({logo: logo, link: link});
  render(hashMap);
})
