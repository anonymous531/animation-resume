var result = `
/*
    面试官，你好，我是唐静如
    只用文字作自我介绍太单调了，
    我用代码来做自我介绍吧，
    首先准备一些样式
*/
    *{transition:all 1.5s}
    html{
        background-color:#eee;
        height:100%;
    }
    #code{
        border:1px solid black;
        padding:16px;
        font-size:16px;
    }
/*下面我想让代码高亮*/
    .token.selector{
        color:#690;
    }
    .token.punctuation{
        color:#999;
    }
    .token.property{
        color:#905;
    }
    .token.comment{
        color: slategray;
    }
/*加点3D效果*/
    .wrapper{
        transform:rotate(360deg)
    }
`
let n = 0
var wrapper = document.querySelector('.wrapper')
var id = setInterval(()=>{
    n += 1
    code.innerHTML = result.substring(0,n)
    code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css, 'css');
    styleTag.innerHTML = result.substring(0,n)
    code.scrollTop = 10000
    if(n >= result.length){
        window.clearInterval(id)
        fn2()
        fn3(result)
    }
},10)
function fn2(){
    var paper = document.createElement('div')
    paper.className = 'paper'
    wrapper.appendChild(paper)
    var content = document.createElement('pre')
    content.className = 'content'
    paper.appendChild(content)
}
function fn3(preResult){
    var result2 = `
/*接下来我需要一张纸*/
    .paper{
        height:100px;
        width:100px;
        background:red;
    }
    `
    let n = 0;
    var clock1 = setInterval(()=>{
        n += 1
        code.innerHTML = preResult + result2.substring(0,n)
        code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css, 'css');
        styleTag.innerHTML = preResult + result2.substring(0,n)
        code.scrollTop = 10000
        if(n >= result2.length){
            window.clearInterval(clock1)
        }
    },10)
}


